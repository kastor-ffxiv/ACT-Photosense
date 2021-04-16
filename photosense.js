function zoneListener(e) {
	zoneID = e.zoneID;
	let zone = String(zoneID);

	console.log(`Zone ID: ${zoneID}`);
	if(zoneHandlers[zone]) {
        console.log(`Zone handler ${zoneHandlers[zone].name} active.`)
    }
}

function log_handler(e) {
	let zone = String(zoneID);
    if(!zoneHandlers[zone]) {
        return;
    }

    zoneHandlers[zone](e);
}

// Turns the overlay black and semi-transparent
function effect_screenDarkener(seconds) {
	if(darkener == true) {
		return;
	}

	darkener = true;
	console.log(`Starting ScreenDarkener for ${seconds} seconds`);

    document.getElementById('cover').classList.add('cover-dark');
    setTimeout(() => { 
        document.getElementById('cover').classList.remove('cover-dark');
        darkener = false;
    }, (seconds * 1000)); // Remove the black from the overlay after x seconds
}

// Turns the overlay black and semi-transparent
function effect_fadeOutIn(seconds, target) {
	if(darkener == true) {
		return;
	}

	darkener = true;
	console.log(`Starting FadeIn/Out for ${seconds} seconds`);

    let cover = document.getElementById('cover');
    document.getElementById('cover').classList.add('cover-full');
   	fadeIn(cover, target);
    setTimeout(() => { 
    	fadeOut(cover, target);
    }, (seconds * 1000)); // Remove the black from the overlay after x seconds
}

function fadeOut(element, target) {
	let op = target;
    let timer = setInterval(() => {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            element.classList.remove('cover-full');
            darkener = false;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.05;
    }, 50);
}

function fadeIn(element, target) {
	let op = 0.1;
	element.style.display = 'block';

    let timer = setInterval(() => {
        if (op >= target){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 50);
}
