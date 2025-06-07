# Yamato Daiwa Handlebars Extensions

Some [helpers](https://handlebarsjs.com/guide/#custom-helpers) for the [Handlebars template engine](https://handlebarsjs.com/guide/).


## Installation

```
npm i @yamato-daiwa/handlebars-extensions -E
```


## Usage 

Each helper function of this package has been wrapped by the object.
Most of these objects has single key/value pair where the key is the name of the helper function and the
  value is the helper function itself.
For example, `areStringsEqual` helper function has been wrapped to `AreStringsEqualHandlebarsHelper` object,
  where the `areStringsEqual` is the key.
To register the helpers such this one, use the spread operator:

```js
import { create as initializeHandlebarsTemplateEngine } from "express-handlebars";
import { 
  AreStringsEqualHandlebarsHelper,
  IsEmptyObjectHandlebarsHelper,
  IsNonEmptyObjectHandlebarsHelper
} from "@yamato-daiwa/handlebars-extensions";

const handlebarsTemplateEngine = initializeHandlebarsTemplateEngine({
  helpers: {
    ...AreStringsEqualHandlebarsHelper,
    ...IsEmptyObjectHandlebarsHelper,
    ...IsNonEmptyObjectHandlebarsHelper
  }
});
```

### Why it is impossible to export just the function itself without object wrapper?

Because if to export, for example, the `areStringsEquals` as 

```js
export { areStringsEquals } from "@yamato-daiwa/handlebars-extensions"
```

it is unclear outside the Handlebars files that `areStringsEquals` is the helper function indented to be used in the 
  Handlebars, not the common function which could be safely used in normal TypeScript/JavaScript.


## Functionality
### Arrays
#### `IsEmptyArrayHandlebarsHelper` / `isEmptyArray`

```handlebars
{{#isEmptyArray items}}

  <p>Out of stock</p>
    
{{/isEmptyArray}}
```

#### `IsNonEmptyArrayHandlebarsHelper` / `isNonEmptyArray`

```handlebars
{{#ifGreaterThan x 0}}
  <!-- Content to display if x < 0 -->
{{else}}
  <!-- Content to display if x >= 0 -->
{{/ifGreaterThan}}
```


### Conditionals
#### `SwitchCaseHandlebarsHelpers` / `switch` / `case`

```handlebars
{{#switch dayOfWeekNumber__numerationFrom0AsSunday}}
    {{#case 0}}Sunday{{/case}}
    {{#case 1}}Monday{{/case}}
    {{#case 2}}Tuesday{{/case}}
    {{#case 3}}Wednesday{{/case}}
    {{#case 4}}Thursday{{/case}}
    {{#case 5}}Friday{{/case}}
    {{#case 6}}Saturday{{/case}}
{{/switch}}
```


### Nullables
#### `SubstituteNullHandlebarsHelper` / "substituteNull"

```handlebars
<div>{{ substituteNull nullable "Unknown"}}</div>
```


#### `SubstituteUndefinedHandlebarsHelper` / "substituteWhenUndefined"

```handlebars
<div>{{ substituteUndefined undefindable "Unknown"}}</div>
```


### Numbers
#### `IncrementBy1HandlebarsHelper` / `incrementBy1`

```handlebars

<table>
    
  <thead>
    <tr>
        <th>No.</th>
        <th>Full Name</th>
    </tr>
  </thead>
    
  <tbody>
    <tr>
      {{#each people}}
        <td>{{incrementBy1 @index}}</td>
        <td>{{this}}</td>
      {{/each}}
    </tr>
  </tbody>
    
</table>
```


#### `IsGreaterThanHandlebarsHelper` / `isGreaterThan`

```handlebars
{{#ifGreaterThan x 0}}
  <!-- Content to display if x > 0 -->
{{else}}
  <!-- Content to display if x <= 0 -->
{{/ifGreaterThan}}
```


#### `IsSmallerThanHandlebarsHelper` / `isSmallerThan`

```handlebars
{{#isSmallerThan x 0}}
  <!-- Content to display if x < 0 -->
{{else}}
  <!-- Content to display if x >= 0 -->
{{/isSmallerThan}}
```


### Objects
#### `IsEmptyObjectHandlebarsHelper` / `isEmptyObject`

```handlebars
{{#isEmptyObject socialNetworkProfilesURIs}}

  <p>No social networks profiles registered</p>
    
{{/isEmptyObject}}
```

#### `IsNonEmptyObjectHandlebarsHelper` / `isNonEmptyObject`

```handlebars
<dl>
    
  <dt>Full Name</dt>
  <dd>{{ fullName }}</dd>
    
  {{#isNonEmptyObject socialNetworkProfilesURIs}}
    <dt>Social networks</dt>
    <dd>
      <ul>
           
        {{#each socialNetworkProfilesURIs}}
           
          <li>
              
            {{#areStringsEqual @key "facebook"}}
              <a href="{{ this }}">
                <svg>
                  <!-- The SVG code of teh Facebook icon ... -->
                </svg>
              </a>
            {{/areStringsEqual}}
                 
            {{#areStringsEqual @key "instagram"}}
             <a href="{{ this }}">
              <svg>
                <!-- The SVG code of teh Instagram icon ...-->
              </svg>
             </a>
            {{/areStringsEqual}}
              
            {{#areStringsEqual @key "twitter"}}
              <a href="{{ this }}">
                <svg>
                  <!-- The SVG code of teh Twitter icon ...-->
                </svg>
              </a>
            {{/areStringsEqual}}
              
          </li>
        
        {{/each}}
          
      </ul>
        
    </dd>
  {{/isNonEmptyObject}}
    
</dl>
```

#### `ToJSON_HandlebarsHelper` / `toJSON`

```handlebars
<div data-user="{{{ toJSON user }}}"></div>
```


### Strings
#### `AreStringsEqualHandlebarsHelper` / `areStringsEqual`

```handlebars
{{#areStringsEqual familyName givenName}}

  <p>The family name is even with given name?!</p>
    
{{/areStringsEqual}}
```
