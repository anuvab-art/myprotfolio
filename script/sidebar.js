		 /* Code for changing current
		 link on clicking */
		 var btns =
		 $("#navigation .navbar-nav .nav-link2");

		 for (var i = 0; i < btns.length; i++) {
		 	btns[i].addEventListener("click",
		 		function () {
		 			var current = document
		 			.getElementsByClassName("current");

		 			current[0].className = current[0]
		 			.className.replace(" current", "");

		 			this.className += " current";
		 		});
		 }

      /* Code for changing current
      link on Scrolling */
      $(window).scroll(function () {
      	var distance = $(window).scrollTop();
      	$('.page-section2').each(function (i) {

      		if ($(this).position().top
      			<= distance + 250) {

      			$('.navbar-nav a.current')
      		.removeClass('current');

      		$('.navbar-nav a').eq(i)
      		.addClass('current');
      	}
      });
      }).scroll();
