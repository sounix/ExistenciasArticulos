var app = new Vue({
    el: "#app",
    data: {
        articulos: [],
        movil: false,
        articulo: {
            Articulo: "0176045",
            Nombre: "Azucar",
            Relacion: "1/CJA - 30/PZA",
            ExistActualUC: null,
            Stock30UC: null,
            CostoExistActual: null,
            existencias: [
                {
                    status: "Online",
                    sucursal: "nameSuc1",
                    Almacen: 3,
                    Tienda: 4,
                    Articulo: "0176045",
                    CodigoBarras: "7501015043097",
                    Nombre:	"Azucar Glass La Suiza 1kg",
                    Relacion: "1/CJA:- 30/PZA",
                    ExistUV: 0,
                    ExistUC: 0,
                    CostoNet: 30.57,
                    CostoNetUC: 917.1,
                    CostoExist:	0,
                    PrecioUNO: 36,
                    UtilUNO: 0.15083333333334,
                    PrecioDOS: 33.5,
                    UtilDOS: 0.08746268656717,
                    Estatus: "BAJO",
                    Stock30: 7,
                    Stock30UC: 0.23,
                    Subfamilia:	"76",
                    DescSubfamila: "Azucares A Granel Y Envasados",
                    Updated: "2020-08-25T12:24:28.673Z",
                }
            ]
        },
        showDetails: false,
        uri: "NoFind",
        nameBody: "collapseOne",
        loading: false,
        textSearch: "",
        finded: 0,
        /** Variables no publicas para conexiones**/
        urlApiExistencias: "",
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"}
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
        this.$refs.btnSearch.addEventListener("click", this.getArticulos)
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
        }
    }
});