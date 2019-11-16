$('#collapse-navbar').on('show.bs.collapse', function(){
	$('.topCasaFina-banner').css('transform', 'translate(-50%,10%)');

}); /*Query selector*/

$('#collapse-navbar').on('hide.bs.collapse', function(){
	$('.topCasaFina-banner').css('transform', 'translate(-50%,-50%)');

}); /*Query selector*/