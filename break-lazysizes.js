// module: break-lazysizes.js
// store lazysizes config, delete config and restore
let config = window.lazySizesConfig;

if ("lazySizesConfig" in window) {
  delete window.lazySizesConfig;
}

export default () => {
  if ("lazySizesConfig" in window) {
    if (config) {
      window.lazySizesConfig = config;
    } else {
      delete window.lazySizesConfig;
    }
  }
};
