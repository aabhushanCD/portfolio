import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <Layout>
      <CustomCursor></CustomCursor>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
