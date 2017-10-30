System.register([], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    var moment, RelativeValueConverter, DateValueConverter, AgeValueConverter;
    return {
        setters: [],
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
                return RelativeValueConverter;
            }());
            exports_1("RelativeValueConverter", RelativeValueConverter);
            DateValueConverter = (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (value, format, locale) {
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
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
            AgeValueConverter = (function () {
                function AgeValueConverter() {
                }
                AgeValueConverter.prototype.toView = function (dob) {
                    if (!dob)
                        return null;
                    return Math.floor(moment().diff(moment(dob), 'year', false));
                };
                return AgeValueConverter;
            }());
            exports_1("AgeValueConverter", AgeValueConverter);
        }
    };
});

//# sourceMappingURL=moment-vc.js.map
