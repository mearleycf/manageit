import { defineConfig, squooshImageService } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      changeFreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    icon(),
  ],
  output: 'server',
  adapter: vercel(),
  image: {
    service: squooshImageService(),
  },
})
