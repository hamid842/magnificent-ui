import {Grid, Paper, Typography} from "@mui/material";
import AppTextField from "@/components/AppTextField";
import {ChangeEvent} from "react";

type Props = {
    contact:any,
    handleChangeContact:(event: ChangeEvent<HTMLInputElement>) => void,
}

const ContactInformation = ({contact,handleChangeContact}:Props)=>{
    return (
        <Paper elevation={3} sx={{p: 1}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}}>Contact Information</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField label={'Name'} id={'contactName'} value={contact.contactName}
                                  onChange={handleChangeContact}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField label={'Sur Name'} id={'contactSurName'} value={contact.contactSurName}
                                  onChange={handleChangeContact}/>
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField label={'Phone No. 1'} id={'contactPhone1'} value={contact.contactPhone1}
                                  onChange={handleChangeContact}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField label={'Phone No. 2'} id={'contactPhone2'} value={contact.contactPhone2}
                                  onChange={handleChangeContact}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField label={'Email'} id={'contactEmail'} value={contact.contactEmail}
                                  onChange={handleChangeContact}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField label={'Address'} id={'contactAddress'} value={contact.contactAddress}
                                  onChange={handleChangeContact}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default ContactInformation;