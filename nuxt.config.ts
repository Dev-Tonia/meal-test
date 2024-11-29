// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // layoutTransition: true, // Enable layout transitions if needed
    // pageTransition: true, // Enable page transitions if needed
  },
  ssr: true,
  buildDir: ".output",
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
      baseURL:
        import.meta.env.NUXT_PUBLIC_BASE_URL ??
        "https://api-staging.mealtrips.com/api",
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
        baseUrl: ".",
      },
    },
  },
  nitro: {
    preset: "node-server", // or appropriate preset for your hosting
  },
});
