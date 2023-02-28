import { ReactElement, Suspense } from "react";
// Next.js
import dynamic from "next/dynamic";
// Third party
import { NextSeo } from "next-seo";
// Project imports
import dictionaries from "../../dictionaries/en.json";
import AppLoading from "@/components/global/AppLoading";

const Layout = dynamic(() => import("@/components/global/Layout"));
const AppContainer = dynamic(() => import("@/components/global/AppContainer"));
const RentFirstSection = dynamic(
  () => import("@/components/rent-your-place/RentFirstSection")
);
const RentPlaceFlow = dynamic(
  () => import("@/components/rent-your-place/RentPlaceFlow")
);

const RentPlaceForm = dynamic(() => import("@/pages/our-homes/form"));

const RentYourPlace = () => {
  return (
    <>
      <NextSeo
        title={dictionaries.rentPlace.nextSeo.title}
        description={dictionaries.rentPlace.nextSeo.desc}
        canonical="https://magnificent.ae/"
        openGraph={{
          locale: "en_US",
          type: "article",
          title: dictionaries.rentPlace.nextSeo.openGraphTitle,
          description: dictionaries.rentPlace.nextSeo.openGraphDesc,
          url: "https://magnificent.ae/list-your-home/",
          site_name: "Magnificent Holiday",
          article: {
            modifiedTime: "2023-01-07T09:01:41+00:00",
          },
        }}
        twitter={{
          cardType: "summary_large_image",
          //   label1: 'Est. reading time',
          //   data1: '22 minutes',
        }}
      />
      <AppContainer>
        <Suspense fallback={<AppLoading />}>
          <RentFirstSection /> <RentPlaceForm />
          <RentPlaceFlow />
        </Suspense>
      </AppContainer>
    </>
  );
};
export default RentYourPlace;

RentYourPlace.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
