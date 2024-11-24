import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import { Button } from "@/components/ui/custom";
import { workersList } from "./thuong-mai-co-tay-nghe-lien-bang/page";
export default function FedralSkilledWorker() {
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
                Công nhân lành nghề liên bang
              </h3>
              <p className="text-sm text-black/60 text-left">
                This program does not require a connection to Canada, making it
                an ideal immigration option for foreign citizens living outside
                of Canada. You do not need to be currently living in Canada,
                have any immediate family members residing in the country, nor
                have previous work or educational experiences in Canada.
              </p>
              <p className="text-sm text-black/60 text-left">
                However, this program has high requirements for work experience,
                educational qualifications, age, and language proficiency in
                English/French. All applicants for the Công nhân lành nghề liên
                bang Program (FSW) must have at least one year of work
                experience in a specialized field
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        {/* <Glass className="flex gap-2 px-10 py-10"> */}
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
        {/* </Glass> */}
      </Container>
      <CTA />

      <Container className="flex flex-col md:flex-row gap-16 py-10 justify-center items-center">
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-50 bg-opacity-20"></div>
          <img src="/work.jpg" className="rounded-md" alt="work" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {/* <Title
            className="px-4"
            subtitle="FAQ"
            title={"How to apply for a Work Permit"}
            description="Applying for a work permit in Canada can be a multi-step process, depending on your situation and the type of work permit you require. Here are the general steps to follow"
          /> */}
          {/* <FAQ /> */}
        </div>
      </Container>
    </>
  );
}

export const FAQ = ({
  title,
  description,
}: {
  title?: string;
  description?: void;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-2 md:px-0 flex flex-col gap-2"
    >
      <AccordionItem value="item-1" className="w-full ">
        <AccordionTrigger className="text-base text-left">
          {title}
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-2 my-2">{description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

function CTA() {
  return (
    <Container className="">
      <Glass className="py-2 w-full">
        <div className="flex gap-2">
          {/* <div className="relative">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-100/40 to-cyan-300/40 rounded-md w-[450px] h-full"></div>
            <img
              src="/aaa.jpg"
              alt=""
              className="w-[450px] h-full rounded-md"
            />
          </div> */}
          <Container>
            <div className="flex-1 flex flex-col gap-2 pt-8 justify-center items-center">
              <Title
                subtitle="Express Entry"
                title="How can we help you?"
                description="GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-full mx-auto">
                {features.map((feature, index) => (
                  <Feature key={feature.title} {...feature} index={index} />
                ))}
              </div>

              <Title
                className="justify-center items-center mt-4"
                title={
                  <p className="text-2xl text-black/50 w-full text-center">
                    Take the first step towards your family&apos;s Canadian
                    dream
                  </p>
                }
                description={
                  <p className="text-center  text-black/50 w-[70%]">
                    For personalized assistance and expert guidance, contact
                    GreenTech Resources Worldwide Canada so our experts can help
                    you navigate the work permit application process and ensure
                    a smooth transition to working in Canada
                  </p>
                }
              />
              <Button
                className="py-3 px-6 mt-3"
                icon={
                  <div className="flex gap-2 justify-center items-center text-xs ">
                    <Icon icon={"mdi:phone"} />
                    <span>+1855 477 9797</span>
                  </div>
                }
              >
                <span className="text-sm">Book An Appointment</span>
              </Button>
            </div>
          </Container>
        </div>
      </Glass>
    </Container>
  );
}

const features = [
  {
    id: 1,
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[54px]"
      />
    ),
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
