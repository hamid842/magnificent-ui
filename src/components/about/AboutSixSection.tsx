import {Grid, Paper, Stack} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";
import EuclidText from "@/components/css-texts/EuclidText";
import TitleSeparator from "@/components/global/TitleSeparator";
import AppIcon from "@/components/global/AppIcon";

type TemplateProps = {
    iconName: string,
    title: string,
    content: string
}

const Template = ({iconName, title, content}: TemplateProps) => {
    return (
        <Paper elevation={3} sx={{p: 2, height: '100%'}}>
            <Stack direction={'column'} alignItems={'center'}>
                <AppIcon name={iconName} size={4}/>
                <EuclidText align={'center'} text={title} fontWeight={600} textTransform={'uppercase'} my={1}/>
                <SwitzerText variant={'caption'} text={content} textAlign={'justify'}/>
            </Stack>
        </Paper>
    )
}

const AboutSixSection = () => {
    return (
        <>
            <TitleSeparator
                separatorTitle={"Holiday Homes in Dubai"}
                title={"Embrace the Grandeur with Premium Holiday Home Management Services"}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'align_justify_space_around'} title={"ENJOY MORE SPACE"}
                              content={"Why book a room when you can enjoy full kitchens, laundry, pools, yards and more?"}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'living'} title={"LUXURIOUS ACCOMMODATIONS"}
                              content={"Fully furnished and well-outfitted by high-end designers, our homes exude luxury and opulence."}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'location_home'} title={"LIVE LIKE A LOCAL"}
                              content={"Enjoy local neighborhoods and experience shopping, food, entertainment and much more."}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'lock_reset'} title={"WE’RE SECURE"}
                              content={"Our holiday homes are located in secured and private communities with 24/7 security surveillance."}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'location_away'} title={"A HOME AWAY FROM HOME"}
                              content={"Warmth and comfort of a fully-furnished home, with all the amenities of a 5-star hotel."}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Template iconName={'map'} title={"PRIME LOCATION"}
                              content={"Live in thriving Downtown Dubai and get to be in the midst of all the action and entertainment."}/>
                </Grid>
            </Grid>
        </>
    )
}
export default AboutSixSection;