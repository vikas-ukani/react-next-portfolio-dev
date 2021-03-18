import Document, { Html, Head, Main, NextScript } from "next/document";
import FooterScript from "../Components/FooterScript";
import HeadScripts from "../Components/HeadScripts";
import Loader from "../Components/UI/Loader";
import AppLayout from "../Layout/AppLayout";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <HeadScripts />
                </Head>
                <body className="blog safari osx elementor-default elementor-kit-355 home page-template-default page page-id-9 unknown elementor-default elementor-kit-355 elementor-page elementor-page-9">
                    <Loader />
                    <AppLayout >
                        <Main />
                        <NextScript />
                    </AppLayout >
                </body>
                <FooterScript />
            </Html>
        )
    }
}