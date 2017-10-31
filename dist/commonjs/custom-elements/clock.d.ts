export declare class ClockCustomElement {
    private value;
    private timer;
    text: string;
    color: string;
    shadowColor: string;
    fontSize: string | number;
    locale: string;
    dateFormat: string;
    be24Hours: string | boolean;
    showText: string | boolean;
    showDate: string | boolean;
    showTime: string | boolean;
    attached(): Promise<{}>;
    detached(): void;
}
