
navigator.getBattery().then( battery => {
	const batteryLevel =  `${battery.level * 100}%`;
	window.alert(`Welcome to Tech Drive. \nYour battery level is ${batteryLevel}`);
});