The following CSS code will allow you to adjust the columns generated in a table field. Some of the sample CSS code will require the HTML wrapped in a `class`. 

## Examples
___

Setting the width of a table column to the specified value. If the data in the cell exceeds the set width, the set width will be ignored. `table-layout:auto` will fill in what is not defined. Changing the `nth-child()` value will choose the column.

```
.parameters .TableBuilder--table {
table-layout:auto;
}

.parameters td.TableBuilder--table-cell:nth-child(2) {
width: 60px;
}

.parameters td.TableBuilder--table-cell:nth-child(3) {
width: 60px;
}

.parameters td.TableBuilder--table-cell:nth-child(4) {
width: 60px;
} 

.parameters td.TableBuilder--table-cell:nth-child(5) {
width: 60px;
}
```

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/48510141-4c6c-4d6e-b0dc-168f008944ab)
___

Adjusting table header padding.

```
.TableBuilder--table th {
padding:0.1rem;
}
```

![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/3a9451bc-b9cf-4dc3-89a9-b1393a82055d)
___

Adjusting table cell padding.

```
.TableBuilder--table td {
padding:0.1rem;
}
```
![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/042fb5e0-19b9-4bdf-9e1a-f48a9f8af598)
___

The CSS below will reduce the padding in the cell.
```
.TableCell--input-container {
line-height:1.3rem;
}

```
![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/004927f1-1702-4ad1-8e5d-5ff0cb0830fc)
___

CSS below will align the text in the cell to the center for the specific column. 
```
.parameters td.TableBuilder--table-cell:nth-child(3) .TableCell--input-container{
text-align:center;
}
```
![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/4095b148-2159-4ab2-be85-be71209640bc)
___

You can manaully adjust the width of the cell. Text can overlap to the cell next to it.
```
.parameters td.TableBuilder--table-cell:nth-child(3) .TableCell--input-container{
width: 60px;
text-align:center;
}
```
![image](https://github.com/rpmsoftware/rpm-layout-custom-code/assets/87500503/420df92f-8c66-427a-960c-43c325897391)

