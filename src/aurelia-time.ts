
import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";


export function configure(config: FrameworkConfiguration) {

    config.globalResources([
        PLATFORM.moduleName("./humanize-duration-vc"),
        PLATFORM.moduleName("./moment-vc") , 
        PLATFORM.moduleName("./moment-timezone-vs")
    ]);
    
}

export * from './humanize-duration-vc';
export * from './moment-vc';
export * from './moment-timezone-vs';