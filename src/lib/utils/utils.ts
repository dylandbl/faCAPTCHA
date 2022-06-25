import stringToFindArr from "./stringsToFind";

export const randomCaptchaTopic = (stringsArr?: string[]) => {
  const strings = stringsArr ? stringsArr : stringToFindArr;
  const randValue = Math.floor(Math.random() * strings.length);

  return strings[randValue];
};
