import { TextField, TextFieldProps } from "@mui/material";

export type TextInputProps = TextFieldProps & {
  label: string;
  name: string;
};

export function TextInput(props: TextInputProps) {
  return (
    <TextField
      {...props}
      style={{
        ...props.style,
        margin: "0.5rem 0",
      }}
    />
  );
}
