import {Grid, Paper, SelectChangeEvent, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";
import LocationInformation from "@/components/last-minute-deals/LocationInformation";
import GeneralInformation from "@/components/rent-your-place/first-step/GeneralInformation";
import ContactInformation from "@/components/rent-your-place/first-step/ContactInformation";
import AdvertiseFeatures from "@/components/rent-your-place/first-step/AdvertiseFeatures";

const FirstStep = () => {
    const [firstStepState, setFirstStepState] = useState({
        Title: "",
        type: "",
        explanation: "",
        price: "",
        squareMeters: "",
        bedroomsNumber: "",
        bedsNumber: "",
        bathroomsNumber: "",
        personCapacity: "",
        minNights: "",
        maxNights: "",
        contact: {
            contactName: "",
            contactSurName: "",
            contactPhone1: "",
            contactPhone2: "",
            contactEmail: "",
            contactAddress: ""
        }
    })

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setFirstStepState({...firstStepState, [event.target.name]: event.target.value as string});
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstStepState({...firstStepState, [event.target.name]: event.target.value as string});
    };
    const handleChangeContact = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstStepState({
            ...firstStepState,
            contact: {...firstStepState.contact, [event.target.name]: event.target.value as string}
        });
    };

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={9} lg={9}>
                    <GeneralInformation firstStepState={firstStepState} handleChange={handleChange}
                                        handleChangeSelect={handleChangeSelect}/>
                    <LocationInformation/>
                    <ContactInformation contact={firstStepState.contact} handleChangeContact={handleChangeContact}/>
                    <AdvertiseFeatures />
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Paper elevation={3} sx={{width: '100%', height: 200, p: 2}}>
                        <Typography>Ad Category section</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default FirstStep;