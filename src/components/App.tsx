import Header from "./Header";
import Register from "./Register";
import Status from "./Status";
import GuidesList from "./GuidesList";
import Footer from "./Footer";
import {useGuides} from "../hooks/useGuides";
import { ThemeProvider } from "styled-components";
import Theme from "../theme/index";
import GlobalStyles from "../theme/GlobalStyles";
import {AppContainer, HomeContainer, MainContainer} from './App'

function App() {
    const { guides, addGuide, updateStatus, getStatistics, showHistory } = useGuides();

  return (
    <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <AppContainer>
        <Header />
      <MainContainer>
        <HomeContainer></HomeContainer>

        <Register addGuide={addGuide} guides={guides} />

        <Status stats={getStatistics()} />

        <GuidesList
          guides={guides}
          updateStatus={updateStatus}
          showHistory={showHistory}
        />
      </MainContainer>

      <Footer />
      </AppContainer>
      
    </ThemeProvider>
      

      
    </>
  );
}

export default App;
