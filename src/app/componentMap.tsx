// componentMap.js
import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import HoverCard from "@/components/ui/hover-card";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react";

export const componentMap = {
  Container: Container,
  HoverCard: HoverCard,
  CTADefault: CTADefault,
  CardWithImage: CardWithImage,
  CTAWithImage: CTAWithImage,
  Title: Title,
  TitleWithBottomBorder: TitleWithBottomBorder,
  TitleWithDoubleBorder: TitleWithDoubleBorder,
  Glass: Glass,
  UL: UL,
  List: List,
  Icon: Icon,
};
