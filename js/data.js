//carga de productos

var productos_data = []

let productosAjaxCall = () => {
    return $.ajax({
        type: 'GET',
        //sacamos clase hidden a la animacion
        beforeSend: function () { 
            $('#loader').removeClass('hidden')
        },
        url: "data/productos.json",
        dataType: "json",
        success: function (response) {
            for (const iterator of response) {
                productos_data.push(iterator)
            }
        },
        complete: function () { 
            $('#loader').addClass('hidden')
        },
    });
}





//svg
let logoContainer = $('a.navbar-brand');
let logoUrl = "img/logo.svg";
let carritoContainer = $('li.carrito');
let carritoUrl = 'img/shopping-cart-solid.svg';

$(function () {

    $.get(logoUrl, null,
        function (data) {
            console.log(data);
            $("svg", data).prependTo(logoContainer);
        },
        'xml'
    );

    $.get(carritoUrl, null,
        function (data) {
            console.log(data);
            $("svg", data).prependTo(carritoContainer);
        },
        'xml'
    );

});