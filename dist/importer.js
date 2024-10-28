"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importSeed = void 0;
var tslib_1 = require("tslib");
var importSeed = function (filePath) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var seedFileObject, keys;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve("".concat(filePath)).then(function (s) { return require(s); })];
            case 1:
                seedFileObject = _a.sent();
                keys = Object.keys(seedFileObject);
                return [2 /*return*/, seedFileObject[keys[0]]];
        }
    });
}); };
exports.importSeed = importSeed;
//# sourceMappingURL=importer.js.map