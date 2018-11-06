
function displayChart(chartId) {
	var chartId = new Chart(document.getElementById(chartId).getContext('2d'), {
	       type: 'doughnut',
	       data: {
	           labels: ["Red", "Blue", "Yellow", "Green"],
	           datasets: [{
	               label: '# of Votes',
	               data: [12, 19, 3, 5],
	               backgroundColor: [
	                   '#ffffff',
	                   '#dcdcdc',
	                   '#a7a7a7',
	                   '#bbbbbb'
	               ],
	               borderWidth:0
	           }]
	       },
	       options: {
	           scales: {
	               
	           },
	           legend: {
	           	position:"right",
	           	labels:{
	           		
	           		usePointStyle:true,
	           		fontColor: '#e3e3e3',
	           		generateLabels: function(chart) {
	           		  var data = chart.data;
	           		  if (data.labels.length && data.datasets.length) {
	           		    return data.labels.map(function(label, i) {
            			var fill = data.backgroundColor ;
	           		      var ds = data.datasets[0];
	           		      // console.log(ds)
	           		         return {
	           		        // And finally : 
	           		        text: ds.data[i] + " " + label,
	           		        index: i,
	           		        strokeStyle:ds.backgroundColor[i],
	           		        lineWidth:1
	           		      };
	           		    });
	           		  }
	           		  return [];
	           		}
	           	}
	           	
	           }
	       }
	   });
}

function removeChart(chartsId){
	chartsId.destroy()
}


jQuery(document).ready(function($) {
	$('body').on('click', '.toggle-menu', function(event) {
		event.preventDefault();
		$('.main').toggleClass('menu-closed');
		
	});
	


	var start = moment();
	   var end = moment();

	   function cb(start, end) {
	   	
	       $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

	   }

	   $('#reportrange').daterangepicker({
	       startDate: start,
	       endDate: end,
	       ranges: {
	          'Today': [moment(), moment()],
	          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	          'This Month': [moment().startOf('month'), moment().endOf('month')],
	          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	       }
	   }, cb);

	   cb(start, end);

		displayChart('newChart')

	   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	     $(e.target).parent().addClass('large') // newly activated tab
	     $(e.relatedTarget).parent().removeClass('large')
	     console.log($("#"+$(e.relatedTarget).attr('aria-controls')+"Chart"))
	     $("#"+$(e.relatedTarget).attr('aria-controls')+"Chart")
	     setTimeout(function() {
	     	displayChart($(e.target).attr('aria-controls')+'Chart')
	     	
	     }, 400);
	     
	   })




});
