import {ReactElement} from "react";
import Layout from "@/components/global/Layout";

const BookingId = ()=>{
    return(
        <div>Receipt</div>
    )
}
export default BookingId;

BookingId.getLayout = (page:ReactElement) => <Layout>{page}</Layout>