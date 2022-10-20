import Summary from "./components/Summary";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import MainContent from "./components/MainContent";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
     <HomePage />
     <Tweets />
     <Main />
     <MainContent />
     <Summary />
     <Footer />
    </div>
  );
}

export default App;
