var app = new Vue({
    el: "#app",
    data: {
        articulos: [],
        movil: false,
        articulo: {},
        showDetails: false,
        uri: "NoFind",
        nameBody: "collapseOne",
        loading: false,
        textSearch: "",
        finded: 0,
        NumSearch: 0,
        NumSearchProducts: 0,
        /** Variables no publicas para conexiones**/
        urlApiExistencias: "",
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"}
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
    },
    methods: {
        roundTo: function(number, digits = 2, autoComplete = false) { //12411.95368 , 3, false
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
        },
        parseToPorcent: function(value) { // 0.45
            const stringValue = value.toString();
            const arrayValue = stringValue.split(".");
            return parseInt(arrayValue[1]);
        },
        count: function(anyObject) {
            const length = (Object.keys(anyObject)).length;
            return length;
        },
        getArticulos: function() {
            if (this.textSearch.trim() === "") return;
            this.startLoading();
            const instancia = this;
            const urlConsulta = `${this.urlApiExistencias}${this.textSearch}`;
            axios.get(urlConsulta)
            .then(function (response) {
                instancia.articulos = response.data.data;
                instancia.stopLoading();
                instancia.NumSearchProducts += 1;
                instancia.finded = response.data.count;
            })
            .catch(function (error) {
                instancia.articulos = [];
                instancia.stopLoading();
                instancia.NumSearchProducts += 1;
                instancia.finded = 0;
                console.log('Error: ' + error);
            }); 
        },
        getDetailsArticulo: function(urlDetails) {
            this.startLoading();
            const instancia = this;
            axios.get(urlDetails)
            .then(function (response) {
                instancia.articulo = response.data.data;
                instancia.stopLoading();
                instancia.showDetails = true;
                instancia.NumSearch += 1;
            })
            .catch(function (error) {
                instancia.articulo = {
                    Articulo: "",
                    Nombre: "",
                    Relacion: "",
                    ExistActualUC: null,
                    Stock30UC: null,
                    CostoExistActual: null,
                    existencias: []
                };
                instancia.stopLoading();
                instancia.showDetails = true;
                console.log('Error: ' + error);
            });
        },
        isDiplayMovil: function() {
            if (screen.width > 800) return false;
            return true;
        },
        startLoading: function() {
            this.loading = true;
        },
        stopLoading: function() {
            this.loading = false;
        },
        setUri: function(uri) {
            this.showDetails = true;
            this.uri = uri
            console.log("uri",(uri));
        },
        backMain: function() {
            this.showDetails = false;
        },
        goDetails: function() {
            this.showDetails = true;
        }
    }
});