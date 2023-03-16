import "./App.css";
import Layout from "./Layout/Layout";
import BackToTopButton from "./pages/Home/BackToTopButton";
import Hotline from "./pages/Hotline";
import Routers from "./router/Routers";

function App() {
  return (
    <div>
      <Routers />

      <BackToTopButton />
      <Hotline />
      {/* <Layout /> */}
    </div>
  );
}

export default App;
