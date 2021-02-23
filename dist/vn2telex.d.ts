declare const VN_2_TELEX: {
    [key: string]: string;
};
/**
 * Convert vietnamese string to telex
 * @param str
 * @example
 * vn2telex('Việt Nam'); // Vieejt Nam
 */
declare const vn2telex: {
    (str: string): string;
    VN_2_TELEX: {
        [key: string]: string;
    };
};
export { vn2telex, VN_2_TELEX };
