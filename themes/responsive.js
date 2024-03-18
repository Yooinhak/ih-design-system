/**
 * @copyright Copyright 2020 Corretto, Inc. All rights reserved.
 */

export const deviceSize = {
  xs: 304,
  sm: 768,
  md: 1280,
  lg: 1768,
  xl: 2160,

  mobile: 768,
};

const responsive = size => {
  return `@media (max-width: ${deviceSize[size] - 1}px)`;
};

export default responsive;
