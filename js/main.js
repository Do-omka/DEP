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
