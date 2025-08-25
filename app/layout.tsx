import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이아소에스테틱 | 10년 전문 에스테틱 케어",
  description: "경기 고양시 화정에서 10년째 운영하는 전문 에스테틱. 황금비율 안면관리, 골반균형 체형교정, 피부 디톡스 전문. 24년 경력의 전문가가 직접 관리합니다.",
  keywords: "이아소에스테틱, 고양시 에스테틱, 화정 피부관리, 안면관리, 체형교정, 피부디톡스, 셀큐라스피큘, 골반교정, 아토피관리",
  authors: [{ name: "이아소에스테틱" }],
  creator: "이아소에스테틱",
  publisher: "이아소에스테틱",
  openGraph: {
    title: "이아소에스테틱 | 10년 전문 에스테틱 케어",
    description: "황금비율 안면관리, 골반균형 체형교정, 피부 디톡스 전문. 24년 경력의 전문가가 직접 관리합니다.",
    url: "https://iaso-aesthetic.com",
    siteName: "이아소에스테틱",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "이아소에스테틱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이아소에스테틱 | 10년 전문 에스테틱 케어",
    description: "황금비율 안면관리, 골반균형 체형교정, 피부 디톡스 전문. 24년 경력의 전문가가 직접 관리합니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      naver: "your-naver-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
