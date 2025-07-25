import {fileURLToPath,URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins:[
        vue(),
        vueJsx(),
        tailwindcss(),
    ],
    resolve:{
        alias:{
            "@": fileURLToPath(new URL("./src",import.meta.url))
        }
    }
});