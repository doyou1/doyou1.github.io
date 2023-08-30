import "../../../styles/footer.css";
import FooterContent from "./footerContent";
import FooterBottom from "./footerBottom";

export default function Footer(footerString) {
  console.log(footerString.footerString.footerContentString);
  return (
    <div>
        <FooterContent
          footerContentString={footerString.footerString.footerContentString}
          footerContentBtn={footerString.footerString.footerContentBtn}
        />
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
}
