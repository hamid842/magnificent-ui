import {Grid} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";

type Props = {
    title: string,
    value: any
}

const GeneralInfoTitleAndValue = ({title, value}: Props) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} sm={6} lg={6}>
                <SwitzerText variant={'caption'} sx={{fontSize: 14}} text={title}/>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
                <SwitzerText variant={'caption'}
                             sx={{fontWeight: 600, fontSize: 14}} text={value}/>
            </Grid>
        </Grid>
    )
}

export default GeneralInfoTitleAndValue;