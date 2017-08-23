import { Component, Input } from '@angular/core';
import { BBHelpClientService } from '../../mock_node_modules/bb-help';

@Component({
  selector: 'tester-button',
  templateUrl: './tester.component.html'
})
export class TesterComponent {
  @Input()
  private helpKey: string;

  constructor(private helpService: BBHelpClientService) { }

  public publicOnClickMethod() {
    this.helpService.openWidgetToHelpKey(this.helpKey);
  }
}
