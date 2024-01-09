goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12274 = e.target.readyState;
var fexpr__12273 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12273.cljs$core$IFn$_invoke$arity$1 ? fexpr__12273.cljs$core$IFn$_invoke$arity$1(G__12274) : fexpr__12273.call(null,G__12274));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12284,handler){
var map__12285 = p__12284;
var map__12285__$1 = cljs.core.__destructure_map(map__12285);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12285__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12285__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12283_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12283_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12313 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12313)){
var response_type_12314 = temp__5804__auto___12313;
(this$__$1.responseType = cljs.core.name(response_type_12314));
} else {
}

var seq__12286_12315 = cljs.core.seq(headers);
var chunk__12287_12316 = null;
var count__12288_12317 = (0);
var i__12289_12318 = (0);
while(true){
if((i__12289_12318 < count__12288_12317)){
var vec__12296_12319 = chunk__12287_12316.cljs$core$IIndexed$_nth$arity$2(null,i__12289_12318);
var k_12320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296_12319,(0),null);
var v_12321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296_12319,(1),null);
this$__$1.setRequestHeader(k_12320,v_12321);


var G__12322 = seq__12286_12315;
var G__12323 = chunk__12287_12316;
var G__12324 = count__12288_12317;
var G__12325 = (i__12289_12318 + (1));
seq__12286_12315 = G__12322;
chunk__12287_12316 = G__12323;
count__12288_12317 = G__12324;
i__12289_12318 = G__12325;
continue;
} else {
var temp__5804__auto___12326 = cljs.core.seq(seq__12286_12315);
if(temp__5804__auto___12326){
var seq__12286_12327__$1 = temp__5804__auto___12326;
if(cljs.core.chunked_seq_QMARK_(seq__12286_12327__$1)){
var c__5568__auto___12328 = cljs.core.chunk_first(seq__12286_12327__$1);
var G__12329 = cljs.core.chunk_rest(seq__12286_12327__$1);
var G__12330 = c__5568__auto___12328;
var G__12331 = cljs.core.count(c__5568__auto___12328);
var G__12332 = (0);
seq__12286_12315 = G__12329;
chunk__12287_12316 = G__12330;
count__12288_12317 = G__12331;
i__12289_12318 = G__12332;
continue;
} else {
var vec__12302_12334 = cljs.core.first(seq__12286_12327__$1);
var k_12335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12302_12334,(0),null);
var v_12336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12302_12334,(1),null);
this$__$1.setRequestHeader(k_12335,v_12336);


var G__12337 = cljs.core.next(seq__12286_12327__$1);
var G__12338 = null;
var G__12339 = (0);
var G__12340 = (0);
seq__12286_12315 = G__12337;
chunk__12287_12316 = G__12338;
count__12288_12317 = G__12339;
i__12289_12318 = G__12340;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
