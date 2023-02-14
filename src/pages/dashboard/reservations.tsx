import {ReactElement} from "react";
import DashboardLayout from "@/components/global/DashboardLayout";

const Reservations = ()=>{
    return(
        <div>Reservations page</div>
    )
}
export default Reservations;

Reservations.getLayout = (page:ReactElement) => <DashboardLayout>{page}</DashboardLayout>