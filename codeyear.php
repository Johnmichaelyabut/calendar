<?php
$year = (isset($_GET['year'])) ? $_GET['year']: false;
$month = (isset($_GET['month'])) ? $_GET['month']: false;
$day = 0;
$is_leap = (($year % 4) == 0) ? true: false;

switch($month){
	case "jan":
	case "mar":
	case "may":
	case "jul":
	case "aug":
	case "oct":
	case "dec":
		$day = 31;
		break;
	case "feb":
		if($is_leap)
			$day = 29;
		else
			$day = 28;
		break;
	default: $day = 30;
}


echo json_encode(
	array(
		'year' => $year,
		'month' => $month,
		'result' => 'success',
		'day'	=> $day)
	);
