import { ReactNode } from "react";
import { Box } from "@mui/material";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Box sx={{ px: { xs: 2, sm: 2, md: 15, lg: 20, xl: 45 } }}>{children}</Box>
  );
};
export default AppContainer;
