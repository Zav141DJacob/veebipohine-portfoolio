import { LinkName } from "@/models/Resume";
import Envelope from "./Envelope";
import Facebook from "./Facebook";
import Github from "./Github";
import HamburgerMenu from "./HamburgerMenu";
import Linkedin from "./Linkedin";
import User from "./User";

export type IconType = React.FC<{ width?: number; height?: number }>;

export type IconName =
  | "envelope"
  | "user"
  | "hamburger-menu"
  | Lowercase<LinkName>;

const Icon: React.FC<{
  name: IconName;
  width?: number;
  height?: number;
}> = ({ name, width, height }) => {
  switch (name) {
    case "envelope":
      return <Envelope width={width} height={height} />;
    case "github":
      return <Github width={width} height={height} />;
    case "linkedin":
      return <Linkedin width={width} height={height} />;
    case "facebook":
      return <Facebook width={width} height={height} />;
    case "user":
      return <User width={width} height={height} />;
    case "hamburger-menu":
      return <HamburgerMenu width={width} height={height} />;
    default:
      return <></>;
  }
};

export default Icon;
