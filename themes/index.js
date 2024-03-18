/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { darkColors, lightColors } from './colors';
import responsive from './responsive';
import placeholder from './utils/placeholder';
import zIndex from './zIndex';

const themeObj = {
  responsive,
  utils: {
    placeholder,
  },
  zIndex,
  // size: {
  //   bnbHeight: 56,
  //   naviBarHeight: 48,
  //   sideMargin: 16,
  //   gnbHeight: 56,
  //   mobileBottom: 80,
  //   bottom: 200,
  //   paginationTop: 40,
  //   mobilePaginationTop: 32,
  // },
};

export default function _(theme) {
  let colors;
  if (theme === 'dark') {
    colors = darkColors;
  } else if (theme === 'light') {
    colors = lightColors;
  } else {
    colors = lightColors;
  }
  return {
    colors,
    ...themeObj,
  };
}
