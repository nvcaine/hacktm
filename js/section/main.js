$( function() {
	$("header").html(headerTemplate());
	$("header").append(menuTemplate({options: mainMenuOptions}));
})