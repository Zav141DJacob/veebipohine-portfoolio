import { Course } from "@/models/Course";
import { Education } from "@/models/Education";
import { Employment } from "@/models/Employment";
import { Hackathon } from "@/models/Hackathon";
import { Project } from "@/models/Project";
import CardDate from "./CardDate";

type Props = {
  children: React.ReactNode;
  withDate?: Project | Education | Employment | Course | Hackathon;
};

const Card: React.FC<Props> = ({ children, withDate }) => {
  return (
    <article className="relative border border-solid border-border1 flex flex-col bg-bg1 sm:min-w-[37rem] rounded-sm p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      {children}
      <div className="h-6 sm:contents">
        {withDate && <CardDate withDate={withDate} />}
      </div>
    </article>
  );
};

export default Card;
