import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
