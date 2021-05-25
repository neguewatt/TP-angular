import {Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[conference]',
})
export class ConferenceDirective {
  @Input('conference') set selectedTeam(team) {
    if (team.conference === 'West') {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
