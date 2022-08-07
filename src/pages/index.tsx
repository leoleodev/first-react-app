import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { ShowButtons } from "../components/ShowButtons";

export default function Home() {
  return (
    <>

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
