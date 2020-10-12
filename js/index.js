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
        titleAlert: "Advertencia",
        messageAlert: "",
        /** Variables no publicas para conexiones**/
        urlApiExistencias: "https://api-spa-v2020.herokuapp.com/api/existencias/articulos?_nombre=",
        namesSucursales: {"SPASUPERUNO.DYNDNS.ORG": "ZARAGOZA", "SPACENTRO.DYNDNS.ORG": "VICTORIA", "SPAOLUTA.DYNDNS.ORG": "OLUTA", "SPABODEGA.DYNDNS.ORG": "BODEGA", "SPAJALTIPAN.DYNDNS.ORG": "JALTIPAN"},
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
    },
    methods: {
        showAlertDialog: function(message) {
            this.messageAlert = message;
            document.getElementById("btnAlert").click();
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
            if (this.textSearch.trim() === "") {
                this.showAlertDialog("Campo de busqueda vacio");
                return;
            }
            this.startLoading();
            const instancia = this;
            const urlConsulta = `${this.urlApiExistencias}${this.textSearch}`;
            axios.get(urlConsulta)
            .then(function (response) {
                if (response.data.data === null) {
                    instancia.articulos = [];
                    instancia.NumSearchProducts += 1;
                    instancia.finded = 0;
                    instancia.stopLoading();
                    instancia.showAlertDialog("No hay conexion con la base de datos");
                    return;
                }
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
                instancia.showAlertDialog("Error inesperado: No hay conexion con el servidor");
                console.log('Error: ' + error);
            }); 
        },
        getDetailsArticulo: function(urlDetails) {
            this.startLoading();
            const instancia = this;
            axios.get(urlDetails)
            .then(function (response) {
                if (response.data.data === null) {
                    instancia.articulo = [];
                    instancia.showDetails = true;
                    instancia.stopLoading();
                    instancia.showAlertDialog("No hay conexion con la base de datos");
                    return;
                }
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
                instancia.showAlertDialog("Error inesperado: No hay conexion con el servidor");
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
