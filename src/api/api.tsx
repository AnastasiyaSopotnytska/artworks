export const getAllArtworksData = async (page = 1, query = "") => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?limit=9&page=${page}&q=${encodeURIComponent(
      query
    )}&fields=image_id,title,artist_id,id,artist_titles,category_titles,style_title`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getArtworkData = async (id: number) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
