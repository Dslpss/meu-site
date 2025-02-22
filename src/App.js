import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

// Lazy loading dos componentes
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));

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
        <Layout>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projetos" element={<Projects />} />
            </Routes>
          </Suspense>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
