import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleCollapse]'
})
export class ToggleCollapseDirective {
  @HostBinding('class.collapse') isCollapsed=false
  constructor(private el:ElementRef) { }

}
