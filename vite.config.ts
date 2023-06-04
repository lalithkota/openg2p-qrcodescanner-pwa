import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: '/qrcodescanner',
    plugins: [
        VitePWA({ registerType: 'autoUpdate' })
    ]
})
