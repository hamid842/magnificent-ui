import {Dispatch, SetStateAction, useEffect} from "react";
// Material ui
import {Grid, Paper, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Third party
import {FormikProps} from "formik";
// Project imports
import GeneralInfoTitleAndValue from "@/components/global/GeneralInfoTitleAndValue";
import Explanation from "@/components/global/Explanation";
import AdvertiseFeatures from "@/components/rent-your-place/first-step/AdvertiseFeatures";
import AppButton from "@/components/global/AppButton";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import {instance as axios} from "@/config/axiosConfig";

type Props = {
    formik: FormikProps<any>,
    setActiveStep: Dispatch<SetStateAction<number>>
}

const SecondStep = ({formik, setActiveStep}: Props) => {
    const {values} = formik;

    const handleCreateProperty = async () => {
        await axios.post('/new-properties', {data:{...formik.values}}).then(res => {
                if (res.status === 201) {
                    console.log(res)
                    setActiveStep(prev => prev + 1)
                }
            }
        ).catch(err => console.log(err))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Paper elevation={3} sx={{p: 2}}>
                <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'Rent Information'}/>
                <Stack direction={'row'} alignItems={'center'}>
                    <LocationOnIcon fontSize={'small'} sx={{color: '#FECD4C'}}/>
                    <Typography variant={'caption'} sx={{color: 'gray', fontSize: 10}}>Dubai, UAE</Typography>
                </Stack>
                <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'General Information'}/>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Title'} value={values.Title}/>
                        <GeneralInfoTitleAndValue title={'Property Type'} value={values.property_type}/>
                        <GeneralInfoTitleAndValue title={'Square Meters'} value={values.squareMeters}/>
                        <GeneralInfoTitleAndValue title={'Price'} value={values.price}/>
                        <GeneralInfoTitleAndValue title={'Person Capacity'} value={values.personCapacity}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Bedrooms Number'} value={values.bedroomsNumber}/>
                        <GeneralInfoTitleAndValue title={'Beds Number'} value={values.bedsNumber}/>
                        <GeneralInfoTitleAndValue title={'Bathrooms Number'} value={values.bathroomsNumber}/>
                        <GeneralInfoTitleAndValue title={'Minimum Nights'} value={values.minNights}/>
                        <GeneralInfoTitleAndValue title={'Maximum Nights'} value={values.maxNights}/>
                    </Grid>
                </Grid>
            </Paper>
            <Explanation
                explanation={values.explanation}/>
            <Paper elevation={3} sx={{p: 2}}>
                <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'Contact Information'}/>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Name'} value={values.contact.contactName}/>
                        <GeneralInfoTitleAndValue title={'Sur name'} value={values.contact.contactSurName}/>
                        <GeneralInfoTitleAndValue title={'Email'} value={values.contact.contactEmail}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <GeneralInfoTitleAndValue title={'Phone No.'} value={values.contact.contactPhone1}/>
                        <GeneralInfoTitleAndValue title={'Phone No.'} value={values.contact.contactPhone2}/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <SwitzerText variant={'caption'} sx={{fontSize: 12}} text={"Address"}/>
                            </Grid>
                            <Grid item xs={9}>
                                <SwitzerText variant={'caption'}
                                             sx={{fontWeight: 600, fontSize: 12}} text={values.contact.contactAddress}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <AdvertiseFeatures formik={formik}/>
            <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
                <AppButton label={'Back'} onClick={() => setActiveStep(prev => prev - 1)}/>
                <AppButton label={'Next'} onClick={handleCreateProperty}/>
            </Stack>
        </>
    )
}
export default SecondStep;