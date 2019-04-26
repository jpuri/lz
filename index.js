import lazySizes from "lazysizes";
import originalLazySizesConfig from "./store-global-ls-options";

Object.assign(lazySizes.cfg, {
  lazyClass: "shogun-lazyload",
  loadedClass: "shogun-lazyloaded",
  loadingClass: "shogun-lazyloading",
});

lazySizes.init()

if (originalLazySizesConfig) {
  window.lazySizesConfig = originalLazySizesConfig;
} else if ("lazySizesConfig" in window) {
  delete window.lazySizesConfig;
}
