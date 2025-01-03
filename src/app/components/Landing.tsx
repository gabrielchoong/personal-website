import "../../styles.css";
import "../../local-styles.css";

import CustomHead from "./CustomHead"
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import BlogPost from "~/app/components/BlogPost";
import AuthorDescription from "~/app/components/AuthorDescription";

export default function Landing() {

    return (
        <div className={"flex-container"}>

            <CustomHead/>

            <CustomHeader/>

            <main>
                <section className={"custom-container"}>
                    <div className={"page-left"}>

                        <BlogPost/>

                    </div>

                    <div className={"page-right"}>

                        <AuthorDescription/>

                    </div>
                </section>
            </main>

            <CustomFooter/>
        </div>
    )
}