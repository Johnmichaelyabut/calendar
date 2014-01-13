	$(document).ready(function(){
		var month = $('#month').val();
		var year = $('#year').val();
		$('#year').on('change', function() {
			year = $('#year').val();
			$.ajax({
				url: 'codeyear.php',
				data: {year: year},
				dataType: 'JSON',
				method: 'GET',
				success: function(response) {
					var day = response.day;
					var str = '';
					for (i = 1; i <= day; i++) {
						str += '<option value="' + i +'">';
						str += i;
						str += '</option>';
					}
					$('#day').html(str);
					
				}
			});
		});
		
		$('#month').on('change', function() {
			month = $('#month').val();
			$.ajax({
				url: 'codeyear.php',
				data: {year: year, month: month},
				dataType: 'JSON',
				method: 'GET',
				success: function(response) {
					var day = response.day;
					var str = '';
					for (i = 1; i <= day; i++) {
						str += '<option value="' + i +'">';
						str += i;
						str += '</option>';
					}
					$('#day').html(str);
					
				}
			});
		});

	});
