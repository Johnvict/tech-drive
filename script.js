
navigator.getBattery().then( battery => {
	const batteryLevel =  `${battery.level * 100}%`;
	window.alert(`Welcome to Tech Drive. Your battery level is ${batteryLevel}`);
});