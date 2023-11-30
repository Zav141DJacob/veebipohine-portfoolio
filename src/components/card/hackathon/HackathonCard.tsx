import Card from "../Card";
import { Hackathon } from "@/models/Hackathon";

type Props = {
    hackathon: Hackathon
}

const HackathonCard: React.FC<Props> = ({ hackathon }) => {
    return (
        <Card withDate={hackathon}>
            <h2 className='font-bold'>
                {hackathon.name}
            </h2>
            {hackathon.achievement? <div className='flex justify-between '>
                {hackathon.achievement}
            </div> : null}
        </Card>
    )
}

export default HackathonCard;