'use strict';

var hooks = {
  afterEditorInput: function (htmlString, params, abe) {
    if(params.datepicker != null) {
      htmlString = htmlString.replace('form-control form-abe', 'form-control form-abe datepicker')
                             .replace('glyphicon-font', 'glyphicon-calendar')
                             .replace('class="form-control form-abe', 'data-format="' + ((params.format != null) ? params.format : 'DD-MM-YYYY') + '" class="form-control form-abe');
    }

    return htmlString
  }
};

exports.default = hooks;