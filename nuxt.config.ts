export default defineNuxtConfig({
  ssr: true,
  modules: [
    "nuxt-icon",
    "nuxt-svgo",
    "@nuxt/image",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@vueuse/motion/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  runtimeConfig: {
    public: {
      baseURL: import.meta.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl:  import.meta.env.NUXT_PUBLIC_BASE_URLy,
      },
    },
  },
});
