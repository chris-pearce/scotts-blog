export default function toLowercaseHyphenDelimited(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
