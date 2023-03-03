import {Box, BoxProps, Typography} from "@mui/material";
import {euclidFont, satisfyFont} from "@/assets/fonts";

type TitleSeparatorProps = {
    separatorTitle: string,
    title: string
}

const TitleSeparator = (props: (TitleSeparatorProps & BoxProps)) => {
    const {separatorTitle, title,...rest} = props
    return (
        <Box pt={12} pb={4} sx={{width: '100%'}} {...rest}>
            <Typography align={'center'} variant={'h4'} className={satisfyFont.className}>{separatorTitle}</Typography>
            <Typography align={'center'} variant={'h4'} className={euclidFont.className}
                        sx={{fontWeight: 700}}>{title}</Typography>
        </Box>
    )
}
export default TitleSeparator;