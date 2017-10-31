define(["require", "exports", "aurelia-framework", "./humanize-duration-vc", "./moment-vc", "./moment-timezone-vs"], function (require, exports, aurelia_framework_1, humanize_duration_vc_1, moment_vc_1, moment_timezone_vs_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./humanize-duration-vc"),
            aurelia_framework_1.PLATFORM.moduleName("./moment-vc"),
            aurelia_framework_1.PLATFORM.moduleName("./moment-timezone-vs")
        ]);
    }
    exports.configure = configure;
    __export(humanize_duration_vc_1);
    __export(moment_vc_1);
    __export(moment_timezone_vs_1);
});

//# sourceMappingURL=aurelia-time.js.map
