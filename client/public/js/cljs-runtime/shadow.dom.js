goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20920 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20920(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20924 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20924(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19975 = coll;
var G__19976 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19975,G__19976) : shadow.dom.lazy_native_coll_seq.call(null,G__19975,G__19976));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20004 = arguments.length;
switch (G__20004) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20006 = arguments.length;
switch (G__20006) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20014 = arguments.length;
switch (G__20014) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20026 = arguments.length;
switch (G__20026) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20037 = arguments.length;
switch (G__20037) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20053){if((e20053 instanceof Object)){
var e = e20053;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20053;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20065 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20066 = null;
var count__20067 = (0);
var i__20068 = (0);
while(true){
if((i__20068 < count__20067)){
var el = chunk__20066.cljs$core$IIndexed$_nth$arity$2(null,i__20068);
var handler_20970__$1 = ((function (seq__20065,chunk__20066,count__20067,i__20068,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20065,chunk__20066,count__20067,i__20068,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20970__$1);


var G__20972 = seq__20065;
var G__20973 = chunk__20066;
var G__20974 = count__20067;
var G__20975 = (i__20068 + (1));
seq__20065 = G__20972;
chunk__20066 = G__20973;
count__20067 = G__20974;
i__20068 = G__20975;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20065);
if(temp__5804__auto__){
var seq__20065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20065__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20065__$1);
var G__20977 = cljs.core.chunk_rest(seq__20065__$1);
var G__20978 = c__5568__auto__;
var G__20979 = cljs.core.count(c__5568__auto__);
var G__20980 = (0);
seq__20065 = G__20977;
chunk__20066 = G__20978;
count__20067 = G__20979;
i__20068 = G__20980;
continue;
} else {
var el = cljs.core.first(seq__20065__$1);
var handler_20982__$1 = ((function (seq__20065,chunk__20066,count__20067,i__20068,el,seq__20065__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20065,chunk__20066,count__20067,i__20068,el,seq__20065__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20982__$1);


var G__20985 = cljs.core.next(seq__20065__$1);
var G__20986 = null;
var G__20987 = (0);
var G__20988 = (0);
seq__20065 = G__20985;
chunk__20066 = G__20986;
count__20067 = G__20987;
i__20068 = G__20988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20086 = arguments.length;
switch (G__20086) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20095 = cljs.core.seq(events);
var chunk__20096 = null;
var count__20097 = (0);
var i__20098 = (0);
while(true){
if((i__20098 < count__20097)){
var vec__20113 = chunk__20096.cljs$core$IIndexed$_nth$arity$2(null,i__20098);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21006 = seq__20095;
var G__21007 = chunk__20096;
var G__21008 = count__20097;
var G__21009 = (i__20098 + (1));
seq__20095 = G__21006;
chunk__20096 = G__21007;
count__20097 = G__21008;
i__20098 = G__21009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20095);
if(temp__5804__auto__){
var seq__20095__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20095__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20095__$1);
var G__21011 = cljs.core.chunk_rest(seq__20095__$1);
var G__21012 = c__5568__auto__;
var G__21013 = cljs.core.count(c__5568__auto__);
var G__21014 = (0);
seq__20095 = G__21011;
chunk__20096 = G__21012;
count__20097 = G__21013;
i__20098 = G__21014;
continue;
} else {
var vec__20121 = cljs.core.first(seq__20095__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21017 = cljs.core.next(seq__20095__$1);
var G__21018 = null;
var G__21019 = (0);
var G__21020 = (0);
seq__20095 = G__21017;
chunk__20096 = G__21018;
count__20097 = G__21019;
i__20098 = G__21020;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20128 = cljs.core.seq(styles);
var chunk__20129 = null;
var count__20130 = (0);
var i__20131 = (0);
while(true){
if((i__20131 < count__20130)){
var vec__20145 = chunk__20129.cljs$core$IIndexed$_nth$arity$2(null,i__20131);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21025 = seq__20128;
var G__21026 = chunk__20129;
var G__21027 = count__20130;
var G__21028 = (i__20131 + (1));
seq__20128 = G__21025;
chunk__20129 = G__21026;
count__20130 = G__21027;
i__20131 = G__21028;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20128);
if(temp__5804__auto__){
var seq__20128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20128__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20128__$1);
var G__21029 = cljs.core.chunk_rest(seq__20128__$1);
var G__21030 = c__5568__auto__;
var G__21031 = cljs.core.count(c__5568__auto__);
var G__21032 = (0);
seq__20128 = G__21029;
chunk__20129 = G__21030;
count__20130 = G__21031;
i__20131 = G__21032;
continue;
} else {
var vec__20153 = cljs.core.first(seq__20128__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21037 = cljs.core.next(seq__20128__$1);
var G__21038 = null;
var G__21039 = (0);
var G__21040 = (0);
seq__20128 = G__21037;
chunk__20129 = G__21038;
count__20130 = G__21039;
i__20131 = G__21040;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20160_21041 = key;
var G__20160_21042__$1 = (((G__20160_21041 instanceof cljs.core.Keyword))?G__20160_21041.fqn:null);
switch (G__20160_21042__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21046 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21046,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21046,"aria-");
}
})())){
el.setAttribute(ks_21046,value);
} else {
(el[ks_21046] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20182){
var map__20185 = p__20182;
var map__20185__$1 = cljs.core.__destructure_map(map__20185);
var props = map__20185__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20201 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20201,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20201;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20206 = arguments.length;
switch (G__20206) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20227){
var vec__20229 = p__20227;
var seq__20230 = cljs.core.seq(vec__20229);
var first__20231 = cljs.core.first(seq__20230);
var seq__20230__$1 = cljs.core.next(seq__20230);
var nn = first__20231;
var first__20231__$1 = cljs.core.first(seq__20230__$1);
var seq__20230__$2 = cljs.core.next(seq__20230__$1);
var np = first__20231__$1;
var nc = seq__20230__$2;
var node = vec__20229;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20242 = nn;
var G__20243 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20242,G__20243) : create_fn.call(null,G__20242,G__20243));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20244 = nn;
var G__20245 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20244,G__20245) : create_fn.call(null,G__20244,G__20245));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20255 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(1),null);
var seq__20259_21054 = cljs.core.seq(node_children);
var chunk__20260_21055 = null;
var count__20261_21056 = (0);
var i__20262_21057 = (0);
while(true){
if((i__20262_21057 < count__20261_21056)){
var child_struct_21058 = chunk__20260_21055.cljs$core$IIndexed$_nth$arity$2(null,i__20262_21057);
var children_21059 = shadow.dom.dom_node(child_struct_21058);
if(cljs.core.seq_QMARK_(children_21059)){
var seq__20298_21060 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21059));
var chunk__20300_21061 = null;
var count__20301_21062 = (0);
var i__20302_21063 = (0);
while(true){
if((i__20302_21063 < count__20301_21062)){
var child_21064 = chunk__20300_21061.cljs$core$IIndexed$_nth$arity$2(null,i__20302_21063);
if(cljs.core.truth_(child_21064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21064);


var G__21065 = seq__20298_21060;
var G__21066 = chunk__20300_21061;
var G__21067 = count__20301_21062;
var G__21068 = (i__20302_21063 + (1));
seq__20298_21060 = G__21065;
chunk__20300_21061 = G__21066;
count__20301_21062 = G__21067;
i__20302_21063 = G__21068;
continue;
} else {
var G__21069 = seq__20298_21060;
var G__21070 = chunk__20300_21061;
var G__21071 = count__20301_21062;
var G__21072 = (i__20302_21063 + (1));
seq__20298_21060 = G__21069;
chunk__20300_21061 = G__21070;
count__20301_21062 = G__21071;
i__20302_21063 = G__21072;
continue;
}
} else {
var temp__5804__auto___21073 = cljs.core.seq(seq__20298_21060);
if(temp__5804__auto___21073){
var seq__20298_21074__$1 = temp__5804__auto___21073;
if(cljs.core.chunked_seq_QMARK_(seq__20298_21074__$1)){
var c__5568__auto___21075 = cljs.core.chunk_first(seq__20298_21074__$1);
var G__21076 = cljs.core.chunk_rest(seq__20298_21074__$1);
var G__21077 = c__5568__auto___21075;
var G__21078 = cljs.core.count(c__5568__auto___21075);
var G__21079 = (0);
seq__20298_21060 = G__21076;
chunk__20300_21061 = G__21077;
count__20301_21062 = G__21078;
i__20302_21063 = G__21079;
continue;
} else {
var child_21080 = cljs.core.first(seq__20298_21074__$1);
if(cljs.core.truth_(child_21080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21080);


var G__21081 = cljs.core.next(seq__20298_21074__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__20298_21060 = G__21081;
chunk__20300_21061 = G__21082;
count__20301_21062 = G__21083;
i__20302_21063 = G__21084;
continue;
} else {
var G__21085 = cljs.core.next(seq__20298_21074__$1);
var G__21086 = null;
var G__21087 = (0);
var G__21088 = (0);
seq__20298_21060 = G__21085;
chunk__20300_21061 = G__21086;
count__20301_21062 = G__21087;
i__20302_21063 = G__21088;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21059);
}


var G__21089 = seq__20259_21054;
var G__21090 = chunk__20260_21055;
var G__21091 = count__20261_21056;
var G__21092 = (i__20262_21057 + (1));
seq__20259_21054 = G__21089;
chunk__20260_21055 = G__21090;
count__20261_21056 = G__21091;
i__20262_21057 = G__21092;
continue;
} else {
var temp__5804__auto___21093 = cljs.core.seq(seq__20259_21054);
if(temp__5804__auto___21093){
var seq__20259_21094__$1 = temp__5804__auto___21093;
if(cljs.core.chunked_seq_QMARK_(seq__20259_21094__$1)){
var c__5568__auto___21096 = cljs.core.chunk_first(seq__20259_21094__$1);
var G__21097 = cljs.core.chunk_rest(seq__20259_21094__$1);
var G__21098 = c__5568__auto___21096;
var G__21099 = cljs.core.count(c__5568__auto___21096);
var G__21100 = (0);
seq__20259_21054 = G__21097;
chunk__20260_21055 = G__21098;
count__20261_21056 = G__21099;
i__20262_21057 = G__21100;
continue;
} else {
var child_struct_21101 = cljs.core.first(seq__20259_21094__$1);
var children_21102 = shadow.dom.dom_node(child_struct_21101);
if(cljs.core.seq_QMARK_(children_21102)){
var seq__20319_21103 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21102));
var chunk__20321_21104 = null;
var count__20322_21105 = (0);
var i__20323_21106 = (0);
while(true){
if((i__20323_21106 < count__20322_21105)){
var child_21109 = chunk__20321_21104.cljs$core$IIndexed$_nth$arity$2(null,i__20323_21106);
if(cljs.core.truth_(child_21109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21109);


var G__21111 = seq__20319_21103;
var G__21112 = chunk__20321_21104;
var G__21113 = count__20322_21105;
var G__21114 = (i__20323_21106 + (1));
seq__20319_21103 = G__21111;
chunk__20321_21104 = G__21112;
count__20322_21105 = G__21113;
i__20323_21106 = G__21114;
continue;
} else {
var G__21115 = seq__20319_21103;
var G__21116 = chunk__20321_21104;
var G__21117 = count__20322_21105;
var G__21118 = (i__20323_21106 + (1));
seq__20319_21103 = G__21115;
chunk__20321_21104 = G__21116;
count__20322_21105 = G__21117;
i__20323_21106 = G__21118;
continue;
}
} else {
var temp__5804__auto___21120__$1 = cljs.core.seq(seq__20319_21103);
if(temp__5804__auto___21120__$1){
var seq__20319_21121__$1 = temp__5804__auto___21120__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20319_21121__$1)){
var c__5568__auto___21122 = cljs.core.chunk_first(seq__20319_21121__$1);
var G__21123 = cljs.core.chunk_rest(seq__20319_21121__$1);
var G__21124 = c__5568__auto___21122;
var G__21125 = cljs.core.count(c__5568__auto___21122);
var G__21126 = (0);
seq__20319_21103 = G__21123;
chunk__20321_21104 = G__21124;
count__20322_21105 = G__21125;
i__20323_21106 = G__21126;
continue;
} else {
var child_21127 = cljs.core.first(seq__20319_21121__$1);
if(cljs.core.truth_(child_21127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21127);


var G__21132 = cljs.core.next(seq__20319_21121__$1);
var G__21133 = null;
var G__21134 = (0);
var G__21135 = (0);
seq__20319_21103 = G__21132;
chunk__20321_21104 = G__21133;
count__20322_21105 = G__21134;
i__20323_21106 = G__21135;
continue;
} else {
var G__21136 = cljs.core.next(seq__20319_21121__$1);
var G__21137 = null;
var G__21138 = (0);
var G__21139 = (0);
seq__20319_21103 = G__21136;
chunk__20321_21104 = G__21137;
count__20322_21105 = G__21138;
i__20323_21106 = G__21139;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21102);
}


var G__21140 = cljs.core.next(seq__20259_21094__$1);
var G__21141 = null;
var G__21142 = (0);
var G__21143 = (0);
seq__20259_21054 = G__21140;
chunk__20260_21055 = G__21141;
count__20261_21056 = G__21142;
i__20262_21057 = G__21143;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20347 = cljs.core.seq(node);
var chunk__20348 = null;
var count__20349 = (0);
var i__20350 = (0);
while(true){
if((i__20350 < count__20349)){
var n = chunk__20348.cljs$core$IIndexed$_nth$arity$2(null,i__20350);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21166 = seq__20347;
var G__21167 = chunk__20348;
var G__21168 = count__20349;
var G__21169 = (i__20350 + (1));
seq__20347 = G__21166;
chunk__20348 = G__21167;
count__20349 = G__21168;
i__20350 = G__21169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20347);
if(temp__5804__auto__){
var seq__20347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20347__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20347__$1);
var G__21171 = cljs.core.chunk_rest(seq__20347__$1);
var G__21172 = c__5568__auto__;
var G__21173 = cljs.core.count(c__5568__auto__);
var G__21174 = (0);
seq__20347 = G__21171;
chunk__20348 = G__21172;
count__20349 = G__21173;
i__20350 = G__21174;
continue;
} else {
var n = cljs.core.first(seq__20347__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21180 = cljs.core.next(seq__20347__$1);
var G__21181 = null;
var G__21182 = (0);
var G__21183 = (0);
seq__20347 = G__21180;
chunk__20348 = G__21181;
count__20349 = G__21182;
i__20350 = G__21183;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20362 = arguments.length;
switch (G__20362) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20379 = arguments.length;
switch (G__20379) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20395 = arguments.length;
switch (G__20395) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21242 = arguments.length;
var i__5770__auto___21243 = (0);
while(true){
if((i__5770__auto___21243 < len__5769__auto___21242)){
args__5775__auto__.push((arguments[i__5770__auto___21243]));

var G__21248 = (i__5770__auto___21243 + (1));
i__5770__auto___21243 = G__21248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20415_21252 = cljs.core.seq(nodes);
var chunk__20416_21253 = null;
var count__20417_21254 = (0);
var i__20418_21255 = (0);
while(true){
if((i__20418_21255 < count__20417_21254)){
var node_21264 = chunk__20416_21253.cljs$core$IIndexed$_nth$arity$2(null,i__20418_21255);
fragment.appendChild(shadow.dom._to_dom(node_21264));


var G__21267 = seq__20415_21252;
var G__21268 = chunk__20416_21253;
var G__21269 = count__20417_21254;
var G__21270 = (i__20418_21255 + (1));
seq__20415_21252 = G__21267;
chunk__20416_21253 = G__21268;
count__20417_21254 = G__21269;
i__20418_21255 = G__21270;
continue;
} else {
var temp__5804__auto___21275 = cljs.core.seq(seq__20415_21252);
if(temp__5804__auto___21275){
var seq__20415_21279__$1 = temp__5804__auto___21275;
if(cljs.core.chunked_seq_QMARK_(seq__20415_21279__$1)){
var c__5568__auto___21280 = cljs.core.chunk_first(seq__20415_21279__$1);
var G__21282 = cljs.core.chunk_rest(seq__20415_21279__$1);
var G__21283 = c__5568__auto___21280;
var G__21284 = cljs.core.count(c__5568__auto___21280);
var G__21285 = (0);
seq__20415_21252 = G__21282;
chunk__20416_21253 = G__21283;
count__20417_21254 = G__21284;
i__20418_21255 = G__21285;
continue;
} else {
var node_21286 = cljs.core.first(seq__20415_21279__$1);
fragment.appendChild(shadow.dom._to_dom(node_21286));


var G__21288 = cljs.core.next(seq__20415_21279__$1);
var G__21289 = null;
var G__21290 = (0);
var G__21291 = (0);
seq__20415_21252 = G__21288;
chunk__20416_21253 = G__21289;
count__20417_21254 = G__21290;
i__20418_21255 = G__21291;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20414){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20414));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20440_21301 = cljs.core.seq(scripts);
var chunk__20441_21302 = null;
var count__20442_21303 = (0);
var i__20443_21304 = (0);
while(true){
if((i__20443_21304 < count__20442_21303)){
var vec__20456_21310 = chunk__20441_21302.cljs$core$IIndexed$_nth$arity$2(null,i__20443_21304);
var script_tag_21311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20456_21310,(0),null);
var script_body_21312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20456_21310,(1),null);
eval(script_body_21312);


var G__21317 = seq__20440_21301;
var G__21318 = chunk__20441_21302;
var G__21319 = count__20442_21303;
var G__21320 = (i__20443_21304 + (1));
seq__20440_21301 = G__21317;
chunk__20441_21302 = G__21318;
count__20442_21303 = G__21319;
i__20443_21304 = G__21320;
continue;
} else {
var temp__5804__auto___21321 = cljs.core.seq(seq__20440_21301);
if(temp__5804__auto___21321){
var seq__20440_21322__$1 = temp__5804__auto___21321;
if(cljs.core.chunked_seq_QMARK_(seq__20440_21322__$1)){
var c__5568__auto___21323 = cljs.core.chunk_first(seq__20440_21322__$1);
var G__21324 = cljs.core.chunk_rest(seq__20440_21322__$1);
var G__21325 = c__5568__auto___21323;
var G__21326 = cljs.core.count(c__5568__auto___21323);
var G__21327 = (0);
seq__20440_21301 = G__21324;
chunk__20441_21302 = G__21325;
count__20442_21303 = G__21326;
i__20443_21304 = G__21327;
continue;
} else {
var vec__20469_21329 = cljs.core.first(seq__20440_21322__$1);
var script_tag_21330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20469_21329,(0),null);
var script_body_21331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20469_21329,(1),null);
eval(script_body_21331);


var G__21333 = cljs.core.next(seq__20440_21322__$1);
var G__21334 = null;
var G__21335 = (0);
var G__21336 = (0);
seq__20440_21301 = G__21333;
chunk__20441_21302 = G__21334;
count__20442_21303 = G__21335;
i__20443_21304 = G__21336;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20475){
var vec__20476 = p__20475;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20476,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20476,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20488 = arguments.length;
switch (G__20488) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20501 = cljs.core.seq(style_keys);
var chunk__20502 = null;
var count__20503 = (0);
var i__20504 = (0);
while(true){
if((i__20504 < count__20503)){
var it = chunk__20502.cljs$core$IIndexed$_nth$arity$2(null,i__20504);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21362 = seq__20501;
var G__21363 = chunk__20502;
var G__21364 = count__20503;
var G__21365 = (i__20504 + (1));
seq__20501 = G__21362;
chunk__20502 = G__21363;
count__20503 = G__21364;
i__20504 = G__21365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20501);
if(temp__5804__auto__){
var seq__20501__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20501__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20501__$1);
var G__21371 = cljs.core.chunk_rest(seq__20501__$1);
var G__21372 = c__5568__auto__;
var G__21373 = cljs.core.count(c__5568__auto__);
var G__21374 = (0);
seq__20501 = G__21371;
chunk__20502 = G__21372;
count__20503 = G__21373;
i__20504 = G__21374;
continue;
} else {
var it = cljs.core.first(seq__20501__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21383 = cljs.core.next(seq__20501__$1);
var G__21384 = null;
var G__21385 = (0);
var G__21386 = (0);
seq__20501 = G__21383;
chunk__20502 = G__21384;
count__20503 = G__21385;
i__20504 = G__21386;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20517,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20531 = k20517;
var G__20531__$1 = (((G__20531 instanceof cljs.core.Keyword))?G__20531.fqn:null);
switch (G__20531__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20517,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20533){
var vec__20535 = p__20533;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20535,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20535,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20516){
var self__ = this;
var G__20516__$1 = this;
return (new cljs.core.RecordIter((0),G__20516__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20518,other20519){
var self__ = this;
var this20518__$1 = this;
return (((!((other20519 == null)))) && ((((this20518__$1.constructor === other20519.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20518__$1.x,other20519.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20518__$1.y,other20519.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20518__$1.__extmap,other20519.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20517){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20570 = k20517;
var G__20570__$1 = (((G__20570 instanceof cljs.core.Keyword))?G__20570.fqn:null);
switch (G__20570__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20517);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20516){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20576 = cljs.core.keyword_identical_QMARK_;
var expr__20577 = k__5352__auto__;
if(cljs.core.truth_((pred__20576.cljs$core$IFn$_invoke$arity$2 ? pred__20576.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20577) : pred__20576.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20577)))){
return (new shadow.dom.Coordinate(G__20516,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20576.cljs$core$IFn$_invoke$arity$2 ? pred__20576.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20577) : pred__20576.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20577)))){
return (new shadow.dom.Coordinate(self__.x,G__20516,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20516),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20516){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20516,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20522){
var extmap__5385__auto__ = (function (){var G__20595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20522,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20522)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20595);
} else {
return G__20595;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20522),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20522),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20605,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20616 = k20605;
var G__20616__$1 = (((G__20616 instanceof cljs.core.Keyword))?G__20616.fqn:null);
switch (G__20616__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20605,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20623){
var vec__20625 = p__20623;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20604){
var self__ = this;
var G__20604__$1 = this;
return (new cljs.core.RecordIter((0),G__20604__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20606,other20607){
var self__ = this;
var this20606__$1 = this;
return (((!((other20607 == null)))) && ((((this20606__$1.constructor === other20607.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.w,other20607.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.h,other20607.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.__extmap,other20607.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20605){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20654 = k20605;
var G__20654__$1 = (((G__20654 instanceof cljs.core.Keyword))?G__20654.fqn:null);
switch (G__20654__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20605);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20604){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20656 = cljs.core.keyword_identical_QMARK_;
var expr__20657 = k__5352__auto__;
if(cljs.core.truth_((pred__20656.cljs$core$IFn$_invoke$arity$2 ? pred__20656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20657) : pred__20656.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20657)))){
return (new shadow.dom.Size(G__20604,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20656.cljs$core$IFn$_invoke$arity$2 ? pred__20656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20657) : pred__20656.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20657)))){
return (new shadow.dom.Size(self__.w,G__20604,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20604),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20604){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20604,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20613){
var extmap__5385__auto__ = (function (){var G__20677 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20613,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20613)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20677);
} else {
return G__20677;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20613),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20613),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21506 = (i + (1));
var G__21507 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21506;
ret = G__21507;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20700){
var vec__20701 = p__20700;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20701,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20706 = arguments.length;
switch (G__20706) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21523 = ps;
var G__21524 = (i + (1));
el__$1 = G__21523;
i = G__21524;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20734 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20734,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20734,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20734,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20739_21531 = cljs.core.seq(props);
var chunk__20740_21532 = null;
var count__20741_21533 = (0);
var i__20742_21534 = (0);
while(true){
if((i__20742_21534 < count__20741_21533)){
var vec__20756_21539 = chunk__20740_21532.cljs$core$IIndexed$_nth$arity$2(null,i__20742_21534);
var k_21540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20756_21539,(0),null);
var v_21541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20756_21539,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21540);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21540),v_21541);


var G__21543 = seq__20739_21531;
var G__21544 = chunk__20740_21532;
var G__21545 = count__20741_21533;
var G__21546 = (i__20742_21534 + (1));
seq__20739_21531 = G__21543;
chunk__20740_21532 = G__21544;
count__20741_21533 = G__21545;
i__20742_21534 = G__21546;
continue;
} else {
var temp__5804__auto___21547 = cljs.core.seq(seq__20739_21531);
if(temp__5804__auto___21547){
var seq__20739_21549__$1 = temp__5804__auto___21547;
if(cljs.core.chunked_seq_QMARK_(seq__20739_21549__$1)){
var c__5568__auto___21550 = cljs.core.chunk_first(seq__20739_21549__$1);
var G__21551 = cljs.core.chunk_rest(seq__20739_21549__$1);
var G__21552 = c__5568__auto___21550;
var G__21553 = cljs.core.count(c__5568__auto___21550);
var G__21554 = (0);
seq__20739_21531 = G__21551;
chunk__20740_21532 = G__21552;
count__20741_21533 = G__21553;
i__20742_21534 = G__21554;
continue;
} else {
var vec__20771_21555 = cljs.core.first(seq__20739_21549__$1);
var k_21556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20771_21555,(0),null);
var v_21557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20771_21555,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21556);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21556),v_21557);


var G__21562 = cljs.core.next(seq__20739_21549__$1);
var G__21563 = null;
var G__21564 = (0);
var G__21565 = (0);
seq__20739_21531 = G__21562;
chunk__20740_21532 = G__21563;
count__20741_21533 = G__21564;
i__20742_21534 = G__21565;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20781 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(1),null);
var seq__20784_21568 = cljs.core.seq(node_children);
var chunk__20786_21569 = null;
var count__20787_21570 = (0);
var i__20788_21571 = (0);
while(true){
if((i__20788_21571 < count__20787_21570)){
var child_struct_21572 = chunk__20786_21569.cljs$core$IIndexed$_nth$arity$2(null,i__20788_21571);
if((!((child_struct_21572 == null)))){
if(typeof child_struct_21572 === 'string'){
var text_21573 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21573),child_struct_21572].join(''));
} else {
var children_21576 = shadow.dom.svg_node(child_struct_21572);
if(cljs.core.seq_QMARK_(children_21576)){
var seq__20819_21577 = cljs.core.seq(children_21576);
var chunk__20821_21578 = null;
var count__20822_21579 = (0);
var i__20823_21580 = (0);
while(true){
if((i__20823_21580 < count__20822_21579)){
var child_21581 = chunk__20821_21578.cljs$core$IIndexed$_nth$arity$2(null,i__20823_21580);
if(cljs.core.truth_(child_21581)){
node.appendChild(child_21581);


var G__21582 = seq__20819_21577;
var G__21583 = chunk__20821_21578;
var G__21584 = count__20822_21579;
var G__21585 = (i__20823_21580 + (1));
seq__20819_21577 = G__21582;
chunk__20821_21578 = G__21583;
count__20822_21579 = G__21584;
i__20823_21580 = G__21585;
continue;
} else {
var G__21586 = seq__20819_21577;
var G__21587 = chunk__20821_21578;
var G__21588 = count__20822_21579;
var G__21589 = (i__20823_21580 + (1));
seq__20819_21577 = G__21586;
chunk__20821_21578 = G__21587;
count__20822_21579 = G__21588;
i__20823_21580 = G__21589;
continue;
}
} else {
var temp__5804__auto___21590 = cljs.core.seq(seq__20819_21577);
if(temp__5804__auto___21590){
var seq__20819_21591__$1 = temp__5804__auto___21590;
if(cljs.core.chunked_seq_QMARK_(seq__20819_21591__$1)){
var c__5568__auto___21592 = cljs.core.chunk_first(seq__20819_21591__$1);
var G__21593 = cljs.core.chunk_rest(seq__20819_21591__$1);
var G__21594 = c__5568__auto___21592;
var G__21595 = cljs.core.count(c__5568__auto___21592);
var G__21596 = (0);
seq__20819_21577 = G__21593;
chunk__20821_21578 = G__21594;
count__20822_21579 = G__21595;
i__20823_21580 = G__21596;
continue;
} else {
var child_21597 = cljs.core.first(seq__20819_21591__$1);
if(cljs.core.truth_(child_21597)){
node.appendChild(child_21597);


var G__21598 = cljs.core.next(seq__20819_21591__$1);
var G__21599 = null;
var G__21600 = (0);
var G__21601 = (0);
seq__20819_21577 = G__21598;
chunk__20821_21578 = G__21599;
count__20822_21579 = G__21600;
i__20823_21580 = G__21601;
continue;
} else {
var G__21602 = cljs.core.next(seq__20819_21591__$1);
var G__21603 = null;
var G__21604 = (0);
var G__21605 = (0);
seq__20819_21577 = G__21602;
chunk__20821_21578 = G__21603;
count__20822_21579 = G__21604;
i__20823_21580 = G__21605;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21576);
}
}


var G__21606 = seq__20784_21568;
var G__21607 = chunk__20786_21569;
var G__21608 = count__20787_21570;
var G__21609 = (i__20788_21571 + (1));
seq__20784_21568 = G__21606;
chunk__20786_21569 = G__21607;
count__20787_21570 = G__21608;
i__20788_21571 = G__21609;
continue;
} else {
var G__21610 = seq__20784_21568;
var G__21611 = chunk__20786_21569;
var G__21612 = count__20787_21570;
var G__21613 = (i__20788_21571 + (1));
seq__20784_21568 = G__21610;
chunk__20786_21569 = G__21611;
count__20787_21570 = G__21612;
i__20788_21571 = G__21613;
continue;
}
} else {
var temp__5804__auto___21614 = cljs.core.seq(seq__20784_21568);
if(temp__5804__auto___21614){
var seq__20784_21615__$1 = temp__5804__auto___21614;
if(cljs.core.chunked_seq_QMARK_(seq__20784_21615__$1)){
var c__5568__auto___21616 = cljs.core.chunk_first(seq__20784_21615__$1);
var G__21617 = cljs.core.chunk_rest(seq__20784_21615__$1);
var G__21618 = c__5568__auto___21616;
var G__21619 = cljs.core.count(c__5568__auto___21616);
var G__21620 = (0);
seq__20784_21568 = G__21617;
chunk__20786_21569 = G__21618;
count__20787_21570 = G__21619;
i__20788_21571 = G__21620;
continue;
} else {
var child_struct_21621 = cljs.core.first(seq__20784_21615__$1);
if((!((child_struct_21621 == null)))){
if(typeof child_struct_21621 === 'string'){
var text_21622 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21622),child_struct_21621].join(''));
} else {
var children_21623 = shadow.dom.svg_node(child_struct_21621);
if(cljs.core.seq_QMARK_(children_21623)){
var seq__20834_21624 = cljs.core.seq(children_21623);
var chunk__20836_21625 = null;
var count__20837_21626 = (0);
var i__20838_21627 = (0);
while(true){
if((i__20838_21627 < count__20837_21626)){
var child_21631 = chunk__20836_21625.cljs$core$IIndexed$_nth$arity$2(null,i__20838_21627);
if(cljs.core.truth_(child_21631)){
node.appendChild(child_21631);


var G__21632 = seq__20834_21624;
var G__21633 = chunk__20836_21625;
var G__21634 = count__20837_21626;
var G__21635 = (i__20838_21627 + (1));
seq__20834_21624 = G__21632;
chunk__20836_21625 = G__21633;
count__20837_21626 = G__21634;
i__20838_21627 = G__21635;
continue;
} else {
var G__21636 = seq__20834_21624;
var G__21637 = chunk__20836_21625;
var G__21638 = count__20837_21626;
var G__21639 = (i__20838_21627 + (1));
seq__20834_21624 = G__21636;
chunk__20836_21625 = G__21637;
count__20837_21626 = G__21638;
i__20838_21627 = G__21639;
continue;
}
} else {
var temp__5804__auto___21640__$1 = cljs.core.seq(seq__20834_21624);
if(temp__5804__auto___21640__$1){
var seq__20834_21641__$1 = temp__5804__auto___21640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20834_21641__$1)){
var c__5568__auto___21642 = cljs.core.chunk_first(seq__20834_21641__$1);
var G__21643 = cljs.core.chunk_rest(seq__20834_21641__$1);
var G__21644 = c__5568__auto___21642;
var G__21645 = cljs.core.count(c__5568__auto___21642);
var G__21646 = (0);
seq__20834_21624 = G__21643;
chunk__20836_21625 = G__21644;
count__20837_21626 = G__21645;
i__20838_21627 = G__21646;
continue;
} else {
var child_21647 = cljs.core.first(seq__20834_21641__$1);
if(cljs.core.truth_(child_21647)){
node.appendChild(child_21647);


var G__21648 = cljs.core.next(seq__20834_21641__$1);
var G__21649 = null;
var G__21650 = (0);
var G__21651 = (0);
seq__20834_21624 = G__21648;
chunk__20836_21625 = G__21649;
count__20837_21626 = G__21650;
i__20838_21627 = G__21651;
continue;
} else {
var G__21652 = cljs.core.next(seq__20834_21641__$1);
var G__21653 = null;
var G__21654 = (0);
var G__21655 = (0);
seq__20834_21624 = G__21652;
chunk__20836_21625 = G__21653;
count__20837_21626 = G__21654;
i__20838_21627 = G__21655;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21623);
}
}


var G__21657 = cljs.core.next(seq__20784_21615__$1);
var G__21658 = null;
var G__21659 = (0);
var G__21660 = (0);
seq__20784_21568 = G__21657;
chunk__20786_21569 = G__21658;
count__20787_21570 = G__21659;
i__20788_21571 = G__21660;
continue;
} else {
var G__21661 = cljs.core.next(seq__20784_21615__$1);
var G__21662 = null;
var G__21663 = (0);
var G__21664 = (0);
seq__20784_21568 = G__21661;
chunk__20786_21569 = G__21662;
count__20787_21570 = G__21663;
i__20788_21571 = G__21664;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21670 = arguments.length;
var i__5770__auto___21671 = (0);
while(true){
if((i__5770__auto___21671 < len__5769__auto___21670)){
args__5775__auto__.push((arguments[i__5770__auto___21671]));

var G__21672 = (i__5770__auto___21671 + (1));
i__5770__auto___21671 = G__21672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20858){
var G__20859 = cljs.core.first(seq20858);
var seq20858__$1 = cljs.core.next(seq20858);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20859,seq20858__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20871 = arguments.length;
switch (G__20871) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17676__auto___21681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_20883){
var state_val_20884 = (state_20883[(1)]);
if((state_val_20884 === (1))){
var state_20883__$1 = state_20883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20883__$1,(2),once_or_cleanup);
} else {
if((state_val_20884 === (2))){
var inst_20880 = (state_20883[(2)]);
var inst_20881 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20883__$1 = (function (){var statearr_20890 = state_20883;
(statearr_20890[(7)] = inst_20880);

return statearr_20890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20883__$1,inst_20881);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17491__auto__ = null;
var shadow$dom$state_machine__17491__auto____0 = (function (){
var statearr_20892 = [null,null,null,null,null,null,null,null];
(statearr_20892[(0)] = shadow$dom$state_machine__17491__auto__);

(statearr_20892[(1)] = (1));

return statearr_20892;
});
var shadow$dom$state_machine__17491__auto____1 = (function (state_20883){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_20883);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e20893){var ex__17494__auto__ = e20893;
var statearr_20895_21686 = state_20883;
(statearr_20895_21686[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_20883[(4)]))){
var statearr_20896_21687 = state_20883;
(statearr_20896_21687[(1)] = cljs.core.first((state_20883[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21691 = state_20883;
state_20883 = G__21691;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
shadow$dom$state_machine__17491__auto__ = function(state_20883){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17491__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17491__auto____1.call(this,state_20883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17491__auto____0;
shadow$dom$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17491__auto____1;
return shadow$dom$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_20900 = f__17678__auto__();
(statearr_20900[(6)] = c__17676__auto___21681);

return statearr_20900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
