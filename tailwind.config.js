/** Tailwind build config. Rebuild after changing classes:
 *  npx tailwindcss@3.4.17 -i ./_src/input.css -o ./assets/css/styles.css --minify
 */
module.exports = {
  content: ['./index.html', './case-studies/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        laravel: '#FF2D20',
        ink: '#e6f1ff',
        void: { 950: '#05070f', 900: '#0a0f1e', 800: '#0f1629', 700: '#18213a' },
      },
    },
  },
};
