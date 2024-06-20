import type { Config } from 'drizzle-kit';
export default {
  schema: './business-logic/**/schema.ts',
  out: './migrations',
} satisfies Config;
