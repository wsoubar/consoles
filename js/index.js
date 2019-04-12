$(document).ready(function() {
    // all custom jQuery will go here
    console.log('ready! carregando...');

    console.log(servidores);

    var data_filter = servidores.filter( element => element.ambiente =="PRD")
    console.log(data_filter);  

    var x = _.find(servidores, function(o) { return o.versaoWas = "WAS8"; });
    console.log(x);  

});