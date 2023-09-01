<span class="only-time">[Time 'all clear given':]</span>

//Add the following script to the bottom of your layout.

<script>
	$$('body').addEvent('RpmLayoutRendered', function() {
    	$$('.only-time').each(function(el) {
    		var date = el.get('text').toDate();
    		if (date === null) {
    			return;
    		}
    		el.set('text', date.getNiceTime());
    	});
	});
</script>
