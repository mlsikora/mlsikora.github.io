import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {
  links = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  highlights = [
    'Frontend-focused engineer',
    'Clean, accessible UI',
    'Fast, maintainable code'
  ];

  projects = [
    {
      title: 'Wells Fargo — Software Engineer',
      copy: 'Leading development of a greenfield internal app for strategic real estate initiatives (~50 planners). Built Spring Boot microservices, SQL Server database, and Angular frontend with role-based auth; integrated into CI/CD with GitHub Actions and OpenShift.',
      tag: 'Full-stack'
    },
    {
      title: 'Wells Fargo — Software Engineering Intern',
      copy: 'Engineered a C# microservice for the Autosys API to improve batch job management; spearheaded decommissioning of on-prem legacy servers during company-wide cloud migration.',
      tag: 'Backend'
    },
    {
      title: 'Ethicon (Johnson & Johnson) — Process Engineering Intern',
      copy: 'Root cause analysis and ML-based defect detection on a suture coating line (yield 72% → 85%); MES integration for automated reporting; installed new canning equipment, doubling output.',
      tag: 'Engineering'
    },
    {
      title: 'Georgia Tech PECSS — Undergraduate Research Assistant',
      copy: 'Contributed to a mobile app supporting veterans with PTSD via exposure therapy; maintained and optimized the RESTful API; collaborated with NSF (grant #1915504) and Research NOC.',
      tag: 'Research'
    },
    {
      title: 'Glide Memorial Church — Soup Kitchen Volunteer',
      copy: 'Serve meals, bus tables, and clean dishes for the homeless community in San Francisco’s Tenderloin district.',
      tag: 'Volunteer'
    }
  ];
}

