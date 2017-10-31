import { valueConverter } from 'aurelia-binding';

import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";


export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName("./value-converters/humanize-duration-vc"),
    PLATFORM.moduleName("./value-converters/moment-vc"),
    PLATFORM.moduleName("./value-converters/moment-timezone-vs"),

    PLATFORM.moduleName('./custom-elements/clock-digital')
  ]);

}

// export * from './value-converters/humanize-duration-vc';
// export * from './value-converters/moment-vc';
// export * from './value-converters/moment-timezone-vs';
export * from './custom-elements/clock-digital'
