# react-truncate-text
A React component that makes dynamically truncating text stupid simple. Pass in the number of lines you would like to render, and the component will take care of the rest. The component will take into account any currently applied styles when rendering.

```
  import TruncateText from 'react-truncate-text'

  <TruncateText as="h1" className="my-shortend-text" lines={3}>
    Some really long text...
  </TruncateText>
```

### Examples
To start up the basic example:
```
  $ cd examples
  $ npm install
  $ npm run start
```

#### Available `props`:
##### `as`
(optional) The element type to render the text as. Defaults to a `span` tag if none is provided.
##### `className`
(optional) A css class name.
##### `lines`
(optional) The number of lines the text will truncate to. Defaults to a `1` if none is provided.

### In the works:
 - Support HTML/React elements within the `TruncateText` component
   - Explanation on techniques used
 - Tests
 - Build process improvements
 - Readme cleanup


Copyright 2019 &copy; Trevor Lang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://opensource.org/licenses/MIT
