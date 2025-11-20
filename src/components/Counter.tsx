// src/components/Counter.tsx
"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6"; // 1. 아이콘 가져오기 (fa6 = Font Awesome 6)

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    // ▼ bg-white 뒤에 dark:bg-gray-700 추가
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 max-w-xs mx-auto">
      
      <h2 className="text-xl font-bold mb-4">숫자 세기</h2>
      
      {/* 숫자 색상도 다크모드에선 흰색으로 잘 보이게 조정 */}
      <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        {count}
      </div>

      <div className="flex space-x-4">
        {/* 감소 버튼 */}
        <button
          onClick={() => setCount(count - 1)}
          className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center justify-center"
        >
          {/* 2. 글자 대신 아이콘 넣기 */}
          <FaMinus size={20} />
        </button>

        {/* 증가 버튼 */}
        <button
          onClick={() => setCount(count + 1)}
          className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center justify-center"
        >
          {/* 2. 글자 대신 아이콘 넣기 */}
          <FaPlus size={20} />
        </button>
      </div>
    </div>
  );
}