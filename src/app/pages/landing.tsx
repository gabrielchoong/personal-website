import "../../styles.css";
import "../../local-styles.css";

import CustomHead from "../components/CustomHead"
import CustomHeader from "~/app/components/CustomHeader";
import CustomFooter from "../components/CustomFooter";

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
                                <p>Hey just so for the curious viewer, I&#39;m currently updating all of my
                                    code, and
                                    I&#39;ve taken down all my blogs that absolutely no one read. But, don&#39;t
                                    panic, in a
                                    couple of days they should be up and running. I&#39;m in the process of setting
                                    things up so it&#39;s semi-automated. In the mean time, enjoy an image of a
                                    cat from an old <a
                                        href={"https://cat-chitchat.pictures-of-cats.org/p/the-author-of.html"}
                                        target={"_blank"}>blog</a>.
                                </p>
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