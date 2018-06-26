# Snippet Library

This folder contains all the reusable functions that can be included in layouts.

## NormalTables.js

This file contains functions to be used with “Normal Tables”, meaning tables where:

1. First row is headers
2. Rest of rows are data 
3. No merged cells (i.e. `colspan`, `rowspan`)

### Available functions:

#### `rpm_table_sortDateColumn(columnTitle, descending, invalidAtBottom)`

Sorts a table by certain column that contains valid date values, example:

```js
var aTableElement = $('MyTable');

// Sort aTableElement by the Modified column ascending
aTableElement.rpm_table_sortDateColumn('Modified', false); 

// Sort aTableElement by the "User Birthday" column descending
aTableElement.rpm_table_sortDateColumn('User Birthday', true);

// Sort aTableElement by the "User Birthday" column descending and leave users without birth day at the bottom of the table
aTableElement.rpm_table_sortDateColumn('User Birthday', true, true);

// Sort aTableElement by the "User Birthday" column descending and leave users without birth day at the top of the table
aTableElement.rpm_table_sortDateColumn('User Birthday', true, false);
```

## FakeTables.js

This file contains functions to use with "Fake Tables", an example of a fake table:

```html
<div class="fake-table">
    <div class="fake-table-row">
        <div class="fake-table-cell fake-table-header">
            A fake header
        </div>
        <div class="fake-table-cell fake-table-header">
            Another fake header
        </div>
    </div>

    <div class="fake-table-row">
        <div class="fake-table-cell">
            A content cell
        </div>
        <div class="fake-table-cell">
            Another content cell
        </div>
    </div>
</div>
```

These tables are used in some layouts to allow certain rows to be shown/hidden via [FieldGroup] directives which are not supported inside normal `<table>` tags.

### Available functions:

#### `rpm_fakeTable_sortDateColumn(columnTitle, descending)`

Works the same as `rpm_table_sortDateColumn`, sorts a table by certain column that contains valid date values.

#### `rpm_fakeTable_removeEmptyTable(removeContainer)`

This function attempts to figure out if a table is empty (only headers) and removes it if it is. The `removeContainer` argument will remove the table's container if the table is empty. This is useful when you want to remove a title that accompanies the table.

For example, if you have this html:

```html
<div class="whatever">
    <h3>The table's title</h3>
    <div class="fake-table"> ... </div>
</div>
```

If you call `table.rpm_fakeTable_removeEmptyTable(false)` then the `<h3>` will be kept.

If you pass true like this `table.rpm_fakeTable_removeEmptyTable(true)`, then the `<div class="whatever">` and all of its content will be removed.
