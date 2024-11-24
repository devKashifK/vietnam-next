import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";

import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "./federal-skilled-worker";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";

export default function ExpressEntry() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Canada Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Express Entry
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canada&apos;s Express Entry program allows highly skilled
                candidates to attain Canadian permanent residency status in the
                shortest time, typically within six months. This is the fastest
                way for eligible candidates who are young, highly educated, and
                possess valuable work experience to come to Canada. However,
                achieving a high enough Comprehensive Ranking System (CRS) score
                in federal draws can be challenging.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Three Main Programs​"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Express Entry
              </p>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expressEntry.map((item, index) => (
              <ServicesCard
                key={index}
                id={item.id}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
          </div>

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left pt-10">
              Through Express Entry, candidates and their family can participate
              and compete for points to receive an ITA – Invitation to Apply
              from the Canadian government to immigrate and work in the country
            </p>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-5">
        <Title
          subtitle="How to participate Express Entry?"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              You can join the Express Entry program through a two-step process:
            </p>
          }
        />
        <div className="py-6 ">
          {faqFederal.map((item, index) => {
            return (
              <FAQ
                key={index}
                title={item.title}
                id={item.id}
                description={item.description()}
              />
            );
          })}
        </div>
      </Container>
      <Container>
        <Title
          subtitle="Who is Ideal Candidate"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3"></p>
          }
        />
        <div className="flex flex-col">
          <p className="text-sm text-black/60 text-left">
            The Express Entry program is generally suitable for young
            individuals with good English or French proficiency and demonstrated
            skills and work experience. These are key factors in assessing and
            ranking candidates within Express Entry like age, language
            proficiency, education and work experience, having family
            relationship, having job offer or provincial nomination. So, if you
            are a young person with good English/French proficiency and possess
            skills and work experience, you have a good chance of achieving a
            high CRS score in Express Entry and receiving an invitation to
            immigrate to Canada.
          </p>
        </div>
      </Container>
      <Container>
        <Title
          subtitle="Factors"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Factors that increase your chance to receive Invitation to Apply
              (ITA) in the Express Entry Program
            </p>
          }
        />
        <div className="flex flex-col">
          <p className="text-sm text-black/60 text-left">
            Through Express Entry, candidates and their family can participate
            and compete for points to receive an ITA – Invitation to Apply from
            the Canadian government to immigrate and work in the country.
          </p>
        </div>
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-2 max-w-7xl mx-auto">
            {factors.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
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
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}
const factors = [
  {
    id: 1,
    title: "A Job Ofer",
    description:
      "If you receive a job offer from a company or organization in Canada, you can gain extra points and increase your likelihood of being invited to participate in the program",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Provincial Nomination",
    description:
      "If you receive a nomination from a province or territory through the Provincial Nominee Program (PNP), your CRS score will significantly increase, giving you priority in receiving an invitation to join Express Entry",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 3,
    title: "French-Language Advantage",
    description:
      "Proficiency in French, in addition to English, is highly valued by Canada. Demonstrating strong French language skills through recognized tests can earn extra points in the Comprehensive Ranking System (CRS). This boosts your chances of receiving an Invitation to Apply (ITA) for permanent residency in Canada",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];

const faqFederal = [
  {
    id: 1,
    title: "Prepare and Submit Your Application",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Language Test Results: You need to achieve a high enough score to
          demonstrate your English or French language proficiency through tests
          like IELTS (English) or TCF (French)
        </li>
        <li>
          Educational Credential Assessment: To determine your educational
          level, you will need an assessment report that equates your foreign
          educational credentials to the Canadian education system from a
          recognized organization like WES or ICAS.
        </li>
        <li>
          Passport: To verify your identity and immigration status, you&apos;ll
          need a valid passport or travel document.
        </li>
        <li>
          Once you have organized and prepared these documents, you can submit
          your application through the Express Entry system and create an online
          profile.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title:
      "Once you have organized and prepared these documents, you can submit your application through the Express Entry system and create an online profile.",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Through periodic draws, if your score is high enough, you may receive
          an Invitation to Apply (ITA) for Canadian permanent residency through
          the Express Entry program
        </li>
      </ul>
    ),
  },
];
const expressEntry = [
  {
    id: 1,
    title: "Công nhân lành nghề liên bang (FSW)",
    description:
      "For skilled workers at the federal level. This program does not require a connection to Canada, making it an ideal immigration option for foreign citizens living outside of Canada",
  },
  {
    id: 2,
    title: "Thương mại tay nghề liên bangs (FST)",
    description:
      "For skilled tradespersons in industrial and artisanal sectors. You must meet all the minimum requirements for your skilled trades work experience job offer or  certificate of qualification and language ability",
  },
  {
    id: 3,
    title: "Canadian Experience Class (CEC)",
    description:
      "A popular choice for foreign workers who have accumulated work experience in Canada and international students who have found employment in Canada after graduation",
  },
];

const features = [
  {
    id: 1,
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: <Icon icon="ooui:user-active" className="text-6xl w-[54px]" />,
  },
  {
    id: 2,
    title: "Language Proficiency",
    description:
      "We can provide guidance on improving your language skills in English and/or French, as higher language test scores can significantly boost your CRS points.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Educational credential assessment",
    description:
      "We can help you navigate the process of obtaining an ECA for your foreign educational credentials, which can add points to your CRS score.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title: "Secure a Job Offers",
    description:
      "We can assist in searching for job in Canada, which can be worth a substantial number of CRS points. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 5,
    title: "Provincial Nominee Programs (PNPs)",
    description:
      "We can advise on PNPs and help you prepare for provincial nominations, which can add valuable points to your CRS score.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 6,
    title: "Claim extra score for family connection",
    description:
      "If you have a sibling in Canada who is a citizen or permanent resident, we can help you understand how to claim additional points for this family connection",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
