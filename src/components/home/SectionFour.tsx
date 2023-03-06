// Next.js
// Material ui
import {createTheme, Grid} from "@mui/material";
// Project imports
import SectionFourTemplate from "@/components/home/SectionFourTemplate";
import TitleSeparator from "@/components/global/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json'

const SectionFour = () => {
    const theme = createTheme()
    return (
        <>
            <TitleSeparator separatorTitle={'We take'} title={'care of Everything'}/>
            {/*<Box position={'relative'} mt={5}>*/}
            {/*    <Box sx={{[theme.breakpoints.down('md')]:{display:'none'}}}>*/}
            {/*    <Image src={homePagePicture} alt={""} width={200} height={200} style={{width: '100%', height: 300,filter:'blur(1px)'}}/>*/}
            {/*    </Box>*/}
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'receipt_long'} title={dictionaries.homePage.section4.title1}
                                         content={dictionaries.homePage.section4.text1}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'photo_library'} title={dictionaries.homePage.section4.title2}
                                         content={dictionaries.homePage.section4.text2}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'price_change'} title={dictionaries.homePage.section4.title3}
                                         content={dictionaries.homePage.section4.text3}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'person_search'} title={dictionaries.homePage.section4.title4}
                                         content={dictionaries.homePage.section4.text4}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'how_to_reg'} title={dictionaries.homePage.section4.title5}
                                         content={dictionaries.homePage.section4.text5}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <SectionFourTemplate iconName={'emoji_objects'} title={dictionaries.homePage.section4.title7}
                                         content={dictionaries.homePage.section4.text7}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4} sx={{margin: 'auto'}}>
                    <SectionFourTemplate iconName={'car_rental'} title={dictionaries.homePage.section4.title6}
                                         content={dictionaries.homePage.section4.text6}/>
                </Grid>
            </Grid>
            {/*</Box>*/}
        </>
    )
}
export default SectionFour;