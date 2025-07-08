import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import OurService from "@/components/ui/hom-service";
import { CTADefault } from "@/components/ui/cta";

export default function OurServicePage() {
  return (
    <>
      <OurService />
      <CTADefault
        title="We Provide The Best Service"
        subtitle={
          <p className="text-4xl text-white/90">
            Book a session today and <br />
            start changing your life!
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}
