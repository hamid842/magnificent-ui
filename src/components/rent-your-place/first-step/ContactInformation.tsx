import {Grid, Paper, Typography} from "@mui/material";
import AppTextField from "@/components/global/AppTextField";
import {FormikProps, getIn} from "formik";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    formik: FormikProps<any>
}

const ContactInformation = ({formik}: Props) => {
    const {values, handleChange, touched, errors} = formik
    return (
        <Paper elevation={3} sx={{p: 1}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'Contact Information'} />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        required
                        label={'Name'}
                        id={'contact.contactName'}
                        value={values.contact.contactName}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactName') && getIn(errors, 'contact.contactName'))}
                        errorMsg={getIn(touched, 'contact.contactName') && getIn(errors, 'contact.contactName')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        required
                        label={'Sur Name'}
                        id={'contact.contactSurName'}
                        value={values.contact.contactSurName}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactSurName') && getIn(errors, 'contact.contactSurName'))}
                        errorMsg={getIn(touched, 'contact.contactSurName') && getIn(errors, 'contact.contactSurName')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField
                        required
                        label={'Email'}
                        id={'contact.contactEmail'}
                        value={values.contact.contactEmail}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactEmail') && getIn(errors, 'contact.contactEmail'))}
                        errorMsg={getIn(touched, 'contact.contactEmail') && getIn(errors, 'contact.contactEmail')}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField
                        required
                        label={'Phone No. 1'}
                        id={'contact.contactPhone1'}
                        value={values.contact.contactPhone1}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactPhone1') && getIn(errors, 'contact.contactPhone1'))}
                        errorMsg={getIn(touched, 'contact.contactPhone1') && getIn(errors, 'contact.contactPhone1')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField
                        label={'Phone No. 2'}
                        id={'contact.contactPhone2'}
                        value={values.contact.contactPhone2}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactPhone2') && getIn(errors, 'contact.contactPhone2'))}
                        errorMsg={getIn(touched, 'contact.contactPhone2') && getIn(errors, 'contact.contactPhone2')}
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField
                        required
                        label={'Address'}
                        id={'contact.contactAddress'}
                        value={values.contact.contactAddress}
                        onChange={handleChange}
                        error={Boolean(getIn(touched, 'contact.contactAddress') && getIn(errors, 'contact.contactAddress'))}
                        errorMsg={getIn(touched, 'contact.contactAddress') && getIn(errors, 'contact.contactAddress')}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default ContactInformation;