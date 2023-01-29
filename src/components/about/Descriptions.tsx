import {ReactNode} from "react";
import {Box, Button, Typography} from "@mui/material";

type Props = {
    DescIcon: ReactNode,
    title: string
}

const Descriptions = ({DescIcon, title}: Props) => {
    return (
        <>
            {DescIcon}
            <Typography variant={"h6"} sx={{fontWeight: 700}}>{title}</Typography>
            <Box sx={{py: 1}}>
                <Typography sx={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi, soluta? At
                    beatae commodi consequuntur ea expedita harum ipsum laudantium minus natus, non nostrum
                    quisquam reiciendis, repellendus tempora unde vero!

                </Typography>
            </Box>
            <Box sx={{py: 1}}>
                <Button variant={"contained"} sx={{backgroundColor: "#A47C30", borderRadius: 3}}>read more</Button>
            </Box>
        </>
    );
}

export default Descriptions;