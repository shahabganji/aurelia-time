export declare class RelativeValueConverter {
    toView(value: string, doAsJalali: Boolean): any;
}
export declare class DateValueConverter {
    toView(value: string, format: string, locale?: string): any;
}
export declare class AgeValueConverter {
    toView(dob: string): number;
}
