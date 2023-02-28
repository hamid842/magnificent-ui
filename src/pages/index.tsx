import { ReactElement, Suspense } from "react";
// Next.js
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// Material-ui
import { Box, Grid } from "@mui/material";
// Project imports
import { IProperty, IReview } from "@/utils/property-type";
import homePagePicture from "../../public/home/home-page.png";
import { instance } from "@/config/axiosConfig";
import { NextSeo } from "next-seo";
import dictionaries from "../../dictionaries/en.json";

const Layout = dynamic(() => import("@/components/global/Layout"));
const AppButton = dynamic(() => import("@/components/global/AppButton"));
const AppLoading = dynamic(() => import("@/components/global/AppLoading"));
const AppContainer = dynamic(() => import("@/components/global/AppContainer"));
const TitleSeparator = dynamic(
  () => import("@/components/global/TitleSeparator")
);
const ReviewsSection = dynamic(
  () => import("@/components/home/ReviewsSection")
);
const RentPlaceSection = dynamic(
  () => import("@/components/home/RentPlaceSection")
);
const SearchDestination = dynamic(
  () => import("@/components/global/SearchDestination")
);
const ActivityList = dynamic(() => import("@/components/home/ActivityList"));
const SpecialOffersItem = dynamic(
  () => import("@/components/global/SpecialOffersItem")
);

const qs = require("qs");
const query = qs.stringify(
  {
    populate: "*",
    pagination: {
      pageSize: 3,
      page: 1,
    },
  },
  {
    encodeValuesOnly: true,
  }
);

export async function getServerSideProps() {
  const { data } = await instance.get(`/properties?${query}`);
  const properties = data.data;
  // TODO: Remove limit later (when horizontal scrolling is added)
  const reviewsResponse = await instance.get(
    `/reviews?filters[inHomePage][$eq]=true&pagination[limit]=10`
  );
  const reviews = reviewsResponse.data.data;
  return {
    props: {
      properties,
      reviews,
    },
  };
}

type HomePageProps = {
  properties: IProperty[];
  reviews: IReview[];
};

const HomePage = ({ properties, reviews }: HomePageProps) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={dictionaries.homePage.nextSeo.title}
        description={dictionaries.homePage.nextSeo.desc}
        canonical="https://magnificent.ae/"
        openGraph={{
          locale: "en_US",
          type: "website",
          title: dictionaries.homePage.nextSeo.openGraphTitle,
          description: dictionaries.homePage.nextSeo.openGraphDesc,
          url: "https://magnificent.ae/",
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

      <Box sx={{ textAlign: "center", position: "relative" }}>
        <Image
          src={homePagePicture}
          alt={"Pic"}
          sizes="90vw"
          priority
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <SearchDestination position={"absolute"} />
      </Box>
      <AppContainer>
        <TitleSeparator separatorTitle={"Get our"} title={"Special Offers"} />
        {
          <Suspense fallback={<AppLoading />}>
            <Grid container spacing={3}>
              {properties?.map((property: IProperty) => {
                return (
                  <Grid
                    key={property.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    onClick={() =>
                      router.push(
                        {
                          pathname: `/our-homes/${property.id}`,
                          query: { propertyId: JSON.stringify(property.id) },
                        },
                        `/our-homes/${property.id}`
                      )
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <SpecialOffersItem data={property} />
                  </Grid>
                );
              })}
              <Grid item xs={12} sm={12} lg={12} sx={{ textAlign: "center" }}>
                <AppButton
                  label={"See more"}
                  onClick={() => router.push("/our-homes")}
                />
              </Grid>
            </Grid>
          </Suspense>
        }
        <ActivityList />
        <RentPlaceSection />
        {reviews && reviews.length && <ReviewsSection reviews={reviews} />}
      </AppContainer>
    </>
  );
};
export default HomePage;

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
