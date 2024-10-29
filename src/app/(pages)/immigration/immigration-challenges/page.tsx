import Container from "@/components/ui/container";
import { Button } from "@/components/ui/moving-border";
import Glass from "@/lib/helpers";

import { Icon } from "@iconify/react/dist/iconify.js";
import { InfoCard } from "./InfoCard";

export default function ImmigrationChallenges() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Challenges</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Overcome Immigration Challenges
              </h3>

              <p className="text-sm text-black/60 text-left pb-5">
                Inadmissibility to Canada can be based on various grounds,
                including criminality, security concerns, health reasons,
                financial issues, and misrepresentation, among others. You need
                to address the underlying issues before reapplying for entry
                into Canada. Working with a qualified immigration consultant of
                GreenTech Resources Worldwide Canada can be invaluable in
                navigating the complex rules and regulations related to
                admissibility. We can help you assess your situation, determine
                the best course of action, and guide you through the application
                process.
              </p>
            </div>
            <Button
              className="py-3  w-[190px]"
              icon={
                <div className="flex gap-2 text-[10px] justify-center items-center">
                  <Icon icon={"mdi:phone"} />
                  <span>+1855 477 9797</span>
                </div>
              }
            >
              <span className="text-[10px] relative flex gap-1 justify-start items-center">
                <Icon
                  icon={"teenyicons:appointments-outline"}
                  className="-mt-0.5"
                />
                BOOK AN APPOINTMENT
              </span>
            </Button>
          </div>
        </Glass>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {challengesList.map((item) => (
            <InfoCard
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
const challengesList = [
  {
    id: 1,
    title: "Criminality",
    description:
      "If someone has a criminal record or have committed certain offenses, he/she may be deemed inadmissible to Canada. In such cases, it&apos;s important to determine if he/she is eligible for criminal rehabilitation, which can allow him/her to overcome past criminal convictions and gain entry into the country",
  },
  {
    id: 2,
    title: "Security",
    description:
      "National security and criminality-related issues can result in inadmissibility. Background checks and security screenings are conducted for all visa applicants",
  },
  {
    id: 3,
    title: "Financial",
    description:
      "If someone does not have the financial means to support himself/ herself during your stay in Canada, he/she may be deemed inadmissible. Demonstrating financial stability through proof of funds, a job offer, or sponsorship can help address this concern",
  },
  {
    id: 4,
    title: "Misrepresenting",
    description:
      "Providing false information or misrepresenting facts on a visa application can lead to inadmissibility. Honesty and transparency are key when applying to visit or immigrate to Canada",
  },
];
