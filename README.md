# FirstSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

First Commit
============
<pre>
Added a property hero in AppComponent
Added a Hero class
Created multi-line Template and learned interpolation binding syntax- double curly braces {{}}
Learned two way binding using [(ngModel)] (form)
</pre>

Second Commit
=============
<pre>
Created HERO array
Learned how type is understood from <code>Typescript</code>
*ngFor - Master Template
Event binding on template
Structural build in directive ngIf
[class] binding
</pre>
Third Commit
============
<pre>
File naming and class naming in Angular
Input Properties in Attribute Directives
Declaring required application directive in NgModule
Bind parent component to child component
</pre>

Fourth Commit
=============
- How to write a service 
- Service file name should be name1-name2.service.ts
- Import Angular Injectable function and apply the function as @Injectable() decorator
- @Injectable decorator tells Typescript to emit meta data about the service. Metadata mention Angular need to inject dependencies into service
- Inject Service without new keyword
- new Keyword will create a new service each time
- Inject Service using constructor method with private property and components provider metadata
- Angular oninit Lifecycle hook (interface which needs to be implement)
- Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
