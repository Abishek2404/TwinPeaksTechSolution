import iSkillsHealthcareSolutionsImage from '../assets/images/i-skills-healthcare-solutions.png'
import secondBrainAiPlatformImage from '../assets/images/secondbrain-ai-platform.png'
import diviVoiceAiImage from '../assets/images/divi-voice-ai.png'
import phonePeTaskTrackerImage from '../assets/images/phonepe-task-tracker.png'
import aiResumeBuilderPlatformImage from '../assets/images/ai-resume-builder-platform.png'

export const projects = [
  {
    slug: 'i-skills-healthcare-solutions',
    category: 'Website',
    filter: 'websites',
    tagline:
      'Healthcare education website for Medical Coding, Medical Billing, and Spoken English courses.',
    color: '#0B5CFF',
    image: iSkillsHealthcareSolutionsImage,
    problem:
      'The institute needed a modern online presence to showcase healthcare training programs, increase admissions, and establish credibility.',
    solution:
      'Designed and developed a responsive website with course showcases, placement highlights, testimonials, and enquiry integration to improve user engagement.',
    results: [
      'Modern responsive healthcare website',
      'Improved online visibility',
      'Optimized for faster user engagement',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Responsive Design',
    ],
  },

  {
    slug: 'secondbrain-ai-platform',
    category: 'Web Application',
    filter: 'web-applications',
    tagline:
      'AI-powered learning platform with smart notes, quizzes, flashcards, planner, and document management.',
    color: '#7C3AED',
    image: secondBrainAiPlatformImage,
    problem:
      'Students struggle to organize study materials across multiple tools, resulting in poor productivity and inefficient learning.',
    solution:
      'Built an AI-powered learning workspace that combines documents, AI chat, notes, quizzes, flashcards, analytics, and study planning into one platform.',
    results: [
      'Centralized learning workspace',
      'AI-assisted study experience',
      'Improved learning productivity',
    ],
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Gemini API',
    ],
  },

  {
    slug: 'divi-voice-ai',
    category: 'AI Solution',
    filter: 'ai-solutions',
    tagline:
      'Real-time voice AI assistant with natural conversations, memory, and intelligent task automation.',
    color: '#8B5CF6',
    image: diviVoiceAiImage,
    problem:
      'Traditional chatbots lack real-time voice interaction and contextual memory, resulting in limited user experience.',
    solution:
      'Developed a voice-first AI assistant with real-time speech interaction, intelligent memory, natural conversations, and modern conversational UI.',
    results: [
      'Real-time voice communication',
      'Context-aware AI conversations',
      'Personalized AI assistant experience',
    ],
    stack: [
      'React',
      'Node.js',
      'WebSocket',
      'Gemini Live API',
      'MongoDB',
      'Tailwind CSS',
    ],
  },

  {
    slug: 'phonepe-task-tracker',
    category: 'Web Application',
    filter: 'web-applications',
    tagline:
      'Employee task tracking and productivity management system with secure authentication.',
    color: '#5B21B6',
    image: phonePeTaskTrackerImage,
    problem:
      'Managing employee tasks manually made it difficult to track daily productivity, assignments, and overall performance.',
    solution:
      'Built a secure employee task tracking platform with authentication, task management, productivity monitoring, and performance insights.',
    results: [
      'Centralized task management',
      'Improved employee productivity',
      'Secure login system',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },

  {
    slug: 'ai-resume-builder-platform',
    category: 'AI Solution',
    filter: 'ai-solutions',
    tagline:
      'AI-powered resume builder with ATS optimization, resume scoring, and multi-agent intelligence.',
    color: '#9333EA',
    image: aiResumeBuilderPlatformImage,
    problem:
      'Job seekers struggle to create ATS-friendly resumes that stand out during recruitment.',
    solution:
      'Developed an AI resume builder with multiple AI agents that generate, optimize, analyze, and score resumes for better hiring success.',
    results: [
      'ATS-friendly resume generation',
      'AI-powered resume scoring',
      'Professional resume templates',
    ],
    stack: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'OpenAI API',
      'Node.js',
    ],
  },
]

export const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'websites', label: 'Websites' },
  { key: 'web-applications', label: 'Web Applications' },
  { key: 'ai-solutions', label: 'AI Solutions' },
]

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug)