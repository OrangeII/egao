import { start } from "repl";

interface PartClass {
  content: string;
  [key: string]: string;
}

interface Part {
  [key: string]: Part | string | PartClass;
}

const parts: Part = {
  body: {
    round: {
      left: "(",
      right: ")",
    },
  },
  arms: {
    hugging: "つ",
  },
  face: {
    happy: "￣ ▽ ￣",
    angry: "ಠ 益 ಠ",
    "smile-awkward": "⌒_⌒",
  },
  eyes: {
    line: {
      bliss: "￣",
      happy: "⁀",
    },
    "side-look": "￢",
    excited: {
      left: ">",
      right: "<",
    },
    "very-excited": {
      left: "≧",
      right: "≦",
    },
    o: {
      disapproving: "ಠ",
      tiny: "°",
      happy: "◕",
      sad: "⊙",
    },
  },
  //accessories
  blush: {
    content: "⁄ ⁄ ⁄",
    "white-space": "pre",
  },
  veins: "╬",
  sweat: ";",
};

export { parts, Part, PartClass };
