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
        <Paper elevation={3} sx={{opacity:0.8,height:{xs:165,sm:250,md:170},p:1}}>
        <Stack direction={'column'} alignItems={'center'}>
            <AppIcon name={iconName} size={2}/>
            <EuclidText align={'center'} text={title} fontWeight={600} my={1}/>
            <SwitzerText variant={'caption'} align={'center'} text={content} textAlign={'justify'}/>
        </Stack>
        </Paper>
        )
}
export default SectionFourTemplate;