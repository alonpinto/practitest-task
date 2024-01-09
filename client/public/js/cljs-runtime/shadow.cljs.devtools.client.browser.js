goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23071 = arguments.length;
var i__5770__auto___23072 = (0);
while(true){
if((i__5770__auto___23072 < len__5769__auto___23071)){
args__5775__auto__.push((arguments[i__5770__auto___23072]));

var G__23073 = (i__5770__auto___23072 + (1));
i__5770__auto___23072 = G__23073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22673){
var G__22674 = cljs.core.first(seq22673);
var seq22673__$1 = cljs.core.next(seq22673);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22674,seq22673__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22675 = cljs.core.seq(sources);
var chunk__22676 = null;
var count__22677 = (0);
var i__22678 = (0);
while(true){
if((i__22678 < count__22677)){
var map__22688 = chunk__22676.cljs$core$IIndexed$_nth$arity$2(null,i__22678);
var map__22688__$1 = cljs.core.__destructure_map(map__22688);
var src = map__22688__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22689){var e_23074 = e22689;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23074);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23074.message)].join('')));
}

var G__23075 = seq__22675;
var G__23076 = chunk__22676;
var G__23077 = count__22677;
var G__23078 = (i__22678 + (1));
seq__22675 = G__23075;
chunk__22676 = G__23076;
count__22677 = G__23077;
i__22678 = G__23078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22675);
if(temp__5804__auto__){
var seq__22675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22675__$1);
var G__23079 = cljs.core.chunk_rest(seq__22675__$1);
var G__23080 = c__5568__auto__;
var G__23081 = cljs.core.count(c__5568__auto__);
var G__23082 = (0);
seq__22675 = G__23079;
chunk__22676 = G__23080;
count__22677 = G__23081;
i__22678 = G__23082;
continue;
} else {
var map__22690 = cljs.core.first(seq__22675__$1);
var map__22690__$1 = cljs.core.__destructure_map(map__22690);
var src = map__22690__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22691){var e_23083 = e22691;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23083);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23083.message)].join('')));
}

var G__23084 = cljs.core.next(seq__22675__$1);
var G__23085 = null;
var G__23086 = (0);
var G__23087 = (0);
seq__22675 = G__23084;
chunk__22676 = G__23085;
count__22677 = G__23086;
i__22678 = G__23087;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22692 = cljs.core.seq(js_requires);
var chunk__22693 = null;
var count__22694 = (0);
var i__22695 = (0);
while(true){
if((i__22695 < count__22694)){
var js_ns = chunk__22693.cljs$core$IIndexed$_nth$arity$2(null,i__22695);
var require_str_23088 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23088);


var G__23089 = seq__22692;
var G__23090 = chunk__22693;
var G__23091 = count__22694;
var G__23092 = (i__22695 + (1));
seq__22692 = G__23089;
chunk__22693 = G__23090;
count__22694 = G__23091;
i__22695 = G__23092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22692);
if(temp__5804__auto__){
var seq__22692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22692__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22692__$1);
var G__23093 = cljs.core.chunk_rest(seq__22692__$1);
var G__23094 = c__5568__auto__;
var G__23095 = cljs.core.count(c__5568__auto__);
var G__23096 = (0);
seq__22692 = G__23093;
chunk__22693 = G__23094;
count__22694 = G__23095;
i__22695 = G__23096;
continue;
} else {
var js_ns = cljs.core.first(seq__22692__$1);
var require_str_23097 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23097);


