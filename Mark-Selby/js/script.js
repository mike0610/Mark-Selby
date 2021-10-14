let nav = $('#menu')
let navToggle = $('#navToggle')

$(function () {
	navToggle.on('click', function (event) {
		event.preventDefault()
		nav.toggleClass('show')
	})
})
