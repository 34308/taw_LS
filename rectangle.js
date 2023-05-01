"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = exports.rectangle = void 0;
var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return point;
}());
exports.point = point;
var rectangle = /** @class */ (function () {
    function rectangle(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    rectangle.prototype.move = function (dx, dy, dz, dw) {
        this.x = dx;
        this.y = dy;
        this.z = dz;
        this.w = dw;
    };
    rectangle.prototype.getArea = function () {
        var a = this.calculateDistance(this.x, this.y);
        var b = this.calculateDistance(this.z, this.w);
        return a * b;
    };
    rectangle.prototype.calculateDistance = function (x1, x2) {
        var dx = x2.x - x1.x;
        var dy = x2.y - x1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return rectangle;
}());
exports.rectangle = rectangle;
