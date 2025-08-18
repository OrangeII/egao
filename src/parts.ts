interface Part {
  [key: string]: string | Part;
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
  },
  blush: {
    content: "⁄ ⁄ ⁄",
    "white-space": "pre",
  },
};

export { parts, Part };
