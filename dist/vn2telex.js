"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VN_2_TELEX = exports.vn2telex = void 0;
var VN_2_TELEX = {
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
};
exports.VN_2_TELEX = VN_2_TELEX;
/**
 * Convert vietnamese string to telex
 * @param str
 * @example
 * vn2telex('Việt Nam'); // Vieejt Nam
 */
var vn2telex = function (str) {
    return str
        .split('')
        .map(function (char) { return VN_2_TELEX[char] || char; })
        .join('');
};
exports.vn2telex = vn2telex;
vn2telex.VN_2_TELEX = VN_2_TELEX;
