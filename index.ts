const REM_BASE = 0.0625;

function unitError(unit: string): Error {
  return new Error(`please specify a valid ${unit} unit`);
}

function pixelToRem(px: number): string {
  return `${px * REM_BASE}rem`;
}
function remToPixel(rem: number): string {
  return `${rem * 16}px`;
}

function processPixel(pixel: number) {
  if (pixel) {
    return pixelToRem(pixel);
  } else {
    throw unitError("px");
  }
}
function processRem(rem: number) {
  if (rem) {
    return remToPixel(rem);
  } else {
    throw unitError("rem");
  }
}

function main() {
  const [, from, unit] = Deno.args;
  try {
    let result = null;
    if (unit === "px") {
      result = processPixel(Number(from));
    } else if (unit === "rem") {
      result = processRem(Number(from));
    }
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
main();
