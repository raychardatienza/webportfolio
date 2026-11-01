/** Tailwind build config. Rebuild after changing classes:
 *  npx -y tailwindcss@3.4.17 -i ./_src/input.css -o ./assets/css/styles.css --minify
 */
module.exports = {
  content: ['./index.html', './design-system.html', './case-studies/**/*.html', './notes/**/*.html', './assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      colors: {
        laravel: '#FF2D20',
        ink: '#f1f5f9',
        void: { 950: '#07090e', 900: '#0c1019', 800: '#131826', 700: '#1c2337' },
      },
    },
  },
};
