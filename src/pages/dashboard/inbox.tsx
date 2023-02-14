import {ReactElement} from "react";
import DashboardLayout from "@/components/global/DashboardLayout";

const InboxPage = ()=>{
    return(
        <div>InboxPage page</div>
    )
}
export default InboxPage;

InboxPage.getLayout = (page:ReactElement) => <DashboardLayout>{page}</DashboardLayout>