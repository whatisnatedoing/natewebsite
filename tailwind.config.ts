import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { outfit: ['Outfit','sans-serif'] },
      colors: { accent:'rgba(174,140,111,1)', 'accent-hover':'rgba(194,160,131,1)', dark:'rgba(0,0,0,1)', light:'rgba(255,255,255,1)', 'soft-bg':'rgba(242,242,242,1)' },
      transitionTimingFunction: { mil:'cubic-bezier(0,0,0.3642,1)' },
      keyframes: {
        jump:{  '0%':{transform:'translateY(-30px)'},'50%':{transform:'translateY(30px)'},'100%':{transform:'translateY(-30px)'}},
        spin:{  from:{transform:'rotate(0deg)'},to:{transform:'rotate(360deg)'}},
        fadeIn:{from:{opacity:'0'},to:{opacity:'1'}},
      },
      animation: { 'jump':'jump 10s linear infinite', 'spin-slow':'spin 20s linear infinite' },
    },
  },
  plugins: [],
}
export default config