var G__23098 = cljs.core.next(seq__22692__$1);
var G__23099 = null;
var G__23100 = (0);
var G__23101 = (0);
seq__22692 = G__23098;
chunk__22693 = G__23099;
count__22694 = G__23100;
i__22695 = G__23101;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22699){
var map__22700 = p__22699;
var map__22700__$1 = cljs.core.__destructure_map(map__22700);
var msg = map__22700__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22701(s__22702){
return (new cljs.core.LazySeq(null,(function (){
var s__22702__$1 = s__22702;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22702__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22707 = cljs.core.first(xs__6360__auto__);
var map__22707__$1 = cljs.core.__destructure_map(map__22707);
var src = map__22707__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22702__$1,map__22707,map__22707__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22700,map__22700__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22701_$_iter__22703(s__22704){
return (new cljs.core.LazySeq(null,((function (s__22702__$1,map__22707,map__22707__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22700,map__22700__$1,msg,info,reload_info){
return (function (){
var s__22704__$1 = s__22704;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22704__$1);
if(temp__5804__auto____$1){
var s__22704__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22704__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22704__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22706 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22705 = (0);
while(true){
if((i__22705 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22705);
cljs.core.chunk_append(b__22706,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23102 = (i__22705 + (1));
i__22705 = G__23102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22706),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22701_$_iter__22703(cljs.core.chunk_rest(s__22704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22706),null);
}
} else {
var warning = cljs.core.first(s__22704__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22701_$_iter__22703(cljs.core.rest(s__22704__$2)));
}
} else {
return null;
}
break;
}
});})(s__22702__$1,map__22707,map__22707__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22700,map__22700__$1,msg,info,reload_info))
,null,null));
});})(s__22702__$1,map__22707,map__22707__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22700,map__22700__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22701(cljs.core.rest(s__22702__$1)));
} else {
var G__23103 = cljs.core.rest(s__22702__$1);
s__22702__$1 = G__23103;
continue;
}
} else {
var G__23104 = cljs.core.rest(s__22702__$1);
s__22702__$1 = G__23104;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22710_23105 = cljs.core.seq(warnings);
var chunk__22711_23106 = null;
var count__22712_23107 = (0);
var i__22713_23108 = (0);
while(true){
if((i__22713_23108 < count__22712_23107)){
var map__22716_23109 = chunk__22711_23106.cljs$core$IIndexed$_nth$arity$2(null,i__22713_23108);
var map__22716_23110__$1 = cljs.core.__destructure_map(map__22716_23109);
var w_23111 = map__22716_23110__$1;
var msg_23112__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_23110__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_23110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_23110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_23110__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23115)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23113),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23114),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23112__$1)].join(''));


var G__23117 = seq__22710_23105;
var G__23118 = chunk__22711_23106;
var G__23119 = count__22712_23107;
var G__23120 = (i__22713_23108 + (1));
seq__22710_23105 = G__23117;
chunk__22711_23106 = G__23118;
count__22712_23107 = G__23119;
i__22713_23108 = G__23120;
continue;
} else {
var temp__5804__auto___23121 = cljs.core.seq(seq__22710_23105);
if(temp__5804__auto___23121){
var seq__22710_23122__$1 = temp__5804__auto___23121;
if(cljs.core.chunked_seq_QMARK_(seq__22710_23122__$1)){
var c__5568__auto___23123 = cljs.core.chunk_first(seq__22710_23122__$1);
var G__23124 = cljs.core.chunk_rest(seq__22710_23122__$1);
var G__23125 = c__5568__auto___23123;
var G__23126 = cljs.core.count(c__5568__auto___23123);
var G__23127 = (0);
seq__22710_23105 = G__23124;
chunk__22711_23106 = G__23125;
count__22712_23107 = G__23126;
i__22713_23108 = G__23127;
continue;
} else {
var map__22718_23128 = cljs.core.first(seq__22710_23122__$1);
var map__22718_23129__$1 = cljs.core.__destructure_map(map__22718_23128);
var w_23130 = map__22718_23129__$1;
var msg_23131__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22718_23129__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22718_23129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22718_23129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22718_23129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23134)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23132),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23133),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23131__$1)].join(''));


