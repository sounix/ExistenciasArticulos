var utils = (() => {
    const parseFecha = (stringFecha, withHour = false) => {
        console.log(stringFecha);
        const fecha = new Date(stringFecha);
        let newFormat = `${stringFecha.slice(8,10)} de ${_arrayMonths[fecha.getMonth()]} del ${fecha.getFullYear()}`;
        if (withHour) {
            newFormat += ` a las ${fecha.getHours()}:${fecha.getMinutes()}`;
        }
        return newFormat
    }


    const _arrayMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const roundTo = (number, digits = 2, autoComplete = false) => { //12411.95368 , 3, false
        const stringNumber = (number === null || number === undefined) ? "0" : number.toString();
        const arrayDivision = stringNumber.split(".");
        const lengthDivision = arrayDivision.length;
        let rounded = "0.00";
        let digitsString = "";
        if (lengthDivision === 1) {
            if (!autoComplete) return arrayDivision[0];

            for (let index = 0; index < digits; index++) {
                digitsString += "0"
            }
            rounded = arrayDivision[0] + "." +digitsString;
            return rounded;
        }
        if (digits === 0) {
            rounded = Math.round(number);
            return rounded;
        }
        digitsString = arrayDivision[1].slice(0, (digits - 1));
        let digitToRound = parseInt(arrayDivision[1].slice(digits, (digits + 1)));
        if (isNaN(digitToRound)) digitToRound = 0;
        let digitRounded = -1;
        if (digitToRound < 5) digitRounded = arrayDivision[1].slice((digits - 1), digits);
        if (digitToRound >= 5 && digitToRound < 9) digitRounded = parseInt(arrayDivision[1].slice((digits - 1), digits)) + 1;
        if (digitToRound == 9) digitRounded = 9;
        rounded = arrayDivision[0] + "." + digitsString + digitRounded;
        return rounded;
    }

    return {
        parseFecha,
        roundTo
    }
})()