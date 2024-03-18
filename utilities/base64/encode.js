export default function encode(plainText) {
  if (typeof window === 'undefined') {
    return Buffer.from(
      unescape(encodeURIComponent(plainText)),
      'utf-8'
    ).toString('base64');
  } else {
    return window.btoa(unescape(encodeURIComponent(plainText)));
  }
}
