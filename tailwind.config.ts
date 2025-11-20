import type { Config } from "tailwindcss";

const config: Config = {
  // ▼▼▼ 다크 모드 핵심 설정 ▼▼▼
  darkMode: "class",
  
  content: [
    // ▼▼▼ Tailwind가 감시할 파일 경로들 ▼▼▼
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;