// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-200 flex justify-between items-center">
      <div className="font-bold text-xl">내 웹사이트</div>
      <div className="space-x-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          홈
        </Link>
        <Link href="/about" className="text-blue-500 hover:text-blue-700">
          소개
        </Link>
      </div>
    </nav>
  );
}