import "@/styles/footer.css";
import FooterContent from "./footerContent";
import FooterBottom from "./footerBottom";

export default function Footer({footerContentString, footerContentBtn}) {
  return (
    <div>
        <FooterContent
          footerContentString={footerContentString}
          footerContentBtn={footerContentBtn}
        />
      <div>
        <FooterBottom />
      </div>
    </div>
  );
}
