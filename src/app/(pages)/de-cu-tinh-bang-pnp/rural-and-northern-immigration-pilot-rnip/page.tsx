import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { featuresPage } from "../alberta-nhap-cu-aaip/page";

export default function RuralNorthern() {
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
                  Canada Provincial Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Rural and Northern Immigration Pilot (RNIP)
              </h3>

              <p className="text-sm text-black/60 text-left">
                The Rural and Northern Immigration Pilot is a community-driven
                program. It’s designed to spread the benefits of economic
                immigration to smaller communities by creating a path to
                permanent residence for skilled foreign workers who want to work
                and live in one of the participating communities.
              </p>
              <p className="text-sm text-black/60 text-left">
                <Title
                  subtitle="Participating Communities
"
                  className="pt-7"
                />
                <ul className="pl-6 list-disc">
                  <li>North Bay, ON - https://northbayrnip.ca/</li>
                  <li>
                    Sudbury, ON -
                    https://investsudbury.ca/why-sudbury/move-to-sudbury/rnip/
                  </li>
                  <li>Timmins, ON - www.timminsedc.com</li>
                  <li>Sault Ste. Marie, ON - www.welcometossm.com</li>
                  <li>Thunder Bay, ON - https://gotothunderbay.ca/</li>
                  <li>Brandon, MB - www.economicdevelopmentbrandon.com</li>
                  <li>Altona/Rhineland, MB - www.seedrgpa.com</li>
                  <li>Moose Jaw, SK - https://www.moosejawrnip.ca/</li>
                  <li>Claresholm, AB - www.claresholm.ca</li>
                  <li>Vernon, BC - https://rnip-vernon-northok.ca/</li>
                  <li>
                    West Kootenay (Trail, Castlegar, Rossland, Nelson), BC -
                    https://wk-rnip.ca/
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="RNIP"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Process
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          There are 4 steps to applying for permanent residence under this
          pilot.
          <ul className="pl-6 list-disc">
            <li>
              Check that you meet both IRCC eligibility requirements and the
              community-specific requirements.
            </li>
            <li>
              Find an eligible job with an employer in one of the participating
              communities.
            </li>
            <li>
              Once you have a job offer, submit your application for
              recommendation to the community.
            </li>
            <li>
              If a community recommends you, apply for permanent residence.
            </li>
          </ul>
        </p>
        <p className="text-sm text-black/60 text-left">
          Each community will also have its own additional eligibility
          requirements job search process community recommendation application
          process
        </p>
      </Container>
      <Container>
        <Title
          subtitle="Benefits"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Benefits for your family
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen
        </p>
        <p className="text-sm text-black/60 text-left ">
          During the wait for permanent residency, your family can apply to
          come, work and study in Canada
          <ul className="pl-6 list-disc">
            <li>Free access to elementary and highschool</li>
            <li>Legal protection under Canadian laws</li>
          </ul>
        </p>
        <p className="text-sm text-black/60 text-left ">
          When you become Canada Permanent Resident
          <ul className="pl-6 list-disc">
            <li>
              Freedom to live, study, and work across the entire Canadian
              territor
            </li>
            <li>Access to social welfare</li>
            <li>
              Eligibility to apply for Canadian citizenship after the waiting
              period. Qualify to apply forCanadian citizenship, own the 6th
              strongest passport globally, enjoy visa-free or direct ETA access
              to 185 countries
            </li>
            <li>
              With PR, university tuition fees are only one-third of what
              international students pay, with no restrictions on schools and
              programs
            </li>
          </ul>
        </p>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="
British Columbia provincial nominee program"
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
