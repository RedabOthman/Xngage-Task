import "../../assets/styles/footer.css";

type FooterSectionProps = {
  title: string;
  links: string[];
  ariaLabel: string;
}

// Slicing each 8 links to an array
const FooterSection = ({ title, links, ariaLabel } : FooterSectionProps) => {
  const chunkedLinks: string[][] = [];
  for (let i = 0; i < links.length; i += 8) {
    chunkedLinks.push(links.slice(i, i + 8));
  }

  return (
    <section className="footer-section">
      <h3>{title}</h3>
      <nav className="footer-nav" aria-label={ariaLabel}>
        {chunkedLinks.map((chunk, colIndex) => (
          <ul key={colIndex} className="footer-links-column">
            {chunk.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </section>
  );
};

export default FooterSection;