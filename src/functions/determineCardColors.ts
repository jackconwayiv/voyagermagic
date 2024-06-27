import colorDictionary from "../data/colorDictionary";

export default (cost: string) => {
  const seen = new Set<string>();
  const code = cost
    .split("")
    .filter((char) => {
      if (char >= "A" && char <= "Z" && !seen.has(char)) {
        seen.add(char);
        return true;
      }
      return false;
    })
    .join("");

  const colors = {
    a: "gray",
    b: "gray",
    c: "gray",
    d: "gray",
  };
  if (code.length > 0) {
    colors.a = colorDictionary[code[0]];
    colors.b = colorDictionary[code[0]];
    colors.c = colorDictionary[code[0]];
    colors.d = colorDictionary[code[0]];
  }
  if (code.length > 1) {
    colors.c = colorDictionary[code[1]];
    colors.d = "orange";
  }
  if (code.length > 2) {
    colors.b = colorDictionary[code[1]];
    colors.c = colorDictionary[code[2]];
  }
  return colors;
};
