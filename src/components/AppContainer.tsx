import {ReactNode} from "react";
import {Box} from "@mui/material";

type AppContainerProps = {
    children:ReactNode
}

const AppContainer = ({children}:AppContainerProps)=>{
    return (
        <Box sx={{px:{xs:1,sm:2,lg:20}}}>{children}</Box>
    )
}
export default AppContainer;