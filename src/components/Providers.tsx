// src/components/Providers.tsx
"use client"; // 브라우저에서 작동하는 기능

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  // attribute="class" : 다크모드일 때 HTML 태그에 class="dark"를 붙여줘! 라는 뜻
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}