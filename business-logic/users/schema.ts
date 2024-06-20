import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const user = pgTable('user', {
  id: serial('id'),
  name: text('name'),
  email: text('email'),
  role: text('role').$type<'admin' | 'customer'>(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
