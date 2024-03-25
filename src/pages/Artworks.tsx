import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllArtworksData } from "../api/api";
import ArtworkImage from "../components/ArtworkImage";
import { Header } from "../components/Header";
import { PaginationComponent } from "../components/PaginationComponent";
import { SearchInput } from "../components/SearchInput";
import { Artwork } from "../utils/types";
import { Artwork as ArtworkComponent } from "./Artwork";

const Artworks = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [id, setId] = useState<number>();
  const { data, isFetching } = useQuery(
    ["artworks", currentPage, searchQuery],
    () => getAllArtworksData(currentPage, searchQuery),
    {
      keepPreviousData: true,
    }
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  return (
    <Box>
      <Box>
        <Header id={id} setId={setId} />
        {id ? (
          <ArtworkComponent id={id} />
        ) : (
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <SearchInput
              onSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {isFetching ? (
              <div>Loading...</div>
            ) : (
              <Grid container spacing={"16px"} rowSpacing={"40px"}>
                {data &&
                  data.data.map((artwork: Artwork) => (
                    <Grid item xs={12} sm={6} md={4} key={artwork.id}>
                      <Box
                        onClick={() => setId(artwork.id)}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          cursor: "pointer",
                          "&:hover .title": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        <Box sx={{ height: "340px", width: "100%", overflow: "hidden" }}>
                          <ArtworkImage image_id={artwork.image_id} />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            className="title"
                            color="primary.main"
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "24px",
                              fontWeight: "700",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontFamily: "Syncopate, Arial, sans-serif",
                            }}
                          >
                            {artwork.title}
                          </Typography>
                          <Typography
                            color="primary.main"
                            marginBottom={"8px"}
                            marginTop={"4px"}
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {artwork.artist_titles}
                          </Typography>
                          {artwork.style_title && (
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
                              {artwork.style_title}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            )}
            <PaginationComponent
              page={currentPage}
              onChange={handlePageChange}
              count={data?.pagination.total_pages || 1}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Artworks;
