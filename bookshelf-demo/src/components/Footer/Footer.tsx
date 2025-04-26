import FooterSection from "./FooterSection";
import "../../assets/styles/footer.css";

const Footer = () => {
  const navigationLinks: string[] = ["Home", "Books", "Reviews", "News", "Contact"];
  const categoriesLinks: string[] = [
    "Art", "Biography", "Business", "Chick Lit", "Children's", "Christian", "Classics", "Comics",
    "Contemporary", "Cookbooks", "Crime", "Ebooks", "Fantasy", "Fiction", "Gay And Lesbian",
    "Graphic Novels", "Historical Fiction", "History", "Horror", "Humor And Comedy", "Manga",
    "Memoir", "Music"
  ];
  const followUSLinks: string[] = ["Facebook", "Twitter", "RSS"];

  return (
    <footer className="footer">
      <FooterSection title="Navigation" links={navigationLinks} ariaLabel="Footer navigation links" />
      <FooterSection title="Categories" links={categoriesLinks} ariaLabel="Footer book categories" />
      <FooterSection title="Follow Us" links={followUSLinks} ariaLabel="Social media links" />
    </footer>
  );
};

export default Footer;