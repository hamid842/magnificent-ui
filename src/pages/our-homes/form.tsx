import StepsComponent from "@/components/rent-your-place/StepsComponent";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Layout from "@/components/global/Layout";
import { Typography } from "@mui/material";

const RentPlaceForm = () => {
  return (
    <>
      <Typography variant={"h6"} sx={{ mt: 20 }}></Typography>
      <StepsComponent />
    </>
  );
};
export default RentPlaceForm;

RentPlaceForm.getLayout = (page: ReactElement) => <Layout> {page}</Layout>;
