//Call the vars in index.html.tmpl like "<%site_title%>"
var customVars = {
    'site_title': 'Kiwi IRC',
    
    'top_logo': '<img src="/custom/img/logo.png" alt="Logo" style="display:block; margin:0 auto;"/>',

    'info_1': 'This is your first <strong>info line</strong>, you could write <strong>html</strong> here.',

    'info_2': '　　This is your second info line.'
}

//Don't change this line
module.exports.customVars = customVars;
