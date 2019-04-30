import restoreLazySizesConfig from './break-lazysizes';
import lazySizes from 'lazysizes';

lazySizes.cfg.lazyClass = 'shogun-lazyload';
lazySizes.cfg.loadedClass = "shogun-lazyloaded";
restoreLazySizesConfig();
