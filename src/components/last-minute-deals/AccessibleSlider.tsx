import {Box, Paper, Stack, Typography} from "@mui/material";

type Props = {
    title:string,
    value:string,
    color:string
}

const AccessibleSlider = ({title,value,color}:Props)=>{
    return (
        <Stack>
            <Typography variant={'caption'} sx={{fontWeight: 600, fontSize: 10, mt: 1}}>{title}</Typography>
            <Paper sx={{
                width: '100%',
                height: 15,
                border: `1px solid ${color}`,
                borderRadius: 1,
                boxShadow: 'none'
            }}>
                <Box sx={{
                    backgroundColor: color,
                    width: `${value}%`,
                    height: '100%',
                    position: 'relative',
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        height: 14,
                        bottom: 0,
                        right: 0,
                        borderBottom: '15px solid white',
                        borderLeft: `5px solid ${color}`
                    }
                }}>
                    <Typography sx={{color: 'white', float: 'right', fontSize: 10, mr: 1}}>%{value}</Typography>
                </Box>
            </Paper>
        </Stack>
    )
}
export default AccessibleSlider;