
import { valueConverter } from 'aurelia-binding';

const humanizeDuration = require("humanize-duration");

@valueConverter("humanize")
export class HumanizeValueConverter {

    
    toView(value: number, options): string {

        return humanizeDuration(value, options)
        
    }
}
