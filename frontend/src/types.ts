
export interface Project {
    name: string;
    shortDescription?: string;
    description: string;
    images: string[];
    problem?: string;
    solution?: string;
    githubLink: string;
    websiteLink: string;
    languages: string[];
}

interface Language {
    name: string;
    link: string;
}

interface Problem {
    title: string;
    description: string;
}

interface Solution {
    title: string;
    description: string;
}