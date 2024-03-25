import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getArtworkData } from "../api/api";
import AddAuthorModal from "../components/AddAuthorModal";
import ArtworkImage from "../components/ArtworkImage";
import { LinkComponent } from "../components/Link";
import { Author } from "../utils/types";

interface ArtworkProps {
  id: number;
}

export const Artwork = (props: ArtworkProps) => {
  const { id } = props;
  const { data, isFetching } = useQuery(["artwork", id], () =>
    getArtworkData(id)
  );
  const [open, setOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addAuthor = (author: Author) => {
    setAuthors((prevAuthors) => [...prevAuthors, author]);
  };
  return isFetching ? (
    <Box>Loading...</Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: {xs: "column", md: "row"}
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: {xs: "100%", md: "65%"},
          maxWidth: "949px",
          overflow: "hidden",
        }}
      >
        <ArtworkImage image_id={data.data.image_id} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginX: "16px",
          marginTop: "36px",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.data.style_title && (
            <Typography
              color="secondary.main"
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                letterSpacing: "2px",
                lineHeight: "14px",
              }}
            >
              {data.data.style_title}
            </Typography>
          )}
          <Typography
            className="title"
            color="primary.main"
            sx={{
              textTransform: "uppercase",
              fontSize: "40px",
              fontWeight: "700",
              fontFamily: "Syncopate, Arial, sans-serif",
              lineHeight: "48.8px",
            }}
          >
            {data.data.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <DetailsTextComponent
            name={"Artist"}
            value={data.data.artist_titles}
            isValueLink={true}
            onClick={handleOpen}
          />
          <DetailsTextComponent
            name={"Place"}
            value={data.data.place_of_origin}
          />
          <DetailsTextComponent
            name={"Medium"}
            value={data.data.medium_display}
          />
          <DetailsTextComponent
            name={"Dimensions"}
            value={data.data.dimensions}
          />
        </Box>
      </Box>
      <AddAuthorModal
        open={open}
        handleClose={handleClose}
        addAuthor={addAuthor}
        name={data.data.artist_titles}
      />
    </Box>
  );
};

interface DetailsTextComponentProps {
  name: string;
  value: string;
  isValueLink?: boolean;
  onClick?: () => void;
}

const DetailsTextComponent = ({
  name,
  value,
  isValueLink = false,
  onClick,
}: DetailsTextComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <Typography
        color="secondary.main"
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "19.52px",
        }}
      >
        {name}
      </Typography>
      {isValueLink ? (
        <LinkComponent text={value} href={"#"} onClick={onClick} />
      ) : (
        <Typography
          color="primary.main"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "19.52px",
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );
};
