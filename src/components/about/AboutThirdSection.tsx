import TitleSeparator from "@/components/global/TitleSeparator";
import {Grid} from "@mui/material";
import ItemsTemplate from "@/components/about/ItemsTemplate";
import dictionaries from "../../../dictionaries/en.json";

const AboutThirdSection = ()=>{
    return (
        <>
            <TitleSeparator
                separatorTitle={"Reasons to rent"}
                title={"Vacation Homes from Magnificent"}
                pt={10}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'home_work'} title={dictionaries.aboutUs.section3.title1}
                                   content={dictionaries.aboutUs.section3.text1}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'trolley'} title={dictionaries.aboutUs.section3.title2}
                                   content={dictionaries.aboutUs.section3.text2}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'payments'} title={dictionaries.aboutUs.section3.title3}
                                   content={dictionaries.aboutUs.section3.text3}/>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <ItemsTemplate iconName={'screen_search_desktop'} title={dictionaries.aboutUs.section3.title4}
                                   content={dictionaries.aboutUs.section3.text4}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'verified'} title={dictionaries.aboutUs.section3.title5}
                                   content={dictionaries.aboutUs.section3.text5}/>
                </Grid>
            </Grid>
        </>
    )
}
export default AboutThirdSection;