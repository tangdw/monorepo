import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      name: 'shared',
      entry: 'src/main.ts',
    },
  },
  server: {
    // proxy: {
    //   '/api/index.php': {
    //     target: 'https://xxxx',
    //     secure: false,
    //     changeOrigin: true,
    //     cookieDomainRewrite: '',
    //     headers: {
    //       cookie: 'xx登录态xx'
    //     },
    //   },
    // },
  },
})
