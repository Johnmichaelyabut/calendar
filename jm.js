	$(document).ready(function(){
		$('#year').on('change', function() {
			var month = $('#month').val();
			var year = $('#year').val();
			$.ajax({
				url: 'codeyear.php',
				data: {year: year, month: month},
				dataType: 'JSON',
				method: 'GET',
				success: function(response) {
					var str = '';
					var str2 = '';
					for (i = 1; i <= day; i++) {
						str += '<option value="' + i +'">';
						str += i;
						str += '</option>';
					}
					$('#day').html(str);
					$('#out2').html(response.day);
					$('#out3').html(response.year);

				}
			});
		});
		
		$('#month').on('change', function() {
			var month = $('#month').val();
			var year = $('#year').val();
			$.ajax({
				url: 'codeyear.php',
				data: {year: year, month: month},
				dataType: 'JSON',
				method: 'GET',
				success: function(response) {
					var day = response.day;
					var str = '';
					var str2 = '';
					for (i = 1; i <= day; i++) {
						str += '<option value="' + i +'">';
						str += i;
						str += '</option>';
					}
					$('#day').html(str);
					
					$('#out3').html(response.year);
					$('#out2').html(response.day);
					$('#out').html(response.month);
					
				}
			});
		});

	});
