import { Course } from "@/models/Course"
import { Education } from "@/models/Education"
import { Employment } from "@/models/Employment"
import { Hackathon } from "@/models/Hackathon"
import { Project } from "@/models/Project"

type Props = {
    withDate: Project | Education | Employment | Course | Hackathon
}

const CardDate: React.FC<Props> = ({withDate}) => {
    return (
        <div className="absolute right-6 bottom-6">
            {withDate.startDate} {withDate.endDate ? " - " + withDate.endDate : null}
        </div>
    )
}

export default CardDate