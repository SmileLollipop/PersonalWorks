$(function() {
	$('#inputText').focus(function(event) {
		$('#inputText').attr('value', '');
	});
	$('#inputText').blur(function(event) {
		$('#inputText').attr('value', '有范情侣装有爱就要秀出来');
	});
});