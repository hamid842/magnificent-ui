import {Box, Typography,BoxProps} from "@mui/material";
import {euclidFont, satisfyFont} from "@/assets/fonts";

type TitleSeparatorProps = {
    separatorTitle: string,
    title: string
}

const TitleSeparator = (props:(TitleSeparatorProps & BoxProps)) => {
    return (
        <Box py={8} sx={{width: '100%'}} {...props}>
            <Typography align={'center'} variant={'h4'} className={satisfyFont.className}>{props.separatorTitle}</Typography>
            <Typography align={'center'} variant={'h4'} className={euclidFont.className}
                        sx={{fontWeight: 700}}>{props.title}</Typography>
        </Box>
    )
}
export default TitleSeparator;