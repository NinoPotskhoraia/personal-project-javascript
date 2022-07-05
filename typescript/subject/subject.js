"use strict";
exports.__esModule = true;
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject(obj) {
        this._counter = 0;
        Object.assign(this, obj);
        this._id = 'S' + this._counter++;
    }
    Object.defineProperty(Subject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.Subject = Subject;
