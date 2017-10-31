import { valueConverter } from 'aurelia-binding';

import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";


export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName("./value-converters/humanize-duration-vc"),
    PLATFORM.moduleName("./value-converters/moment-vc"),
    PLATFORM.moduleName("./value-converters/moment-timezone-vs"),

    PLATFORM.moduleName('./custom-elements/clock')
  ]);

}

export * from './custom-elements/clock'
