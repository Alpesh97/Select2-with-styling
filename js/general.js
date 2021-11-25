$(document).ready(function() {
	
	//to reset the select value
	$('#id').val(null).trigger('change');

    //custom-dropdown
    $(".custom-dropdown").each(function() {
        var _this = $(this);
        var jQuerypl = _this.attr("data-placeholder");
        _this.select2({
            dropdownParent: _this.closest("div"),
            placeholder: jQuerypl, 
            minimumResultsForSearch: Infinity,
        });
    });

    $(".custom-dropdown.with-search-option").each(function() {
        var _this = $(this);
        var jQuerypl = _this.attr("data-placeholder");
        _this.select2({
            dropdownParent: _this.closest("div"),
            placeholder: jQuerypl, 
        });
    });

});


