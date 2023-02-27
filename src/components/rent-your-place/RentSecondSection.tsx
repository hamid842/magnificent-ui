// Next.js
import dynamic from "next/dynamic";
import {useRouter} from 'next/router';
// Material ui
import {Grid, Typography} from "@mui/material";
// Project imports
const RentImageList = dynamic(() => import("@/components/rent-your-place/RentImageList"));
const ColorButton = dynamic(() => import("@/components/global/Header").then(mod=>mod.ColorButton));

const RentSecondSection = () => {
    const router = useRouter();
    return (
        <Grid container spacing={3} my={3}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <RentImageList/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} mt={2}>
                <Typography variant={"caption"} sx={{fontWeight: 600}}>
                    Rent your place
                </Typography>
                <Typography variant={"h6"} sx={{fontWeight: 700, marginY: 2}}>
                    One-to-one guidance from a superhost
                </Typography>
                <Typography variant={"caption"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, assumenda et facilis in inventore ipsa maxime neque
                    quibusdam rem saepe, suscipit ullam veritatis! Cum fugit nam
                    nostrum sint! Distinctio, minus.
                </Typography>
                <Grid container my={2}>
                    <Grid item xs={6}>
                        <Typography sx={{fontWeight: 600}}>100+</Typography>
                        <Typography
                            variant={"caption"}
                            sx={{fontSize: 10, lineHeight: 2}}
                        >
                            Lorem
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{fontWeight: 600}}>172</Typography>
                        <Typography
                            variant={"caption"}
                            sx={{fontSize: 10, lineHeight: 2}}
                        >
                            Places
                        </Typography>
                    </Grid>
                    <Grid item xs={6} py={1}>
                        <Typography sx={{fontWeight: 600}}>68</Typography>
                        <Typography
                            variant={"caption"}
                            sx={{fontSize: 10, lineHeight: 2}}
                        >
                            Lorem
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{fontWeight: 600}}>32M+</Typography>
                        <Typography
                            variant={"caption"}
                            sx={{fontSize: 10, lineHeight: 2}}
                        >
                            We help to find your dream place
                        </Typography>
                    </Grid>
                </Grid>
                <ColorButton
                    size={"small"}
                    variant={"contained"}
                    sx={{borderRadius: 25, m: 1, textTransform: "capitalize"}}
                    onClick={() => router.push("/our-homes/form")}
                >
                    Rent your place
                </ColorButton>
            </Grid>
        </Grid>
    )
}
export default RentSecondSection;