// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-10 flex flex-col items-start">
      <h1 className="text-4xl font-bold text-green-600">
        소개 페이지 (About)
      </h1>
      <p className="mt-4 mb-8">
        이곳은 src/app/about/page.tsx 파일이 보여지는 곳입니다.
        <br />
        폴더 이름이 주소가 되었습니다!
      </p>

      {/* 홈으로 돌아가는 버튼 */}
      <Link 
        href="/" 
        className="text-green-600 underline hover:text-green-800"
      >
        &larr; 홈으로 돌아가기
      </Link>
    </div>
  );
}