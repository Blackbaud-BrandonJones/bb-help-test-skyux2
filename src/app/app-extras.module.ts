import { NgModule } from '@angular/core';

import { BBHelpModule, BBHelpClientService } from '../mock_node_modules/bb-help';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    BBHelpModule
  ],
  exports: [
    BBHelpModule
  ],
  providers: [
    BBHelpClientService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
