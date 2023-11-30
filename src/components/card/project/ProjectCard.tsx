import { Course } from "@/models/Course";
import Card from "../Card";
import { Button } from "@/components/button/Button";
import { Project } from "@/models/Project";

type Props = {
    project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <Card withDate={project}>
            <h2 className='font-bold'>
                <Button intent="clickable" onClick={() => window.open(project.url)}>
                    {project.name}
                </Button>
            </h2>
            <div className='flex justify-between '>
                {project.skills.join(', ')}
            </div>
        </Card>
    )
}

export default ProjectCard;