var G__23135 = cljs.core.next(seq__22710_23122__$1);
var G__23136 = null;
var G__23137 = (0);
var G__23138 = (0);
seq__22710_23105 = G__23135;
chunk__22711_23106 = G__23136;
count__22712_23107 = G__23137;
i__22713_23108 = G__23138;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22698_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22698_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22719){
var map__22720 = p__22719;
var map__22720__$1 = cljs.core.__destructure_map(map__22720);
var msg = map__22720__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22721 = cljs.core.seq(updates);
var chunk__22723 = null;
var count__22724 = (0);
var i__22725 = (0);
while(true){
if((i__22725 < count__22724)){
var path = chunk__22723.cljs$core$IIndexed$_nth$arity$2(null,i__22725);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22895_23142 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22899_23143 = null;
var count__22900_23144 = (0);
var i__22901_23145 = (0);
while(true){
if((i__22901_23145 < count__22900_23144)){
var node_23149 = chunk__22899_23143.cljs$core$IIndexed$_nth$arity$2(null,i__22901_23145);
if(cljs.core.not(node_23149.shadow$old)){
var path_match_23150 = shadow.cljs.devtools.client.browser.match_paths(node_23149.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23150)){
var new_link_23151 = (function (){var G__22937 = node_23149.cloneNode(true);
G__22937.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23150),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22937;
})();
(node_23149.shadow$old = true);

(new_link_23151.onload = ((function (seq__22895_23142,chunk__22899_23143,count__22900_23144,i__22901_23145,seq__22721,chunk__22723,count__22724,i__22725,new_link_23151,path_match_23150,node_23149,path,map__22720,map__22720__$1,msg,updates,reload_info){
return (function (e){
var seq__22938_23152 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22940_23153 = null;
var count__22941_23154 = (0);
var i__22942_23155 = (0);
while(true){
if((i__22942_23155 < count__22941_23154)){
var map__22952_23156 = chunk__22940_23153.cljs$core$IIndexed$_nth$arity$2(null,i__22942_23155);
var map__22952_23157__$1 = cljs.core.__destructure_map(map__22952_23156);
var task_23158 = map__22952_23157__$1;
var fn_str_23159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_23157__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_23157__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23161 = goog.getObjectByName(fn_str_23159,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23160)].join(''));

(fn_obj_23161.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23161.cljs$core$IFn$_invoke$arity$2(path,new_link_23151) : fn_obj_23161.call(null,path,new_link_23151));


var G__23162 = seq__22938_23152;
var G__23163 = chunk__22940_23153;
var G__23164 = count__22941_23154;
var G__23165 = (i__22942_23155 + (1));
seq__22938_23152 = G__23162;
chunk__22940_23153 = G__23163;
count__22941_23154 = G__23164;
i__22942_23155 = G__23165;
continue;
} else {
var temp__5804__auto___23166 = cljs.core.seq(seq__22938_23152);
if(temp__5804__auto___23166){
var seq__22938_23167__$1 = temp__5804__auto___23166;
if(cljs.core.chunked_seq_QMARK_(seq__22938_23167__$1)){
var c__5568__auto___23168 = cljs.core.chunk_first(seq__22938_23167__$1);
var G__23169 = cljs.core.chunk_rest(seq__22938_23167__$1);
var G__23170 = c__5568__auto___23168;
var G__23171 = cljs.core.count(c__5568__auto___23168);
var G__23172 = (0);
seq__22938_23152 = G__23169;
chunk__22940_23153 = G__23170;
count__22941_23154 = G__23171;
i__22942_23155 = G__23172;
continue;
} else {
var map__22953_23173 = cljs.core.first(seq__22938_23167__$1);
var map__22953_23174__$1 = cljs.core.__destructure_map(map__22953_23173);
var task_23175 = map__22953_23174__$1;
var fn_str_23176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23174__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953_23174__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23178 = goog.getObjectByName(fn_str_23176,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23177)].join(''));

(fn_obj_23178.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23178.cljs$core$IFn$_invoke$arity$2(path,new_link_23151) : fn_obj_23178.call(null,path,new_link_23151));


var G__23179 = cljs.core.next(seq__22938_23167__$1);
var G__23180 = null;
var G__23181 = (0);
var G__23182 = (0);
seq__22938_23152 = G__23179;
chunk__22940_23153 = G__23180;
count__22941_23154 = G__23181;
i__22942_23155 = G__23182;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23149);
});})(seq__22895_23142,chunk__22899_23143,count__22900_23144,i__22901_23145,seq__22721,chunk__22723,count__22724,i__22725,new_link_23151,path_match_23150,node_23149,path,map__22720,map__22720__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23150], 0));

goog.dom.insertSiblingAfter(new_link_23151,node_23149);


var G__23183 = seq__22895_23142;
var G__23184 = chunk__22899_23143;
var G__23185 = count__22900_23144;
var G__23186 = (i__22901_23145 + (1));
seq__22895_23142 = G__23183;
chunk__22899_23143 = G__23184;
count__22900_23144 = G__23185;
i__22901_23145 = G__23186;
continue;
} else {
var G__23187 = seq__22895_23142;
var G__23188 = chunk__22899_23143;
var G__23189 = count__22900_23144;
var G__23190 = (i__22901_23145 + (1));
seq__22895_23142 = G__23187;
chunk__22899_23143 = G__23188;
count__22900_23144 = G__23189;
i__22901_23145 = G__23190;
continue;
}
} else {
var G__23191 = seq__22895_23142;
var G__23192 = chunk__22899_23143;
var G__23193 = count__22900_23144;
var G__23194 = (i__22901_23145 + (1));
seq__22895_23142 = G__23191;
chunk__22899_23143 = G__23192;
count__22900_23144 = G__23193;
i__22901_23145 = G__23194;
continue;
}
} else {
var temp__5804__auto___23195 = cljs.core.seq(seq__22895_23142);
if(temp__5804__auto___23195){
var seq__22895_23196__$1 = temp__5804__auto___23195;
if(cljs.core.chunked_seq_QMARK_(seq__22895_23196__$1)){
var c__5568__auto___23197 = cljs.core.chunk_first(seq__22895_23196__$1);
var G__23198 = cljs.core.chunk_rest(seq__22895_23196__$1);
var G__23199 = c__5568__auto___23197;
var G__23200 = cljs.core.count(c__5568__auto___23197);
var G__23201 = (0);
seq__22895_23142 = G__23198;
chunk__22899_23143 = G__23199;
count__22900_23144 = G__23200;
i__22901_23145 = G__23201;
continue;
} else {
var node_23202 = cljs.core.first(seq__22895_23196__$1);
if(cljs.core.not(node_23202.shadow$old)){
var path_match_23203 = shadow.cljs.devtools.client.browser.match_paths(node_23202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23203)){
var new_link_23204 = (function (){var G__22955 = node_23202.cloneNode(true);
G__22955.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22955;
})();
(node_23202.shadow$old = true);

(new_link_23204.onload = ((function (seq__22895_23142,chunk__22899_23143,count__22900_23144,i__22901_23145,seq__22721,chunk__22723,count__22724,i__22725,new_link_23204,path_match_23203,node_23202,seq__22895_23196__$1,temp__5804__auto___23195,path,map__22720,map__22720__$1,msg,updates,reload_info){
return (function (e){
var seq__22956_23208 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22958_23209 = null;
var count__22959_23210 = (0);
var i__22960_23211 = (0);
while(true){
if((i__22960_23211 < count__22959_23210)){
var map__22965_23213 = chunk__22958_23209.cljs$core$IIndexed$_nth$arity$2(null,i__22960_23211);
var map__22965_23214__$1 = cljs.core.__destructure_map(map__22965_23213);
var task_23215 = map__22965_23214__$1;
var fn_str_23216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965_23214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965_23214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23218 = goog.getObjectByName(fn_str_23216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23217)].join(''));

(fn_obj_23218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23218.cljs$core$IFn$_invoke$arity$2(path,new_link_23204) : fn_obj_23218.call(null,path,new_link_23204));


var G__23219 = seq__22956_23208;
var G__23220 = chunk__22958_23209;
var G__23221 = count__22959_23210;
var G__23222 = (i__22960_23211 + (1));
seq__22956_23208 = G__23219;
chunk__22958_23209 = G__23220;
count__22959_23210 = G__23221;
i__22960_23211 = G__23222;
continue;
} else {
var temp__5804__auto___23223__$1 = cljs.core.seq(seq__22956_23208);
if(temp__5804__auto___23223__$1){
var seq__22956_23224__$1 = temp__5804__auto___23223__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22956_23224__$1)){
var c__5568__auto___23225 = cljs.core.chunk_first(seq__22956_23224__$1);
var G__23227 = cljs.core.chunk_rest(seq__22956_23224__$1);
var G__23228 = c__5568__auto___23225;
var G__23229 = cljs.core.count(c__5568__auto___23225);
var G__23230 = (0);
seq__22956_23208 = G__23227;
chunk__22958_23209 = G__23228;
count__22959_23210 = G__23229;
i__22960_23211 = G__23230;
continue;
} else {
var map__22966_23231 = cljs.core.first(seq__22956_23224__$1);
var map__22966_23232__$1 = cljs.core.__destructure_map(map__22966_23231);
var task_23233 = map__22966_23232__$1;
var fn_str_23234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22966_23232__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22966_23232__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23236 = goog.getObjectByName(fn_str_23234,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23235)].join(''));

(fn_obj_23236.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23236.cljs$core$IFn$_invoke$arity$2(path,new_link_23204) : fn_obj_23236.call(null,path,new_link_23204));


var G__23237 = cljs.core.next(seq__22956_23224__$1);
var G__23238 = null;
var G__23239 = (0);
var G__23240 = (0);
seq__22956_23208 = G__23237;
chunk__22958_23209 = G__23238;
count__22959_23210 = G__23239;
i__22960_23211 = G__23240;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23202);
});})(seq__22895_23142,chunk__22899_23143,count__22900_23144,i__22901_23145,seq__22721,chunk__22723,count__22724,i__22725,new_link_23204,path_match_23203,node_23202,seq__22895_23196__$1,temp__5804__auto___23195,path,map__22720,map__22720__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23203], 0));

goog.dom.insertSiblingAfter(new_link_23204,node_23202);


var G__23243 = cljs.core.next(seq__22895_23196__$1);
var G__23244 = null;
var G__23245 = (0);
var G__23246 = (0);
seq__22895_23142 = G__23243;
chunk__22899_23143 = G__23244;
count__22900_23144 = G__23245;
i__22901_23145 = G__23246;
continue;
} else {
var G__23247 = cljs.core.next(seq__22895_23196__$1);
var G__23248 = null;
var G__23249 = (0);
var G__23250 = (0);
seq__22895_23142 = G__23247;
chunk__22899_23143 = G__23248;
count__22900_23144 = G__23249;
i__22901_23145 = G__23250;
continue;
}
} else {
var G__23251 = cljs.core.next(seq__22895_23196__$1);
var G__23252 = null;
var G__23253 = (0);
var G__23254 = (0);
seq__22895_23142 = G__23251;
chunk__22899_23143 = G__23252;
count__22900_23144 = G__23253;
i__22901_23145 = G__23254;
continue;
}
}
} else {
}
}
break;
}


