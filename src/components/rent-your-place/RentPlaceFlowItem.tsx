import {Box, Stack, Typography} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";
import colors from "@/assets/colors";

type RentPlaceFlowItemProps = {
    num:number
}

const RentPlaceFlowItem = ({num}:RentPlaceFlowItemProps) => {
    return (
        <Stack direction={'column'} alignItems={'center'}>
            <AppIcon name={'home'} size={3}/>
            <Typography my={1}>This is a long text</Typography>
            <Box sx={{
                backgroundColor: colors.mainColor,
                width: 50,
                height: 25,
                borderRadius: 25,
                color: 'white',
                display: 'grid',
                placeItems: 'center'
            }}>{num}</Box>
        </Stack>
    )
}
export default RentPlaceFlowItem;