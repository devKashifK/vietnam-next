import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import Title from "@/components/ui/Title";
import { featuresPage } from "../alberta-nhap-cu-aaip/page";

export default function NewFoundlandLabrador() {
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
                  Canada Nomination Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                New Brunswick Provincial Nominee Program (NBPNP)​
              </h3>

              <p className="text-sm text-black/60 text-left">
                If you wish to immigrate to Newfoundland then you have 5 options
                to choose from:
                <Title subtitle="Programs" className="pt-7" />
                <ul className="pl-6 list-disc">
                  <li>Newfoundland and Labrador Express Entry</li>
                  <li>Skilled Worker Skilled Worker Category</li>
                  <li>International Graduate Category</li>
                  <li>International Entrepreneur Category</li>
                  <li>International Graduate Entrepreneur Category</li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
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
