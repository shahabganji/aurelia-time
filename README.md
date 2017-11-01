
# aurelia-time


This package contains a set of value converters for date and time inspired by four existing libraries which are widely used amongst developers.

* [momentjs](https://github.com/moment/moment)
* [jalali-moment](https://github.com/fingerpich/jalali-moment)
* [moment-timezone](https://github.com/moment/moment-timezone)
* [humanizeDuration](https://github.com/EvanHahn/HumanizeDuration.js)

***The documentation is targeted for the webpack as it is the most favorite module bundler, for other module loaders follow their instructions***

*We used jalali moment to support **Persian/Jalali** calendar*

# Installation

1. install the package 
```
npm install aurelia-time --save

yarn add aurelia-time
```

2. register it as a plugin in the aurelia pipeline

```
    aurelia.use.standardConfiguration()
        .plugin(PLATFORM.moduleName('aurelia-time'));
```

# Value converters

## *1. Moment:* consists of four value converters : 
```
  * date( value:string, format:string, locale:string )
  * time( value:string, show24Hours:string|boolean )
  * age( value:string )
  * relative( value:string , doAsJalali: boolean )
```

``` typescript
export class Home {

    languages: Array<any>;

    options: any;

    myDate: string = "1985/01/23";
    myFormat: string = "YYYY/MM/DD MMMM";

    constructor() {
        this.options = {
            locale: "fa" // This line will force value converters to use jalali-moment,locales/languages other than Farsi/Persian such as 'en', 'it', 'fr' etc. will use moment library.
        };
    }
}
```

*Worth to mention than we will use jalali-moment only for **Persian/Farsi** locale/language, languages other than that will use moment library.*

**For persian users only:** *if you use 'fa' locale, you don't need to pass format as j-formats ( jYYYY/jMM/jDD ) to jalali-moment any more, just use like other locals.*

``` html
<label>
    Date: 
    <input type="datetime" value.bind="myDate" />
</label>
<label>
    Format:
    <input type="text" value.bind="myFormat" />
</label>
<h1 style="direction:ltr">
    <span>
        ${myDate|date:myFormat:options.locale}
    </span>

    <span>
        ${myDate|time:false:options.locale}
    </span>

</h1>
```

## *2. Moment Timezone*

``` typescript
export class Home {

    private selectedTimezone;
    private timezones:Array<string>;

    constructor(){
        this.timezones = [
                    "Asia/Tehran",
                    "Asia/Tokyo",
                    "Europe/London",
                    'America/Los_Angeles'
                ];
    }
}
```

``` html
 <label>
    Timezone:
    <select value.bind="selectedTimezone">
        <option repeat.for="tz of timezones" value.bind="tz">
            ${tz}
        </option>
    </select>
</label>

<br />

<label textcontent.bind="myDate|timezone:selectedTimezone">
</label>
```


## 3. Humanize Duration


``` html
<span>
    ${361000 |humanize:{language:options.locale}}
</span>
```

# Custom Elements

## 1. *Clock*

Inspired by [Codepen](https://codepen.io/gau/pen/LjQwGp)

``` html
 <au-clock font-size="40" be24-hours="false" date-format="YYYY MMMM DD" locale="fa"
     style="left: 300px; top:200px; position: absolute">
</au-clock>

```
This custom element consists of four ***one-time*** bindable properties: 

* text: string
* color: string
* shadowColor: string
* fontSize: string | number

and six ***one-way*** bindable properties:

* locale: string
* dateFormat: string
* be24Hours: string | boolean
* showDate: string | boolean
* showTime: string | boolean
* showText: string | boolean



## **Any contribution will be welcome**
