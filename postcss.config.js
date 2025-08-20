import autoprefixer from "autoprefixer";
import buildPartClasses from "./build/buildPartClasses.js";
// import cssnano from "cssnano";

export default {
  plugins: [buildPartClasses, autoprefixer, cssnano({ preset: "default" })],
};
