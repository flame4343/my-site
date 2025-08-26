import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Resume from "@/pages/Resume";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}
