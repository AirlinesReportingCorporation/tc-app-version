import "./globals.css";
import main from "./scss/main.module.scss";
import NavBar from "./components/tc-nav-bar";

export const metadata = {
  title: "TravelConnect | Airlines Reporting Corporation",
  description: "Travel Connect Series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={main} style={{backgroundColor:"#000"}}>
        <div className="tc2021-main tc2021-main-v">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
