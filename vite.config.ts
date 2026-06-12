import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    inspectAttr(),
    react(),
    {
      name: 'inject-scroll-fix',
      transformIndexHtml(html) {
        return html.replace(
          '<title>LoanLah - Fast & Safe Loans Malaysia</title>',
          '<title>LoanLah - Fast & Safe Loans Malaysia</title>\n    <script>history.scrollRestoration="manual";window.scrollTo(0,0)</script>'
        );
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
