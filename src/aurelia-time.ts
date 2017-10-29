
import { FrameworkConfiguration , PLATFORM } from "aurelia-framework";


export function configure(config: FrameworkConfiguration) {

   config.globalResources(PLATFORM.moduleName("./humanize-duration-vc"));

}

export * from './humanize-duration-vc';