function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./value-converters/humanize-duration-vc"),
        aurelia_framework_1.PLATFORM.moduleName("./value-converters/moment-vc"),
        aurelia_framework_1.PLATFORM.moduleName("./value-converters/moment-timezone-vs"),
        aurelia_framework_1.PLATFORM.moduleName('./custom-elements/clock')
    ]);
}
exports.configure = configure;
__export(require("./custom-elements/clock"));

//# sourceMappingURL=aurelia-time.js.map
