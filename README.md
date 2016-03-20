## make-tables-responsve
jQuery plugin that can be used to add a mobile version of wide data tables. Great for adding to pages that have existing wide tables.
Doesn't require any markup changes. 
## Usage Examples
```html
<table>
    <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Sex</th>
       <th>Eye Color</th>
       <th>Address</th>
       <th>Phone Number</th>
    </tr>
    <tr>
       <th>Conner</th>
       <th>26</th>
       <th>Male</th>
       <th>Blue</th>
       <th>123 N Hall St</th>
       <th>555-1234</th>
    </tr>
</table>
```
```Javascript
$('table').makeTableResponsive();
```
By Default the first row with more than one column is set as the header row and any rows above is added to the moblie version above
the header row. The Default breakpoint is `500px`. You can also set the header row and the breakpoint. Row numbers are zero based.
```Javascript
$('.wide-tables').makeTableResponsive({"breakpoint":"700px","headingRow":1});
```
