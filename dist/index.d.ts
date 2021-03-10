/**
 * Convert vietnamese string to telex
 * @param str
 * @example
 * vn2telex('Việt Nam'); // Vieejt Nam
 */
declare function vn2telex(str: string): string

declare namespace vn2telex {
  const VN_TELEX_MAPPER: {
    [key: string]: string
  }
}

export = vn2telex
