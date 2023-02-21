import {Paper, Stack} from "@mui/material";
import GeneralInfoTitleAndValue from "@/components/global/GeneralInfoTitleAndValue";
import {IProperty} from "@/utils/property-type";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    data: IProperty
}

const GeneralInformation = ({data}: Props) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, pb: 1}} text={'General Information'}/>
            <Stack direction={'row'}>
                <GeneralInfoTitleAndValue title={'Floor Location'} value={''}/>
                <GeneralInfoTitleAndValue title={'Housing Shape'} value={''}/>
            </Stack>
            <Stack direction={'row'}>
                <GeneralInfoTitleAndValue title={'Rooms Number'} value={''}/>
                <GeneralInfoTitleAndValue title={'Furnished'} value={''}/>
            </Stack>
            <Stack direction={'row'}>
                <GeneralInfoTitleAndValue title={'Cooling Type'} value={''}/>
                <GeneralInfoTitleAndValue title={'Building Age'} value={''}/>
            </Stack>
        </Paper>
    )
}

export default GeneralInformation;