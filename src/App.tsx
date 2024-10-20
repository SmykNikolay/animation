import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/app/login/page";
import Header from "@/components/header";
import Footer from "@/components/footer";

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
