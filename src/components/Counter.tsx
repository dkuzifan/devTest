// src/components/Counter.tsx
"use client"; // ★중요★: 이 부품은 브라우저에서 클릭 상호작용을 합니다!

import { useState } from "react"; // 1. 리액트에서 상태 관리 기능을 가져옵니다.

export default function Counter() {
  // 2. State 만들기
  // count: 현재 숫자 (읽기 전용)
  // setCount: 숫자를 바꾸는 리모컨 (함수)
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white max-w-xs mx-auto">
      <h2 className="text-xl font-bold mb-4">숫자 세기</h2>
      
      <div className="text-6xl font-bold text-blue-600 mb-6">
        {count}
      </div>

      <div className="flex space-x-4">
        {/* 3. 감소 버튼 */}
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          - 1
        </button>

        {/* 4. 증가 버튼 */}
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          + 1
        </button>
      </div>
    </div>
  );
}