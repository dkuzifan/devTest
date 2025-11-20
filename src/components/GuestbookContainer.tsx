// src/components/GuestbookContainer.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Post = {
  id: number;
  content: string;
  nickname: string;
  created_at: string;
};

export default function GuestbookContainer({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  // [1. 불러오기] 서버 데이터가 바뀌거나, 페이지가 처음 뜰 때 실행
  useEffect(() => {
    // 우선 서버 데이터로 초기화
    let currentPosts = initialPosts;

    // 개발 환경이라면? 세션 저장소(Session Storage) 확인!
    if (process.env.NODE_ENV === "development") {
      const savedData = sessionStorage.getItem("my_session_posts");
      
      if (savedData) {
        const sessionPosts = JSON.parse(savedData);
        // 서버 데이터 앞에 세션(가짜) 데이터를 합침
        currentPosts = [...sessionPosts, ...initialPosts];
      }
    }
    
    // 합쳐진 데이터로 화면 업데이트
    setPosts(currentPosts);
  }, [initialPosts]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !nickname) return alert("내용을 입력해주세요!");

    const isDev = process.env.NODE_ENV === "development";

    if (isDev) {
      // [2. 저장하기] 개발 환경: 세션 저장소에 저장 (탭 닫으면 사라짐)
      const fakePost = {
        id: Date.now(),
        content: content,
        nickname: nickname,
        created_at: new Date().toISOString(),
      };

      // 1) 화면 즉시 업데이트
      setPosts([fakePost, ...posts]);

      // 2) 세션 스토리지 업데이트
      const existingData = sessionStorage.getItem("my_session_posts");
      const existingPosts = existingData ? JSON.parse(existingData) : [];
      
      const newSessionPosts = [fakePost, ...existingPosts];
      sessionStorage.setItem("my_session_posts", JSON.stringify(newSessionPosts));

      console.log("개발 모드: 세션 스토리지에 저장됨 (새로고침 유지 / 탭 닫으면 삭제)");

      setContent("");
      setNickname("");
      return; 
    }

    // --- 배포 환경 (실제 DB 저장) ---
    const { error } = await supabase
      .from("guestbook")
      .insert([{ content, nickname }]);

    if (!error) {
      alert("🎉 방명록이 등록되었습니다!");
      setContent("");
      setNickname("");
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="p-2 border rounded w-1/4 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="방명록을 남겨주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border rounded w-3/4 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition font-bold">
          등록하기
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <p className="text-lg mb-2">{post.content}</p>
            <div className="text-sm text-gray-500 text-right">
              by {post.nickname} ({new Date(post.created_at).toLocaleDateString()})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}