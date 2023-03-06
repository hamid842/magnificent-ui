import {Grid, Paper, Stack} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";
import colors from "@/assets/colors";
import AppIcon from "@/components/global/AppIcon";

type Props = {
    iconName: string,
    title: string,
    detail?: boolean
}

const AmenityIconAndTitle = ({iconName, title, detail = true}: Props) => {
    return (
        <>
            {!detail ?
                <Grid item xs={6} sm={4} md={3} lg={3}>
                    <Paper elevation={1} sx={{p: 0.5, height: 40, display: 'flex', alignItems: 'center'}}>
                        <Stack direction={'row'} alignItems={'center'}>
                            <AppIcon name={iconName} />
                            <SwitzerText sx={{marginLeft: 0.5, fontSize: '0.6rem' }} text={title}/>
                        </Stack>
                    </Paper>
                </Grid>
                :
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                    <span style={{fontSize: 20, color: colors.mainColor}}
                          className="material-symbols-outlined">{iconName}</span>
                        <SwitzerText sx={{marginLeft: 1, fontSize: 12}} text={title}/>
                    </Stack>
                </Grid>
            }
        </>
    )
}
export default AmenityIconAndTitle;