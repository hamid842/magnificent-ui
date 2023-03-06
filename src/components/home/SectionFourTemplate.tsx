import { Paper, Stack} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";

type SectionFourTemplateProps = {
    iconName: string,
    title: string,
    content: string
}

const SectionFourTemplate = ({iconName,title,content}:SectionFourTemplateProps)=>{
    return (
        <Paper elevation={3} sx={{height:{xs:160,sm:230,md:210},p:1,pt:2}}>
        <Stack direction={'column'} alignItems={'center'}>
            <AppIcon name={iconName}/>
            <EuclidText align={'center'} text={title} fontWeight={600} my={1}/>
            <SwitzerText variant={'caption'} align={'center'} text={content} textAlign={'center'}/>
        </Stack>
        </Paper>
        )
}
export default SectionFourTemplate;