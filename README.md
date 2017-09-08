# skyux-template
Template for SKY UX applications created by the SKY UX CLI

## Get Started

to run locally
- Clone the project: `$ git clone https://github.com/Blackbaud-BrandonJones/bb-help-test-skyux2.git`
- Install the dependencies: `$ npm install`

  >*NOTE* this project depends on the not yet released `skyux-lib-help` library. To run this project
  you will need to clone, install, and build the library yourself then add it to the `node_modules/@blackbaud` directory.

  - Clone the `skyux-lib-help` project: `$ git clone https://github.com/blackbaud/skyux-lib-help.git`
  - Install the `skyux-lib-help` dependencies: `$ npm install`.
  - Build the `skyux-lib-help` project: `$ npm run build`.
  - Copy the contents of the `skyux-lib-help/dist/` directory to this project's `node_modules/@blackbaud/skyux-lib-help` directory:
    `$ mv skyux-lib-help/dist {path to this project}/node_modules/skyux-lib-help`

- Serve the project `$ skyux serve`

