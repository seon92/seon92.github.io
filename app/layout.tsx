import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SEON HO LEE',
  description:
    'Applied Scientist at Amazon AGI working on multimodal foundation models, video understanding, and efficient long-context modeling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
