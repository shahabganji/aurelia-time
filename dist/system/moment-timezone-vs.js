System.register(["aurelia-binding"], function (exports_1, context_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_binding_1, moment, TimezoneValueConverter;
    return {
        setters: [
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            moment = require('moment-timezone');
            TimezoneValueConverter = (function () {
                function TimezoneValueConverter() {
                }
                TimezoneValueConverter.prototype.toView = function (value, timezone) {
                    if (!value || !timezone)
                        return;
                    return moment(value).tz(timezone).format('ha z');
                };
                TimezoneValueConverter = __decorate([
                    aurelia_binding_1.valueConverter("timezone")
                ], TimezoneValueConverter);
                return TimezoneValueConverter;
            }());
            exports_1("TimezoneValueConverter", TimezoneValueConverter);
        }
    };
});

//# sourceMappingURL=moment-timezone-vs.js.map
