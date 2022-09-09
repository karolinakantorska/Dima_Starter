export const firstLettersBig = (text: string) => text.replace(/(^[A-Za-züäö]|\s[A-Za-züäö])/g, m => m.toUpperCase());

export const replaceMinusToSpace = (text: string) => text.replace('-', '');