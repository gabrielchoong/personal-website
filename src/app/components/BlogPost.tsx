import {getBlogs} from "~/lib/db";

type blogData = { id: number, title: string, content: string };

export default async function BlogPost() {

    const blogs = await getBlogs();

    return (
        <div className={"blog-posts"}>
            <div className={"post"}>
                <h2>Blog Posts</h2>
                <ul>
                    {blogs?.map((blog: blogData) => (
                        <>
                            <h3 key={blog.id}>{blog.title}</h3>
                            <p>{blog.content}</p>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}