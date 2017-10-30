

var moment = require('jalali-moment');

export class RelativeValueConverter {
    toView(value: string, doAsJalali: Boolean) {

        if (!value) {
            return null;
        }

        if (doAsJalali === true) {
            let m = moment(value);
            m.doAsJalali(doAsJalali);
            let result = m.fromNow();
            m.doAsGregorian();
            return result;
        }

        return moment(value).fromNow();
    }
}

export class DateValueConverter {
    toView(value: string, format: string, locale: string = "en") {
        if (!value)
            return null;

        if( locale === "fa" ){
            let m =moment(value);
            m.doAsJalali(true);
            m.loadPersian();
            let result = m.format(format);
            m.doAsGregorian();
            return result;
        }

        let m2 = moment(value).locale(locale);
        return m2.format(format);
    }
}

export class AgeValueConverter {
    toView(dob:string) {
        if (!dob)
            return null;
        return Math.floor(moment().diff(moment(dob), 'year', false));
    }
}
