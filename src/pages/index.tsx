import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { ShowButtons } from "../components/ShowButtons";
import { SiderBar } from "../components/SiderBar";

export default function Home() {
  return (
    <>

    <SiderBar color="green" text="insert" > properties </SiderBar>

      <header>
        <ShowButtons />
      </header>
      <section>
        <Profile />
        <AboutMe />
      </section>
      <footer>
        <Footer />
      </footer>

    </>
  );
}
