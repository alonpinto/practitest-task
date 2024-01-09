goog.provide('giggin.components.favorites_items');
giggin.components.favorites_items.favorites_items = (function giggin$components$favorites_items$favorites_items(){
var remove_from_order = (function (p1__17353_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.favorites,cljs.core.dissoc,p1__17353_SHARP_);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),((cljs.core.empty_QMARK_(cljs.core.deref(giggin.state.favorites)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty","div.empty",47401225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"You don't have any favorite"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtitle","div.subtitle",-1871234920),"Click on a button to add favorite"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtitle","div.subtitle",-1871234920),"favorites"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var iter__5523__auto__ = (function giggin$components$favorites_items$favorites_items_$_iter__17354(s__17355){
return (new cljs.core.LazySeq(null,(function (){
var s__17355__$1 = s__17355;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17355__$1);
if(temp__5804__auto__){
var s__17355__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17355__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17355__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17357 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17356 = (0);
while(true){
if((i__17356 < size__5522__auto__)){
var vec__17358 = cljs.core._nth(c__5521__auto__,i__17356);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(0),null);
cljs.core.chunk_append(b__17357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.font__small","div.item.font__small",-1521991110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17356,vec__17358,id,c__5521__auto__,size__5522__auto__,b__17357,s__17355__$2,temp__5804__auto__,remove_from_order){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(i__17356,vec__17358,id,c__5521__auto__,size__5522__auto__,b__17357,s__17355__$2,temp__5804__auto__,remove_from_order))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null)], null));

var G__17364 = (i__17356 + (1));
i__17356 = G__17364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17357),giggin$components$favorites_items$favorites_items_$_iter__17354(cljs.core.chunk_rest(s__17355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17357),null);
}
} else {
var vec__17361 = cljs.core.first(s__17355__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17361,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.font__small","div.item.font__small",-1521991110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__17361,id,s__17355__$2,temp__5804__auto__,remove_from_order){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(vec__17361,id,s__17355__$2,temp__5804__auto__,remove_from_order))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null)], null),giggin$components$favorites_items$favorites_items_$_iter__17354(cljs.core.rest(s__17355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(giggin.state.favorites));
})()], null)], null))], null);
});

//# sourceMappingURL=giggin.components.favorites_items.js.map
