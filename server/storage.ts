import { db } from "./db";
import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  deleteInquiry(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  }

  async deleteInquiry(id: number): Promise<void> {
    await db.delete(inquiries).where(eq(inquiries.id, id));
  }
}

export const storage = new DatabaseStorage();
