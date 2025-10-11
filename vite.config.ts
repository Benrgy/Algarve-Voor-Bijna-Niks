import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect hosting environment and set correct base path
  let base = '/';
  
  if (mode === 'production') {
    // Netlify deployment - use root path
    if (process.env.NETLIFY) {
      base = '/';
    }
    // GitHub Pages - extract repo name from GITHUB_REPOSITORY (format: owner/repo)
    else if (process.env.GITHUB_REPOSITORY) {
      const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
      base = `/${repoName}/`;
    }
    // Fallback for GitHub Pages if env var not available
    else {
      base = '/Algarve-Voor-Bijna-Niks/';
    }
  }
  
  return {
    base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
