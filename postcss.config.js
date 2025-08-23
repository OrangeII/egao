import autoprefixer from "autoprefixer";
import buildPartClasses from "./build/buildPartClasses.js";
import buildSpacingClasses from "./build/buildSpacingClasses.js";
import cssnano from "cssnano";

export default {
  plugins: [
    buildPartClasses,
    buildSpacingClasses,
    autoprefixer,
    //cssnano({ preset: "default" }),
  ],
};
