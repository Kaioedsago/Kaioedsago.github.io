const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const textShadowUtilities = {};
      const values = theme("textShadow");

      for (const key in values) {
        textShadowUtilities[`.text-shadow-${key}`] = {
          textShadow: values[key],
        };
      }

      addUtilities(textShadowUtilities, ["hover"]);
    }),
  ],
};
