import { Box, Pagination, PaginationItem } from "@mui/material";
import { ButtonComponent } from "./Button";
import { ChevronIcon } from "./img/Chevron";
interface PaginationComponentProps {
  page: number;
  count: number;
  onChange: (page: number) => void;
}

export const PaginationComponent = ({
  page,
  count,
  onChange,
}: PaginationComponentProps) => {

  return (
    <Box
      sx={{
        marginTop: "32px",
        width: "100%",
        display: "flex",
        justifyContent: {xs: "center", md: "space-between"},
      }}
    >
      <ButtonComponent
        title="PREVIOUS"
        startIcon={<ChevronIcon isLeft={true} />}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        sx={{
          display: {xs: "none", md: "flex"}
        }}
      />
      <Pagination
        page={page}
        count={count}
        onChange={(event, page) => onChange(page)}
        hidePrevButton
        hideNextButton
        renderItem={(item) => (
          <PaginationItem
            {...item}
          />
        )}
        sx={{
          ".MuiPaginationItem-root": {
            letterSpacing: "2px",
            fontSize: "24px",
            lineHeight: "30px",
            padding: "10px",
            height: "48px",
            minWidth: "48px",
            color: "primary.main",
            margin: 0,
            ":hover": {
              backgroundColor: "primary.light",
              color: "primary.contrastText",
            },
          },
          ".Mui-selected": {
            border: "1px solid",
            borderRadius: 0,
            borderColor: "primary.main",
            backgroundColor: "primary.light",
          },
        }}
      />
      <ButtonComponent
        title="NEXT"
        endIcon={<ChevronIcon isLeft={false} />}
        onClick={() => onChange(page + 1)}
        sx={{
          display: {xs: "none", md: "flex"}
        }}
      />
    </Box>
  );
};
