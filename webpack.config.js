const path = require("path");//reuired for concatenating paths as paths can be system dependent
//and we are using absolute path Therefore thats a bad idea to concatenate using simple +
console.log(__dirname);
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
      loader:'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
      },{
        test:/\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool:"cheap-module-eval-source-map",
  devServer:{
    contentBase: path.join(__dirname, "public"),
    historyApiFallback:true
  }
};

//loader --Its a plugin of webpack using this we tell webpack how to treat or what to have to be c0nverted Eg : We need to tell webpack t
//to whenever it sees a js file so use babel to convert JSX to normal JS using presets of React and also convert
//ES6 to ES5 so this loader is a plugin which helps webpack to do the above
//babel core - helps webpack to run babel from cli and it will use the prsests also-- not very clear
// babel loader as mentioned earlier os a plugin which teaches webpack how to run babel when it sees some type of file.