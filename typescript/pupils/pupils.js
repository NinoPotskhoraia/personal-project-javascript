"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Pupils = void 0;
function isDate(date) {
    if (isNaN(Date.parse(date))) {
        throw new Error('dateOfBirth parameter must be a date string');
    }
}
function hasId(id) {
    if (!this.tmap.has(id)) {
        throw new Error("invalid id");
    }
    ;
}
var Pupils = /** @class */ (function () {
    function Pupils() {
        this._counter = 0;
        this.pmap = new Map();
    }
    Pupils.prototype.add = function (pupil) {
        var id = 'P' + this._counter++;
        isDate(pupil.dateOfBirth);
        this.pmap.set(id, pupil);
        return __assign({ id: id }, pupil);
    };
    Pupils.prototype.read = function (id) {
        hasId(id);
        var valid = this.pmap.get(id);
        return valid ? __assign({ id: id }, valid) : null;
    };
    Pupils.prototype.update = function (id, update) {
        hasId(id);
        var pupil = this.read(id);
        delete pupil.id;
        this.pmap.set(id, __assign(__assign({}, pupil), update));
        return this.pmap.get(id);
    };
    Pupils.prototype.remove = function (id) {
        hasId(id);
        this.pmap["delete"](id);
    };
    return Pupils;
}());
exports.Pupils = Pupils;
