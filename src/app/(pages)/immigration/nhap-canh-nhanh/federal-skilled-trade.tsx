import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "./cong-nhan-lanh-nghe-lien-bang/page";

export default function FedralSkilledTrade() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Express entry</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Thương mại tay nghề liên bangs
              </h3>

              <p className="text-sm text-black/60 text-left">
                To be eligible for the Thương mại tay nghề liên bangs Program
                (FST), candidates must have a minimum of two years of work
                experience in a skilled trade within the last five years.
                Additionally, candidates may be required to have trade
                certificates issued by a Canadian province or territory.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Thương mại tay nghề liên bangs​"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Minimum Criteria
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              To be eligible, you must meet all the minimum requirements for
              your skilled trades work experience, job offer or certificate of
              qualification and language ability
            </p>
            <p className="text-sm text-black/60 text-left">
              Before applying, candidates should carefully review the program
              requirements and ensure they meet the necessary qualifications.
              Additionally, individuals in skilled trades may also consider
              seeking employment through the Provincial Nominee Program (PNP) if
              a particular province has a demand for their skills.
            </p>
          </div>

          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Express Entry"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Factors that increase your chance to receive Invitation to Apply
                (ITA) in the Express Entry Program
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Through Express Entry, candidates and their family can participate
              and compete for points to receive an ITA – Invitation to Apply
              from the Canadian government to immigrate and work in the country.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workersList.map((item, index) => (
              <ServicesCard
                key={index}
                id={item.id}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
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
    title: "Provincial Nominee Programs (PNPs)",
    description:
      "We can advise on PNPs and help you prepare for provincial nominations, which is suitable with your experiences.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Secure a Job Offers",
    description:
      "We can assist in searching for job in Canada. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title: "Educational credential assessment",
    description:
      "We can help you navigate the process of obtaining an ECA for your foreign educational credentials,",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];

export const workersList = [
  {
    id: 1,
    title: "Working for a company or organization ",
    description:
      "A job offer that can earn you additional points within the Comprehensive Ranking System (CRS). If you receive a job offer from a company or organization in Canada, you can gain extra points and increase your likelihood of being invited to participate in the program",
  },
  {
    id: 2,
    title: "Nomination from a province or territory",
    description:
      "If you receive a nomination from a province or territory through the Provincial Nominee Program (PNP), your CRS score will significantly increase, giving you priority in receiving an invitation to join Express Entry",
  },
  {
    id: 3,
    title: "French-Language Advantage",
    description:
      "Proficiency in French, in addition to English, is highly valued by Canada. Demonstrating strong French language skills through recognized tests can earn extra points in the Comprehensive Ranking System (CRS). This boosts your chances of receiving an Invitation to Apply (ITA) for permanent residency in Canada",
    //   "If you receive a nomination from a province or territory through the Provincial Nominee Program (PNP), your CRS score will significantly increase, giving you priority in receiving an invitation to join Express Entry",
  },
];
