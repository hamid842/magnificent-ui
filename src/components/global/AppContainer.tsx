import {ReactNode} from "react";
import {Box} from "@mui/material";

type AppContainerProps = {
    children:ReactNode
}

const AppContainer = ({children}:AppContainerProps)=>{
    return (
        <Box sx={{px:{xs:1,sm:2,md:20,lg:25}}}>{children}</Box>
    )
}
export default AppContainer;