# Theme Coding Standards

Note: Starting point for some coding standards. Feel free to disagree with any of the standards I've set below.

## General Standards

### Make Your Code Readable

Everyone on the team and any future members should be able to understand, reuse your code seamlessly.

### General Indentation

???

## HTML

### Semantics

Use elements for what they have been created for. `<div>` and `<span>` should only be used if no other element suits the purpose.

### Quotation Marks

When quoting attributes use double quotation marks.

### Images

Make sure `<img>` element has an `alt` attribute which describes the image to the user.

### Separation of Concerns

Keep styling and behavior away from the HTML, HTML should only serve a structural purpose. Styles belong in style sheets and behavior in scripts.

### Lowercase names

Element and attribute names must be in all lower case:

Bad

`<input name="name" TYPE="text" />`

Good

` <input name="name" type="text" /> `


### Nested elements

Nested elements must be nested appropriately - for example:

```
<div>
  <p>Hello World</p>
</div>
```

### Forms

Form field must always include a `<label>` element with a `"for"` attribute matching the `"id"` on the input.

```
<label for="field-email">email</label>
<input 
  type="email" 
  id="field-email" 
  name="email" 
  value="" 
 />
```

### Comments

???

### Attributes

Multiple attributes should be on seperate lines to help readablity. 

Bad

` <input type="email" id="field-email" name="email" value="email"/> `

Good

```
<input 
  type="email" 
  id="field-email" 
  name="email" 
  value="email" 
 />
 ```
 

## CSS

### Formatting

Do not use ID selectors
When using multiple selectors in a rule declaration, give each selector its own line.
Put a space before the opening brace { in rule declarations.
Put closing braces } of rule declarations on a new line.
Put blank lines between rule declarations.

Bad

Good

### JavaScript Hooks

Avoid using the same class in both your CSS and JavaScript. This can cause confusion and negative readability.

Use a `.js-` prefix the ideal pattern would be.

`<button class="btn js-buy-now">Buy Now</button>`

### Nesting

Don't nest selectors more than one level deep.

### Shorthand Properties

Use shorthand properties where possible.

Bad

```
.container {
  margin-top: 16px;
  margin-right: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
}
```

Good

```
.container {
  margin: 16px 8px;
}
```

### Leading 0s

Do not put 0's in front of values between -1 and 1

Bad

`font-size: 0.8em`

Good

`font-size: .8em`

### Declaration Order

???

### Property Name Stops

Use a space after a property name's colon.

Bad

```
h1 {
  font-size:16px;
}

```

Good

```

h1 {
  font-size: 16px;
}

```

### Naming Convention

BEM ?

### Architecture

ITCSS ?

## SASS

### Variables

### Mixins

### Extend

### JavaScript

https://github.com/airbnb/javascript

### Accessibility

### Performance Check List
