let zoneHandlers = {
    909: e12S_handler,
    966: nier3_handler,
    //641: debug_handler
};

let spellTable = {
    RedGirl_Cruelty: "6013",
    RedGirl_SublimeTranscendence: "620A",
    HerInflorescence_Distortion: "5BE9",
    FalseIdol_Eminence: "5DD5"
}

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
    	if(e.line[0] == "20" && e.line[4] == spellTable.RedGirl_Cruelty) {
    		effect_fadeOutIn(9, 0.7);
    	}

        if(e.line[0] == "20" && e.line[4] == spellTable.RedGirl_SublimeTranscendence) {
            effect_fadeOutIn(10, 1);
        }

        if(e.line[0] == "20" && e.line[4] == spellTable.HerInflorescence_Distortion) {
            effect_fadeOutIn(9, 0.7);
        }

        if(e.line[0] == "20" && e.line[4] == spellTable.FalseIdol_Eminence) {
            effect_fadeOutIn(12, 0.7);
        }
    }
}
