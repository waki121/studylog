import { DataSource } from 'typeorm';
import Entities from '@/database/entities/Entities';

export default async function () {
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: true,
    entities: Entities,
  });

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
}
