import "../../styles.css";
import "../../local-styles.css";

import CustomHead from "../components/CustomHead"
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import Blogpost from "../blogpost/blogpost";
import AuthorDescription from "~/app/components/AuthorDescription";

export default function Landing() {

    return (
        <div className={"flex-container"}>

            <CustomHead/>

            <CustomHeader/>

            <main>
                <section className={"custom-container"}>
                    <div className={"page-left"}>

                        <Blogpost/>

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