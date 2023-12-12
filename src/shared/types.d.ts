import { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
}

interface FooterProps {
  title?: string;
  footNote?: string | ReactElement;
  theme?: string;
}
