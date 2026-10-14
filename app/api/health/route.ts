import { NextResponse } from 'next/server';
import { getAccounts, freeSlots } from '@/lib/store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const accounts = getAccounts();
  const online = accounts.filter((a) => a.status === 'online' || a.status === 'connecting').length;
  return NextResponse.json({
    ok: true,
    online,
    total: accounts.length,
    freeSlots: freeSlots(),
    mode: 'dashboard',
    note: 'Token hosting runs on the Emorce worker process.',
  });
}
