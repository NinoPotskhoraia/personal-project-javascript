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
exports.Teachers = void 0;
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
var Teachers = /** @class */ (function () {
    function Teachers() {
        this._counter = 0;
        this.tmap = new Map();
    }
    Teachers.prototype.add = function (teacher) {
        isDate(teacher.dateOfBirth);
        var id = 'T' + this._counter++;
        this.tmap.set(id, teacher);
        return id;
    };
    Teachers.prototype.read = function (id) {
        return __assign(__assign({}, this.tmap.get(id)), { id: id });
    };
    Teachers.prototype.update = function (id, update) {
        isDate(update.dateOfBirth);
        hasId(id);
        var teacher = this.read(id);
        delete teacher.id;
        this.tmap.set(id, __assign(__assign({}, teacher), update));
        return id;
    };
    Teachers.prototype.remove = function (id) {
        hasId(id);
        this.tmap["delete"](id);
    };
    return Teachers;
}());
exports.Teachers = Teachers;
;
