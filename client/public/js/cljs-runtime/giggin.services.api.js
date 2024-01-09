goog.provide('giggin.services.api');
giggin.services.api.index_by = (function giggin$services$api$index_by(key,coll){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity),coll));
});
giggin.services.api.handler_add_to_favorite = (function giggin$services$api$handler_add_to_favorite(response){
return cljs.core.reset_BANG_(giggin.state.favorites,giggin.services.api.index_by(new cljs.core.Keyword(null,"id","id",-1388402092),response));
});
giggin.services.api.handler = (function giggin$services$api$handler(response){
return cljs.core.reset_BANG_(giggin.state.gigs,giggin.services.api.index_by(new cljs.core.Keyword(null,"id","id",-1388402092),response));
});
giggin.services.api.error_handler = (function giggin$services$api$error_handler(p__17979){
var map__17980 = p__17979;
var map__17980__$1 = cljs.core.__destructure_map(map__17980);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
giggin.services.api.fetch_gigs = (function giggin$services$api$fetch_gigs(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3005/gigs",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),giggin.services.api.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),giggin.services.api.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
giggin.services.api.handler_fetch_favorites = (function giggin$services$api$handler_fetch_favorites(response){
return cljs.core.reset_BANG_(giggin.state.favorites,giggin.services.api.index_by(new cljs.core.Keyword(null,"id","id",-1388402092),response));
});
giggin.services.api.save_gig = (function giggin$services$api$save_gig(id,title,desc,price,img,artist){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3005/gigs",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"desc","desc",2093485764),desc,new cljs.core.Keyword(null,"price","price",22129180),price,new cljs.core.Keyword(null,"img","img",1442687358),img,new cljs.core.Keyword(null,"artist","artist",152869709),artist], null),new cljs.core.Keyword(null,"handler","handler",-195596612),giggin.services.api.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),giggin.services.api.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
giggin.services.api.fetch_favorites = (function giggin$services$api$fetch_favorites(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3005/favorites",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),giggin.services.api.handler_fetch_favorites,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),giggin.services.api.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
giggin.services.api.add_to_favorite = (function giggin$services$api$add_to_favorite(user,id){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3005/favorite/toggle",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"handler","handler",-195596612),giggin.services.api.handler_add_to_favorite,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),giggin.services.api.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});

//# sourceMappingURL=giggin.services.api.js.map
