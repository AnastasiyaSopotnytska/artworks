import { Link } from "@mui/material";

interface LinkComponentProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export const LinkComponent = (props: LinkComponentProps) => {
  const { text, href, onClick } = props;
  return (
    <Link
      href={href}
      color="inherit"
      onClick={onClick}
      sx={{
        ":hover": {
          color: "primary.contrastText",
        },
      }}
    >
      {text}
    </Link>
  );
};
