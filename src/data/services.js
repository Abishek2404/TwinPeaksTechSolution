import {
  MonitorSmartphone,
  Smartphone,
  Layers,
  Cloud,
  Brain,
  Boxes,
  Search,
  Headset,
  Palette,
  Plug,
} from 'lucide-react'

export const services = [
  {
    slug: 'website-development',
    name: 'Website Development',
    icon: MonitorSmartphone,
    summary: 'Modern, responsive and SEO-friendly websites that help you stand out online and convert more customers.',
    description:
      'We design and build fast, accessible websites on modern frameworks, engineered for conversion and built to rank. Every site ships with clean semantic markup, structured data, and a component system your team can extend.',
    deliverables: ['Custom UI/UX design', 'Responsive, accessible build', 'CMS integration', 'On-page SEO & analytics', 'Performance tuning (Core Web Vitals)'],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Sanity / Contentful'],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    icon: Smartphone,
    summary: 'Custom Android and iOS apps designed for performance, scalability and exceptional user experience.',
    description:
      'From MVP to scale, we build native-feel cross-platform apps with a single codebase where it makes sense, or native Swift/Kotlin when performance demands it.',
    deliverables: ['Product strategy & wireframes', 'iOS + Android builds', 'Push notifications & offline support', 'App Store / Play Store launch', 'Post-launch monitoring'],
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin'],
  },
  {
    slug: 'web-application-development',
    name: 'Web Application Development',
    icon: Layers,
    summary: 'Powerful web applications with modern technologies and clean architecture to solve complex business problems.',
    description:
      'We build data-intensive dashboards, internal tools, and customer-facing platforms with an architecture designed to scale with your user base, not against it.',
    deliverables: ['System architecture & data modeling', 'Role-based dashboards', 'Real-time features', 'Third-party integrations', 'Automated testing'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    icon: Palette,
    summary: 'Distinctive product design that turns complex flows into interfaces people enjoy using.',
    description:
      'We design systems, not just screens — component libraries, interaction patterns, and accessible defaults that keep your product coherent as it grows.',
    deliverables: ['User research & flows', 'Wireframes & prototypes', 'Design systems', 'Usability testing', 'Design-to-dev handoff'],
    stack: ['Figma', 'Framer', 'shadcn/ui'],
  },
  {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    icon: Brain,
    summary: 'AI chatbots, automation, intelligent systems and integrations that accelerate your business growth.',
    description:
      'We integrate LLMs and custom models into real workflows — support automation, internal copilots, content pipelines, and retrieval-augmented systems built on your own data.',
    deliverables: ['AI chatbots & copilots', 'RAG pipelines', 'Workflow automation', 'Model evaluation', 'API integrations (OpenAI, Anthropic, Gemini)'],
    stack: ['Python', 'LangChain', 'Claude / GPT APIs', 'Vector DBs'],
  },
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    icon: Boxes,
    summary: 'Tailor-made software solutions built to fit your unique business workflows and requirements.',
    description:
      'When off-the-shelf tools stop fitting, we build software shaped around how your team actually works, with room to grow.',
    deliverables: ['Requirements & scoping', 'Custom backend systems', 'Internal tooling', 'Legacy system modernization', 'Ongoing support'],
    stack: ['Node.js', 'Fastify', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    icon: Cloud,
    summary: 'Scalable APIs, backend systems and cloud infrastructure to power your applications and integrations.',
    description:
      'We design cloud infrastructure that scales predictably and fails gracefully — from CI/CD pipelines to multi-region deployments.',
    deliverables: ['Cloud architecture', 'CI/CD pipelines', 'Containerization', 'Monitoring & logging', 'Cost optimization'],
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Vercel / Fly.io'],
  },
  {
    slug: 'api-development',
    name: 'API Development',
    icon: Plug,
    summary: 'Well-documented, secure REST and GraphQL APIs that connect your systems and products.',
    description:
      'Clean, versioned APIs designed for the integrations you have today and the ones you will need next year.',
    deliverables: ['REST / GraphQL APIs', 'Authentication & rate limiting', 'API documentation', 'Webhooks', 'Third-party integrations'],
    stack: ['Node.js', 'Fastify', 'Zod', 'JWT'],
  },
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    icon: Search,
    summary: 'Improve your website ranking, increase organic traffic and grow your business with smart SEO.',
    description:
      'Technical and content SEO built into the site from day one — not bolted on after launch.',
    deliverables: ['Technical SEO audit', 'On-page optimization', 'Structured data', 'Site speed improvements', 'Ongoing reporting'],
    stack: ['Google Analytics 4', 'Search Console', 'Schema.org'],
  },
  {
    slug: 'maintenance-support',
    name: 'Maintenance & Support',
    icon: Headset,
    summary: 'Reliable maintenance, updates and 24/7 support to keep your digital products running smoothly.',
    description:
      'Ongoing care for what we build — monitoring, dependency updates, bug fixes, and a direct line to the team who built it.',
    deliverables: ['24/7 monitoring', 'Security patches', 'Performance audits', 'Feature updates', 'Priority support'],
    stack: ['Sentry', 'Uptime monitoring', 'Automated backups'],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
