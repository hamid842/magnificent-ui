import {Paper, Stack} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";

type ItemsTemplateProps = {
    iconName: string,
    title: string,
    content: string
}

const ItemsTemplate = ({iconName, title, content}: ItemsTemplateProps) => {
    return (
        <Paper elevation={3} sx={{p: 2,pt:3, height: {xs:230,sm:250,md:260}}}>
            <Stack direction={'column'} alignItems={'center'}>
                <AppIcon name={iconName} />
                <EuclidText align={'center'} text={title} fontWeight={600} my={1}/>
                <SwitzerText variant={'caption'} text={content} textAlign={'center'}/>
            </Stack>
        </Paper>
    )
}
export default ItemsTemplate;