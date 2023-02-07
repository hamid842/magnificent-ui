import {Grid, MenuItem, Paper, SelectChangeEvent, Typography} from "@mui/material";
import AppTextField from "@/components/AppTextField";
import SelectField from "@/components/SelectField";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {PropertyType} from "@/utils/property-type";

type Props = {
    firstStepState: any,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleChangeSelect: (event: SelectChangeEvent) => void,
}

const GeneralInformation = ({firstStepState, handleChange, handleChangeSelect}: Props) => {
    const [typeOptions, setTypeOptions] = useState<PropertyType[]>([])

    useEffect(() => {
        axios('http://localhost:1337/api/property-types').then(res => setTypeOptions(res?.data.data)).catch(err => console.log(err))
    }, [])

    const mappedPropertyTypes = useMemo(
        () => typeOptions?.map((propertyType: PropertyType) => ({
            id: propertyType.id,
            name: propertyType.attributes.name
        }))
        , [typeOptions])

    return (
        <Paper elevation={3} sx={{py: 2, px: 1, mb: 2}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}}>General Information</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                    <AppTextField label={'Title'} id={'Title'} value={firstStepState.title} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <SelectField id={'type'} inputLabel={'Type'} value={firstStepState.propertyType}
                                 onChange={handleChangeSelect}>{
                        mappedPropertyTypes?.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
                    }</SelectField>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppTextField multiline={true} label={'Explanation'} id={'explanation'}
                                  value={firstStepState.explanation} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Square Meters'} id={'squareMeters'}
                                  value={firstStepState.squareMeters}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Price'} id={'price'} value={firstStepState.price}
                                  onChange={handleChange}/>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Minimum Nights'} id={'minNights'}
                                  value={firstStepState.minNights}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Maximum Nights'} id={'maxNights'}
                                  value={firstStepState.maxNights}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Person Capacity'} id={'personCapacity'}
                                  value={firstStepState.personCapacity}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Bedrooms Number'} id={'bedroomsNumber'}
                                  value={firstStepState.bedroomsNumber}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Beds Number'} id={'bedsNumber'}
                                  value={firstStepState.bedsNumber}
                                  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <AppTextField type={'number'} label={'Bathrooms Number'} id={'bathroomsNumber'}
                                  value={firstStepState.bathroomsNumber}
                                  onChange={handleChange}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default GeneralInformation;