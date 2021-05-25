import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {


  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }
  @Input() set appMydirective(player: any){
    this.container.clear();
    if(player){
      this.container.createEmbeddedView(this.template)
    }
  }

}
