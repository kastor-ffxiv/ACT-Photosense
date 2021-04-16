let zoneHandlers = {
    909: e12S_handler,
    966: nier3_handler,
    //641: debug_handler
};

function debug_handler(e) {
    // Loads in Shirogane only
        if(Array.isArray(e.line) && e.line[0] == "00") {
        e.line.forEach((line) => {
            if(line.includes('Ruin II')) {
                console.log("!Debug Listener Called!")

                effect_fadeOutIn(10, 0.7);
            }

            if(line.includes('gain the effect')) {
                console.log(e.line);
            }
        });
    }
}

function e12S_handler(e) {
    if(Array.isArray(e.line)) {
        e.line.forEach((line) => {
            if(line.includes('Added new combatant Beastly Sculpture.')) {
                effect_screenDarkener(30);
            }
        });
    }
}

function nier3_handler(e) {
	if(Array.isArray(e.line)) {
    	if(e.line[0] == "20" && e.line[3] == "Red Girl" && e.line[5] == "Cruelty") {
    		effect_fadeOutIn(9, 0.7);
    	}

        if(e.line[0] == "20" && e.line[3] == "Red Girl" && e.line[5] == "Sublime Transcendence") {
            effect_fadeOutIn(10, 1);
        }

        if(e.line[0] == "20" && e.line[3] == "Her Inflorescence" && e.line[5] == "Distortion") {
            effect_fadeOutIn(9, 0.7);
            console.log(e.line);
        }

        if(e.line[0] == "00" && e.line[4].includes("Down for the Count") && e.line[4].includes("You suffer the effect of")) {
            effect_fadeOutIn(12, 0.7);
            console.log(e.line);
        }
    }
}
