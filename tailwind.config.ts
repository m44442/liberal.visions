import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4753a2",
        heading: "#001e43",
        body: "#192f60",
        light: "#d3d6dd",
        pinkLight: "#e3adc1",
        yellowlight: "#fff462",
        purpleLight: "#7f1184",
      },
      fontFamily: {
        fantasy: "fantasy", 'yumin': ['"Yu Mincho"', '游明朝', 'YuMincho', '"Hiragino Mincho ProN"', 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
