import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    obfuscatorPlugin({
      include: ["src/main/vanilla/**"],
      exclude: ["/node_modules/"],
      apply: "build",
      debugger: true,
      options: {
        debugProtection: true,
      },
    }),
  ],
  root: "./src/main/vanilla",
  publicDir: "./public",
  //publicDir: "./src/main/vanilla/public",
  build: {
    outDir: "../../../dist",
    //outDir: 'src/main/resources/static/',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let other = "other";
          let extType =
            (assetInfo.name || `${other}.${other}`).split(".").at(1) || other;
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/css|sass|scss/i.test(extType)) {
            extType = "css";
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = "fonts";
          } else if (/json/.test(extType)) {
            extType = "anim";
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
        sourcemap: true,
      },
    },
  },
});
