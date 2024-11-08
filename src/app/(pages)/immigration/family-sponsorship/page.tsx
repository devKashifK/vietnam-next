import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import React from "react";
import Glass from "@/lib/helpers";
import Title from "@/components/ui/Title";

export default function FamilySponsorship() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-background rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Canada Immigration Program
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-background rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Family Sponsorship
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canada, known for its breathtaking landscapes, vibrant cities,
                and welcoming atmosphere, has become an increasingly popular
                destination for tourists worldwide. If you&apos;re considering a
                visit to the Great White North, you may need to acquaint
                yourself with the process of obtaining a Canadian Visitor Visa,
                also known as a Temporary Resident Visa (TRV)
              </p>
              <Title subtitle="Understanding the Canadian Visitor Visa" />
              <p className="text-sm text-black/60 text-left">
                The Canadian Visitor Visa is designed for individuals who wish
                to enter the country temporarily for tourism, family visits, or
                business purposes. It is essential to distinguish between a
                tourist visa and other types of visas, such as work or study
                permits, as they serve different purposes.
              </p>
              <Title subtitle="Seeking Canadian Visitor Visa" />

              <p className="text-sm text-black/60 text-left">
                The process of applying for a Canadian Visitor Visa involves
                several key steps. First, applicants need to determine whether
                they require a visa to enter Canada based on their citizenship.
                If a visa is needed, the next step is to gather the necessary
                documents, which typically include a valid passport, proof of
                financial support, a letter of invitation (if applicable), and
                travel itinerary. Applicants may also need to provide proof of
                ties to their home country, such as employment, property, or
                family connections, to demonstrate their intent to return.
              </p>
              <p className="text-sm text-black/60 text-left">
                Once the documents are prepared, applicants can fill out the
                online visa application form through the official website of the
                Immigration, Refugees, and Citizenship Canada (IRCC). The
                application form will prompt individuals to enter personal
                information, details about their trip, and other relevant
                information. It&apos;s crucial to ensure accuracy in the
                application, as any discrepancies could lead to delays or
                denials.
              </p>
              <p className="text-sm text-black/60 text-left">
                After submitting the application, applicants will be required to
                pay the necessary visa fees. Processing times vary, but
                applicants are advised to apply well in advance of their planned
                travel date. If the application is approved, a visa will be
                stamped in the passport, allowing the individual to travel to
                Canada for the specified period.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <CTADefault
          title="PLAN YOUR VISIT TO CANADA"
          subtitle={
            <p className="text-4xl text-white/90">
              Let&apos;s GreenTech Resources Worldwide Canada <br />
              assist you!
            </p>
          }
          image={"/service.jpg"}
        />
      </Container>
    </>
  );
}
