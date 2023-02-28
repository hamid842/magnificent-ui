// Material ui
import {Grid, Paper} from "@mui/material";
// Third party
import {FormikProps} from "formik";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import AppTextField from "@/components/global/AppTextField";
import PropertyTypeSelectField from "@/components/global/PropertyTypeSelectField";

type Props = {
    formik:any
}

const GeneralInformation = ({formik}: Props) => {

    const {values, handleChange, touched, errors} = formik

    return (
        <Paper elevation={3} sx={{py: 2, px: 1, mb: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'General Information'}/>
            <Grid container spacing={2}>
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
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField
                        required
                        multiline={true}
                        label={'Explanation'}
                        id={'explanation'}
                        value={values.explanation} onChange={handleChange}
                        error={touched.explanation && Boolean(errors.explanation)}
                        helperText={touched.explanation && errors.explanation}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
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
                <Grid item xs={12} sm={6} lg={3}>
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

                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        type={'number'}
                        label={'Minimum Nights'}
                        id={'minNights'}
                        value={values.minNights}
                        onChange={handleChange}
                        error={touched.minNights && Boolean(errors.minNights)}
                        helperText={touched.minNights && errors.minNights}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        type={'number'}
                        label={'Maximum Nights'}
                        id={'maxNights'}
                        value={values.maxNights}
                        onChange={handleChange}
                        error={touched.maxNights && Boolean(errors.maxNights)}
                        helperText={touched.maxNights && errors.maxNights}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        type={'number'}
                        label={'Person Capacity'}
                        id={'personCapacity'}
                        value={values.personCapacity}
                        onChange={handleChange}
                        error={touched.personCapacity && Boolean(errors.personCapacity)}
                        helperText={touched.personCapacity && errors.personCapacity}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
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
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField
                        type={'number'}
                        label={'Beds Number'}
                        id={'bedsNumber'}
                        value={values.bedsNumber}
                        onChange={handleChange}
                        error={touched.bedsNumber && Boolean(errors.bedsNumber)}
                        helperText={touched.bedsNumber && errors.bedsNumber}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
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
            </Grid>

        </Paper>
    )
}
export default GeneralInformation;