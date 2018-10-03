<script id="rpm_layout_sorting_library">
/*
    Functions for sorting items inside a container
*/
Element.implement({
	rpm_sort_byDate: function(itemsSelector, dateSelector, descending) {
		var items = this.getChildren();
		items.sort(function(i1, i2) {
			var f1 = i1.getElement(dateSelector).get('text');
			var f2 = i2.getElement(dateSelector).get('text');
			
			var f1AsDate = f1.trim().toDate();
			var f2AsDate = f2.trim().toDate();
			
			if (f1AsDate !== null && f1AsDate !== null) {
				if (descending) {
					return f2AsDate- f1AsDate;
				} else {
					return f1AsDate - f2AsDate;
				}
			}
			if (descending) {
				return f2.localeCompare(f1);
			} else {
				return f1.localeCompare(f2);
			}
		});
		this.empty().adopt(items);
	}
});
</script>
