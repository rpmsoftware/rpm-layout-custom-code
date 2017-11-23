# Snippet Library

This folder contains all the reusable functions that can be included in layouts.

## NormalTables.js

This file contains functions to be used with “Normal Tables”, meaning tables where:

1. First row is headers
2. Rest of rows are data 
3. No merged cells (i.e. `colspan`, `rowspan`)

Available functions:

### `rpm_table_sortDateColumn(columnTitle, descending)`

Sorts a table by certain column that contains valid date values, example:

```js
var aTableElement = $('MyTable');

// Sort aTableElement by the Modified column ascending
aTableElement.rpm_table_sortDateColumn('Modified', false); 

// Sort aTableElement by the "User Birthday" column descending
aTableElement.rpm_table_sortDateColumn('User Birthday', true);
```