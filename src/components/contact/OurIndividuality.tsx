import {Grid, Paper, Stack} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import TitleSeparator from "@/components/global/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json';

type TemplateProps = {
    iconName:string,
    title:string,
    content:string
}

const Template = ({iconName,title,content}:TemplateProps)=>{
    return <Paper elevation={3} sx={{p:2,height:'100%'}}>
        <Stack direction={'column'} alignItems={'center'}>
            <AppIcon name={iconName}/>
            <EuclidText align={'center'} text={title} fontWeight={600} my={1}/>
            <SwitzerText variant={'caption'} text={content} textAlign={'justify'}/>
        </Stack>
    </Paper>
}

const OurIndividuality = ()=>{
    return (
        <>
            <TitleSeparator separatorTitle={''} title={'Our Individuality'} />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Template iconName={'support_agent'} title={dictionaries.contact.ourIndividuality.title1} content={dictionaries.contact.ourIndividuality.content1}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Template iconName={'sentiment_satisfied'} title={dictionaries.contact.ourIndividuality.title3} content={dictionaries.contact.ourIndividuality.content3}/>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Template iconName={'fingerprint'} title={dictionaries.contact.ourIndividuality.title2} content={dictionaries.contact.ourIndividuality.content2}/>
                </Grid>
                <Grid item xs>
                    <SwitzerText px={5} align={'center'} textAlign={'justify'} mt={1} text={dictionaries.contact.ourIndividuality.explanation} />
                </Grid>

            </Grid>

        </>
    )
}
export default OurIndividuality;