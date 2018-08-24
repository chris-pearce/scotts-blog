// @flow
export default function toLowercaseHyphenDelimited(str: string) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
