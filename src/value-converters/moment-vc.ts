import { valueConverter } from 'aurelia-framework';

var moment = require('jalali-moment');


@valueConverter("relative")
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

@valueConverter("date")
export class DateValueConverter {
  toView(value: string, format: string = "YYYY/MM/DD", locale: string = "en") {
    if (!value)
      return null;

    if (locale === "fa") {
      let m = moment(value);
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

@valueConverter("time")
export class TimeConverter {
  toView(value: string, show24Hours: string | boolean = true) {
    if (!value)
      return null;

    let format = show24Hours === true || show24Hours === "true" ? "HH:mm:ss" : "hh:mm:ss a";

    return moment(value).format(format);
  }
}

@valueConverter("age")
export class AgeValueConverter {
  toView(dob: string) {
    if (!dob)
      return null;
    return Math.floor(moment().diff(moment(dob), 'year', false));
  }
}
