import autoprefixer from "autoprefixer";
import buildPartClasses from "./build/build-part-classes.js";
// import cssnano from "cssnano";

export default {
  plugins: [
    buildPartClasses,
    autoprefixer,
    // cssnano({ preset: "default" }),
  ],
};
