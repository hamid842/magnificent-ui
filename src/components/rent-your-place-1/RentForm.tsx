import {CircularProgress, Grid, Paper, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import AppTextField from "@/components/global/AppTextField";
import AppButton from "@/components/global/AppButton";
import * as yup from "yup";
import {getIn, useFormik} from "formik";
import PropertyTypeSelectField from "@/components/global/PropertyTypeSelectField";
import {instance as axios} from "@/config/axiosConfig";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../../context/contexts";
import dynamic from "next/dynamic";

const AuthWrapper = dynamic(() => import('@/auth/AuthWrapper'))

const validationSchema = yup.object().shape({
    Title: yup.string().required("Title is required"),
    property_type: yup.number().required("Type is required"),
    squareMeters: yup.number(),
    price: yup.number(),
    bedroomsNumber: yup.number(),
    bathroomsNumber: yup.number(),
    contact: yup.object().shape({
        contactName: yup.string().required("Name is required"),
        contactSurName: yup.string(),
        contactPhone1: yup.string().required("Phone No. is required"),
        contactPhone2: yup.string(),
        contactEmail: yup.string().required("Email is required"),
        contactAddress: yup.string().required("Address is required"),
    }),
});

const RentForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {user} = useContext(AuthContext);


    const formik = useFormik({
        initialValues: {
            Title: "",
            property_type: "",
            squareMeters: "",
            price: "",
            bedroomsNumber: "",
            bedsNumber: "",
            bathroomsNumber: "",
            contact: {
                contactName: "",
                contactSurName: "",
                contactPhone1: "",
                contactPhone2: "",
                contactEmail: "",
                contactAddress: "",
            },
            amenities: [],
            generalInformation: {},
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            handleCreate().then(() => {
            });
        },
    });

    const handleCreate = async () => {
        const { value } = formRef.current?.myInput;
        console.log("handler 1", value);
        if (formRef.current) {
            setLoading(true)
            await axios
                .post("/new-properties", {data: {...formik.values}})
                .then((res) => {
                    if (res.status === 201) {
                        console.log(res);
                        setLoading(false);
                        formRef.current?.reset();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };

    const {values, handleChange, touched, errors} = formik

    return (
        <Paper elevation={3} sx={{p: 2, height: '100%'}}>
            <form autoComplete={"off"} noValidate onSubmit={formik.handleSubmit} ref={formRef}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <EuclidText align={'center'} my={0.5} text={'Find out if your property meets our criteria'}
                                    sx={{fontWeight: 600}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            required
                            label={'Title'}
                            id={'Title'}
                            value={values.Title}
                            onChange={handleChange}
                            error={touched.Title && Boolean(errors.Title)}
                            helperText={touched.Title && errors.Title}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <PropertyTypeSelectField formik={formik}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            type={'number'}
                            label={'Square Meters'}
                            id={'squareMeters'}
                            value={values.squareMeters}
                            onChange={handleChange}
                            error={touched.squareMeters && Boolean(errors.squareMeters)}
                            helperText={touched.squareMeters && errors.squareMeters}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            type={'number'}
                            label={'Price'}
                            id={'price'}
                            value={values.price}
                            onChange={handleChange}
                            error={touched.price && Boolean(errors.price)}
                            helperText={touched.price && errors.price}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            type={'number'}
                            label={'Bedrooms Number'}
                            id={'bedroomsNumber'}
                            value={values.bedroomsNumber}
                            onChange={handleChange}
                            error={touched.bedroomsNumber && Boolean(errors.bedroomsNumber)}
                            helperText={touched.bedroomsNumber && errors.bedroomsNumber}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            type={'number'}
                            label={'Bathrooms Number'}
                            id={'bathroomsNumber'}
                            value={values.bathroomsNumber}
                            onChange={handleChange}
                            error={touched.bathroomsNumber && Boolean(errors.bathroomsNumber)}
                            helperText={touched.bathroomsNumber && errors.bathroomsNumber}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <EuclidText align={'center'} text={'Contact Info'} sx={{fontWeight: 600}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            required
                            label={'Name'}
                            id={'contact.contactName'}
                            value={values.contact.contactName}
                            onChange={handleChange}
                            error={Boolean(getIn(touched, 'contact.contactName') && getIn(errors, 'contact.contactName'))}
                            helperText={getIn(touched, 'contact.contactName') && getIn(errors, 'contact.contactName')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            label={'Sur Name'}
                            id={'contact.contactSurName'}
                            value={values.contact.contactSurName}
                            onChange={handleChange}
                            error={Boolean(getIn(touched, 'contact.contactSurName') && getIn(errors, 'contact.contactSurName'))}
                            helperText={getIn(touched, 'contact.contactSurName') && getIn(errors, 'contact.contactSurName')}
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
                            helperText={getIn(touched, 'contact.contactEmail') && getIn(errors, 'contact.contactEmail')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AppTextField
                            required
                            label={'Phone No.'}
                            id={'contact.contactPhone1'}
                            value={values.contact.contactPhone1}
                            onChange={handleChange}
                            error={Boolean(getIn(touched, 'contact.contactPhone1') && getIn(errors, 'contact.contactPhone1'))}
                            helperText={getIn(touched, 'contact.contactPhone1') && getIn(errors, 'contact.contactPhone1')}
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
                            helperText={getIn(touched, 'contact.contactAddress') && getIn(errors, 'contact.contactAddress')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Stack alignItems={'center'} mt={1}>
                            {user ? <AppButton type={'submit'} label={'Submit'} startIcon={loading &&
                                    <CircularProgress color={'inherit'} size={'15px'}/>}/> :
                                <AuthWrapper isHeader={false} label={'Submit'}/>}
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}
export default RentForm;