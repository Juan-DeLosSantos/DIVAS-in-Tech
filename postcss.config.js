module.exports = {
  plugins: [
    //runs tailwindcss
    require('@tailwindcss/postcss'),

    //makes css browser compatible
    require('postcss-preset-env'), 

    //add prefixes for old browsers
    require('autoprefixer'),
  ],
};