import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColordirective]'
})
export class ColordirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input('appColordirective') set selectedTeam(teams: { conference: string; }) {
    if (teams.conference === 'East') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    }
  }

}
