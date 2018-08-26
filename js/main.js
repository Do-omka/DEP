
document.addEventListener('DOMContentLoaded', function(){
	var btn1 = document.getElementById("btn-1"),
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

	document.querySelector('.buynow').addEventListener('click', function(event) {
		console.log(document.querySelector('.last .back.popup').style.display = 'block');
		event.stopPropagation();
	});

	document.addEventListener('click', function() {
	    document.querySelector('.popup').style.display = "none";
	});

	document.querySelector(".popup").addEventListener('click', function(event) {
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

});
