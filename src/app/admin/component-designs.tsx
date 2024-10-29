import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import HeroDefault from "@/components/ui/hero-all";
import HoverCard from "@/components/ui/hover-card";
import { Button } from "@/components/ui/moving-border";
import Wrapper from "./wrapper";
import {
  CtaCard,
  CtaCard2,
  CTADefault,
  CTAWithImage,
} from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import { InfoCard } from "../(pages)/immigration/immigration-challenges/InfoCard";
// import { InfoCard } from "../immigration/immigration-challenges/page";

export const componentDesigns = {
  hero: [
    {
      id: "hero1",
      name: "Centered Hero",
      component: ({ title, description, image, buttonText }) => (
        <HeroDefault img={image ? image : "/aaa.jpg"} text={title} path="" />
      ),
    },
    {
      id: "hero2",
      name: "Split Hero",
      component: ({ title, description, buttonText, image }) => (
        <div className="flex items-center py-12 px-4">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">
              {title || "[Hero Title]"}
            </h1>
            <p className="text-xl mb-8">
              {description || "[Hero Description]"}
            </p>
            <Button type="button">{buttonText || "[Button Text]"}</Button>
          </div>
          <div className="w-1/2">
            {image ? (
              <img
                src={image}
                alt="Hero"
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="bg-gray-300 h-64 rounded-lg">
                [Image Placeholder]
              </div>
            )}
          </div>
        </div>
      ),
    },
  ],
  cards: [
    {
      id: "HoverCard",
      name: "Basic Cards",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <HoverCard
                  key={i}
                  icon={card.icon}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "ServicesCard",
      name: "Service Cards",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <ServicesCard
                  key={i}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "InfoCard",
      name: "Info Card",
      component: ({ cards = [] }) => (
        <Container>
          <Wrapper>
            {cards.map((card, i) => {
              return (
                <InfoCard
                  key={i}
                  title={card.title}
                  description={card.content}
                />
              );
            })}
          </Wrapper>
        </Container>
      ),
    },
    {
      id: "CardWithImage",
      name: "Image Card OverLay",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return (
              <CardWithImage
                key={i}
                image={card.image}
                description={card.content}
                title={card.title}
              />
            );
          })}
        </div>
      ),
    },
    {
      id: "CtaCard",
      name: "Basic Image Card",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return <CtaCard key={i} item={card} />;
          })}
        </div>
      ),
    },
    {
      id: "CtaCard2",
      name: "Image Card",
      component: ({ cards = [] }) => (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => {
            return <CtaCard2 key={i} item={card} flip={i % 2 === 0} />;
          })}
        </div>
      ),
    },
  ],

  cta: [
    {
      id: "cta1",
      name: "Simple CTA",
      component: ({ title, description, subtitle, image }) => (
        <CTADefault
          description={description}
          title={title}
          image={image}
          subtitle={subtitle}
        />
      ),
    },
    {
      id: "cta2",
      name: "Split CTA",
      component: ({ title, description, subtitle, image }) => (
        <CTAWithImage
          description={description}
          title={title}
          subtitle={subtitle}
          image={image}
        />
      ),
    },
  ],

  custom: [
    {
      id: "custom",
      name: "Custom",
      component: ({
        title,
        subtitle,
        description,
        image,
        imagePosition,
        backgroundColor,
        textColor,
        borderColor,
        borderWidth,
        padding,
      }) => {
        const containerStyle = {
          backgroundColor,
          color: textColor,
          borderColor,
          borderWidth: `${borderWidth}px`,
          borderStyle: "solid",
          padding: `${padding}px`,
        };

        const imageElement = image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            [Image Placeholder]
          </div>
        );

        const contentElement = (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            <h3 className="text-xl font-semibold">{subtitle}</h3>
            <p>{description}</p>
          </div>
        );

        const renderContent = () => {
          switch (imagePosition) {
            case "left":
              return (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">{imageElement}</div>
                  <div className="w-full md:w-1/2">{contentElement}</div>
                </div>
              );
            case "right":
              return (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">{contentElement}</div>
                  <div className="w-full md:w-1/2">{imageElement}</div>
                </div>
              );
            case "top":
              return (
                <div className="space-y-8">
                  {imageElement}
                  {contentElement}
                </div>
              );
            case "bottom":
              return (
                <div className="space-y-8">
                  {contentElement}
                  {imageElement}
                </div>
              );
            default:
              return (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">{imageElement}</div>
                  <div className="w-full md:w-1/2">{contentElement}</div>
                </div>
              );
          }
        };

        return (
          <section className="py-12" style={containerStyle}>
            <div className="container mx-auto px-4">{renderContent()}</div>
          </section>
        );
      },
    },
  ],
};
