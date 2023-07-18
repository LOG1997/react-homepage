// uno.config.ts
import { defineConfig } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { presetExtra } from 'unocss-preset-extra';
import { animatedRules } from './src/style/animated'
// import presetWind from '@unocss/preset-wind'
export default defineConfig({
    // ...UnoCSS options
    rules: [
        // ...your rules
        // keyframes
        ...animatedRules,
        // ['animated-backMove', ['@keyframes  backMove {0 %: { transform: translate(0, 0) }, 100 %: { transform: translate(-100 %, 0) }}', { 'animation - name': 'backMove', 'animation - duration': '15s', 'animation - iteration - count': 'infinite', 'animation - timing - function': 'linear' }]],
    ],
    presets: [
        // presetWind(),
        presetUno(),
        presetAttributify(),
        presetExtra(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
    ],
});
