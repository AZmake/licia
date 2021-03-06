/* Merge together the values of each of the arrays with the values at the corresponding position.
 *
 * |Name  |Type |Desc                         |
 * |------|-----|-----------------------------|
 * |...arr|array|Arrays to process            |
 * |return|array|New array of grouped elements|
 */

/* example
 * zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function zip(...arr: Array<any[]>): Array<any[]>;
 */

_('restArgs unzip');

exports = restArgs(unzip);
