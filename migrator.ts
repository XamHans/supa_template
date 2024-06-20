import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

async function initConnection() {
  if (!process.env.DB_CONNECTION_URL)
    throw new Error('DB_CONNECTION_URL env var is not set');
  const connection = await postgres(process.env.DB_CONNECTION_URL);
  return connection;
}

async function runMigration() {
  const connection = await initConnection();
  const db = drizzle(connection);

  await migrate(db, { migrationsFolder: './migrations' });
  await connection.end();
}

runMigration().catch(console.error);
