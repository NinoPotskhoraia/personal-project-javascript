"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Gradebooks = void 0;
var Gradebooks = /** @class */ (function () {
    function Gradebooks(groups, teachers, lms) {
        this.gbmap = new Map();
        this._counter = 0;
        this._groups = groups;
        this._teachers = teachers;
        this._lms = lms;
    }
    Gradebooks.prototype.add = function (groupId) {
        var id = 'GB' + this._counter++;
        var group = this._groups.gmap.get(groupId);
        var GB = {
            id: id,
            groupId: "".concat(groupId),
            room: "".concat(group.room),
            pupils: "".concat(group.pupils),
            records: []
        };
        this.gbmap.set(id, GB);
        return id;
    };
    Gradebooks.prototype.addRecord = function (id, record) {
        if (!this.gbmap.has(id)) {
            throw new Error("invalid id");
        }
        var gb = this.gbmap.get(id);
        gb.records.push(record);
        return record;
    };
    Gradebooks.prototype.read = function (id, pupilId) {
        if (!this.gbmap.has(id)) {
            throw new Error("invalid id");
        }
        var gradebook = this.gbmap.get(id);
        var pupils = gradebook.pupils;
        if (pupils.filter(function (pupil) { return pupil.id === pupilId; }).length === 0) {
            throw new Error('not a valid pupil id');
        }
        ;
        var obj = {};
        pupils.forEach(function (pupil) {
            if (pupil.id === pupilId) {
                obj.name = "".concat(pupil.name.first, " ").concat(pupil.name.last),
                    obj.records = gradebook.records;
            }
        });
        return obj;
    };
    Gradebooks.prototype.readAll = function (gbId) {
        if (!this.gbmap.has(gbId)) {
            throw new Error("invalid id");
        }
        var gradeBook = this.gbmap.get(gbId);
        return __spreadArray([], gradeBook.pupils, true);
    };
    Gradebooks.prototype.clear = function () {
        this.gbmap.clear();
    };
    return Gradebooks;
}());
exports.Gradebooks = Gradebooks;
