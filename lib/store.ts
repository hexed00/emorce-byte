export type Account = {
  id: string;
  token?: string;
  username: string;
  tag: string;
  avatar: string | null;
  status: string;
  hosted: boolean;
  prefix: string;
  userId?: string;
  createdAt: string;
};
const g = globalThis as any;
if (!g.__emorceAccounts) g.__emorceAccounts = [] as Account[];
export function getAccounts(): Account[] { return g.__emorceAccounts; }
export function setAccounts(a: Account[]) { g.__emorceAccounts = a; }
export function freeSlots() { return 5; }
