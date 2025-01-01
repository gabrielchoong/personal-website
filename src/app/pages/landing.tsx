import "../../styles.css";
import "../../local-styles.css";

import CustomHead from "../components/CustomHead"
import CustomHeader from "~/app/components/CustomHeader";
import CustomFooter from "../components/CustomFooter";

import {getBlogs} from "~/lib/db";

export async function getStaticProps() {
    const blogs = getBlogs();
    return {props: {blogs}};
}

export default function Landing() {
    return (
        <div className={"flex-container"}>

            <CustomHead/>

            <CustomHeader/>

            <main>
                <section className={"custom-container"}>
                    <div className={"page-left"}>
                        <div className={"blog-posts"}>
                            <div className={"post"}>
                                <h2>Site updating - 2024-10-26</h2>
                                <p>...waiting</p>
                            </div>
                        </div>
                    </div>

                    <div className={"page-right"}>
                        <h2><strong>Author</strong></h2>
                        <p>Hi, my name is Gabriel, the author of this blog. I&#39;m a final year university student
                            majoring
                            in <strong>Artificial Intelligence</strong>. I&#39;m writing this blog to share my
                            insights
                            about this emerging field where <em>hype</em> is ruining everything. Let&#39;s dive into
                            more
                            intricate topics about AI without all the nonsensical arguments!</p>
                        <br/>
                        <p>If you&#39;re interested in what I do, consider checking my GitHub page linked above, or
                            email me
                            which are conveniently located at the top and bottom of this webpage. You could also
                            stalk me
                            on LinkedIn, see my competitions on Kaggle, or even figure out why Hugging Face is so
                            popular
                            among
                            researchers!</p>
                    </div>
                </section>
            </main>

            <CustomFooter/>
        </div>
    )
}