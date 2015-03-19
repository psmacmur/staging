/**
 * Created by pmacmurchy on 19/03/2015.
 */
function reset()
{
    $('input:checkbox').removeAttr('checked');$('#check')[0].innerHTML = '';
}

$(function installValidator() {
    $('input:checkbox').change(function() {
        if ($('input:checkbox').length === $('input:checked').length ) {
            $('#check')[0].innerHTML = "Good to go";
        }
        else {
            $('#check')[0].innerHTML = "";
        }
    });
});
