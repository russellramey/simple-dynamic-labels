## Synopsis

Dynamic in-field labels for forms. Simple lightweight using CSS and jQuery. Backwards compatible, for degrads to default layout of input field with a label if no javascript is loaded or browser doesn't have javascript enabled.

## Markup

1) Create a form with a class `.sdl-form`:
```html
<form class="sdl-form">
	-- form content will go here --
</div>
```

2) Create a wrapper for each label and input:
```html
<p>
    <label for="name" class="sdl-label">Full name</label>
    <input type="text" name="name" class="required" />
</p>
```

3) Give the `label` a class of `.sdl-label`.

4) Inlude CSS provide, or edit to your liking.


# JS

1) Include the Javascript funciton after your jQuery call

2) Enable the function in you projects JS:
```javascript
$('.sdl-form').simple_dynamic_labels();
```

## Demo
See the basic functionality [here](http://russellramey.me/examples/simple-dynamic-labels), 