define(["require", "exports", "aurelia-framework", "./custom-elements/clock"], function (require, exports, aurelia_framework_1, clock_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/humanize-duration-vc"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/moment-vc"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/moment-timezone-vs"),
            aurelia_framework_1.PLATFORM.moduleName('./custom-elements/clock')
        ]);
    }
    exports.configure = configure;
    __export(clock_1);
});

//# sourceMappingURL=aurelia-time.js.map
