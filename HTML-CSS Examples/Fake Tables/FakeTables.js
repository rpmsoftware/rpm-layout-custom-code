<script id="rpm_layout_fake_tables_library">
/*
    Functions for working with fake tables (divs using the fake-table class and similar)
*/
Element.implement({
    rpm_fakeTable_checkIsTable: function() {
        var isTable = this.get('tag') === 'div' && this.hasClass('fake-table');
        if (!isTable) {
            console.error(this, 'is not a table');
        }
        return isTable;
    },
    rpm_fakeTable_findColumnByTitle: function(columnTitle) {
        if (!this.rpm_fakeTable_checkIsTable()) {
            return false;
        }
        var headers = this.getElements('.fake-table-header');
        if (headers.length === 0) {
            headers = this.getElements('.fake-table-row').pop().getElements('.fake-table-cell');
        }
        headers = headers.map(function(td) {
            return td.get('text').trim();
        });
        return headers.indexOf(columnTitle);
    },
    rpm_fakeTable_getDataRows: function() {
        if (!this.rpm_fakeTable_checkIsTable()) {
            return false;
        }
        var rows = this.getElements('.fake-table-row');
        if (!this.hasClass('fake-table-no-headers')) {
    		rows.shift();
    	}
        return rows;
    },
    // Should not need to use directly, see other rpm_fakeTable_sort* function
    rpm_fakeTable_sortGeneric: function(columnTitle, descending, sortFunction) {
        var columnIndex = this.rpm_fakeTable_findColumnByTitle(columnTitle);
        var rows = this.rpm_fakeTable_getDataRows();
        rows = rows.sort(function(row1, row2) {
            var cell1Value = row1.getElements('.fake-table-cell')[columnIndex].get('text').trim();
            var cell2Value = row2.getElements('.fake-table-cell')[columnIndex].get('text').trim();
            return sortFunction(cell1Value, cell2Value);
        }, this);
        if (descending) {
            rows = rows.reverse();
        }
        this.adopt(rows);
    },
    rpm_fakeTable_sortDateColumn: function(columnTitle, descending) {
        this.rpm_fakeTable_sortGeneric(columnTitle, descending, 
            function(cell1Value, cell2Value) {
                var cell1DateValue = cell1Value.rpm_string_toDate();
                var cell2DateValue = cell2Value.rpm_string_toDate();
                if (cell1DateValue !== null && cell2DateValue !== null) {
                    return cell1DateValue - cell2DateValue;
                }
                return cell1Value.localeCompare(cell2Value);
            }
        );
    },
    
    rpm_fakeTable_removeEmptyTable: function(removeContainer) {
        var rows = this.rpm_fakeTable_getDataRows();
        if (rows.length > 0) {
            return;
        }
        if (removeContainer) {
            this.getParent().destroy();
        } else {
            this.destroy();
        }
        
    }
});

</script>
