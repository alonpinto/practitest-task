goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17776 = arguments.length;
switch (G__17776) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17777 = (function (f,blockable,meta17778){
this.f = f;
this.blockable = blockable;
this.meta17778 = meta17778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17779,meta17778__$1){
var self__ = this;
var _17779__$1 = this;
return (new cljs.core.async.t_cljs$core$async17777(self__.f,self__.blockable,meta17778__$1));
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17779){
var self__ = this;
var _17779__$1 = this;
return self__.meta17778;
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17778","meta17778",-1781693570,null)], null);
}));

(cljs.core.async.t_cljs$core$async17777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17777");

(cljs.core.async.t_cljs$core$async17777.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17777.
 */
cljs.core.async.__GT_t_cljs$core$async17777 = (function cljs$core$async$__GT_t_cljs$core$async17777(f__$1,blockable__$1,meta17778){
return (new cljs.core.async.t_cljs$core$async17777(f__$1,blockable__$1,meta17778));
});

}

return (new cljs.core.async.t_cljs$core$async17777(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17782 = arguments.length;
switch (G__17782) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17788 = arguments.length;
switch (G__17788) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19991 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19991) : fn1.call(null,val_19991));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19991) : fn1.call(null,val_19991));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17796 = arguments.length;
switch (G__17796) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19996 = n;
var x_19997 = (0);
while(true){
if((x_19997 < n__5636__auto___19996)){
(a[x_19997] = x_19997);

var G__19998 = (x_19997 + (1));
x_19997 = G__19998;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17811 = (function (flag,meta17812){
this.flag = flag;
this.meta17812 = meta17812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17813,meta17812__$1){
var self__ = this;
var _17813__$1 = this;
return (new cljs.core.async.t_cljs$core$async17811(self__.flag,meta17812__$1));
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17813){
var self__ = this;
var _17813__$1 = this;
return self__.meta17812;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17812","meta17812",293116796,null)], null);
}));

(cljs.core.async.t_cljs$core$async17811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17811");

(cljs.core.async.t_cljs$core$async17811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17811.
 */
cljs.core.async.__GT_t_cljs$core$async17811 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17811(flag__$1,meta17812){
return (new cljs.core.async.t_cljs$core$async17811(flag__$1,meta17812));
});

}

return (new cljs.core.async.t_cljs$core$async17811(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17820 = (function (flag,cb,meta17821){
this.flag = flag;
this.cb = cb;
this.meta17821 = meta17821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17822,meta17821__$1){
var self__ = this;
var _17822__$1 = this;
return (new cljs.core.async.t_cljs$core$async17820(self__.flag,self__.cb,meta17821__$1));
}));

(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17822){
var self__ = this;
var _17822__$1 = this;
return self__.meta17821;
}));

(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17821","meta17821",-780153961,null)], null);
}));

(cljs.core.async.t_cljs$core$async17820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17820");

(cljs.core.async.t_cljs$core$async17820.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17820.
 */
cljs.core.async.__GT_t_cljs$core$async17820 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17820(flag__$1,cb__$1,meta17821){
return (new cljs.core.async.t_cljs$core$async17820(flag__$1,cb__$1,meta17821));
});

}

