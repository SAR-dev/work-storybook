import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      storySort: (a, b) =>
        a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
      // storySort: {
      //   method: 'alphabetical',
      //   order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],,
      //   locales: 'en-US',
      // },
    },
  },
  docs: { inlineStories: true },
};
