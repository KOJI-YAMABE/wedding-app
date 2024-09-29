import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Happy Wedding App",
    description: "画像を投稿して、お祝いを送るアプリ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
