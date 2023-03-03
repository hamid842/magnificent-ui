// Next.js
import Image from "next/image";
// Material ui
import {Box, createTheme, Grid} from "@mui/material";
// Project imports
import SectionFourTemplate from "@/components/home/SectionFourTemplate";
import TitleSeparator from "@/components/global/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json'
import homePagePicture from "../../../public/home/home-page.png";

const SectionFour = () => {
    const theme = createTheme()
    return (
        <>
            <TitleSeparator separatorTitle={'We take'} title={'care of Everything'}/>
            <Box position={'relative'} mt={5}>
                <Box sx={{[theme.breakpoints.down('md')]:{display:'none'}}}>
                <Image src={homePagePicture} alt={""} width={200} height={200} style={{width: '100%', height: 300,filter:'blur(1px)'}}/>
                </Box>
                <Grid container spacing={1} sx={{position: 'absolute', top: -60,[theme.breakpoints.down('md')]:{position:'relative'}}} px={2}>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'receipt_long'} title={dictionaries.homePage.section4.title1} content={dictionaries.homePage.section4.text1}/>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'photo_library'} title={dictionaries.homePage.section4.title2} content={dictionaries.homePage.section4.text2}/>

                    </Grid>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'price_change'} title={dictionaries.homePage.section4.title3} content={dictionaries.homePage.section4.text3}/>

                    </Grid>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'person_search'} title={dictionaries.homePage.section4.title4} content={dictionaries.homePage.section4.text4}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{position: 'absolute', bottom: -60,[theme.breakpoints.down('md')]:{position:'relative'}}} px={2}>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'how_to_reg'} title={dictionaries.homePage.section4.title5} content={dictionaries.homePage.section4.text5}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <SectionFourTemplate iconName={'car_rental'} title={dictionaries.homePage.section4.title6} content={dictionaries.homePage.section4.text6}/>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3}>
                        <SectionFourTemplate iconName={'emoji_objects'} title={dictionaries.homePage.section4.title7} content={dictionaries.homePage.section4.text7}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default SectionFour;