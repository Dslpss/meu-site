import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { HackerModeProvider } from "./contexts/HackerModeContext";
import PageTransition from "./components/PageTransition";
import RouteTransition from "./components/RouteTransition";

// Lazy loading dos componentes
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
    background-color: #000;
    color: #00FF00;
  }
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HackerModeProvider>
          <PageTransition>
            <Layout>
              <Header />
              <Suspense fallback={<Loading />}>
                <RouteTransition>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projetos" element={<Projects />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contato" element={<Contact />} />
                  </Routes>
                </RouteTransition>
              </Suspense>
              <Footer />
            </Layout>
          </PageTransition>
        </HackerModeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
