(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.default_control=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression;return f+="<strong>",h=c.title,h?g=h.call(b,{hash:{}}):(g=b.title,g=typeof g===i?g():g),f+=j(g)+"</strong>",f}),b.sound=a(function(a,b,c,d,e){function j(a,b){var d="",e,f;return d+='\n<audio autoplay src="',f=c.file,f?e=f.call(a,{hash:{}}):(e=a.file,e=typeof e===g?e():e),d+=h(e)+'">\n    <embed src="',f=c.file,f?e=f.call(a,{hash:{}}):(e=a.file,e=typeof e===g?e():e),d+=h(e)+'" hidden="true" autostart="true" loop="false" />\n</audio>\n',d}c=c||a.helpers;var f,g="function",h=this.escapeExpression,i=this;return f=b.file,f=c["if"].call(b,f,{hash:{},inverse:i.noop,fn:i.program(1,j,e)}),f||f===0?f:""})})()