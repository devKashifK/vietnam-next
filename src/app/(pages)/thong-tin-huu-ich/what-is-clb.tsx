import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function WhatIsCLB() {
  return (
    <>
      <Container>
        <Glass className="flex flex-col gap-8">
          <Title
            title={"CLB"}
            subtitle="Canadian Language Benchmark"
            description={
              "CLB được sử dụng để đánh giá khả năng ngôn ngữ của người định cư muốn xin thị thực lâu dài tại Canada, đặc biệt là qua các chương trình như Express Entry và chương trình Provincial Nominee Program (PNP)."
            }
          />
          <Title
            description={
              "Các trường hợp học tập tại Canada yêu cầu người học có CLB nhất định để đảm bảo họ có thể học tập và giao tiếp hiệu quả trong môi trường học tập."
            }
          />
          <Title
            description={
              " Nhiều công việc và ngành nghề tại Canada yêu cầu nhân viên có CLB nhất định để đảm bảo họ có thể hiểu và thực thi công việc một cách hiệu quả."
            }
          />
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col gap-8">
          <Title
            // title={""}
            subtitle="Đánh giá CLB"
            description={
              "Để đạt được CLB, người tham gia phải tham gia vào các bài kiểm tra được công nhận, chẳng hạn như IELTS (International English Language Testing System) hoặc CELPIP (Canadian English Language Proficiency Index Program) cho tiếng Anh, hoặc TEF (Test d&apos;évaluation de français) cho tiếng Pháp. Kết quả từ các bài kiểm tra này sẽ phản ánh vào mức độ CLB của họ."
            }
          />
          <img
            src="/clbimage.png"
            alt="dánh-giá-clb"
            className=" flex  mx-auto w-[70%]"
          />
          <Title
            description={
              "CLB4 thường là yêu cầu tối thiểu để tham gia vào nhiều chương trình định cư và việc làm tại Canada."
            }
          />
          <Title
            description={
              "Khi bạn quy đổi điểm CLB từ điểm số đạt được trong các kỳ thi tiếng Anh như IELTS, CELPIP, hoặc TEF Canada, nếu bạn không đạt được điểm tối thiểu yêu cầu trong một phần nào đó của kỳ thi, điểm CLB của bạn sẽ bị giảm. Ví dụ, nếu bạn không đủ điểm trong kỹ năng viết, điểm CLB của bạn sẽ bị giảm xuống mức tương ứng với kỹ năng viết mà bạn đạt được. Điều này có thể ảnh hưởng đáng kể đến khả năng bạn đáp ứng yêu cầu tiếng Anh của một số chương trình định cư và việc làm tại Canada."
            }
          />
        </Glass>
      </Container>
      <CTADefault
        title="Chúng tôi có thể giúp bạn"
        subtitle={
          <p className="text-lg text-white/90">
            iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình nhiều
            thay đổi và thách thức.
            <br /> Mục tiêu và nhiệm vụ của chúng tôi trở thành đối tác đáng tin
            cậy của bạn trong hành trình này. Chúng tôi mong <br />
            muốn giúp bạn hiện thực hóa ước mơ định cư Canada, sẳn sàng chào đón
            những cơ hội mới tại đây.
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}
