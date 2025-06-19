import React from 'react';
import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({ subsets: ['hebrew'] });

export const metadata: Metadata = {
  title: 'תיאוריה בדרך',
  description: 'שלוט בכביש עם שיעורים אינטראקטיביים, מעקב התקדמות בזמן אמת וסימולציות של מבחני תיאוריה.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  );
} 