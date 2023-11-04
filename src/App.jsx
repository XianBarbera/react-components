import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="elbananerosoyio"
        name="El Bananero"
      />
      <TwitterFollowCard
        isFollowing
        userName="maritobaracus"
        name="Marito Baracus"
      />
      <TwitterFollowCard isFollowing userName="ianBarbera" name="Ian Barbera" />
      <TwitterFollowCard
        isFollowing={false}
        userName="gaspymienta"
        name="Gaspy"
      />
      ;
    </section>
  );
}
