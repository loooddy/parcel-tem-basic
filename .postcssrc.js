// ESM
// CommonJS

// import autoprefixer form 'autoprefixer'
// 위와 같은 코드
// const autoprefixer = require("autoprefixer")

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
// 위와 같은 코드
module.exports = {
  plugins: [
    require("autoprefixer")
  ]
}