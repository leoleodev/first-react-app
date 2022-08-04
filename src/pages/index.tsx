import { Profile } from "../components/Profile";
import { ShowButtons } from "../components/ShowButtons";
import { Stake } from "../components/Stake";

export default function Home() {
  return (
    <>
      <header>
        <ShowButtons />
      </header>
      <section>
        <Profile />
        <Stake />
      </section>
    </>
  );
}
