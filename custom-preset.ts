import type { Preset } from 'unocss'

// shortcuts rules theme presets  variants transformers preflights
export default function myPreset(): Preset {
  return {
    name: 'custom-preset',
    shortcuts: [
      {
        btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
      },
      {
        ellip: 'overflow-hidden text-ellipsis text-nowrap',
      },
      { 'flex-center': 'flex items-center justify-center' }, // 内容居中
      [/^base-border-(.*)$/, ([, c]) => `border-1 border-style-dashed border-${c}`], // 动态快捷方式，如 base-border-red
      [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
    ],
    rules: [
      // [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
      // [/^w-(\d+)$/, ([, d]: any) => ({ width: `${d / 4}rem` })],
      // [/^h-(\d+)$/, ([, d]: any) => ({ height: `${d / 4}rem` })],
    ],
    theme: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    variants: [],
  }
}
