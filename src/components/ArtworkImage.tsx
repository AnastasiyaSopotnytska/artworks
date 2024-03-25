interface ArtworkImageProps {
  image_id: string;
}
const ArtworkImage = (props: ArtworkImageProps) => {
  const { image_id } = props;
  const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

  return (
    <img
      src={imageUrl}
      alt="Artwork"
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
};

export default ArtworkImage;
