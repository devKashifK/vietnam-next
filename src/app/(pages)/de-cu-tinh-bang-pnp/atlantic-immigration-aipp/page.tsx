import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "../alberta-nhap-cu-aaip/page";

export default function Atlantic() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">AIPP</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                AIPP opportunities or Atlantic Immigration Pilot Program
              </h3>

              <p className="text-sm text-black/60 text-left">
                Are you planning to move to Canada? If so, the Atlantic
                Immigration Pilot Program could be your solution. This program
                will allow for easier immigration into Canada by making it
                possible for applicants who are not Canadian citizens or
                permanent residents of Canada to apply online. The new system is
                expected to help expedite processing times and reduce
                application costs. With this faster route, you can soon call
                yourself a proud Canadian.
              </p>
              <p className="text-sm text-black/60 text-left">
                AIPP opportunities or Atlantic Immigration Pilot Program
                opportunities for outland candidates for permanent residency in
                Canada are way higher than any other province now.
              </p>
              <p className="text-sm text-black/60 text-left">
                In the year 2017, The Canadian Govt. decided to bring a pilot
                program to stimulate economic growth in Canada’s Atlantic
                Provinces. The Atlantic Provinces are: New Brunswick,
                Newfoundland and Labrador, Nova Scotia and Prince Edward Island
              </p>
              <p className="text-sm text-black/60 text-left">
                In this year 2021 under Canada Immigration Level Plan, the Govt.
                decided to invite 6250 immigrants for the Permanent Resident
                application through this Atlantic Immigration Pilot Program.
              </p>
              <p className="text-highlight text-sm text-black/60 text-left">
                Atlantic Immigration Pilot Program set to become permanent
                January 1, 2022
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title subtitle="New Brunswick" />
        <p className="text-sm text-black/60 text-left">
          New Brunswick is the only bilingual province in Canada and forms the
          land bridge linking this region to continental North America. The
          province has a large goods-producing sector and services-producing
          sector where most of the service-based employees are employed. The
          employers in the province have a significant presence in agriculture,
          forestry, food processing, freight transport (including railways and
          trucking), media, oil, and shipbuilding.
        </p>
      </Container>
      <Container>
        <Title subtitle="Nova Scotia" />
        <p className="text-sm text-black/60 text-left">
          Nova Scotia has a diversified economy bordering both land and sea
          lines. Some of the predominant industries are fishing, forestry,
          mining, and tourism. It attracts a lot of domestic tourists from
          neighboring countries. It has a population of nearly 1 million people
          with Halifax as its main city. Halifax, with a population of over
          400,000 people, is Nova Scotia’s largest city and its political
          capital. It is also one of Canada’s major seaports and a main gateway
          to the Atlantic Ocean.
        </p>
      </Container>
      <Container>
        <Title subtitle="Prince Edward Island" />
        <p className="text-sm text-black/60 text-left">
          Just like the economy of P.E.I features a mix of traditional resources
          spanning agriculture, fisheries, and tourism. Over the years the
          province has witnessed lots of developments and changes in the areas
          of bioscience and advanced manufacturing. As of April 1, 2020, the
          minimum wage is $12.85 per hour and the provincial government has
          numerous programs available to help students get into the job market.
        </p>
      </Container>
      <Container>
        <Title subtitle="Newfoundland and Labrador" />
        <p className="text-sm text-black/60 text-left">
          Fish farming is considered one of the most important economic
          activities in the province. Retail trade, Manufacturing, and
          transportation are also considered other significant economic
          industries.
        </p>
      </Container>

      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Express Entry"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                What can we help you?
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {featuresPage.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}
