import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory Escape | おぼえて、だっしゅつ！",
  description: "ボムの位置を記憶して、見えなくなった盤面をゴールまで進む iOS 記憶パズルゲーム。",
  openGraph: {
    title: "Memory Escape | おぼえて、だっしゅつ！",
    description: "数秒の記憶をたよりに、ひよこと一緒にゴールを目指そう。",
    images: [{ url: "/og.png", width: 1731, height: 908, alt: "Memory Escape" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Escape | おぼえて、だっしゅつ！",
    description: "数秒の記憶をたよりに、ひよこと一緒にゴールを目指そう。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
