import { Link } from "react-router-dom";
import StyledFormLink from "./StyledFormLink";

export default function FormLink({ title, path }) {
  return (
    <StyledFormLink>
      <Link to={path} className="link">
        {title}
      </Link>
    </StyledFormLink>
  );
}
