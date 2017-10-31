export declare class ClockCustomElement {
    private value;
    private timer;
    text: string;
    color: string;
    shadowColor: string;
    fontSize: string;
    locale: string;
    dateFormat: string;
    be24Hours: string | boolean;
    attached(): Promise<{}>;
    detached(): void;
}