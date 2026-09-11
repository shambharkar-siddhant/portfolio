import { type FormEvent, useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown, ExternalLink, Github, Instagram, Linkedin, Menu, PenLine, Sparkles, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Beyond Work', href: '#beyond-work' },
  { label: 'Contact', href: '#contact' },
];

const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/shambharkar-siddhant', icon: Github },
  { label: 'Medium', href: 'https://shambharkarsiddhant.medium.com/', icon: PenLine },
  { label: 'Travel blog', href: 'https://siddhants-travel-tails.vercel.app/', icon: Sparkles },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhant-shambharkar/', icon: Linkedin },
];

const experiences = [
  {
    period: '2024 — now',
    role: 'Backend Engineer',
    company: 'Aparoksha Financial Services',
    description: 'Building workflow engines and automation that keep high-volume financial operations fast, reliable, and quietly moving.',
    tags: ['Python', 'PostgreSQL', 'Redis'],
    color: 'terracotta',
  },
  {
    period: '2020 — 2022',
    role: 'Full-Stack Developer',
    company: 'Expert Script Soft Solutions',
    description: 'Worked on the systems behind discovery and checkout. helping products feel relevant and payments feel effortless.',
    tags: ['React', 'Machine Learning', 'Kafka'],
    color: 'sage',
  },
];

const education = [
  { period: '2022 — 2024', degree: 'M.Tech, Computer Science & Engineering', institution: 'Indian Institute of Technology, Kharagpur' },
  { period: '2017 — 2020', degree: 'B.Tech in Information Technology', institution: 'MIT College of Engineering, Pune' },
];

const articles = [
  {
    meta: 'Most loved note · 03 min read',
    title: 'Freedom After The Fall',
    description: 'On losing what no longer serves us, and finding freedom on the other side.',
    href: 'https://shambharkarsiddhant.medium.com/the-freedom-after-the-fall-why-losing-everything-might-be-the-start-of-everything-97483c0e91aa',
    color: 'writing-sky',
  },
  {
    meta: 'Software Engineering · 04 min read',
    title: 'The Difference Between Writing Code and Building Systems',
    description: 'Writing Code Is About Correctness, Building Systems Is About Survival.',
    href: 'https://shambharkarsiddhant.medium.com/the-difference-between-writing-code-and-building-systems-4a3038937083?sharedUserId=shambharkarsiddhant',
    color: 'writing-sage',
  },
  {
    meta: 'Philosophy · 03 min read',
    title: 'The Philosophy of Almost Doing Something',
    description: 'How action kills fantasy',
    href: 'https://shambharkarsiddhant.medium.com/the-philosophy-of-almost-doing-something-ed88895774df?sharedUserId=shambharkarsiddhant',
    color: 'writing-sun',
  },
];

