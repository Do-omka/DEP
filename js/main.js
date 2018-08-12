
document.addEventListener('DOMContentLoaded', function(){
	var btn1 = document.getElementById("btn-1"),
	btn2 = document.getElementById("btn-2"),
	btn3 = document.getElementById("btn-3");
	var nextSlide;


	btn1.addEventListener('change', function() {
		if (btn1.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn2.checked = true;
				btn2.dispatchEvent(new Event('change'));
			}, 2000);
		}
	});

	btn2.addEventListener('change', function() {
		if (btn2.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn3.checked = true;
				btn3.dispatchEvent(new Event('change'));
			}, 2000);
		}
	});

	btn3.addEventListener('change', function() {
		if (btn3.checked === true) {
			clearTimeout(nextSlide);
			nextSlide = setTimeout(function() {
				btn1.checked = true;
				btn1.dispatchEvent(new Event('change'));
			}, 2000);
		}
	});
	btn1.dispatchEvent(new Event('change'));
	btn2.dispatchEvent(new Event('change'));
	btn3.dispatchEvent(new Event('change'));
});

var current = 1;
document.querySelector('.gallery2 .controls .prev').addEventListener('click', function() {
	if (current == 2) {
		document.querySelector('.gallery2 .schedule').classList.add('current1');
		document.querySelector('.gallery2 .schedule').classList.remove('current2');
		current--;
	} else if (current == 3) {
			document.querySelector('.gallery2 .schedule').classList.add('current2');
			document.querySelector('.gallery2 .schedule').classList.remove('current3');
			current--;
		}
});

document.querySelector('.gallery2 .controls .next').addEventListener('click', function() {
	if (current == 1) {
		document.querySelector('.gallery2 .schedule').classList.add('current2');
		document.querySelector('.gallery2 .schedule').classList.remove('current1');
		current++;
	} else if (current == 2) {
			document.querySelector('.gallery2 .schedule').classList.add('current3');
			document.querySelector('.gallery2 .schedule').classList.remove('current2');
			current++;
		}
	});
document.querySelector('.buynow').addEventListener('click', function(event) {
	console.log(document.querySelector('.last .back.popup').style.display = 'block');
event.stopPropagation();
	//console.log(document.querySelector('.popup').style.display);
});

document.addEventListener('click', function() {
    document.querySelector('.popup').style.display = "none";
});

document.querySelector(".popup").addEventListener('click', function(event) {
    event.stopPropagation();
});
document.querySelector('.popup').hide;
