import sqlite3 from "sqlite3";
import path from "path";

const dbPath: string = path.resolve("./src/data/blogs.db");

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

type QueryResult<T> = Promise<T>;

const executeQuery: <T>(query: string, params: unknown[]) => QueryResult<T> = <T>(query: string, params: unknown[]): QueryResult<T> => {
    return new Promise((resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: string) => void) => {
        db.all(query, params, (err: Error | null, rows: T) => {
            if (err) {
                console.error("Database error:", err.message, {query, params});
                reject(err.message);
            } else resolve(rows);
        });
    });
}

type blogPromise = Promise<blogData[]>;
type blogData = { id: number, title: string, content: string };

export const getBlogs: () => blogPromise = (): blogPromise => {
    const query = `
        SELECT *
        FROM blogs
        ORDER BY created_at DESC
    `;
    return executeQuery<blogData[]>(query, []);
};

export const insertBlog: (blog: Omit<blogData, "id">) => Promise<blogData> = (blog: Omit<blogData, "id">): Promise<blogData> => {
    if (!blog.title || !blog.content) {
        return Promise.reject("Title and content are required");
    }
    const query = `
        INSERT INTO blogs (title, content)
        VALUES (?, ?)
    `;
    return executeQuery(query, [blog.title, blog.content]);
}

export const updateBlog: (blog: blogData) => Promise<void> = (blog: blogData): QueryResult<void> => {
    if (!blog.title || !blog.content || !blog.id) {
        return Promise.reject("ID, title and content are required.");
    }
    const query = `
        UPDATE blogs
        SET title      = ?,
            content    = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    return executeQuery<void>(query, [blog.title, blog.content, blog.id]);
};

export const deleteBlog: (id: number) => Promise<void> = (id: number): QueryResult<void> => {
    if (!id) {
        return Promise.reject("ID is required");
    }
    const query = `
        DELETE
        FROM blogs
        WHERE id = ?
    `;
    return executeQuery<void>(query, [id]);
};

export default db;