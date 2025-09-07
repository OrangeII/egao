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
    waving: "づ",
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
      high: "乁",
      vertical: "｢",
      curved: "ノ",
    },
    "thumbs-up": "d",
    grabbing: "ԅ",
    flexing: {
      left: "ᕙ",
      right: "ᕗ",
    },
    guard: "ง",
    yurayura: "〜",
    bent: "√",
    rolled: "੭",
    salute: "ゞ",
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
    kiss: "³",
    beak: "Θ",
  },
  eyes: {
    fury: {
      left: "◣",
      right: "◢",
    },
    sunglasses: {
      triangle: "▼",
      square: "■",
      round: "●",
      diamond: "◆",
      parallelogram: "▰",
      sparkle: "✦",
    },
    tear: {
      single: "T",
      double: "╥",
      despair: "꒦ີ",
      heart: "ಥ",
      "heart-side": "ಡ",
      flipped: "┻",
      low: "┬",
    },
    line: {
      bliss: "￣",
      happy: "⁀",
    },
    "side-look": "￢",
    excited: {
      left: "<",
      right: ">",
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
      big: "〇",
    },
    u: {
      big: "Ｕ",
    },
    lenny: " ͡°",
    fixed: "ᄑ",
  },
  //accessories
  blush: {
    content: "⁄ ⁄ ⁄",
    "white-space": "pre",
  },
  veins: "╬",
  sweat: ";",
  sparkle: "✧",
  rod: "━",
  dandelion: "✺",
  wings: "ଘ",
  cloud: "☁",
  cheek: {
    roll: "๑",
  },
  star: "☆",
  "star-decorated": "✯",
  note: "♪",
  notes: "♫",
};

export { parts, Part, PartClass };
