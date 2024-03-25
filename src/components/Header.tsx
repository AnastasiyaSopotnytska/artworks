import { Box, Typography } from "@mui/material";
import { ButtonComponent } from "./Button";
import { ChevronIcon } from "./img/Chevron";
interface HeaderProps {
  id?: number;
  setId: (id?: number) => void;
}

export const Header = (props: HeaderProps) => {
  const { id, setId } = props;
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: id ? "48px" : "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {id && (
        <ButtonComponent
          title="Back"
          isRevert={true}
          startIcon={<ChevronIcon isLeft={true} />}
          onClick={() => setId(undefined)}
          sx={{
            position: "absolute",
            left: "10px",
            height: "100%",
          }}
        />
      )}
      <Typography
        color="secondary.main"
        sx={{
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
      >
        panenco Frontend test task
      </Typography>
    </Box>
  );
};
