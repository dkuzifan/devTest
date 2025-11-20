// src/components/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // 1. 스위치 가져오기

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Tailwind 팁: dark:속성 -> 다크모드일 때 적용될 스타일 */}
      
      <div className="font-bold text-xl">내 웹사이트</div>
      
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          홈
        </Link>
        <Link href="/about" className="text-blue-500 hover:text-blue-700">
          소개
        </Link>
        
        {/* 2. 스위치 설치 */}
        <ThemeToggle />
      </div>
    </nav>
  );
}