return (new cljs.core.async.t_cljs$core$async17820(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17827_SHARP_){
var G__17829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17827_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17829) : fret.call(null,G__17829));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17828_SHARP_){
var G__17830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17828_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17830) : fret.call(null,G__17830));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20008 = (i + (1));
i = G__20008;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20010 = arguments.length;
var i__5770__auto___20011 = (0);
while(true){
if((i__5770__auto___20011 < len__5769__auto___20010)){
args__5775__auto__.push((arguments[i__5770__auto___20011]));

var G__20012 = (i__5770__auto___20011 + (1));
i__5770__auto___20011 = G__20012;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17835){
var map__17836 = p__17835;
var map__17836__$1 = cljs.core.__destructure_map(map__17836);
var opts = map__17836__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17833){
var G__17834 = cljs.core.first(seq17833);
var seq17833__$1 = cljs.core.next(seq17833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17834,seq17833__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17847 = arguments.length;
switch (G__17847) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17676__auto___20016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_17876){
var state_val_17877 = (state_17876[(1)]);
if((state_val_17877 === (7))){
var inst_17872 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17878_20017 = state_17876__$1;
(statearr_17878_20017[(2)] = inst_17872);

(statearr_17878_20017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (1))){
var state_17876__$1 = state_17876;
var statearr_17879_20018 = state_17876__$1;
(statearr_17879_20018[(2)] = null);

(statearr_17879_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (4))){
var inst_17855 = (state_17876[(7)]);
var inst_17855__$1 = (state_17876[(2)]);
var inst_17856 = (inst_17855__$1 == null);
var state_17876__$1 = (function (){var statearr_17880 = state_17876;
(statearr_17880[(7)] = inst_17855__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17856)){
var statearr_17881_20019 = state_17876__$1;
(statearr_17881_20019[(1)] = (5));

} else {
var statearr_17882_20020 = state_17876__$1;
(statearr_17882_20020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (13))){
var state_17876__$1 = state_17876;
var statearr_17883_20021 = state_17876__$1;
(statearr_17883_20021[(2)] = null);

(statearr_17883_20021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (6))){
var inst_17855 = (state_17876[(7)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17876__$1,(11),to,inst_17855);
} else {
if((state_val_17877 === (3))){
var inst_17874 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17876__$1,inst_17874);
} else {
if((state_val_17877 === (12))){
var state_17876__$1 = state_17876;
var statearr_17884_20022 = state_17876__$1;
(statearr_17884_20022[(2)] = null);

(statearr_17884_20022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (2))){
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17876__$1,(4),from);
} else {
if((state_val_17877 === (11))){
var inst_17865 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17865)){
var statearr_17885_20024 = state_17876__$1;
(statearr_17885_20024[(1)] = (12));

} else {
var statearr_17886_20025 = state_17876__$1;
(statearr_17886_20025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (9))){
var state_17876__$1 = state_17876;
var statearr_17887_20027 = state_17876__$1;
(statearr_17887_20027[(2)] = null);

(statearr_17887_20027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (5))){
var state_17876__$1 = state_17876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17888_20028 = state_17876__$1;
(statearr_17888_20028[(1)] = (8));

} else {
var statearr_17889_20029 = state_17876__$1;
(statearr_17889_20029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (14))){
var inst_17870 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17892_20030 = state_17876__$1;
(statearr_17892_20030[(2)] = inst_17870);

(statearr_17892_20030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (10))){
var inst_17862 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17893_20031 = state_17876__$1;
(statearr_17893_20031[(2)] = inst_17862);

(statearr_17893_20031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (8))){
var inst_17859 = cljs.core.async.close_BANG_(to);
var state_17876__$1 = state_17876;
var statearr_17894_20032 = state_17876__$1;
(statearr_17894_20032[(2)] = inst_17859);

(statearr_17894_20032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_17895 = [null,null,null,null,null,null,null,null];
(statearr_17895[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_17895[(1)] = (1));

return statearr_17895;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_17876){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_17876);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e17896){var ex__17494__auto__ = e17896;
var statearr_17897_20033 = state_17876;
(statearr_17897_20033[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_17876[(4)]))){
var statearr_17898_20034 = state_17876;
(statearr_17898_20034[(1)] = cljs.core.first((state_17876[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20035 = state_17876;
state_17876 = G__20035;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_17876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_17876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_17899 = f__17678__auto__();
(statearr_17899[(6)] = c__17676__auto___20016);

return statearr_17899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17909){
var vec__17910 = p__17909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17910,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17910,(1),null);
var job = vec__17910;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17676__auto___20038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_17920){
var state_val_17921 = (state_17920[(1)]);
if((state_val_17921 === (1))){
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17920__$1,(2),res,v);
} else {
if((state_val_17921 === (2))){
var inst_17917 = (state_17920[(2)]);
var inst_17918 = cljs.core.async.close_BANG_(res);
var state_17920__$1 = (function (){var statearr_17925 = state_17920;
(statearr_17925[(7)] = inst_17917);

return statearr_17925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17920__$1,inst_17918);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_17929 = [null,null,null,null,null,null,null,null];
(statearr_17929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__);

(statearr_17929[(1)] = (1));

return statearr_17929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1 = (function (state_17920){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_17920);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e17930){var ex__17494__auto__ = e17930;
var statearr_17931_20047 = state_17920;
(statearr_17931_20047[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_17920[(4)]))){
var statearr_17932_20048 = state_17920;
(statearr_17932_20048[(1)] = cljs.core.first((state_17920[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20052 = state_17920;
state_17920 = G__20052;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = function(state_17920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1.call(this,state_17920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_17933 = f__17678__auto__();
(statearr_17933[(6)] = c__17676__auto___20038);

return statearr_17933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17934){
var vec__17935 = p__17934;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(1),null);
var job = vec__17935;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20054 = n;
var __20055 = (0);
while(true){
if((__20055 < n__5636__auto___20054)){
var G__17940_20056 = type;
var G__17940_20057__$1 = (((G__17940_20056 instanceof cljs.core.Keyword))?G__17940_20056.fqn:null);
switch (G__17940_20057__$1) {
case "compute":
var c__17676__auto___20059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20055,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = ((function (__20055,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function (state_17954){
var state_val_17955 = (state_17954[(1)]);
if((state_val_17955 === (1))){
var state_17954__$1 = state_17954;
var statearr_17959_20060 = state_17954__$1;
(statearr_17959_20060[(2)] = null);

(statearr_17959_20060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17955 === (2))){
var state_17954__$1 = state_17954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17954__$1,(4),jobs);
} else {
if((state_val_17955 === (3))){
var inst_17952 = (state_17954[(2)]);
var state_17954__$1 = state_17954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17954__$1,inst_17952);
} else {
if((state_val_17955 === (4))){
var inst_17943 = (state_17954[(2)]);
var inst_17945 = process__$1(inst_17943);
var state_17954__$1 = state_17954;
if(cljs.core.truth_(inst_17945)){
var statearr_17961_20061 = state_17954__$1;
(statearr_17961_20061[(1)] = (5));

} else {
var statearr_17962_20062 = state_17954__$1;
(statearr_17962_20062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17955 === (5))){
var state_17954__$1 = state_17954;
var statearr_17964_20063 = state_17954__$1;
(statearr_17964_20063[(2)] = null);

(statearr_17964_20063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17955 === (6))){
var state_17954__$1 = state_17954;
var statearr_17965_20064 = state_17954__$1;
(statearr_17965_20064[(2)] = null);

(statearr_17965_20064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17955 === (7))){
var inst_17950 = (state_17954[(2)]);
var state_17954__$1 = state_17954;
var statearr_17966_20069 = state_17954__$1;
(statearr_17966_20069[(2)] = inst_17950);

(statearr_17966_20069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20055,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
;
return ((function (__20055,switch__17490__auto__,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_17967 = [null,null,null,null,null,null,null];
(statearr_17967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__);

(statearr_17967[(1)] = (1));

return statearr_17967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1 = (function (state_17954){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_17954);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e17968){var ex__17494__auto__ = e17968;
var statearr_17969_20070 = state_17954;
(statearr_17969_20070[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_17954[(4)]))){
var statearr_17970_20071 = state_17954;
(statearr_17970_20071[(1)] = cljs.core.first((state_17954[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20072 = state_17954;
state_17954 = G__20072;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = function(state_17954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1.call(this,state_17954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__;
})()
;})(__20055,switch__17490__auto__,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
})();
var state__17679__auto__ = (function (){var statearr_17971 = f__17678__auto__();
(statearr_17971[(6)] = c__17676__auto___20059);

return statearr_17971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(__20055,c__17676__auto___20059,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
);


break;
case "async":
var c__17676__auto___20073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20055,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = ((function (__20055,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function (state_17984){
var state_val_17985 = (state_17984[(1)]);
if((state_val_17985 === (1))){
var state_17984__$1 = state_17984;
var statearr_17986_20074 = state_17984__$1;
(statearr_17986_20074[(2)] = null);

(statearr_17986_20074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (2))){
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17984__$1,(4),jobs);
} else {
if((state_val_17985 === (3))){
var inst_17982 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17984__$1,inst_17982);
} else {
if((state_val_17985 === (4))){
var inst_17974 = (state_17984[(2)]);
var inst_17975 = async(inst_17974);
var state_17984__$1 = state_17984;
if(cljs.core.truth_(inst_17975)){
var statearr_17987_20075 = state_17984__$1;
(statearr_17987_20075[(1)] = (5));

} else {
var statearr_17988_20076 = state_17984__$1;
(statearr_17988_20076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (5))){
var state_17984__$1 = state_17984;
var statearr_17989_20077 = state_17984__$1;
(statearr_17989_20077[(2)] = null);

(statearr_17989_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (6))){
var state_17984__$1 = state_17984;
var statearr_17990_20078 = state_17984__$1;
(statearr_17990_20078[(2)] = null);

(statearr_17990_20078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (7))){
var inst_17980 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
var statearr_17991_20079 = state_17984__$1;
(statearr_17991_20079[(2)] = inst_17980);

(statearr_17991_20079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20055,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
;
return ((function (__20055,switch__17490__auto__,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_17992 = [null,null,null,null,null,null,null];
(statearr_17992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__);

(statearr_17992[(1)] = (1));

return statearr_17992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1 = (function (state_17984){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_17984);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e17993){var ex__17494__auto__ = e17993;
var statearr_17994_20080 = state_17984;
(statearr_17994_20080[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_17984[(4)]))){
var statearr_17995_20081 = state_17984;
(statearr_17995_20081[(1)] = cljs.core.first((state_17984[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20082 = state_17984;
state_17984 = G__20082;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = function(state_17984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1.call(this,state_17984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__;
})()
;})(__20055,switch__17490__auto__,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
})();
var state__17679__auto__ = (function (){var statearr_17996 = f__17678__auto__();
(statearr_17996[(6)] = c__17676__auto___20073);

return statearr_17996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(__20055,c__17676__auto___20073,G__17940_20056,G__17940_20057__$1,n__5636__auto___20054,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17940_20057__$1)].join('')));

}

var G__20083 = (__20055 + (1));
__20055 = G__20083;
continue;
} else {
}
break;
}

var c__17676__auto___20085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18018){
var state_val_18019 = (state_18018[(1)]);
if((state_val_18019 === (7))){
var inst_18014 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
var statearr_18020_20087 = state_18018__$1;
(statearr_18020_20087[(2)] = inst_18014);

(statearr_18020_20087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (1))){
var state_18018__$1 = state_18018;
var statearr_18021_20088 = state_18018__$1;
(statearr_18021_20088[(2)] = null);

(statearr_18021_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (4))){
var inst_17999 = (state_18018[(7)]);
var inst_17999__$1 = (state_18018[(2)]);
var inst_18000 = (inst_17999__$1 == null);
var state_18018__$1 = (function (){var statearr_18023 = state_18018;
(statearr_18023[(7)] = inst_17999__$1);

return statearr_18023;
})();
if(cljs.core.truth_(inst_18000)){
var statearr_18024_20089 = state_18018__$1;
(statearr_18024_20089[(1)] = (5));

} else {
var statearr_18025_20090 = state_18018__$1;
(statearr_18025_20090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (6))){
var inst_18004 = (state_18018[(8)]);
var inst_17999 = (state_18018[(7)]);
var inst_18004__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18006 = [inst_17999,inst_18004__$1];
var inst_18007 = (new cljs.core.PersistentVector(null,2,(5),inst_18005,inst_18006,null));
var state_18018__$1 = (function (){var statearr_18026 = state_18018;
(statearr_18026[(8)] = inst_18004__$1);

return statearr_18026;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18018__$1,(8),jobs,inst_18007);
} else {
if((state_val_18019 === (3))){
var inst_18016 = (state_18018[(2)]);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18018__$1,inst_18016);
} else {
if((state_val_18019 === (2))){
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18018__$1,(4),from);
} else {
if((state_val_18019 === (9))){
var inst_18011 = (state_18018[(2)]);
var state_18018__$1 = (function (){var statearr_18027 = state_18018;
(statearr_18027[(9)] = inst_18011);

return statearr_18027;
})();
var statearr_18028_20093 = state_18018__$1;
(statearr_18028_20093[(2)] = null);

(statearr_18028_20093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (5))){
var inst_18002 = cljs.core.async.close_BANG_(jobs);
var state_18018__$1 = state_18018;
var statearr_18029_20094 = state_18018__$1;
(statearr_18029_20094[(2)] = inst_18002);

(statearr_18029_20094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18019 === (8))){
var inst_18004 = (state_18018[(8)]);
var inst_18009 = (state_18018[(2)]);
var state_18018__$1 = (function (){var statearr_18030 = state_18018;
(statearr_18030[(10)] = inst_18009);

return statearr_18030;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18018__$1,(9),results,inst_18004);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_18031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__);

(statearr_18031[(1)] = (1));

return statearr_18031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1 = (function (state_18018){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18018);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18032){var ex__17494__auto__ = e18032;
var statearr_18033_20104 = state_18018;
(statearr_18033_20104[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18018[(4)]))){
var statearr_18034_20105 = state_18018;
(statearr_18034_20105[(1)] = cljs.core.first((state_18018[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20106 = state_18018;
state_18018 = G__20106;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18035 = f__17678__auto__();
(statearr_18035[(6)] = c__17676__auto___20085);

return statearr_18035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


var c__17676__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18074){
var state_val_18075 = (state_18074[(1)]);
if((state_val_18075 === (7))){
var inst_18070 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18095_20112 = state_18074__$1;
(statearr_18095_20112[(2)] = inst_18070);

(statearr_18095_20112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (20))){
var state_18074__$1 = state_18074;
var statearr_18100_20116 = state_18074__$1;
(statearr_18100_20116[(2)] = null);

(statearr_18100_20116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (1))){
var state_18074__$1 = state_18074;
var statearr_18101_20117 = state_18074__$1;
(statearr_18101_20117[(2)] = null);

(statearr_18101_20117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (4))){
var inst_18038 = (state_18074[(7)]);
var inst_18038__$1 = (state_18074[(2)]);
var inst_18039 = (inst_18038__$1 == null);
var state_18074__$1 = (function (){var statearr_18102 = state_18074;
(statearr_18102[(7)] = inst_18038__$1);

return statearr_18102;
})();
if(cljs.core.truth_(inst_18039)){
var statearr_18103_20118 = state_18074__$1;
(statearr_18103_20118[(1)] = (5));

} else {
var statearr_18104_20119 = state_18074__$1;
(statearr_18104_20119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (15))){
var inst_18052 = (state_18074[(8)]);
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18074__$1,(18),to,inst_18052);
} else {
if((state_val_18075 === (21))){
var inst_18065 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18105_20125 = state_18074__$1;
(statearr_18105_20125[(2)] = inst_18065);

(statearr_18105_20125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (13))){
var inst_18067 = (state_18074[(2)]);
var state_18074__$1 = (function (){var statearr_18107 = state_18074;
(statearr_18107[(9)] = inst_18067);

return statearr_18107;
})();
var statearr_18108_20126 = state_18074__$1;
(statearr_18108_20126[(2)] = null);

(statearr_18108_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (6))){
var inst_18038 = (state_18074[(7)]);
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18074__$1,(11),inst_18038);
} else {
if((state_val_18075 === (17))){
var inst_18060 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
if(cljs.core.truth_(inst_18060)){
var statearr_18109_20127 = state_18074__$1;
(statearr_18109_20127[(1)] = (19));

} else {
var statearr_18110_20132 = state_18074__$1;
(statearr_18110_20132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (3))){
var inst_18072 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18074__$1,inst_18072);
} else {
if((state_val_18075 === (12))){
var inst_18048 = (state_18074[(10)]);
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18074__$1,(14),inst_18048);
} else {
if((state_val_18075 === (2))){
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18074__$1,(4),results);
} else {
if((state_val_18075 === (19))){
var state_18074__$1 = state_18074;
var statearr_18116_20136 = state_18074__$1;
(statearr_18116_20136[(2)] = null);

(statearr_18116_20136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (11))){
var inst_18048 = (state_18074[(2)]);
var state_18074__$1 = (function (){var statearr_18117 = state_18074;
(statearr_18117[(10)] = inst_18048);

return statearr_18117;
})();
var statearr_18118_20137 = state_18074__$1;
(statearr_18118_20137[(2)] = null);

(statearr_18118_20137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (9))){
var state_18074__$1 = state_18074;
var statearr_18120_20138 = state_18074__$1;
(statearr_18120_20138[(2)] = null);

(statearr_18120_20138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (5))){
var state_18074__$1 = state_18074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18122_20139 = state_18074__$1;
(statearr_18122_20139[(1)] = (8));

} else {
var statearr_18123_20140 = state_18074__$1;
(statearr_18123_20140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (14))){
var inst_18054 = (state_18074[(11)]);
var inst_18052 = (state_18074[(8)]);
var inst_18052__$1 = (state_18074[(2)]);
var inst_18053 = (inst_18052__$1 == null);
var inst_18054__$1 = cljs.core.not(inst_18053);
var state_18074__$1 = (function (){var statearr_18134 = state_18074;
(statearr_18134[(11)] = inst_18054__$1);

(statearr_18134[(8)] = inst_18052__$1);

return statearr_18134;
})();
if(inst_18054__$1){
var statearr_18141_20144 = state_18074__$1;
(statearr_18141_20144[(1)] = (15));

} else {
var statearr_18148_20148 = state_18074__$1;
(statearr_18148_20148[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (16))){
var inst_18054 = (state_18074[(11)]);
var state_18074__$1 = state_18074;
var statearr_18150_20149 = state_18074__$1;
(statearr_18150_20149[(2)] = inst_18054);

(statearr_18150_20149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (10))){
var inst_18045 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18151_20150 = state_18074__$1;
(statearr_18151_20150[(2)] = inst_18045);

(statearr_18151_20150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (18))){
var inst_18057 = (state_18074[(2)]);
var state_18074__$1 = state_18074;
var statearr_18155_20151 = state_18074__$1;
(statearr_18155_20151[(2)] = inst_18057);

(statearr_18155_20151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18075 === (8))){
var inst_18042 = cljs.core.async.close_BANG_(to);
var state_18074__$1 = state_18074;
var statearr_18160_20152 = state_18074__$1;
(statearr_18160_20152[(2)] = inst_18042);

(statearr_18160_20152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_18174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__);

(statearr_18174[(1)] = (1));

return statearr_18174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1 = (function (state_18074){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18074);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18181){var ex__17494__auto__ = e18181;
var statearr_18182_20156 = state_18074;
(statearr_18182_20156[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18074[(4)]))){
var statearr_18191_20157 = state_18074;
(statearr_18191_20157[(1)] = cljs.core.first((state_18074[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20158 = state_18074;
state_18074 = G__20158;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__ = function(state_18074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1.call(this,state_18074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18201 = f__17678__auto__();
(statearr_18201[(6)] = c__17676__auto__);

return statearr_18201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

return c__17676__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18215 = arguments.length;
switch (G__18215) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18217 = arguments.length;
switch (G__18217) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18227 = arguments.length;
switch (G__18227) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17676__auto___20163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18268){
var state_val_18269 = (state_18268[(1)]);
if((state_val_18269 === (7))){
var inst_18264 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
var statearr_18275_20164 = state_18268__$1;
(statearr_18275_20164[(2)] = inst_18264);

(statearr_18275_20164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (1))){
var state_18268__$1 = state_18268;
var statearr_18276_20165 = state_18268__$1;
(statearr_18276_20165[(2)] = null);

(statearr_18276_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (4))){
var inst_18244 = (state_18268[(7)]);
var inst_18244__$1 = (state_18268[(2)]);
var inst_18245 = (inst_18244__$1 == null);
var state_18268__$1 = (function (){var statearr_18277 = state_18268;
(statearr_18277[(7)] = inst_18244__$1);

return statearr_18277;
})();
if(cljs.core.truth_(inst_18245)){
var statearr_18279_20169 = state_18268__$1;
(statearr_18279_20169[(1)] = (5));

} else {
var statearr_18281_20170 = state_18268__$1;
(statearr_18281_20170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (13))){
var state_18268__$1 = state_18268;
var statearr_18282_20171 = state_18268__$1;
(statearr_18282_20171[(2)] = null);

(statearr_18282_20171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (6))){
var inst_18244 = (state_18268[(7)]);
var inst_18251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18244) : p.call(null,inst_18244));
var state_18268__$1 = state_18268;
if(cljs.core.truth_(inst_18251)){
var statearr_18288_20172 = state_18268__$1;
(statearr_18288_20172[(1)] = (9));

} else {
var statearr_18289_20173 = state_18268__$1;
(statearr_18289_20173[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (3))){
var inst_18266 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18268__$1,inst_18266);
} else {
if((state_val_18269 === (12))){
var state_18268__$1 = state_18268;
var statearr_18290_20174 = state_18268__$1;
(statearr_18290_20174[(2)] = null);

(statearr_18290_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (2))){
var state_18268__$1 = state_18268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18268__$1,(4),ch);
} else {
if((state_val_18269 === (11))){
var inst_18244 = (state_18268[(7)]);
var inst_18255 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18268__$1,(8),inst_18255,inst_18244);
} else {
if((state_val_18269 === (9))){
var state_18268__$1 = state_18268;
var statearr_18293_20175 = state_18268__$1;
(statearr_18293_20175[(2)] = tc);

(statearr_18293_20175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (5))){
var inst_18248 = cljs.core.async.close_BANG_(tc);
var inst_18249 = cljs.core.async.close_BANG_(fc);
var state_18268__$1 = (function (){var statearr_18296 = state_18268;
(statearr_18296[(8)] = inst_18248);

return statearr_18296;
})();
var statearr_18297_20176 = state_18268__$1;
(statearr_18297_20176[(2)] = inst_18249);

(statearr_18297_20176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (14))){
var inst_18262 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
var statearr_18298_20177 = state_18268__$1;
(statearr_18298_20177[(2)] = inst_18262);

(statearr_18298_20177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (10))){
var state_18268__$1 = state_18268;
var statearr_18303_20178 = state_18268__$1;
(statearr_18303_20178[(2)] = fc);

(statearr_18303_20178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (8))){
var inst_18257 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
if(cljs.core.truth_(inst_18257)){
var statearr_18304_20183 = state_18268__$1;
(statearr_18304_20183[(1)] = (12));

} else {
var statearr_18305_20184 = state_18268__$1;
(statearr_18305_20184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_18306 = [null,null,null,null,null,null,null,null,null];
(statearr_18306[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_18306[(1)] = (1));

return statearr_18306;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_18268){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18268);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18307){var ex__17494__auto__ = e18307;
var statearr_18308_20196 = state_18268;
(statearr_18308_20196[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18268[(4)]))){
var statearr_18315_20197 = state_18268;
(statearr_18315_20197[(1)] = cljs.core.first((state_18268[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20202 = state_18268;
state_18268 = G__20202;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_18268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_18268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18317 = f__17678__auto__();
(statearr_18317[(6)] = c__17676__auto___20163);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17676__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18342){
var state_val_18343 = (state_18342[(1)]);
if((state_val_18343 === (7))){
var inst_18338 = (state_18342[(2)]);
var state_18342__$1 = state_18342;
var statearr_18344_20203 = state_18342__$1;
(statearr_18344_20203[(2)] = inst_18338);

(statearr_18344_20203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (1))){
var inst_18319 = init;
var inst_18321 = inst_18319;
var state_18342__$1 = (function (){var statearr_18345 = state_18342;
(statearr_18345[(7)] = inst_18321);

return statearr_18345;
})();
var statearr_18346_20205 = state_18342__$1;
(statearr_18346_20205[(2)] = null);

(statearr_18346_20205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (4))){
var inst_18324 = (state_18342[(8)]);
var inst_18324__$1 = (state_18342[(2)]);
var inst_18325 = (inst_18324__$1 == null);
var state_18342__$1 = (function (){var statearr_18347 = state_18342;
(statearr_18347[(8)] = inst_18324__$1);

return statearr_18347;
})();
if(cljs.core.truth_(inst_18325)){
var statearr_18349_20207 = state_18342__$1;
(statearr_18349_20207[(1)] = (5));

} else {
var statearr_18350_20208 = state_18342__$1;
(statearr_18350_20208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (6))){
var inst_18324 = (state_18342[(8)]);
var inst_18321 = (state_18342[(7)]);
var inst_18328 = (state_18342[(9)]);
var inst_18328__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18321,inst_18324) : f.call(null,inst_18321,inst_18324));
var inst_18329 = cljs.core.reduced_QMARK_(inst_18328__$1);
var state_18342__$1 = (function (){var statearr_18351 = state_18342;
(statearr_18351[(9)] = inst_18328__$1);

return statearr_18351;
})();
if(inst_18329){
var statearr_18352_20213 = state_18342__$1;
(statearr_18352_20213[(1)] = (8));

} else {
var statearr_18353_20217 = state_18342__$1;
(statearr_18353_20217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (3))){
var inst_18340 = (state_18342[(2)]);
var state_18342__$1 = state_18342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18342__$1,inst_18340);
} else {
if((state_val_18343 === (2))){
var state_18342__$1 = state_18342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18342__$1,(4),ch);
} else {
if((state_val_18343 === (9))){
var inst_18328 = (state_18342[(9)]);
var inst_18321 = inst_18328;
var state_18342__$1 = (function (){var statearr_18357 = state_18342;
(statearr_18357[(7)] = inst_18321);

return statearr_18357;
})();
var statearr_18358_20221 = state_18342__$1;
(statearr_18358_20221[(2)] = null);

(statearr_18358_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (5))){
var inst_18321 = (state_18342[(7)]);
var state_18342__$1 = state_18342;
var statearr_18371_20222 = state_18342__$1;
(statearr_18371_20222[(2)] = inst_18321);

(statearr_18371_20222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (10))){
var inst_18336 = (state_18342[(2)]);
var state_18342__$1 = state_18342;
var statearr_18380_20223 = state_18342__$1;
(statearr_18380_20223[(2)] = inst_18336);

(statearr_18380_20223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18343 === (8))){
var inst_18328 = (state_18342[(9)]);
var inst_18331 = cljs.core.deref(inst_18328);
var state_18342__$1 = state_18342;
var statearr_18381_20224 = state_18342__$1;
(statearr_18381_20224[(2)] = inst_18331);

(statearr_18381_20224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17491__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17491__auto____0 = (function (){
var statearr_18382 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18382[(0)] = cljs$core$async$reduce_$_state_machine__17491__auto__);

(statearr_18382[(1)] = (1));

return statearr_18382;
});
var cljs$core$async$reduce_$_state_machine__17491__auto____1 = (function (state_18342){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18342);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18383){var ex__17494__auto__ = e18383;
var statearr_18384_20225 = state_18342;
(statearr_18384_20225[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18342[(4)]))){
var statearr_18385_20226 = state_18342;
(statearr_18385_20226[(1)] = cljs.core.first((state_18342[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20228 = state_18342;
state_18342 = G__20228;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17491__auto__ = function(state_18342){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17491__auto____1.call(this,state_18342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17491__auto____0;
cljs$core$async$reduce_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17491__auto____1;
return cljs$core$async$reduce_$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18386 = f__17678__auto__();
(statearr_18386[(6)] = c__17676__auto__);

return statearr_18386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

return c__17676__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17676__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18393){
var state_val_18394 = (state_18393[(1)]);
if((state_val_18394 === (1))){
var inst_18388 = cljs.core.async.reduce(f__$1,init,ch);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18393__$1,(2),inst_18388);
} else {
if((state_val_18394 === (2))){
var inst_18390 = (state_18393[(2)]);
var inst_18391 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18390) : f__$1.call(null,inst_18390));
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18393__$1,inst_18391);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17491__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17491__auto____0 = (function (){
var statearr_18396 = [null,null,null,null,null,null,null];
(statearr_18396[(0)] = cljs$core$async$transduce_$_state_machine__17491__auto__);

(statearr_18396[(1)] = (1));

return statearr_18396;
});
var cljs$core$async$transduce_$_state_machine__17491__auto____1 = (function (state_18393){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18393);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18397){var ex__17494__auto__ = e18397;
var statearr_18398_20253 = state_18393;
(statearr_18398_20253[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18393[(4)]))){
var statearr_18399_20254 = state_18393;
(statearr_18399_20254[(1)] = cljs.core.first((state_18393[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20258 = state_18393;
state_18393 = G__20258;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17491__auto__ = function(state_18393){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17491__auto____1.call(this,state_18393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17491__auto____0;
cljs$core$async$transduce_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17491__auto____1;
return cljs$core$async$transduce_$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18400 = f__17678__auto__();
(statearr_18400[(6)] = c__17676__auto__);

return statearr_18400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

return c__17676__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18402 = arguments.length;
switch (G__18402) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17676__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18447){
var state_val_18448 = (state_18447[(1)]);
if((state_val_18448 === (7))){
var inst_18429 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18451_20272 = state_18447__$1;
(statearr_18451_20272[(2)] = inst_18429);

(statearr_18451_20272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (1))){
var inst_18415 = cljs.core.seq(coll);
var inst_18416 = inst_18415;
var state_18447__$1 = (function (){var statearr_18452 = state_18447;
(statearr_18452[(7)] = inst_18416);

return statearr_18452;
})();
var statearr_18454_20273 = state_18447__$1;
(statearr_18454_20273[(2)] = null);

(statearr_18454_20273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (4))){
var inst_18416 = (state_18447[(7)]);
var inst_18427 = cljs.core.first(inst_18416);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18447__$1,(7),ch,inst_18427);
} else {
if((state_val_18448 === (13))){
var inst_18441 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18455_20274 = state_18447__$1;
(statearr_18455_20274[(2)] = inst_18441);

(statearr_18455_20274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (6))){
var inst_18432 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
if(cljs.core.truth_(inst_18432)){
var statearr_18457_20275 = state_18447__$1;
(statearr_18457_20275[(1)] = (8));

} else {
var statearr_18458_20276 = state_18447__$1;
(statearr_18458_20276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (3))){
var inst_18445 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18447__$1,inst_18445);
} else {
if((state_val_18448 === (12))){
var state_18447__$1 = state_18447;
var statearr_18459_20277 = state_18447__$1;
(statearr_18459_20277[(2)] = null);

(statearr_18459_20277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (2))){
var inst_18416 = (state_18447[(7)]);
var state_18447__$1 = state_18447;
if(cljs.core.truth_(inst_18416)){
var statearr_18461_20278 = state_18447__$1;
(statearr_18461_20278[(1)] = (4));

} else {
var statearr_18462_20279 = state_18447__$1;
(statearr_18462_20279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (11))){
var inst_18438 = cljs.core.async.close_BANG_(ch);
var state_18447__$1 = state_18447;
var statearr_18463_20280 = state_18447__$1;
(statearr_18463_20280[(2)] = inst_18438);

(statearr_18463_20280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (9))){
var state_18447__$1 = state_18447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18464_20281 = state_18447__$1;
(statearr_18464_20281[(1)] = (11));

} else {
var statearr_18465_20282 = state_18447__$1;
(statearr_18465_20282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (5))){
var inst_18416 = (state_18447[(7)]);
var state_18447__$1 = state_18447;
var statearr_18466_20283 = state_18447__$1;
(statearr_18466_20283[(2)] = inst_18416);

(statearr_18466_20283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (10))){
var inst_18443 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18467_20284 = state_18447__$1;
(statearr_18467_20284[(2)] = inst_18443);

(statearr_18467_20284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18448 === (8))){
var inst_18416 = (state_18447[(7)]);
var inst_18434 = cljs.core.next(inst_18416);
var inst_18416__$1 = inst_18434;
var state_18447__$1 = (function (){var statearr_18468 = state_18447;
(statearr_18468[(7)] = inst_18416__$1);

return statearr_18468;
})();
var statearr_18469_20285 = state_18447__$1;
(statearr_18469_20285[(2)] = null);

(statearr_18469_20285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_18471 = [null,null,null,null,null,null,null,null];
(statearr_18471[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_18471[(1)] = (1));

return statearr_18471;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_18447){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18447);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18472){var ex__17494__auto__ = e18472;
var statearr_18473_20292 = state_18447;
(statearr_18473_20292[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18447[(4)]))){
var statearr_18474_20293 = state_18447;
(statearr_18474_20293[(1)] = cljs.core.first((state_18447[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20294 = state_18447;
state_18447 = G__20294;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_18447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_18447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18475 = f__17678__auto__();
(statearr_18475[(6)] = c__17676__auto__);

return statearr_18475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

return c__17676__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18478 = arguments.length;
switch (G__18478) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20296 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20296(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20297 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20297(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20304 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20304(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20305 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20305(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18483 = (function (ch,cs,meta18484){
this.ch = ch;
this.cs = cs;
this.meta18484 = meta18484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18485,meta18484__$1){
var self__ = this;
var _18485__$1 = this;
return (new cljs.core.async.t_cljs$core$async18483(self__.ch,self__.cs,meta18484__$1));
}));

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18485){
var self__ = this;
var _18485__$1 = this;
return self__.meta18484;
}));

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18484","meta18484",1144202774,null)], null);
}));

(cljs.core.async.t_cljs$core$async18483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18483");

(cljs.core.async.t_cljs$core$async18483.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18483.
 */
cljs.core.async.__GT_t_cljs$core$async18483 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18483(ch__$1,cs__$1,meta18484){
return (new cljs.core.async.t_cljs$core$async18483(ch__$1,cs__$1,meta18484));
});

}

return (new cljs.core.async.t_cljs$core$async18483(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17676__auto___20325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18622){
var state_val_18623 = (state_18622[(1)]);
if((state_val_18623 === (7))){
var inst_18618 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18624_20326 = state_18622__$1;
(statearr_18624_20326[(2)] = inst_18618);

(statearr_18624_20326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (20))){
var inst_18521 = (state_18622[(7)]);
var inst_18534 = cljs.core.first(inst_18521);
var inst_18535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18534,(0),null);
var inst_18536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18534,(1),null);
var state_18622__$1 = (function (){var statearr_18626 = state_18622;
(statearr_18626[(8)] = inst_18535);

return statearr_18626;
})();
if(cljs.core.truth_(inst_18536)){
var statearr_18627_20327 = state_18622__$1;
(statearr_18627_20327[(1)] = (22));

} else {
var statearr_18628_20328 = state_18622__$1;
(statearr_18628_20328[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (27))){
var inst_18566 = (state_18622[(9)]);
var inst_18564 = (state_18622[(10)]);
var inst_18571 = (state_18622[(11)]);
var inst_18490 = (state_18622[(12)]);
var inst_18571__$1 = cljs.core._nth(inst_18564,inst_18566);
var inst_18572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18571__$1,inst_18490,done);
var state_18622__$1 = (function (){var statearr_18629 = state_18622;
(statearr_18629[(11)] = inst_18571__$1);

return statearr_18629;
})();
if(cljs.core.truth_(inst_18572)){
var statearr_18630_20330 = state_18622__$1;
(statearr_18630_20330[(1)] = (30));

} else {
var statearr_18631_20331 = state_18622__$1;
(statearr_18631_20331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (1))){
var state_18622__$1 = state_18622;
var statearr_18632_20332 = state_18622__$1;
(statearr_18632_20332[(2)] = null);

(statearr_18632_20332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (24))){
var inst_18521 = (state_18622[(7)]);
var inst_18541 = (state_18622[(2)]);
var inst_18542 = cljs.core.next(inst_18521);
var inst_18499 = inst_18542;
var inst_18500 = null;
var inst_18501 = (0);
var inst_18502 = (0);
var state_18622__$1 = (function (){var statearr_18634 = state_18622;
(statearr_18634[(13)] = inst_18502);

(statearr_18634[(14)] = inst_18501);

(statearr_18634[(15)] = inst_18500);

(statearr_18634[(16)] = inst_18499);

(statearr_18634[(17)] = inst_18541);

return statearr_18634;
})();
var statearr_18635_20334 = state_18622__$1;
(statearr_18635_20334[(2)] = null);

(statearr_18635_20334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (39))){
var state_18622__$1 = state_18622;
var statearr_18639_20335 = state_18622__$1;
(statearr_18639_20335[(2)] = null);

(statearr_18639_20335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (4))){
var inst_18490 = (state_18622[(12)]);
var inst_18490__$1 = (state_18622[(2)]);
var inst_18491 = (inst_18490__$1 == null);
var state_18622__$1 = (function (){var statearr_18640 = state_18622;
(statearr_18640[(12)] = inst_18490__$1);

return statearr_18640;
})();
if(cljs.core.truth_(inst_18491)){
var statearr_18641_20336 = state_18622__$1;
(statearr_18641_20336[(1)] = (5));

} else {
var statearr_18642_20337 = state_18622__$1;
(statearr_18642_20337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (15))){
var inst_18502 = (state_18622[(13)]);
var inst_18501 = (state_18622[(14)]);
var inst_18500 = (state_18622[(15)]);
var inst_18499 = (state_18622[(16)]);
var inst_18517 = (state_18622[(2)]);
var inst_18518 = (inst_18502 + (1));
var tmp18636 = inst_18501;
var tmp18637 = inst_18500;
var tmp18638 = inst_18499;
var inst_18499__$1 = tmp18638;
var inst_18500__$1 = tmp18637;
var inst_18501__$1 = tmp18636;
var inst_18502__$1 = inst_18518;
var state_18622__$1 = (function (){var statearr_18644 = state_18622;
(statearr_18644[(13)] = inst_18502__$1);

(statearr_18644[(14)] = inst_18501__$1);

(statearr_18644[(15)] = inst_18500__$1);

(statearr_18644[(16)] = inst_18499__$1);

(statearr_18644[(18)] = inst_18517);

return statearr_18644;
})();
var statearr_18645_20338 = state_18622__$1;
(statearr_18645_20338[(2)] = null);

(statearr_18645_20338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (21))){
var inst_18545 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18649_20339 = state_18622__$1;
(statearr_18649_20339[(2)] = inst_18545);

(statearr_18649_20339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (31))){
var inst_18571 = (state_18622[(11)]);
var inst_18575 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18571);
var state_18622__$1 = state_18622;
var statearr_18650_20340 = state_18622__$1;
(statearr_18650_20340[(2)] = inst_18575);

(statearr_18650_20340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (32))){
var inst_18566 = (state_18622[(9)]);
var inst_18564 = (state_18622[(10)]);
var inst_18565 = (state_18622[(19)]);
var inst_18563 = (state_18622[(20)]);
var inst_18577 = (state_18622[(2)]);
var inst_18578 = (inst_18566 + (1));
var tmp18646 = inst_18564;
var tmp18647 = inst_18565;
var tmp18648 = inst_18563;
var inst_18563__$1 = tmp18648;
var inst_18564__$1 = tmp18646;
var inst_18565__$1 = tmp18647;
var inst_18566__$1 = inst_18578;
var state_18622__$1 = (function (){var statearr_18651 = state_18622;
(statearr_18651[(9)] = inst_18566__$1);

(statearr_18651[(10)] = inst_18564__$1);

(statearr_18651[(21)] = inst_18577);

(statearr_18651[(19)] = inst_18565__$1);

(statearr_18651[(20)] = inst_18563__$1);

return statearr_18651;
})();
var statearr_18652_20341 = state_18622__$1;
(statearr_18652_20341[(2)] = null);

(statearr_18652_20341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (40))){
var inst_18590 = (state_18622[(22)]);
var inst_18595 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18590);
var state_18622__$1 = state_18622;
var statearr_18653_20342 = state_18622__$1;
(statearr_18653_20342[(2)] = inst_18595);

(statearr_18653_20342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (33))){
var inst_18581 = (state_18622[(23)]);
var inst_18583 = cljs.core.chunked_seq_QMARK_(inst_18581);
var state_18622__$1 = state_18622;
if(inst_18583){
var statearr_18655_20343 = state_18622__$1;
(statearr_18655_20343[(1)] = (36));

} else {
var statearr_18656_20344 = state_18622__$1;
(statearr_18656_20344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (13))){
var inst_18511 = (state_18622[(24)]);
var inst_18514 = cljs.core.async.close_BANG_(inst_18511);
var state_18622__$1 = state_18622;
var statearr_18657_20346 = state_18622__$1;
(statearr_18657_20346[(2)] = inst_18514);

(statearr_18657_20346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (22))){
var inst_18535 = (state_18622[(8)]);
var inst_18538 = cljs.core.async.close_BANG_(inst_18535);
var state_18622__$1 = state_18622;
var statearr_18658_20351 = state_18622__$1;
(statearr_18658_20351[(2)] = inst_18538);

(statearr_18658_20351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (36))){
var inst_18581 = (state_18622[(23)]);
var inst_18585 = cljs.core.chunk_first(inst_18581);
var inst_18586 = cljs.core.chunk_rest(inst_18581);
var inst_18587 = cljs.core.count(inst_18585);
var inst_18563 = inst_18586;
var inst_18564 = inst_18585;
var inst_18565 = inst_18587;
var inst_18566 = (0);
var state_18622__$1 = (function (){var statearr_18659 = state_18622;
(statearr_18659[(9)] = inst_18566);

(statearr_18659[(10)] = inst_18564);

(statearr_18659[(19)] = inst_18565);

(statearr_18659[(20)] = inst_18563);

return statearr_18659;
})();
var statearr_18660_20352 = state_18622__$1;
(statearr_18660_20352[(2)] = null);

(statearr_18660_20352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (41))){
var inst_18581 = (state_18622[(23)]);
var inst_18597 = (state_18622[(2)]);
var inst_18598 = cljs.core.next(inst_18581);
var inst_18563 = inst_18598;
var inst_18564 = null;
var inst_18565 = (0);
var inst_18566 = (0);
var state_18622__$1 = (function (){var statearr_18662 = state_18622;
(statearr_18662[(9)] = inst_18566);

(statearr_18662[(10)] = inst_18564);

(statearr_18662[(25)] = inst_18597);

(statearr_18662[(19)] = inst_18565);

(statearr_18662[(20)] = inst_18563);

return statearr_18662;
})();
var statearr_18663_20355 = state_18622__$1;
(statearr_18663_20355[(2)] = null);

(statearr_18663_20355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (43))){
var state_18622__$1 = state_18622;
var statearr_18664_20356 = state_18622__$1;
(statearr_18664_20356[(2)] = null);

(statearr_18664_20356[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (29))){
var inst_18606 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18665_20357 = state_18622__$1;
(statearr_18665_20357[(2)] = inst_18606);

(statearr_18665_20357[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (44))){
var inst_18615 = (state_18622[(2)]);
var state_18622__$1 = (function (){var statearr_18666 = state_18622;
(statearr_18666[(26)] = inst_18615);

return statearr_18666;
})();
var statearr_18667_20359 = state_18622__$1;
(statearr_18667_20359[(2)] = null);

(statearr_18667_20359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (6))){
var inst_18555 = (state_18622[(27)]);
var inst_18554 = cljs.core.deref(cs);
var inst_18555__$1 = cljs.core.keys(inst_18554);
var inst_18556 = cljs.core.count(inst_18555__$1);
var inst_18557 = cljs.core.reset_BANG_(dctr,inst_18556);
var inst_18562 = cljs.core.seq(inst_18555__$1);
var inst_18563 = inst_18562;
var inst_18564 = null;
var inst_18565 = (0);
var inst_18566 = (0);
var state_18622__$1 = (function (){var statearr_18669 = state_18622;
(statearr_18669[(28)] = inst_18557);

(statearr_18669[(9)] = inst_18566);

(statearr_18669[(10)] = inst_18564);

(statearr_18669[(19)] = inst_18565);

(statearr_18669[(20)] = inst_18563);

(statearr_18669[(27)] = inst_18555__$1);

return statearr_18669;
})();
var statearr_18670_20360 = state_18622__$1;
(statearr_18670_20360[(2)] = null);

(statearr_18670_20360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (28))){
var inst_18581 = (state_18622[(23)]);
var inst_18563 = (state_18622[(20)]);
var inst_18581__$1 = cljs.core.seq(inst_18563);
var state_18622__$1 = (function (){var statearr_18671 = state_18622;
(statearr_18671[(23)] = inst_18581__$1);

return statearr_18671;
})();
if(inst_18581__$1){
var statearr_18672_20363 = state_18622__$1;
(statearr_18672_20363[(1)] = (33));

} else {
var statearr_18673_20364 = state_18622__$1;
(statearr_18673_20364[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (25))){
var inst_18566 = (state_18622[(9)]);
var inst_18565 = (state_18622[(19)]);
var inst_18568 = (inst_18566 < inst_18565);
var inst_18569 = inst_18568;
var state_18622__$1 = state_18622;
if(cljs.core.truth_(inst_18569)){
var statearr_18674_20365 = state_18622__$1;
(statearr_18674_20365[(1)] = (27));

} else {
var statearr_18675_20366 = state_18622__$1;
(statearr_18675_20366[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (34))){
var state_18622__$1 = state_18622;
var statearr_18676_20367 = state_18622__$1;
(statearr_18676_20367[(2)] = null);

(statearr_18676_20367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (17))){
var state_18622__$1 = state_18622;
var statearr_18677_20377 = state_18622__$1;
(statearr_18677_20377[(2)] = null);

(statearr_18677_20377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (3))){
var inst_18620 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18622__$1,inst_18620);
} else {
if((state_val_18623 === (12))){
var inst_18550 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18679_20380 = state_18622__$1;
(statearr_18679_20380[(2)] = inst_18550);

(statearr_18679_20380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (2))){
var state_18622__$1 = state_18622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18622__$1,(4),ch);
} else {
if((state_val_18623 === (23))){
var state_18622__$1 = state_18622;
var statearr_18680_20382 = state_18622__$1;
(statearr_18680_20382[(2)] = null);

(statearr_18680_20382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (35))){
var inst_18604 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18681_20383 = state_18622__$1;
(statearr_18681_20383[(2)] = inst_18604);

(statearr_18681_20383[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (19))){
var inst_18521 = (state_18622[(7)]);
var inst_18526 = cljs.core.chunk_first(inst_18521);
var inst_18527 = cljs.core.chunk_rest(inst_18521);
var inst_18528 = cljs.core.count(inst_18526);
var inst_18499 = inst_18527;
var inst_18500 = inst_18526;
var inst_18501 = inst_18528;
var inst_18502 = (0);
var state_18622__$1 = (function (){var statearr_18682 = state_18622;
(statearr_18682[(13)] = inst_18502);

(statearr_18682[(14)] = inst_18501);

(statearr_18682[(15)] = inst_18500);

(statearr_18682[(16)] = inst_18499);

return statearr_18682;
})();
var statearr_18684_20384 = state_18622__$1;
(statearr_18684_20384[(2)] = null);

(statearr_18684_20384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (11))){
var inst_18521 = (state_18622[(7)]);
var inst_18499 = (state_18622[(16)]);
var inst_18521__$1 = cljs.core.seq(inst_18499);
var state_18622__$1 = (function (){var statearr_18685 = state_18622;
(statearr_18685[(7)] = inst_18521__$1);

return statearr_18685;
})();
if(inst_18521__$1){
var statearr_18686_20385 = state_18622__$1;
(statearr_18686_20385[(1)] = (16));

} else {
var statearr_18687_20386 = state_18622__$1;
(statearr_18687_20386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (9))){
var inst_18552 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18688_20387 = state_18622__$1;
(statearr_18688_20387[(2)] = inst_18552);

(statearr_18688_20387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (5))){
var inst_18497 = cljs.core.deref(cs);
var inst_18498 = cljs.core.seq(inst_18497);
var inst_18499 = inst_18498;
var inst_18500 = null;
var inst_18501 = (0);
var inst_18502 = (0);
var state_18622__$1 = (function (){var statearr_18689 = state_18622;
(statearr_18689[(13)] = inst_18502);

(statearr_18689[(14)] = inst_18501);

(statearr_18689[(15)] = inst_18500);

(statearr_18689[(16)] = inst_18499);

return statearr_18689;
})();
var statearr_18690_20388 = state_18622__$1;
(statearr_18690_20388[(2)] = null);

(statearr_18690_20388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (14))){
var state_18622__$1 = state_18622;
var statearr_18692_20389 = state_18622__$1;
(statearr_18692_20389[(2)] = null);

(statearr_18692_20389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (45))){
var inst_18612 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18693_20390 = state_18622__$1;
(statearr_18693_20390[(2)] = inst_18612);

(statearr_18693_20390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (26))){
var inst_18555 = (state_18622[(27)]);
var inst_18608 = (state_18622[(2)]);
var inst_18609 = cljs.core.seq(inst_18555);
var state_18622__$1 = (function (){var statearr_18694 = state_18622;
(statearr_18694[(29)] = inst_18608);

return statearr_18694;
})();
if(inst_18609){
var statearr_18695_20391 = state_18622__$1;
(statearr_18695_20391[(1)] = (42));

} else {
var statearr_18696_20392 = state_18622__$1;
(statearr_18696_20392[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (16))){
var inst_18521 = (state_18622[(7)]);
var inst_18523 = cljs.core.chunked_seq_QMARK_(inst_18521);
var state_18622__$1 = state_18622;
if(inst_18523){
var statearr_18697_20394 = state_18622__$1;
(statearr_18697_20394[(1)] = (19));

} else {
var statearr_18698_20396 = state_18622__$1;
(statearr_18698_20396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (38))){
var inst_18601 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18699_20397 = state_18622__$1;
(statearr_18699_20397[(2)] = inst_18601);

(statearr_18699_20397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (30))){
var state_18622__$1 = state_18622;
var statearr_18700_20400 = state_18622__$1;
(statearr_18700_20400[(2)] = null);

(statearr_18700_20400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (10))){
var inst_18502 = (state_18622[(13)]);
var inst_18500 = (state_18622[(15)]);
var inst_18510 = cljs.core._nth(inst_18500,inst_18502);
var inst_18511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18510,(0),null);
var inst_18512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18510,(1),null);
var state_18622__$1 = (function (){var statearr_18702 = state_18622;
(statearr_18702[(24)] = inst_18511);

return statearr_18702;
})();
if(cljs.core.truth_(inst_18512)){
var statearr_18703_20401 = state_18622__$1;
(statearr_18703_20401[(1)] = (13));

} else {
var statearr_18704_20402 = state_18622__$1;
(statearr_18704_20402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (18))){
var inst_18548 = (state_18622[(2)]);
var state_18622__$1 = state_18622;
var statearr_18705_20403 = state_18622__$1;
(statearr_18705_20403[(2)] = inst_18548);

(statearr_18705_20403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (42))){
var state_18622__$1 = state_18622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18622__$1,(45),dchan);
} else {
if((state_val_18623 === (37))){
var inst_18581 = (state_18622[(23)]);
var inst_18490 = (state_18622[(12)]);
var inst_18590 = (state_18622[(22)]);
var inst_18590__$1 = cljs.core.first(inst_18581);
var inst_18591 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18590__$1,inst_18490,done);
var state_18622__$1 = (function (){var statearr_18706 = state_18622;
(statearr_18706[(22)] = inst_18590__$1);

return statearr_18706;
})();
if(cljs.core.truth_(inst_18591)){
var statearr_18707_20404 = state_18622__$1;
(statearr_18707_20404[(1)] = (39));

} else {
var statearr_18708_20406 = state_18622__$1;
(statearr_18708_20406[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18623 === (8))){
var inst_18502 = (state_18622[(13)]);
var inst_18501 = (state_18622[(14)]);
var inst_18504 = (inst_18502 < inst_18501);
var inst_18505 = inst_18504;
var state_18622__$1 = state_18622;
if(cljs.core.truth_(inst_18505)){
var statearr_18710_20408 = state_18622__$1;
(statearr_18710_20408[(1)] = (10));

} else {
var statearr_18711_20409 = state_18622__$1;
(statearr_18711_20409[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17491__auto__ = null;
var cljs$core$async$mult_$_state_machine__17491__auto____0 = (function (){
var statearr_18712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18712[(0)] = cljs$core$async$mult_$_state_machine__17491__auto__);

(statearr_18712[(1)] = (1));

return statearr_18712;
});
var cljs$core$async$mult_$_state_machine__17491__auto____1 = (function (state_18622){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18622);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18713){var ex__17494__auto__ = e18713;
var statearr_18714_20410 = state_18622;
(statearr_18714_20410[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18622[(4)]))){
var statearr_18715_20411 = state_18622;
(statearr_18715_20411[(1)] = cljs.core.first((state_18622[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20412 = state_18622;
state_18622 = G__20412;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17491__auto__ = function(state_18622){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17491__auto____1.call(this,state_18622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17491__auto____0;
cljs$core$async$mult_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17491__auto____1;
return cljs$core$async$mult_$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18717 = f__17678__auto__();
(statearr_18717[(6)] = c__17676__auto___20325);

return statearr_18717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18719 = arguments.length;
switch (G__18719) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20419 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20419(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20427 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20427(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20429 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20429(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20430 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20430(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20444 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20444(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20455 = arguments.length;
var i__5770__auto___20459 = (0);
while(true){
if((i__5770__auto___20459 < len__5769__auto___20455)){
args__5775__auto__.push((arguments[i__5770__auto___20459]));

var G__20460 = (i__5770__auto___20459 + (1));
i__5770__auto___20459 = G__20460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18730){
var map__18731 = p__18730;
var map__18731__$1 = cljs.core.__destructure_map(map__18731);
var opts = map__18731__$1;
var statearr_18732_20468 = state;
(statearr_18732_20468[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18733_20472 = state;
(statearr_18733_20472[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18734_20473 = state;
(statearr_18734_20473[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18725){
var G__18726 = cljs.core.first(seq18725);
var seq18725__$1 = cljs.core.next(seq18725);
var G__18727 = cljs.core.first(seq18725__$1);
var seq18725__$2 = cljs.core.next(seq18725__$1);
var G__18728 = cljs.core.first(seq18725__$2);
var seq18725__$3 = cljs.core.next(seq18725__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18726,G__18727,G__18728,seq18725__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18737 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18738){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18738 = meta18738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18739,meta18738__$1){
var self__ = this;
var _18739__$1 = this;
return (new cljs.core.async.t_cljs$core$async18737(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18738__$1));
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18739){
var self__ = this;
var _18739__$1 = this;
return self__.meta18738;
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18738","meta18738",-1947437780,null)], null);
}));

(cljs.core.async.t_cljs$core$async18737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18737");

(cljs.core.async.t_cljs$core$async18737.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18737.
 */
cljs.core.async.__GT_t_cljs$core$async18737 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18737(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18738){
return (new cljs.core.async.t_cljs$core$async18737(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18738));
});

}

return (new cljs.core.async.t_cljs$core$async18737(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17676__auto___20505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18810){
var state_val_18811 = (state_18810[(1)]);
if((state_val_18811 === (7))){
var inst_18770 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18770)){
var statearr_18813_20507 = state_18810__$1;
(statearr_18813_20507[(1)] = (8));

} else {
var statearr_18814_20508 = state_18810__$1;
(statearr_18814_20508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (20))){
var inst_18763 = (state_18810[(7)]);
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18810__$1,(23),out,inst_18763);
} else {
if((state_val_18811 === (1))){
var inst_18746 = calc_state();
var inst_18747 = cljs.core.__destructure_map(inst_18746);
var inst_18748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18747,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18747,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18747,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18751 = inst_18746;
var state_18810__$1 = (function (){var statearr_18815 = state_18810;
(statearr_18815[(8)] = inst_18751);

(statearr_18815[(9)] = inst_18749);

(statearr_18815[(10)] = inst_18750);

(statearr_18815[(11)] = inst_18748);

return statearr_18815;
})();
var statearr_18816_20509 = state_18810__$1;
(statearr_18816_20509[(2)] = null);

(statearr_18816_20509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (24))){
var inst_18754 = (state_18810[(12)]);
var inst_18751 = inst_18754;
var state_18810__$1 = (function (){var statearr_18818 = state_18810;
(statearr_18818[(8)] = inst_18751);

return statearr_18818;
})();
var statearr_18819_20512 = state_18810__$1;
(statearr_18819_20512[(2)] = null);

(statearr_18819_20512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (4))){
var inst_18763 = (state_18810[(7)]);
var inst_18765 = (state_18810[(13)]);
var inst_18762 = (state_18810[(2)]);
var inst_18763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18762,(0),null);
var inst_18764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18762,(1),null);
var inst_18765__$1 = (inst_18763__$1 == null);
var state_18810__$1 = (function (){var statearr_18820 = state_18810;
(statearr_18820[(7)] = inst_18763__$1);

(statearr_18820[(14)] = inst_18764);

(statearr_18820[(13)] = inst_18765__$1);

return statearr_18820;
})();
if(cljs.core.truth_(inst_18765__$1)){
var statearr_18821_20515 = state_18810__$1;
(statearr_18821_20515[(1)] = (5));

} else {
var statearr_18822_20520 = state_18810__$1;
(statearr_18822_20520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (15))){
var inst_18755 = (state_18810[(15)]);
var inst_18784 = (state_18810[(16)]);
var inst_18784__$1 = cljs.core.empty_QMARK_(inst_18755);
var state_18810__$1 = (function (){var statearr_18823 = state_18810;
(statearr_18823[(16)] = inst_18784__$1);

return statearr_18823;
})();
if(inst_18784__$1){
var statearr_18824_20521 = state_18810__$1;
(statearr_18824_20521[(1)] = (17));

} else {
var statearr_18825_20523 = state_18810__$1;
(statearr_18825_20523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (21))){
var inst_18754 = (state_18810[(12)]);
var inst_18751 = inst_18754;
var state_18810__$1 = (function (){var statearr_18826 = state_18810;
(statearr_18826[(8)] = inst_18751);

return statearr_18826;
})();
var statearr_18828_20524 = state_18810__$1;
(statearr_18828_20524[(2)] = null);

(statearr_18828_20524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (13))){
var inst_18777 = (state_18810[(2)]);
var inst_18778 = calc_state();
var inst_18751 = inst_18778;
var state_18810__$1 = (function (){var statearr_18829 = state_18810;
(statearr_18829[(8)] = inst_18751);

(statearr_18829[(17)] = inst_18777);

return statearr_18829;
})();
var statearr_18830_20526 = state_18810__$1;
(statearr_18830_20526[(2)] = null);

(statearr_18830_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (22))){
var inst_18804 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18831_20527 = state_18810__$1;
(statearr_18831_20527[(2)] = inst_18804);

(statearr_18831_20527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (6))){
var inst_18764 = (state_18810[(14)]);
var inst_18768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18764,change);
var state_18810__$1 = state_18810;
var statearr_18832_20528 = state_18810__$1;
(statearr_18832_20528[(2)] = inst_18768);

(statearr_18832_20528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (25))){
var state_18810__$1 = state_18810;
var statearr_18833_20530 = state_18810__$1;
(statearr_18833_20530[(2)] = null);

(statearr_18833_20530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (17))){
var inst_18764 = (state_18810[(14)]);
var inst_18756 = (state_18810[(18)]);
var inst_18786 = (inst_18756.cljs$core$IFn$_invoke$arity$1 ? inst_18756.cljs$core$IFn$_invoke$arity$1(inst_18764) : inst_18756.call(null,inst_18764));
var inst_18787 = cljs.core.not(inst_18786);
var state_18810__$1 = state_18810;
var statearr_18834_20532 = state_18810__$1;
(statearr_18834_20532[(2)] = inst_18787);

(statearr_18834_20532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (3))){
var inst_18808 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18810__$1,inst_18808);
} else {
if((state_val_18811 === (12))){
var state_18810__$1 = state_18810;
var statearr_18836_20534 = state_18810__$1;
(statearr_18836_20534[(2)] = null);

(statearr_18836_20534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (2))){
var inst_18751 = (state_18810[(8)]);
var inst_18754 = (state_18810[(12)]);
var inst_18754__$1 = cljs.core.__destructure_map(inst_18751);
var inst_18755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18754__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18754__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18754__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18810__$1 = (function (){var statearr_18837 = state_18810;
(statearr_18837[(15)] = inst_18755);

(statearr_18837[(18)] = inst_18756);

(statearr_18837[(12)] = inst_18754__$1);

return statearr_18837;
})();
return cljs.core.async.ioc_alts_BANG_(state_18810__$1,(4),inst_18757);
} else {
if((state_val_18811 === (23))){
var inst_18795 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18795)){
var statearr_18838_20538 = state_18810__$1;
(statearr_18838_20538[(1)] = (24));

} else {
var statearr_18839_20539 = state_18810__$1;
(statearr_18839_20539[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (19))){
var inst_18790 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18840_20540 = state_18810__$1;
(statearr_18840_20540[(2)] = inst_18790);

(statearr_18840_20540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (11))){
var inst_18764 = (state_18810[(14)]);
var inst_18774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18764);
var state_18810__$1 = state_18810;
var statearr_18842_20541 = state_18810__$1;
(statearr_18842_20541[(2)] = inst_18774);

(statearr_18842_20541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (9))){
var inst_18755 = (state_18810[(15)]);
var inst_18781 = (state_18810[(19)]);
var inst_18764 = (state_18810[(14)]);
var inst_18781__$1 = (inst_18755.cljs$core$IFn$_invoke$arity$1 ? inst_18755.cljs$core$IFn$_invoke$arity$1(inst_18764) : inst_18755.call(null,inst_18764));
var state_18810__$1 = (function (){var statearr_18843 = state_18810;
(statearr_18843[(19)] = inst_18781__$1);

return statearr_18843;
})();
if(cljs.core.truth_(inst_18781__$1)){
var statearr_18844_20542 = state_18810__$1;
(statearr_18844_20542[(1)] = (14));

} else {
var statearr_18845_20543 = state_18810__$1;
(statearr_18845_20543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (5))){
var inst_18765 = (state_18810[(13)]);
var state_18810__$1 = state_18810;
var statearr_18846_20548 = state_18810__$1;
(statearr_18846_20548[(2)] = inst_18765);

(statearr_18846_20548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (14))){
var inst_18781 = (state_18810[(19)]);
var state_18810__$1 = state_18810;
var statearr_18847_20549 = state_18810__$1;
(statearr_18847_20549[(2)] = inst_18781);

(statearr_18847_20549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (26))){
var inst_18800 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18848_20550 = state_18810__$1;
(statearr_18848_20550[(2)] = inst_18800);

(statearr_18848_20550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (16))){
var inst_18792 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18792)){
var statearr_18849_20551 = state_18810__$1;
(statearr_18849_20551[(1)] = (20));

} else {
var statearr_18851_20552 = state_18810__$1;
(statearr_18851_20552[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (10))){
var inst_18806 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18852_20553 = state_18810__$1;
(statearr_18852_20553[(2)] = inst_18806);

(statearr_18852_20553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (18))){
var inst_18784 = (state_18810[(16)]);
var state_18810__$1 = state_18810;
var statearr_18853_20554 = state_18810__$1;
(statearr_18853_20554[(2)] = inst_18784);

(statearr_18853_20554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (8))){
var inst_18763 = (state_18810[(7)]);
var inst_18772 = (inst_18763 == null);
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18772)){
var statearr_18854_20556 = state_18810__$1;
(statearr_18854_20556[(1)] = (11));

} else {
var statearr_18855_20557 = state_18810__$1;
(statearr_18855_20557[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17491__auto__ = null;
var cljs$core$async$mix_$_state_machine__17491__auto____0 = (function (){
var statearr_18856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18856[(0)] = cljs$core$async$mix_$_state_machine__17491__auto__);

(statearr_18856[(1)] = (1));

return statearr_18856;
});
var cljs$core$async$mix_$_state_machine__17491__auto____1 = (function (state_18810){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18810);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18857){var ex__17494__auto__ = e18857;
var statearr_18858_20558 = state_18810;
(statearr_18858_20558[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18810[(4)]))){
var statearr_18859_20559 = state_18810;
(statearr_18859_20559[(1)] = cljs.core.first((state_18810[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20560 = state_18810;
state_18810 = G__20560;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17491__auto__ = function(state_18810){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17491__auto____1.call(this,state_18810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17491__auto____0;
cljs$core$async$mix_$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17491__auto____1;
return cljs$core$async$mix_$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_18861 = f__17678__auto__();
(statearr_18861[(6)] = c__17676__auto___20505);

return statearr_18861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20571 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20571(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20579 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20579(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20586 = (function() {
var G__20587 = null;
var G__20587__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20587__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20587 = function(p,v){
switch(arguments.length){
case 1:
return G__20587__1.call(this,p);
case 2:
return G__20587__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20587.cljs$core$IFn$_invoke$arity$1 = G__20587__1;
G__20587.cljs$core$IFn$_invoke$arity$2 = G__20587__2;
return G__20587;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18867 = arguments.length;
switch (G__18867) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20586(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20586(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18872 = arguments.length;
switch (G__18872) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18870_SHARP_){
if(cljs.core.truth_((p1__18870_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18870_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18870_SHARP_.call(null,topic)))){
return p1__18870_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18870_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18873 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18874){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18874 = meta18874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18875,meta18874__$1){
var self__ = this;
var _18875__$1 = this;
return (new cljs.core.async.t_cljs$core$async18873(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18874__$1));
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18875){
var self__ = this;
var _18875__$1 = this;
return self__.meta18874;
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18874","meta18874",118389893,null)], null);
}));

(cljs.core.async.t_cljs$core$async18873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18873");

(cljs.core.async.t_cljs$core$async18873.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18873.
 */
cljs.core.async.__GT_t_cljs$core$async18873 = (function cljs$core$async$__GT_t_cljs$core$async18873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18874){
return (new cljs.core.async.t_cljs$core$async18873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18874));
});

}

return (new cljs.core.async.t_cljs$core$async18873(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17676__auto___20614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_18965){
var state_val_18966 = (state_18965[(1)]);
if((state_val_18966 === (7))){
var inst_18961 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18971_20615 = state_18965__$1;
(statearr_18971_20615[(2)] = inst_18961);

(statearr_18971_20615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (20))){
var state_18965__$1 = state_18965;
var statearr_18974_20617 = state_18965__$1;
(statearr_18974_20617[(2)] = null);

(statearr_18974_20617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (1))){
var state_18965__$1 = state_18965;
var statearr_18977_20618 = state_18965__$1;
(statearr_18977_20618[(2)] = null);

(statearr_18977_20618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (24))){
var inst_18943 = (state_18965[(7)]);
var inst_18952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18943);
var state_18965__$1 = state_18965;
var statearr_18981_20620 = state_18965__$1;
(statearr_18981_20620[(2)] = inst_18952);

(statearr_18981_20620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (4))){
var inst_18888 = (state_18965[(8)]);
var inst_18888__$1 = (state_18965[(2)]);
var inst_18889 = (inst_18888__$1 == null);
var state_18965__$1 = (function (){var statearr_18983 = state_18965;
(statearr_18983[(8)] = inst_18888__$1);

return statearr_18983;
})();
if(cljs.core.truth_(inst_18889)){
var statearr_18985_20621 = state_18965__$1;
(statearr_18985_20621[(1)] = (5));

} else {
var statearr_18988_20624 = state_18965__$1;
(statearr_18988_20624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (15))){
var inst_18936 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18990_20628 = state_18965__$1;
(statearr_18990_20628[(2)] = inst_18936);

(statearr_18990_20628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (21))){
var inst_18958 = (state_18965[(2)]);
var state_18965__$1 = (function (){var statearr_18993 = state_18965;
(statearr_18993[(9)] = inst_18958);

return statearr_18993;
})();
var statearr_18995_20629 = state_18965__$1;
(statearr_18995_20629[(2)] = null);

(statearr_18995_20629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (13))){
var inst_18915 = (state_18965[(10)]);
var inst_18918 = cljs.core.chunked_seq_QMARK_(inst_18915);
var state_18965__$1 = state_18965;
if(inst_18918){
var statearr_18997_20635 = state_18965__$1;
(statearr_18997_20635[(1)] = (16));

} else {
var statearr_18998_20636 = state_18965__$1;
(statearr_18998_20636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (22))){
var inst_18949 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
if(cljs.core.truth_(inst_18949)){
var statearr_19002_20637 = state_18965__$1;
(statearr_19002_20637[(1)] = (23));

} else {
var statearr_19005_20638 = state_18965__$1;
(statearr_19005_20638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (6))){
var inst_18943 = (state_18965[(7)]);
var inst_18945 = (state_18965[(11)]);
var inst_18888 = (state_18965[(8)]);
var inst_18943__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18888) : topic_fn.call(null,inst_18888));
var inst_18944 = cljs.core.deref(mults);
var inst_18945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18944,inst_18943__$1);
var state_18965__$1 = (function (){var statearr_19010 = state_18965;
(statearr_19010[(7)] = inst_18943__$1);

(statearr_19010[(11)] = inst_18945__$1);

return statearr_19010;
})();
if(cljs.core.truth_(inst_18945__$1)){
var statearr_19011_20639 = state_18965__$1;
(statearr_19011_20639[(1)] = (19));

} else {
var statearr_19014_20640 = state_18965__$1;
(statearr_19014_20640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (25))){
var inst_18955 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_19018_20641 = state_18965__$1;
(statearr_19018_20641[(2)] = inst_18955);

(statearr_19018_20641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (17))){
var inst_18915 = (state_18965[(10)]);
var inst_18925 = cljs.core.first(inst_18915);
var inst_18928 = cljs.core.async.muxch_STAR_(inst_18925);
var inst_18929 = cljs.core.async.close_BANG_(inst_18928);
var inst_18930 = cljs.core.next(inst_18915);
var inst_18900 = inst_18930;
var inst_18901 = null;
var inst_18902 = (0);
var inst_18903 = (0);
var state_18965__$1 = (function (){var statearr_19023 = state_18965;
(statearr_19023[(12)] = inst_18900);

(statearr_19023[(13)] = inst_18902);

(statearr_19023[(14)] = inst_18903);

(statearr_19023[(15)] = inst_18929);

(statearr_19023[(16)] = inst_18901);

return statearr_19023;
})();
var statearr_19027_20646 = state_18965__$1;
(statearr_19027_20646[(2)] = null);

(statearr_19027_20646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (3))){
var inst_18963 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18965__$1,inst_18963);
} else {
if((state_val_18966 === (12))){
var inst_18939 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_19029_20647 = state_18965__$1;
(statearr_19029_20647[(2)] = inst_18939);

(statearr_19029_20647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (2))){
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18965__$1,(4),ch);
} else {
if((state_val_18966 === (23))){
var state_18965__$1 = state_18965;
var statearr_19031_20648 = state_18965__$1;
(statearr_19031_20648[(2)] = null);

(statearr_19031_20648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (19))){
var inst_18945 = (state_18965[(11)]);
var inst_18888 = (state_18965[(8)]);
var inst_18947 = cljs.core.async.muxch_STAR_(inst_18945);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18965__$1,(22),inst_18947,inst_18888);
} else {
if((state_val_18966 === (11))){
var inst_18915 = (state_18965[(10)]);
var inst_18900 = (state_18965[(12)]);
var inst_18915__$1 = cljs.core.seq(inst_18900);
var state_18965__$1 = (function (){var statearr_19035 = state_18965;
(statearr_19035[(10)] = inst_18915__$1);

return statearr_19035;
})();
if(inst_18915__$1){
var statearr_19037_20649 = state_18965__$1;
(statearr_19037_20649[(1)] = (13));

} else {
var statearr_19038_20650 = state_18965__$1;
(statearr_19038_20650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (9))){
var inst_18941 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_19042_20651 = state_18965__$1;
(statearr_19042_20651[(2)] = inst_18941);

(statearr_19042_20651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (5))){
var inst_18897 = cljs.core.deref(mults);
var inst_18898 = cljs.core.vals(inst_18897);
var inst_18899 = cljs.core.seq(inst_18898);
var inst_18900 = inst_18899;
var inst_18901 = null;
var inst_18902 = (0);
var inst_18903 = (0);
var state_18965__$1 = (function (){var statearr_19048 = state_18965;
(statearr_19048[(12)] = inst_18900);

(statearr_19048[(13)] = inst_18902);

(statearr_19048[(14)] = inst_18903);

(statearr_19048[(16)] = inst_18901);

return statearr_19048;
})();
var statearr_19050_20652 = state_18965__$1;
(statearr_19050_20652[(2)] = null);

(statearr_19050_20652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (14))){
var state_18965__$1 = state_18965;
var statearr_19055_20653 = state_18965__$1;
(statearr_19055_20653[(2)] = null);

(statearr_19055_20653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (16))){
var inst_18915 = (state_18965[(10)]);
var inst_18920 = cljs.core.chunk_first(inst_18915);
var inst_18921 = cljs.core.chunk_rest(inst_18915);
var inst_18922 = cljs.core.count(inst_18920);
var inst_18900 = inst_18921;
var inst_18901 = inst_18920;
var inst_18902 = inst_18922;
var inst_18903 = (0);
var state_18965__$1 = (function (){var statearr_19061 = state_18965;
(statearr_19061[(12)] = inst_18900);

(statearr_19061[(13)] = inst_18902);

(statearr_19061[(14)] = inst_18903);

(statearr_19061[(16)] = inst_18901);

return statearr_19061;
})();
var statearr_19063_20655 = state_18965__$1;
(statearr_19063_20655[(2)] = null);

(statearr_19063_20655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (10))){
var inst_18900 = (state_18965[(12)]);
var inst_18902 = (state_18965[(13)]);
var inst_18903 = (state_18965[(14)]);
var inst_18901 = (state_18965[(16)]);
var inst_18909 = cljs.core._nth(inst_18901,inst_18903);
var inst_18910 = cljs.core.async.muxch_STAR_(inst_18909);
var inst_18911 = cljs.core.async.close_BANG_(inst_18910);
var inst_18912 = (inst_18903 + (1));
var tmp19051 = inst_18900;
var tmp19052 = inst_18902;
var tmp19053 = inst_18901;
var inst_18900__$1 = tmp19051;
var inst_18901__$1 = tmp19053;
var inst_18902__$1 = tmp19052;
var inst_18903__$1 = inst_18912;
var state_18965__$1 = (function (){var statearr_19067 = state_18965;
(statearr_19067[(12)] = inst_18900__$1);

(statearr_19067[(13)] = inst_18902__$1);

(statearr_19067[(14)] = inst_18903__$1);

(statearr_19067[(16)] = inst_18901__$1);

(statearr_19067[(17)] = inst_18911);

return statearr_19067;
})();
var statearr_19068_20663 = state_18965__$1;
(statearr_19068_20663[(2)] = null);

(statearr_19068_20663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (18))){
var inst_18933 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_19070_20667 = state_18965__$1;
(statearr_19070_20667[(2)] = inst_18933);

(statearr_19070_20667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (8))){
var inst_18902 = (state_18965[(13)]);
var inst_18903 = (state_18965[(14)]);
var inst_18906 = (inst_18903 < inst_18902);
var inst_18907 = inst_18906;
var state_18965__$1 = state_18965;
if(cljs.core.truth_(inst_18907)){
var statearr_19073_20668 = state_18965__$1;
(statearr_19073_20668[(1)] = (10));

} else {
var statearr_19076_20669 = state_18965__$1;
(statearr_19076_20669[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19079[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19079[(1)] = (1));

return statearr_19079;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_18965){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_18965);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19080){var ex__17494__auto__ = e19080;
var statearr_19081_20673 = state_18965;
(statearr_19081_20673[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_18965[(4)]))){
var statearr_19084_20674 = state_18965;
(statearr_19084_20674[(1)] = cljs.core.first((state_18965[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20675 = state_18965;
state_18965 = G__20675;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_18965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_18965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19087 = f__17678__auto__();
(statearr_19087[(6)] = c__17676__auto___20614);

return statearr_19087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19092 = arguments.length;
switch (G__19092) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19103 = arguments.length;
switch (G__19103) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19113 = arguments.length;
switch (G__19113) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17676__auto___20683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19177){
var state_val_19178 = (state_19177[(1)]);
if((state_val_19178 === (7))){
var state_19177__$1 = state_19177;
var statearr_19180_20684 = state_19177__$1;
(statearr_19180_20684[(2)] = null);

(statearr_19180_20684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (1))){
var state_19177__$1 = state_19177;
var statearr_19181_20685 = state_19177__$1;
(statearr_19181_20685[(2)] = null);

(statearr_19181_20685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (4))){
var inst_19130 = (state_19177[(7)]);
var inst_19131 = (state_19177[(8)]);
var inst_19133 = (inst_19131 < inst_19130);
var state_19177__$1 = state_19177;
if(cljs.core.truth_(inst_19133)){
var statearr_19185_20686 = state_19177__$1;
(statearr_19185_20686[(1)] = (6));

} else {
var statearr_19186_20687 = state_19177__$1;
(statearr_19186_20687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (15))){
var inst_19160 = (state_19177[(9)]);
var inst_19167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19160);
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19177__$1,(17),out,inst_19167);
} else {
if((state_val_19178 === (13))){
var inst_19160 = (state_19177[(9)]);
var inst_19160__$1 = (state_19177[(2)]);
var inst_19161 = cljs.core.some(cljs.core.nil_QMARK_,inst_19160__$1);
var state_19177__$1 = (function (){var statearr_19190 = state_19177;
(statearr_19190[(9)] = inst_19160__$1);

return statearr_19190;
})();
if(cljs.core.truth_(inst_19161)){
var statearr_19192_20688 = state_19177__$1;
(statearr_19192_20688[(1)] = (14));

} else {
var statearr_19193_20689 = state_19177__$1;
(statearr_19193_20689[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (6))){
var state_19177__$1 = state_19177;
var statearr_19195_20690 = state_19177__$1;
(statearr_19195_20690[(2)] = null);

(statearr_19195_20690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (17))){
var inst_19169 = (state_19177[(2)]);
var state_19177__$1 = (function (){var statearr_19205 = state_19177;
(statearr_19205[(10)] = inst_19169);

return statearr_19205;
})();
var statearr_19208_20691 = state_19177__$1;
(statearr_19208_20691[(2)] = null);

(statearr_19208_20691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (3))){
var inst_19174 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19177__$1,inst_19174);
} else {
if((state_val_19178 === (12))){
var _ = (function (){var statearr_19212 = state_19177;
(statearr_19212[(4)] = cljs.core.rest((state_19177[(4)])));

return statearr_19212;
})();
var state_19177__$1 = state_19177;
var ex19202 = (state_19177__$1[(2)]);
var statearr_19214_20692 = state_19177__$1;
(statearr_19214_20692[(5)] = ex19202);


if((ex19202 instanceof Object)){
var statearr_19219_20697 = state_19177__$1;
(statearr_19219_20697[(1)] = (11));

(statearr_19219_20697[(5)] = null);

} else {
throw ex19202;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (2))){
var inst_19129 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19130 = cnt;
var inst_19131 = (0);
var state_19177__$1 = (function (){var statearr_19232 = state_19177;
(statearr_19232[(11)] = inst_19129);

(statearr_19232[(7)] = inst_19130);

(statearr_19232[(8)] = inst_19131);

return statearr_19232;
})();
var statearr_19233_20698 = state_19177__$1;
(statearr_19233_20698[(2)] = null);

(statearr_19233_20698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (11))){
var inst_19138 = (state_19177[(2)]);
var inst_19139 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19177__$1 = (function (){var statearr_19235 = state_19177;
(statearr_19235[(12)] = inst_19138);

return statearr_19235;
})();
var statearr_19238_20699 = state_19177__$1;
(statearr_19238_20699[(2)] = inst_19139);

(statearr_19238_20699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (9))){
var inst_19131 = (state_19177[(8)]);
var _ = (function (){var statearr_19244 = state_19177;
(statearr_19244[(4)] = cljs.core.cons((12),(state_19177[(4)])));

return statearr_19244;
})();
var inst_19146 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19131) : chs__$1.call(null,inst_19131));
var inst_19147 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19131) : done.call(null,inst_19131));
var inst_19148 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19146,inst_19147);
var ___$1 = (function (){var statearr_19249 = state_19177;
(statearr_19249[(4)] = cljs.core.rest((state_19177[(4)])));

return statearr_19249;
})();
var state_19177__$1 = state_19177;
var statearr_19251_20704 = state_19177__$1;
(statearr_19251_20704[(2)] = inst_19148);

(statearr_19251_20704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (5))){
var inst_19158 = (state_19177[(2)]);
var state_19177__$1 = (function (){var statearr_19255 = state_19177;
(statearr_19255[(13)] = inst_19158);

return statearr_19255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19177__$1,(13),dchan);
} else {
if((state_val_19178 === (14))){
var inst_19164 = cljs.core.async.close_BANG_(out);
var state_19177__$1 = state_19177;
var statearr_19257_20707 = state_19177__$1;
(statearr_19257_20707[(2)] = inst_19164);

(statearr_19257_20707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (16))){
var inst_19172 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19261_20708 = state_19177__$1;
(statearr_19261_20708[(2)] = inst_19172);

(statearr_19261_20708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (10))){
var inst_19131 = (state_19177[(8)]);
var inst_19151 = (state_19177[(2)]);
var inst_19152 = (inst_19131 + (1));
var inst_19131__$1 = inst_19152;
var state_19177__$1 = (function (){var statearr_19266 = state_19177;
(statearr_19266[(8)] = inst_19131__$1);

(statearr_19266[(14)] = inst_19151);

return statearr_19266;
})();
var statearr_19268_20709 = state_19177__$1;
(statearr_19268_20709[(2)] = null);

(statearr_19268_20709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (8))){
var inst_19156 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19272_20710 = state_19177__$1;
(statearr_19272_20710[(2)] = inst_19156);

(statearr_19272_20710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19281[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19281[(1)] = (1));

return statearr_19281;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19177){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19177);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19282){var ex__17494__auto__ = e19282;
var statearr_19285_20711 = state_19177;
(statearr_19285_20711[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19177[(4)]))){
var statearr_19290_20712 = state_19177;
(statearr_19290_20712[(1)] = cljs.core.first((state_19177[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20713 = state_19177;
state_19177 = G__20713;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19292 = f__17678__auto__();
(statearr_19292[(6)] = c__17676__auto___20683);

return statearr_19292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19296 = arguments.length;
switch (G__19296) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19335){
var state_val_19336 = (state_19335[(1)]);
if((state_val_19336 === (7))){
var inst_19307 = (state_19335[(7)]);
var inst_19308 = (state_19335[(8)]);
var inst_19307__$1 = (state_19335[(2)]);
var inst_19308__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19307__$1,(0),null);
var inst_19309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19307__$1,(1),null);
var inst_19310 = (inst_19308__$1 == null);
var state_19335__$1 = (function (){var statearr_19338 = state_19335;
(statearr_19338[(7)] = inst_19307__$1);

(statearr_19338[(8)] = inst_19308__$1);

(statearr_19338[(9)] = inst_19309);

return statearr_19338;
})();
if(cljs.core.truth_(inst_19310)){
var statearr_19339_20717 = state_19335__$1;
(statearr_19339_20717[(1)] = (8));

} else {
var statearr_19343_20718 = state_19335__$1;
(statearr_19343_20718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (1))){
var inst_19297 = cljs.core.vec(chs);
var inst_19298 = inst_19297;
var state_19335__$1 = (function (){var statearr_19345 = state_19335;
(statearr_19345[(10)] = inst_19298);

return statearr_19345;
})();
var statearr_19346_20722 = state_19335__$1;
(statearr_19346_20722[(2)] = null);

(statearr_19346_20722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (4))){
var inst_19298 = (state_19335[(10)]);
var state_19335__$1 = state_19335;
return cljs.core.async.ioc_alts_BANG_(state_19335__$1,(7),inst_19298);
} else {
if((state_val_19336 === (6))){
var inst_19328 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
var statearr_19347_20723 = state_19335__$1;
(statearr_19347_20723[(2)] = inst_19328);

(statearr_19347_20723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (3))){
var inst_19330 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19335__$1,inst_19330);
} else {
if((state_val_19336 === (2))){
var inst_19298 = (state_19335[(10)]);
var inst_19300 = cljs.core.count(inst_19298);
var inst_19301 = (inst_19300 > (0));
var state_19335__$1 = state_19335;
if(cljs.core.truth_(inst_19301)){
var statearr_19353_20724 = state_19335__$1;
(statearr_19353_20724[(1)] = (4));

} else {
var statearr_19354_20725 = state_19335__$1;
(statearr_19354_20725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (11))){
var inst_19298 = (state_19335[(10)]);
var inst_19321 = (state_19335[(2)]);
var tmp19351 = inst_19298;
var inst_19298__$1 = tmp19351;
var state_19335__$1 = (function (){var statearr_19355 = state_19335;
(statearr_19355[(11)] = inst_19321);

(statearr_19355[(10)] = inst_19298__$1);

return statearr_19355;
})();
var statearr_19356_20729 = state_19335__$1;
(statearr_19356_20729[(2)] = null);

(statearr_19356_20729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (9))){
var inst_19308 = (state_19335[(8)]);
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19335__$1,(11),out,inst_19308);
} else {
if((state_val_19336 === (5))){
var inst_19326 = cljs.core.async.close_BANG_(out);
var state_19335__$1 = state_19335;
var statearr_19357_20730 = state_19335__$1;
(statearr_19357_20730[(2)] = inst_19326);

(statearr_19357_20730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (10))){
var inst_19324 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
var statearr_19358_20731 = state_19335__$1;
(statearr_19358_20731[(2)] = inst_19324);

(statearr_19358_20731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (8))){
var inst_19307 = (state_19335[(7)]);
var inst_19298 = (state_19335[(10)]);
var inst_19308 = (state_19335[(8)]);
var inst_19309 = (state_19335[(9)]);
var inst_19313 = (function (){var cs = inst_19298;
var vec__19303 = inst_19307;
var v = inst_19308;
var c = inst_19309;
return (function (p1__19293_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19293_SHARP_);
});
})();
var inst_19317 = cljs.core.filterv(inst_19313,inst_19298);
var inst_19298__$1 = inst_19317;
var state_19335__$1 = (function (){var statearr_19363 = state_19335;
(statearr_19363[(10)] = inst_19298__$1);

return statearr_19363;
})();
var statearr_19364_20732 = state_19335__$1;
(statearr_19364_20732[(2)] = null);

(statearr_19364_20732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19366[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19335){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19335);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19367){var ex__17494__auto__ = e19367;
var statearr_19368_20733 = state_19335;
(statearr_19368_20733[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19335[(4)]))){
var statearr_19369_20737 = state_19335;
(statearr_19369_20737[(1)] = cljs.core.first((state_19335[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20738 = state_19335;
state_19335 = G__20738;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19370 = f__17678__auto__();
(statearr_19370[(6)] = c__17676__auto___20716);

return statearr_19370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19380 = arguments.length;
switch (G__19380) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19412){
var state_val_19413 = (state_19412[(1)]);
if((state_val_19413 === (7))){
var inst_19394 = (state_19412[(7)]);
var inst_19394__$1 = (state_19412[(2)]);
var inst_19395 = (inst_19394__$1 == null);
var inst_19396 = cljs.core.not(inst_19395);
var state_19412__$1 = (function (){var statearr_19418 = state_19412;
(statearr_19418[(7)] = inst_19394__$1);

return statearr_19418;
})();
if(inst_19396){
var statearr_19419_20749 = state_19412__$1;
(statearr_19419_20749[(1)] = (8));

} else {
var statearr_19420_20753 = state_19412__$1;
(statearr_19420_20753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (1))){
var inst_19388 = (0);
var state_19412__$1 = (function (){var statearr_19421 = state_19412;
(statearr_19421[(8)] = inst_19388);

return statearr_19421;
})();
var statearr_19422_20754 = state_19412__$1;
(statearr_19422_20754[(2)] = null);

(statearr_19422_20754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (4))){
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19412__$1,(7),ch);
} else {
if((state_val_19413 === (6))){
var inst_19407 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19423_20755 = state_19412__$1;
(statearr_19423_20755[(2)] = inst_19407);

(statearr_19423_20755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (3))){
var inst_19409 = (state_19412[(2)]);
var inst_19410 = cljs.core.async.close_BANG_(out);
var state_19412__$1 = (function (){var statearr_19425 = state_19412;
(statearr_19425[(9)] = inst_19409);

return statearr_19425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19412__$1,inst_19410);
} else {
if((state_val_19413 === (2))){
var inst_19388 = (state_19412[(8)]);
var inst_19391 = (inst_19388 < n);
var state_19412__$1 = state_19412;
if(cljs.core.truth_(inst_19391)){
var statearr_19426_20763 = state_19412__$1;
(statearr_19426_20763[(1)] = (4));

} else {
var statearr_19427_20764 = state_19412__$1;
(statearr_19427_20764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (11))){
var inst_19388 = (state_19412[(8)]);
var inst_19399 = (state_19412[(2)]);
var inst_19400 = (inst_19388 + (1));
var inst_19388__$1 = inst_19400;
var state_19412__$1 = (function (){var statearr_19428 = state_19412;
(statearr_19428[(10)] = inst_19399);

(statearr_19428[(8)] = inst_19388__$1);

return statearr_19428;
})();
var statearr_19433_20765 = state_19412__$1;
(statearr_19433_20765[(2)] = null);

(statearr_19433_20765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (9))){
var state_19412__$1 = state_19412;
var statearr_19438_20766 = state_19412__$1;
(statearr_19438_20766[(2)] = null);

(statearr_19438_20766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (5))){
var state_19412__$1 = state_19412;
var statearr_19439_20774 = state_19412__$1;
(statearr_19439_20774[(2)] = null);

(statearr_19439_20774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (10))){
var inst_19404 = (state_19412[(2)]);
var state_19412__$1 = state_19412;
var statearr_19440_20775 = state_19412__$1;
(statearr_19440_20775[(2)] = inst_19404);

(statearr_19440_20775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19413 === (8))){
var inst_19394 = (state_19412[(7)]);
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19412__$1,(11),out,inst_19394);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19445[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19445[(1)] = (1));

return statearr_19445;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19412){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19412);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19446){var ex__17494__auto__ = e19446;
var statearr_19447_20776 = state_19412;
(statearr_19447_20776[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19412[(4)]))){
var statearr_19451_20777 = state_19412;
(statearr_19451_20777[(1)] = cljs.core.first((state_19412[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20779 = state_19412;
state_19412 = G__20779;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19453 = f__17678__auto__();
(statearr_19453[(6)] = c__17676__auto___20748);

return statearr_19453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19459 = (function (f,ch,meta19460){
this.f = f;
this.ch = ch;
this.meta19460 = meta19460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19461,meta19460__$1){
var self__ = this;
var _19461__$1 = this;
return (new cljs.core.async.t_cljs$core$async19459(self__.f,self__.ch,meta19460__$1));
}));

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19461){
var self__ = this;
var _19461__$1 = this;
return self__.meta19460;
}));

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19466 = (function (f,ch,meta19460,_,fn1,meta19467){
this.f = f;
this.ch = ch;
this.meta19460 = meta19460;
this._ = _;
this.fn1 = fn1;
this.meta19467 = meta19467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19468,meta19467__$1){
var self__ = this;
var _19468__$1 = this;
return (new cljs.core.async.t_cljs$core$async19466(self__.f,self__.ch,self__.meta19460,self__._,self__.fn1,meta19467__$1));
}));

(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19468){
var self__ = this;
var _19468__$1 = this;
return self__.meta19467;
}));

(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19458_SHARP_){
var G__19470 = (((p1__19458_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19458_SHARP_) : self__.f.call(null,p1__19458_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19470) : f1.call(null,G__19470));
});
}));

(cljs.core.async.t_cljs$core$async19466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19460","meta19460",-23924434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19459","cljs.core.async/t_cljs$core$async19459",-324004737,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19467","meta19467",1501926260,null)], null);
}));

(cljs.core.async.t_cljs$core$async19466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19466");

(cljs.core.async.t_cljs$core$async19466.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19466.
 */
cljs.core.async.__GT_t_cljs$core$async19466 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19466(f__$1,ch__$1,meta19460__$1,___$2,fn1__$1,meta19467){
return (new cljs.core.async.t_cljs$core$async19466(f__$1,ch__$1,meta19460__$1,___$2,fn1__$1,meta19467));
});

}

return (new cljs.core.async.t_cljs$core$async19466(self__.f,self__.ch,self__.meta19460,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19473 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19473) : self__.f.call(null,G__19473));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19460","meta19460",-23924434,null)], null);
}));

(cljs.core.async.t_cljs$core$async19459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19459");

(cljs.core.async.t_cljs$core$async19459.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19459.
 */
cljs.core.async.__GT_t_cljs$core$async19459 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19459(f__$1,ch__$1,meta19460){
return (new cljs.core.async.t_cljs$core$async19459(f__$1,ch__$1,meta19460));
});

}

return (new cljs.core.async.t_cljs$core$async19459(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19474 = (function (f,ch,meta19475){
this.f = f;
this.ch = ch;
this.meta19475 = meta19475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19476,meta19475__$1){
var self__ = this;
var _19476__$1 = this;
return (new cljs.core.async.t_cljs$core$async19474(self__.f,self__.ch,meta19475__$1));
}));

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19476){
var self__ = this;
var _19476__$1 = this;
return self__.meta19475;
}));

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19475","meta19475",-1059940413,null)], null);
}));

(cljs.core.async.t_cljs$core$async19474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19474");

(cljs.core.async.t_cljs$core$async19474.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19474.
 */
cljs.core.async.__GT_t_cljs$core$async19474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19474(f__$1,ch__$1,meta19475){
return (new cljs.core.async.t_cljs$core$async19474(f__$1,ch__$1,meta19475));
});

}

return (new cljs.core.async.t_cljs$core$async19474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19477 = (function (p,ch,meta19478){
this.p = p;
this.ch = ch;
this.meta19478 = meta19478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19479,meta19478__$1){
var self__ = this;
var _19479__$1 = this;
return (new cljs.core.async.t_cljs$core$async19477(self__.p,self__.ch,meta19478__$1));
}));

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19479){
var self__ = this;
var _19479__$1 = this;
return self__.meta19478;
}));

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19478","meta19478",24735181,null)], null);
}));

(cljs.core.async.t_cljs$core$async19477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19477");

(cljs.core.async.t_cljs$core$async19477.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19477.
 */
cljs.core.async.__GT_t_cljs$core$async19477 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19477(p__$1,ch__$1,meta19478){
return (new cljs.core.async.t_cljs$core$async19477(p__$1,ch__$1,meta19478));
});

}

return (new cljs.core.async.t_cljs$core$async19477(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19485 = arguments.length;
switch (G__19485) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19508){
var state_val_19509 = (state_19508[(1)]);
if((state_val_19509 === (7))){
var inst_19504 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
var statearr_19510_20809 = state_19508__$1;
(statearr_19510_20809[(2)] = inst_19504);

(statearr_19510_20809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (1))){
var state_19508__$1 = state_19508;
var statearr_19511_20810 = state_19508__$1;
(statearr_19511_20810[(2)] = null);

(statearr_19511_20810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (4))){
var inst_19490 = (state_19508[(7)]);
var inst_19490__$1 = (state_19508[(2)]);
var inst_19491 = (inst_19490__$1 == null);
var state_19508__$1 = (function (){var statearr_19512 = state_19508;
(statearr_19512[(7)] = inst_19490__$1);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19513_20814 = state_19508__$1;
(statearr_19513_20814[(1)] = (5));

} else {
var statearr_19514_20815 = state_19508__$1;
(statearr_19514_20815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (6))){
var inst_19490 = (state_19508[(7)]);
var inst_19495 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19490) : p.call(null,inst_19490));
var state_19508__$1 = state_19508;
if(cljs.core.truth_(inst_19495)){
var statearr_19515_20816 = state_19508__$1;
(statearr_19515_20816[(1)] = (8));

} else {
var statearr_19516_20817 = state_19508__$1;
(statearr_19516_20817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (3))){
var inst_19506 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19508__$1,inst_19506);
} else {
if((state_val_19509 === (2))){
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19508__$1,(4),ch);
} else {
if((state_val_19509 === (11))){
var inst_19498 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
var statearr_19517_20818 = state_19508__$1;
(statearr_19517_20818[(2)] = inst_19498);

(statearr_19517_20818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (9))){
var state_19508__$1 = state_19508;
var statearr_19518_20825 = state_19508__$1;
(statearr_19518_20825[(2)] = null);

(statearr_19518_20825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (5))){
var inst_19493 = cljs.core.async.close_BANG_(out);
var state_19508__$1 = state_19508;
var statearr_19519_20826 = state_19508__$1;
(statearr_19519_20826[(2)] = inst_19493);

(statearr_19519_20826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (10))){
var inst_19501 = (state_19508[(2)]);
var state_19508__$1 = (function (){var statearr_19520 = state_19508;
(statearr_19520[(8)] = inst_19501);

return statearr_19520;
})();
var statearr_19521_20827 = state_19508__$1;
(statearr_19521_20827[(2)] = null);

(statearr_19521_20827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (8))){
var inst_19490 = (state_19508[(7)]);
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19508__$1,(11),out,inst_19490);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19524 = [null,null,null,null,null,null,null,null,null];
(statearr_19524[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19524[(1)] = (1));

return statearr_19524;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19508){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19508);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19525){var ex__17494__auto__ = e19525;
var statearr_19526_20828 = state_19508;
(statearr_19526_20828[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19508[(4)]))){
var statearr_19527_20829 = state_19508;
(statearr_19527_20829[(1)] = cljs.core.first((state_19508[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20830 = state_19508;
state_19508 = G__20830;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19528 = f__17678__auto__();
(statearr_19528[(6)] = c__17676__auto___20808);

return statearr_19528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19534 = arguments.length;
switch (G__19534) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17676__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19597 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19606_20833 = state_19601__$1;
(statearr_19606_20833[(2)] = inst_19597);

(statearr_19606_20833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (20))){
var inst_19567 = (state_19601[(7)]);
var inst_19578 = (state_19601[(2)]);
var inst_19579 = cljs.core.next(inst_19567);
var inst_19551 = inst_19579;
var inst_19552 = null;
var inst_19553 = (0);
var inst_19554 = (0);
var state_19601__$1 = (function (){var statearr_19607 = state_19601;
(statearr_19607[(8)] = inst_19578);

(statearr_19607[(9)] = inst_19554);

(statearr_19607[(10)] = inst_19551);

(statearr_19607[(11)] = inst_19552);

(statearr_19607[(12)] = inst_19553);

return statearr_19607;
})();
var statearr_19608_20840 = state_19601__$1;
(statearr_19608_20840[(2)] = null);

(statearr_19608_20840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var state_19601__$1 = state_19601;
var statearr_19609_20841 = state_19601__$1;
(statearr_19609_20841[(2)] = null);

(statearr_19609_20841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19539 = (state_19601[(13)]);
var inst_19539__$1 = (state_19601[(2)]);
var inst_19541 = (inst_19539__$1 == null);
var state_19601__$1 = (function (){var statearr_19617 = state_19601;
(statearr_19617[(13)] = inst_19539__$1);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19541)){
var statearr_19624_20842 = state_19601__$1;
(statearr_19624_20842[(1)] = (5));

} else {
var statearr_19625_20843 = state_19601__$1;
(statearr_19625_20843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (15))){
var state_19601__$1 = state_19601;
var statearr_19635_20844 = state_19601__$1;
(statearr_19635_20844[(2)] = null);

(statearr_19635_20844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (21))){
var state_19601__$1 = state_19601;
var statearr_19636_20845 = state_19601__$1;
(statearr_19636_20845[(2)] = null);

(statearr_19636_20845[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (13))){
var inst_19554 = (state_19601[(9)]);
var inst_19551 = (state_19601[(10)]);
var inst_19552 = (state_19601[(11)]);
var inst_19553 = (state_19601[(12)]);
var inst_19562 = (state_19601[(2)]);
var inst_19564 = (inst_19554 + (1));
var tmp19626 = inst_19551;
var tmp19627 = inst_19552;
var tmp19628 = inst_19553;
var inst_19551__$1 = tmp19626;
var inst_19552__$1 = tmp19627;
var inst_19553__$1 = tmp19628;
var inst_19554__$1 = inst_19564;
var state_19601__$1 = (function (){var statearr_19637 = state_19601;
(statearr_19637[(9)] = inst_19554__$1);

(statearr_19637[(10)] = inst_19551__$1);

(statearr_19637[(11)] = inst_19552__$1);

(statearr_19637[(12)] = inst_19553__$1);

(statearr_19637[(14)] = inst_19562);

return statearr_19637;
})();
var statearr_19642_20849 = state_19601__$1;
(statearr_19642_20849[(2)] = null);

(statearr_19642_20849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (22))){
var state_19601__$1 = state_19601;
var statearr_19646_20850 = state_19601__$1;
(statearr_19646_20850[(2)] = null);

(statearr_19646_20850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var inst_19539 = (state_19601[(13)]);
var inst_19549 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19539) : f.call(null,inst_19539));
var inst_19550 = cljs.core.seq(inst_19549);
var inst_19551 = inst_19550;
var inst_19552 = null;
var inst_19553 = (0);
var inst_19554 = (0);
var state_19601__$1 = (function (){var statearr_19650 = state_19601;
(statearr_19650[(9)] = inst_19554);

(statearr_19650[(10)] = inst_19551);

(statearr_19650[(11)] = inst_19552);

(statearr_19650[(12)] = inst_19553);

return statearr_19650;
})();
var statearr_19651_20851 = state_19601__$1;
(statearr_19651_20851[(2)] = null);

(statearr_19651_20851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (17))){
var inst_19567 = (state_19601[(7)]);
var inst_19571 = cljs.core.chunk_first(inst_19567);
var inst_19572 = cljs.core.chunk_rest(inst_19567);
var inst_19573 = cljs.core.count(inst_19571);
var inst_19551 = inst_19572;
var inst_19552 = inst_19571;
var inst_19553 = inst_19573;
var inst_19554 = (0);
var state_19601__$1 = (function (){var statearr_19655 = state_19601;
(statearr_19655[(9)] = inst_19554);

(statearr_19655[(10)] = inst_19551);

(statearr_19655[(11)] = inst_19552);

(statearr_19655[(12)] = inst_19553);

return statearr_19655;
})();
var statearr_19656_20852 = state_19601__$1;
(statearr_19656_20852[(2)] = null);

(statearr_19656_20852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var inst_19599 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (12))){
var inst_19587 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19657_20853 = state_19601__$1;
(statearr_19657_20853[(2)] = inst_19587);

(statearr_19657_20853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (2))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19601__$1,(4),in$);
} else {
if((state_val_19602 === (23))){
var inst_19595 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19658_20854 = state_19601__$1;
(statearr_19658_20854[(2)] = inst_19595);

(statearr_19658_20854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (19))){
var inst_19582 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19659_20855 = state_19601__$1;
(statearr_19659_20855[(2)] = inst_19582);

(statearr_19659_20855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (11))){
var inst_19567 = (state_19601[(7)]);
var inst_19551 = (state_19601[(10)]);
var inst_19567__$1 = cljs.core.seq(inst_19551);
var state_19601__$1 = (function (){var statearr_19664 = state_19601;
(statearr_19664[(7)] = inst_19567__$1);

return statearr_19664;
})();
if(inst_19567__$1){
var statearr_19665_20856 = state_19601__$1;
(statearr_19665_20856[(1)] = (14));

} else {
var statearr_19666_20857 = state_19601__$1;
(statearr_19666_20857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var inst_19589 = (state_19601[(2)]);
var inst_19590 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19601__$1 = (function (){var statearr_19667 = state_19601;
(statearr_19667[(15)] = inst_19589);

return statearr_19667;
})();
if(cljs.core.truth_(inst_19590)){
var statearr_19668_20860 = state_19601__$1;
(statearr_19668_20860[(1)] = (21));

} else {
var statearr_19669_20861 = state_19601__$1;
(statearr_19669_20861[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (5))){
var inst_19543 = cljs.core.async.close_BANG_(out);
var state_19601__$1 = state_19601;
var statearr_19670_20862 = state_19601__$1;
(statearr_19670_20862[(2)] = inst_19543);

(statearr_19670_20862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (14))){
var inst_19567 = (state_19601[(7)]);
var inst_19569 = cljs.core.chunked_seq_QMARK_(inst_19567);
var state_19601__$1 = state_19601;
if(inst_19569){
var statearr_19671_20863 = state_19601__$1;
(statearr_19671_20863[(1)] = (17));

} else {
var statearr_19672_20864 = state_19601__$1;
(statearr_19672_20864[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (16))){
var inst_19585 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19673_20865 = state_19601__$1;
(statearr_19673_20865[(2)] = inst_19585);

(statearr_19673_20865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19554 = (state_19601[(9)]);
var inst_19552 = (state_19601[(11)]);
var inst_19560 = cljs.core._nth(inst_19552,inst_19554);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19601__$1,(13),out,inst_19560);
} else {
if((state_val_19602 === (18))){
var inst_19567 = (state_19601[(7)]);
var inst_19576 = cljs.core.first(inst_19567);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19601__$1,(20),out,inst_19576);
} else {
if((state_val_19602 === (8))){
var inst_19554 = (state_19601[(9)]);
var inst_19553 = (state_19601[(12)]);
var inst_19556 = (inst_19554 < inst_19553);
var inst_19557 = inst_19556;
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19557)){
var statearr_19678_20866 = state_19601__$1;
(statearr_19678_20866[(1)] = (10));

} else {
var statearr_19679_20867 = state_19601__$1;
(statearr_19679_20867[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____0 = (function (){
var statearr_19682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19682[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__);

(statearr_19682[(1)] = (1));

return statearr_19682;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____1 = (function (state_19601){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19601);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19683){var ex__17494__auto__ = e19683;
var statearr_19684_20869 = state_19601;
(statearr_19684_20869[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19601[(4)]))){
var statearr_19686_20870 = state_19601;
(statearr_19686_20870[(1)] = cljs.core.first((state_19601[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20872 = state_19601;
state_19601 = G__20872;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17491__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19688 = f__17678__auto__();
(statearr_19688[(6)] = c__17676__auto__);

return statearr_19688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));

return c__17676__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19690 = arguments.length;
switch (G__19690) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19692 = arguments.length;
switch (G__19692) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19696 = arguments.length;
switch (G__19696) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19725){
var state_val_19726 = (state_19725[(1)]);
if((state_val_19726 === (7))){
var inst_19720 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19727_20886 = state_19725__$1;
(statearr_19727_20886[(2)] = inst_19720);

(statearr_19727_20886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (1))){
var inst_19702 = null;
var state_19725__$1 = (function (){var statearr_19728 = state_19725;
(statearr_19728[(7)] = inst_19702);

return statearr_19728;
})();
var statearr_19729_20887 = state_19725__$1;
(statearr_19729_20887[(2)] = null);

(statearr_19729_20887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (4))){
var inst_19705 = (state_19725[(8)]);
var inst_19705__$1 = (state_19725[(2)]);
var inst_19706 = (inst_19705__$1 == null);
var inst_19707 = cljs.core.not(inst_19706);
var state_19725__$1 = (function (){var statearr_19730 = state_19725;
(statearr_19730[(8)] = inst_19705__$1);

return statearr_19730;
})();
if(inst_19707){
var statearr_19731_20888 = state_19725__$1;
(statearr_19731_20888[(1)] = (5));

} else {
var statearr_19732_20889 = state_19725__$1;
(statearr_19732_20889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (6))){
var state_19725__$1 = state_19725;
var statearr_19733_20891 = state_19725__$1;
(statearr_19733_20891[(2)] = null);

(statearr_19733_20891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (3))){
var inst_19722 = (state_19725[(2)]);
var inst_19723 = cljs.core.async.close_BANG_(out);
var state_19725__$1 = (function (){var statearr_19734 = state_19725;
(statearr_19734[(9)] = inst_19722);

return statearr_19734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19725__$1,inst_19723);
} else {
if((state_val_19726 === (2))){
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19725__$1,(4),ch);
} else {
if((state_val_19726 === (11))){
var inst_19705 = (state_19725[(8)]);
var inst_19714 = (state_19725[(2)]);
var inst_19702 = inst_19705;
var state_19725__$1 = (function (){var statearr_19735 = state_19725;
(statearr_19735[(7)] = inst_19702);

(statearr_19735[(10)] = inst_19714);

return statearr_19735;
})();
var statearr_19736_20894 = state_19725__$1;
(statearr_19736_20894[(2)] = null);

(statearr_19736_20894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (9))){
var inst_19705 = (state_19725[(8)]);
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19725__$1,(11),out,inst_19705);
} else {
if((state_val_19726 === (5))){
var inst_19705 = (state_19725[(8)]);
var inst_19702 = (state_19725[(7)]);
var inst_19709 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19705,inst_19702);
var state_19725__$1 = state_19725;
if(inst_19709){
var statearr_19738_20897 = state_19725__$1;
(statearr_19738_20897[(1)] = (8));

} else {
var statearr_19739_20898 = state_19725__$1;
(statearr_19739_20898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (10))){
var inst_19717 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19740_20899 = state_19725__$1;
(statearr_19740_20899[(2)] = inst_19717);

(statearr_19740_20899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (8))){
var inst_19702 = (state_19725[(7)]);
var tmp19737 = inst_19702;
var inst_19702__$1 = tmp19737;
var state_19725__$1 = (function (){var statearr_19742 = state_19725;
(statearr_19742[(7)] = inst_19702__$1);

return statearr_19742;
})();
var statearr_19746_20901 = state_19725__$1;
(statearr_19746_20901[(2)] = null);

(statearr_19746_20901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19748[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19748[(1)] = (1));

return statearr_19748;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19725){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19725);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19750){var ex__17494__auto__ = e19750;
var statearr_19751_20902 = state_19725;
(statearr_19751_20902[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19725[(4)]))){
var statearr_19753_20903 = state_19725;
(statearr_19753_20903[(1)] = cljs.core.first((state_19725[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20904 = state_19725;
state_19725 = G__20904;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19754 = f__17678__auto__();
(statearr_19754[(6)] = c__17676__auto___20885);

return statearr_19754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19758 = arguments.length;
switch (G__19758) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19799){
var state_val_19800 = (state_19799[(1)]);
if((state_val_19800 === (7))){
var inst_19795 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19801_20907 = state_19799__$1;
(statearr_19801_20907[(2)] = inst_19795);

(statearr_19801_20907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (1))){
var inst_19762 = (new Array(n));
var inst_19763 = inst_19762;
var inst_19764 = (0);
var state_19799__$1 = (function (){var statearr_19802 = state_19799;
(statearr_19802[(7)] = inst_19764);

(statearr_19802[(8)] = inst_19763);

return statearr_19802;
})();
var statearr_19803_20912 = state_19799__$1;
(statearr_19803_20912[(2)] = null);

(statearr_19803_20912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (4))){
var inst_19767 = (state_19799[(9)]);
var inst_19767__$1 = (state_19799[(2)]);
var inst_19768 = (inst_19767__$1 == null);
var inst_19769 = cljs.core.not(inst_19768);
var state_19799__$1 = (function (){var statearr_19804 = state_19799;
(statearr_19804[(9)] = inst_19767__$1);

return statearr_19804;
})();
if(inst_19769){
var statearr_19805_20917 = state_19799__$1;
(statearr_19805_20917[(1)] = (5));

} else {
var statearr_19806_20918 = state_19799__$1;
(statearr_19806_20918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (15))){
var inst_19789 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19807_20919 = state_19799__$1;
(statearr_19807_20919[(2)] = inst_19789);

(statearr_19807_20919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (13))){
var state_19799__$1 = state_19799;
var statearr_19808_20921 = state_19799__$1;
(statearr_19808_20921[(2)] = null);

(statearr_19808_20921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (6))){
var inst_19764 = (state_19799[(7)]);
var inst_19785 = (inst_19764 > (0));
var state_19799__$1 = state_19799;
if(cljs.core.truth_(inst_19785)){
var statearr_19813_20922 = state_19799__$1;
(statearr_19813_20922[(1)] = (12));

} else {
var statearr_19814_20923 = state_19799__$1;
(statearr_19814_20923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (3))){
var inst_19797 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19799__$1,inst_19797);
} else {
if((state_val_19800 === (12))){
var inst_19763 = (state_19799[(8)]);
var inst_19787 = cljs.core.vec(inst_19763);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19799__$1,(15),out,inst_19787);
} else {
if((state_val_19800 === (2))){
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19799__$1,(4),ch);
} else {
if((state_val_19800 === (11))){
var inst_19779 = (state_19799[(2)]);
var inst_19780 = (new Array(n));
var inst_19763 = inst_19780;
var inst_19764 = (0);
var state_19799__$1 = (function (){var statearr_19819 = state_19799;
(statearr_19819[(7)] = inst_19764);

(statearr_19819[(10)] = inst_19779);

(statearr_19819[(8)] = inst_19763);

return statearr_19819;
})();
var statearr_19820_20925 = state_19799__$1;
(statearr_19820_20925[(2)] = null);

(statearr_19820_20925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (9))){
var inst_19763 = (state_19799[(8)]);
var inst_19777 = cljs.core.vec(inst_19763);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19799__$1,(11),out,inst_19777);
} else {
if((state_val_19800 === (5))){
var inst_19764 = (state_19799[(7)]);
var inst_19772 = (state_19799[(11)]);
var inst_19767 = (state_19799[(9)]);
var inst_19763 = (state_19799[(8)]);
var inst_19771 = (inst_19763[inst_19764] = inst_19767);
var inst_19772__$1 = (inst_19764 + (1));
var inst_19773 = (inst_19772__$1 < n);
var state_19799__$1 = (function (){var statearr_19821 = state_19799;
(statearr_19821[(12)] = inst_19771);

(statearr_19821[(11)] = inst_19772__$1);

return statearr_19821;
})();
if(cljs.core.truth_(inst_19773)){
var statearr_19822_20926 = state_19799__$1;
(statearr_19822_20926[(1)] = (8));

} else {
var statearr_19823_20927 = state_19799__$1;
(statearr_19823_20927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (14))){
var inst_19792 = (state_19799[(2)]);
var inst_19793 = cljs.core.async.close_BANG_(out);
var state_19799__$1 = (function (){var statearr_19825 = state_19799;
(statearr_19825[(13)] = inst_19792);

return statearr_19825;
})();
var statearr_19826_20928 = state_19799__$1;
(statearr_19826_20928[(2)] = inst_19793);

(statearr_19826_20928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (10))){
var inst_19783 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19827_20929 = state_19799__$1;
(statearr_19827_20929[(2)] = inst_19783);

(statearr_19827_20929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (8))){
var inst_19772 = (state_19799[(11)]);
var inst_19763 = (state_19799[(8)]);
var tmp19824 = inst_19763;
var inst_19763__$1 = tmp19824;
var inst_19764 = inst_19772;
var state_19799__$1 = (function (){var statearr_19828 = state_19799;
(statearr_19828[(7)] = inst_19764);

(statearr_19828[(8)] = inst_19763__$1);

return statearr_19828;
})();
var statearr_19829_20931 = state_19799__$1;
(statearr_19829_20931[(2)] = null);

(statearr_19829_20931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19830[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19830[(1)] = (1));

return statearr_19830;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19799){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19799);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19831){var ex__17494__auto__ = e19831;
var statearr_19832_20934 = state_19799;
(statearr_19832_20934[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19799[(4)]))){
var statearr_19833_20935 = state_19799;
(statearr_19833_20935[(1)] = cljs.core.first((state_19799[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20937 = state_19799;
state_19799 = G__20937;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19835 = f__17678__auto__();
(statearr_19835[(6)] = c__17676__auto___20906);

return statearr_19835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19838 = arguments.length;
switch (G__19838) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17676__auto___20944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17678__auto__ = (function (){var switch__17490__auto__ = (function (state_19886){
var state_val_19887 = (state_19886[(1)]);
if((state_val_19887 === (7))){
var inst_19882 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19888_20945 = state_19886__$1;
(statearr_19888_20945[(2)] = inst_19882);

(statearr_19888_20945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (1))){
var inst_19842 = [];
var inst_19843 = inst_19842;
var inst_19844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19886__$1 = (function (){var statearr_19889 = state_19886;
(statearr_19889[(7)] = inst_19843);

(statearr_19889[(8)] = inst_19844);

return statearr_19889;
})();
var statearr_19890_20947 = state_19886__$1;
(statearr_19890_20947[(2)] = null);

(statearr_19890_20947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (4))){
var inst_19847 = (state_19886[(9)]);
var inst_19847__$1 = (state_19886[(2)]);
var inst_19848 = (inst_19847__$1 == null);
var inst_19849 = cljs.core.not(inst_19848);
var state_19886__$1 = (function (){var statearr_19891 = state_19886;
(statearr_19891[(9)] = inst_19847__$1);

return statearr_19891;
})();
if(inst_19849){
var statearr_19892_20948 = state_19886__$1;
(statearr_19892_20948[(1)] = (5));

} else {
var statearr_19893_20949 = state_19886__$1;
(statearr_19893_20949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (15))){
var inst_19843 = (state_19886[(7)]);
var inst_19874 = cljs.core.vec(inst_19843);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19886__$1,(18),out,inst_19874);
} else {
if((state_val_19887 === (13))){
var inst_19869 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19894_20952 = state_19886__$1;
(statearr_19894_20952[(2)] = inst_19869);

(statearr_19894_20952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (6))){
var inst_19843 = (state_19886[(7)]);
var inst_19871 = inst_19843.length;
var inst_19872 = (inst_19871 > (0));
var state_19886__$1 = state_19886;
if(cljs.core.truth_(inst_19872)){
var statearr_19895_20953 = state_19886__$1;
(statearr_19895_20953[(1)] = (15));

} else {
var statearr_19896_20954 = state_19886__$1;
(statearr_19896_20954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (17))){
var inst_19879 = (state_19886[(2)]);
var inst_19880 = cljs.core.async.close_BANG_(out);
var state_19886__$1 = (function (){var statearr_19897 = state_19886;
(statearr_19897[(10)] = inst_19879);

return statearr_19897;
})();
var statearr_19898_20956 = state_19886__$1;
(statearr_19898_20956[(2)] = inst_19880);

(statearr_19898_20956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (3))){
var inst_19884 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19886__$1,inst_19884);
} else {
if((state_val_19887 === (12))){
var inst_19843 = (state_19886[(7)]);
var inst_19862 = cljs.core.vec(inst_19843);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19886__$1,(14),out,inst_19862);
} else {
if((state_val_19887 === (2))){
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19886__$1,(4),ch);
} else {
if((state_val_19887 === (11))){
var inst_19843 = (state_19886[(7)]);
var inst_19847 = (state_19886[(9)]);
var inst_19851 = (state_19886[(11)]);
var inst_19859 = inst_19843.push(inst_19847);
var tmp19899 = inst_19843;
var inst_19843__$1 = tmp19899;
var inst_19844 = inst_19851;
var state_19886__$1 = (function (){var statearr_19900 = state_19886;
(statearr_19900[(7)] = inst_19843__$1);

(statearr_19900[(8)] = inst_19844);

(statearr_19900[(12)] = inst_19859);

return statearr_19900;
})();
var statearr_19901_20959 = state_19886__$1;
(statearr_19901_20959[(2)] = null);

(statearr_19901_20959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (9))){
var inst_19844 = (state_19886[(8)]);
var inst_19855 = cljs.core.keyword_identical_QMARK_(inst_19844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19886__$1 = state_19886;
var statearr_19902_20964 = state_19886__$1;
(statearr_19902_20964[(2)] = inst_19855);

(statearr_19902_20964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (5))){
var inst_19844 = (state_19886[(8)]);
var inst_19852 = (state_19886[(13)]);
var inst_19847 = (state_19886[(9)]);
var inst_19851 = (state_19886[(11)]);
var inst_19851__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19847) : f.call(null,inst_19847));
var inst_19852__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19851__$1,inst_19844);
var state_19886__$1 = (function (){var statearr_19903 = state_19886;
(statearr_19903[(13)] = inst_19852__$1);

(statearr_19903[(11)] = inst_19851__$1);

return statearr_19903;
})();
if(inst_19852__$1){
var statearr_19904_20971 = state_19886__$1;
(statearr_19904_20971[(1)] = (8));

} else {
var statearr_19905_20976 = state_19886__$1;
(statearr_19905_20976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (14))){
var inst_19847 = (state_19886[(9)]);
var inst_19851 = (state_19886[(11)]);
var inst_19864 = (state_19886[(2)]);
var inst_19865 = [];
var inst_19866 = inst_19865.push(inst_19847);
var inst_19843 = inst_19865;
var inst_19844 = inst_19851;
var state_19886__$1 = (function (){var statearr_19906 = state_19886;
(statearr_19906[(7)] = inst_19843);

(statearr_19906[(8)] = inst_19844);

(statearr_19906[(14)] = inst_19864);

(statearr_19906[(15)] = inst_19866);

return statearr_19906;
})();
var statearr_19907_20983 = state_19886__$1;
(statearr_19907_20983[(2)] = null);

(statearr_19907_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (16))){
var state_19886__$1 = state_19886;
var statearr_19908_20984 = state_19886__$1;
(statearr_19908_20984[(2)] = null);

(statearr_19908_20984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (10))){
var inst_19857 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
if(cljs.core.truth_(inst_19857)){
var statearr_19909_20989 = state_19886__$1;
(statearr_19909_20989[(1)] = (11));

} else {
var statearr_19910_20991 = state_19886__$1;
(statearr_19910_20991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (18))){
var inst_19876 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19911_20993 = state_19886__$1;
(statearr_19911_20993[(2)] = inst_19876);

(statearr_19911_20993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (8))){
var inst_19852 = (state_19886[(13)]);
var state_19886__$1 = state_19886;
var statearr_19912_20998 = state_19886__$1;
(statearr_19912_20998[(2)] = inst_19852);

(statearr_19912_20998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17491__auto__ = null;
var cljs$core$async$state_machine__17491__auto____0 = (function (){
var statearr_19913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19913[(0)] = cljs$core$async$state_machine__17491__auto__);

(statearr_19913[(1)] = (1));

return statearr_19913;
});
var cljs$core$async$state_machine__17491__auto____1 = (function (state_19886){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__(state_19886);
if(cljs.core.keyword_identical_QMARK_(result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e19914){var ex__17494__auto__ = e19914;
var statearr_19915_21004 = state_19886;
(statearr_19915_21004[(2)] = ex__17494__auto__);


if(cljs.core.seq((state_19886[(4)]))){
var statearr_19917_21005 = state_19886;
(statearr_19917_21005[(1)] = cljs.core.first((state_19886[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21010 = state_19886;
state_19886 = G__21010;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
cljs$core$async$state_machine__17491__auto__ = function(state_19886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17491__auto____1.call(this,state_19886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17491__auto____0;
cljs$core$async$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17491__auto____1;
return cljs$core$async$state_machine__17491__auto__;
})()
})();
var state__17679__auto__ = (function (){var statearr_19918 = f__17678__auto__();
(statearr_19918[(6)] = c__17676__auto___20944);

return statearr_19918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
