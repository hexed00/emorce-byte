import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Emorce Byte — Your Discord. Powered by Emorce.',
  description: 'Host Discord accounts 24/7 with full selfbot command suite.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-void antialiased">{children}</body>
    </html>
  );
}
