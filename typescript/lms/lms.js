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
exports.LMS = void 0;
var subject_js_1 = require("../subject/subject.js");
var LMS = /** @class */ (function () {
    function LMS() {
        this.map = new Map();
    }
    LMS.prototype.add = function (subject) {
        this.map.set(subject.id, subject);
        return subject.id;
    };
    LMS.prototype.remove = function (subject) {
        this.map["delete"](subject.id);
    };
    LMS.prototype.verify = function (subject) {
        if (this.map.has(subject.id)) {
            return true;
        }
    };
    LMS.prototype.readAll = function () {
        var _this = this;
        var arr = [];
        this.map.forEach(function (subject) {
            for (var _i = 0, _a = _this.map.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value === subject) {
                    subject = __assign({ id: subject.id }, subject);
                }
            }
            arr.push(subject);
        });
        return arr;
    };
    return LMS;
}());
exports.LMS = LMS;
var history = new subject_js_1.Subject({
    title: 'History',
    lessons: 24
});
var math = new subject_js_1.Subject({
    title: 'history',
    lessons: 34
});
var lms = new LMS();
console.log(lms.add(history));
console.log(lms.add(math));
// console.log(lms.remove(history));
console.log(lms.verify(history));
console.log(lms.readAll());
