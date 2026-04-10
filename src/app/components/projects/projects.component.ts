import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [ NgFor ]
})
export class ProjectsComponent {
  kills = {
    languages: ['Java', 'Python', 'C', 'C#', 'TypeScript', 'JavaScript', 'SQL'],
    frameworks: ['Angular', 'Angular Material', 'PrimeNG', 'Spring Boot 3'],
    databases: ['Microsoft SQL Server'],
    tools: [
      'Git',
      'Harness',
      'GitHub Actions',
      'Playwright',
      'Blackduck',
      'SonarQube',
      'RedHat OpenShift',
      'AVI Load Balancer',
    ],
    systems: [
      'Microservices',
      'Distributed Systems',
      'API Design',
      'Relational Databases',
    ],
  };

  projects = [
    {
      company: 'Wells Fargo',
      title: 'Technology Program Analyst',
      location: 'San Francisco, CA',
      dates: 'July 2024 – Present',
      copy: [
        'Leading the development of a greenfield internal application that manages strategic real estate initiatives (e.g., branch openings, building sales, lease negotiations) for ~50 planners',
        'Engineered two Java Spring Boot microservices: one for file management and another for tracking initiative progress, building/lease data, and team assignments for 500+ initiatives',
        'Designed and deployed a SQL Server relational database, replacing a manual Excel-based process to improve data accuracy and traceability',
        'Developed an Angular frontend using Angular Material and PrimeNG, implementing role-based Ping Identity authentication with JWT token-based API verification',
        'Integrated the application into a new enterprise-wide CI/CD pipeline comprised of GitHub Actions, Red Hat OpenShift containers, and Harness',
      ],
      skills: [
        'Java',
        'Spring Boot 3',
        'Angular',
        'Angular Material Library',
        'PrimeNG',
        'Microsoft SQL Server',
        'GitHub Actions',
        'RedHat OpenShift',
        'Harness',
        'Microservices',
        'JWT',
        'CI/CD',
      ],
    },
    {
      company: 'Wells Fargo',
      title: 'Software Engineering Intern',
      dates: 'June 2023 – August 2023',
      copy: [
        'Engineered a microservice using C# to interface with the Autosys API, enabling enhanced batch job management and automation efficiency',
        "Spearheaded the decommissioning of team's on-premises legacy servers during a company-wide cloud migration initiative",
      ],
      skills: ['C#', 'Microservices', 'Autosys'],
    },
    {
      company: 'Ethicon (Johnson & Johnson)',
      title: 'Absorbable Process Engineering Intern',
      location: 'Cornelia, Georgia',
      dates: 'August 2022 – December 2022',
      copy: [
        'Worked at a medical device company specializing in surgical sutures (stitches), needles, and adhesives',
        'Performed a root cause analysis on a suture coating machine and established the groundwork for cameras using machine learning to identify defects. Improved yield from 72% to 85% on average',
        'Upgraded vacuum oven temperature records from paper reports to automated, system-generated reports via a Manufacturing Execution System integration',
        'Installed a new canning machine with safety improvements, doubling processed material output in that section',
      ],
      skills: [
        'Machine Learning',
        'Root Cause Analysis',
        'Manufacturing',
      ],
    },
  ];

  education = [
    {
      company: 'Georgia Institute of Technology',
      title: 'Bachelor of Science in Computer Science',
      subtitle:
        'College of Computing • Concentration: Info-Internetworks and Artificial Intelligence',
      location: 'Atlanta, Georgia',
      dates: 'Graduated May 2024',
      details: 'GPA: 3.96',
      copy: [
        'Relevant Coursework: Data Structures and Algorithms, Intro to Artificial Intelligence, Intro to Computer Networks, Intro to Databases, Algorithms, Intro to Computer Networking, Machine Learning, and Intro to Information Security',
      ],
    },
  ];

  research = [
    {
      company: 'Georgia Tech PECSS',
      title: 'Undergraduate Research Assistant, Dr. Arriaga',
      location: 'Atlanta, Georgia',
      dates: 'August 2021 – December 2021',
      copy: [
        'Contributed to the development of a mobile application supporting veterans with PTSD through exposure therapy',
        'Maintained and optimized a RESTful API for the PECSS mobile app',
        "Collaborated with the National Science Foundation (grant #1915504) and GT's Research Network Operations Center",
      ],
    },
  ];

  volunteering = [
    {
      company: 'Glide Memorial Church',
      title: 'Soup Kitchen Volunteer',
      location: 'San Francisco, California',
      dates: 'January 2026 – Present',
      copy: [
        "Serve hot meals, bus tables, and clean dishes for the homeless community in San Francisco's Tenderloin district",
      ],
    },
  ];
}
