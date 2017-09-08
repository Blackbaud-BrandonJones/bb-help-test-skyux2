import { Component, Input } from '@angular/core';
import { HelpWidgetService } from '@blackbaud/skyux-lib-help';

@Component({
  selector: 'tester-button',
  templateUrl: './tester.component.html'
})
export class TesterComponent {
  @Input()
  private helpKey: string;

  constructor(private helpService: HelpWidgetService) { }

  public publicOnClickMethod() {
    this.helpService.openToHelpKey(this.helpKey);
  }
}
