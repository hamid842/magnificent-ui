import {Grid} from "@mui/material";
import dictionaries from "../../../dictionaries/en.json";
import TitleSeparator from "@/components/global/TitleSeparator";
import ItemsTemplate from "@/components/about/ItemsTemplate";

const AboutSecondSection = () => {

    return (
        <>
            <TitleSeparator
                separatorTitle={"Why choose us?"}
                title={"Why Homeowners Choose Magnificent Properties?"}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'decimal_increase'} title={"Your rental income amplified"}
                                   content={dictionaries.aboutUs.income}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'real_estate_agent'} title={"Your home is in safe hands"}
                                   content={dictionaries.aboutUs.safe}/>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ItemsTemplate iconName={'camera_roll'} title={"Flexible Lease"}
                                   content={dictionaries.aboutUs.flexible}/>
                </Grid>
            </Grid>
        </>
    )
}
export default AboutSecondSection;