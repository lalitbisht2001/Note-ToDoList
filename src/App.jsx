import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Connect from "./Connect";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

const Home = () => {
  return (
    <>
      <Connect />
    </>
  )
}
