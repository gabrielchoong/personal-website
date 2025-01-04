import "../../../styles.css";
import "../../../local-styles.css";
import CustomHead from "~/app/components/CustomHead";
import CustomHeader from "~/app/components/CustomHeader";
import CustomFooter from "~/app/components/CustomFooter";

import {notFound} from "next/navigation";
import {getBlogs} from "~/lib/db";

type BlogProps = {
    params: {
        id: string;
    };
};

export default async function Blog({params}: BlogProps) {

    const blogId = parseInt(params.id, 10);

    if (isNaN(blogId)) {
        notFound()
    }

    const blog = await getBlogs();
    const selectedBlog = blog.find(
        (post) => post.id === blogId
    );

    if (!blog) {
        notFound();
    }

    return (
        <div className={"flex-container"}>

            <CustomHead/>

            <CustomHeader/>

            <main>

                <h1>{selectedBlog.title}</h1>
                <br/>
                <p>{selectedBlog.content}</p>

            </main>

            <CustomFooter/>

        </div>
    )
}
