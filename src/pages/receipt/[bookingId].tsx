import {ReactElement} from "react";
import Layout from "@/components/global/Layout";
import {Paper} from "@mui/material";
import AppContainer from "@/components/global/AppContainer";

const BookingId = ()=>{
    return(
        <AppContainer>

        <Paper sx={{mt:20}}>Receipt</Paper>
        </AppContainer>
    )
}
export default BookingId;

BookingId.getLayout = (page:ReactElement) => <Layout>{page}</Layout>