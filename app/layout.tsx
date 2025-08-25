import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "이아소 에스테틱 | 10년 전통 24년 경력의 전문 뷰티 케어",
  description: "24년 경력의 전문가가 제공하는 황금비율 안면관리, EXbody 체형교정, 피부 디톡스 관리. 경기 고양시 덕양구 새롬프라자 8층. 예약 상담 0507-1447-3778",
  keywords: "이아소 에스테틱, 고양시 에스테틱, 안면관리, 체형교정, 피부관리, EXbody, 황금비율, 디톡스, 새롬프라자",
  authors: [{ name: "이아소 에스테틱" }],
  creator: "이아소 에스테틱",
  publisher: "이아소 에스테틱",
  openGraph: {
    title: "이아소 에스테틱 | 10년 전통 24년 경력",
    description: "24년 경력의 전문가가 제공하는 3대 핵심 관리 프로그램으로 당신만의 아름다움을 완성해 드립니다.",
    url: "https://iaso-aesthetic.com",
    siteName: "이아소 에스테틱",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    other: {
      'naver-site-verification': 'your-naver-verification',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://iaso-aesthetic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
