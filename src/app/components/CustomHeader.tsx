import Image from "next/image";

export default function CustomHeader() {
    return (
        <header>
            <section className={"custom-container"}>
                <div className={"page-left"}>
                    <h1>Hype-less AI</h1>
                    <p>Just AI talk</p>
                    <p><em>minus the jargon</em></p>
                </div>

                <div className={"page-right"}>
                    <h2><strong>Projects</strong></h2>
                    <a href="https://github.com/gabrielchoong" target="_blank">
                        <Image src={"/assets/images/github-mark/github-mark-white.svg"} alt={"GitHub Logo"}
                               width={30}
                               height={30}/></a>

                    <a href="https://www.kaggle.com/gabrielchoong" target="_blank">
                        <Image src={"/assets/images/kaggle/kaggle-svgrepo-com.svg"} alt={"Kaggle Logo"}
                               width={30}
                               height={30}/></a>

                    <a href="https://huggingface.co/Gabriel001" target="_blank">
                        <Image src={"/assets/images/hugging-face/hf-logo.svg"} alt={"Hugging Face Logo"}
                               width={30}
                               height={30}/></a>
                </div>
            </section>
        </header>
    )
}