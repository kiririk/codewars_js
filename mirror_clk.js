function WhatIsTheTime(timeInMirror) {
	var time = timeInMirror.split(':');
	var reflection = {hours: 0, minutes: 0};
	if (Number(time[1]) == 0) {
		reflection.hours = (12-Number(time[0]) == 0) ? 12 : 12-Number(time[0]);
	} else {
		reflection.hours = 11-Number(time[0]);
		if (reflection.hours == 0) reflection.hours = 12;
		else if (reflection.hours < 0) reflection.hours += 12;
		reflection.minutes = 60-Number(time[1])
	}
	var result = '';
	result += (reflection.hours < 10) ? '0'+reflection.hours.toString() : reflection.hours;
	result += ':';
	result += (reflection.minutes < 10) ? '0'+reflection.minutes.toString() : reflection.minutes;
	return result;
}

console.log(WhatIsTheTime("06:35"));
console.log(WhatIsTheTime("11:59"));
console.log(WhatIsTheTime("12:02"));
console.log(WhatIsTheTime("04:00"));
console.log(WhatIsTheTime("06:00"));
console.log(WhatIsTheTime("12:00"));