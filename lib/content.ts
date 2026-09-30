export const site = {
  name: "Robert Fish",
  title: "Full Stack Engineer",
  origin: "https://robertfish.dev",
  canonical: "https://robertfish.dev/",
  positioning:
    "Full Stack Engineer, leading internal engineering at The BUSY Group.",
  line: "Platform and delivery. Ex-Domino's, B2B payments. .NET and Kafka.",
  location: "Brisbane, Australia",
  summary:
    "8+ years delivering scalable, resilient software across workforce services, retail and payments. He enjoys the point where technical direction, delivery discipline and people development meet, with a longer-term goal of engineering management.",
  description:
    "Robert Fish is a Full Stack Engineer in Brisbane, leading internal engineering at The BUSY Group. Platform and delivery. Ex-Domino's, B2B payments. .NET and Kafka.",
  linkedin: "https://www.linkedin.com/in/robert-f-ba8517104",
  github: "https://github.com/Robert-Fish",
} as const

export type Tenure = {
  title: string
  dates: string
}

export type CaseStudy = {
  slug: string
  org: string
  tenures: readonly [Tenure, ...Tenure[]]
  card: string
  problem: readonly string[]
  approach: readonly string[]
  outcome: readonly string[]
  stack: readonly string[]
}

export const caseStudies = [
  {
    slug: "the-busy-group",
    org: "The BUSY Group",
    tenures: [
      {
        title: "Full Stack Engineer",
        dates: "Apr 2026 to present",
      },
    ],
    card: "One of two engineers building the organisation's first internal engineering function, and owning the platform end to end.",
    problem: [
      "The BUSY Group had no internal engineering function. Support, documentation, and releases had no shared system, so the next step lived with whoever happened to know it.",
    ],
    approach: [
      "Robert is one of two engineers standing up that function. He owns the platform end to end.",
      "He stood up Jira Service Management as the support operations layer. Internal teams can raise and follow their own requests, and customer response times improved.",
      "He built the documentation and automation the business did not have. Confluence spaces, plus Jira automation that generates release notes and spec docs. He designed the organisation's release strategy and rolled it out.",
      "He owns the backend and the infrastructure, working with a DevOps contractor. He mentors colleagues in engineering tools and practices.",
    ],
    outcome: [
      "Customer response times improved, and internal teams have a self-service support path.",
      "Release notes and spec docs are generated from the work, instead of reconstructed from memory.",
      "The organisation is shipping through a release strategy he designed and rolled out.",
    ],
    stack: [".NET", "ASP.NET Web API", "Azure"],
  },
  {
    slug: "dominos",
    org: "Domino's Pizza Enterprises",
    tenures: [
      {
        title: "Solution Engineer",
        dates: "Aug 2025 to Mar 2026",
      },
      {
        title: "Senior Software Engineer",
        dates: "Jun 2024 to Aug 2025",
      },
    ],
    card: "Turned architecture strategy into roadmaps teams could execute, then led pricing and marketing tools across 12 international markets.",
    problem: [
      "Enterprise architecture strategy still needed to become work teams could execute, and product lines were carrying architectural debt. Internal pricing and marketing tools, used across 12 international markets, needed a small team that could modernise them while delivery continued.",
    ],
    approach: [
      "As Solution Engineer, he translated enterprise architecture strategy into executable technical roadmaps. He worked with Solution Architects and produced technical blueprints with BMAD and Spec Kit. Standardisation across product lines reduced architectural debt by 30%.",
      "As Senior Software Engineer, he led a small team of one developer and one QA on internal pricing and marketing tools used across 12 international markets. He ran agile delivery, mentored on code quality, testing, and system design, established code review practices, and modernised legacy systems.",
    ],
    outcome: [
      "Standardisation across product lines reduced architectural debt by 30%.",
      "Pricing and marketing tools for 12 international markets kept moving, with code review, testing, and system design in the delivery loop.",
    ],
    stack: ["C#", ".NET Core", "Azure", "Azure SQL", "Microservices"],
  },
  {
    slug: "the-payment-app",
    org: "The Payment App",
    tenures: [
      {
        title: "Senior Software Developer",
        dates: "Sep 2020 to Jun 2024",
      },
    ],
    card: "Led greenfield B2B payments on an event-driven Kafka platform, including merchant admin for accounts, monitoring, and KYC/AML.",
    problem: [
      "The company needed B2B payment products that did not exist yet. PayID, BPAY, and direct debit had to be designed, built, and then operated once money was moving.",
    ],
    approach: [
      "He led the greenfield development and the architecture. He architected and delivered an event-driven payments platform on Apache Kafka, and built and coordinated a team of 3 to 4 engineers.",
      "He designed a merchant admin tool covering business accounts, transaction monitoring, and KYC/AML compliance reporting. He set the testing strategy and the code standards. Reliability came from error handling, monitoring, and incident response.",
    ],
    outcome: [
      "The event-driven payments platform shipped, covering PayID, BPAY, and direct debit.",
      "Merchants could be administered in one tool for accounts, transaction monitoring, and KYC/AML compliance reporting.",
      "The team had a testing strategy, code standards, and an incident path when something failed.",
    ],
    stack: [".NET", "Kafka", "React", "Docker", "Cypress"],
  },
] as const satisfies readonly CaseStudy[]

