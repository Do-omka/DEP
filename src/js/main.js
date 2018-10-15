document.addEventListener('DOMContentLoaded', function(){
	var mobileWidth = 450,
	btn1 = document.getElementById("btn-1"),
	btn2 = document.getElementById("btn-2"),
	btn3 = document.getElementById("btn-3"),
	btn11 = document.getElementById("btn-11"),
	btn22 = document.getElementById("btn-22"),
	btn33 = document.getElementById("btn-33"),
	nextSlide,
	nextPhone;

	// screen slider
	btn1.addEventListener('change', function() {
		if (btn1.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn2.checked = true;
				btn2.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});

	btn2.addEventListener('change', function() {
		if (btn2.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn3.checked = true;
				btn3.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});

	btn3.addEventListener('change', function() {
		if (btn3.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn1.checked = true;
				btn1.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});
	btn1.dispatchEvent(new Event('change'));
	btn2.dispatchEvent(new Event('change'));
	btn3.dispatchEvent(new Event('change'));


	document.querySelector('.gallery .controls .prev').addEventListener('click', function() {
		if (btn2.checked === true) {
			btn1.checked = true;
			btn1.dispatchEvent(new Event('change'));
		} else if (btn3.checked === true) {
				btn2.checked = true;
				btn2.dispatchEvent(new Event('change'));
			}
	});

	document.querySelector('.gallery .controls .next').addEventListener('click', function() {
		if (btn1.checked === true) {
			btn2.checked = true;
			btn2.dispatchEvent(new Event('change'));
		} else if (btn2.checked === true) {
				btn3.checked = true;
				btn3.dispatchEvent(new Event('change'));
			}
	});

	//roadmap slider
	var roadmap = 1;
	document.querySelector('.roadmap .controls .prev').addEventListener('click', function() {
		if (roadmap == 2) {
			document.querySelector('.roadmap .schedule').classList.add('current1');
			document.querySelector('.roadmap .schedule').classList.remove('current2');
			roadmap--;
		}
	});

	document.querySelector('.roadmap .controls .next').addEventListener('click', function() {
		if (roadmap == 1) {
			document.querySelector('.roadmap .schedule').classList.add('current2');
			document.querySelector('.roadmap .schedule').classList.remove('current1');
			roadmap++;
		}
	});

	//show popup
	document.querySelector('.buynow').addEventListener('click', function(event) {
		document.querySelector('.back.popup').style.display = 'block';
		event.stopPropagation();
	});

	//hide popup
	document.addEventListener('click', function() {
	    document.querySelector('.popup').style.display = "none";
		if (screen.width <= mobileWidth) {
			document.querySelector('.nav .expand + ul').style.display = 'none';
		}
	});
	document.querySelector(".popup").addEventListener('click', function(event) {
		event.stopPropagation();
	});

	//hide popup
	document.addEventListener('click', function() {
	    document.querySelector('.popup').style.display = "none";
	});
	document.querySelector(".back.popup [type='button']").addEventListener('click', function(event) {
		document.querySelector('.back.popup').style.display = 'none';
		event.stopPropagation();
	});

	//show mobile menu
	document.querySelector('.nav .expand').addEventListener('click', function() {
		if (document.querySelector('.nav .expand + ul').style.display !== 'flex') {
			document.querySelector('.nav .expand + ul').style.display = 'flex';
		} else {
			document.querySelector('.nav .expand + ul').style.display = 'none';
		}
	});
	//hide mobile menu
	if (screen.width <= mobileWidth) {
		document.addEventListener('click', function() {
			document.querySelector('.nav .expand + ul').style.display = 'none';
			});
	}
	document.querySelector('.header .nav').addEventListener('click', function(event) {
	    event.stopPropagation();
	});

	//mobile phones slider
	btn11.addEventListener('change', function() {
		if (btn11.checked === true) {
			clearTimeout(nextPhone);
			nextPhone = setTimeout(function() {
				btn22.checked = true;
				btn22.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});

	btn22.addEventListener('change', function() {
		if (btn22.checked === true) {
			clearTimeout(nextPhone);
			nextPhone = setTimeout(function() {
				btn33.checked = true;
				btn33.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});

	btn33.addEventListener('change', function() {
		if (btn33.checked === true) {
			clearTimeout(nextPhone);
			nextPhone = setTimeout(function() {
				btn11.checked = true;
				btn11.dispatchEvent(new Event('change'));
			}, 5000);
		}
	});
	btn11.dispatchEvent(new Event('change'));
	btn22.dispatchEvent(new Event('change'));
	btn33.dispatchEvent(new Event('change'));


	document.querySelector('.gallery-m  .controls .prev').addEventListener('click', function() {
		if (btn22.checked === true) {
			btn11.checked = true;
			btn11.dispatchEvent(new Event('change'));
		} else if (btn33.checked === true) {
				btn22.checked = true;
				btn22.dispatchEvent(new Event('change'));
			}
	});

	document.querySelector('.gallery-m .controls .next').addEventListener('click', function() {
		if (btn11.checked === true) {
			btn22.checked = true;
			btn22.dispatchEvent(new Event('change'));
		} else if (btn22.checked === true) {
				btn33.checked = true;
				btn33.dispatchEvent(new Event('change'));
			}
	});


//gallery1 swipes
handleGalleryTouchStart = function(e) {
    xDown =e.changedTouches[0].clientX;
};

handleGalleryTouchMove = function(e) {
    if ( ! xDown) {
        return;
    }

    var xUp = e.changedTouches[0].clientX;


    var xDiff = xDown - xUp;

    //if(Math.abs( xDiff ) > 0)
        if (xDiff > 0 )
		document.querySelector('.gallery .controls .next').dispatchEvent(new Event('click'));
            //alert('лево');
         else
		 document.querySelector('.gallery .controls .prev').dispatchEvent(new Event('click'));
            //alert('право');
    xDown = null;

	};

	var xDown = null;

	document.querySelector('.gallery .slides').addEventListener('touchstart', handleGalleryTouchStart);
	document.querySelector('.gallery .slides').addEventListener('touchmove', handleGalleryTouchMove);

	//gallery-m swipes
	handleGalleryMTouchStart = function(e) {
	    xDown =e.changedTouches[0].clientX;
	};

	handleGalleryMTouchMove = function(e) {
	    if ( ! xDown) {
	        return;
	    }
	    var xUp = e.changedTouches[0].clientX;
	    var xDiff = xDown - xUp;

	    //if(Math.abs( xDiff ) > 0)
	        if (xDiff > 0 )
			document.querySelector('.gallery-m .controls .next').dispatchEvent(new Event('click'));
	            //alert('лево');
	         else
			 document.querySelector('.gallery-m .controls .prev').dispatchEvent(new Event('click'));
	            //alert('право');
	    xDown = null;
		};

		document.querySelector('.gallery-m .slides').addEventListener('touchstart', handleGalleryMTouchStart);
		document.querySelector('.gallery-m .slides').addEventListener('touchmove', handleGalleryMTouchMove);
 });
