// src/app/page.tsx
import Link from "next/link";
import Counter from "@/components/Counter"; // 1. 카운터 가져오기

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 space-y-10">
      {/* 제목 영역 */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          Hello, Next.js!
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 mb-8">
        {/* ▲ dark:text-gray-300 추가 (다크모드일 땐 밝은 회색으로) */}
        내가 직접 만든 첫 번째 페이지입니다.
      </p>
      </div>

      {/* 2. 카운터 설치 */}
      <Counter />

      {/* 링크 버튼 */}
      <Link 
        href="/about" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        소개 페이지로 이동하기 &rarr;
      </Link>
    </div>
  );
}