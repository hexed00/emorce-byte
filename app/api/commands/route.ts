import { NextResponse } from 'next/server';
import commands from '@/data/commands.json';

export async function GET() {
  return NextResponse.json({ commands, count: (commands as any[]).length });
}
