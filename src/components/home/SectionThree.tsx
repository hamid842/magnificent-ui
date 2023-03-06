import TitleSeparator from "@/components/global/TitleSeparator";
import {Grid} from "@mui/material";
import HomePageTemplate from "@/components/home/HomePageTemplate";
import dictionaries from '../../../dictionaries/en.json';

const SectionThree = () => {
    return (
        <>
            <TitleSeparator separatorTitle={'Why let'} title={'Magnificent Manage Your Short-Term Rental Property?'}/>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4} lg={4}>
                    <HomePageTemplate iconName={'decimal_increase'} title={dictionaries.homePage.section3.title1}
                                      content={dictionaries.homePage.section3.text1}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <HomePageTemplate iconName={'bubble_chart'} title={dictionaries.homePage.section3.title3}
                                      content={dictionaries.homePage.section3.text3}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <HomePageTemplate iconName={'diversity_3'} title={dictionaries.homePage.section3.title2}
                                      content={dictionaries.homePage.section3.text2}/>
                </Grid>
            </Grid>
        </>
    )
}
export default SectionThree;