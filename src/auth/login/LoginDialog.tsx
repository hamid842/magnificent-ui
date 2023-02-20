import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
// Material ui
import { Box, Button, Divider, Stack } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import AppTextField from "@/components/global/AppTextField";
import colors from "@/assets/colors";
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import PasswordField from "@/components/global/PasswordField";
import { instance as axios } from "@/config/axiosConfig";
// Third party
import { AxiosResponse, isAxiosError } from "axios";
import { AuthContext } from "../../../context/contexts";

type TAxiosErrorResponse = {
  status: number;
  name: "ValidationError";
  message: string;
};

// The id of form fields
enum EForm {
  IDENTIFIER = "identifier", // Note: The login route accepts Email or Username as identifier
  PASS = "password",
}

// Type of state that holds the form data
// NOTE: Make sure all the fields in the below type, are the same as values in the above enum
type TForm = {
  identifier: string;
  password: string;
};

// NOTE: Make sure all the fields in the below type, are the same as values in the above enum
type TFormError = {
  identifier?: string;
  password?: string;
};

/**
 * Used to make errors returned by API prettier
 */
const prettyMessage = (input: string): string => {
  // Capitalize each word (Title Case)
  let output = input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  // Note: The login route accepts Email or Username as identifier
  output = output.replaceAll("Identifier", "Username / Email");
  return output;
};

type LoginDialogProps = {
  setValue: Dispatch<SetStateAction<number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const LoginDialog = ({ setValue, setOpen }: LoginDialogProps) => {
  const { setUser } = useContext(AuthContext);
  const [formError, setFormError] = useState<TFormError>({});
  // -----------------------------------------------------------------------------------
  const [form, setForm] = useState<TForm>({
    identifier: "",
    password: "",
  });

  // -----------------------------------------------------------------------------------

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: EForm) => {
    const value = e.target.value;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [id]: value,
      };
    });
  };

  // -----------------------------------------------------------------------------------

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    //--------------------------------------------
    setFormError({});
    //--------------------------------------------
    const postData = {
      identifier: form.identifier,
      password: form.password,
    };
    axios
      .post("/auth/local", postData)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const { jwt, user } = response.data;
          console.log(`${user.username} Logged in`);
          setUser(user.username);
          // TODO: Save JWT in local storage
          localStorage.setItem("JWT", jwt);
          setOpen(false);
        }
      })
      .catch((err) => {
        if (!isAxiosError(err)) return console.log(`[Error in API] -> ${err}`);
        //------------------------------------------------------------------------------
        // For Validation Errors, the path to error messages is: err.response.data.error.details.errors
        const error: TAxiosErrorResponse = err.response?.data.error;
        if (!error) return;
        if (error.name === "ValidationError") {
          // There was a Validation problem with one of the fields
          setFormError(() => {
            return {
              identifier: prettyMessage(error.message),
              password: prettyMessage(error.message),
            };
          });
        }
      });
  };

  // -----------------------------------------------------------------------------------

  return (
    <>
      {/* Title */}
      <EuclidText
        variant={"h5"}
        text={"Login"}
        sx={{ fontWeight: 700, textAlign: "center" }}
        color={colors.navMenuColor}
      />
      {/* ------------------------------------------------------------------------------------- */}
      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ------------------------------------------------------------------------------------- */}
        {/* Username */}
        <Box sx={{ width: "100%", my: 2 }}>
          {/* Input Field */}
          <AppTextField
            label={"Email / Username"}
            required
            error={!!formError.identifier}
            helperText={formError.identifier || ""}
            id={EForm.IDENTIFIER}
            value={form.identifier}
            onChange={(e) => {
              // handleChange(e, EForm.IDENTIFIER);
            }}
          />
        </Box>
        {/* ------------------------------------------------------------------------------------- */}
        {/* Password */}
        <PasswordField
          label={"Password"}
          required
          error={!!formError.password}
          helperText={formError.password || ""}
          id={EForm.PASS}
          value={form.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleChange(e, EForm.PASS);
          }}
          sx={{ mb: 2 }}
        />
        {/* ------------------------------------------------------------------------------------- */}
        {/* Login Button */}
        <AppButton
          label={"Login"}
          type={"submit"}
          sx={{ borderRadius: 1, width: 100 }}
          startIcon={<LoginIcon fontSize={"small"} />}
        />
        {/* ------------------------------------------------------------------------------------- */}
      </form>
      {/* ------------------------------------------------------------------------------------- */}
      {/* Forgot Password */}
      <Stack alignItems={"center"}>
        <Button
          sx={{
            color: colors.navMenuColor,
            textTransform: "none",
            fontSize: 10,
          }}
        >
          Forgot password?
        </Button>
        {/* ------------------------------------------------------------------------------------- */}
        <Divider orientation={"vertical"} sx={{ height: 20 }} />
        {/* ------------------------------------------------------------------------------------- */}
        {/* OR */}
        <EuclidText text={"Or"} sx={{ mt: 0.5, fontSize: 10 }} />
        {/* ------------------------------------------------------------------------------------- */}
        {/* Register */}
        <Stack direction={"row"} alignItems={"center"}>
          {/* Title */}
          <SwitzerText text={"Don't have an account?"} sx={{ fontSize: 10 }} />
          {/* Register Button */}
          <Button
            sx={{
              color: colors.mainColor,
              textTransform: "none",
              fontSize: 10,
              fontWeight: 600,
            }}
            onClick={() => setValue(1)}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default LoginDialog;
