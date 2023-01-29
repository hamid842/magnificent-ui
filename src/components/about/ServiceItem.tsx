import {ReactNode} from "react";
import {Button, Stack, Typography} from "@mui/material";

type ServiceItemProps = {
    ItemIcon: ReactNode,
    title: string

}

const ServiceItem = ({ItemIcon, title}: ServiceItemProps) => {
    return (
        <Stack direction={'row'}>
            {ItemIcon}
            <Stack direction={'column'} alignItems={'flex-start'} spacing={2}>
                <Typography variant={'h4'} sx={{fontWeight:600}}>{title}</Typography>
                <Typography variant={'caption'} sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis enim error
                    exercitationem impedit,
                    ipsum itaque molestiae natus obcaecati perferendis quaerat qui quibusdam quos repellendus
                    repudiandae sit tempore vero. Tempore.</Typography>
                <Button variant={"contained"} sx={{width:120,backgroundColor: "#A47C30", borderRadius: 2,textTransform:'none'}}>Read More</Button>
            </Stack>
        </Stack>
    )
}

export default ServiceItem;