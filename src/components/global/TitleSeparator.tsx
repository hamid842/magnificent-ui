import {Box, BoxProps, Typography} from "@mui/material";
import {euclidFont, satisfyFont} from "@/assets/fonts";

type TitleSeparatorProps = {
    separatorTitle: string,
    title: string
}

const TitleSeparator = (props: (TitleSeparatorProps & BoxProps)) => {
    const {separatorTitle, title} = props
    return (
        <Box py={8} sx={{width: '100%'}} {...props}>
            <Typography align={'center'} variant={'h4'} className={satisfyFont.className}>{separatorTitle}</Typography>
            <Typography align={'center'} variant={'h4'} className={euclidFont.className}
                        sx={{fontWeight: 700}}>{title}</Typography>
        </Box>
    )
}
export default TitleSeparator;