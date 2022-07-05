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
exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups() {
        this._counter = 0;
        this.gmap = new Map();
    }
    Groups.prototype._hasId = function (id) {
        if (!this.gmap.has(id)) {
            throw new Error("invalid id");
        }
        ;
    };
    Groups.prototype.add = function (room) {
        var id = 'G' + this._counter++;
        var groupTemplate = {
            id: id,
            room: room,
            pupils: []
        };
        this.gmap.set(id, groupTemplate);
        return id;
    };
    Groups.prototype.addPupil = function (groupId, pupil) {
        this._hasId(groupId);
        var group = this.gmap.get(groupId);
        group.pupils.push(pupil);
        return pupil;
    };
    Groups.prototype.removePupil = function (groupId, pupilId) {
        this._hasId(groupId);
        var group = this.gmap.get(groupId);
        if (group.pupils === undefined) {
            throw new Error('there are no pupils in this group');
        }
        if (group.pupils.filter(function (pupil) { return pupil.id === pupilId; }).length === 0) {
            throw new Error('there is no such pupil in this group');
        }
        var slicedArr = group.pupils.map(function (pupil, index, array) {
            if (pupil.id === pupilId) {
                array.slice(index, index + 1);
            }
        });
        group.pupils = slicedArr;
    };
    Groups.prototype.update = function (id, roomObj) {
        this._hasId(id);
        var group = this.gmap.get(id);
        group.room = roomObj.room;
        return group;
    };
    Groups.prototype.read = function (id) {
        this._hasId(id);
        var group = this.gmap.get(id);
        return __assign({ id: id }, group);
    };
    Groups.prototype.readAll = function () {
        return Array.from(this.gmap);
    };
    return Groups;
}());
exports.Groups = Groups;
