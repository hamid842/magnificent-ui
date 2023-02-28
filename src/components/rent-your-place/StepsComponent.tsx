import { ReactElement, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import FirstStep from "@/components/rent-your-place/first-step/FirstStep";
import SecondStep from "@/components/rent-your-place/second-step/SecondStep";
import ThirdStep from "@/components/rent-your-place/third-step/ThirdStep";
import AppContainer from "@/components/global/AppContainer";
import { useFormik } from "formik";
import * as yup from "yup";

const steps = ["Step 1", "Step 2", "Step 3"];

const ColorLibConnector = styled(StepConnector)({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#A47C30",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#A47C30",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "gray",
    borderRadius: 1,
  },
});

const ColorLibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.grey[600],
  zIndex: 1,
  color: "#fff",
  width: 25,
  height: 25,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#A47C30",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#A47C30",
  }),
}));

function ColorLibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: ReactElement } = {
    1: <BorderColorIcon sx={{ fontSize: 15 }} />,
    2: <VisibilityOutlinedIcon sx={{ fontSize: 15 }} />,
    3: <CheckOutlinedIcon sx={{ fontSize: 15 }} />,
  };

  return (
    <ColorLibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorLibStepIconRoot>
  );
}

const validationSchema = yup.object().shape({
  Title: yup.string().required("Title is required"),
  property_type: yup.number().required("Type is required"),
  explanation: yup.string(),
  squareMeters: yup.number(),
  price: yup.number().required("Price is required"),
  minNights: yup.number().required("Minimum Nights is required"),
  maxNights: yup.number().required("Maximum Nights is required"),
  personCapacity: yup.number(),
  bedroomsNumber: yup.number().required("Bedrooms number is required"),
  bedsNumber: yup.number().required("Beds number is required"),
  bathroomsNumber: yup.number().required("Bathrooms number is required"),
  contact: yup.object().shape({
    contactName: yup.string().required("Name is required"),
    contactSurName: yup.string().required("Sur name is required"),
    contactPhone1: yup.string().required("Phone No. is required"),
    contactPhone2: yup.string(),
    contactEmail: yup.string().required("Email is required"),
    contactAddress: yup.string().required("Address is required"),
  }),
});

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      Title: "",
      property_type: "",
      explanation: "",
      squareMeters: "",
      price: "",
      bedroomsNumber: "",
      bedsNumber: "",
      bathroomsNumber: "",
      personCapacity: "",
      minNights: "",
      maxNights: "",
      contact: {
        contactName: "",
        contactSurName: "",
        contactPhone1: "",
        contactPhone2: "",
        contactEmail: "",
        contactAddress: "",
      },
      amenities: [],
      generalInformation: {},
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      localStorage.setItem("rentItem", JSON.stringify(values));
      setActiveStep((prev) => prev + 1);
    },
  });

  return (
    <AppContainer>
      <Stepper
        activeStep={activeStep}
        connector={<ColorLibConnector />}
        sx={{
          width: { xs: 250, sm: 400, md: 500, lg: 500 },
          margin: "0 auto 30px",
        }}
      >
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel StepIconComponent={ColorLibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <FirstStep formik={formik} />}
      {activeStep === 1 && (
        <SecondStep formik={formik} setActiveStep={setActiveStep} />
      )}
      {activeStep === 2 && <ThirdStep />}
    </AppContainer>
  );
}
