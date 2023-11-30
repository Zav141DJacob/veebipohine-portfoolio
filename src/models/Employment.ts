import { Mentor } from "./Mentor";

type Company = {
    name: string;
    url: string
}

export type Employment = {
    position: string;
    company: Company;
    startDate: string;
    endDate?: string;
    mentor?: Mentor;
}