const projects = [
  {
    number: '01',
    title: 'LockServer',
    type: 'Teaching Machines to Take Turns',
    description: 'A lock service for a simple problem: when many machines want the same thing, only one should get it at a time and the system should recover cleanly if that machine disappears.',
    stack: 'GO · SQLite · Locks',
    href: 'https://github.com/shambharkar-siddhant/LockServer',
    accent: 'project-sun',
  },
  {
    number: '02',
    title: 'ChronosQ',
    type: "The Job Isn't Done Until It's Done",
    description: 'A job dispatcher built around one simple promise: once work enters the system, it should keep moving, even if a worker crashes, disappears, or has to try again.',
    stack: 'Python · Queue · FileSystem',
    href: 'https://github.com/shambharkar-siddhant/chronosq',
    accent: 'project-sky',
  },
  {
    number: '03',
    title: 'Sentinel',
    type: 'Distributed API gateway & rate limiter',
    description: 'A multi-tenant gateway with authenticated reverse proxying and precise quota policies. Atomic Redis token buckets, resilient local fallback, and hot-key mitigation sustain 3,000+ requests per second across 500 concurrent clients.',
    stack: 'API Gateway · Redis · Distributed Systems',
    href: 'https://github.com/shambharkar-siddhant/Sentinel',
    accent: 'project-leaf',
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="section-dot" />
      <span>{children}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (formStatus !== 'success' && formStatus !== 'error') return;
    const timer = window.setTimeout(() => setFormStatus('idle'), 5000);
    return () => window.clearTimeout(timer);
  }, [formStatus]);

  const closeMenu = () => setMenuOpen(false);

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="portfolio-shell">
      <aside className="social-rail" aria-label="Find me online">
        {externalLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label} aria-label={link.label}>
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </aside>
      <header className="site-header">
        <a className="brand-mark" href="#home" onClick={closeMenu} data-testid="link-brand">
          <img className="brand-favicon" src="/favicon.svg" alt="" />
          <span className="brand-name">Siddhant<br />Shambharkar</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>
              {item.label}
            </a>
          ))}
          <div className="nav-external-links">
            <span>Elsewhere</span>
            {externalLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label} onClick={closeMenu}>{link.label} ↗</a>)}
          </div>
        </nav>
        <a className="resume-button" href="https://drive.google.com/file/d/1Cs3CLh8fjwwNFz-EjshNMxUDoL0rFk4R/view?usp=drive_link" target="_blank" rel="noreferrer" data-testid="link-resume">
          Resume <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy reveal">
            <div className="availability"><span className="availability-city">· Bengaluru, India</span></div>
            <p className="eyebrow">Software engineer <span>/</span> curious human</p>
            <h1>Siddhant<br /><em>Shambharkar</em></h1>
            <p className="hero-line">I build things for a living, explore things out of curiosity, and occasionally write down what I notice.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work" data-testid="link-hero-work">See what I do <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact" data-testid="link-hero-contact">Start a conversation <span>↗</span></a>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="sun-disc" />
            <div className="hero-image-frame">
              <img src="/hero.webp" alt="A sunlit desk with an open notebook beside a leafy window" />
              <span className="image-caption"></span>
            </div>
            <div className="hero-note"><span>Notebook thought</span><strong>maybe meaning <br /> is made,<br />not found</strong></div>
          </div>
          <div className="hero-scroll"><span>Scroll to wander</span><ChevronDown size={16} /></div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <div className="intro-kicker">01 <span>of</span> 04</div>
          <p>Behind every simple thing is a surprisingly complicated story. That’s usually the part I want to understand.</p>
          <div className="intro-signature">S<span>.</span></div>
        </section>

        <section className="about-section content-section" id="about">
          <div className="section-aside"><SectionLabel>About me</SectionLabel><span className="aside-index">01 / 04</span></div>
          <div className="about-layout">
            <div className="about-heading">
              <h2>Engineer by<br /><em>practice.</em><br />Human by default.</h2>
            </div>
            <div className="about-body">
              <p className="lead-copy">I’m a software engineer who likes understanding how things work and, more importantly, why they were built that way.</p>
              <p>Most of my work happens behind the scenes: backend systems, infrastructure, data, and the small decisions that make software dependable. Outside of code, I’m usually following some other curiosity &rarr; technology, psychology, philosophy, writing, or whatever happened to send me down a rabbit hole that week.</p>
              <a className="arrow-link" href="#work" data-testid="link-about-work">A little more about my work <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="about-facts">
            <div><span>Based in</span><strong>Bengaluru, India</strong></div>
            <div><span>Studied at</span><strong>IIT Kharagpur</strong></div>
            <div><span>Best reached</span><strong><a href="mailto:shambharkarsiddhant0698@gmail.com">Email me</a></strong></div>
          </div>
        </section>

        <section className="work-section content-section" id="work">
          <div className="section-aside"><SectionLabel>Work, in context</SectionLabel><span className="aside-index">02 / 04</span></div>
          <div className="section-heading-row">
            <h2>A track record<br />of <em>useful things.</em></h2>
          </div>
          <div className="work-list-label">Work Experience</div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className={`experience-row ${experience.color}`} key={experience.role}>
                <span className="experience-period">{experience.period}</span>
                <div className="experience-role"><h3>{experience.role}</h3><span>{experience.company}</span></div>
                <p>{experience.description}</p>
                <div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {/* <ArrowUpRight className="row-arrow" size={19} /> */}
              </article>
            ))}
          </div>
          <div className="education-label">Education</div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.degree}>
                <span className="education-year">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section content-section" id="projects">
          <div className="section-aside"><SectionLabel>Selected projects</SectionLabel><span className="aside-index">03 / 04</span></div>
          <div className="projects-heading">
            <div><h2>A few things<br />I’ve <em>made.</em></h2></div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.title} data-testid={`link-project-${project.title}`}>
                <div className="project-topline"><span>{project.number}</span><ExternalLink size={16} /></div>
                <div className="project-title"><h3>{project.title}</h3><span>{project.type}</span></div>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
                <div className="project-shape" aria-hidden="true"><span /></div>
              </a>
            ))}
          </div>
          <div className="projects-footnote"><Sparkles size={16} /> The best projects are rarely finished; they become part of how you think.</div>
        </section>

        <section className="writing-section content-section" id="writing">
          <div className="section-aside"><SectionLabel>Writing &amp; thinking</SectionLabel></div>
          <div className="writing-heading">
            <h2>Things worth<br /><em>writing about.</em></h2>
          </div>
          <div className="writing-grid">
            {articles.map((article, index) => (
              <a className={`writing-card ${article.color}`} href={article.href} target="_blank" rel="noreferrer" key={article.title} data-testid={`link-writing-${index + 1}`}>
                <div className="writing-meta"><PenLine size={15} /> {article.meta}</div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="writing-card-link">Read the article <ArrowUpRight size={18} /></span>
              </a>
            ))}
          </div>
          <a className="text-link all-writing-link" href="https://shambharkarsiddhant.medium.com/" target="_blank" rel="noreferrer" data-testid="link-all-writing">Browse all articles <span>↗</span></a>
        </section>

        <section className="beyond-section content-section" id="beyond-work">
          <div className="section-aside"><SectionLabel>Beyond work</SectionLabel><span className="aside-index">04 / 04</span></div>
          <div className="beyond-heading"><h2>Life beyond<br />the <em>screen.</em></h2><p>Some of the best stories begin where the signal ends—with a trail, an open road, or a plan that changes along the way.</p></div>
          <div className="postcard-grid">
            <a className="postcard postcard-trek" href="https://siddhants-travel-tails.vercel.app/" target="_blank" rel="noreferrer" aria-label="Read about trekking on Siddhant's travel blog">
              <div className="postcard-photo"><img src="/trekking.webp" alt="Trekking through snow-covered mountains" /></div>
              <div className="postcard-caption"><span>01 / Into the wild</span><h3>Trekking</h3><p>Cold air, long climbs, clear thoughts.</p></div>
            </a>
            <a className="postcard postcard-travel" href="https://siddhants-travel-tails.vercel.app/" target="_blank" rel="noreferrer" aria-label="Read about travelling on Siddhant's travel blog">
              <div className="postcard-photo"><img src="/rafting.webp" alt="Rafting with friends through a mountain river" /></div>
              <div className="postcard-caption"><span>02 / Going places</span><h3>Travelling</h3><p>New roads, good company, better stories.</p></div>
            </a>
            <a className="postcard postcard-bike" href="https://siddhants-travel-tails.vercel.app/" target="_blank" rel="noreferrer" aria-label="Read about bike trips on Siddhant's travel blog">
              <div className="postcard-photo"><img src="/bike-ride.webp" alt="Motorcycle trip on a mountain road" /></div>
              <div className="postcard-caption"><span>03 / On two wheels</span><h3>Bike trips</h3><p>The long way is usually the right one.</p></div>
            </a>
          </div>
        </section>

        <section className="contact-section content-section" id="contact">
          <div className="contact-leaf" aria-hidden="true">S</div>
          <SectionLabel>Say hello</SectionLabel>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2>Let’s make<br />something <em>meaningful.</em></h2>
              <p>Good conversations often begin with a half-formed idea. Whether you’re building something thoughtful, untangling a difficult problem, or simply want to exchange perspectives, leave a note. I’d genuinely love to hear from you.</p>
              <div className="social-links"><a href="https://www.linkedin.com/in/siddhant-shambharkar/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a><a href="https://github.com/shambharkar-siddhant" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="link-github"><Github size={17} /></a><a href="https://www.instagram.com/siddhant_shambharkar" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-instagram"><Instagram size={17} /></a></div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/xdkgnzek" method="POST" onSubmit={submitContactForm}>
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" placeholder="What should I call you?" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="Tell me what’s on your mind…" required />
              </div>
              <input type="hidden" name="_subject" value="New portfolio message" />
              <button className="contact-submit" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={18} /></button>
            </form>
          </div>
        </section>
      </main>

      {(formStatus === 'success' || formStatus === 'error') && (
        <div className={`contact-toast contact-toast-${formStatus}`} role={formStatus === 'error' ? 'alert' : 'status'} aria-live="polite">
          <div><strong>{formStatus === 'success' ? 'Message received.' : 'Message not sent.'}</strong><span>{formStatus === 'success' ? 'Thanks for reaching out—I’ll get back to you soon.' : 'Something went wrong. Please try again in a moment.'}</span></div>
          <button type="button" onClick={() => setFormStatus('idle')} aria-label="Dismiss notification"><X size={16} /></button>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-brand"><img className="brand-favicon" src="/favicon.svg" alt="" /><span>Made with care, curiosity,<br />and a decent amount of coffee.</span></div>
        <div className="footer-center">
          <div className="footer-links">{externalLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}</div>
          <span>© {new Date().getFullYear()} Siddhant Shambharkar</span>
        </div>
        <a className="back-top" href="#home" data-testid="link-back-top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}

export default App;
