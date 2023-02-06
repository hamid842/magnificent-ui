import {Grid, Paper, SelectChangeEvent, Typography} from "@mui/material";
import SelectField from "@/components/SelectField";
import {useState} from "react";

const FirstStep = () => {
    const [firstStepState, setFirstStepState] = useState({
        housing: "",
        rent:""
    })

    const handleChange = (event: SelectChangeEvent) => {
        setFirstStepState({...firstStepState, [event.target.name]: event.target.value as string});
    };
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={9} lg={9}>
                    <Paper elevation={3} sx={{p: 1}}>
                        <Typography variant={'subtitle1'} sx={{fontWeight: 600}}>Category</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} lg={6}>
                                <SelectField id={'housing'} inputLabel={'Housing'} value={firstStepState.housing}
                                             onChange={handleChange} options={[]}/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <SelectField id={'rent'} inputLabel={'Rent'} value={firstStepState.rent}
                                             onChange={handleChange} options={[]}/>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Paper elevation={3} sx={{width: '100%', height: 200}}></Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default FirstStep;