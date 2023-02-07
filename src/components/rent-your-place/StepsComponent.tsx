import {ReactElement, useState} from "react";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {styled} from "@mui/material/styles";
import StepConnector, {stepConnectorClasses} from "@mui/material/StepConnector";
import {StepIconProps} from "@mui/material/StepIcon";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FirstStep from "@/components/rent-your-place/first-step/FirstStep";
import SecondStep from "@/components/rent-your-place/second-step/SecondStep";
import ThirdStep from "@/components/rent-your-place/third-step/ThirdStep";
import {Button} from "@mui/material";

const steps = ["Step 1", "Step 2", "Step 3"]

const ColorLibConnector = styled(StepConnector)({
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#A47C30',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#A47C30',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: 'gray',
        borderRadius: 1,
    },
});

const ColorLibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({theme, ownerState}) => ({
    backgroundColor: theme.palette.grey[600],
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: '#A47C30',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundColor: '#A47C30'
    }),
}));

function ColorLibStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    const icons: { [index: string]: ReactElement } = {
        1: <BorderColorIcon sx={{fontSize: 15}}/>,
        2: <VisibilityOutlinedIcon sx={{fontSize: 15}}/>,
        3: <CheckOutlinedIcon sx={{fontSize: 15}}/>,
    };

    return (
        <ColorLibStepIconRoot ownerState={{completed, active}} className={className}>
            {icons[String(props.icon)]}
        </ColorLibStepIconRoot>
    );
}

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box px={10}>
            <Stepper activeStep={activeStep} connector={<ColorLibConnector/>} sx={{width: 400, margin: '0 auto 15px'}}>
                {steps.map(step =>
                    <Step key={step}>
                        <StepLabel StepIconComponent={ColorLibStepIcon}></StepLabel>
                    </Step>
                )}
            </Stepper>
            {activeStep === 0 && <FirstStep/>}
            {activeStep === 1 && <SecondStep/>}
            {activeStep === 2 && <ThirdStep/>}
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
                <Button
                    variant={'outlined'}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                        my:2,
                        textTransform: 'capitalize',
                        backgroundColor: activeStep === 0 ? 'gray' : '#A47C30',
                        display: activeStep === 0 ? 'none' : 'normal',
                        color: 'white',
                        width: 80,
                        height: 25,
                        border: 'none',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: '#A47C30',
                        }
                    }}
                >
                    Back
                </Button>
                <Button variant={'outlined'} onClick={handleNext}
                        sx={{
                            my: 2,
                            textTransform: 'capitalize',
                            backgroundColor: '#A47C30',
                            color: 'white',
                            width: 80,
                            height: 25,
                            border: 'none',
                            '&:hover': {
                                border: 'none',
                                backgroundColor: '#A47C30',
                            }
                        }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Stack>
        </Box>
    );
}