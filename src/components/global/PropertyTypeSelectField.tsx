import {useEffect, useMemo, useState} from "react";
import {IAllPropertyTypes} from "@/utils/property-type";
import {instance as axios} from "@/config/axiosConfig";
import {IAllAmenityType} from "@/utils/amenity-type";
import {MenuItem} from "@mui/material";
import SelectField from "@/components/global/SelectField";
import {FormikProps} from "formik";

type Props = {
    formik: FormikProps<any>
}

const PropertyTypeSelectField = ({formik}: Props)=>{
    const [typeOptions, setTypeOptions] = useState<IAllPropertyTypes[]>([]);

    const {values, handleChange, touched, errors} = formik

    useEffect(() => {
        axios('/all-property-types').then(res => setTypeOptions(res?.data)).catch(err =>  console.log(err)
        )
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
    return (
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
    )
}
export default PropertyTypeSelectField;