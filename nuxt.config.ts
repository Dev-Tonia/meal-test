// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "nuxt-svgo",
    "@nuxt/image",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@vueuse/motion/nuxt"
    // "@sidebase/nuxt-auth",
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
    /**
     * Prefix for all the imported component
     */
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
    preset: "node-server",
  }
});

