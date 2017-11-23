<script id="rpm_layout_normal_tables_library">
/*
    Functions for working with traditional tables (1st row is headers and the rest is data)
*/
Element.implement({
    rpm_table_checkIsTable: function() {
        var isTable = this.get('tag') === 'table';
        if (!isTable) {
            console.error(this, 'is not a table');
        }
        return isTable;
    },
    rpm_table_findColumnByTitle: function(columnTitle) {
        if (!this.rpm_table_checkIsTable()) {
            return false;
        }
        var headers = this.getElements('th');
        if (headers.length === 0) {
            headers = this.getElements('tr').pop().getElements('td');
        }
        headers = headers.map(function(td) {
            return td.get('text').trim();
        });
        return headers.indexOf(columnTitle);
    },
    rpm_table_getDataRows: function() {
        if (!this.rpm_table_checkIsTable()) {
            return false;
        }
        var rows = this.getElements('tr');
        rows.shift();
        return rows;
    },
    // Should not need to use directly, see other rpm_table_sort* function
    rpm_table_sortGeneric: function(columnTitle, descending, sortFunction) {
        var columnIndex = this.rpm_table_findColumnByTitle(columnTitle);
        var rows = this.rpm_table_getDataRows();
        rows = rows.sort(function(row1, row2) {
            var cell1Value = row1.getElements('td')[columnIndex].get('text').trim();
            var cell2Value = row2.getElements('td')[columnIndex].get('text').trim();
            return sortFunction(cell1Value, cell2Value);
        }, this);
        if (descending) {
            rows = rows.reverse();
        }
        this.adopt(rows);
    },
    rpm_table_sortDateColumn: function(columnTitle, descending) {
        this.rpm_table_sortGeneric(columnTitle, descending, 
            function(cell1Value, cell2Value) {
                var cell1DateValue = cell1Value.rpm_string_toDate();
                var cell2DateValue = cell2Value.rpm_string_toDate();
                if (cell1DateValue !== null && cell2DateValue !== null) {
                    return cell1DateValue - cell2DateValue;
                }
                return cell1Value.localeCompare(cell2Value);
            }
        );
    }
});

String.implement({
    rpm_string_toDate: function(){
        var dateValue = this.toDate();
        return dateValue;
    }
});
</script>