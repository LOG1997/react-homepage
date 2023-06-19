// uno.config.ts
import { defineConfig } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { presetExtra } from 'unocss-preset-extra';
import presetWind from '@unocss/preset-wind'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
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
