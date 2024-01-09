goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18113,res){
var map__18114 = p__18113;
var map__18114__$1 = cljs.core.__destructure_map(map__18114);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18114__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18114__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18115 = res;
var G__18115__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18115,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18115);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18115__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18115__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18121 = arguments.length;
switch (G__18121) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18143,msg,handlers,timeout_after_ms){
var map__18149 = p__18143;
var map__18149__$1 = cljs.core.__destructure_map(map__18149);
var runtime = map__18149__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18149__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18354 = arguments.length;
var i__5770__auto___18355 = (0);
while(true){
if((i__5770__auto___18355 < len__5769__auto___18354)){
args__5775__auto__.push((arguments[i__5770__auto___18355]));

var G__18356 = (i__5770__auto___18355 + (1));
i__5770__auto___18355 = G__18356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18179,ev,args){
var map__18180 = p__18179;
var map__18180__$1 = cljs.core.__destructure_map(map__18180);
var runtime = map__18180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18183 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18186 = null;
var count__18187 = (0);
var i__18188 = (0);
while(true){
if((i__18188 < count__18187)){
var ext = chunk__18186.cljs$core$IIndexed$_nth$arity$2(null,i__18188);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18359 = seq__18183;
var G__18360 = chunk__18186;
var G__18361 = count__18187;
var G__18362 = (i__18188 + (1));
seq__18183 = G__18359;
chunk__18186 = G__18360;
count__18187 = G__18361;
i__18188 = G__18362;
continue;
} else {
var G__18363 = seq__18183;
var G__18364 = chunk__18186;
var G__18365 = count__18187;
var G__18366 = (i__18188 + (1));
seq__18183 = G__18363;
chunk__18186 = G__18364;
count__18187 = G__18365;
i__18188 = G__18366;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18183);
if(temp__5804__auto__){
var seq__18183__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18183__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18183__$1);
var G__18367 = cljs.core.chunk_rest(seq__18183__$1);
var G__18368 = c__5568__auto__;
var G__18369 = cljs.core.count(c__5568__auto__);
var G__18370 = (0);
seq__18183 = G__18367;
chunk__18186 = G__18368;
count__18187 = G__18369;
i__18188 = G__18370;
continue;
} else {
var ext = cljs.core.first(seq__18183__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18372 = cljs.core.next(seq__18183__$1);
var G__18373 = null;
var G__18374 = (0);
var G__18375 = (0);
seq__18183 = G__18372;
chunk__18186 = G__18373;
count__18187 = G__18374;
i__18188 = G__18375;
continue;
} else {
var G__18376 = cljs.core.next(seq__18183__$1);
var G__18377 = null;
var G__18378 = (0);
var G__18379 = (0);
seq__18183 = G__18376;
chunk__18186 = G__18377;
count__18187 = G__18378;
i__18188 = G__18379;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18152){
var G__18153 = cljs.core.first(seq18152);
var seq18152__$1 = cljs.core.next(seq18152);
var G__18154 = cljs.core.first(seq18152__$1);
var seq18152__$2 = cljs.core.next(seq18152__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18153,G__18154,seq18152__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18218,p__18219){
var map__18220 = p__18218;
var map__18220__$1 = cljs.core.__destructure_map(map__18220);
var runtime = map__18220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18221 = p__18219;
var map__18221__$1 = cljs.core.__destructure_map(map__18221);
var msg = map__18221__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18221__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__18223 = cljs.core.deref(state_ref);
var map__18223__$1 = cljs.core.__destructure_map(map__18223);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18223__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18223__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18224){
var map__18225 = p__18224;
var map__18225__$1 = cljs.core.__destructure_map(map__18225);
var runtime = map__18225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18232,msg){
var map__18233 = p__18232;
var map__18233__$1 = cljs.core.__destructure_map(map__18233);
var runtime = map__18233__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18271,key,p__18272){
var map__18273 = p__18271;
var map__18273__$1 = cljs.core.__destructure_map(map__18273);
var state = map__18273__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18273__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18274 = p__18272;
var map__18274__$1 = cljs.core.__destructure_map(map__18274);
var spec = map__18274__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18274__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18278,key,spec){
var map__18280 = p__18278;
var map__18280__$1 = cljs.core.__destructure_map(map__18280);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18283_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18283_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18284_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18284_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18285_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18285_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18286_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18286_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18287_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18287_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18291,key){
var map__18292 = p__18291;
var map__18292__$1 = cljs.core.__destructure_map(map__18292);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18292__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18294,msg){
var map__18295 = p__18294;
var map__18295__$1 = cljs.core.__destructure_map(map__18295);
var runtime = map__18295__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18295__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18299,p__18300){
var map__18301 = p__18299;
var map__18301__$1 = cljs.core.__destructure_map(map__18301);
var runtime = map__18301__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18302 = p__18300;
var map__18302__$1 = cljs.core.__destructure_map(map__18302);
var msg = map__18302__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18309 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18311 = null;
var count__18312 = (0);
var i__18313 = (0);
while(true){
if((i__18313 < count__18312)){
var map__18320 = chunk__18311.cljs$core$IIndexed$_nth$arity$2(null,i__18313);
var map__18320__$1 = cljs.core.__destructure_map(map__18320);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18320__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18403 = seq__18309;
var G__18404 = chunk__18311;
var G__18405 = count__18312;
var G__18406 = (i__18313 + (1));
seq__18309 = G__18403;
chunk__18311 = G__18404;
count__18312 = G__18405;
i__18313 = G__18406;
continue;
} else {
var G__18407 = seq__18309;
var G__18408 = chunk__18311;
var G__18409 = count__18312;
var G__18410 = (i__18313 + (1));
seq__18309 = G__18407;
chunk__18311 = G__18408;
count__18312 = G__18409;
i__18313 = G__18410;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18309);
if(temp__5804__auto__){
var seq__18309__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18309__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18309__$1);
var G__18411 = cljs.core.chunk_rest(seq__18309__$1);
var G__18412 = c__5568__auto__;
var G__18413 = cljs.core.count(c__5568__auto__);
var G__18414 = (0);
seq__18309 = G__18411;
chunk__18311 = G__18412;
count__18312 = G__18413;
i__18313 = G__18414;
continue;
} else {
var map__18333 = cljs.core.first(seq__18309__$1);
var map__18333__$1 = cljs.core.__destructure_map(map__18333);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18418 = cljs.core.next(seq__18309__$1);
var G__18419 = null;
var G__18420 = (0);
var G__18421 = (0);
seq__18309 = G__18418;
chunk__18311 = G__18419;
count__18312 = G__18420;
i__18313 = G__18421;
continue;
} else {
var G__18423 = cljs.core.next(seq__18309__$1);
var G__18424 = null;
var G__18425 = (0);
var G__18426 = (0);
seq__18309 = G__18423;
chunk__18311 = G__18424;
count__18312 = G__18425;
i__18313 = G__18426;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
