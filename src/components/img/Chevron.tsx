import { Box } from "@mui/material";

interface ChevronIconProps {
  isLeft: boolean;
}

export const ChevronIcon = (props: ChevronIconProps) => {
  const { isLeft } = props;
  return (
    <Box
      sx={{
        transform: isLeft ? "rotate(0deg)" : "rotate(180deg)",
        width: "22px",
        height: "22px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18L2 10L10 2"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </Box>
  );
};
