import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import travelPic from "../../../public/rent-place/ship.png";
import cityPic from "../../../public/rent-place/city.png";
import islandPic from "../../../public/rent-place/beach.png";
import explorePic from "../../../public/rent-place/explore.png";

const RentLastSection = ()=>{
    return (
        <Stack direction={"row"} justifyContent={"space-between"} py={5}>
            <Stack
                direction={"column"}
                alignItems={"center"}
                sx={{color: "#A8A7AB"}}
            >
                <Image src={travelPic} alt={"Travel"} width={100} height={100}/>
                <Typography mt={1}>TRAVEL</Typography>
            </Stack>
            <Stack
                direction={"column"}
                alignItems={"center"}
                sx={{color: "gray"}}
            >
                <Image src={cityPic} alt={"Travel"} width={100} height={100}/>
                <Typography mt={1}>CITY TOUR</Typography>
            </Stack>
            <Stack
                direction={"column"}
                alignItems={"center"}
                sx={{color: "gray"}}
            >
                <Image src={islandPic} alt={"Travel"} width={100} height={100}/>
                <Typography mt={1}>ISLAND TOUR</Typography>
            </Stack>
            <Stack
                direction={"column"}
                alignItems={"center"}
                sx={{color: "gray"}}
            >
                <Image src={explorePic} alt={"Travel"} width={100} height={100}/>
                <Typography mt={1}>EXPLORE WORLD</Typography>
            </Stack>
        </Stack>
    )
}
export default RentLastSection;