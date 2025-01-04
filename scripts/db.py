import sqlite3

db_path = 'src/data/blogs.db'

def connect_db():
    return sqlite3.connect(db_path)

def insert_blog(title, content):
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO blogs (title, content)
        VALUES (?, ?)
    ''', (title, content))

    conn.commit()
    conn.close()
    print("Blog post inserted successfully")

# only use this in backup db
def delete_blog(blog_id):
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        DELETE FROM blogs WHERE id = ?
    ''', (blog_id,))

    cursor.execute('''
        DELETE FROM sqlite_sequence WHERE name = "blogs";
    ''')

    conn.commit()
    conn.close()
    print(f"Blog post with ID {blog_id} deleted!")

def update_blog(blog_id, content):
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        UPDATE blogs
         SET content = ?, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?
    ''', (content, blog_id))

    conn.commit()
    conn.close()
    print(f"Blog post with ID {blog_id} updated!")

def fetch_all_blogs():
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM blogs')
    rows = cursor.fetchall()

    conn.close()
    return rows

if __name__ == '__main__':

    insert = 0
    update = 0
    delete = 0
    visualise = 1

    title = "Test title"
    content = "Test content"

    blogs = fetch_all_blogs()

    times = 10

    if insert:
        insert_blog(title, content)

    if delete:
        for i in range(1, len(blogs)+1):
            delete_blog(i)

    if update:
        content = "Updated content"
        for i in range(1, times+1):
            update_blog(i, content)

    if visualise:
        blogs = fetch_all_blogs()
        for blog in blogs:
            print(blog)
        print(len(blogs))