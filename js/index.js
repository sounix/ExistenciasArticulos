var app = new Vue({
    el: "#app",
    data: {
        articulos: [
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados", Uri: "aplicacion/"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados", Uri: "aplicacion/"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados", Uri: "aplicacion/"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados", Uri: "aplicacion/"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados", Uri: "aplicacion/"}
        ],
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
                },
                {
                    status: "Online",
                    sucursal: "nameSuc2",
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
                    Updated: "2020-08-25T12:24:28.673Z"
                }
            ]
        },
        showDetails: false,
        uri: "NoFind",
        nameBody: "collapseOne",
        /** Variables no publicas para conexiones**/
        apiExistencias: "",
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"}
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
    },
    methods: {
        isDiplayMovil: function() {
            if (screen.width > 800) return false;
            return true;
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