var G__23255 = seq__22721;
var G__23256 = chunk__22723;
var G__23257 = count__22724;
var G__23258 = (i__22725 + (1));
seq__22721 = G__23255;
chunk__22723 = G__23256;
count__22724 = G__23257;
i__22725 = G__23258;
continue;
} else {
var G__23259 = seq__22721;
var G__23260 = chunk__22723;
var G__23261 = count__22724;
var G__23262 = (i__22725 + (1));
seq__22721 = G__23259;
chunk__22723 = G__23260;
count__22724 = G__23261;
i__22725 = G__23262;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22721);
if(temp__5804__auto__){
var seq__22721__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22721__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22721__$1);
var G__23264 = cljs.core.chunk_rest(seq__22721__$1);
var G__23265 = c__5568__auto__;
var G__23266 = cljs.core.count(c__5568__auto__);
var G__23267 = (0);
seq__22721 = G__23264;
chunk__22723 = G__23265;
count__22724 = G__23266;
i__22725 = G__23267;
continue;
} else {
var path = cljs.core.first(seq__22721__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22967_23268 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22971_23269 = null;
var count__22972_23270 = (0);
var i__22973_23271 = (0);
while(true){
if((i__22973_23271 < count__22972_23270)){
var node_23272 = chunk__22971_23269.cljs$core$IIndexed$_nth$arity$2(null,i__22973_23271);
if(cljs.core.not(node_23272.shadow$old)){
var path_match_23273 = shadow.cljs.devtools.client.browser.match_paths(node_23272.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23273)){
var new_link_23274 = (function (){var G__23009 = node_23272.cloneNode(true);
G__23009.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23273),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23009;
})();
(node_23272.shadow$old = true);

(new_link_23274.onload = ((function (seq__22967_23268,chunk__22971_23269,count__22972_23270,i__22973_23271,seq__22721,chunk__22723,count__22724,i__22725,new_link_23274,path_match_23273,node_23272,path,seq__22721__$1,temp__5804__auto__,map__22720,map__22720__$1,msg,updates,reload_info){
return (function (e){
var seq__23010_23275 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23012_23276 = null;
var count__23013_23277 = (0);
var i__23014_23278 = (0);
while(true){
if((i__23014_23278 < count__23013_23277)){
var map__23019_23279 = chunk__23012_23276.cljs$core$IIndexed$_nth$arity$2(null,i__23014_23278);
var map__23019_23280__$1 = cljs.core.__destructure_map(map__23019_23279);
var task_23281 = map__23019_23280__$1;
var fn_str_23282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019_23280__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019_23280__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23284 = goog.getObjectByName(fn_str_23282,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23283)].join(''));

(fn_obj_23284.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23284.cljs$core$IFn$_invoke$arity$2(path,new_link_23274) : fn_obj_23284.call(null,path,new_link_23274));


var G__23285 = seq__23010_23275;
var G__23286 = chunk__23012_23276;
var G__23287 = count__23013_23277;
var G__23288 = (i__23014_23278 + (1));
seq__23010_23275 = G__23285;
chunk__23012_23276 = G__23286;
count__23013_23277 = G__23287;
i__23014_23278 = G__23288;
continue;
} else {
var temp__5804__auto___23289__$1 = cljs.core.seq(seq__23010_23275);
if(temp__5804__auto___23289__$1){
var seq__23010_23290__$1 = temp__5804__auto___23289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23010_23290__$1)){
var c__5568__auto___23292 = cljs.core.chunk_first(seq__23010_23290__$1);
var G__23294 = cljs.core.chunk_rest(seq__23010_23290__$1);
var G__23295 = c__5568__auto___23292;
var G__23296 = cljs.core.count(c__5568__auto___23292);
var G__23297 = (0);
seq__23010_23275 = G__23294;
chunk__23012_23276 = G__23295;
count__23013_23277 = G__23296;
i__23014_23278 = G__23297;
continue;
} else {
var map__23022_23299 = cljs.core.first(seq__23010_23290__$1);
var map__23022_23300__$1 = cljs.core.__destructure_map(map__23022_23299);
var task_23301 = map__23022_23300__$1;
var fn_str_23302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022_23300__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022_23300__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23304 = goog.getObjectByName(fn_str_23302,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23303)].join(''));

(fn_obj_23304.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23304.cljs$core$IFn$_invoke$arity$2(path,new_link_23274) : fn_obj_23304.call(null,path,new_link_23274));


var G__23305 = cljs.core.next(seq__23010_23290__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__23010_23275 = G__23305;
chunk__23012_23276 = G__23306;
count__23013_23277 = G__23307;
i__23014_23278 = G__23308;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23272);
});})(seq__22967_23268,chunk__22971_23269,count__22972_23270,i__22973_23271,seq__22721,chunk__22723,count__22724,i__22725,new_link_23274,path_match_23273,node_23272,path,seq__22721__$1,temp__5804__auto__,map__22720,map__22720__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23273], 0));

goog.dom.insertSiblingAfter(new_link_23274,node_23272);


var G__23309 = seq__22967_23268;
var G__23310 = chunk__22971_23269;
var G__23311 = count__22972_23270;
var G__23312 = (i__22973_23271 + (1));
seq__22967_23268 = G__23309;
chunk__22971_23269 = G__23310;
count__22972_23270 = G__23311;
i__22973_23271 = G__23312;
continue;
} else {
var G__23314 = seq__22967_23268;
var G__23315 = chunk__22971_23269;
var G__23316 = count__22972_23270;
var G__23317 = (i__22973_23271 + (1));
seq__22967_23268 = G__23314;
chunk__22971_23269 = G__23315;
count__22972_23270 = G__23316;
i__22973_23271 = G__23317;
continue;
}
} else {
var G__23319 = seq__22967_23268;
var G__23320 = chunk__22971_23269;
var G__23321 = count__22972_23270;
var G__23322 = (i__22973_23271 + (1));
seq__22967_23268 = G__23319;
chunk__22971_23269 = G__23320;
count__22972_23270 = G__23321;
i__22973_23271 = G__23322;
continue;
}
} else {
var temp__5804__auto___23324__$1 = cljs.core.seq(seq__22967_23268);
if(temp__5804__auto___23324__$1){
var seq__22967_23325__$1 = temp__5804__auto___23324__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22967_23325__$1)){
var c__5568__auto___23326 = cljs.core.chunk_first(seq__22967_23325__$1);
var G__23327 = cljs.core.chunk_rest(seq__22967_23325__$1);
var G__23328 = c__5568__auto___23326;
var G__23329 = cljs.core.count(c__5568__auto___23326);
var G__23330 = (0);
seq__22967_23268 = G__23327;
chunk__22971_23269 = G__23328;
count__22972_23270 = G__23329;
i__22973_23271 = G__23330;
continue;
} else {
var node_23331 = cljs.core.first(seq__22967_23325__$1);
if(cljs.core.not(node_23331.shadow$old)){
var path_match_23332 = shadow.cljs.devtools.client.browser.match_paths(node_23331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23332)){
var new_link_23333 = (function (){var G__23023 = node_23331.cloneNode(true);
G__23023.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23332),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23023;
})();
(node_23331.shadow$old = true);

(new_link_23333.onload = ((function (seq__22967_23268,chunk__22971_23269,count__22972_23270,i__22973_23271,seq__22721,chunk__22723,count__22724,i__22725,new_link_23333,path_match_23332,node_23331,seq__22967_23325__$1,temp__5804__auto___23324__$1,path,seq__22721__$1,temp__5804__auto__,map__22720,map__22720__$1,msg,updates,reload_info){
return (function (e){
var seq__23028_23334 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23030_23335 = null;
var count__23031_23336 = (0);
var i__23032_23337 = (0);
while(true){
if((i__23032_23337 < count__23031_23336)){
var map__23036_23338 = chunk__23030_23335.cljs$core$IIndexed$_nth$arity$2(null,i__23032_23337);
var map__23036_23339__$1 = cljs.core.__destructure_map(map__23036_23338);
var task_23340 = map__23036_23339__$1;
var fn_str_23341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23036_23339__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23036_23339__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23343 = goog.getObjectByName(fn_str_23341,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23342)].join(''));

(fn_obj_23343.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23343.cljs$core$IFn$_invoke$arity$2(path,new_link_23333) : fn_obj_23343.call(null,path,new_link_23333));


var G__23344 = seq__23028_23334;
var G__23345 = chunk__23030_23335;
var G__23346 = count__23031_23336;
var G__23347 = (i__23032_23337 + (1));
seq__23028_23334 = G__23344;
chunk__23030_23335 = G__23345;
count__23031_23336 = G__23346;
i__23032_23337 = G__23347;
continue;
} else {
var temp__5804__auto___23348__$2 = cljs.core.seq(seq__23028_23334);
if(temp__5804__auto___23348__$2){
var seq__23028_23349__$1 = temp__5804__auto___23348__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23028_23349__$1)){
var c__5568__auto___23350 = cljs.core.chunk_first(seq__23028_23349__$1);
var G__23351 = cljs.core.chunk_rest(seq__23028_23349__$1);
var G__23352 = c__5568__auto___23350;
var G__23353 = cljs.core.count(c__5568__auto___23350);
var G__23354 = (0);
seq__23028_23334 = G__23351;
chunk__23030_23335 = G__23352;
count__23031_23336 = G__23353;
i__23032_23337 = G__23354;
continue;
} else {
var map__23038_23355 = cljs.core.first(seq__23028_23349__$1);
var map__23038_23356__$1 = cljs.core.__destructure_map(map__23038_23355);
var task_23357 = map__23038_23356__$1;
var fn_str_23358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038_23356__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038_23356__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23360 = goog.getObjectByName(fn_str_23358,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23359)].join(''));

(fn_obj_23360.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23360.cljs$core$IFn$_invoke$arity$2(path,new_link_23333) : fn_obj_23360.call(null,path,new_link_23333));


var G__23361 = cljs.core.next(seq__23028_23349__$1);
var G__23362 = null;
var G__23363 = (0);
var G__23364 = (0);
seq__23028_23334 = G__23361;
chunk__23030_23335 = G__23362;
count__23031_23336 = G__23363;
i__23032_23337 = G__23364;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23331);
});})(seq__22967_23268,chunk__22971_23269,count__22972_23270,i__22973_23271,seq__22721,chunk__22723,count__22724,i__22725,new_link_23333,path_match_23332,node_23331,seq__22967_23325__$1,temp__5804__auto___23324__$1,path,seq__22721__$1,temp__5804__auto__,map__22720,map__22720__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23332], 0));

