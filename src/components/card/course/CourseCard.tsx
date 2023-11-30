import { Course } from "@/models/Course";
import Card from "../Card";
import { Button } from "@/components/button/Button";

type Props = {
    course: Course
}

const CourseCard: React.FC<Props> = ({ course }) => {
    return (
        <Card withDate={course}>
            <h2 className='font-bold'>
                <Button intent="clickable" onClick={() => window.open(course.provider.url)}>
                    {course.provider.name}
                </Button>
            </h2>
            {course.name? <div className='flex justify-between '>
                {course.name}
            </div> : null}
        </Card>
    )
}

export default CourseCard;