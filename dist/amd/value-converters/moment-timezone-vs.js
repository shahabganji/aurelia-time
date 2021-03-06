var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var moment = require('moment-timezone');
    var TimezoneValueConverter = (function () {
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
    exports.TimezoneValueConverter = TimezoneValueConverter;
});

//# sourceMappingURL=moment-timezone-vs.js.map
