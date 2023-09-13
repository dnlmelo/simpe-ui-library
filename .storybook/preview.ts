import type { Preview } from "@storybook/react";
import '../src/foundation/themes/finvity.scss'
import '../src/foundation/index.scss'

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
