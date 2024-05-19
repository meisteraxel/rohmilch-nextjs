import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Frische Quelle: Rohmilch finden & genießen",
  description:
    "Entdecke die natürliche Frische! Bei uns findest Du Informationen rund um das Thema Rohmilch sowie eine praktische Übersicht über verfügbare Milchtankstellen in ganz Deutschland. Tauche ein in die Welt unverfälschter Milchgenüsse!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
