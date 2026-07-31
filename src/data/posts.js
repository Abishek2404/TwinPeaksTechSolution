import webDevelopmentImage from '../assets/images/blogs/Web-Development.jpg'
import mobileAppsImage from '../assets/images/blogs/Mobile-App.jpg'
import aiBusinessImage from '../assets/images/blogs/how-Ai-transforming-business.png'
import uiUxImage from '../assets/images/blogs/ui-ux.jpg'
import startupStackImage from '../assets/images/blogs/Choosing-the-Right-Tech-Stack-for-Your-Startup.png'
import seoImage from '../assets/images/blogs/SEO-Fundamentals-Every-Founder-Should-Know.png'

export const posts = [
  {
    slug: '10-essential-tips-modern-web-development',
    title: '10 Essential Tips for Modern Web Development',
    category: 'Web Development',
    date: '2026-05-10',
    readTime: '5 min read',
    color: '#0B5CFF',
    image: webDevelopmentImage,
    excerpt: 'Discover best practices and tips that can help you build faster, secure and scalable web applications.',
    body: `Modern web development moves fast, but the fundamentals that separate a good product from a great one have stayed remarkably stable. Here are ten practices we return to on nearly every project.

Start with performance as a constraint, not an afterthought. Set a performance budget before you write the first line of UI code, and treat every dependency as a cost against that budget.

Design your data model before your components. Components can be refactored in an afternoon; a bad data model can cost weeks to unwind.

Accessibility is not a checklist you run at the end — it's a default you build with. Semantic HTML, visible focus states, and proper labeling cost almost nothing when they're part of the plan from day one.

Server-rendering and static generation still win for content-heavy pages. Reach for client-side interactivity only where the page genuinely needs it.

Type your data at the boundaries — API responses, form inputs, environment variables — and let the type system catch the mistakes you would otherwise find in production.

Automate what you check by hand. Linting, formatting, and basic test coverage in CI save more time than they cost, even on small teams.

Cache aggressively, but invalidate deliberately. Most performance wins in production come from not doing work twice.

Keep your component library boring on purpose. Consistency compounds — a design system's value grows every time someone doesn't have to make a new decision.

Ship behind feature flags. The ability to turn a feature off without a deploy has saved more launches than any amount of pre-launch testing.

Finally, write the documentation you wish the last engineer had left you. Future you, and your teammates, will thank you.`,
  },
  {
    slug: 'future-of-mobile-apps-2026',
    title: 'The Future of Mobile Apps: Trends to Watch',
    category: 'App Development',
    date: '2026-04-28',
    readTime: '6 min read',
    color: '#16A34A',
    image: mobileAppsImage,
    excerpt: 'From AI integration to super apps, explore the key mobile app development trends shaping the future.',
    body: `Mobile app development is consolidating around a handful of clear trends, and businesses planning a build in the next year should be designing with these in mind.

On-device AI is moving from novelty to expectation. Users increasingly expect apps to understand context — what they typically order, when they usually travel, what they tend to search for — without sending every signal to a server.

Cross-platform frameworks have closed the performance gap enough that "native or nothing" is no longer the default advice. The right choice now depends on your team's existing skills and how deeply the app needs to integrate with platform-specific hardware.

Super-app patterns are spreading beyond the markets that popularized them. Rather than a single-purpose tool, users are increasingly comfortable with one app hosting several related services.

Privacy-first design is now a product requirement, not a legal footnote. Clear consent flows and minimal data collection are becoming competitive advantages, not just compliance checkboxes.

Offline-first architecture matters more as apps expand into markets with inconsistent connectivity. Designing for "what happens when the network drops" from day one avoids painful retrofits later.

For teams planning a 2026 build, the practical takeaway is this: pick your platform strategy based on your actual constraints, not the trend cycle, and budget real time for privacy and offline design rather than treating them as edge cases.`,
  },
  {
    slug: 'how-ai-is-transforming-businesses',
    title: 'How AI is Transforming Businesses',
    category: 'Technology',
    date: '2026-04-15',
    readTime: '7 min read',
    color: '#7C3AED',
    image: aiBusinessImage,
    excerpt: "AI is no longer the future — it's the present. Learn how businesses are leveraging AI to drive growth and efficiency.",
    body: `The conversation around AI in business has shifted from "should we adopt it" to "where does it fit first." The companies seeing real returns share a common pattern: they started narrow.

Customer support is the most common entry point, and for good reason. A well-scoped AI assistant, trained on a company's actual documentation and escalation rules, can resolve a meaningful share of routine queries while handing off the rest cleanly to a human.

Internal knowledge retrieval is a close second. Teams sitting on years of scattered documentation are finding that a retrieval-augmented system, pointed only at their own verified sources, turns "who knows the answer to this" into a search that takes seconds.

Content operations — drafting, summarizing, translating — are seeing the fastest measurable time savings, though the highest-performing teams still keep a human editing pass in the loop rather than publishing unreviewed output.

The businesses that struggle tend to share a different pattern: they start with the technology instead of the workflow, buying a general-purpose tool without deciding which specific, repeatable task it should own.

Our advice to clients starting an AI initiative is consistent: pick one workflow with a clear before-and-after metric, scope the AI's authority narrowly, and measure relentlessly before expanding.`,
  },
  {
    slug: 'ui-ux-best-practices-user-experience',
    title: 'UI/UX Best Practices for Better User Experience',
    category: 'Design',
    date: '2026-04-05',
    readTime: '4 min read',
    color: '#DB2777',
    image: uiUxImage,
    excerpt: 'Good design is good business. Learn the best UI/UX practices that enhance user satisfaction and engagement.',
    body: `Good design earns its keep quietly — in lower support volume, higher conversion, and users who don't have to think about the interface at all. A few practices consistently pay for themselves.

Design the empty state and the error state before the happy path. These are the moments users remember, and they're usually the last thing teams design, if they design them at all.

Reduce the number of decisions a user has to make per screen. Every additional choice, however small, adds friction — and friction compounds across a flow.

Use motion to explain, not to decorate. A transition should tell the user where something came from or where it's going; if it doesn't carry information, it's probably just noise.

Write interface copy the way you'd explain the action out loud to a colleague. "Save changes" beats "Submit" because it tells the user exactly what's about to happen.

Test with real content, not lorem ipsum. Layouts that look balanced with placeholder text often break under the actual length and irregularity of real data.

None of this requires a bigger design team — it requires treating these details as part of the product, not polish applied at the end.`,
  },
  {
    slug: 'choosing-the-right-tech-stack',
    title: 'Choosing the Right Tech Stack for Your Startup',
    category: 'Business',
    date: '2026-03-22',
    readTime: '6 min read',
    color: '#EA580C',
    image: startupStackImage,
    excerpt: 'The technology choices you make early shape your velocity for years. Here is how we help founders decide.',
    body: `Founders often ask us to recommend "the best" tech stack, but the better question is which stack fits their team, timeline, and the specific problem they're solving.

Start with your team's existing strengths. A stack your team already knows well will almost always ship faster than a theoretically superior one nobody has production experience with.

Optimize for time-to-first-user, not time-to-scale. Most startups fail from lack of demand, not lack of infrastructure — build for the traffic you have, not the traffic you hope for.

Choose boring technology for your core systems. Your database and authentication layer are not the place to experiment; save novelty for the parts of the product that are actually your differentiator.

Budget for the parts that are hard to change later. Your data model and your API contracts are expensive to migrate once customers depend on them — everything else is comparatively cheap to revisit.

Plan one deliberate re-architecture, not zero. Almost every successful product outgrows its first stack; the founders who plan for that transition calmly tend to fare better than those who treat it as a crisis.`,
  },
  {
    slug: 'seo-fundamentals-2026',
    title: 'SEO Fundamentals Every Founder Should Know',
    category: 'Web Development',
    date: '2026-03-08',
    readTime: '5 min read',
    color: '#0B5CFF',
    image: seoImage,
    excerpt: 'Search visibility still drives a huge share of organic growth. Here are the fundamentals that still matter.',
    body: `SEO advice ages quickly, but a core set of fundamentals has remained stable even as search engines have gotten smarter.

Technical health comes first. A fast, crawlable, mobile-friendly site is table stakes — no amount of content strategy compensates for a site search engines struggle to index.

Structured data helps search engines understand what your page is, not just what it says. Marking up products, articles, and organizations consistently improves how your listings appear in results.

Content should answer a specific question better than anything else ranking for it, not simply mention a keyword more often. Depth and clarity outperform repetition.

Internal linking is still one of the most underused levers founders have. A clear internal link structure helps both users and search engines understand which pages matter most.

Finally, treat SEO as a compounding investment, not a campaign. The sites that win are the ones that keep publishing and refining consistently over quarters, not weeks.`,
  },
]

export const categories = ['All Posts', 'Web Development', 'App Development', 'Design', 'Technology', 'Business']

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug)
