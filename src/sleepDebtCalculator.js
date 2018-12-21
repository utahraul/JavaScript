function getSleepHours(day) {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 7;
    } else if (day === 'saturday') {
        return 8;
    } else
        return 8;
};

function getActualSleepHours() {
    var monday = getSleepHours(monday);
    var tuesday = getSleepHours(tuesday);
    var wednesday = getSleepHours(wednesday);
    var thursday = getSleepHours(thursday);
    var friday = getSleepHours(friday);
    var saturday = getSleepHours(saturday);
    var sunday = getSleepHours(sunday);

    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
};

function getIdealSleepHours() {
    var idealHours = 8;
    return idealHours * 7;
};

function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours;
    var idealSleepHours = getIdealSleepHours;

    if (actualSleepHours === idealSleepHours) { console.log('You got the perfect amount of sleep') }
    else if (actualSleepHours < idealSleepHours) { console.log('You got more sleep than needed.') }
    else { console.log('You should get some rest') }
};

calculateSleepDebt();
