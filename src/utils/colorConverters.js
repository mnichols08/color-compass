// Utility function to parse hex color and return RGB values
const parseHex = (hex) => {
  hex = hex.replace(/^#/, "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};

const hexToRGB = (hex) => {
  const { r, g, b } = parseHex(hex);
  return `rgb(${r}, ${g}, ${b})`;
};

const hexToHSL = (hex) => {
  let { r, g, b } = parseHex(hex);
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min;
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h =
      max === r
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
        ? (b - r) / d + 2
        : (r - g) / d + 4;
  }

  return `hsl(${Math.round(h * 60)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
};

export default parseHex;
export { hexToRGB, hexToHSL };
