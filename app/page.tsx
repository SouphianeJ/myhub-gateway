import Link from 'next/link';

const projects = [

{
    name: 'Code Builder',
    url: 'https://code-builder-git-massrework-souphianejs-projects.vercel.app',
    description: 'A tool for building code snippets.',
    color: '#64FFDA',
  },

{
    name: 'SeedPortfolio ',
    url: 'https://seed-portfolio-seven.vercel.app/admin/projects',
    description: 'seed Portfolio Db.',
    color: '#152CD6',
  },
  {
    name: 'To Do ',
    url: 'https://todozz-chi.vercel.app/',
    description: 'to dos.',
    color: '#FFD300',
  },
  {
    name: 'Prompt Gallery',
    url: 'https://prompt-shop.vercel.app/',
    description: 'A collection of useful prompts.',
    color: '#9F00FF',
  },
  {
    name: 'Cmd sheet Cheat',
    url: 'https://cmd-sheetcheat.vercel.app/',
    description: 'Next.js Server-Side Rendering examples.',
    color: '#9F00FF',
  },
  {
    name: 'Get repo code',
    url: 'https://getrepocode.vercel.app/',
    description: 'Export Github repo code.',
    color: '#D61545',
  },
];

export default function Home() {
  return (
    <main className="container">
      <h1>Gateway</h1>
      <div className="gallery">
        {projects.map((project) => (
          <Link href={project.url} key={project.name} className="project-card">
            <div className="project-color" style={{ backgroundColor: project.color }} />
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}