import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ username: 'vx2r', tag: 'vx2r', avatar: null, slots: 5 });
}
