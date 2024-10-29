import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { appointment } from "./book-appointment";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";

export default function WhyChooseUs() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">WHY CHOOSING US?</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                We Are The Leading Immigration Center For You
              </h3>

              <p className="text-sm text-black/60 text-left">
                GreenTech Resource Worldwide Canada is ranked as the 3rd top
                recruitment agency and immigration consultant in Saskatchewan.
                We are confident in our ability to provide solutions to shorten
                the journey to the peaceful and beautiful country of Canada for
                your entire family
              </p>
              <p className="text-sm text-black/60 text-left">
                <ul>
                  <li>
                    Providing immigration solutions tailored to each
                    client&apos;s profile
                  </li>
                  <li>Connecting clients with employers in Canada</li>
                  <li>Promoting business investment projects</li>
                  <li>Ensure safe and smooth settlement services</li>
                </ul>
              </p>
              <p className="text-sm text-black/60 text-left">
                Established in 2016, GreenTech Resource Worldwide Canada has its
                headquarters based in Regina, Saskatchewan, Canada.
              </p>
              <Title
                subtitle="Head Office:
"
              />
              <p className="text-sm text-black/60 text-left">
                2124 Broad St, Regina, Saskatchewan, Canada, S4P 1Y5
              </p>
              <p className="text-sm text-black/60 text-left">
                (we have no branch in Vietnam)
              </p>
              <p className="text-sm text-black/60 text-left">
                The GreenTech Resources Worldwide Canada team serves clients
                from diverse backgrounds worldwide and can provide support in
                languages such as Vietnamese, Tagalog, Arabic, Chinese, French,
                and Spanish.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col px-10 gap-4">
          <div className="flex-1 flex flex-col gap-2">
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
                GreenTech Resources Worldwide Canada can assist you in
                increasing your Comprehensive Ranking System (CRS) score for
                Express Entry in several ways:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {appointment.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}
