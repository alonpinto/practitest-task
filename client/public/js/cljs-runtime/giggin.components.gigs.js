goog.provide('giggin.components.gigs');
giggin.components.gigs.gigs = (function giggin$components$gigs$gigs(){
var add_to_order = (function (p1__17201_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.orders,cljs.core.update,p1__17201_SHARP_,cljs.core.inc);
});
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"img","img",1442687358),"",new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),false], null));
var isEditMode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
var toggle_modal = (function (p__17202){
var map__17203 = p__17202;
var map__17203__$1 = cljs.core.__destructure_map(map__17203);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var gig = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"gig","gig",-702014211));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(isEditMode,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);

return cljs.core.reset_BANG_(values,gig);
});
var save_gig = (function (p__17204){
var map__17205 = p__17204;
var map__17205__$1 = cljs.core.__destructure_map(map__17205);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"price","price",22129180));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17205__$1,new cljs.core.Keyword(null,"artist","artist",152869709));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.gigs,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"desc","desc",2093485764),desc,new cljs.core.Keyword(null,"img","img",1442687358),img,new cljs.core.Keyword(null,"artist","artist",152869709),artist,new cljs.core.Keyword(null,"price","price",22129180),parseInt(price)], null));

return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"gig","gig",-702014211),cljs.core.PersistentArrayMap.EMPTY], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.edit_dlg.edit_dlg,isEditMode,values,save_gig,toggle_modal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),(function (){var iter__5523__auto__ = (function giggin$components$gigs$gigs_$_iter__17206(s__17207){
return (new cljs.core.LazySeq(null,(function (){
var s__17207__$1 = s__17207;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17207__$1);
if(temp__5804__auto__){
var s__17207__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17207__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17207__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17209 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17208 = (0);
while(true){
if((i__17208 < size__5522__auto__)){
var map__17210 = cljs.core._nth(c__5521__auto__,i__17208);
var map__17210__$1 = cljs.core.__destructure_map(map__17210);
var gig = map__17210__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17210__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17210__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17210__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17210__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__17209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),giggin.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.column.gap-2","p.column.gap-2",-41579250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/edit-246.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to Favorite",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/favorite-26.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--secondary.float--right.tooltip.hidden","div.btn.btn--secondary.float--right.tooltip.hidden",1251933877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return add_to_order(id);
});})(i__17208,map__17210,map__17210__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__17209,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null)], null)], null)], null)], null)], null)], null));

var G__17212 = (i__17208 + (1));
i__17208 = G__17212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17209),giggin$components$gigs$gigs_$_iter__17206(cljs.core.chunk_rest(s__17207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17209),null);
}
} else {
var map__17211 = cljs.core.first(s__17207__$2);
var map__17211__$1 = cljs.core.__destructure_map(map__17211);
var gig = map__17211__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),giggin.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.column.gap-2","p.column.gap-2",-41579250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/edit-246.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to Favorite",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/favorite-26.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--secondary.float--right.tooltip.hidden","div.btn.btn--secondary.float--right.tooltip.hidden",1251933877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return add_to_order(id);
});})(map__17211,map__17211__$1,gig,id,img,title,price,desc,s__17207__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null)], null)], null)], null)], null)], null)], null),giggin$components$gigs$gigs_$_iter__17206(cljs.core.rest(s__17207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(cljs.core.deref(giggin.state.gigs)));
})()], null)], null);
});
});

//# sourceMappingURL=giggin.components.gigs.js.map
