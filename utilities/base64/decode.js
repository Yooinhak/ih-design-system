export default function decode(encodedText) {
  if (typeof window === 'undefined') {
    return Buffer.from(
      decodeURIComponent(escape(encodedText)),
      'base64'
    ).toString('utf-8');
  } else {
    return window.atob(decodeURIComponent(escape(encodedText)));
  }
}
