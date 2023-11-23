import Head from "next/head";
import BlogPageLayout from "@/components/BlogPageLayout";

const blogPage = () => {
    return (
        <BlogPageLayout>
            <Head>
                <title>Elastic Beanstalk HTTPS API - Ko-blog</title>
            </Head>
            <div>hello world</div>
        </BlogPageLayout>
    )
}

export default blogPage;
