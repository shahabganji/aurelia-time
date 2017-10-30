Object.defineProperty(exports, "__esModule", { value: true });
var moment = require('jalali-moment');
var RelativeValueConverter = (function () {
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
exports.RelativeValueConverter = RelativeValueConverter;
var DateValueConverter = (function () {
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
exports.DateValueConverter = DateValueConverter;
var AgeValueConverter = (function () {
    function AgeValueConverter() {
    }
    AgeValueConverter.prototype.toView = function (dob) {
        if (!dob)
            return null;
        return Math.floor(moment().diff(moment(dob), 'year', false));
    };
    return AgeValueConverter;
}());
exports.AgeValueConverter = AgeValueConverter;

//# sourceMappingURL=moment-vc.js.map
