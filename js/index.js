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
        /** Variables no publicas para conexiones**/
        urlApiExistencias: "",
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"}
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
        this.$refs.btnSearch.addEventListener("click", this.getArticulos);
    },
    methods: {
        getArticulos: function() {
            this.startLoading();
            const instancia = this;
            const urlConsulta = `${this.urlApiExistencias}${this.textSearch}`;
            axios.get(urlConsulta)
            .then(function (response) {
                instancia.articulos = response.data.data;
                instancia.stopLoading();
                instancia.finded = response.data.count;
            })
            .catch(function (error) {
                instancia.articulos = [];
                instancia.stopLoading();
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