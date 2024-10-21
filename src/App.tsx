import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "@/app/hero/page";
import Header from "@/components/header";
import Footer from "@/components/footer";

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
