import {ReactElement} from "react";
import DashboardLayout from "@/components/global/DashboardLayout";

const Favorites = ()=>{
    return(
        <div>Favorites page</div>
    )
}
export default Favorites;

Favorites.getLayout = (page:ReactElement) => <DashboardLayout>{page}</DashboardLayout>