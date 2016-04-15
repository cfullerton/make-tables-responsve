(function( $ ) {
$.fn.makeTableResponsive = function (options){
	   var settings = $.extend({
            breakpoint: "500px",
            headingRow: -1
        }, options );
	   
	   var style ="<style>@media (max-width:" + settings.breakpoint + "){.cfdesktop-table {display:none}}" +
	   "@media (min-width:" + settings.breakpoint + "){.cfmobile-table {display:none}}</style>";
	   $('html > head').append(style);
       return this.each(function() {
	   var table = $(this).get(0);
       var rows = table.getElementsByTagName("tr");
	   var headingRow = settings.headingRow;
	   if (headingRow == -1){
		   for (var fRow =0;fRow < rows.length; fRow++){
			    var testCols = rows[fRow].getElementsByTagName("th");
				if (!testCols[0]){
					var testCols = rows[fRow].getElementsByTagName("td");
					}
			    if (testCols.length > 1){
					headingRow = fRow;
					console.log(testCols);
					break;
					}
			   }
		   }
       var headings = rows[headingRow].getElementsByTagName("th");
	   if (!headings[0]){		 
	     var headings = rows[headingRow].getElementsByTagName("td");
	   }
	   var newRows = [];
	   var tbody = document.createElement("tbody");
	   var numRows = rows.length;
	   if (headingRow >0){
		    for (var i =0;i<headingRow;i++){
				var newRow = document.createElement("tr");
				newRow.innerHTML = rows[i].innerHTML;
				 tbody.appendChild(newRow);
			}
		   }
       for (var i =headingRow + 1;i<numRows;i++){
	       var cols =  rows[i].getElementsByTagName("td");
		   for (var j = 0;j < cols.length;j++){
		       var newRow = document.createElement("tr");
			   var label = document.createElement("td");
			   label.innerHTML = headings[j].innerHTML || "";
			   var dataCol = document.createElement("td"); 
			   dataCol.innerHTML = cols[j].innerHTML || "";
			   newRow.appendChild(label);
			   newRow.appendChild(dataCol);
			   tbody.appendChild(newRow);
		   }
		   var newRow = document.createElement("tr");
		   var label = document.createElement("td");
		   var dataCol = document.createElement("td");
		   dataCol.innerHTML = label.innerHTML = " ";
		   newRow.appendChild(label);
		   newRow.appendChild(dataCol);
		   label.className += " noBorder";
		   dataCol.className+= " noBorder";
		   tbody.appendChild(newRow);
		   
       }
       var newTable = document.createElement("table");
	   newTable.appendChild(tbody);
	   table.className += " cfdesktop-table";
	   newTable.className += "cfmobile-table";
	   table.parentElement.appendChild(newTable);
	});
}
}( jQuery ));