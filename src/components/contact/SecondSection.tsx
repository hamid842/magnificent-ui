import {useState} from "react";
import {Box, Collapse, Stack, Typography} from "@mui/material";
import OurServiceItems from "@/components/contact/OurServiceItem";
import OurServiceTopic from "@/components/contact/OurServiceTopic";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import {switzerFont} from "@/assets/fonts";
import colors from "@/assets/colors";
import dictionaries from "../../../dictionaries/en.json";

const SecondSection = () => {
    const [collapse, setCollapse] = useState<boolean>(false)

    const handleClick = () => setCollapse(!collapse)

    return (
        <>
            <EuclidText align={'center'} variant={'h4'} sx={{fontWeight: 700, mt:5}} text={'We Make Property Ownership Simple'}/>
            <SwitzerText sx={{textAlign: 'justify', mt: 1}} text={dictionaries.contact.ownership}/>
            <EuclidText align={"center"} variant={'h4'} sx={{fontWeight: 700, mt: 3, mb: 1}} text={'Our Services'}/>
            <Typography className={switzerFont.className}><strong>Find the Luxurious Properties for Rent With
                Magnificent </strong> Are you seeking a property to live on rent in Dubai?</Typography>
            <Stack alignItems={'center'}>
                <EuclidText text={'Read more'} sx={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    p: 1.5,
                    color: collapse ? '#333333' : colors.mainColor
                }} onClick={handleClick}/>

            </Stack>
            <Collapse in={collapse} className={switzerFont.className}>
                <SwitzerText text={dictionaries.contact.ourServices.one}/>
                <Typography>We are the best company for <strong>vacation home rentals
                    Dubai, </strong> especially Downtown. You can’t get it wrong when you go with us. </Typography>
                <Box sx={{my: 2}}><strong>Reasons to Rent Properties from Magnificent:</strong></Box>
                <OurServiceItems title={'Hundreds of Properties to Choose From'}
                                 text={dictionaries.contact.ourServices.choose}/>
                <OurServiceItems title={"Easily Find What You Are Looking for"}
                                 text={dictionaries.contact.ourServices.find}/>
                <OurServiceItems title={"Make an Informed Decision"}
                                 text={dictionaries.contact.ourServices.decision}/>
                <OurServiceItems title={"Get Only the Best Properties"}
                                 text={dictionaries.contact.ourServices.best}/>
                <OurServiceItems title={"A Hotel-Like Home "}
                                 text={dictionaries.contact.ourServices.hotel}/>
                <OurServiceItems title={"Easy to Move In"}
                                 text={dictionaries.contact.ourServices.move}/>
                <OurServiceItems title={"Best Prices"}
                                 text={dictionaries.contact.ourServices.price}/>
                <OurServiceTopic title={'Reasons to Invest in Our Property Management Services:'}
                                 text={dictionaries.contact.ourServices.invest}/>
                <OurServiceTopic title={'Significant Increase in Your Income :'}
                                 text={dictionaries.contact.ourServices.significant}/>
                <OurServiceTopic title={'Enjoy While We Handle Everything:'}
                                 text={dictionaries.contact.ourServices.enjoy}/>
                <OurServiceTopic title={'We Put Our Clients First:'} text={dictionaries.contact.ourServices.client}/>
                <OurServiceTopic title={'Magnificent Property Management – A Trustworthy Platform:'}
                                 text={dictionaries.contact.ourServices.platform}/>
                <Typography mt={2} className={switzerFont.className}>Are you also seeking the<strong>best property management
                    companies in Dubai </strong>? Get in touch with us whether you want to rent or manage your property
                    in Dubai.</Typography>
            </Collapse>
        </>
    )
}
export default SecondSection;