import {Box, Stack} from "@mui/material";
import colors from "@/assets/colors";
import AppIcon from "@/components/global/AppIcon";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";

type HomePageTemplateProps = {
    iconName: string,
    title: string,
    content: string
}

const HomePageTemplate = ({iconName, title, content}: HomePageTemplateProps) => {
    return (
        <Box sx={{
            p: 2,
            width: '100%',
            height: '100%',
            backgroundColor: colors.elementsBg,
            borderRadius: 4,
            boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
        }}>
            <Box sx={{
                p: '1px',
                width: '100%',
                height: '100%',
                background: `linear-gradient(to left, ${colors.mainColor},${colors.elementsBg})`,
                borderRadius: 3,
            }}>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 3,
                    backgroundColor: colors.elementsBg,
                    p: 1
                }}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <AppIcon name={iconName} size={3}/>
                        <EuclidText align={'center'} text={title} color={'white'} fontWeight={600} my={1}/>
                        <SwitzerText variant={'caption'} text={content} color={'white'} textAlign={'justify'}/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
export default HomePageTemplate;