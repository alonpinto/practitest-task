goog.provide('giggin.helpers');
giggin.helpers.format_price = (function giggin$helpers$format_price(cents){
return [" \u20AC",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cents / (100)))].join('');
});
giggin.helpers.toggleFavorite = (function giggin$helpers$toggleFavorite(id){
return giggin.services.api.add_to_favorite("alon",id);
});

//# sourceMappingURL=giggin.helpers.js.map
