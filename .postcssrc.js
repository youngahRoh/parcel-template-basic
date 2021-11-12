// ESM 
//CommonJS

//import 대신 require
//import autoprefixer from 'autoperfixer'
const autoprefixer = require('autoprefixer');

//exort
module.exports = {
  Plugin: [
    autoprefixer
  ]
}

// 간소화!

// module.exports = {
//   Plugin: [
//     require('autoprefixer');
//   ]
// }