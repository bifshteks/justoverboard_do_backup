$(document).ready(function(){
	$('.all-side-bar-menu').mouseover(function(){
		if (!$('.menu-item-name').hasClass('is-closing')) {
			$('.menu-item-name').addClass('menu-is-active')
			$('.menu-item-name').removeClass('menu-is-not-active')
			// console.log('over')
		}
		
	})

	$('.all-side-bar-menu').mouseleave(function(){
		$('.menu-item-name').removeClass('menu-is-active')
		$('.menu-item-name').addClass('menu-is-not-active is-closing')
		setTimeout(function(){
			$('.menu-item-name').removeClass('is-closing')
		}, 500)
		// console.log('out')
	})
	console.log('just')


})
