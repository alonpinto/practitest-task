goog.provide('giggin.components.gig_list');
giggin.components.gig_list.gig_list = (function giggin$components$gig_list$gig_list(){
var add_to_order = (function (p1__18056_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.orders,cljs.core.update,p1__18056_SHARP_,cljs.core.inc);
});
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"img","img",1442687358),"",new cljs.core.Keyword(null,"sold-out","sold-out",-139716632),false], null));
var isEditMode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
var toggle_modal = (function (p__18057){
var map__18058 = p__18057;
var map__18058__$1 = cljs.core.__destructure_map(map__18058);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18058__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var gig = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18058__$1,new cljs.core.Keyword(null,"gig","gig",-702014211));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(isEditMode,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);

return cljs.core.reset_BANG_(values,gig);
});
var save_gig = (function (p__18059){
var map__18060 = p__18059;
var map__18060__$1 = cljs.core.__destructure_map(map__18060);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"price","price",22129180));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"artist","artist",152869709));
giggin.services.api.save_gig(id,title,desc,price,img,artist);

return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"gig","gig",-702014211),cljs.core.PersistentArrayMap.EMPTY], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.edit_dlg.edit_dlg,isEditMode,values,save_gig,toggle_modal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),(function (){var iter__5523__auto__ = (function giggin$components$gig_list$gig_list_$_iter__18061(s__18062){
return (new cljs.core.LazySeq(null,(function (){
var s__18062__$1 = s__18062;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18062__$1);
if(temp__5804__auto__){
var s__18062__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18062__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__18062__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__18064 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__18063 = (0);
while(true){
if((i__18063 < size__5522__auto__)){
var map__18065 = cljs.core._nth(c__5521__auto__,i__18063);
var map__18065__$1 = cljs.core.__destructure_map(map__18065);
var gig = map__18065__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__18064,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),giggin.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.column.gap-2","p.column.gap-2",-41579250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/edit-246.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to Favorite",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/favorite-26.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--secondary.float--right.tooltip.hidden","div.btn.btn--secondary.float--right.tooltip.hidden",1251933877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return add_to_order(id);
});})(i__18063,map__18065,map__18065__$1,gig,id,img,title,price,desc,c__5521__auto__,size__5522__auto__,b__18064,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null)], null)], null)], null)], null)], null)], null));

var G__18067 = (i__18063 + (1));
i__18063 = G__18067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18064),giggin$components$gig_list$gig_list_$_iter__18061(cljs.core.chunk_rest(s__18062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18064),null);
}
} else {
var map__18066 = cljs.core.first(s__18062__$2);
var map__18066__$1 = cljs.core.__destructure_map(map__18066);
var gig = map__18066__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18066__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),giggin.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.column.gap-2","p.column.gap-2",-41579250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/edit-246.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.float--right.tooltip","div.btn.float--right.tooltip",-687931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to Favorite",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return giggin.helpers.toggleFavorite(id);
});})(map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/favorite-26.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--secondary.float--right.tooltip.hidden","div.btn.btn--secondary.float--right.tooltip.hidden",1251933877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig){
return (function (){
return add_to_order(id);
});})(map__18066,map__18066__$1,gig,id,img,title,price,desc,s__18062__$2,temp__5804__auto__,add_to_order,values,isEditMode,toggle_modal,save_gig))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null)], null)], null)], null)], null)], null)], null),giggin$components$gig_list$gig_list_$_iter__18061(cljs.core.rest(s__18062__$2)));
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

//# sourceMappingURL=giggin.components.gig_list.js.map
