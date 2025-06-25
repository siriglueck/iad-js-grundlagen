window.onload = function () {
	document.getElementById("los").onclick = umrechnen;

};
function umrechnen() {
	with (document.getElementById("Volumen")) {
		switch (einheit.options.selectedIndex) {
			case 0:
				tausender = 1;
				break;
			case 1:
				tausender = 1000;
				break;
			case 2:
				tausender = 1000 * 1000;
				break;
			case 3:
				tausender = 1000 * 1000 * 1000;
				break;
			case 4:
				tausender = 1000 * 1000;
				break;
			case 5:
				tausender = 1000 * 1000 * 100;
		}
		let menge = eingabewert.value;
		cmm.value = menge * tausender;
		ccm.value = menge * tausender / 1000;
		cdm.value = menge * tausender / 1000 / 1000;
		cm.value = menge * tausender / 1000 / 1000 / 1000;
		liter.value = menge * tausender / 1000 / 1000;
		hektoliter.value = menge * tausender / 1000 / 1000 / 100;
	}
}

/**
 * ! Übungen
 * ? Kap09
 * ? Übungsaufgaben u_formular, u_radio, u_select, u_maus
 */