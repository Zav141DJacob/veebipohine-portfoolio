import Card from "../Card";
import { Button } from "@/components/button/Button";
import { Education } from "@/models/Education";

type Props = {
    education: Education
}

const EducationCard: React.FC<Props> = ({ education }) => {
    return (
        <Card withDate={education}>
            <h2 className='font-bold'>
                <Button intent="clickable" onClick={() => window.open(education.institution.url)}>
                    {education.institution.name}
                </Button>
            </h2>
            {education.degree? <div className='flex justify-between '>
                {education.degree}
            </div> : null}
        </Card>
    )
}

export default EducationCard;