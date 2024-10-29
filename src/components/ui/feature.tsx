import Glass from "@/lib/helpers";
import Container from "./container";
import { cn } from "@/lib/utils";

export function FeatureSection({
  title,
  subtitle,
  description,
  children,
  childClass,
}: {
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  childClass?: string;
}) {
  return (
    <Container effect="slide-right" className="w-full bg-content -ml-2">
      <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mx-auto">
        <div className="max-w-xl mb-10  sm:text-center lg:max-w-2xl md:mb-12 mx-auto">
          <div>
            <p className="inline-block bg-background text-white px-4 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
              {subtitle}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto z-10 relative">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="#B33D3D"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-20 -ml-36 text-blue-gray-100 lg:w-32 lg:-ml-28  lg:-mt-8 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative pr-2"></span>
            </span>
            {title}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">{description}</p>
        </div>
        <div className={cn("grid gap-8 row-gap-10 lg:grid-cols-2", childClass)}>
          {/* <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  The deep ocean
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear. I didn&apos;t even know we were calling
                  him Big Bear. We never had the chance to.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  When has justice
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Rough pomfret lemon shark plownose chimaera southern sandfish
                  kokanee northern sea robin Antarctic cod. Yellow-and-black
                  triplefin gulper South American Lungfish mahi-mahi,
                  butterflyfish glass catfish soapfish ling gray mullet!
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Organically grow
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  A slice of heaven. O for awesome, this chocka full cuzzie is as
                  rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                  Hercules Morse, as big as a horse and Mrs Falani were up to no
                  good with a bunch of crook pikelets.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  A slice of heaven
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling. Inspiring, invest
                  synergy capacity building, white paper; silo, unprecedented
                  challenge B-corp problem-solvers.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div> */}
          {children}
        </div>
      </div>
    </Container>
  );
}
export const FeatureSection2 = ({ children, title, description }) => {
  return (
    <Container className="w-full">
      <Glass className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            {title}
            {/* <span className="underline decoration-highlight">Components</span> */}
          </h1>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            {description}
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 px-4">
            {children}
          </div>
        </div>
      </Glass>
    </Container>
  );
};