goog.dom.insertSiblingAfter(new_link_23333,node_23331);


var G__23365 = cljs.core.next(seq__22967_23325__$1);
var G__23366 = null;
var G__23367 = (0);
var G__23368 = (0);
seq__22967_23268 = G__23365;
chunk__22971_23269 = G__23366;
count__22972_23270 = G__23367;
i__22973_23271 = G__23368;
continue;
} else {
var G__23369 = cljs.core.next(seq__22967_23325__$1);
var G__23370 = null;
var G__23371 = (0);
var G__23372 = (0);
seq__22967_23268 = G__23369;
chunk__22971_23269 = G__23370;
count__22972_23270 = G__23371;
i__22973_23271 = G__23372;
continue;
}
} else {
var G__23373 = cljs.core.next(seq__22967_23325__$1);
var G__23374 = null;
var G__23375 = (0);
var G__23376 = (0);
seq__22967_23268 = G__23373;
chunk__22971_23269 = G__23374;
count__22972_23270 = G__23375;
i__22973_23271 = G__23376;
continue;
}
}
} else {
}
}
break;
}


var G__23377 = cljs.core.next(seq__22721__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__22721 = G__23377;
chunk__22723 = G__23378;
count__22724 = G__23379;
i__22725 = G__23380;
continue;
} else {
var G__23381 = cljs.core.next(seq__22721__$1);
var G__23382 = null;
var G__23383 = (0);
var G__23384 = (0);
seq__22721 = G__23381;
chunk__22723 = G__23382;
count__22724 = G__23383;
i__22725 = G__23384;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23042){
var map__23043 = p__23042;
var map__23043__$1 = cljs.core.__destructure_map(map__23043);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23043__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23047){
var map__23048 = p__23047;
var map__23048__$1 = cljs.core.__destructure_map(map__23048);
var _ = map__23048__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23049,done,error){
var map__23050 = p__23049;
var map__23050__$1 = cljs.core.__destructure_map(map__23050);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23050__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23053,done,error){
var map__23054 = p__23053;
var map__23054__$1 = cljs.core.__destructure_map(map__23054);
var msg = map__23054__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23055){
var map__23057 = p__23055;
var map__23057__$1 = cljs.core.__destructure_map(map__23057);
var src = map__23057__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23057__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23059 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23059) : done.call(null,G__23059));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23060){
var map__23061 = p__23060;
var map__23061__$1 = cljs.core.__destructure_map(map__23061);
var msg__$1 = map__23061__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23062){var ex = e23062;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23063){
var map__23064 = p__23063;
var map__23064__$1 = cljs.core.__destructure_map(map__23064);
var env = map__23064__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23064__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23067){
var map__23068 = p__23067;
var map__23068__$1 = cljs.core.__destructure_map(map__23068);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23068__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23068__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23069){
var map__23070 = p__23069;
var map__23070__$1 = cljs.core.__destructure_map(map__23070);
var svc = map__23070__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23070__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
