interface Intern {
    name: string;
    age: number;
    skills: string[];
}

declare enum Domain {
    Web = 'Web',
    Connect = 'Connect',
    Backend = 'Backend',
}

interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: Domain;
}

interface Company {
    interns: Intern[];
    juniors: Junior[];
    country: string;
}

export default Company;