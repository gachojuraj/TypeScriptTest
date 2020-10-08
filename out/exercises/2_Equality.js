"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equal = void 0;
function equal(a, b, c) {
    if (a == b || a == c || b == c)
        return (b == c && b == a) ? 3 : 2;
    return 0;
}
exports.equal = equal;
//# sourceMappingURL=2_Equality.js.map