Fake tables can be used to generate a table when using Field Groups. Using a Field Group in a table normally will result in an error. A Fake Table uses a `div` and `class` to separate headers, rows, and cells. Tables can generate in rows or columns. The CSS will be required for proper formatting of the cells. 

## Example

Create a simple Yes/No field and place it in a field group. If Yes, show addtional fields.

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/83ce439b-162e-4845-85a0-2dab5f081c84)

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/927d9cd5-1b2c-4061-b1e6-b9238dad7fac)

Addtional rows/columns will show as more fields meet the field group requirement. 

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/8efbfbab-9ec9-41d6-8d71-32c13e199222)

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/18121a33-7f51-4cba-8d41-d579e20d7ef7)

Sample for column field group table:

```
<div class="fake-table fake-table-fg-columns">
	<div class="fake-table-row">
		<div class="fake-table-cell-0 fake-table-header">
			
		</div>
		<div class="fake-table-cell-0 fake-table-header">
			Header text
		</div>
		
		[FieldGroup name:"Fake table 2" when:active]
		
		<div class="fake-table-cell-0 fake-table-header">
			Header text 2
		</div>
		[FieldGroup]
		[FieldGroup name:"Fake table 3" when:active]
		<div class="fake-table-cell-0 fake-table-header">
			Header text 3
		</div>
		[FieldGroup]
	</div>	
	<div class="fake-table-row">
		
		<div class="fake-table-cell-0">
			Stuff Row
		</div>
		
		<div class="fake-table-cell-0">
				
			[fake table text]
				
		</div>
		
		[FieldGroup name:"Fake table 2" when:active]
		<div class="fake-table-cell-0">
			[fake table text 2]
		</div>
		[FieldGroup]
		
		[FieldGroup name:"Fake table 3" when:active]
		<div class="fake-table-cell-0">
			[Fake table text 3]
		</div>
		[FieldGroup]
	</div>
</div>
```
Sample for row field groups table:

```
<div class="fake-table">
	<div class="fake-table-row">
		<div class="fake-table-cell fake-table-header">
			Header text
		</div>
		<div class="fake-table-cell fake-table-header">
			Header date 2
		</div>
	</div>
	<div class="fake-table-row">
		<div class="fake-table-cell">
			[fake table text]
		</div>	
		<div class="fake-table-cell">
			 [fake table date]
		</div>
	</div>
	[FieldGroup name:"Fake table 2" when:active]
	<div class="fake-table-row">
		<div class="fake-table-cell">
			[fake table text 2]
		</div>
		<div class="fake-table-cell">
			[fake table date 2]
		</div>
	</div>
	[FieldGroup]
	[FieldGroup name:"Fake table 3" when:active]
	<div class="fake-table-row">
		<div class="fake-table-cell">
			[Fake table text 3]
		</div>
		<div class="fake-table-cell">
			[fake table date 3]
		</div>
	</div>
	[FieldGroup]
</div>
```
