System.register(["aurelia-framework"], function (exports_1, context_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, moment, RelativeValueConverter, DateValueConverter, TimeConverter, AgeValueConverter;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            moment = require('jalali-moment');
            RelativeValueConverter = (function () {
                function RelativeValueConverter() {
                }
                RelativeValueConverter.prototype.toView = function (value, doAsJalali) {
                    if (!value) {
                        return null;
                    }
                    if (doAsJalali === true) {
                        var m = moment(value);
                        m.doAsJalali(doAsJalali);
                        var result = m.fromNow();
                        m.doAsGregorian();
                        return result;
                    }
                    return moment(value).fromNow();
                };
                RelativeValueConverter = __decorate([
                    aurelia_framework_1.valueConverter("relative")
                ], RelativeValueConverter);
                return RelativeValueConverter;
            }());
            exports_1("RelativeValueConverter", RelativeValueConverter);
            DateValueConverter = (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (value, format, locale) {
                    if (format === void 0) { format = "YYYY/MM/DD"; }
                    if (locale === void 0) { locale = "en"; }
                    if (!value)
                        return null;
                    if (locale === "fa") {
                        var m = moment(value);
                        m.doAsJalali(true);
                        m.loadPersian();
                        var result = m.format(format);
                        m.doAsGregorian();
                        return result;
                    }
                    var m2 = moment(value).locale(locale);
                    return m2.format(format);
                };
                DateValueConverter = __decorate([
                    aurelia_framework_1.valueConverter("date")
                ], DateValueConverter);
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
            TimeConverter = (function () {
                function TimeConverter() {
                }
                TimeConverter.prototype.toView = function (value, show24Hours) {
                    if (show24Hours === void 0) { show24Hours = true; }
                    if (!value)
                        return null;
                    var format = show24Hours === true || show24Hours === "true" ? "HH:mm:ss" : "hh:mm:ss a";
                    console.log("time format is: " + format);
                    return moment(value).format(format);
                };
                TimeConverter = __decorate([
                    aurelia_framework_1.valueConverter("time")
                ], TimeConverter);
                return TimeConverter;
            }());
            exports_1("TimeConverter", TimeConverter);
            AgeValueConverter = (function () {
                function AgeValueConverter() {
                }
                AgeValueConverter.prototype.toView = function (dob) {
                    if (!dob)
                        return null;
                    return Math.floor(moment().diff(moment(dob), 'year', false));
                };
                AgeValueConverter = __decorate([
                    aurelia_framework_1.valueConverter("age")
                ], AgeValueConverter);
                return AgeValueConverter;
            }());
            exports_1("AgeValueConverter", AgeValueConverter);
        }
    };
});

//# sourceMappingURL=moment-vc.js.map
