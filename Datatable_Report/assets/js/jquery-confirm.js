String.Format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}

var dialogConfirmed = false;
function ConfirmDialog(obj, title, dialogText) {
    if (!dialogConfirmed) {
        $('body').append(String.Format("<div id='dialog' title='{0}'><p>{1}</p></div>",
                    title, dialogText));
        $('#dialog').dialog
                ({
                    //width: 200,
                    //height: 500,
                    modal: true,
                    resizable: false,
                    draggable: false,
                    close: function(event, ui) { $('body').find('#dialog').remove(); },
                    buttons:
                    {
                        'Yes': function() {
                            $(this).dialog('close');
                            dialogConfirmed = true;
                            if (obj) {
                                obj.click();
                                dialogConfirmed = false;
                            }
                        },
                        'No': function() {
                            $(this).dialog('close');
                        }
                    }
                });
    }
    return dialogConfirmed;
}