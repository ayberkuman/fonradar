// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

function rem(size) {
  return `${size / 16}rem`;
}

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const DEFAULT_LINE_HEIGHT = 1.5;
const DEFAULT_LETTER_SPACING = "0em";
function makeFontSize(
  fontSize,
  fontWeight,
  lineHeight = DEFAULT_LINE_HEIGHT,
  letterSpacing = DEFAULT_LETTER_SPACING
) {
  return [
    fontSize,
    {
      lineHeight,
      fontWeight: fontWeights[fontWeight],
      letterSpacing,
    },
  ];
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: rem(375),
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#101615",
      white: "#FFFFFF",
      green: "#00866E",
      "green-black-bg": "#00FFB9",
      neutral: {
        100: "#F9FCFB",
        200: "#F0F6F5",
        300: "#E9F1EF",
        400: "#CADFD9",
        500: "#B7C7C3",
        600: "#909F9A",
        700: "#707D7A",
        800: "#394842",
        900: "#132820",
      },
      // accent colors defined in colors obj, since they're widely used in regular components
      accent: {
        purple: "#5754FF",
        red: "#E84142",
        blue: "#1E3FE0",
        pink: "#FF0099",
        green: "#00D62F",
        "light-green": "#CCE7E2",
      },
      background: {
        light: "#F9FCFB",
        dark: "#1A1A1A",
        popupDark: "#2C2C2C",
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      heading: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: fontWeights,
    fontSize: {
      "title-30-37-medium": makeFontSize(rem(30), "medium", rem(37)),
      "title-28-34-medium": makeFontSize(rem(28), "medium", rem(34)),
      "title-26-32-medium": makeFontSize(rem(26), "medium", rem(32)),
      "title-24-auto-medium": makeFontSize(rem(24), "medium"),
      "title-24-36-medium": makeFontSize(rem(24), "medium", rem(36)),
      "title-22-27-medium": makeFontSize(rem(22), "medium", rem(27)),
      "title-20-auto-medium": makeFontSize(rem(20), "medium"),
      "title-18-22-medium": makeFontSize(rem(18), "medium", rem(22)),
      "title-16-auto-medium": makeFontSize(rem(16), "medium"),
      "title-16-24-medium": makeFontSize(rem(16), "medium", rem(24)),
      "title-14-21-regular": makeFontSize(rem(14), "regular", rem(21)),
      "title-14-17-medium": makeFontSize(rem(14), "medium", rem(17)),
      "title-14-21-medium": makeFontSize(rem(14), "medium", rem(21)),
      "title-12-auto-regular": makeFontSize(rem(12), "regular"),
      "title-12-18-regular": makeFontSize(rem(12), "regular", rem(18)),
      "title-12-21-regular": makeFontSize(rem(12), "regular", rem(21)),
      "title-12-auto-medium": makeFontSize(rem(12), "medium"),
      "title-12-17-medium": makeFontSize(rem(12), "medium", rem(17)),
      "title-12-18-medium": makeFontSize(rem(12), "medium", rem(18)),
      "basic-24-150-medium": makeFontSize(rem(24), "medium", 1.5),
      "basic-24-145-semibold": makeFontSize(rem(24), "semibold", 1.45),
      "basic-20-135-medium": makeFontSize(rem(20), "medium", 1.35),
      "basic-16-auto-regular": makeFontSize(rem(16), "regular"),
      "basic-16-140-regular": makeFontSize(rem(16), "regular", 1.4),
      "basic-16-150-regular": makeFontSize(rem(16), "regular", 1.5),
      "basic-16-auto-medium": makeFontSize(rem(16), "medium"),
      "basic-16-auto-semibold": makeFontSize(rem(16), "semibold"),
      "basic-14-auto-regular": makeFontSize(rem(14), "regular"),
      "basic-14-145-regular": makeFontSize(rem(14), "regular", 1.45),
      "basic-14-150-regular": makeFontSize(rem(14), "regular", 1.5),
      "basic-14-auto-medium": makeFontSize(rem(14), "medium"),
      "basic-14-145-medium": makeFontSize(rem(14), "medium", 1.45),
      "basic-14-150-medium": makeFontSize(rem(14), "medium", 1.5),
      "basic-14-145-semibold": makeFontSize(rem(14), "semibold", 1.45),
      "basic-12-auto-regular": makeFontSize(rem(12), "regular"),
      "basic-12-140-regular": makeFontSize(rem(12), "regular", 1.4),
      "basic-12-150-regular": makeFontSize(rem(12), "regular", 1.5),
      "basic-12-auto-medium": makeFontSize(rem(12), "medium"),
      "basic-11-auto-regular": makeFontSize(rem(11), "regular"),
      "basic-11-145-regular": makeFontSize(rem(11), "regular", 1.45),
      "basic-11-auto-medium": makeFontSize(rem(11), "medium"),
      "basic-10-150-light": makeFontSize(rem(10), "light", 1.5),
      "basic-10-auto-regular": makeFontSize(rem(10), "regular"),
      "basic-10-140-regular": makeFontSize(rem(10), "regular", 1.4),
      "basic-10-145-regular": makeFontSize(rem(10), "regular", 1.45),
      "basic-10-150-regular": makeFontSize(rem(10), "regular", 1.5),
      "basic-10-auto-medium": makeFontSize(rem(10), "medium"),
    },
    extend: {
      boxShadow: {
        "small-elements": "0px 0px 5px 0px #3A3D481F",
      },
      gradientColorStops: {
        light1: "#EDFFEA",
        light2: "#F9FCFB",
        dark1: "#173A33",
        dark2: "#191919",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        marquee: "marquee 50s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
