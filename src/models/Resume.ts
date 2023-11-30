import { Course } from "./Course";
import { Education } from "./Education";
import { Employment } from "./Employment";
import { Hackathon } from "./Hackathon";
import { Project } from "./Project";

type Link = {
    name: string;
    url: string
}

type Contact = {
    email: string;
    links: Link[];
}

export type Resume = {
    name: string;
    titles: string[];
    contact: Contact;
    profile: string;
    skills: string[];
    employment: Employment[];
    education: Education[];
    courses: Course[];
    projects: Project[];
    hackathons: Hackathon[];
    hobbies: string[];
}