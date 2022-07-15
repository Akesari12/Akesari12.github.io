import React from "react"
import { AnimatePresence, domAnimation } from 'framer-motion'
import Layout from "./components/Layout";
import "@fontsource/anek-tamil";
import "@fontsource/anek-tamil/300.css";
import "@fontsource/anek-tamil/500.css";
import "@fontsource/anek-tamil/600.css";
import "@fontsource/anek-tamil/700.css";
import "@fontsource/anek-tamil/800.css";
import "@fontsouce/material-icons-rounded";

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  return <Layout {...props}>{element}</Layout>
};