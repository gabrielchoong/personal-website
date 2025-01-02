import sqlite3 from "sqlite3";
import {JSX} from "react";

const dbPath: string = "./src/data/blogs.db";

const db: sqlite3.Database = new sqlite3.Database(dbPath, (err: Error | null): void => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS blogs
    (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        title      TEXT NOT NULL,
        content    TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`, (err: Error | null): void => {
    if (err) {
        console.error("Error creating table:", err.message);
    } else {
        console.log("Blogs table is ready.");
    }
});

type blogData = { id: number, title: string, content: string
    map(element: (blog: blogData) => JSX.Element): never;
};

export async function getBlogs(){
    const query = `
        SELECT *
        FROM blogs
        ORDER BY created_at DESC
    `;
    return new Promise((resolve: (value: blogData | PromiseLike<blogData>) => void, reject: (reason?: string) => void) => {
        db.all(query, [], (err: Error | null, rows: blogData) => {
            if (err) {
                console.error("Database error:", err.message, {query});
                reject(err.message);
            } else resolve(rows);
        });
    });
}

export default db;