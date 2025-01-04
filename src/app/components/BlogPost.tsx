import React from "react";

import {getBlogs} from "~/lib/db";
import Link from "next/link";

type blogData = { id: number, title: string, content: string };

export default async function BlogPost() {

    const blogs = await getBlogs();

    return (
        <div className={"blog-posts"}>
            <div className={"post"}>
                <h2>Blog Posts</h2>
                {blogs?.map((blog: blogData, index: number) => (
                    <React.Fragment key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            {index < blogs.length - 1 && <hr/>}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}