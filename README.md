# skyux-template
Template for SKY UX applications created by the SKY UX CLI


## Get Started

to run locally
- `clone the project`
- `npm install`
- update the import link for `help-client` in the
`node_modules/@blackbaud/skyux-builder/src/app/app.component.ts` file to use
`import { BBHelpClient } from '../../../../../src/mock_node_modules/help-client';`
- Update all references to `BBHelp` in this file to use `BBHelpClient`.

- `skyux serve`
