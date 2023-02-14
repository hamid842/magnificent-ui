import {ReactElement} from "react";
import DashboardLayout from "@/components/global/DashboardLayout";

const ProfilePage = ()=>{
    return(
        <div>Profile page</div>
    )
}
export default ProfilePage;

ProfilePage.getLayout = (page:ReactElement) => <DashboardLayout>{page}</DashboardLayout>