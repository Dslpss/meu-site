import React from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "brightness(2) saturate(0)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "brightness(1) saturate(1)",
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "brightness(2) saturate(0)",
  },
};

const RouteTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 0.5 }}>
        {children}
      </PageWrapper>
    </AnimatePresence>
  );
};

export default RouteTransition;
