import type { Preview } from "@storybook/react";
import '../src/themes/finvity.scss'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
