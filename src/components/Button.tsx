import { Button, SxProps } from "@mui/material";

interface ButtonComponentProps {
  title: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
  isRevert?: boolean;
  sx?: SxProps;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    title,
    onClick,
    startIcon,
    endIcon,
    disabled,
    sx,
    isRevert = false,
    ...other
  } = props;
  return (
    <Button
      variant="text"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      sx={{
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "24px",
        lineHeight: "30px",
        color: isRevert ? "primary.light" : "primary.main",
        height: "48px",
        padding: "9px 0px",
        "& .MuiButton-startIcon": {
          marginRight: "4px",
          color: "inherit",
        },
        "& .MuiButton-endIcon": {
          marginLeft: "4px",
        },
        ":hover": {
          backgroundColor: isRevert ? "primary.main" : "primary.light",
          color: "primary.contrastText",
        },
        ...sx,
      }}
      {...other}
    >
      {title}
    </Button>
  );
};
