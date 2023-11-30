import { Employment } from "@/models/Employment";
import Card from "../Card";
import { Button } from "@/components/button/Button";

type Props = {
    employment: Employment
}

const EmploymentCard: React.FC<Props> = ({ employment }) => {
    return (
        <Card withDate={employment}>
            <h2 className='font-bold'>
                {employment.position}
            </h2>
            <div className='flex justify-between '>
                <div className='flex space-x-2'>
                    <Button intent="clickable" onClick={() => window.open(employment.company.url)}>
                        {employment.company.name}
                    </Button>
                </div>
                
            </div>
            {employment.mentor ?
                <div>
                    Mentor: <Button onClick={() => window.open(employment.mentor?.url)} title={employment.mentor.email} intent="clickable">{employment.mentor.name}</Button>
                </div>
            : null}
        </Card>
    )
}

export default EmploymentCard;