function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./humanize-duration-vc"),
        aurelia_framework_1.PLATFORM.moduleName("./moment-vc")
    ]);
}
exports.configure = configure;
__export(require("./humanize-duration-vc"));
__export(require("./moment-vc"));

//# sourceMappingURL=aurelia-time.js.map
