import Image from 'next/image'; // optional, if you’re on Next.js

export function OverlaySection() {
  return (
    <div className="
      relative 
      shadow-[0px_-64px_60px_0px_rgba(3,33,7,0.02)] 
      sticky top-0 
      min-h-[24.68rem] 
      overflow-hidden 
      bg-gradient-to-b from-amber-50 to-amber-100 
      py-8 
      sm:top-[15rem] sm:min-h-[34.1875rem]
    ">
      {/* bottom‑right building silhouette */}
      <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
        {/* if using a static file: */}
        <img
          src="/buildings.jpg"
          alt=""
          className="w-64 h-auto z-10"
          aria-hidden="true"
        />

        {/*—or, if you prefer Next/Image for optimization: */}
        {/*
        <Image
          src="/images/building-silhouette.png"
          alt=""
          width={256}
          height={auto}
          className="opacity-10"
          priority={false}
        />
        */}
      </div>

      {/* your existing gradient overlay and content */}
      <div className="relative z-30">
        {/* …rest of your content… */}
      </div>
    </div>
  );
}
