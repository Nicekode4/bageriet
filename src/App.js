import AppRouter from "./AppRouter/AppRouter";
import { GlobalStyle } from "./Global.style";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <AppRouter />
    </div>
  );
}

export default App;
