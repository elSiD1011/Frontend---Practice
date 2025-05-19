#  Using the DOM API

DOM stands for Document Object Model. It is an object-oriented representation of structured documents like XML and HTML.

Setting the `textContent` property of an Element is one way to output text on a web page.

For example, consider the following HTML tag:
```html
<p id="paragraph"></p>
```

To change its textContent property, we can run the following JavaScript:
```javascript
document.getElementById("paragraph").textContent = "Hello, World";
```

This will select the element with the id `paragraph` and set its text content to "Hello, World":
```html
<p id="paragraph">Hello, World</p>
```
(See also this demo)

## Creating HTML Elements

You can also use JavaScript to create a new HTML element programmatically. For example, consider an HTML document with the following body:
```html
<body>
 <h1>Adding an element</h1>
</body>
```

In our JavaScript, we create a new `<p>` tag with a textContent property and add it at the end of the html body:
```javascript
var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element); // add the newly created element to the DOM
```

That will change your HTML body to the following:
```html
<body>
 <h1>Adding an element</h1>
 <p>Hello, World</p>
</body>
```
## Key Takeaways
- The DOM is an object-oriented representation of structured documents like XML and HTML.
- The `textContent` property of an Element is one way to output text on a web page.
- You can create new HTML elements programmatically using JavaScript.
- You can add new elements to the DOM using the `appendChild` method.
