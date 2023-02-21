// Material ui
import {Grid} from "@mui/material";
// Project imports
import GeneralInformation from "@/components/rent-your-place/first-step/GeneralInformation";
import {FormikProps} from "formik";
import AppButton from "@/components/global/AppButton";
import ContactInformation from "@/components/rent-your-place/first-step/ContactInformation";
import AdvertiseFeatures from "@/components/rent-your-place/first-step/AdvertiseFeatures";


type Props = {
    formik: FormikProps<any>,
}

const FirstStep = ({formik}: Props) => {


    return (
        <div>
            <form autoComplete={'off'} noValidate onSubmit={formik.handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <GeneralInformation formik={formik}/>
                        {/*<LocationInformation/>*/}
                        <ContactInformation formik={formik}/>
                        {/*<AppFileUploader />*/}
                        <AdvertiseFeatures formik={formik}/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                        <AppButton type={'submit'} label={'Next'}/>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default FirstStep;