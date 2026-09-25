import Nav from "./components/Nav.jsx";
import Agenda from "./components/sections/Agenda.jsx";
import Audience from "./components/sections/Audience.jsx";
import Competitors from "./components/sections/Competitors.jsx";
import Cover from "./components/sections/Cover.jsx";
import Debriefing from "./components/sections/Debriefing.jsx";
import Editorial from "./components/sections/Editorial.jsx";
import GrowthOpportunities from "./components/sections/GrowthOpportunities.jsx";
import InstagramLayout from "./components/sections/InstagramLayout.jsx";
import InstagramStats from "./components/sections/InstagramStats.jsx";
import Inspirations from "./components/sections/Inspirations.jsx";
import NextSteps from "./components/sections/NextSteps.jsx";
import SocialPositioning from "./components/sections/SocialPositioning.jsx";
import ThankYou from "./components/sections/ThankYou.jsx";
import WordCloud from "./components/sections/WordCloud.jsx";

function App() {
  return (
    <div className="min-h-screen bg-paper-dim">
      <Nav />
      <main className="pt-14 md:pt-16">
        <Cover />
        <Agenda />
        <Debriefing />
        <SocialPositioning />
        <InstagramStats />
        <GrowthOpportunities />
        <Audience />
        <WordCloud />
        <Competitors />
        <Inspirations />
        <Editorial />
        <InstagramLayout />
        <NextSteps />
        <ThankYou />
      </main>
    </div>
  );
}

export default App;
