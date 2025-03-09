import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();
export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  entities: ['database/entities/*.ts'],
  migrations: ['database/migrations/*.ts'],
});
