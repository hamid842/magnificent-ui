import {Box, Typography} from "@mui/material";
import {satisfyFont, euclidFont} from "@/assets/fonts";

type TitleSeparatorProps = {
    separatorTitle: string,
    title: string
}

const TitleSeparator = ({separatorTitle, title}: TitleSeparatorProps) => {
    return (
        <Box py={8}>
            <Typography align={'center'} variant={'h4'} className={satisfyFont.className}>{separatorTitle}</Typography>
            <Typography align={'center'} variant={'h4'} className={euclidFont.className} sx={{fontWeight:700}}>{title}</Typography>
        </Box>
    )
}
export default TitleSeparator;