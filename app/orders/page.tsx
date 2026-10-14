'use client';
import Sidebar from '@/components/Sidebar';
export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar onlineCount={1453} />
      <main className="flex-1 p-8">
        <div className="mb-2 text-xs tracking-[0.2em] text-muted uppercase">orders</div>
        <h1 className="text-3xl font-extrabold mb-4">Orders.</h1>
        <p className="text-muted text-sm">Coming soon — Emorce Byte orders.</p>
      </main>
    </div>
  );
}
