import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Program from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
export default function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}
