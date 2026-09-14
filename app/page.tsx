const links = [
  { label: 'Email', href: 'mailto:seonholee@mcl.korea.ac.kr' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/seonho-lee-604679198/',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=_LtQ4TcAAAAJ',
  },
];

export default function Home() {
  return (
    <main className="home-shell">
      <article className="profile" aria-labelledby="page-title">
        <header className="profile-header">
          <h1 id="page-title">SEON HO LEE</h1>
          <a
            className="cv-link"
            href="/Seon_Ho_Lee_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </header>

        <div className="rule" aria-hidden="true" />

        <figure className="portrait-frame">
          <img
            src="/seon-ho-lee.webp"
            alt="Seon Ho Lee by the waterfront at sunset"
          />
        </figure>

        <div className="bio">
          <p>
            I am an Applied Scientist at Amazon AGI in Seattle, where I work on
            multimodal foundation models, vision-language models, video
            understanding, and efficient long-context modeling.
          </p>

          <p>
            I contributed to{' '}
            <a
              href="https://www.amazon.science/publications/amazon-nova-2-multimodal-reasoning-and-generation-models"
              target="_blank"
              rel="noreferrer"
            >
              Amazon Nova 2
            </a>
            , a family of multimodal models that reason across text, images,
            video, and speech. Previously, I worked on long-form video
            understanding and automatic audio description at Amazon Prime
            Video.
          </p>

          <p>
            I received my Ph.D. in Electrical Engineering from Korea
            University, advised by{' '}
            <a
              href="https://scholar.google.com/citations?user=KOdKwNsAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Chang-Su Kim
            </a>
            . My broader research interests include representation learning,
            embedding-space optimization, and rank estimation.
          </p>
        </div>

        <nav className="profile-links" aria-label="Profile links">
          {links.map((link, index) => (
            <span key={link.label} className="link-item">
              <a
                href={link.href}
                target={
                  link.href.startsWith('http') || link.href.endsWith('.pdf')
                    ? '_blank'
                    : undefined
                }
                rel={
                  link.href.startsWith('http') || link.href.endsWith('.pdf')
                    ? 'noreferrer'
                    : undefined
                }
              >
                {link.label}
              </a>
              {index < links.length - 1 && (
                <span className="separator" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </nav>

        <footer>SEON HO LEE · 2026</footer>
      </article>
    </main>
  );
}
