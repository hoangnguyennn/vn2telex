const VN_2_TELEX: { [key: string]: string } = {
  á: 'as',
  à: 'af',
  ả: 'ar',
  ã: 'ax',
  ạ: 'aj',
  ắ: 'aws',
  ằ: 'awf',
  ẳ: 'awr',
  ẵ: 'awx',
  ặ: 'awj',
  ă: 'aw',
  ấ: 'aas',
  ầ: 'aaf',
  ẩ: 'aar',
  ẫ: 'aax',
  ậ: 'aaj',
  â: 'aa',
  đ: 'dd',
  é: 'es',
  è: 'ef',
  ẻ: 'er',
  ẽ: 'ex',
  ẹ: 'ej',
  ế: 'ees',
  ề: 'eef',
  ể: 'eer',
  ễ: 'eex',
  ệ: 'eej',
  ê: 'ee',
  í: 'is',
  ì: 'if',
  ỉ: 'ir',
  ĩ: 'ix',
  ị: 'ij',
  ó: 'os',
  ò: 'of',
  ỏ: 'or',
  õ: 'ox',
  ọ: 'oj',
  ố: 'oos',
  ồ: 'oof',
  ổ: 'oor',
  ỗ: 'oox',
  ộ: 'ooj',
  ô: 'oo',
  ớ: 'ows',
  ờ: 'owf',
  ở: 'owr',
  ỡ: 'owx',
  ợ: 'owj',
  ơ: 'ow',
  ú: 'us',
  ù: 'uf',
  ủ: 'ur',
  ũ: 'ux',
  ụ: 'uj',
  ứ: 'uws',
  ừ: 'uwf',
  ử: 'uwr',
  ữ: 'uwx',
  ự: 'uwj',
  ư: 'uw',
  ý: 'ys',
  ỳ: 'yf',
  ỷ: 'yr',
  ỹ: 'yx',
  ỵ: 'yj'
}

/**
 * Convert vietnamese string to telex
 * @param str
 * @example
 * vn2telex('Việt Nam'); // Vieejt Nam
 */
const vn2telex = (str: string): string => {
  return str
    .split('')
    .map((char) => VN_2_TELEX[char] || char)
    .join('')
}

vn2telex.VN_2_TELEX = VN_2_TELEX

export { vn2telex, VN_2_TELEX }
