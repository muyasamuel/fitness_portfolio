import Summary from "./components/Summary";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import MainContent from "./components/MainContent";
import Tweets from "./components/Tweets";

function App() {
  return (
    <div >
     <HomePage />
     <Tweets />
     <Main />
     <MainContent />
     <Summary />
    </div>
  );
}

export default App;
