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
  // auth: {
  //   // globalAppMiddleware: true,
  //   isEnabled: true,
  //   disableServerSideAuth: false,
  //   originEnvKey: 'AUTH_ORIGIN',
  //   baseURL: 'https://api-staging.mealtrips.com/api/',
  //   provider: {
  //     type: 'local',
  //     // pages: {
  //     //   login: '/'
  //     // },
  //     token: {
  //       signInResponseTokenPointer: '/data/token',
  //       type: 'Bearer',
  //       cookieName: 'auth.token',
  //       headerName: 'Authorization',
  //       maxAgeInSeconds: 1800,
  //       // sameSiteAttribute: 'lax',
  //       // cookieDomain: 'localhost',
  //       // secureCookieAttribute: false,
  //       // httpOnlyCookieAttribute: false
  //     },
  //     endpoints: {
  //       signIn: { path: 'login', method: 'post', },
  //       // signOut: { path: '/logout', method: 'post' },
  //       // signUp: { path: '/register', method: 'post' },
  //       // getSession: { path: '/session', method: 'get' }
  //     }
  //   },
  //   // sessionRefresh: {
  //   //   enablePeriodically: false,
  //   //   enableOnWindowFocus: false,
  //   // }
  // },
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
});
// { token: { bearer: 'THE_AUTH_TOKEN' }, timestamp: '2023' }