export type CaseStudySlug = (typeof caseStudies)[number]["slug"]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function caseStudyPath(slug: CaseStudySlug) {
  return `/work/${slug}`
}

export function caseStudyUrl(slug: CaseStudySlug) {
  return `${site.origin}/work/${slug}/`
}

export type ExperienceItem = {
  org: string
  title: string
  dates: string
  detail?: string
  slug?: CaseStudySlug
}

export const experience: readonly ExperienceItem[] = [
  {
    org: "The BUSY Group",
    title: "Full Stack Engineer",
    dates: "Apr 2026 to present",
    detail: "Leading internal engineering. Platform and delivery.",
    slug: "the-busy-group",
  },
  {
    org: "Domino's Pizza Enterprises",
    title: "Solution Engineer",
    dates: "Aug 2025 to Mar 2026",
    detail: "Architecture strategy into roadmaps and technical blueprints.",
    slug: "dominos",
  },
  {
    org: "Domino's Pizza Enterprises",
    title: "Senior Software Engineer",
    dates: "Jun 2024 to Aug 2025",
    detail: "Pricing and marketing tools across 12 international markets.",
    slug: "dominos",
  },
  {
    org: "The Payment App",
    title: "Senior Software Developer",
    dates: "Sep 2020 to Jun 2024",
    detail: "B2B payments on an event-driven Kafka platform.",
    slug: "the-payment-app",
  },
  {
    org: "PlantMiner (formerly Felix Software)",
    title: "Software Engineer",
    dates: "2019 to 2020",
    detail: "Construction marketplace SaaS in React.",
  },
  {
    org: "InFlow Labs",
    title: "Software Engineer",
    dates: "2018 to 2019",
    detail: "Browser-based VR content creation tool.",
  },
  {
    org: "Freelance and agency",
    title: "Web development",
    dates: "2016 to 2018",
  },
]

export const principles = [
  {
    title: "Own it end to end.",
    body: "The work covers architecture, delivery, the people who depend on the system, and the colleagues who will keep it running. I stay with a platform until those pieces hold together.",
  },
  {
    title: "Write it down so nobody is a bottleneck.",
    body: "Specs, release notes, and a place the team can find them. If a decision lives only in one person's head, everyone else is waiting.",
  },
  {
    title: "Ship through a real release process.",
    body: "A written release strategy, generated notes, and a path from change to production. I would rather follow that path than rely on someone remembering the steps.",
  },
  {
    title: "Raise the bar for the people around you.",
    body: "Code review, testing, and system design, taught while the work is happening. Mentoring is part of delivery.",
  },
] as const

export const sideProject = {
  name: "Stirwise",
  label: "Side project",
  status: "Free open beta",
  summary:
    "A meal-planning web app that turns what's in your freezer into dinner plans and shopping lists.",
} as const
