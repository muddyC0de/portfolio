import {
  AboutMeSection,
  Header,
  SkillsSection,
  WorksSection,
} from "./components";
import { Grid } from "./components/grid";

function App() {
  return (
    <>
      <Header />
      <Grid />
      <AboutMeSection />
      <Grid />
      <SkillsSection />
      <WorksSection />
    </>
  );
}

export default App;
