import { Profile } from "../components/Profile";
import { ShowButtons } from "../components/ShowButtons";

export default function Home() {
  return (
    <>
      <header>
        <ShowButtons color="tomato">  </ShowButtons>
        <ShowButtons color="gray">  </ShowButtons>
        <ShowButtons color="violet">  </ShowButtons>
      </header>
      <section>
        <Profile />
      </section>
    </>
  );
}
