
/**
 * Checks if cookie exists and returns all cookies, or cookie value if cookie name is passed
 *
 * @export
 * @param {(string | Array<string>)} cookieString cookie string from client
 * @param {string} cookieName cookie name to retrieve
 * @returns {string | object}
 */
export function extractCookie(cookieString: string | Array<string>, cookieName?: string): string | object {
    // @ts-ignore
    let c = decodeURIComponent(cookieString),
        d: string | Array<string>, e: object = {}

    if (c.indexOf(';') != -1) d = c.split(';')
    else d = c
    if (typeof d == 'string')
        e[d.split('=')[0]] = d.split('=')[1]
    else
        d.map(p => e[p.split('=')[0]] = p.split('=')[1])

    if (typeof cookieName != 'undefined')
        return e[cookieName]
    return e
}