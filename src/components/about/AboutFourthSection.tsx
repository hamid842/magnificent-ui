import {Grid} from "@mui/material";
import TitleSeparator from "@/components/global/TitleSeparator";
import ItemsTemplate from "@/components/about/ItemsTemplate";
import dictionaries from "../../../dictionaries/en.json";

const AboutFourthSection = () => {
    return (
        <>
            <TitleSeparator
                separatorTitle={"Why choose us?"}
                title={"These popular destinations have a lot to offer?"}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} lg={4}>
                    <ItemsTemplate iconName={'sell'} title={dictionaries.aboutUs.section4.title1}
                                   content={dictionaries.aboutUs.section4.text1}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <ItemsTemplate iconName={'support_agent'} title={dictionaries.aboutUs.section4.title2}
                                   content={dictionaries.aboutUs.section4.text2}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                    <ItemsTemplate iconName={'sell'} title={dictionaries.aboutUs.section4.title3}
                                   content={dictionaries.aboutUs.section4.text3}/>
                </Grid>
            </Grid>
        </>
    )
}
export default AboutFourthSection;