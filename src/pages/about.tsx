import {ReactElement} from "react";
// Next.js
import dynamic from "next/dynamic";
// Material ui
// third party
import {NextSeo} from "next-seo";
// Project imports
import dictionaries from "../../dictionaries/en.json";
import AboutFirstSection from "@/components/about/AboutFirstSection";
import AboutSecondSection from "@/components/about/AboutSecondSection";
import AboutThirdSection from "@/components/about/AboutThirdSection";
import AboutFourthSection from "@/components/about/AboutFourthSection";
import AboutFifthSection from "@/components/about/AboutFifthSection";
import AboutSixSection from "@/components/about/AboutSixSection";
import AboutLastSection from "@/components/about/AboutLastSection";

const AppContainer = dynamic(() => import("@/components/global/AppContainer"));
const Layout = dynamic(() => import("@/components/layout/Layout"));


//=========================|| About us ||===========================

const About = () => {

    return (
        <>
            <NextSeo
                title={dictionaries.aboutUs.nextSeo.title}
                description={dictionaries.aboutUs.nextSeo.desc}
                canonical="https://magnificent.ae/about-us/"
                openGraph={{
                    locale: "en_US",
                    type: "article",
                    title: dictionaries.aboutUs.nextSeo.openGraphTitle,
                    description: dictionaries.aboutUs.nextSeo.openGraphDesc,
                    url: "https://magnificent.ae/about-us/",
                    site_name: "Magnificent Holiday",
                    article: {
                        modifiedTime: "2023-01-07T13:57:45+00:00",
                    },
                }}
                twitter={{
                    cardType: "summary_large_image",
                    //   label1: 'Est. reading time',
                    //   data1: '8 minutes',
                }}
            />
            <link rel="canonical" href=""/>
            <AppContainer>
                <AboutFirstSection/>
                {/*<AboutSecondSection/>*/}
                <AboutThirdSection/>
                {/*<AboutFourthSection/>*/}
                <AboutFifthSection/>
                <AboutSixSection/>
                <AboutLastSection />
            </AppContainer>
        </>
    );
};
export default About;

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
