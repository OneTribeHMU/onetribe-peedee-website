import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const migrations = [
  // Migration 0000: Users table
  `CREATE TABLE IF NOT EXISTS \`users\` (
    \`id\` varchar(64) NOT NULL,
    \`name\` text,
    \`email\` varchar(320),
    \`loginMethod\` varchar(64),
    \`role\` enum('user','admin') NOT NULL DEFAULT 'user',
    \`createdAt\` timestamp DEFAULT (now()),
    \`lastSignedIn\` timestamp DEFAULT (now()),
    CONSTRAINT \`users_id\` PRIMARY KEY(\`id\`)
  )`,

  // Migration 0001: Blog Posts table
  `CREATE TABLE IF NOT EXISTS \`blogPosts\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`authorId\` varchar(64) NOT NULL,
    \`title\` varchar(300) NOT NULL,
    \`slug\` varchar(300) NOT NULL,
    \`content\` text NOT NULL,
    \`excerpt\` text,
    \`image\` varchar(500),
    \`published\` boolean DEFAULT false,
    \`createdAt\` timestamp DEFAULT (now()),
    \`updatedAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`blogPosts_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`blogPosts_slug_unique\` UNIQUE(\`slug\`)
  )`,

  // Bookings table
  `CREATE TABLE IF NOT EXISTS \`bookings\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`userId\` varchar(64) NOT NULL,
    \`serviceId\` int NOT NULL,
    \`bookingDate\` timestamp NOT NULL,
    \`status\` enum('pending','confirmed','completed','cancelled') DEFAULT 'pending',
    \`notes\` text,
    \`createdAt\` timestamp DEFAULT (now()),
    \`updatedAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`bookings_id\` PRIMARY KEY(\`id\`)
  )`,

  // Categories table
  `CREATE TABLE IF NOT EXISTS \`categories\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`name\` varchar(100) NOT NULL,
    \`slug\` varchar(100) NOT NULL,
    \`description\` text,
    \`image\` varchar(500),
    \`createdAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`categories_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`categories_slug_unique\` UNIQUE(\`slug\`)
  )`,

  // Customer Profiles table
  `CREATE TABLE IF NOT EXISTS \`customerProfiles\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`userId\` varchar(64) NOT NULL,
    \`dateOfBirth\` timestamp,
    \`zodiacSign\` varchar(20),
    \`primaryCellSalt\` varchar(50),
    \`deficiencySalt1\` varchar(50),
    \`deficiencySalt2\` varchar(50),
    \`deficiencySalt3\` varchar(50),
    \`currentSymptoms\` text,
    \`healthGoals\` text,
    \`medications\` text,
    \`notes\` text,
    \`createdAt\` timestamp DEFAULT (now()),
    \`updatedAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`customerProfiles_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`customerProfiles_userId_unique\` UNIQUE(\`userId\`)
  )`,

  // Order Items table
  `CREATE TABLE IF NOT EXISTS \`orderItems\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`orderId\` int NOT NULL,
    \`productId\` int NOT NULL,
    \`quantity\` int NOT NULL,
    \`price\` int NOT NULL,
    \`createdAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`orderItems_id\` PRIMARY KEY(\`id\`)
  )`,

  // Orders table
  `CREATE TABLE IF NOT EXISTS \`orders\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`userId\` varchar(64) NOT NULL,
    \`total\` int NOT NULL,
    \`status\` enum('pending','processing','shipped','delivered','cancelled') DEFAULT 'pending',
    \`shippingAddress\` text,
    \`notes\` text,
    \`createdAt\` timestamp DEFAULT (now()),
    \`updatedAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`orders_id\` PRIMARY KEY(\`id\`)
  )`,

  // Products table
  `CREATE TABLE IF NOT EXISTS \`products\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`categoryId\` int NOT NULL,
    \`name\` varchar(200) NOT NULL,
    \`slug\` varchar(200) NOT NULL,
    \`description\` text,
    \`price\` int NOT NULL,
    \`image\` varchar(500),
    \`stock\` int DEFAULT 0,
    \`featured\` boolean DEFAULT false,
    \`active\` boolean DEFAULT true,
    \`createdAt\` timestamp DEFAULT (now()),
    \`updatedAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`products_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`products_slug_unique\` UNIQUE(\`slug\`)
  )`,

  // Services table
  `CREATE TABLE IF NOT EXISTS \`services\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`name\` varchar(200) NOT NULL,
    \`slug\` varchar(200) NOT NULL,
    \`description\` text,
    \`duration\` int NOT NULL,
    \`price\` int NOT NULL,
    \`image\` varchar(500),
    \`active\` boolean DEFAULT true,
    \`createdAt\` timestamp DEFAULT (now()),
    CONSTRAINT \`services_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`services_slug_unique\` UNIQUE(\`slug\`)
  )`
];

export async function runMigrations(): Promise<{ success: boolean; message: string; tables?: string[] }> {
  if (!process.env.DATABASE_URL) {
    return { success: false, message: "DATABASE_URL not configured" };
  }

  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    
    // Run each migration
    for (const migration of migrations) {
      await connection.execute(migration);
    }

    // Get list of tables to verify
    const [tables] = await connection.query("SHOW TABLES");
    
    await connection.end();

    return {
      success: true,
      message: "All migrations completed successfully",
      tables: (tables as any[]).map((row: any) => Object.values(row)[0] as string)
    };
  } catch (error: any) {
    console.error("Migration error:", error);
    return {
      success: false,
      message: `Migration failed: ${error.message}`
    };
  }
}

