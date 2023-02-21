/**
 * A utility function to get a lighter or darker version of a given hex color by the magnitude of
 * the given integer amount
 *
 * @param hexColor - a hex string representing a color, which must be in a 6 # format w/
 *                or w/out the #
 * @param magnitude - a positive or negative integer representing the magnitude of difference to
 *                 use when calculating a color shade offset
 */
const colorShader = (hexColor: string, magnitude: number): string => {
  hexColor = hexColor.replace('#', '');

  const [WHITE, BLACK] = ['ffffff', '000000'];
  if (
    (hexColor.toLowerCase() === WHITE && magnitude > 0) ||
    (hexColor.toLowerCase() === BLACK && magnitude < 0)
  ) {
    console.log(`Invalid magnitude of ${magnitude} supplied for hex color ${hexColor}.`);
    magnitude = magnitude * -1;
  }

  if (hexColor.length !== 6) {
    console.log(`Invalid hex color ${hexColor} given. 6-digit hex color required.`);
    return hexColor;
  }

  const decimalColor = parseInt(hexColor, 16);

  let r = (decimalColor >> 16) + magnitude;
  r > 255 && (r = 255);
  r < 0 && (r = 0);

  let g = (decimalColor & 0x0000ff) + magnitude;
  g > 255 && (g = 255);
  g < 0 && (g = 0);

  let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
  b > 255 && (b = 255);
  b < 0 && (b = 0);

  return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
};
