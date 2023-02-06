import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import travelLogo from "../../public/traveloka.png";
import ticketLogo from "../../public/ticket.png";
import airbnbLogo from "../../public/airbnb.png";
import tripLogo from "../../public/trip.png";

const OurPartnership = () => {
    return (
        <>
            <Typography variant={'caption'} sx={{ml:0.6,color: 'gray'}}>Our Partnership</Typography>
            <Stack direction={'row'} alignItems={'center'} mt={2}>
                <Image src={travelLogo} alt={"Pic"} width={80} height={30}
                       style={{marginRight: 20, background: 'transparent'}}/>
                <Image src={ticketLogo} alt={"Pic"} width={80} height={20}
                       style={{marginRight: 20, background: 'transparent'}}/>
                <Image src={airbnbLogo} alt={"Pic"} width={80} height={18}
                       style={{marginRight: 20, background: 'transparent'}}/>
                <Image src={tripLogo} alt={"Pic"} width={80} height={20}/>
            </Stack>
        </>
    )
}
export default OurPartnership