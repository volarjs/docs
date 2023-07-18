/** @type {import("prettier").Options} */
export default {
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
  astroAllowShorthand: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
