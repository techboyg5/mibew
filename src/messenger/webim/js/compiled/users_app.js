/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(){var k=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.agent=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f=e.helperMissing,g=this.escapeExpression;d='<span class="agent-status-';if((a=e["if"].call(b,b.away,{hash:{},inverse:this.program(3,function(){return"online"},c),fn:this.program(1,function(){return"away"},c),data:c}))||0===a)d+=a;d+=' inline-block" title="';if((a=e["if"].call(b,b.away,{hash:{},inverse:this.program(7,function(a,
d){var b,m;m={hash:{},data:d};return g((b=e.L10n,b?b.call(a,"pending.status.online",m):f.call(a,"L10n","pending.status.online",m)))},c),fn:this.program(5,function(a,d){var b,m;m={hash:{},data:d};return g((b=e.L10n,b?b.call(a,"pending.status.away",m):f.call(a,"L10n","pending.status.away",m)))},c),data:c}))||0===a)d+=a;d+='"></span>';(a=e.name)?a=a.call(b,{hash:{},data:c}):(a=b.name,a="function"===typeof a?a.apply(b):a);d+=g(a);if((a=e.unless.call(b,b.isLast,{hash:{},inverse:this.noop,fn:this.program(9,
function(){return","},c),data:c}))||0===a)d+=a;return d});l.no_threads=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f;d=e.helperMissing;a=this.escapeExpression;c={hash:{},data:c};return b='<td class="no-threads" colspan="8">'+(a((f=e.L10n,f?f.call(b,"clients.no_clients",c):d.call(b,"L10n","clients.no_clients",c)))+"</td>")});l.no_visitors=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f;d=e.helperMissing;a=this.escapeExpression;
c={hash:{},data:c};return b='<td class="no-visitors" colspan="9">'+(a((f=e.L10n,f?f.call(b,"visitors.no_visitors",c):d.call(b,"L10n","visitors.no_visitors",c)))+"</td>")});l.status_panel=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f,g=e.helperMissing,h=this.escapeExpression;d='<div id="connstatus">';(a=e.message)?a=a.call(b,{hash:{},data:c}):(a=b.message,a="function"===typeof a?a.apply(b):a);d+=h(a);if((f=e["if"].call(b,(a=b.agent,null==a||!1===a?a:a.away),
{hash:{},inverse:this.program(3,function(a,d){var b,c;c={hash:{},data:d};return h((b=e.L10n,b?b.call(a,"pending.status.online",c):g.call(a,"L10n","pending.status.online",c)))},c),fn:this.program(1,function(a,d){var b,c;c={hash:{},data:d};return h((b=e.L10n,b?b.call(a,"pending.status.away",c):g.call(a,"L10n","pending.status.away",c)))},c),data:c}))||0===f)d+=f;d+='</div><div id="connlinks"><a href="javascript:void(0);" id="change-status">';if((f=e["if"].call(b,(a=b.agent,null==a||!1===a?a:a.away),
{hash:{},inverse:this.program(7,function(a,d){var b,c;c={hash:{},data:d};return h((b=e.L10n,b?b.call(a,"pending.status.setaway",c):g.call(a,"L10n","pending.status.setaway",c)))},c),fn:this.program(5,function(a,d){var b,c;c={hash:{},data:d};return h((b=e.L10n,b?b.call(a,"pending.status.setonline",c):g.call(a,"L10n","pending.status.setonline",c)))},c),data:c}))||0===f)d+=f;return d+"</a></div>"});l.threads_collection=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};
var f,g=e.helperMissing,h=this.escapeExpression;a={hash:{},data:c};d='<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+(h((f=e.L10n,f?f.call(b,"pending.table.head.name",a):g.call(b,"L10n","pending.table.head.name",a)))+"</th>\n    <th>");a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"pending.table.head.actions",a):g.call(b,"L10n","pending.table.head.actions",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"pending.table.head.contactid",a):g.call(b,"L10n",
"pending.table.head.contactid",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"pending.table.head.state",a):g.call(b,"L10n","pending.table.head.state",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"pending.table.head.operator",a):g.call(b,"L10n","pending.table.head.operator",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"pending.table.head.total",a):g.call(b,"L10n","pending.table.head.total",a)))+"</th>\n    <th>";a={hash:{},data:c};
d+=h((f=e.L10n,f?f.call(b,"pending.table.head.waittime",a):g.call(b,"L10n","pending.table.head.waittime",a)))+"</th>\n    <th>";a={hash:{},data:c};return d+=h((f=e.L10n,f?f.call(b,"pending.table.head.etc",a):g.call(b,"L10n","pending.table.head.etc",a)))+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>'});l.visitors_collection=k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f,g=e.helperMissing,h=this.escapeExpression;a={hash:{},data:c};
d='<table id="visitorslist" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+(h((f=e.L10n,f?f.call(b,"visitors.table.head.name",a):g.call(b,"L10n","visitors.table.head.name",a)))+"</th>\n    <th>");a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.actions",a):g.call(b,"L10n","visitors.table.head.actions",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.contactid",a):g.call(b,"L10n","visitors.table.head.contactid",a)))+"</th>\n    <th>";
a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.firsttimeonsite",a):g.call(b,"L10n","visitors.table.head.firsttimeonsite",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.lasttimeonsite",a):g.call(b,"L10n","visitors.table.head.lasttimeonsite",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.invited.by",a):g.call(b,"L10n","visitors.table.head.invited.by",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=
e.L10n,f?f.call(b,"visitors.table.head.invitationtime",a):g.call(b,"L10n","visitors.table.head.invitationtime",a)))+"</th>\n    <th>";a={hash:{},data:c};d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.invitations",a):g.call(b,"L10n","visitors.table.head.invitations",a)))+"</th>\n    <th>";a={hash:{},data:c};return d+=h((f=e.L10n,f?f.call(b,"visitors.table.head.etc",a):g.call(b,"L10n","visitors.table.head.etc",a)))+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>'});l.queued_thread=
k(function(d,b,e,a,c){this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var f=e.helperMissing,g=this.escapeExpression;d='<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="';if((a=e["if"].call(b,b.canOpen,{hash:{},inverse:this.program(3,function(a,d){var b,c;c={hash:{},data:d};return g((b=e.L10n,b?b.call(a,"pending.table.view",c):f.call(a,"L10n","pending.table.view",c)))},c),fn:this.program(1,function(a,d){var b,c;c={hash:{},data:d};return g((b=
e.L10n,b?b.call(a,"pending.table.speak",c):f.call(a,"L10n","pending.table.speak",c)))},c),data:c}))||0===a)d+=a;d+='">';if((a=e["if"].call(b,b.ban,{hash:{},inverse:this.noop,fn:this.program(5,function(a,d){var b,c;b={hash:{},data:d};return b=""+(g((c=e.L10n,c?c.call(a,"chat.client.spam.prefix",b):f.call(a,"L10n","chat.client.spam.prefix",b)))+"&nbsp;")},c),data:c}))||0===a)d+=a;(a=e.userName)?a=a.call(b,{hash:{},data:c}):(a=b.userName,a="function"===typeof a?a.apply(b):a);d+=g(a)+"</a></div>\n    ";
if((a=e["if"].call(b,b.firstMessage,{hash:{},inverse:this.noop,fn:this.program(7,function(a,d){var b,c;b='<div class="first-message"><a href="javascript:void(0);" title="';(c=e.firstMessage)?c=c.call(a,{hash:{},data:d}):(c=a.firstMessage,c="function"===typeof c?c.apply(a):c);b+=g(c)+'">';(c=e.firstMessagePreview)?c=c.call(a,{hash:{},data:d}):(c=a.firstMessagePreview,c="function"===typeof c?c.apply(a):c);return b+=g(c)+"</a></div>"},c),data:c}))||0===a)d+=a;d+='\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n        ';
if((a=e["if"].call(b,b.canOpen,{hash:{},inverse:this.noop,fn:this.program(9,function(a,d){var b,c;b={hash:{},data:d};return b='\n            <div class="control open-dialog open-control inline-block" title="'+(g((c=e.L10n,c?c.call(a,"pending.table.speak",b):f.call(a,"L10n","pending.table.speak",b)))+'"></div>\n        ')},c),data:c}))||0===a)d+=a;d+="\n        ";if((a=e["if"].call(b,b.canView,{hash:{},inverse:this.noop,fn:this.program(11,function(a,d){var b,c;b={hash:{},data:d};return b='\n            <div class="control view-control inline-block" title="'+
(g((c=e.L10n,c?c.call(a,"pending.table.view",b):f.call(a,"L10n","pending.table.view",b)))+'"></div>\n        ')},c),data:c}))||0===a)d+=a;d+="\n        ";if((a=e["if"].call(b,b.tracked,{hash:{},inverse:this.noop,fn:this.program(13,function(a,d){var b,c;b={hash:{},data:d};return b='\n            <div class="control track-control inline-block" title="'+(g((c=e.L10n,c?c.call(a,"pending.table.tracked",b):f.call(a,"L10n","pending.table.tracked",b)))+'"></div>\n        ')},c),data:c}))||0===a)d+=a;d+="\n        ";
if((a=e["if"].call(b,b.canBan,{hash:{},inverse:this.noop,fn:this.program(15,function(a,b){var d,c;d={hash:{},data:b};return d='\n            <div class="control ban-control inline-block" title="'+(g((c=e.L10n,c?c.call(a,"pending.table.ban",d):f.call(a,"L10n","pending.table.ban",d)))+'"></div>\n        ')},c),data:c}))||0===a)d+=a;d+='\n    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">';if((a=e["if"].call(b,b.userIp,{hash:{},inverse:this.program(19,function(a,
d){var b;(b=e.remote)?b=b.call(a,{hash:{},data:d}):(b=a.remote,b="function"===typeof b?b.apply(a):b);return g(b)},c),fn:this.program(17,function(a,b){var d,c;d='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">';(c=e.remote)?c=c.call(a,{hash:{},data:b}):(c=a.remote,c="function"===typeof c?c.apply(a):c);return d+=g(c)+"</a>"},c),data:c}))||0===a)d+=a;d+='</td>\n<td class="visitor">';(a=e.stateDesc)?a=a.call(b,{hash:{},data:c}):(a=b.stateDesc,a="function"===typeof a?a.apply(b):a);
d+=g(a)+'</td>\n<td class="visitor">';(a=e.agentName)?a=a.call(b,{hash:{},data:c}):(a=b.agentName,a="function"===typeof a?a.apply(b):a);d+=g(a)+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.totalTime)?a=a.call(b,{hash:{},data:c}):(a=b.totalTime,a="function"===typeof a?a.apply(b):a);d+=g(a)+'"></span></td>\n<td class="visitor">';if((a=e.unless.call(b,b.chatting,{hash:{},inverse:this.program(23,function(){return"-"},c),fn:this.program(21,function(a,b){var d,c;d='<span class="timesince" data-timestamp="';
(c=e.waitingTime)?c=c.call(a,{hash:{},data:b}):(c=a.waitingTime,c="function"===typeof c?c.apply(a):c);return d+=g(c)+'"></span>'},c),data:c}))||0===a)d+=a;d+='</td>\n<td class="visitor">';if((a=e["if"].call(b,b.ban,{hash:{},inverse:this.program(27,function(a,b){var c;(c=e.userAgent)?c=c.call(a,{hash:{},data:b}):(c=a.userAgent,c="function"===typeof c?c.apply(a):c);return g(c)},c),fn:this.program(25,function(a){var c;return g((c=(c=a.ban,null==c||!1===c?c:c.reason),"function"===typeof c?c.apply(a):
c))},c),data:c}))||0===a)d+=a;return d+"</td>"});l.visitor=k(function(d,b,e,a,c){function f(){return"-"}this.compilerInfo=[2,">= 1.0.0-rc.3"];e=e||d.helpers;c=c||{};var g,h=e.helperMissing,j=this.escapeExpression;d='<td class="visitor">\n    ';if((a=e.unless.call(b,b.invitationInfo,{hash:{},inverse:this.program(3,function(a,c){var b;(b=e.userName)?b=b.call(a,{hash:{},data:c}):(b=a.userName,b="function"===typeof b?b.apply(a):b);return j(b)},c),fn:this.program(1,function(a,c){var b,d;b={hash:{},data:c};
b='<a href="javascript:void(0);" class="invite-link" title="'+(j((d=e.L10n,d?d.call(a,"pending.table.invite",b):h.call(a,"L10n","pending.table.invite",b)))+'">');(d=e.userName)?d=d.call(a,{hash:{},data:c}):(d=a.userName,d="function"===typeof d?d.apply(a):d);return b+=j(d)+"</a>"},c),data:c}))||0===a)d+=a;g={hash:{},data:c};d=d+'\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="'+(j((a=e.L10n,a?a.call(b,
"pending.table.tracked",g):h.call(b,"L10n","pending.table.tracked",g)))+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">');if((a=e["if"].call(b,b.userIp,{hash:{},inverse:this.program(7,function(a,c){var b;(b=e.remote)?b=b.call(a,{hash:{},data:c}):(b=a.remote,b="function"===typeof b?b.apply(a):b);return j(b)},c),fn:this.program(5,function(a,b){var c,d;c='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">';(d=e.remote)?d=d.call(a,
{hash:{},data:b}):(d=a.remote,d="function"===typeof d?d.apply(a):d);return c+=j(d)+"</a>"},c),data:c}))||0===a)d+=a;d+='</td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.firstTime)?a=a.call(b,{hash:{},data:c}):(a=b.firstTime,a="function"===typeof a?a.apply(b):a);d+=j(a)+'"></span></td>\n<td class="visitor"><span class="timesince" data-timestamp="';(a=e.lastTime)?a=a.call(b,{hash:{},data:c}):(a=b.lastTime,a="function"===typeof a?a.apply(b):a);d+=j(a)+'"></span></td>\n<td class="visitor">';
if((a=e["if"].call(b,b.invitationInfo,{hash:{},inverse:this.program(11,f,c),fn:this.program(9,function(a){var b;return j((b=(b=a.invitationInfo,null==b||!1===b?b:b.agentName),"function"===typeof b?b.apply(a):b))},c),data:c}))||0===a)d+=a;d+='</td>\n<td class="visitor">';if((a=e["if"].call(b,b.invitationInfo,{hash:{},inverse:this.program(11,f,c),fn:this.program(13,function(a){var b;return a=""+('<span class="timesince" data-timestamp="'+j((b=(b=a.invitationInfo,null==b||!1===b?b:b.time),"function"===
typeof b?b.apply(a):b))+'"></span>')},c),data:c}))||0===a)d+=a;d+='</td>\n<td class="visitor">';(a=e.invitations)?a=a.call(b,{hash:{},data:c}):(a=b.invitations,a="function"===typeof a?a.apply(b):a);d+=j(a)+" / ";(a=e.chats)?a=a.call(b,{hash:{},data:c}):(a=b.chats,a="function"===typeof a?a.apply(b):a);d+=j(a)+'</td>\n<td class="visitor">';(a=e.userAgent)?a=a.call(b,{hash:{},data:c}):(a=b.userAgent,a="function"===typeof a?a.apply(b):a);return d+=j(a)+"</td>"})})();
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,e){a.Regions={};a.Popup={};a.Popup.open=function(b,a,g){b=window.open(b,a,g);b.focus();b.opener=window};a.Utils.updateTimers=function(a,f){a.find(f).each(function(){var a=e(this).data("timestamp");if(a){var c=Math.round((new Date).getTime()/1E3)-a,a=c%60,b=Math.floor(c/60)%60,c=Math.floor(c/3600),d=[];0<c&&d.push(c);d.push(10>b?"0"+b:b);d.push(10>a?"0"+a:a);e(this).html(d.join(":"))}})}})(Mibew,jQuery);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
MibewAPIUsersInteraction=function(){this.obligatoryArguments={"*":{agentId:null,"return":{},references:{}},result:{errorCode:0}};this.reservedFunctionNames=["result"]};MibewAPIUsersInteraction.prototype=new MibewAPIInteraction;
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.Agent=a.Models.User.extend({defaults:b.extend({},a.Models.User.prototype.defaults,{id:null,isAgent:!0,away:!1}),away:function(){this.setAvailability(!1)},available:function(){this.setAvailability(!0)},setAvailability:function(c){var b=this;a.Objects.server.callFunctions([{"function":c?"available":"away",arguments:{agentId:this.id,references:{},"return":{}}}],function(a){0==a.errorCode&&b.set({away:!c})},!0)}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c){var b=[],f=a.Models.QueuedThread=a.Models.Thread.extend({defaults:c.extend({},a.Models.Thread.prototype.defaults,{controls:null,userName:"",userIp:"",remote:"",userAgent:"",agentName:"",canOpen:!1,canView:!1,canBan:!1,ban:!1,totalTime:0,waitingTime:0,firstMessage:null}),initialize:function(){for(var e=[],b=f.getControls(),d=0,c=b.length;d<c;d++)e.push(new b[d]({thread:this}));this.set({controls:new a.Collections.Controls(e)})}},{addControl:function(a){b.push(a)},getControls:function(){return b}})})(Mibew,
_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b){b.Models.StatusPanel=b.Models.Base.extend({defaults:{message:""},setStatus:function(a){this.set({message:a})},changeAgentStatus:function(){var a=b.Objects.Models.agent;a.get("away")?a.available():a.away()}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c){var b=[],f=a.Models.Visitor=a.Models.User.extend({defaults:c.extend({},a.Models.User.prototype.defaults,{controls:null,userName:"",userIp:"",remote:"",userAgent:"",firstTime:0,lastTime:0,invitations:0,chats:0,invitationInfo:!1}),initialize:function(){for(var e=[],b=f.getControls(),d=0,c=b.length;d<c;d++)e.push(new b[d]({visitor:this}));this.set({controls:new a.Collections.Controls(e)})}},{addControl:function(a){b.push(a)},getControls:function(){return b}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Collections.Agents=c.Collection.extend({model:b.Models.Agent,comparator:function(a){return a.get("name")},initialize:function(){var a=b.Objects.Models.agent;b.Objects.server.callFunctionsPeriodically(function(){return[{"function":"updateOperators",arguments:{agentId:a.id,"return":{operators:"operators"},references:{}}}]},d.bind(this.updateOperators,this))},updateOperators:function(a){this.update(a.operators)}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(c,e,f){c.Collections.Threads=e.Collection.extend({model:c.Models.QueuedThread,initialize:function(){this.revision=0;var a=this,b=c.Objects.Models.agent;c.Objects.server.callFunctionsPeriodically(function(){return[{"function":"currentTime",arguments:{agentId:b.id,"return":{time:"currentTime"},references:{}}},{"function":"updateThreads",arguments:{agentId:b.id,revision:a.revision,"return":{threads:"threads",lastRevision:"lastRevision"},references:{}}}]},f.bind(this.updateThreads,this))},comparator:function(a){var b=
{field:a.get("waitingTime").toString()};this.trigger("sort:field",a,b);return b.field},updateThreads:function(a){if(0==a.errorCode){if(0<a.threads.length){var b;b=a.currentTime?Math.round((new Date).getTime()/1E3)-a.currentTime:0;for(var d=0,e=a.threads.length;d<e;d++)a.threads[d].totalTime=parseInt(a.threads[d].totalTime)+b,a.threads[d].waitingTime=parseInt(a.threads[d].waitingTime)+b;this.trigger("before:update:threads",a.threads);var f=c.Models.Thread.prototype.STATE_CLOSED,g=c.Models.Thread.prototype.STATE_LEFT;
b=[];this.update(a.threads,{remove:!1,sort:!1});b=this.filter(function(a){return a.get("state")==f||a.get("state")==g});0<b.length&&this.remove(b);this.sort();this.trigger("after:update:threads")}this.revision=a.lastRevision}}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,e,f){b.Collections.Visitors=e.Collection.extend({model:b.Models.Visitor,initialize:function(){var a=b.Objects.Models.agent;b.Objects.server.callFunctionsPeriodically(function(){return[{"function":"currentTime",arguments:{agentId:a.id,"return":{time:"currentTime"},references:{}}},{"function":"updateVisitors",arguments:{agentId:a.id,"return":{visitors:"visitors"},references:{}}}]},f.bind(this.updateVisitors,this))},comparator:function(a){var c={field:a.get("firstTime").toString()};this.trigger("sort:field",
a,c);return c.field},updateVisitors:function(a){if(0==a.errorCode){var c;c=a.currentTime?Math.round((new Date).getTime()/1E3)-a.currentTime:0;for(var d=0,b=a.visitors.length;d<b;d++)a.visitors[d].lastTime=parseInt(a.visitors[d].lastTime)+c,a.visitors[d].firstTime=parseInt(a.visitors[d].firstTime)+c;this.trigger("before:update:visitors",a.visitors);this.update(a.visitors);this.trigger("after:update:visitors")}}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Views.Agent=c.Marionette.ItemView.extend({template:d.templates.agent,tagName:"span",className:"agent",modelEvents:{change:"render"},initialize:function(){this.isModelLast=this.isModelFirst=!1},serializeData:function(){var a=this.model.toJSON();a.isFirst=this.isModelFirst;a.isLast=this.isModelLast;return a}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.NoThreads=b.Marionette.ItemView.extend({template:c.templates.no_threads,initialize:function(a){this.tagName=a.tagName}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.NoVisitors=b.Marionette.ItemView.extend({template:c.templates.no_visitors,initialize:function(a){this.tagName=a.tagName}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,e){d.Views.QueuedThread=d.Views.CompositeBase.extend({template:e.templates.queued_thread,itemView:d.Views.Control,itemViewContainer:".thread-controls",className:"thread",modelEvents:{change:"render"},events:{"click .open-dialog":"openDialog","click .view-control":"viewDialog","click .track-control":"showTrack","click .ban-control":"showBan","click .geo-link":"showGeoInfo","click .first-message a":"showFirstMessage"},initialize:function(){this.lastStyles=[]},serializeData:function(){var a=
this.model,b=d.Objects.Models.page,c=a.toJSON();c.stateDesc=this.stateToDesc(a.get("state"));c.chatting=a.get("state")==a.STATE_CHATTING;c.tracked=b.get("showVisitors");c.firstMessage&&(c.firstMessagePreview=30<c.firstMessage.length?c.firstMessage.substring(0,30)+"...":c.firstMessage);return c},stateToDesc:function(a){var b=d.Localization;return a==this.model.STATE_QUEUE?b.get("chat.thread.state_wait"):a==this.model.STATE_WAITING?b.get("chat.thread.state_wait_for_another_agent"):a==this.model.STATE_CHATTING?
b.get("chat.thread.state_chatting_with_agent"):a==this.model.STATE_CLOSED?b.get("chat.thread.state_closed"):a==this.model.STATE_LOADING?b.get("chat.thread.state_loading"):""},showGeoInfo:function(){var a=this.model.get("userIp");if(a){var b=d.Objects.Models.page,c=b.get("geoLink").replace("{ip}",a);d.Popup.open(c,"ip"+a,b.get("geoWindowParams"))}},openDialog:function(){var a=this.model,a=a.get("state")==a.STATE_CHATTING&&a.get("canView");this.showDialogWindow(a)},viewDialog:function(){this.showDialogWindow(!0)},
showDialogWindow:function(a){var b=this.model.id,c=d.Objects.Models.page;d.Popup.open(c.get("agentLink")+"?thread="+b+(a?"&viewonly=true":""),"ImCenter"+b,c.get("chatWindowParams"))},showTrack:function(){var a=this.model.id,b=d.Objects.Models.page;d.Popup.open(b.get("trackedLink")+"?thread="+a,"ImTracked"+a,b.get("trackedUserWindowParams"))},showBan:function(){var a=this.model,b=a.get("ban"),c=d.Objects.Models.page;d.Popup.open(c.get("banLink")+"?"+(!1!==b?"id="+b.id:"thread="+a.id),"ImBan"+b.id,
c.get("banWindowParams"))},showFirstMessage:function(){var a=this.model.get("firstMessage");a&&alert(a)}})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c,d){a.Views.StatusPanel=c.Marionette.ItemView.extend({template:d.templates.status_panel,modelEvents:{change:"render"},ui:{changeStatus:"#change-status"},events:{"click #change-status":"changeAgentStatus"},initialize:function(){a.Objects.Models.agent.on("change",this.render,this)},changeAgentStatus:function(){this.model.changeAgentStatus()},serializeData:function(){var b=this.model.toJSON();b.agent=a.Objects.Models.agent.toJSON();return b}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,d){a.Views.Visitor=a.Views.CompositeBase.extend({template:d.templates.visitor,itemView:a.Views.Control,itemViewContainer:".visitor-controls",className:"visitor",modelEvents:{change:"render"},events:{"click .invite-link":"inviteUser","click .geo-link":"showGeoInfo","click .track-control":"showTrack"},inviteUser:function(){if(!this.model.get("invitationInfo")){var b=this.model.id,c=a.Objects.Models.page;a.Popup.open(c.get("inviteLink")+"?visitor="+b,"ImCenter"+b,c.get("inviteWindowParams"))}},
showTrack:function(){var b=this.model.id,c=a.Objects.Models.page;a.Popup.open(c.get("trackedLink")+"?visitor="+b,"ImTracked"+b,c.get("trackedVisitorWindowParams"))},showGeoInfo:function(){var b=this.model.get("userIp");if(b){var c=a.Objects.Models.page,d=c.get("geoLink").replace("{ip}",b);a.Popup.open(d,"ip"+b,c.get("geoWindowParams"))}}})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Views.AgentsCollection=a.Views.CollectionBase.extend({itemView:a.Views.Agent,className:"agents-collection",collectionEvents:{"sort add remove reset":"render"},initialize:function(){this.on("itemview:before:render",this.updateIndexes,this)},updateIndexes:function(a){var b=this.collection,c=a.model;c&&(a.isModelFirst=0==b.indexOf(c),a.isModelLast=b.indexOf(c)==b.length-1)}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,h,j,k){d.Views.ThreadsCollection=h.Marionette.CompositeView.extend({template:j.templates.threads_collection,itemView:d.Views.QueuedThread,itemViewContainer:"#threads-container",emptyView:d.Views.NoThreads,className:"threads-collection",collectionEvents:{sort:"renderCollection","sort:field":"createSortField",add:"threadAdded"},itemViewOptions:function(a){return{tagName:d.Objects.Models.page.get("threadTag"),collection:a.get("controls")}},initialize:function(){window.setInterval(k.bind(this.updateTimers,
this),2E3);this.on("itemview:before:render",this.updateStyles,this);this.on("render",this.updateTimers,this)},updateStyles:function(a){var b=this.collection,c=a.model,d=this;if(c.id){var e=this.getQueueCode(c),f=!1,g=!1,b=b.filter(function(a){return d.getQueueCode(a)==e});0<b.length&&(g=b[0].id==c.id,f=b[b.length-1].id==c.id);if(0<a.lastStyles.length){c=0;for(b=a.lastStyles.length;c<b;c++)a.$el.removeClass(a.lastStyles[c]);a.lastStyles=[]}c=(e!=this.QUEUE_BAN?"in":"")+this.queueCodeToString(e);a.lastStyles.push(c);
g&&a.lastStyles.push(c+"-first");f&&a.lastStyles.push(c+"-last");c=0;for(b=a.lastStyles.length;c<b;c++)a.$el.addClass(a.lastStyles[c])}},updateTimers:function(){d.Utils.updateTimers(this.$el,".timesince")},createSortField:function(a,b){var c=this.getQueueCode(a)||"Z";b.field=c.toString()+"_"+a.get("waitingTime").toString()},threadAdded:function(){var a=d.Objects.Models.page.get("webimRoot");a&&d.Utils.playSound(a+"/sounds/new_user.wav");if(d.Objects.Models.page.get("showPopup"))this.once("render",
function(){alert(d.Localization.get("pending.popup_notification"))})},getQueueCode:function(a){var b=a.get("state");return!1!=a.get("ban")&&b!=a.STATE_CHATTING?this.QUEUE_BAN:b==a.STATE_QUEUE||b==a.STATE_LOADING?this.QUEUE_WAITING:b==a.STATE_CLOSED||b==a.STATE_LEFT?this.QUEUE_CLOSED:b==a.STATE_WAITING?this.QUEUE_PRIO:b==a.STATE_CHATTING?this.QUEUE_CHATTING:!1},queueCodeToString:function(a){return a==this.QUEUE_PRIO?"prio":a==this.QUEUE_WAITING?"wait":a==this.QUEUE_CHATTING?"chat":a==this.QUEUE_BAN?
"ban":a==this.QUEUE_CLOSED?"closed":""},QUEUE_PRIO:1,QUEUE_WAITING:2,QUEUE_CHATTING:3,QUEUE_BAN:4,QUEUE_CLOSED:5})})(Mibew,Backbone,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c,d){a.Views.VisitorsCollection=b.Marionette.CompositeView.extend({template:c.templates.visitors_collection,itemView:a.Views.Visitor,itemViewContainer:"#visitors-container",emptyView:a.Views.NoVisitors,className:"visitors-collection",collectionEvents:{sort:"renderCollection"},itemViewOptions:function(b){return{tagName:a.Objects.Models.page.get("visitorTag"),collection:b.get("controls")}},initialize:function(){window.setInterval(d.bind(this.updateTimers,this),2E3);this.on("render",this.updateTimers,
this)},updateTimers:function(){a.Utils.updateTimers(this.$el,".timesince")}})})(Mibew,Backbone,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,h,j){var c=0,g=function(){c++;10==c&&(alert(a.Localization.get("pending.errors.network")),c=0)},b=new h.Marionette.Application;b.addRegions({agentsRegion:"#agents-region",statusPanelRegion:"#status-panel-region",threadsRegion:"#threads-region",visitorsRegion:"#visitors-region"});b.addInitializer(function(e){var c=a.Objects,f=a.Objects.Models,d=a.Objects.Collections;c.server=new a.Server(j.extend({interactionType:MibewAPIUsersInteraction,onTimeout:g,onTransportError:g},e.server));f.page=
new a.Models.Page(e.page);f.agent=new a.Models.Agent(e.agent);d.threads=new a.Collections.Threads;b.threadsRegion.show(new a.Views.ThreadsCollection({collection:d.threads}));e.page.showOnlineOperators&&(d.visitors=new a.Collections.Visitors,b.visitorsRegion.show(new a.Views.VisitorsCollection({collection:d.visitors})));f.statusPanel=new a.Models.StatusPanel;b.statusPanelRegion.show(new a.Views.StatusPanel({model:f.statusPanel}));e.page.showOnlineOperators&&(d.agents=new a.Collections.Agents,b.agentsRegion.show(new a.Views.AgentsCollection({collection:d.agents})));
c.server.callFunctionsPeriodically(function(){return[{"function":"update",arguments:{"return":{},references:{},agentId:f.agent.id}}]},function(){})});b.on("start",function(){a.Objects.server.runUpdater()});a.Application=b})(Mibew,Backbone,_);
