var init_stock_lookup;

init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function(event, data, status){ //show while searching
    show_spinner();
  });

  $('#stock-lookup-form').on('ajax:after', function(event, data, status){ //hide when search is completed
    hide_spinner();
  });

  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $("#stock-lookup").replaceWith(data);
    init_stock_lookup(); // we need this because listeners are gone when we replace with data
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found');
    hide_spinner();
  });
}





$(document).ready(function() {
  init_stock_lookup();
})