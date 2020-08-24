var app = new Vue({
    el: "#app",
    data: {
        articulos: [
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados"},
            {Articulo: "0176001", CodigoBarras: "7501379119056", Nombre: "Azucar Bueno 1kg", Relacion: "1/BTO - 10/PZA", Subfamilia: "76", DescSubfamila: "Azucares A Granel Y Envasados"}
        ],
        movil: false
    },
    mounted: function(){
        this.movil = this.isDiplayMovil();
    },
    methods: {
        isDiplayMovil: function() {
            if (screen.width > 800) return false;
            return true;
        }
    }
});