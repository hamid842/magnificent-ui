import {ReactNode} from "react";
import {Paper, Stack, Typography} from "@mui/material";

type FacilitiesItemProps = {
    ItemIcon: ReactNode,
    title: string,
    subtitle: string
}

const FacilitiesItem = ({ItemIcon, title, subtitle}: FacilitiesItemProps) => {
    return (
        <Paper sx={{p: 3, borderRadius: 5, width: '100%', height:200,opacity:0.8}} elevation={3}>
            <Stack sx={{height:'100%'}} direction={'column'} alignItems={'center'} justifyContent={'space-around'} >
                {ItemIcon}
                <Typography variant={'h4'}><b>{title}</b></Typography>
                <Typography variant={'body2'}>{subtitle}</Typography>
            </Stack>
        </Paper>
    )
}
export default FacilitiesItem;