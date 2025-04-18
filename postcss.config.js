import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss').PostCSSConfig} */
export default {
  plugins: [tailwindcss, autoprefixer],
};
