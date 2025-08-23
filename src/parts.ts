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
    square: {
      left: "[",
      right: "]",
    },
    bear: {
      left: "ʕ",
      right: "ʔ",
    },
  },
  arms: {
    hugging: "つ",
    "raised-fist": {
      left: "٩",
      right: "۶",
    },
    out: {
      left: "＼",
      right: "／",
    },
    raised: {
      left: "╰",
      right: "╯",
    },
    "thumbs-up": "d",
  },
  face: {
    happy: "￣ ▽ ￣",
    excited: "˃ᴗ˂",
    "very-excited": "≧▽≦",
    "wide-happy": "◕‿◕",
    angry: "ಠ 益 ಠ",
    "smile-awkward": "⌒_⌒",
    smug: "￣︶￣",
    "very-smug": "￣ω￣",
    sly: "￢‿￢",
    tearful: "╥﹏╥",
    despair: "꒦ິ꒳꒦ີ",
    animal: "• ᴥ •",
    lenny: " ͡° ͜ʖ ͡°",
  },
  mouth: {
    triangle: {
      down: "▽",
      up: "△",
    },
    frown: "益",
    smug: "︶",
    smile: "‿",
    "smile-small": "ᴗ",
    "very-smug": "ω",
    "downturned-small": "꒳",
    pouting: {
      left: "ε",
      right: "з",
    },
    squiggly: "﹏",
    square: "口",
    "square-small": "□",
    "square-slanted": "Д",
    "square-slanted-small": "д",
    tulip: "ᗢ",
    "tulip-down": "ᗣ",
    "tulip-side": "ᗤ",
    kata: "ヮ",
    flipped: "∀",
    m: "ｍ",
    disapproval: "︿",
    "disapproval-slanted": "ヘ",
    animal: "ᴥ",
    lenny: " ͜ʖ",
  },
  eyes: {
    fury: {
      left: "◣",
      right: "◢",
    },
    sunglasses: "▼",
    tear: {
      single: "T",
      double: "╥",
      despair: "꒦ີ",
      heart: "ಥ",
      "heart-side": "ಡ",
    },
    line: {
      bliss: "￣",
      happy: "⁀",
    },
    "side-look": "￢",
    excited: {
      left: ">",
      right: "<",
    },
    distress: {
      left: "ᗒ",
      right: "ᗕ",
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
      bear: "•",
    },
    lenny: " ͡°",
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
