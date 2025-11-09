import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export const dbConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'blog_user',
  password: process.env.DB_PASSWORD || 'blog_password',
  database: process.env.DB_NAME || 'blog_db',
};

export async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ Database connected successfully');
    return connection;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

export async function createPool() {
  try {
    const pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log('✅ Database pool created successfully');
    return pool;
  } catch (error) {
    console.error('❌ Database pool creation failed:', error);
    throw error;
  }
}