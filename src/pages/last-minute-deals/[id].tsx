import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {Property} from "@/utils/property-type";


const LivingSpaceItem = () =>{
    const router = useRouter();
    const getPropertyFromRouter = router.query.propertyItem as string;
        const propertyItem:Property = JSON.parse(getPropertyFromRouter);
    return(
        <Layout>Property Item {propertyItem.id}</Layout>
    )
}
export default LivingSpaceItem;