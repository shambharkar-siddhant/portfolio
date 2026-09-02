import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BookOpen, ChevronDown, ExternalLink, Github, Instagram, Linkedin, Menu, PenLine, Sparkles, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Beyond Work', href: '#beyond-work' },
  { label: 'Contact', href: '#contact' },
];

const experiences = [
  {
    period: '2022 — now',
    role: 'Software Engineer',
    company: 'Independent / Backend systems',
    description: 'Designing dependable services, APIs, and the invisible connective tissue that lets good products feel simple.',
    tags: ['Distributed systems', 'Python', 'Go'],
    color: 'terracotta',
  },
  {
    period: '2020 — 2022',
    role: 'Research Engineer',
    company: 'Applied ML & Systems',
    description: 'Turning research ideas into working experiments: faster training loops, cleaner abstractions, and results people can reproduce.',
    tags: ['Machine learning', 'Research', 'MLOps'],
    color: 'sage',
  },
];

const projects = [
  {
    number: '01',
    title: 'RankUp',
    type: 'A system for finding signal',
    description: 'A ranking and recommendation engine built to make discovery feel less like shouting into an algorithm and more like being introduced to something good.',
    stack: 'Python · FastAPI · PostgreSQL',
    href: 'https://github.com/siddhantshambharkar',
    accent: 'project-sun',
  },
  {
    number: '02',
    title: 'mindbrew',
    type: 'Small rituals, better days',
    description: 'A gentle space for reflection and mental models — part notebook, part prompt library, made for ideas that need room to steep.',
    stack: 'TypeScript · React · SQLite',
    href: 'https://github.com/siddhantshambharkar',
    accent: 'project-sky',
  },
  {
    number: '03',
    title: 'Neural Architecture Search',
    type: 'Research, made practical',
    description: 'Exploring how machines can search for their own structures while keeping the trade-offs legible to the humans who build and trust them.',
    stack: 'PyTorch · NAS · Optimization',
    href: 'https://scholar.google.com/',
    accent: 'project-leaf',
  },
];

