import { customElement, bindable, bindingMode, useShadowDOM } from "aurelia-framework";

@customElement('au-clock')
export class ClockCustomElement {

  // Private fields: 
  private value: Date;
  private timer: any;
  /*  ************************************************* */

  /* One Time bindings */
  @bindable({ defaultBindingMode: bindingMode.oneTime }) text: string = "Aurelia is awesome";
  @bindable({ defaultBindingMode: bindingMode.oneTime }) color: string = '#753B85';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) shadowColor: string = "#C8167A";
  @bindable({ defaultBindingMode: bindingMode.oneTime }) fontSize: string = "40";
  /* ************************************************************************* */

  /** One way bindings */
  @bindable({ defaultBindingMode: bindingMode.oneWay }) locale: string = "en";
  @bindable({ defaultBindingMode: bindingMode.oneWay }) dateFormat: string = "YYYY/MM/DD";
  @bindable({ defaultBindingMode: bindingMode.oneWay }) be24Hours: string | boolean = true;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) showText: string | boolean = true;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) showDate: string | boolean = true;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) showTime: string | boolean = true;

  /* ************************************************************************* */


  attached() {

    this.value = new Date();
    let self = this;

    return new Promise(resolve => {

      this.timer = setInterval(() => {
        self.value = new Date();
        console.log(self.value);
      }, 1000);

      resolve();

    });
  }

  detached() {
    clearTimeout(this.timer);
  }

  // zeroPadding(num: number, digit: number) {
  //   var zero = '';
  //   for (var i = 0; i < digit; i++) {
  //     zero += '0';
  //   }
  //   return (zero + num).slice(-digit);

  // }

}
