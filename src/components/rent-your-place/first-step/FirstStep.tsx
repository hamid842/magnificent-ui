// Material ui
import {Grid} from "@mui/material";
// Third party
import * as yup from 'yup';
// Project imports
import GeneralInformation from "@/components/rent-your-place/first-step/GeneralInformation";
import {useFormik} from "formik";
import AppButton from "@/components/global/AppButton";
import ContactInformation from "@/components/rent-your-place/first-step/ContactInformation";
import AdvertiseFeatures from "@/components/rent-your-place/first-step/AdvertiseFeatures";
import AppFileUploader from "@/components/rent-your-place/first-step/AppFileUploader";

const validationSchema = yup.object().shape({
    Title: yup.string().required('Title is required'),
    property_type: yup.number().required('Type is required'),
    explanation: yup.string(),
    squareMeters: yup.number(),
    price: yup.number().required('Price is required'),
    minNights: yup.number().required('Minimum Nights is required'),
    maxNights: yup.number().required('Maximum Nights is required'),
    personCapacity: yup.number(),
    bedroomsNumber: yup.number().required('Bedrooms number is required'),
    bedsNumber: yup.number().required('Beds number is required'),
    bathroomsNumber: yup.number().required('Bathrooms number is required'),
    contact: yup.object().shape({
        contactName: yup.string().required('Name is required'),
        contactSurName: yup.string().required('Sur name is required'),
        contactPhone1: yup.string().required('Phone No. is required'),
        contactPhone2: yup.string(),
        contactEmail: yup.string().required('Email is required'),
        contactAddress: yup.string().required('Address is required')
    }),
});

const FirstStep = () => {
    const formik = useFormik({
        initialValues: {
            Title: '',
            property_type: '',
            explanation: '',
            squareMeters: "",
            price: "",
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
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <div>
            <form autoComplete={'off'} noValidate onSubmit={formik.handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <GeneralInformation formik={formik}/>
                        {/*<LocationInformation/>*/}
                        <ContactInformation formik={formik}/>
                        <AppFileUploader />
                        <AdvertiseFeatures/>
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