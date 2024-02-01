import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.ts";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

console.log(colors.amber[500]);

export default function App() {
  return <p>hello</p>;
}
