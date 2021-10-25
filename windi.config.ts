import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig(() => ({
	variants: {
		extend: {
			fill: ['hover', 'focus'],
		},
	},
	plugins: [formsPlugin],
}));

// defineWindiSetup(() => ({
//   shortcuts: {
//     // custom the default background
//     'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
//   },
//   theme: {
//     extend: {
//       // fonts can be replaced here, remember to update the web font links in `index.html`
//       fontFamily: {
//         sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
//         mono: '"Fira Code", monospace',
//       },
//     },
//   },
