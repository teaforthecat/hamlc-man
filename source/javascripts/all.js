//= require hamlcoffee
//= require_tree .
//= require_tree ./templates


$(document).on( 'ready', function(){
    
    $.getJSON('/todos.json', function(todos){
        $('#todos').html(JST['todos']( todos ));
    });

})
