$(document).ready(function(){


	//we want to click the image and have it fade into the other one
	//when any image is clicked, have it fade out AND fade the other one in
	//when the graphic is clicked, fade the top image out.
	//if the top image is already faded out, fade it back in

	//when you click on the after image, fade before image back in.

	$(".before").click(function(){
		$(".before").fadeOut(5000);
	});		

	$(".after").click(function(){
		$(".before").fadeIn(5000);
	});		

	//tell the javascript what the quotes are 
	// var quote1 = "“The way to right wrongs is to turn the light of truth upon them.”";
	// var	quote2 = "“The people must know before they can act, and there is no educator to compare with the press.”";

	// console.log(quote2);

	//Figure out which quote is being displayed

	// console.log(quoteOnDisplay);

	//If somebody clicks on an image the new quote is swapped

	// $("img").click(function(){
	// 		// console.log("I clicked on the image.")
	// 		//if the quote on display is quote1, then we want to fade out h1 and we want to swap in the text for quote2.
	// 		var quoteOnDisplay = $("h1").text();

	// 		$("h1").fadeOut(0);
	// 		if (quoteOnDisplay == quote1) {
	// 			$("h1").text(quote2);	
	// 		} else {
	// 			$("h1").text(quote1);
	// 		}
	// 		$("h1").fadeIn();			


			// if (quoteOnDisplay == quote1) {
			// 	$("h1").fadeOut(0);
			// 	$("h1").text(quote2);
			// 	$("h1").fadeIn();	
			// } else {
			// 	$("h1").fadeOut(0);
			// 	$("h1").text(quote1);
			// 	$("h1").fadeIn();		
			// }



		// });



	   // jQuery methods go here...
		// $("p").fadeOut(5000);
	 //    $("button").click(function(){
	 //        $("#test").hide();
	 //    });

});