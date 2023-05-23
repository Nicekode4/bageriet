import AppRouter from "./AppRouter/AppRouter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { GlobalStyle } from "./Global.style";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
