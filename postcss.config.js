require('ts-node/register');

module.exports = {
  plugins: [
    require("./src/build-part-classes.ts"),
    require("autoprefixer"),
    //require("cssnano")({ preset: "default" }),
  ],
};
