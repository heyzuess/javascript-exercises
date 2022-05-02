const ftoc = function(f) {
  /* [°C] = ([°F] − 32) × 5⁄9 */
  let c = ((f - 32) * (5/9));
  c = parseFloat(c.toFixed(1));
  return c;
};

const ctof = function(c) {
  /*[°F] = [°C] × 9⁄5 + 32 */
  let f = (c * (9 / 5) + 32);
  f = parseFloat(f.toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
