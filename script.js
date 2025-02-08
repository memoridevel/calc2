$(() => {
	let $res_field = $('.calc__result-field');
	$res_field.val('');
	$('.calc').on('submit', function(e) {
		e.preventDefault();
		$res_field.val(calculate());
	});
	$('.js--btn-add-res').on('click', function(e) {
		e.preventDefault();
		isError();
		$res_field.val($res_field.val() + $(this).val());
	});
	$('.js--btn-reset').on('click', function(e) {
		e.preventDefault();
		$res_field.val('');
	});
	$('.js--btn-calc').on('click', function(e) {
		e.preventDefault();
		$res_field.val(calculate());
	});
	$res_field.on('focus', function(e) {
		e.preventDefault();
		isError();
	});
	function calculate() {
		for (let i = 0; i < $res_field.val().length; i++) {
			if ($res_field.val()[i]!='+' && 
				$res_field.val()[i]!='-' && 
				$res_field.val()[i]!='*' && 
				$res_field.val()[i]!='/' && 
				!$.isNumeric($res_field.val()[i])) {
					return 'Ошибка';
			}
		}
		return eval($res_field.val());
	}
	function isError() {
		if ($res_field.val() === 'Ошибка') {
			$res_field.val('');
		}
	}
});