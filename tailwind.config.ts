/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';
import VAR from './config/variables';

export default <Partial<Config>>{
  content: [
    './components//*.{js,vue,ts}',
    './layouts//*.vue',
    './pages//*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: VAR.CONTAINER_PADDING_X,
        md: VAR.CONTAINER_PADDING_X_MD,
        xl: VAR.CONTAINER_PADDING_X_XL,
      },
    },
    screens: {
      xs: `${VAR.BREAKPOINTS_XS}px`,
      sm: `${VAR.BREAKPOINTS_SM}px`,
      md: `${VAR.BREAKPOINTS_MD}px`,
      lg: `${VAR.BREAKPOINTS_LG}px`,
      xl: `${VAR.BREAKPOINTS_XL}px`,
      '2xl': `${VAR.BREAKPOINTS_2XL}px`,
      '3xl': `${VAR.BREAKPOINTS_3XL}px`,
      '4xl': `${VAR.BREAKPOINTS_4XL}px`,
    },
    fontFamily: {
      primary: ['poppins', 'sans-serif'],
      secondary: ['orbitron', 'sans-serif'],
      logo: ['stick no bills', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {},
      gridTemplateRows: {},
      spacing: {
        'padding-container-x': VAR.CONTAINER_PADDING_X,
        'padding-container-x-md': VAR.CONTAINER_PADDING_X_MD,
      },
      opacity: {
        hover: '60%',
      },
      transitionDuration: {
        hover: '200ms',
      },
      backgroundImage: {},
      boxShadow: {},
      colors: {
        blue: '#000AFF',
      },
      screens: {
        'is-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [require('tailwind-hamburgers'), require('tailwindcss-animated')],
};
