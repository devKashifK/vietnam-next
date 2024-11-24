import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { workersList } from "./thuong-mai-co-tay-nghe-lien-bang/page";

export default function CanadianExperienceClass() {
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
                Canadian Experience Class (CEC)
              </h3>

              <p className="text-sm text-black/60 text-left">
                The Canadian Experience Class (CEC) is an economic immigration
                program that requires work experience in Canada. Applicants must
                have a minimum of 12 months of full-time work experience in a
                skilled occupation in Canada within the last 3 years.
              </p>
              <p className="text-sm text-black/60 text-left">
                The CEC Express Entry program is a popular choice for foreign
                workers who have accumulated work experience in Canada and
                international students who have found employment in Canada after
                graduation, all of whom aspire to fulfill their Canadian
                immigration dreams. This program is not suitable for foreign
                nationals without any prior work experience in Canada
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-4">
            <Title
              subtitle="Canadian Experience Class"
              title={
                <p className="text-4xl text-black/50 w-full text-left pt-3">
                  Minimum Criteria
                </p>
              }
            />

            <div className="flex flex-col justify-start gap-6">
              <p className="text-sm text-black/60 text-left">
                To be eligible, you must meet all the minimum requirements
              </p>
              <p className="text-sm text-black/60 text-left">
                Before applying, candidates should carefully review the program
                requirements and ensure they meet the necessary qualifications.
                Additionally, individuals in skilled trades may also consider
                seeking employment through the Provincial Nominee Program (PNP)
                if a particular province has a demand for their skills.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-4">
            <Title
              subtitle="Express Entry"
              title={
                <p className="text-4xl text-black/50 w-full text-left pt-3">
                  Factors that increase your chance to receive Invitation to
                  Apply (ITA) in the Express Entry Program
                </p>
              }
            />

            <div className="flex flex-col justify-start gap-6">
              <p className="text-sm text-black/60 text-left">
                Through Express Entry, candidates and their family can
                participate and compete for points to receive an ITA –
                Invitation to Apply from the Canadian government to immigrate
                and work in the country.
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
        </Glass>
      </Container>
    </>
  );
}