function SectionLabel({ children, tone = 'default' }: { children: string; tone?: 'default' | 'light' }) {
  return (
    <div className={`section-label ${tone === 'light' ? 'section-label-light' : ''}`}>
      <span className="section-dot" />
      <span>{children}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-mark" href="#home" onClick={closeMenu} data-testid="link-brand">
          <span className="brand-initials">SS</span>
          <span className="brand-name">Siddhant<br />Shambharkar</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="resume-button" href="https://www.linkedin.com/in/siddhantshambharkar/" target="_blank" rel="noreferrer" data-testid="link-resume">
          Resume <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy reveal">
            <div className="availability"><span className="availability-dot" /> Available for thoughtful work <span className="availability-city">· Bengaluru / anywhere</span></div>
            <p className="eyebrow">Software engineer <span>/</span> researcher <span>/</span> curious human</p>
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
              <img src="/journal-window.jpg" alt="A sunlit desk with an open notebook beside a leafy window" />
              <span className="image-caption">a quiet place to think</span>
            </div>
            <div className="hero-note"><span>currently</span><strong>thinking about<br />the shape of good<br />questions</strong></div>
            <div className="hero-scribble">↘</div>
          </div>
          <div className="hero-scroll"><span>Scroll to wander</span><ChevronDown size={16} /></div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <div className="intro-kicker">01 <span>of</span> 04</div>
          <p>I like the part of technology that sits just beneath the surface — the careful decisions, the unglamorous systems, the human reason for making a thing in the first place.</p>
          <div className="intro-signature">S<span>.</span></div>
        </section>

        <section className="about-section content-section" id="about">
          <div className="section-aside"><SectionLabel>About me</SectionLabel><span className="aside-index">01 / 04</span></div>
          <div className="about-layout">
            <div className="about-heading">
              <h2>Engineer by<br /><em>practice.</em><br />Human by default.</h2>
            </div>
            <div className="about-body">
              <p className="lead-copy">I’m a backend-focused software engineer and researcher who enjoys making complex things feel quietly obvious.</p>
              <p>My work lives where systems meet people: building reliable infrastructure, asking better questions of data, and leaving enough room for the unexpected. I care about thoughtful engineering, clear writing, and teams that are serious about the work without taking themselves too seriously.</p>
              <a className="arrow-link" href="#work" data-testid="link-about-work">A little more about my work <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="about-facts">
            <div><span>Based in</span><strong>Bengaluru, India</strong></div>
            <div><span>Studied at</span><strong>IIT Kharagpur</strong></div>
            <div><span>Best reached</span><strong><a href="mailto:hello@siddhant.shambharkar">Email me</a></strong></div>
          </div>
        </section>

        <section className="work-section content-section" id="work">
          <div className="section-aside"><SectionLabel>Work, in context</SectionLabel><span className="aside-index">02 / 04</span></div>
          <div className="section-heading-row">
            <h2>A track record<br />of <em>useful things.</em></h2>
            <p>Across engineering and research, I’ve learned that the best systems are both robust and considerate — they do their job, then get out of the way.</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className={`experience-row ${experience.color}`} key={experience.role}>
                <span className="experience-period">{experience.period}</span>
                <div className="experience-role"><h3>{experience.role}</h3><span>{experience.company}</span></div>
                <p>{experience.description}</p>
                <div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight className="row-arrow" size={19} />
              </article>
            ))}
          </div>
          <div className="education-note"><span className="education-icon"><BookOpen size={17} /></span><span><b>Education</b> · B.Tech, Computer Science &amp; Engineering · <em>Indian Institute of Technology, Kharagpur</em></span><span className="education-year">2016 — 2020</span></div>
        </section>

        <section className="projects-section content-section" id="projects">
          <div className="section-aside"><SectionLabel>Selected projects</SectionLabel><span className="aside-index">03 / 04</span></div>
          <div className="projects-heading">
            <div><h2>A few things<br />I’ve <em>made.</em></h2></div>
            <p>Some shipped. Some still curious. All of them started with a question that wouldn’t leave me alone.</p>
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
          <div className="writing-image">
            <img src="/monsoon.jpg" alt="Rain-speckled glass looking onto a hazy green city street" />
            <span className="image-caption">notes from the in-between</span>
          </div>
          <div className="writing-content">
            <SectionLabel>Writing &amp; thinking</SectionLabel>
            <h2>Making sense<br />of the <em>messy bits.</em></h2>
            <p>I write to slow down. On technology, attention, ambition, and the tiny observations that make a day feel like yours.</p>
            <div className="writing-card">
              <div className="writing-meta"><PenLine size={15} /> Most recent note · 06 min read</div>
              <h3>On building a life with room for wonder</h3>
              <p>A small argument for leaving a little white space in the calendar, the codebase, and the mind.</p>
              <a className="arrow-link" href="https://medium.com/" target="_blank" rel="noreferrer" data-testid="link-writing-note">Read the note <ArrowUpRight size={17} /></a>
            </div>
            <a className="text-link all-writing-link" href="https://medium.com/" target="_blank" rel="noreferrer" data-testid="link-all-writing">Browse all writing <span>↗</span></a>
          </div>
        </section>

        <section className="beyond-section content-section" id="beyond-work">
          <div className="section-aside"><SectionLabel>Beyond work</SectionLabel><span className="aside-index">04 / 04</span></div>
          <div className="beyond-heading"><h2>The things that<br />keep me <em>awake.</em></h2><p>A person is more than their job title. Here are a few recurring interests, rabbit holes, and reasons to take the long way home.</p></div>
          <div className="interest-grid">
            <div className="interest-card interest-travel"><span className="interest-number">01</span><h3>Long walks,<br /><em>new cities</em></h3><p>Finding the good light and the small local bakery.</p><div className="interest-mark">↗</div></div>
            <div className="interest-card interest-music"><span className="interest-number">02</span><h3>Music for<br /><em>the mood</em></h3><p>Albums, not algorithms. Usually something with a strange bridge.</p><div className="music-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className="interest-card interest-ideas"><span className="interest-number">03</span><h3>Questions<br /><em>over answers</em></h3><p>Psychology, philosophy, and why people do what they do.</p><div className="question-mark">?</div></div>
          </div>
        </section>

        <section className="journal-section">
          <div className="journal-header"><SectionLabel tone="light">From the photo journal</SectionLabel><span>little evidence of a life</span></div>
          <div className="journal-grid">
            <figure className="journal-photo journal-large"><img src="/walkway.jpg" alt="A figure walking through a quiet red and ochre stairway" /><figcaption><span>01</span> Somewhere between here and there</figcaption></figure>
            <div className="journal-quote"><span className="quote-mark">“</span><p>The world gets more interesting the closer you look.</p><span className="quote-credit">— a note from a Sunday walk</span></div>
            <figure className="journal-photo journal-small"><img src="/journal-window.jpg" alt="A warm desk by a leafy window with a notebook" /><figcaption><span>02</span> A good place to begin</figcaption></figure>
          </div>
        </section>

        <section className="contact-section content-section" id="contact">
          <div className="contact-leaf" aria-hidden="true">S</div>
          <SectionLabel>Say hello</SectionLabel>
          <div className="contact-layout">
            <div><h2>Have a good<br /><em>question?</em></h2><p>I’m always happy to talk about thoughtful products, hard backend problems, research, or the best thing you’ve read lately.</p></div>
            <div className="contact-cta"><a className="email-link" href="mailto:hello@siddhant.shambharkar" data-testid="link-email">hello@siddhant.shambharkar <ArrowUpRight size={20} /></a><div className="social-links"><a href="https://www.linkedin.com/in/siddhantshambharkar/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a><a href="https://github.com/siddhantshambharkar" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="link-github"><Github size={17} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-instagram"><Instagram size={17} /></a></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-initials">SS</span><span>Made with care, curiosity,<br />and a decent amount of coffee.</span></div>
        <div className="footer-center">© {new Date().getFullYear()} Siddhant Shambharkar</div>
        <a className="back-top" href="#home" data-testid="link-back-top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}

export default App;
