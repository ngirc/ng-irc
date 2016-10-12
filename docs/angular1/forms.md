# Forms

Here are compiled some resources and common pitfalls we oftenly give to newcomers and coders implementing forms in their apps.

- [AngularJS Documentation for forms](https://docs.angularjs.org/guide/forms)
- [Directive to automatically show validation errors](https://docs.angularjs.org/api/ngMessages/directive/ngMessages)

## ng-model

> My model is undefined even though I set a value in the field!

ng-model sets the linked scope variable to `undefined` if the field's validation fails (`$invalid === true`).

You can circumvent this behavior by using `ng-model-options="{allowInvalid: true}"`.

## Validation

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