import { mysqlEnum, mysqlTable, text, timestamp, varchar, int, boolean, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Product categories
 */
export const categories = mysqlTable("categories", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  image: varchar("image", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;

/**
 * Products (farm products, herbal teas, etc.)
 */
export const products = mysqlTable("products", {
  id: int("id").primaryKey().autoincrement(),
  categoryId: int("categoryId").notNull(),
  name: varchar("name", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  description: text("description"),
  price: int("price").notNull(), // Price in cents
  image: varchar("image", { length: 500 }),
  stock: int("stock").default(0),
  featured: boolean("featured").default(false),
  active: boolean("active").default(true),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;

/**
 * Service types (wellness coaching, mobile healing, commercial juicing, etc.)
 */
export const services = mysqlTable("services", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  description: text("description"),
  duration: int("duration").notNull(), // Duration in minutes
  price: int("price").notNull(), // Price in cents
  image: varchar("image", { length: 500 }),
  active: boolean("active").default(true),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Service = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;

/**
 * Service bookings
 */
export const bookings = mysqlTable("bookings", {
  id: int("id").primaryKey().autoincrement(),
  userId: varchar("userId", { length: 64 }).notNull(),
  serviceId: int("serviceId").notNull(),
  bookingDate: timestamp("bookingDate").notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled"]).default("pending"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

/**
 * Customer health profiles for wellness coaching
 */
export const customerProfiles = mysqlTable("customerProfiles", {
  id: int("id").primaryKey().autoincrement(),
  userId: varchar("userId", { length: 64 }).notNull().unique(),
  dateOfBirth: timestamp("dateOfBirth"),
  zodiacSign: varchar("zodiacSign", { length: 20 }),
  primaryCellSalt: varchar("primaryCellSalt", { length: 50 }),
  deficiencySalt1: varchar("deficiencySalt1", { length: 50 }),
  deficiencySalt2: varchar("deficiencySalt2", { length: 50 }),
  deficiencySalt3: varchar("deficiencySalt3", { length: 50 }),
  currentSymptoms: text("currentSymptoms"),
  healthGoals: text("healthGoals"),
  medications: text("medications"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type CustomerProfile = typeof customerProfiles.$inferSelect;
export type InsertCustomerProfile = typeof customerProfiles.$inferInsert;

/**
 * Orders for products
 */
export const orders = mysqlTable("orders", {
  id: int("id").primaryKey().autoincrement(),
  userId: varchar("userId", { length: 64 }).notNull(),
  total: int("total").notNull(), // Total in cents
  status: mysqlEnum("status", ["pending", "processing", "shipped", "delivered", "cancelled"]).default("pending"),
  shippingAddress: text("shippingAddress"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;

/**
 * Order items (products in an order)
 */
export const orderItems = mysqlTable("orderItems", {
  id: int("id").primaryKey().autoincrement(),
  orderId: int("orderId").notNull(),
  productId: int("productId").notNull(),
  quantity: int("quantity").notNull(),
  price: int("price").notNull(), // Price in cents at time of order
  createdAt: timestamp("createdAt").defaultNow(),
});

export type OrderItem = typeof orderItems.$inferSelect;
export type InsertOrderItem = typeof orderItems.$inferInsert;

/**
 * Blog posts for educational content
 */
export const blogPosts = mysqlTable("blogPosts", {
  id: int("id").primaryKey().autoincrement(),
  authorId: varchar("authorId", { length: 64 }).notNull(),
  title: varchar("title", { length: 300 }).notNull(),
  slug: varchar("slug", { length: 300 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  image: varchar("image", { length: 500 }),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

