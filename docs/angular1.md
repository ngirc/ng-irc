## Resources and links

- [Code Style Guide by John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
- [Angular 1.x styleguide (ES2015)](https://github.com/toddmotto/angularjs-styleguide)
- [Code Style Guide by Minko Gechev](https://github.com/mgechev/angularjs-style-guide)
- [Code Style Guide by Angular UI](https://github.com/angular-ui/AngularJS-StyleGuide)
- [Comprehensive dive into Angular 1.5 lifecycle hooks](https://toddmotto.com/angular-1-5-lifecycle-hooks)
- [How to share data between controllers, example 1](http://plnkr.co/edit/TGlYHILp3kY8XD3U12xm?p=preview)
- [How to share data between controllers, example 2](http://plnkr.co/edit/41xY057yPIuKgBEyq0hW?p=preview)
- [Two way data binding pitfalls](http://plnkr.co/edit/7anGLMoJZgMkJFX9d9IA?p=preview)
- [Emitter vs. Promise pattern](http://plnkr.co/edit/YEdUxkWPRwLCCfygFlnI?p=preview)
- [One-way dataflow in components](http://plnkr.co/edit/hsmQV2j8tHs1ANYed1pS?p=preview)
- [A Brief Walk-through of the Ng-options in AngularJS](https://www.undefinednull.com/2014/08/11/a-brief-walk-through-of-the-ng-options-in-angularjs/)
- [$q.defer: You're doing it wrong](http://www.codelord.net/2015/09/24/$q-dot-defer-youre-doing-it-wrong/)
- [Full-Spectrum Testing with AngularJS and Karma](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html)
- [Angular .service() or .factory(), the actual answer](https://toddmotto.com/factory-versus-service)
- [Service vs Factory - Once and for all](http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html)
- [AngularJS: Service vs provider vs factory](http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory)

## Forms

- [AngularJS Documentation for forms](https://docs.angularjs.org/guide/forms)
- [Directive to automatically show validation errors](https://docs.angularjs.org/api/ngMessages/directive/ngMessages)

#### ng-model

> My model is undefined even though I set a value in the field!

ng-model sets the linked scope variable to `undefined` if the field's validation fails (`$invalid === true`).

You can circumvent this behavior by using `ng-model-options="{allowInvalid: true}"`.

#### Validation

> The `<div ng-messages>` element always shows up, how can I hide it if there are no errors?

```html
<div ng-messages="myForm.myField.$error" ng-if="myForm.myField.$invalid"></div>
```

> How can I only show an element once the user left the field / tried to submit the form?

```html
<div ng-if="myForm.myField.$dirty"></div> <!-- Will only show up after the field has been focused -->
<div ng-if="myForm.myField.$touched"></div> <!-- Will only show up after the field has been focused then unfocused -->
<div ng-if="myForm.$submitted"></div> <!-- Will only show up after the user tried to submit the form -->
```