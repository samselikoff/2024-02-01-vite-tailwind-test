import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.ts";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.div
        animate={{
          backgroundColor: [
            colors.green[500],
            colors.blue[500],
            colors.green[500],
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="size-20 bg-black"
      />
    </div>
  );
}
