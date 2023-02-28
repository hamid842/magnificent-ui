import { ReactElement, Suspense } from "react";
// Next.js
import dynamic from "next/dynamic";
// Third party
import { NextSeo } from "next-seo";
// Project imports
import dictionaries from "../../dictionaries/en.json";
import AppLoading from "@/components/global/AppLoading";
import {Box, Grid, Paper, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import RentSlider from "@/components/rent-your-place/RentSlider";
import OurPartnership from "@/components/global/OurPartnership";
import GeneralInformation from "@/components/rent-your-place/first-step/GeneralInformation";
import ContactInformation from "@/components/rent-your-place/first-step/ContactInformation";
import AppTextField from "@/components/global/AppTextField";
import AppButton from "@/components/global/AppButton";

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
                    <Grid container spacing={3} mt={15}>
                        <Grid item xs={12} sm={6} lg={6}>
                            <Stack
                                direction={"column"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                            >
                                <EuclidText
                                    variant={"h4"}
                                    sx={{ fontWeight: 600, mt: 3 }}
                                    text={"Rent your property out with us !"}
                                />
                                <RentSlider />
                            </Stack>
                            <Box mt={5}>
                                <OurPartnership />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                          <Paper elevation={3} sx={{p:2,height:'100%'}}>
                              <Grid container spacing={0.5}>
                                  <Grid item xs={12} sm={12} lg={12}>
                                      <EuclidText align={'center'} my={1} text={'Find out if your property meets our criteria'} />
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Title'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Type'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Square Meters'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Price'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Bedrooms Number'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Bathrooms Number'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Name'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Email'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Phone No.'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={6} lg={6}>
                                      <AppTextField label={'Mobile No.'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={12} lg={12}>
                                      <AppTextField multiline label={'Address'}/>
                                  </Grid>
                                  <Grid item xs={12} sm={12} lg={12}>
                                  <Stack alignItems={'center'} mt={2}>
                                      <AppButton label={'Submit'}/>
                                  </Stack>
                                  </Grid>
                              </Grid>
                          </Paper>
                        </Grid>
                    </Grid>
                    {/*<RentPlaceForm />*/}
                    <RentPlaceFlow />
                </Suspense>
            </AppContainer>
        </>
    );
};
export default RentYourPlace;

RentYourPlace.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
