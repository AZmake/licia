/* Use modules that is created by define.
 *
 * |Name      |Type    |Desc                |
 * |----------|--------|--------------------|
 * |[requires]|array   |Dependencies        |
 * |method    |function|Codes to be executed|
 */

/* example
 * // define('A', () => 'A');
 * use(['A'], function (A) {
 *     console.log(A + 'B'); // -> 'AB'
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function use(requires: string[], method: Function): void;
 * export declare function use(method: Function): void;
 */

_('map define has toArr');

exports = function(requires, method) {
    if (method == null) {
        method = requires;
        requires = [];
    }

    requires = map(toArr(requires), function(val) {
        return req(val);
    });

    method.apply(null, requires);
};

var modules = define._modules;

var requireMarks = {};

function req(name) {
    if (has(requireMarks, name)) return modules[name];

    var requires = modules[name].requires,
        body = modules[name].body,
        len = requires.length;

    for (var i = 0; i < len; i++) requires[i] = req(requires[i]);

    var exports = body.apply(null, requires);
    if (exports) modules[name] = exports;

    requireMarks[name] = true;

    return modules[name];
}
