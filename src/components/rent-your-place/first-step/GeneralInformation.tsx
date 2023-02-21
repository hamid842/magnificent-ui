import {Grid, MenuItem, Paper, Typography} from "@mui/material";
import AppTextField from "@/components/global/AppTextField";
import SelectField from "@/components/global/SelectField";
import {useEffect, useMemo, useState} from "react";
import {IAllPropertyTypes} from "@/utils/property-type";
import {instance as axios} from "@/config/axiosConfig";
import {FormikProps} from "formik";
import {IAllAmenityType} from "@/utils/amenity-type";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    formik: FormikProps<any>
}

const GeneralInformation = ({formik}: Props) => {
    const [typeOptions, setTypeOptions] = useState<IAllPropertyTypes[]>([])
    const [errorOnRetrieveTypes, setErrorOnRetrieveTypes] = useState<boolean>(false)

    useEffect(() => {
        axios('/all-property-types').then(res => setTypeOptions(res?.data)).catch(err => {
            setErrorOnRetrieveTypes(true)
            console.log(err)
        })
    }, [])

    const sortNames = (a: IAllAmenityType, b: IAllAmenityType) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };

    const mappedPropertyTypes = useMemo(
        () => typeOptions?.sort((a, b) => sortNames(a, b)).map((propertyType) => ({
            id: propertyType.id,
            name: propertyType.name
        }))
        , [typeOptions])

    const {values, handleChange, touched, errors} = formik

    return (
        <Paper elevation={3} sx={{py: 2, px: 1, mb: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'General Information'} />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField
                        required
                        label={'Title'}
                        id={'Title'}
                        value={values.Title}
                        onChange={handleChange}
                        error={touched.Title && Boolean(errors.Title)}
                        errorMsg={touched.Title && errors.Title}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <SelectField
                        required
                        id={'property_type'}
                        inputLabel={'Type'}
                        value={values.property_type}
                        onChange={handleChange}
                        error={touched.property_type && Boolean(errors.property_type)}
                        helperText={touched.property_type && errors.property_type}

                    >{
                        mappedPropertyTypes?.map(item => <MenuItem key={item.id}
                                                                   value={item.id}>{item.name}</MenuItem>)
                    }</SelectField>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField
                        required
                        multiline={true}
                        label={errorOnRetrieveTypes ? 'Could not retrieve types!' : 'Explanation'}
                        id={'explanation'}
                        value={values.explanation} onChange={handleChange}
                        error={touched.explanation && Boolean(errors.explanation) || errorOnRetrieveTypes}
                        errorMsg={touched.explanation && errors.explanation}
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
                        errorMsg={touched.squareMeters && errors.squareMeters}
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
                        errorMsg={touched.price && errors.price}
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
                        errorMsg={touched.minNights && errors.minNights}
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
                        errorMsg={touched.maxNights && errors.maxNights}
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
                        errorMsg={touched.personCapacity && errors.personCapacity}
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
                        errorMsg={touched.bedroomsNumber && errors.bedroomsNumber}
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
                        errorMsg={touched.bedsNumber && errors.bedsNumber}
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
                        errorMsg={touched.bathroomsNumber && errors.bathroomsNumber}
                    />
                </Grid>
            </Grid>

        </Paper>
    )
}
export default GeneralInformation;