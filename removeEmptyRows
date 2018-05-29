<script>
function removeEmptyRows() {
    $$(".field-value").each(function(cell){
    var cellContent = cell.get('text');
    if (cellContent == '') {
    cell.getParent().destroy();
    }
    });
}

function removeEmptyTables() {
    $$('table').each(function(table) {
   var fieldValues = table.getElements('.field-value');
   if (fieldValues.length === 0) {
   return;
   }
var values = fieldValues.reduce(function(previous, td) {
return previous + td.get('text');
}, '');
if (values === '') {
table.getParent().destroy();
}
});
}

removeEmptyTables.delay(3000);
removeEmptyRows.delay(3000);
</script>
