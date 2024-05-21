goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50006 = arguments.length;
switch (G__50006) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50010 = (function (f,blockable,meta50011){
this.f = f;
this.blockable = blockable;
this.meta50011 = meta50011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50012,meta50011__$1){
var self__ = this;
var _50012__$1 = this;
return (new cljs.core.async.t_cljs$core$async50010(self__.f,self__.blockable,meta50011__$1));
}));

(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50012){
var self__ = this;
var _50012__$1 = this;
return self__.meta50011;
}));

(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50011","meta50011",-1022520393,null)], null);
}));

(cljs.core.async.t_cljs$core$async50010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50010");

(cljs.core.async.t_cljs$core$async50010.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50010.
 */
cljs.core.async.__GT_t_cljs$core$async50010 = (function cljs$core$async$__GT_t_cljs$core$async50010(f__$1,blockable__$1,meta50011){
return (new cljs.core.async.t_cljs$core$async50010(f__$1,blockable__$1,meta50011));
});

}

return (new cljs.core.async.t_cljs$core$async50010(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50021 = arguments.length;
switch (G__50021) {
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
var G__50029 = arguments.length;
switch (G__50029) {
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
var G__50037 = arguments.length;
switch (G__50037) {
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
var val_52706 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52706) : fn1.call(null,val_52706));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52706) : fn1.call(null,val_52706));
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
var G__50068 = arguments.length;
switch (G__50068) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___52727 = n;
var x_52729 = (0);
while(true){
if((x_52729 < n__4741__auto___52727)){
(a[x_52729] = x_52729);

var G__52732 = (x_52729 + (1));
x_52729 = G__52732;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50084 = (function (flag,meta50085){
this.flag = flag;
this.meta50085 = meta50085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50086,meta50085__$1){
var self__ = this;
var _50086__$1 = this;
return (new cljs.core.async.t_cljs$core$async50084(self__.flag,meta50085__$1));
}));

(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50086){
var self__ = this;
var _50086__$1 = this;
return self__.meta50085;
}));

(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50085","meta50085",1163218884,null)], null);
}));

(cljs.core.async.t_cljs$core$async50084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50084");

(cljs.core.async.t_cljs$core$async50084.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50084.
 */
cljs.core.async.__GT_t_cljs$core$async50084 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50084(flag__$1,meta50085){
return (new cljs.core.async.t_cljs$core$async50084(flag__$1,meta50085));
});

}

return (new cljs.core.async.t_cljs$core$async50084(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50099 = (function (flag,cb,meta50100){
this.flag = flag;
this.cb = cb;
this.meta50100 = meta50100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50101,meta50100__$1){
var self__ = this;
var _50101__$1 = this;
return (new cljs.core.async.t_cljs$core$async50099(self__.flag,self__.cb,meta50100__$1));
}));

(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50101){
var self__ = this;
var _50101__$1 = this;
return self__.meta50100;
}));

(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50100","meta50100",-1643439388,null)], null);
}));

(cljs.core.async.t_cljs$core$async50099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50099");

(cljs.core.async.t_cljs$core$async50099.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50099.
 */
cljs.core.async.__GT_t_cljs$core$async50099 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50099(flag__$1,cb__$1,meta50100){
return (new cljs.core.async.t_cljs$core$async50099(flag__$1,cb__$1,meta50100));
});

}

return (new cljs.core.async.t_cljs$core$async50099(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50105_SHARP_){
var G__50117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50105_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50117) : fret.call(null,G__50117));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50106_SHARP_){
var G__50120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50106_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50120) : fret.call(null,G__50120));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52767 = (i + (1));
i = G__52767;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___52771 = arguments.length;
var i__4865__auto___52772 = (0);
while(true){
if((i__4865__auto___52772 < len__4864__auto___52771)){
args__4870__auto__.push((arguments[i__4865__auto___52772]));

var G__52773 = (i__4865__auto___52772 + (1));
i__4865__auto___52772 = G__52773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50124){
var map__50125 = p__50124;
var map__50125__$1 = cljs.core.__destructure_map(map__50125);
var opts = map__50125__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50121){
var G__50122 = cljs.core.first(seq50121);
var seq50121__$1 = cljs.core.next(seq50121);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50122,seq50121__$1);
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
var G__50128 = arguments.length;
switch (G__50128) {
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
var c__49910__auto___52787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50191){
var state_val_50192 = (state_50191[(1)]);
if((state_val_50192 === (7))){
var inst_50179 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
var statearr_50201_52789 = state_50191__$1;
(statearr_50201_52789[(2)] = inst_50179);

(statearr_50201_52789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (1))){
var state_50191__$1 = state_50191;
var statearr_50202_52791 = state_50191__$1;
(statearr_50202_52791[(2)] = null);

(statearr_50202_52791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (4))){
var inst_50159 = (state_50191[(7)]);
var inst_50159__$1 = (state_50191[(2)]);
var inst_50161 = (inst_50159__$1 == null);
var state_50191__$1 = (function (){var statearr_50206 = state_50191;
(statearr_50206[(7)] = inst_50159__$1);

return statearr_50206;
})();
if(cljs.core.truth_(inst_50161)){
var statearr_50207_52792 = state_50191__$1;
(statearr_50207_52792[(1)] = (5));

} else {
var statearr_50208_52793 = state_50191__$1;
(statearr_50208_52793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (13))){
var state_50191__$1 = state_50191;
var statearr_50209_52794 = state_50191__$1;
(statearr_50209_52794[(2)] = null);

(statearr_50209_52794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (6))){
var inst_50159 = (state_50191[(7)]);
var state_50191__$1 = state_50191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50191__$1,(11),to,inst_50159);
} else {
if((state_val_50192 === (3))){
var inst_50182 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50191__$1,inst_50182);
} else {
if((state_val_50192 === (12))){
var state_50191__$1 = state_50191;
var statearr_50213_52795 = state_50191__$1;
(statearr_50213_52795[(2)] = null);

(statearr_50213_52795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (2))){
var state_50191__$1 = state_50191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50191__$1,(4),from);
} else {
if((state_val_50192 === (11))){
var inst_50172 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
if(cljs.core.truth_(inst_50172)){
var statearr_50218_52797 = state_50191__$1;
(statearr_50218_52797[(1)] = (12));

} else {
var statearr_50219_52798 = state_50191__$1;
(statearr_50219_52798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (9))){
var state_50191__$1 = state_50191;
var statearr_50224_52800 = state_50191__$1;
(statearr_50224_52800[(2)] = null);

(statearr_50224_52800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (5))){
var state_50191__$1 = state_50191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50225_52801 = state_50191__$1;
(statearr_50225_52801[(1)] = (8));

} else {
var statearr_50226_52802 = state_50191__$1;
(statearr_50226_52802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (14))){
var inst_50177 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
var statearr_50227_52804 = state_50191__$1;
(statearr_50227_52804[(2)] = inst_50177);

(statearr_50227_52804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (10))){
var inst_50169 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
var statearr_50228_52807 = state_50191__$1;
(statearr_50228_52807[(2)] = inst_50169);

(statearr_50228_52807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (8))){
var inst_50165 = cljs.core.async.close_BANG_(to);
var state_50191__$1 = state_50191;
var statearr_50229_52808 = state_50191__$1;
(statearr_50229_52808[(2)] = inst_50165);

(statearr_50229_52808[(1)] = (10));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_50230 = [null,null,null,null,null,null,null,null];
(statearr_50230[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_50230[(1)] = (1));

return statearr_50230;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_50191){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50191);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50231){var ex__49487__auto__ = e50231;
var statearr_50232_52816 = state_50191;
(statearr_50232_52816[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50191[(4)]))){
var statearr_50237_52818 = state_50191;
(statearr_50237_52818[(1)] = cljs.core.first((state_50191[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52820 = state_50191;
state_50191 = G__52820;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_50191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_50191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50238 = f__49911__auto__();
(statearr_50238[(6)] = c__49910__auto___52787);

return statearr_50238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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
var process = (function (p__50248){
var vec__50249 = p__50248;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50249,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50249,(1),null);
var job = vec__50249;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49910__auto___52826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50256){
var state_val_50257 = (state_50256[(1)]);
if((state_val_50257 === (1))){
var state_50256__$1 = state_50256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50256__$1,(2),res,v);
} else {
if((state_val_50257 === (2))){
var inst_50253 = (state_50256[(2)]);
var inst_50254 = cljs.core.async.close_BANG_(res);
var state_50256__$1 = (function (){var statearr_50261 = state_50256;
(statearr_50261[(7)] = inst_50253);

return statearr_50261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50256__$1,inst_50254);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_50262 = [null,null,null,null,null,null,null,null];
(statearr_50262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__);

(statearr_50262[(1)] = (1));

return statearr_50262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1 = (function (state_50256){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50256);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50263){var ex__49487__auto__ = e50263;
var statearr_50264_52836 = state_50256;
(statearr_50264_52836[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50256[(4)]))){
var statearr_50266_52837 = state_50256;
(statearr_50266_52837[(1)] = cljs.core.first((state_50256[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52841 = state_50256;
state_50256 = G__52841;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = function(state_50256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1.call(this,state_50256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50270 = f__49911__auto__();
(statearr_50270[(6)] = c__49910__auto___52826);

return statearr_50270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50274){
var vec__50275 = p__50274;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275,(1),null);
var job = vec__50275;
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
var n__4741__auto___52848 = n;
var __52849 = (0);
while(true){
if((__52849 < n__4741__auto___52848)){
var G__50286_52850 = type;
var G__50286_52851__$1 = (((G__50286_52850 instanceof cljs.core.Keyword))?G__50286_52850.fqn:null);
switch (G__50286_52851__$1) {
case "compute":
var c__49910__auto___52853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52849,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = ((function (__52849,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function (state_50303){
var state_val_50304 = (state_50303[(1)]);
if((state_val_50304 === (1))){
var state_50303__$1 = state_50303;
var statearr_50305_52856 = state_50303__$1;
(statearr_50305_52856[(2)] = null);

(statearr_50305_52856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (2))){
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50303__$1,(4),jobs);
} else {
if((state_val_50304 === (3))){
var inst_50298 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50303__$1,inst_50298);
} else {
if((state_val_50304 === (4))){
var inst_50289 = (state_50303[(2)]);
var inst_50290 = process(inst_50289);
var state_50303__$1 = state_50303;
if(cljs.core.truth_(inst_50290)){
var statearr_50309_52866 = state_50303__$1;
(statearr_50309_52866[(1)] = (5));

} else {
var statearr_50310_52867 = state_50303__$1;
(statearr_50310_52867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (5))){
var state_50303__$1 = state_50303;
var statearr_50312_52868 = state_50303__$1;
(statearr_50312_52868[(2)] = null);

(statearr_50312_52868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (6))){
var state_50303__$1 = state_50303;
var statearr_50316_52869 = state_50303__$1;
(statearr_50316_52869[(2)] = null);

(statearr_50316_52869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50304 === (7))){
var inst_50295 = (state_50303[(2)]);
var state_50303__$1 = state_50303;
var statearr_50319_52872 = state_50303__$1;
(statearr_50319_52872[(2)] = inst_50295);

(statearr_50319_52872[(1)] = (3));


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
});})(__52849,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
;
return ((function (__52849,switch__49483__auto__,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_50322 = [null,null,null,null,null,null,null];
(statearr_50322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__);

(statearr_50322[(1)] = (1));

return statearr_50322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1 = (function (state_50303){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50303);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50329){var ex__49487__auto__ = e50329;
var statearr_50330_52877 = state_50303;
(statearr_50330_52877[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50303[(4)]))){
var statearr_50334_52878 = state_50303;
(statearr_50334_52878[(1)] = cljs.core.first((state_50303[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52879 = state_50303;
state_50303 = G__52879;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = function(state_50303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1.call(this,state_50303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__;
})()
;})(__52849,switch__49483__auto__,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
})();
var state__49912__auto__ = (function (){var statearr_50338 = f__49911__auto__();
(statearr_50338[(6)] = c__49910__auto___52853);

return statearr_50338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
});})(__52849,c__49910__auto___52853,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
);


break;
case "async":
var c__49910__auto___52884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52849,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = ((function (__52849,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function (state_50353){
var state_val_50354 = (state_50353[(1)]);
if((state_val_50354 === (1))){
var state_50353__$1 = state_50353;
var statearr_50356_52885 = state_50353__$1;
(statearr_50356_52885[(2)] = null);

(statearr_50356_52885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50354 === (2))){
var state_50353__$1 = state_50353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50353__$1,(4),jobs);
} else {
if((state_val_50354 === (3))){
var inst_50351 = (state_50353[(2)]);
var state_50353__$1 = state_50353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50353__$1,inst_50351);
} else {
if((state_val_50354 === (4))){
var inst_50343 = (state_50353[(2)]);
var inst_50344 = async(inst_50343);
var state_50353__$1 = state_50353;
if(cljs.core.truth_(inst_50344)){
var statearr_50359_52887 = state_50353__$1;
(statearr_50359_52887[(1)] = (5));

} else {
var statearr_50362_52888 = state_50353__$1;
(statearr_50362_52888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50354 === (5))){
var state_50353__$1 = state_50353;
var statearr_50364_52891 = state_50353__$1;
(statearr_50364_52891[(2)] = null);

(statearr_50364_52891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50354 === (6))){
var state_50353__$1 = state_50353;
var statearr_50366_52892 = state_50353__$1;
(statearr_50366_52892[(2)] = null);

(statearr_50366_52892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50354 === (7))){
var inst_50349 = (state_50353[(2)]);
var state_50353__$1 = state_50353;
var statearr_50368_52894 = state_50353__$1;
(statearr_50368_52894[(2)] = inst_50349);

(statearr_50368_52894[(1)] = (3));


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
});})(__52849,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
;
return ((function (__52849,switch__49483__auto__,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_50369 = [null,null,null,null,null,null,null];
(statearr_50369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__);

(statearr_50369[(1)] = (1));

return statearr_50369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1 = (function (state_50353){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50353);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50370){var ex__49487__auto__ = e50370;
var statearr_50372_52904 = state_50353;
(statearr_50372_52904[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50353[(4)]))){
var statearr_50373_52905 = state_50353;
(statearr_50373_52905[(1)] = cljs.core.first((state_50353[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52907 = state_50353;
state_50353 = G__52907;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = function(state_50353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1.call(this,state_50353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__;
})()
;})(__52849,switch__49483__auto__,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
})();
var state__49912__auto__ = (function (){var statearr_50381 = f__49911__auto__();
(statearr_50381[(6)] = c__49910__auto___52884);

return statearr_50381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
});})(__52849,c__49910__auto___52884,G__50286_52850,G__50286_52851__$1,n__4741__auto___52848,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50286_52851__$1)].join('')));

}

var G__52909 = (__52849 + (1));
__52849 = G__52909;
continue;
} else {
}
break;
}

var c__49910__auto___52910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50403){
var state_val_50404 = (state_50403[(1)]);
if((state_val_50404 === (7))){
var inst_50399 = (state_50403[(2)]);
var state_50403__$1 = state_50403;
var statearr_50405_52911 = state_50403__$1;
(statearr_50405_52911[(2)] = inst_50399);

(statearr_50405_52911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50404 === (1))){
var state_50403__$1 = state_50403;
var statearr_50406_52912 = state_50403__$1;
(statearr_50406_52912[(2)] = null);

(statearr_50406_52912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50404 === (4))){
var inst_50384 = (state_50403[(7)]);
var inst_50384__$1 = (state_50403[(2)]);
var inst_50385 = (inst_50384__$1 == null);
var state_50403__$1 = (function (){var statearr_50408 = state_50403;
(statearr_50408[(7)] = inst_50384__$1);

return statearr_50408;
})();
if(cljs.core.truth_(inst_50385)){
var statearr_50410_52914 = state_50403__$1;
(statearr_50410_52914[(1)] = (5));

} else {
var statearr_50412_52916 = state_50403__$1;
(statearr_50412_52916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50404 === (6))){
var inst_50389 = (state_50403[(8)]);
var inst_50384 = (state_50403[(7)]);
var inst_50389__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50391 = [inst_50384,inst_50389__$1];
var inst_50392 = (new cljs.core.PersistentVector(null,2,(5),inst_50390,inst_50391,null));
var state_50403__$1 = (function (){var statearr_50415 = state_50403;
(statearr_50415[(8)] = inst_50389__$1);

return statearr_50415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50403__$1,(8),jobs,inst_50392);
} else {
if((state_val_50404 === (3))){
var inst_50401 = (state_50403[(2)]);
var state_50403__$1 = state_50403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50403__$1,inst_50401);
} else {
if((state_val_50404 === (2))){
var state_50403__$1 = state_50403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50403__$1,(4),from);
} else {
if((state_val_50404 === (9))){
var inst_50396 = (state_50403[(2)]);
var state_50403__$1 = (function (){var statearr_50416 = state_50403;
(statearr_50416[(9)] = inst_50396);

return statearr_50416;
})();
var statearr_50417_52920 = state_50403__$1;
(statearr_50417_52920[(2)] = null);

(statearr_50417_52920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50404 === (5))){
var inst_50387 = cljs.core.async.close_BANG_(jobs);
var state_50403__$1 = state_50403;
var statearr_50418_52921 = state_50403__$1;
(statearr_50418_52921[(2)] = inst_50387);

(statearr_50418_52921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50404 === (8))){
var inst_50389 = (state_50403[(8)]);
var inst_50394 = (state_50403[(2)]);
var state_50403__$1 = (function (){var statearr_50419 = state_50403;
(statearr_50419[(10)] = inst_50394);

return statearr_50419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50403__$1,(9),results,inst_50389);
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
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_50421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__);

(statearr_50421[(1)] = (1));

return statearr_50421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1 = (function (state_50403){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50403);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50422){var ex__49487__auto__ = e50422;
var statearr_50423_52927 = state_50403;
(statearr_50423_52927[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50403[(4)]))){
var statearr_50424_52928 = state_50403;
(statearr_50424_52928[(1)] = cljs.core.first((state_50403[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52930 = state_50403;
state_50403 = G__52930;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = function(state_50403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1.call(this,state_50403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50425 = f__49911__auto__();
(statearr_50425[(6)] = c__49910__auto___52910);

return statearr_50425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50471){
var state_val_50472 = (state_50471[(1)]);
if((state_val_50472 === (7))){
var inst_50461 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50475_52934 = state_50471__$1;
(statearr_50475_52934[(2)] = inst_50461);

(statearr_50475_52934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (20))){
var state_50471__$1 = state_50471;
var statearr_50476_52936 = state_50471__$1;
(statearr_50476_52936[(2)] = null);

(statearr_50476_52936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (1))){
var state_50471__$1 = state_50471;
var statearr_50477_52937 = state_50471__$1;
(statearr_50477_52937[(2)] = null);

(statearr_50477_52937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (4))){
var inst_50428 = (state_50471[(7)]);
var inst_50428__$1 = (state_50471[(2)]);
var inst_50429 = (inst_50428__$1 == null);
var state_50471__$1 = (function (){var statearr_50478 = state_50471;
(statearr_50478[(7)] = inst_50428__$1);

return statearr_50478;
})();
if(cljs.core.truth_(inst_50429)){
var statearr_50479_52942 = state_50471__$1;
(statearr_50479_52942[(1)] = (5));

} else {
var statearr_50480_52945 = state_50471__$1;
(statearr_50480_52945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (15))){
var inst_50443 = (state_50471[(8)]);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50471__$1,(18),to,inst_50443);
} else {
if((state_val_50472 === (21))){
var inst_50456 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50481_52946 = state_50471__$1;
(statearr_50481_52946[(2)] = inst_50456);

(statearr_50481_52946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (13))){
var inst_50458 = (state_50471[(2)]);
var state_50471__$1 = (function (){var statearr_50482 = state_50471;
(statearr_50482[(9)] = inst_50458);

return statearr_50482;
})();
var statearr_50483_52948 = state_50471__$1;
(statearr_50483_52948[(2)] = null);

(statearr_50483_52948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (6))){
var inst_50428 = (state_50471[(7)]);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50471__$1,(11),inst_50428);
} else {
if((state_val_50472 === (17))){
var inst_50451 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
if(cljs.core.truth_(inst_50451)){
var statearr_50484_52953 = state_50471__$1;
(statearr_50484_52953[(1)] = (19));

} else {
var statearr_50485_52954 = state_50471__$1;
(statearr_50485_52954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (3))){
var inst_50467 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50471__$1,inst_50467);
} else {
if((state_val_50472 === (12))){
var inst_50440 = (state_50471[(10)]);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50471__$1,(14),inst_50440);
} else {
if((state_val_50472 === (2))){
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50471__$1,(4),results);
} else {
if((state_val_50472 === (19))){
var state_50471__$1 = state_50471;
var statearr_50486_52956 = state_50471__$1;
(statearr_50486_52956[(2)] = null);

(statearr_50486_52956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (11))){
var inst_50440 = (state_50471[(2)]);
var state_50471__$1 = (function (){var statearr_50487 = state_50471;
(statearr_50487[(10)] = inst_50440);

return statearr_50487;
})();
var statearr_50488_52961 = state_50471__$1;
(statearr_50488_52961[(2)] = null);

(statearr_50488_52961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (9))){
var state_50471__$1 = state_50471;
var statearr_50489_52963 = state_50471__$1;
(statearr_50489_52963[(2)] = null);

(statearr_50489_52963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (5))){
var state_50471__$1 = state_50471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50490_52964 = state_50471__$1;
(statearr_50490_52964[(1)] = (8));

} else {
var statearr_50491_52966 = state_50471__$1;
(statearr_50491_52966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (14))){
var inst_50443 = (state_50471[(8)]);
var inst_50445 = (state_50471[(11)]);
var inst_50443__$1 = (state_50471[(2)]);
var inst_50444 = (inst_50443__$1 == null);
var inst_50445__$1 = cljs.core.not(inst_50444);
var state_50471__$1 = (function (){var statearr_50492 = state_50471;
(statearr_50492[(8)] = inst_50443__$1);

(statearr_50492[(11)] = inst_50445__$1);

return statearr_50492;
})();
if(inst_50445__$1){
var statearr_50493_52970 = state_50471__$1;
(statearr_50493_52970[(1)] = (15));

} else {
var statearr_50494_52973 = state_50471__$1;
(statearr_50494_52973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (16))){
var inst_50445 = (state_50471[(11)]);
var state_50471__$1 = state_50471;
var statearr_50495_52974 = state_50471__$1;
(statearr_50495_52974[(2)] = inst_50445);

(statearr_50495_52974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (10))){
var inst_50437 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50496_52976 = state_50471__$1;
(statearr_50496_52976[(2)] = inst_50437);

(statearr_50496_52976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (18))){
var inst_50448 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50497_52978 = state_50471__$1;
(statearr_50497_52978[(2)] = inst_50448);

(statearr_50497_52978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (8))){
var inst_50434 = cljs.core.async.close_BANG_(to);
var state_50471__$1 = state_50471;
var statearr_50498_52981 = state_50471__$1;
(statearr_50498_52981[(2)] = inst_50434);

(statearr_50498_52981[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_50499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__);

(statearr_50499[(1)] = (1));

return statearr_50499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1 = (function (state_50471){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50471);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50500){var ex__49487__auto__ = e50500;
var statearr_50501_52986 = state_50471;
(statearr_50501_52986[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50471[(4)]))){
var statearr_50502_52987 = state_50471;
(statearr_50502_52987[(1)] = cljs.core.first((state_50471[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52990 = state_50471;
state_50471 = G__52990;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__ = function(state_50471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1.call(this,state_50471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50503 = f__49911__auto__();
(statearr_50503[(6)] = c__49910__auto__);

return statearr_50503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50505 = arguments.length;
switch (G__50505) {
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
var G__50513 = arguments.length;
switch (G__50513) {
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
var G__50515 = arguments.length;
switch (G__50515) {
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
var c__49910__auto___53009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50548){
var state_val_50549 = (state_50548[(1)]);
if((state_val_50549 === (7))){
var inst_50544 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50552_53010 = state_50548__$1;
(statearr_50552_53010[(2)] = inst_50544);

(statearr_50552_53010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (1))){
var state_50548__$1 = state_50548;
var statearr_50553_53013 = state_50548__$1;
(statearr_50553_53013[(2)] = null);

(statearr_50553_53013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (4))){
var inst_50523 = (state_50548[(7)]);
var inst_50523__$1 = (state_50548[(2)]);
var inst_50524 = (inst_50523__$1 == null);
var state_50548__$1 = (function (){var statearr_50554 = state_50548;
(statearr_50554[(7)] = inst_50523__$1);

return statearr_50554;
})();
if(cljs.core.truth_(inst_50524)){
var statearr_50555_53017 = state_50548__$1;
(statearr_50555_53017[(1)] = (5));

} else {
var statearr_50556_53018 = state_50548__$1;
(statearr_50556_53018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (13))){
var state_50548__$1 = state_50548;
var statearr_50558_53019 = state_50548__$1;
(statearr_50558_53019[(2)] = null);

(statearr_50558_53019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (6))){
var inst_50523 = (state_50548[(7)]);
var inst_50531 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50523) : p.call(null,inst_50523));
var state_50548__$1 = state_50548;
if(cljs.core.truth_(inst_50531)){
var statearr_50560_53021 = state_50548__$1;
(statearr_50560_53021[(1)] = (9));

} else {
var statearr_50561_53023 = state_50548__$1;
(statearr_50561_53023[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (3))){
var inst_50546 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50548__$1,inst_50546);
} else {
if((state_val_50549 === (12))){
var state_50548__$1 = state_50548;
var statearr_50564_53028 = state_50548__$1;
(statearr_50564_53028[(2)] = null);

(statearr_50564_53028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (2))){
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50548__$1,(4),ch);
} else {
if((state_val_50549 === (11))){
var inst_50523 = (state_50548[(7)]);
var inst_50535 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50548__$1,(8),inst_50535,inst_50523);
} else {
if((state_val_50549 === (9))){
var state_50548__$1 = state_50548;
var statearr_50566_53031 = state_50548__$1;
(statearr_50566_53031[(2)] = tc);

(statearr_50566_53031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (5))){
var inst_50527 = cljs.core.async.close_BANG_(tc);
var inst_50529 = cljs.core.async.close_BANG_(fc);
var state_50548__$1 = (function (){var statearr_50567 = state_50548;
(statearr_50567[(8)] = inst_50527);

return statearr_50567;
})();
var statearr_50568_53035 = state_50548__$1;
(statearr_50568_53035[(2)] = inst_50529);

(statearr_50568_53035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (14))){
var inst_50542 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50570_53038 = state_50548__$1;
(statearr_50570_53038[(2)] = inst_50542);

(statearr_50570_53038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (10))){
var state_50548__$1 = state_50548;
var statearr_50571_53039 = state_50548__$1;
(statearr_50571_53039[(2)] = fc);

(statearr_50571_53039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (8))){
var inst_50537 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
if(cljs.core.truth_(inst_50537)){
var statearr_50576_53041 = state_50548__$1;
(statearr_50576_53041[(1)] = (12));

} else {
var statearr_50577_53042 = state_50548__$1;
(statearr_50577_53042[(1)] = (13));

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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_50578 = [null,null,null,null,null,null,null,null,null];
(statearr_50578[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_50578[(1)] = (1));

return statearr_50578;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_50548){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50548);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50579){var ex__49487__auto__ = e50579;
var statearr_50580_53047 = state_50548;
(statearr_50580_53047[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50548[(4)]))){
var statearr_50582_53048 = state_50548;
(statearr_50582_53048[(1)] = cljs.core.first((state_50548[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53050 = state_50548;
state_50548 = G__53050;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_50548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_50548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50583 = f__49911__auto__();
(statearr_50583[(6)] = c__49910__auto___53009);

return statearr_50583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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
var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50614){
var state_val_50615 = (state_50614[(1)]);
if((state_val_50615 === (7))){
var inst_50610 = (state_50614[(2)]);
var state_50614__$1 = state_50614;
var statearr_50616_53053 = state_50614__$1;
(statearr_50616_53053[(2)] = inst_50610);

(statearr_50616_53053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (1))){
var inst_50585 = init;
var inst_50586 = inst_50585;
var state_50614__$1 = (function (){var statearr_50617 = state_50614;
(statearr_50617[(7)] = inst_50586);

return statearr_50617;
})();
var statearr_50618_53054 = state_50614__$1;
(statearr_50618_53054[(2)] = null);

(statearr_50618_53054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (4))){
var inst_50589 = (state_50614[(8)]);
var inst_50589__$1 = (state_50614[(2)]);
var inst_50592 = (inst_50589__$1 == null);
var state_50614__$1 = (function (){var statearr_50619 = state_50614;
(statearr_50619[(8)] = inst_50589__$1);

return statearr_50619;
})();
if(cljs.core.truth_(inst_50592)){
var statearr_50620_53056 = state_50614__$1;
(statearr_50620_53056[(1)] = (5));

} else {
var statearr_50621_53058 = state_50614__$1;
(statearr_50621_53058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (6))){
var inst_50589 = (state_50614[(8)]);
var inst_50597 = (state_50614[(9)]);
var inst_50586 = (state_50614[(7)]);
var inst_50597__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50586,inst_50589) : f.call(null,inst_50586,inst_50589));
var inst_50598 = cljs.core.reduced_QMARK_(inst_50597__$1);
var state_50614__$1 = (function (){var statearr_50622 = state_50614;
(statearr_50622[(9)] = inst_50597__$1);

return statearr_50622;
})();
if(inst_50598){
var statearr_50623_53059 = state_50614__$1;
(statearr_50623_53059[(1)] = (8));

} else {
var statearr_50624_53060 = state_50614__$1;
(statearr_50624_53060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (3))){
var inst_50612 = (state_50614[(2)]);
var state_50614__$1 = state_50614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50614__$1,inst_50612);
} else {
if((state_val_50615 === (2))){
var state_50614__$1 = state_50614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50614__$1,(4),ch);
} else {
if((state_val_50615 === (9))){
var inst_50597 = (state_50614[(9)]);
var inst_50586 = inst_50597;
var state_50614__$1 = (function (){var statearr_50625 = state_50614;
(statearr_50625[(7)] = inst_50586);

return statearr_50625;
})();
var statearr_50626_53064 = state_50614__$1;
(statearr_50626_53064[(2)] = null);

(statearr_50626_53064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (5))){
var inst_50586 = (state_50614[(7)]);
var state_50614__$1 = state_50614;
var statearr_50628_53066 = state_50614__$1;
(statearr_50628_53066[(2)] = inst_50586);

(statearr_50628_53066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (10))){
var inst_50608 = (state_50614[(2)]);
var state_50614__$1 = state_50614;
var statearr_50629_53067 = state_50614__$1;
(statearr_50629_53067[(2)] = inst_50608);

(statearr_50629_53067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50615 === (8))){
var inst_50597 = (state_50614[(9)]);
var inst_50604 = cljs.core.deref(inst_50597);
var state_50614__$1 = state_50614;
var statearr_50630_53068 = state_50614__$1;
(statearr_50630_53068[(2)] = inst_50604);

(statearr_50630_53068[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__49484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49484__auto____0 = (function (){
var statearr_50631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50631[(0)] = cljs$core$async$reduce_$_state_machine__49484__auto__);

(statearr_50631[(1)] = (1));

return statearr_50631;
});
var cljs$core$async$reduce_$_state_machine__49484__auto____1 = (function (state_50614){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50614);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50632){var ex__49487__auto__ = e50632;
var statearr_50633_53073 = state_50614;
(statearr_50633_53073[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50614[(4)]))){
var statearr_50634_53074 = state_50614;
(statearr_50634_53074[(1)] = cljs.core.first((state_50614[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53075 = state_50614;
state_50614 = G__53075;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49484__auto__ = function(state_50614){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49484__auto____1.call(this,state_50614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49484__auto____0;
cljs$core$async$reduce_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49484__auto____1;
return cljs$core$async$reduce_$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50636 = f__49911__auto__();
(statearr_50636[(6)] = c__49910__auto__);

return statearr_50636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50645){
var state_val_50646 = (state_50645[(1)]);
if((state_val_50646 === (1))){
var inst_50640 = cljs.core.async.reduce(f__$1,init,ch);
var state_50645__$1 = state_50645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50645__$1,(2),inst_50640);
} else {
if((state_val_50646 === (2))){
var inst_50642 = (state_50645[(2)]);
var inst_50643 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50642) : f__$1.call(null,inst_50642));
var state_50645__$1 = state_50645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50645__$1,inst_50643);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49484__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49484__auto____0 = (function (){
var statearr_50650 = [null,null,null,null,null,null,null];
(statearr_50650[(0)] = cljs$core$async$transduce_$_state_machine__49484__auto__);

(statearr_50650[(1)] = (1));

return statearr_50650;
});
var cljs$core$async$transduce_$_state_machine__49484__auto____1 = (function (state_50645){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50645);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50651){var ex__49487__auto__ = e50651;
var statearr_50652_53080 = state_50645;
(statearr_50652_53080[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50645[(4)]))){
var statearr_50653_53081 = state_50645;
(statearr_50653_53081[(1)] = cljs.core.first((state_50645[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53083 = state_50645;
state_50645 = G__53083;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49484__auto__ = function(state_50645){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49484__auto____1.call(this,state_50645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49484__auto____0;
cljs$core$async$transduce_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49484__auto____1;
return cljs$core$async$transduce_$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50654 = f__49911__auto__();
(statearr_50654[(6)] = c__49910__auto__);

return statearr_50654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
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
var G__50663 = arguments.length;
switch (G__50663) {
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
var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50691){
var state_val_50692 = (state_50691[(1)]);
if((state_val_50692 === (7))){
var inst_50670 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
var statearr_50693_53089 = state_50691__$1;
(statearr_50693_53089[(2)] = inst_50670);

(statearr_50693_53089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (1))){
var inst_50664 = cljs.core.seq(coll);
var inst_50665 = inst_50664;
var state_50691__$1 = (function (){var statearr_50694 = state_50691;
(statearr_50694[(7)] = inst_50665);

return statearr_50694;
})();
var statearr_50699_53093 = state_50691__$1;
(statearr_50699_53093[(2)] = null);

(statearr_50699_53093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (4))){
var inst_50665 = (state_50691[(7)]);
var inst_50668 = cljs.core.first(inst_50665);
var state_50691__$1 = state_50691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50691__$1,(7),ch,inst_50668);
} else {
if((state_val_50692 === (13))){
var inst_50682 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
var statearr_50700_53094 = state_50691__$1;
(statearr_50700_53094[(2)] = inst_50682);

(statearr_50700_53094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (6))){
var inst_50673 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
if(cljs.core.truth_(inst_50673)){
var statearr_50704_53095 = state_50691__$1;
(statearr_50704_53095[(1)] = (8));

} else {
var statearr_50705_53096 = state_50691__$1;
(statearr_50705_53096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (3))){
var inst_50687 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50691__$1,inst_50687);
} else {
if((state_val_50692 === (12))){
var state_50691__$1 = state_50691;
var statearr_50706_53101 = state_50691__$1;
(statearr_50706_53101[(2)] = null);

(statearr_50706_53101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (2))){
var inst_50665 = (state_50691[(7)]);
var state_50691__$1 = state_50691;
if(cljs.core.truth_(inst_50665)){
var statearr_50707_53102 = state_50691__$1;
(statearr_50707_53102[(1)] = (4));

} else {
var statearr_50708_53103 = state_50691__$1;
(statearr_50708_53103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (11))){
var inst_50679 = cljs.core.async.close_BANG_(ch);
var state_50691__$1 = state_50691;
var statearr_50710_53104 = state_50691__$1;
(statearr_50710_53104[(2)] = inst_50679);

(statearr_50710_53104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (9))){
var state_50691__$1 = state_50691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50711_53105 = state_50691__$1;
(statearr_50711_53105[(1)] = (11));

} else {
var statearr_50712_53106 = state_50691__$1;
(statearr_50712_53106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (5))){
var inst_50665 = (state_50691[(7)]);
var state_50691__$1 = state_50691;
var statearr_50716_53107 = state_50691__$1;
(statearr_50716_53107[(2)] = inst_50665);

(statearr_50716_53107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (10))){
var inst_50684 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
var statearr_50717_53111 = state_50691__$1;
(statearr_50717_53111[(2)] = inst_50684);

(statearr_50717_53111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (8))){
var inst_50665 = (state_50691[(7)]);
var inst_50675 = cljs.core.next(inst_50665);
var inst_50665__$1 = inst_50675;
var state_50691__$1 = (function (){var statearr_50718 = state_50691;
(statearr_50718[(7)] = inst_50665__$1);

return statearr_50718;
})();
var statearr_50719_53113 = state_50691__$1;
(statearr_50719_53113[(2)] = null);

(statearr_50719_53113[(1)] = (2));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_50720 = [null,null,null,null,null,null,null,null];
(statearr_50720[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_50720[(1)] = (1));

return statearr_50720;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_50691){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50691);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e50721){var ex__49487__auto__ = e50721;
var statearr_50722_53114 = state_50691;
(statearr_50722_53114[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50691[(4)]))){
var statearr_50723_53115 = state_50691;
(statearr_50723_53115[(1)] = cljs.core.first((state_50691[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53116 = state_50691;
state_50691 = G__53116;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_50691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_50691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_50728 = f__49911__auto__();
(statearr_50728[(6)] = c__49910__auto__);

return statearr_50728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
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
var G__50730 = arguments.length;
switch (G__50730) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_53123 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53123(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53127 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53127(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53132 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53132(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53133 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53133(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50745 = (function (ch,cs,meta50746){
this.ch = ch;
this.cs = cs;
this.meta50746 = meta50746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50747,meta50746__$1){
var self__ = this;
var _50747__$1 = this;
return (new cljs.core.async.t_cljs$core$async50745(self__.ch,self__.cs,meta50746__$1));
}));

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50747){
var self__ = this;
var _50747__$1 = this;
return self__.meta50746;
}));

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50745.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50746","meta50746",1825246862,null)], null);
}));

(cljs.core.async.t_cljs$core$async50745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50745");

(cljs.core.async.t_cljs$core$async50745.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50745.
 */
cljs.core.async.__GT_t_cljs$core$async50745 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50745(ch__$1,cs__$1,meta50746){
return (new cljs.core.async.t_cljs$core$async50745(ch__$1,cs__$1,meta50746));
});

}

return (new cljs.core.async.t_cljs$core$async50745(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49910__auto___53148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_50901){
var state_val_50902 = (state_50901[(1)]);
if((state_val_50902 === (7))){
var inst_50897 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50903_53152 = state_50901__$1;
(statearr_50903_53152[(2)] = inst_50897);

(statearr_50903_53152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (20))){
var inst_50797 = (state_50901[(7)]);
var inst_50809 = cljs.core.first(inst_50797);
var inst_50810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50809,(0),null);
var inst_50811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50809,(1),null);
var state_50901__$1 = (function (){var statearr_50904 = state_50901;
(statearr_50904[(8)] = inst_50810);

return statearr_50904;
})();
if(cljs.core.truth_(inst_50811)){
var statearr_50905_53155 = state_50901__$1;
(statearr_50905_53155[(1)] = (22));

} else {
var statearr_50906_53156 = state_50901__$1;
(statearr_50906_53156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (27))){
var inst_50766 = (state_50901[(9)]);
var inst_50839 = (state_50901[(10)]);
var inst_50841 = (state_50901[(11)]);
var inst_50846 = (state_50901[(12)]);
var inst_50846__$1 = cljs.core._nth(inst_50839,inst_50841);
var inst_50847 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50846__$1,inst_50766,done);
var state_50901__$1 = (function (){var statearr_50909 = state_50901;
(statearr_50909[(12)] = inst_50846__$1);

return statearr_50909;
})();
if(cljs.core.truth_(inst_50847)){
var statearr_50911_53158 = state_50901__$1;
(statearr_50911_53158[(1)] = (30));

} else {
var statearr_50912_53161 = state_50901__$1;
(statearr_50912_53161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (1))){
var state_50901__$1 = state_50901;
var statearr_50914_53165 = state_50901__$1;
(statearr_50914_53165[(2)] = null);

(statearr_50914_53165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (24))){
var inst_50797 = (state_50901[(7)]);
var inst_50816 = (state_50901[(2)]);
var inst_50817 = cljs.core.next(inst_50797);
var inst_50775 = inst_50817;
var inst_50776 = null;
var inst_50777 = (0);
var inst_50778 = (0);
var state_50901__$1 = (function (){var statearr_50919 = state_50901;
(statearr_50919[(13)] = inst_50775);

(statearr_50919[(14)] = inst_50816);

(statearr_50919[(15)] = inst_50778);

(statearr_50919[(16)] = inst_50776);

(statearr_50919[(17)] = inst_50777);

return statearr_50919;
})();
var statearr_50920_53168 = state_50901__$1;
(statearr_50920_53168[(2)] = null);

(statearr_50920_53168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (39))){
var state_50901__$1 = state_50901;
var statearr_50926_53170 = state_50901__$1;
(statearr_50926_53170[(2)] = null);

(statearr_50926_53170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (4))){
var inst_50766 = (state_50901[(9)]);
var inst_50766__$1 = (state_50901[(2)]);
var inst_50767 = (inst_50766__$1 == null);
var state_50901__$1 = (function (){var statearr_50927 = state_50901;
(statearr_50927[(9)] = inst_50766__$1);

return statearr_50927;
})();
if(cljs.core.truth_(inst_50767)){
var statearr_50928_53178 = state_50901__$1;
(statearr_50928_53178[(1)] = (5));

} else {
var statearr_50931_53180 = state_50901__$1;
(statearr_50931_53180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (15))){
var inst_50775 = (state_50901[(13)]);
var inst_50778 = (state_50901[(15)]);
var inst_50776 = (state_50901[(16)]);
var inst_50777 = (state_50901[(17)]);
var inst_50793 = (state_50901[(2)]);
var inst_50794 = (inst_50778 + (1));
var tmp50923 = inst_50775;
var tmp50924 = inst_50776;
var tmp50925 = inst_50777;
var inst_50775__$1 = tmp50923;
var inst_50776__$1 = tmp50924;
var inst_50777__$1 = tmp50925;
var inst_50778__$1 = inst_50794;
var state_50901__$1 = (function (){var statearr_50933 = state_50901;
(statearr_50933[(13)] = inst_50775__$1);

(statearr_50933[(15)] = inst_50778__$1);

(statearr_50933[(18)] = inst_50793);

(statearr_50933[(16)] = inst_50776__$1);

(statearr_50933[(17)] = inst_50777__$1);

return statearr_50933;
})();
var statearr_50935_53182 = state_50901__$1;
(statearr_50935_53182[(2)] = null);

(statearr_50935_53182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (21))){
var inst_50820 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50939_53184 = state_50901__$1;
(statearr_50939_53184[(2)] = inst_50820);

(statearr_50939_53184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (31))){
var inst_50846 = (state_50901[(12)]);
var inst_50850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50846);
var state_50901__$1 = state_50901;
var statearr_50942_53188 = state_50901__$1;
(statearr_50942_53188[(2)] = inst_50850);

(statearr_50942_53188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (32))){
var inst_50838 = (state_50901[(19)]);
var inst_50839 = (state_50901[(10)]);
var inst_50841 = (state_50901[(11)]);
var inst_50840 = (state_50901[(20)]);
var inst_50852 = (state_50901[(2)]);
var inst_50853 = (inst_50841 + (1));
var tmp50936 = inst_50838;
var tmp50937 = inst_50839;
var tmp50938 = inst_50840;
var inst_50838__$1 = tmp50936;
var inst_50839__$1 = tmp50937;
var inst_50840__$1 = tmp50938;
var inst_50841__$1 = inst_50853;
var state_50901__$1 = (function (){var statearr_50945 = state_50901;
(statearr_50945[(19)] = inst_50838__$1);

(statearr_50945[(10)] = inst_50839__$1);

(statearr_50945[(11)] = inst_50841__$1);

(statearr_50945[(20)] = inst_50840__$1);

(statearr_50945[(21)] = inst_50852);

return statearr_50945;
})();
var statearr_50946_53194 = state_50901__$1;
(statearr_50946_53194[(2)] = null);

(statearr_50946_53194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (40))){
var inst_50870 = (state_50901[(22)]);
var inst_50874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50870);
var state_50901__$1 = state_50901;
var statearr_50947_53195 = state_50901__$1;
(statearr_50947_53195[(2)] = inst_50874);

(statearr_50947_53195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (33))){
var inst_50856 = (state_50901[(23)]);
var inst_50863 = cljs.core.chunked_seq_QMARK_(inst_50856);
var state_50901__$1 = state_50901;
if(inst_50863){
var statearr_50948_53200 = state_50901__$1;
(statearr_50948_53200[(1)] = (36));

} else {
var statearr_50949_53202 = state_50901__$1;
(statearr_50949_53202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (13))){
var inst_50787 = (state_50901[(24)]);
var inst_50790 = cljs.core.async.close_BANG_(inst_50787);
var state_50901__$1 = state_50901;
var statearr_50950_53203 = state_50901__$1;
(statearr_50950_53203[(2)] = inst_50790);

(statearr_50950_53203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (22))){
var inst_50810 = (state_50901[(8)]);
var inst_50813 = cljs.core.async.close_BANG_(inst_50810);
var state_50901__$1 = state_50901;
var statearr_50956_53205 = state_50901__$1;
(statearr_50956_53205[(2)] = inst_50813);

(statearr_50956_53205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (36))){
var inst_50856 = (state_50901[(23)]);
var inst_50865 = cljs.core.chunk_first(inst_50856);
var inst_50866 = cljs.core.chunk_rest(inst_50856);
var inst_50867 = cljs.core.count(inst_50865);
var inst_50838 = inst_50866;
var inst_50839 = inst_50865;
var inst_50840 = inst_50867;
var inst_50841 = (0);
var state_50901__$1 = (function (){var statearr_50957 = state_50901;
(statearr_50957[(19)] = inst_50838);

(statearr_50957[(10)] = inst_50839);

(statearr_50957[(11)] = inst_50841);

(statearr_50957[(20)] = inst_50840);

return statearr_50957;
})();
var statearr_50958_53213 = state_50901__$1;
(statearr_50958_53213[(2)] = null);

(statearr_50958_53213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (41))){
var inst_50856 = (state_50901[(23)]);
var inst_50876 = (state_50901[(2)]);
var inst_50877 = cljs.core.next(inst_50856);
var inst_50838 = inst_50877;
var inst_50839 = null;
var inst_50840 = (0);
var inst_50841 = (0);
var state_50901__$1 = (function (){var statearr_50959 = state_50901;
(statearr_50959[(25)] = inst_50876);

(statearr_50959[(19)] = inst_50838);

(statearr_50959[(10)] = inst_50839);

(statearr_50959[(11)] = inst_50841);

(statearr_50959[(20)] = inst_50840);

return statearr_50959;
})();
var statearr_50960_53219 = state_50901__$1;
(statearr_50960_53219[(2)] = null);

(statearr_50960_53219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (43))){
var state_50901__$1 = state_50901;
var statearr_50961_53222 = state_50901__$1;
(statearr_50961_53222[(2)] = null);

(statearr_50961_53222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (29))){
var inst_50885 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50962_53225 = state_50901__$1;
(statearr_50962_53225[(2)] = inst_50885);

(statearr_50962_53225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (44))){
var inst_50894 = (state_50901[(2)]);
var state_50901__$1 = (function (){var statearr_50963 = state_50901;
(statearr_50963[(26)] = inst_50894);

return statearr_50963;
})();
var statearr_50964_53226 = state_50901__$1;
(statearr_50964_53226[(2)] = null);

(statearr_50964_53226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (6))){
var inst_50830 = (state_50901[(27)]);
var inst_50829 = cljs.core.deref(cs);
var inst_50830__$1 = cljs.core.keys(inst_50829);
var inst_50831 = cljs.core.count(inst_50830__$1);
var inst_50832 = cljs.core.reset_BANG_(dctr,inst_50831);
var inst_50837 = cljs.core.seq(inst_50830__$1);
var inst_50838 = inst_50837;
var inst_50839 = null;
var inst_50840 = (0);
var inst_50841 = (0);
var state_50901__$1 = (function (){var statearr_50965 = state_50901;
(statearr_50965[(28)] = inst_50832);

(statearr_50965[(27)] = inst_50830__$1);

(statearr_50965[(19)] = inst_50838);

(statearr_50965[(10)] = inst_50839);

(statearr_50965[(11)] = inst_50841);

(statearr_50965[(20)] = inst_50840);

return statearr_50965;
})();
var statearr_50966_53236 = state_50901__$1;
(statearr_50966_53236[(2)] = null);

(statearr_50966_53236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (28))){
var inst_50838 = (state_50901[(19)]);
var inst_50856 = (state_50901[(23)]);
var inst_50856__$1 = cljs.core.seq(inst_50838);
var state_50901__$1 = (function (){var statearr_50967 = state_50901;
(statearr_50967[(23)] = inst_50856__$1);

return statearr_50967;
})();
if(inst_50856__$1){
var statearr_50968_53238 = state_50901__$1;
(statearr_50968_53238[(1)] = (33));

} else {
var statearr_50969_53239 = state_50901__$1;
(statearr_50969_53239[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (25))){
var inst_50841 = (state_50901[(11)]);
var inst_50840 = (state_50901[(20)]);
var inst_50843 = (inst_50841 < inst_50840);
var inst_50844 = inst_50843;
var state_50901__$1 = state_50901;
if(cljs.core.truth_(inst_50844)){
var statearr_50970_53242 = state_50901__$1;
(statearr_50970_53242[(1)] = (27));

} else {
var statearr_50971_53244 = state_50901__$1;
(statearr_50971_53244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (34))){
var state_50901__$1 = state_50901;
var statearr_50973_53246 = state_50901__$1;
(statearr_50973_53246[(2)] = null);

(statearr_50973_53246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (17))){
var state_50901__$1 = state_50901;
var statearr_50977_53247 = state_50901__$1;
(statearr_50977_53247[(2)] = null);

(statearr_50977_53247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (3))){
var inst_50899 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50901__$1,inst_50899);
} else {
if((state_val_50902 === (12))){
var inst_50825 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50981_53252 = state_50901__$1;
(statearr_50981_53252[(2)] = inst_50825);

(statearr_50981_53252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (2))){
var state_50901__$1 = state_50901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50901__$1,(4),ch);
} else {
if((state_val_50902 === (23))){
var state_50901__$1 = state_50901;
var statearr_50982_53254 = state_50901__$1;
(statearr_50982_53254[(2)] = null);

(statearr_50982_53254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (35))){
var inst_50883 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50983_53255 = state_50901__$1;
(statearr_50983_53255[(2)] = inst_50883);

(statearr_50983_53255[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (19))){
var inst_50797 = (state_50901[(7)]);
var inst_50801 = cljs.core.chunk_first(inst_50797);
var inst_50802 = cljs.core.chunk_rest(inst_50797);
var inst_50803 = cljs.core.count(inst_50801);
var inst_50775 = inst_50802;
var inst_50776 = inst_50801;
var inst_50777 = inst_50803;
var inst_50778 = (0);
var state_50901__$1 = (function (){var statearr_50984 = state_50901;
(statearr_50984[(13)] = inst_50775);

(statearr_50984[(15)] = inst_50778);

(statearr_50984[(16)] = inst_50776);

(statearr_50984[(17)] = inst_50777);

return statearr_50984;
})();
var statearr_50985_53259 = state_50901__$1;
(statearr_50985_53259[(2)] = null);

(statearr_50985_53259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (11))){
var inst_50797 = (state_50901[(7)]);
var inst_50775 = (state_50901[(13)]);
var inst_50797__$1 = cljs.core.seq(inst_50775);
var state_50901__$1 = (function (){var statearr_50988 = state_50901;
(statearr_50988[(7)] = inst_50797__$1);

return statearr_50988;
})();
if(inst_50797__$1){
var statearr_50990_53264 = state_50901__$1;
(statearr_50990_53264[(1)] = (16));

} else {
var statearr_50994_53267 = state_50901__$1;
(statearr_50994_53267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (9))){
var inst_50827 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50995_53268 = state_50901__$1;
(statearr_50995_53268[(2)] = inst_50827);

(statearr_50995_53268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (5))){
var inst_50773 = cljs.core.deref(cs);
var inst_50774 = cljs.core.seq(inst_50773);
var inst_50775 = inst_50774;
var inst_50776 = null;
var inst_50777 = (0);
var inst_50778 = (0);
var state_50901__$1 = (function (){var statearr_50996 = state_50901;
(statearr_50996[(13)] = inst_50775);

(statearr_50996[(15)] = inst_50778);

(statearr_50996[(16)] = inst_50776);

(statearr_50996[(17)] = inst_50777);

return statearr_50996;
})();
var statearr_50997_53273 = state_50901__$1;
(statearr_50997_53273[(2)] = null);

(statearr_50997_53273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (14))){
var state_50901__$1 = state_50901;
var statearr_50998_53275 = state_50901__$1;
(statearr_50998_53275[(2)] = null);

(statearr_50998_53275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (45))){
var inst_50891 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_50999_53281 = state_50901__$1;
(statearr_50999_53281[(2)] = inst_50891);

(statearr_50999_53281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (26))){
var inst_50830 = (state_50901[(27)]);
var inst_50887 = (state_50901[(2)]);
var inst_50888 = cljs.core.seq(inst_50830);
var state_50901__$1 = (function (){var statearr_51002 = state_50901;
(statearr_51002[(29)] = inst_50887);

return statearr_51002;
})();
if(inst_50888){
var statearr_51003_53283 = state_50901__$1;
(statearr_51003_53283[(1)] = (42));

} else {
var statearr_51004_53284 = state_50901__$1;
(statearr_51004_53284[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (16))){
var inst_50797 = (state_50901[(7)]);
var inst_50799 = cljs.core.chunked_seq_QMARK_(inst_50797);
var state_50901__$1 = state_50901;
if(inst_50799){
var statearr_51005_53285 = state_50901__$1;
(statearr_51005_53285[(1)] = (19));

} else {
var statearr_51006_53286 = state_50901__$1;
(statearr_51006_53286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (38))){
var inst_50880 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_51007_53288 = state_50901__$1;
(statearr_51007_53288[(2)] = inst_50880);

(statearr_51007_53288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (30))){
var state_50901__$1 = state_50901;
var statearr_51008_53289 = state_50901__$1;
(statearr_51008_53289[(2)] = null);

(statearr_51008_53289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (10))){
var inst_50778 = (state_50901[(15)]);
var inst_50776 = (state_50901[(16)]);
var inst_50786 = cljs.core._nth(inst_50776,inst_50778);
var inst_50787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50786,(0),null);
var inst_50788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50786,(1),null);
var state_50901__$1 = (function (){var statearr_51011 = state_50901;
(statearr_51011[(24)] = inst_50787);

return statearr_51011;
})();
if(cljs.core.truth_(inst_50788)){
var statearr_51012_53295 = state_50901__$1;
(statearr_51012_53295[(1)] = (13));

} else {
var statearr_51013_53298 = state_50901__$1;
(statearr_51013_53298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (18))){
var inst_50823 = (state_50901[(2)]);
var state_50901__$1 = state_50901;
var statearr_51014_53299 = state_50901__$1;
(statearr_51014_53299[(2)] = inst_50823);

(statearr_51014_53299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (42))){
var state_50901__$1 = state_50901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50901__$1,(45),dchan);
} else {
if((state_val_50902 === (37))){
var inst_50766 = (state_50901[(9)]);
var inst_50870 = (state_50901[(22)]);
var inst_50856 = (state_50901[(23)]);
var inst_50870__$1 = cljs.core.first(inst_50856);
var inst_50871 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50870__$1,inst_50766,done);
var state_50901__$1 = (function (){var statearr_51015 = state_50901;
(statearr_51015[(22)] = inst_50870__$1);

return statearr_51015;
})();
if(cljs.core.truth_(inst_50871)){
var statearr_51020_53302 = state_50901__$1;
(statearr_51020_53302[(1)] = (39));

} else {
var statearr_51023_53304 = state_50901__$1;
(statearr_51023_53304[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50902 === (8))){
var inst_50778 = (state_50901[(15)]);
var inst_50777 = (state_50901[(17)]);
var inst_50780 = (inst_50778 < inst_50777);
var inst_50781 = inst_50780;
var state_50901__$1 = state_50901;
if(cljs.core.truth_(inst_50781)){
var statearr_51024_53305 = state_50901__$1;
(statearr_51024_53305[(1)] = (10));

} else {
var statearr_51025_53306 = state_50901__$1;
(statearr_51025_53306[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__49484__auto__ = null;
var cljs$core$async$mult_$_state_machine__49484__auto____0 = (function (){
var statearr_51026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51026[(0)] = cljs$core$async$mult_$_state_machine__49484__auto__);

(statearr_51026[(1)] = (1));

return statearr_51026;
});
var cljs$core$async$mult_$_state_machine__49484__auto____1 = (function (state_50901){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_50901);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51027){var ex__49487__auto__ = e51027;
var statearr_51028_53310 = state_50901;
(statearr_51028_53310[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_50901[(4)]))){
var statearr_51031_53311 = state_50901;
(statearr_51031_53311[(1)] = cljs.core.first((state_50901[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53313 = state_50901;
state_50901 = G__53313;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49484__auto__ = function(state_50901){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49484__auto____1.call(this,state_50901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49484__auto____0;
cljs$core$async$mult_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49484__auto____1;
return cljs$core$async$mult_$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51032 = f__49911__auto__();
(statearr_51032[(6)] = c__49910__auto___53148);

return statearr_51032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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
var G__51035 = arguments.length;
switch (G__51035) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_53326 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53326(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53333 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53333(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53336 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53336(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53343 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53343(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53345 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53345(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53350 = arguments.length;
var i__4865__auto___53351 = (0);
while(true){
if((i__4865__auto___53351 < len__4864__auto___53350)){
args__4870__auto__.push((arguments[i__4865__auto___53351]));

var G__53352 = (i__4865__auto___53351 + (1));
i__4865__auto___53351 = G__53352;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51067){
var map__51068 = p__51067;
var map__51068__$1 = cljs.core.__destructure_map(map__51068);
var opts = map__51068__$1;
var statearr_51069_53356 = state;
(statearr_51069_53356[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51070_53357 = state;
(statearr_51070_53357[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51071_53358 = state;
(statearr_51071_53358[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51059){
var G__51060 = cljs.core.first(seq51059);
var seq51059__$1 = cljs.core.next(seq51059);
var G__51061 = cljs.core.first(seq51059__$1);
var seq51059__$2 = cljs.core.next(seq51059__$1);
var G__51062 = cljs.core.first(seq51059__$2);
var seq51059__$3 = cljs.core.next(seq51059__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51060,G__51061,G__51062,seq51059__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51082 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51083){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51083 = meta51083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51084,meta51083__$1){
var self__ = this;
var _51084__$1 = this;
return (new cljs.core.async.t_cljs$core$async51082(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51083__$1));
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51084){
var self__ = this;
var _51084__$1 = this;
return self__.meta51083;
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51082.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51083","meta51083",-800497404,null)], null);
}));

(cljs.core.async.t_cljs$core$async51082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51082");

(cljs.core.async.t_cljs$core$async51082.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51082.
 */
cljs.core.async.__GT_t_cljs$core$async51082 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51082(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51083){
return (new cljs.core.async.t_cljs$core$async51082(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51083));
});

}

return (new cljs.core.async.t_cljs$core$async51082(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49910__auto___53387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51161){
var state_val_51162 = (state_51161[(1)]);
if((state_val_51162 === (7))){
var inst_51118 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
if(cljs.core.truth_(inst_51118)){
var statearr_51164_53389 = state_51161__$1;
(statearr_51164_53389[(1)] = (8));

} else {
var statearr_51165_53390 = state_51161__$1;
(statearr_51165_53390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (20))){
var inst_51111 = (state_51161[(7)]);
var state_51161__$1 = state_51161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51161__$1,(23),out,inst_51111);
} else {
if((state_val_51162 === (1))){
var inst_51094 = calc_state();
var inst_51095 = cljs.core.__destructure_map(inst_51094);
var inst_51096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51095,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51095,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51095,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51099 = inst_51094;
var state_51161__$1 = (function (){var statearr_51170 = state_51161;
(statearr_51170[(8)] = inst_51096);

(statearr_51170[(9)] = inst_51098);

(statearr_51170[(10)] = inst_51097);

(statearr_51170[(11)] = inst_51099);

return statearr_51170;
})();
var statearr_51171_53392 = state_51161__$1;
(statearr_51171_53392[(2)] = null);

(statearr_51171_53392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (24))){
var inst_51102 = (state_51161[(12)]);
var inst_51099 = inst_51102;
var state_51161__$1 = (function (){var statearr_51172 = state_51161;
(statearr_51172[(11)] = inst_51099);

return statearr_51172;
})();
var statearr_51173_53395 = state_51161__$1;
(statearr_51173_53395[(2)] = null);

(statearr_51173_53395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (4))){
var inst_51113 = (state_51161[(13)]);
var inst_51111 = (state_51161[(7)]);
var inst_51110 = (state_51161[(2)]);
var inst_51111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51110,(0),null);
var inst_51112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51110,(1),null);
var inst_51113__$1 = (inst_51111__$1 == null);
var state_51161__$1 = (function (){var statearr_51176 = state_51161;
(statearr_51176[(14)] = inst_51112);

(statearr_51176[(13)] = inst_51113__$1);

(statearr_51176[(7)] = inst_51111__$1);

return statearr_51176;
})();
if(cljs.core.truth_(inst_51113__$1)){
var statearr_51177_53401 = state_51161__$1;
(statearr_51177_53401[(1)] = (5));

} else {
var statearr_51178_53402 = state_51161__$1;
(statearr_51178_53402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (15))){
var inst_51103 = (state_51161[(15)]);
var inst_51135 = (state_51161[(16)]);
var inst_51135__$1 = cljs.core.empty_QMARK_(inst_51103);
var state_51161__$1 = (function (){var statearr_51179 = state_51161;
(statearr_51179[(16)] = inst_51135__$1);

return statearr_51179;
})();
if(inst_51135__$1){
var statearr_51180_53403 = state_51161__$1;
(statearr_51180_53403[(1)] = (17));

} else {
var statearr_51181_53404 = state_51161__$1;
(statearr_51181_53404[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (21))){
var inst_51102 = (state_51161[(12)]);
var inst_51099 = inst_51102;
var state_51161__$1 = (function (){var statearr_51182 = state_51161;
(statearr_51182[(11)] = inst_51099);

return statearr_51182;
})();
var statearr_51186_53406 = state_51161__$1;
(statearr_51186_53406[(2)] = null);

(statearr_51186_53406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (13))){
var inst_51128 = (state_51161[(2)]);
var inst_51129 = calc_state();
var inst_51099 = inst_51129;
var state_51161__$1 = (function (){var statearr_51187 = state_51161;
(statearr_51187[(17)] = inst_51128);

(statearr_51187[(11)] = inst_51099);

return statearr_51187;
})();
var statearr_51188_53410 = state_51161__$1;
(statearr_51188_53410[(2)] = null);

(statearr_51188_53410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (22))){
var inst_51155 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
var statearr_51189_53412 = state_51161__$1;
(statearr_51189_53412[(2)] = inst_51155);

(statearr_51189_53412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (6))){
var inst_51112 = (state_51161[(14)]);
var inst_51116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51112,change);
var state_51161__$1 = state_51161;
var statearr_51194_53414 = state_51161__$1;
(statearr_51194_53414[(2)] = inst_51116);

(statearr_51194_53414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (25))){
var state_51161__$1 = state_51161;
var statearr_51198_53417 = state_51161__$1;
(statearr_51198_53417[(2)] = null);

(statearr_51198_53417[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (17))){
var inst_51112 = (state_51161[(14)]);
var inst_51104 = (state_51161[(18)]);
var inst_51137 = (inst_51104.cljs$core$IFn$_invoke$arity$1 ? inst_51104.cljs$core$IFn$_invoke$arity$1(inst_51112) : inst_51104.call(null,inst_51112));
var inst_51138 = cljs.core.not(inst_51137);
var state_51161__$1 = state_51161;
var statearr_51199_53420 = state_51161__$1;
(statearr_51199_53420[(2)] = inst_51138);

(statearr_51199_53420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (3))){
var inst_51159 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51161__$1,inst_51159);
} else {
if((state_val_51162 === (12))){
var state_51161__$1 = state_51161;
var statearr_51203_53425 = state_51161__$1;
(statearr_51203_53425[(2)] = null);

(statearr_51203_53425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (2))){
var inst_51102 = (state_51161[(12)]);
var inst_51099 = (state_51161[(11)]);
var inst_51102__$1 = cljs.core.__destructure_map(inst_51099);
var inst_51103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51161__$1 = (function (){var statearr_51204 = state_51161;
(statearr_51204[(15)] = inst_51103);

(statearr_51204[(12)] = inst_51102__$1);

(statearr_51204[(18)] = inst_51104);

return statearr_51204;
})();
return cljs.core.async.ioc_alts_BANG_(state_51161__$1,(4),inst_51105);
} else {
if((state_val_51162 === (23))){
var inst_51146 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
if(cljs.core.truth_(inst_51146)){
var statearr_51209_53430 = state_51161__$1;
(statearr_51209_53430[(1)] = (24));

} else {
var statearr_51213_53432 = state_51161__$1;
(statearr_51213_53432[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (19))){
var inst_51141 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
var statearr_51214_53433 = state_51161__$1;
(statearr_51214_53433[(2)] = inst_51141);

(statearr_51214_53433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (11))){
var inst_51112 = (state_51161[(14)]);
var inst_51125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51112);
var state_51161__$1 = state_51161;
var statearr_51215_53437 = state_51161__$1;
(statearr_51215_53437[(2)] = inst_51125);

(statearr_51215_53437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (9))){
var inst_51112 = (state_51161[(14)]);
var inst_51103 = (state_51161[(15)]);
var inst_51132 = (state_51161[(19)]);
var inst_51132__$1 = (inst_51103.cljs$core$IFn$_invoke$arity$1 ? inst_51103.cljs$core$IFn$_invoke$arity$1(inst_51112) : inst_51103.call(null,inst_51112));
var state_51161__$1 = (function (){var statearr_51218 = state_51161;
(statearr_51218[(19)] = inst_51132__$1);

return statearr_51218;
})();
if(cljs.core.truth_(inst_51132__$1)){
var statearr_51219_53439 = state_51161__$1;
(statearr_51219_53439[(1)] = (14));

} else {
var statearr_51220_53440 = state_51161__$1;
(statearr_51220_53440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (5))){
var inst_51113 = (state_51161[(13)]);
var state_51161__$1 = state_51161;
var statearr_51221_53441 = state_51161__$1;
(statearr_51221_53441[(2)] = inst_51113);

(statearr_51221_53441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (14))){
var inst_51132 = (state_51161[(19)]);
var state_51161__$1 = state_51161;
var statearr_51222_53442 = state_51161__$1;
(statearr_51222_53442[(2)] = inst_51132);

(statearr_51222_53442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (26))){
var inst_51151 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
var statearr_51224_53447 = state_51161__$1;
(statearr_51224_53447[(2)] = inst_51151);

(statearr_51224_53447[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (16))){
var inst_51143 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
if(cljs.core.truth_(inst_51143)){
var statearr_51225_53448 = state_51161__$1;
(statearr_51225_53448[(1)] = (20));

} else {
var statearr_51226_53449 = state_51161__$1;
(statearr_51226_53449[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (10))){
var inst_51157 = (state_51161[(2)]);
var state_51161__$1 = state_51161;
var statearr_51230_53450 = state_51161__$1;
(statearr_51230_53450[(2)] = inst_51157);

(statearr_51230_53450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (18))){
var inst_51135 = (state_51161[(16)]);
var state_51161__$1 = state_51161;
var statearr_51231_53455 = state_51161__$1;
(statearr_51231_53455[(2)] = inst_51135);

(statearr_51231_53455[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51162 === (8))){
var inst_51111 = (state_51161[(7)]);
var inst_51120 = (inst_51111 == null);
var state_51161__$1 = state_51161;
if(cljs.core.truth_(inst_51120)){
var statearr_51232_53458 = state_51161__$1;
(statearr_51232_53458[(1)] = (11));

} else {
var statearr_51233_53459 = state_51161__$1;
(statearr_51233_53459[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__49484__auto__ = null;
var cljs$core$async$mix_$_state_machine__49484__auto____0 = (function (){
var statearr_51235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51235[(0)] = cljs$core$async$mix_$_state_machine__49484__auto__);

(statearr_51235[(1)] = (1));

return statearr_51235;
});
var cljs$core$async$mix_$_state_machine__49484__auto____1 = (function (state_51161){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51161);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51236){var ex__49487__auto__ = e51236;
var statearr_51237_53461 = state_51161;
(statearr_51237_53461[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51161[(4)]))){
var statearr_51238_53462 = state_51161;
(statearr_51238_53462[(1)] = cljs.core.first((state_51161[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53463 = state_51161;
state_51161 = G__53463;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49484__auto__ = function(state_51161){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49484__auto____1.call(this,state_51161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49484__auto____0;
cljs$core$async$mix_$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49484__auto____1;
return cljs$core$async$mix_$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51239 = f__49911__auto__();
(statearr_51239[(6)] = c__49910__auto___53387);

return statearr_51239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_53464 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53464(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53469 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53469(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53473 = (function() {
var G__53474 = null;
var G__53474__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53474__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53474 = function(p,v){
switch(arguments.length){
case 1:
return G__53474__1.call(this,p);
case 2:
return G__53474__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53474.cljs$core$IFn$_invoke$arity$1 = G__53474__1;
G__53474.cljs$core$IFn$_invoke$arity$2 = G__53474__2;
return G__53474;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51249 = arguments.length;
switch (G__51249) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53473(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53473(p,v);
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
var G__51252 = arguments.length;
switch (G__51252) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51250_SHARP_){
if(cljs.core.truth_((p1__51250_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51250_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51250_SHARP_.call(null,topic)))){
return p1__51250_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51250_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51254 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51255){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51255 = meta51255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51256,meta51255__$1){
var self__ = this;
var _51256__$1 = this;
return (new cljs.core.async.t_cljs$core$async51254(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51255__$1));
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51256){
var self__ = this;
var _51256__$1 = this;
return self__.meta51255;
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51254.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51255","meta51255",-944172275,null)], null);
}));

(cljs.core.async.t_cljs$core$async51254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51254");

(cljs.core.async.t_cljs$core$async51254.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51254.
 */
cljs.core.async.__GT_t_cljs$core$async51254 = (function cljs$core$async$__GT_t_cljs$core$async51254(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51255){
return (new cljs.core.async.t_cljs$core$async51254(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51255));
});

}

return (new cljs.core.async.t_cljs$core$async51254(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49910__auto___53491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51350){
var state_val_51351 = (state_51350[(1)]);
if((state_val_51351 === (7))){
var inst_51346 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51352_53493 = state_51350__$1;
(statearr_51352_53493[(2)] = inst_51346);

(statearr_51352_53493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (20))){
var state_51350__$1 = state_51350;
var statearr_51353_53494 = state_51350__$1;
(statearr_51353_53494[(2)] = null);

(statearr_51353_53494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (1))){
var state_51350__$1 = state_51350;
var statearr_51354_53495 = state_51350__$1;
(statearr_51354_53495[(2)] = null);

(statearr_51354_53495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (24))){
var inst_51329 = (state_51350[(7)]);
var inst_51338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51329);
var state_51350__$1 = state_51350;
var statearr_51355_53498 = state_51350__$1;
(statearr_51355_53498[(2)] = inst_51338);

(statearr_51355_53498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (4))){
var inst_51280 = (state_51350[(8)]);
var inst_51280__$1 = (state_51350[(2)]);
var inst_51281 = (inst_51280__$1 == null);
var state_51350__$1 = (function (){var statearr_51360 = state_51350;
(statearr_51360[(8)] = inst_51280__$1);

return statearr_51360;
})();
if(cljs.core.truth_(inst_51281)){
var statearr_51361_53499 = state_51350__$1;
(statearr_51361_53499[(1)] = (5));

} else {
var statearr_51362_53500 = state_51350__$1;
(statearr_51362_53500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (15))){
var inst_51323 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51363_53501 = state_51350__$1;
(statearr_51363_53501[(2)] = inst_51323);

(statearr_51363_53501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (21))){
var inst_51343 = (state_51350[(2)]);
var state_51350__$1 = (function (){var statearr_51364 = state_51350;
(statearr_51364[(9)] = inst_51343);

return statearr_51364;
})();
var statearr_51365_53503 = state_51350__$1;
(statearr_51365_53503[(2)] = null);

(statearr_51365_53503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (13))){
var inst_51304 = (state_51350[(10)]);
var inst_51306 = cljs.core.chunked_seq_QMARK_(inst_51304);
var state_51350__$1 = state_51350;
if(inst_51306){
var statearr_51366_53507 = state_51350__$1;
(statearr_51366_53507[(1)] = (16));

} else {
var statearr_51367_53508 = state_51350__$1;
(statearr_51367_53508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (22))){
var inst_51335 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
if(cljs.core.truth_(inst_51335)){
var statearr_51368_53509 = state_51350__$1;
(statearr_51368_53509[(1)] = (23));

} else {
var statearr_51369_53510 = state_51350__$1;
(statearr_51369_53510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (6))){
var inst_51329 = (state_51350[(7)]);
var inst_51280 = (state_51350[(8)]);
var inst_51331 = (state_51350[(11)]);
var inst_51329__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51280) : topic_fn.call(null,inst_51280));
var inst_51330 = cljs.core.deref(mults);
var inst_51331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51330,inst_51329__$1);
var state_51350__$1 = (function (){var statearr_51370 = state_51350;
(statearr_51370[(7)] = inst_51329__$1);

(statearr_51370[(11)] = inst_51331__$1);

return statearr_51370;
})();
if(cljs.core.truth_(inst_51331__$1)){
var statearr_51371_53511 = state_51350__$1;
(statearr_51371_53511[(1)] = (19));

} else {
var statearr_51372_53513 = state_51350__$1;
(statearr_51372_53513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (25))){
var inst_51340 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51373_53516 = state_51350__$1;
(statearr_51373_53516[(2)] = inst_51340);

(statearr_51373_53516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (17))){
var inst_51304 = (state_51350[(10)]);
var inst_51313 = cljs.core.first(inst_51304);
var inst_51314 = cljs.core.async.muxch_STAR_(inst_51313);
var inst_51315 = cljs.core.async.close_BANG_(inst_51314);
var inst_51317 = cljs.core.next(inst_51304);
var inst_51290 = inst_51317;
var inst_51291 = null;
var inst_51292 = (0);
var inst_51293 = (0);
var state_51350__$1 = (function (){var statearr_51374 = state_51350;
(statearr_51374[(12)] = inst_51293);

(statearr_51374[(13)] = inst_51292);

(statearr_51374[(14)] = inst_51315);

(statearr_51374[(15)] = inst_51291);

(statearr_51374[(16)] = inst_51290);

return statearr_51374;
})();
var statearr_51375_53520 = state_51350__$1;
(statearr_51375_53520[(2)] = null);

(statearr_51375_53520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (3))){
var inst_51348 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51350__$1,inst_51348);
} else {
if((state_val_51351 === (12))){
var inst_51325 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51377_53521 = state_51350__$1;
(statearr_51377_53521[(2)] = inst_51325);

(statearr_51377_53521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (2))){
var state_51350__$1 = state_51350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51350__$1,(4),ch);
} else {
if((state_val_51351 === (23))){
var state_51350__$1 = state_51350;
var statearr_51378_53524 = state_51350__$1;
(statearr_51378_53524[(2)] = null);

(statearr_51378_53524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (19))){
var inst_51280 = (state_51350[(8)]);
var inst_51331 = (state_51350[(11)]);
var inst_51333 = cljs.core.async.muxch_STAR_(inst_51331);
var state_51350__$1 = state_51350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51350__$1,(22),inst_51333,inst_51280);
} else {
if((state_val_51351 === (11))){
var inst_51304 = (state_51350[(10)]);
var inst_51290 = (state_51350[(16)]);
var inst_51304__$1 = cljs.core.seq(inst_51290);
var state_51350__$1 = (function (){var statearr_51382 = state_51350;
(statearr_51382[(10)] = inst_51304__$1);

return statearr_51382;
})();
if(inst_51304__$1){
var statearr_51384_53528 = state_51350__$1;
(statearr_51384_53528[(1)] = (13));

} else {
var statearr_51387_53529 = state_51350__$1;
(statearr_51387_53529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (9))){
var inst_51327 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51390_53531 = state_51350__$1;
(statearr_51390_53531[(2)] = inst_51327);

(statearr_51390_53531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (5))){
var inst_51287 = cljs.core.deref(mults);
var inst_51288 = cljs.core.vals(inst_51287);
var inst_51289 = cljs.core.seq(inst_51288);
var inst_51290 = inst_51289;
var inst_51291 = null;
var inst_51292 = (0);
var inst_51293 = (0);
var state_51350__$1 = (function (){var statearr_51392 = state_51350;
(statearr_51392[(12)] = inst_51293);

(statearr_51392[(13)] = inst_51292);

(statearr_51392[(15)] = inst_51291);

(statearr_51392[(16)] = inst_51290);

return statearr_51392;
})();
var statearr_51398_53533 = state_51350__$1;
(statearr_51398_53533[(2)] = null);

(statearr_51398_53533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (14))){
var state_51350__$1 = state_51350;
var statearr_51403_53534 = state_51350__$1;
(statearr_51403_53534[(2)] = null);

(statearr_51403_53534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (16))){
var inst_51304 = (state_51350[(10)]);
var inst_51308 = cljs.core.chunk_first(inst_51304);
var inst_51309 = cljs.core.chunk_rest(inst_51304);
var inst_51310 = cljs.core.count(inst_51308);
var inst_51290 = inst_51309;
var inst_51291 = inst_51308;
var inst_51292 = inst_51310;
var inst_51293 = (0);
var state_51350__$1 = (function (){var statearr_51411 = state_51350;
(statearr_51411[(12)] = inst_51293);

(statearr_51411[(13)] = inst_51292);

(statearr_51411[(15)] = inst_51291);

(statearr_51411[(16)] = inst_51290);

return statearr_51411;
})();
var statearr_51412_53542 = state_51350__$1;
(statearr_51412_53542[(2)] = null);

(statearr_51412_53542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (10))){
var inst_51293 = (state_51350[(12)]);
var inst_51292 = (state_51350[(13)]);
var inst_51291 = (state_51350[(15)]);
var inst_51290 = (state_51350[(16)]);
var inst_51298 = cljs.core._nth(inst_51291,inst_51293);
var inst_51299 = cljs.core.async.muxch_STAR_(inst_51298);
var inst_51300 = cljs.core.async.close_BANG_(inst_51299);
var inst_51301 = (inst_51293 + (1));
var tmp51399 = inst_51292;
var tmp51400 = inst_51291;
var tmp51401 = inst_51290;
var inst_51290__$1 = tmp51401;
var inst_51291__$1 = tmp51400;
var inst_51292__$1 = tmp51399;
var inst_51293__$1 = inst_51301;
var state_51350__$1 = (function (){var statearr_51417 = state_51350;
(statearr_51417[(12)] = inst_51293__$1);

(statearr_51417[(17)] = inst_51300);

(statearr_51417[(13)] = inst_51292__$1);

(statearr_51417[(15)] = inst_51291__$1);

(statearr_51417[(16)] = inst_51290__$1);

return statearr_51417;
})();
var statearr_51423_53544 = state_51350__$1;
(statearr_51423_53544[(2)] = null);

(statearr_51423_53544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (18))){
var inst_51320 = (state_51350[(2)]);
var state_51350__$1 = state_51350;
var statearr_51424_53545 = state_51350__$1;
(statearr_51424_53545[(2)] = inst_51320);

(statearr_51424_53545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51351 === (8))){
var inst_51293 = (state_51350[(12)]);
var inst_51292 = (state_51350[(13)]);
var inst_51295 = (inst_51293 < inst_51292);
var inst_51296 = inst_51295;
var state_51350__$1 = state_51350;
if(cljs.core.truth_(inst_51296)){
var statearr_51425_53546 = state_51350__$1;
(statearr_51425_53546[(1)] = (10));

} else {
var statearr_51427_53547 = state_51350__$1;
(statearr_51427_53547[(1)] = (11));

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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_51431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51431[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_51431[(1)] = (1));

return statearr_51431;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_51350){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51350);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51437){var ex__49487__auto__ = e51437;
var statearr_51440_53549 = state_51350;
(statearr_51440_53549[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51350[(4)]))){
var statearr_51448_53550 = state_51350;
(statearr_51448_53550[(1)] = cljs.core.first((state_51350[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53551 = state_51350;
state_51350 = G__53551;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_51350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_51350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51464 = f__49911__auto__();
(statearr_51464[(6)] = c__49910__auto___53491);

return statearr_51464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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
var G__51481 = arguments.length;
switch (G__51481) {
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
var G__51489 = arguments.length;
switch (G__51489) {
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
var G__51496 = arguments.length;
switch (G__51496) {
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
var c__49910__auto___53565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51552){
var state_val_51554 = (state_51552[(1)]);
if((state_val_51554 === (7))){
var state_51552__$1 = state_51552;
var statearr_51555_53566 = state_51552__$1;
(statearr_51555_53566[(2)] = null);

(statearr_51555_53566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (1))){
var state_51552__$1 = state_51552;
var statearr_51557_53569 = state_51552__$1;
(statearr_51557_53569[(2)] = null);

(statearr_51557_53569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (4))){
var inst_51504 = (state_51552[(7)]);
var inst_51506 = (state_51552[(8)]);
var inst_51508 = (inst_51506 < inst_51504);
var state_51552__$1 = state_51552;
if(cljs.core.truth_(inst_51508)){
var statearr_51560_53572 = state_51552__$1;
(statearr_51560_53572[(1)] = (6));

} else {
var statearr_51561_53573 = state_51552__$1;
(statearr_51561_53573[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (15))){
var inst_51537 = (state_51552[(9)]);
var inst_51543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51537);
var state_51552__$1 = state_51552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51552__$1,(17),out,inst_51543);
} else {
if((state_val_51554 === (13))){
var inst_51537 = (state_51552[(9)]);
var inst_51537__$1 = (state_51552[(2)]);
var inst_51538 = cljs.core.some(cljs.core.nil_QMARK_,inst_51537__$1);
var state_51552__$1 = (function (){var statearr_51565 = state_51552;
(statearr_51565[(9)] = inst_51537__$1);

return statearr_51565;
})();
if(cljs.core.truth_(inst_51538)){
var statearr_51567_53576 = state_51552__$1;
(statearr_51567_53576[(1)] = (14));

} else {
var statearr_51568_53578 = state_51552__$1;
(statearr_51568_53578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (6))){
var state_51552__$1 = state_51552;
var statearr_51570_53579 = state_51552__$1;
(statearr_51570_53579[(2)] = null);

(statearr_51570_53579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (17))){
var inst_51545 = (state_51552[(2)]);
var state_51552__$1 = (function (){var statearr_51576 = state_51552;
(statearr_51576[(10)] = inst_51545);

return statearr_51576;
})();
var statearr_51578_53580 = state_51552__$1;
(statearr_51578_53580[(2)] = null);

(statearr_51578_53580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (3))){
var inst_51550 = (state_51552[(2)]);
var state_51552__$1 = state_51552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51552__$1,inst_51550);
} else {
if((state_val_51554 === (12))){
var _ = (function (){var statearr_51580 = state_51552;
(statearr_51580[(4)] = cljs.core.rest((state_51552[(4)])));

return statearr_51580;
})();
var state_51552__$1 = state_51552;
var ex51575 = (state_51552__$1[(2)]);
var statearr_51582_53581 = state_51552__$1;
(statearr_51582_53581[(5)] = ex51575);


if((ex51575 instanceof Object)){
var statearr_51584_53582 = state_51552__$1;
(statearr_51584_53582[(1)] = (11));

(statearr_51584_53582[(5)] = null);

} else {
throw ex51575;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (2))){
var inst_51502 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51504 = cnt;
var inst_51506 = (0);
var state_51552__$1 = (function (){var statearr_51589 = state_51552;
(statearr_51589[(11)] = inst_51502);

(statearr_51589[(7)] = inst_51504);

(statearr_51589[(8)] = inst_51506);

return statearr_51589;
})();
var statearr_51591_53584 = state_51552__$1;
(statearr_51591_53584[(2)] = null);

(statearr_51591_53584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (11))){
var inst_51515 = (state_51552[(2)]);
var inst_51516 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51552__$1 = (function (){var statearr_51593 = state_51552;
(statearr_51593[(12)] = inst_51515);

return statearr_51593;
})();
var statearr_51594_53588 = state_51552__$1;
(statearr_51594_53588[(2)] = inst_51516);

(statearr_51594_53588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (9))){
var inst_51506 = (state_51552[(8)]);
var _ = (function (){var statearr_51596 = state_51552;
(statearr_51596[(4)] = cljs.core.cons((12),(state_51552[(4)])));

return statearr_51596;
})();
var inst_51522 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51506) : chs__$1.call(null,inst_51506));
var inst_51523 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51506) : done.call(null,inst_51506));
var inst_51524 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51522,inst_51523);
var ___$1 = (function (){var statearr_51597 = state_51552;
(statearr_51597[(4)] = cljs.core.rest((state_51552[(4)])));

return statearr_51597;
})();
var state_51552__$1 = state_51552;
var statearr_51599_53590 = state_51552__$1;
(statearr_51599_53590[(2)] = inst_51524);

(statearr_51599_53590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (5))){
var inst_51535 = (state_51552[(2)]);
var state_51552__$1 = (function (){var statearr_51601 = state_51552;
(statearr_51601[(13)] = inst_51535);

return statearr_51601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51552__$1,(13),dchan);
} else {
if((state_val_51554 === (14))){
var inst_51540 = cljs.core.async.close_BANG_(out);
var state_51552__$1 = state_51552;
var statearr_51604_53592 = state_51552__$1;
(statearr_51604_53592[(2)] = inst_51540);

(statearr_51604_53592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (16))){
var inst_51548 = (state_51552[(2)]);
var state_51552__$1 = state_51552;
var statearr_51605_53595 = state_51552__$1;
(statearr_51605_53595[(2)] = inst_51548);

(statearr_51605_53595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (10))){
var inst_51506 = (state_51552[(8)]);
var inst_51527 = (state_51552[(2)]);
var inst_51529 = (inst_51506 + (1));
var inst_51506__$1 = inst_51529;
var state_51552__$1 = (function (){var statearr_51606 = state_51552;
(statearr_51606[(8)] = inst_51506__$1);

(statearr_51606[(14)] = inst_51527);

return statearr_51606;
})();
var statearr_51607_53597 = state_51552__$1;
(statearr_51607_53597[(2)] = null);

(statearr_51607_53597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51554 === (8))){
var inst_51533 = (state_51552[(2)]);
var state_51552__$1 = state_51552;
var statearr_51609_53600 = state_51552__$1;
(statearr_51609_53600[(2)] = inst_51533);

(statearr_51609_53600[(1)] = (5));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_51613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51613[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_51613[(1)] = (1));

return statearr_51613;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_51552){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51552);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51614){var ex__49487__auto__ = e51614;
var statearr_51616_53601 = state_51552;
(statearr_51616_53601[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51552[(4)]))){
var statearr_51617_53602 = state_51552;
(statearr_51617_53602[(1)] = cljs.core.first((state_51552[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53603 = state_51552;
state_51552 = G__53603;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_51552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_51552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51619 = f__49911__auto__();
(statearr_51619[(6)] = c__49910__auto___53565);

return statearr_51619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


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
var G__51625 = arguments.length;
switch (G__51625) {
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
var c__49910__auto___53606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51680){
var state_val_51681 = (state_51680[(1)]);
if((state_val_51681 === (7))){
var inst_51648 = (state_51680[(7)]);
var inst_51646 = (state_51680[(8)]);
var inst_51646__$1 = (state_51680[(2)]);
var inst_51648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51646__$1,(0),null);
var inst_51649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51646__$1,(1),null);
var inst_51651 = (inst_51648__$1 == null);
var state_51680__$1 = (function (){var statearr_51688 = state_51680;
(statearr_51688[(7)] = inst_51648__$1);

(statearr_51688[(8)] = inst_51646__$1);

(statearr_51688[(9)] = inst_51649);

return statearr_51688;
})();
if(cljs.core.truth_(inst_51651)){
var statearr_51689_53609 = state_51680__$1;
(statearr_51689_53609[(1)] = (8));

} else {
var statearr_51690_53610 = state_51680__$1;
(statearr_51690_53610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (1))){
var inst_51633 = cljs.core.vec(chs);
var inst_51634 = inst_51633;
var state_51680__$1 = (function (){var statearr_51692 = state_51680;
(statearr_51692[(10)] = inst_51634);

return statearr_51692;
})();
var statearr_51693_53612 = state_51680__$1;
(statearr_51693_53612[(2)] = null);

(statearr_51693_53612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (4))){
var inst_51634 = (state_51680[(10)]);
var state_51680__$1 = state_51680;
return cljs.core.async.ioc_alts_BANG_(state_51680__$1,(7),inst_51634);
} else {
if((state_val_51681 === (6))){
var inst_51673 = (state_51680[(2)]);
var state_51680__$1 = state_51680;
var statearr_51696_53615 = state_51680__$1;
(statearr_51696_53615[(2)] = inst_51673);

(statearr_51696_53615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (3))){
var inst_51676 = (state_51680[(2)]);
var state_51680__$1 = state_51680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51680__$1,inst_51676);
} else {
if((state_val_51681 === (2))){
var inst_51634 = (state_51680[(10)]);
var inst_51639 = cljs.core.count(inst_51634);
var inst_51640 = (inst_51639 > (0));
var state_51680__$1 = state_51680;
if(cljs.core.truth_(inst_51640)){
var statearr_51700_53621 = state_51680__$1;
(statearr_51700_53621[(1)] = (4));

} else {
var statearr_51701_53622 = state_51680__$1;
(statearr_51701_53622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (11))){
var inst_51634 = (state_51680[(10)]);
var inst_51666 = (state_51680[(2)]);
var tmp51698 = inst_51634;
var inst_51634__$1 = tmp51698;
var state_51680__$1 = (function (){var statearr_51703 = state_51680;
(statearr_51703[(11)] = inst_51666);

(statearr_51703[(10)] = inst_51634__$1);

return statearr_51703;
})();
var statearr_51704_53623 = state_51680__$1;
(statearr_51704_53623[(2)] = null);

(statearr_51704_53623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (9))){
var inst_51648 = (state_51680[(7)]);
var state_51680__$1 = state_51680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51680__$1,(11),out,inst_51648);
} else {
if((state_val_51681 === (5))){
var inst_51671 = cljs.core.async.close_BANG_(out);
var state_51680__$1 = state_51680;
var statearr_51706_53624 = state_51680__$1;
(statearr_51706_53624[(2)] = inst_51671);

(statearr_51706_53624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (10))){
var inst_51669 = (state_51680[(2)]);
var state_51680__$1 = state_51680;
var statearr_51708_53625 = state_51680__$1;
(statearr_51708_53625[(2)] = inst_51669);

(statearr_51708_53625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51681 === (8))){
var inst_51648 = (state_51680[(7)]);
var inst_51646 = (state_51680[(8)]);
var inst_51634 = (state_51680[(10)]);
var inst_51649 = (state_51680[(9)]);
var inst_51660 = (function (){var cs = inst_51634;
var vec__51642 = inst_51646;
var v = inst_51648;
var c = inst_51649;
return (function (p1__51622_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51622_SHARP_);
});
})();
var inst_51662 = cljs.core.filterv(inst_51660,inst_51634);
var inst_51634__$1 = inst_51662;
var state_51680__$1 = (function (){var statearr_51710 = state_51680;
(statearr_51710[(10)] = inst_51634__$1);

return statearr_51710;
})();
var statearr_51711_53629 = state_51680__$1;
(statearr_51711_53629[(2)] = null);

(statearr_51711_53629[(1)] = (2));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_51712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51712[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_51712[(1)] = (1));

return statearr_51712;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_51680){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51680);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51714){var ex__49487__auto__ = e51714;
var statearr_51715_53635 = state_51680;
(statearr_51715_53635[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51680[(4)]))){
var statearr_51717_53637 = state_51680;
(statearr_51717_53637[(1)] = cljs.core.first((state_51680[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53640 = state_51680;
state_51680 = G__53640;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_51680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_51680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51722 = f__49911__auto__();
(statearr_51722[(6)] = c__49910__auto___53606);

return statearr_51722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
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
var G__51728 = arguments.length;
switch (G__51728) {
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
var c__49910__auto___53650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51758){
var state_val_51759 = (state_51758[(1)]);
if((state_val_51759 === (7))){
var inst_51738 = (state_51758[(7)]);
var inst_51738__$1 = (state_51758[(2)]);
var inst_51739 = (inst_51738__$1 == null);
var inst_51740 = cljs.core.not(inst_51739);
var state_51758__$1 = (function (){var statearr_51763 = state_51758;
(statearr_51763[(7)] = inst_51738__$1);

return statearr_51763;
})();
if(inst_51740){
var statearr_51765_53654 = state_51758__$1;
(statearr_51765_53654[(1)] = (8));

} else {
var statearr_51767_53655 = state_51758__$1;
(statearr_51767_53655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (1))){
var inst_51730 = (0);
var state_51758__$1 = (function (){var statearr_51770 = state_51758;
(statearr_51770[(8)] = inst_51730);

return statearr_51770;
})();
var statearr_51772_53659 = state_51758__$1;
(statearr_51772_53659[(2)] = null);

(statearr_51772_53659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (4))){
var state_51758__$1 = state_51758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51758__$1,(7),ch);
} else {
if((state_val_51759 === (6))){
var inst_51752 = (state_51758[(2)]);
var state_51758__$1 = state_51758;
var statearr_51773_53662 = state_51758__$1;
(statearr_51773_53662[(2)] = inst_51752);

(statearr_51773_53662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (3))){
var inst_51754 = (state_51758[(2)]);
var inst_51755 = cljs.core.async.close_BANG_(out);
var state_51758__$1 = (function (){var statearr_51775 = state_51758;
(statearr_51775[(9)] = inst_51754);

return statearr_51775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51758__$1,inst_51755);
} else {
if((state_val_51759 === (2))){
var inst_51730 = (state_51758[(8)]);
var inst_51733 = (inst_51730 < n);
var state_51758__$1 = state_51758;
if(cljs.core.truth_(inst_51733)){
var statearr_51776_53663 = state_51758__$1;
(statearr_51776_53663[(1)] = (4));

} else {
var statearr_51777_53665 = state_51758__$1;
(statearr_51777_53665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (11))){
var inst_51730 = (state_51758[(8)]);
var inst_51744 = (state_51758[(2)]);
var inst_51745 = (inst_51730 + (1));
var inst_51730__$1 = inst_51745;
var state_51758__$1 = (function (){var statearr_51779 = state_51758;
(statearr_51779[(10)] = inst_51744);

(statearr_51779[(8)] = inst_51730__$1);

return statearr_51779;
})();
var statearr_51780_53667 = state_51758__$1;
(statearr_51780_53667[(2)] = null);

(statearr_51780_53667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (9))){
var state_51758__$1 = state_51758;
var statearr_51781_53668 = state_51758__$1;
(statearr_51781_53668[(2)] = null);

(statearr_51781_53668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (5))){
var state_51758__$1 = state_51758;
var statearr_51782_53669 = state_51758__$1;
(statearr_51782_53669[(2)] = null);

(statearr_51782_53669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (10))){
var inst_51749 = (state_51758[(2)]);
var state_51758__$1 = state_51758;
var statearr_51784_53671 = state_51758__$1;
(statearr_51784_53671[(2)] = inst_51749);

(statearr_51784_53671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51759 === (8))){
var inst_51738 = (state_51758[(7)]);
var state_51758__$1 = state_51758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51758__$1,(11),out,inst_51738);
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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_51787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51787[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_51787[(1)] = (1));

return statearr_51787;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_51758){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51758);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51790){var ex__49487__auto__ = e51790;
var statearr_51792_53675 = state_51758;
(statearr_51792_53675[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51758[(4)]))){
var statearr_51794_53676 = state_51758;
(statearr_51794_53676[(1)] = cljs.core.first((state_51758[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53679 = state_51758;
state_51758 = G__53679;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_51758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_51758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51804 = f__49911__auto__();
(statearr_51804[(6)] = c__49910__auto___53650);

return statearr_51804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51811 = (function (f,ch,meta51812){
this.f = f;
this.ch = ch;
this.meta51812 = meta51812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51813,meta51812__$1){
var self__ = this;
var _51813__$1 = this;
return (new cljs.core.async.t_cljs$core$async51811(self__.f,self__.ch,meta51812__$1));
}));

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51813){
var self__ = this;
var _51813__$1 = this;
return self__.meta51812;
}));

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51829 = (function (f,ch,meta51812,_,fn1,meta51830){
this.f = f;
this.ch = ch;
this.meta51812 = meta51812;
this._ = _;
this.fn1 = fn1;
this.meta51830 = meta51830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51831,meta51830__$1){
var self__ = this;
var _51831__$1 = this;
return (new cljs.core.async.t_cljs$core$async51829(self__.f,self__.ch,self__.meta51812,self__._,self__.fn1,meta51830__$1));
}));

(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51831){
var self__ = this;
var _51831__$1 = this;
return self__.meta51830;
}));

(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51808_SHARP_){
var G__51854 = (((p1__51808_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51808_SHARP_) : self__.f.call(null,p1__51808_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51854) : f1.call(null,G__51854));
});
}));

(cljs.core.async.t_cljs$core$async51829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51812","meta51812",721787502,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51811","cljs.core.async/t_cljs$core$async51811",447227029,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51830","meta51830",750369503,null)], null);
}));

(cljs.core.async.t_cljs$core$async51829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51829");

(cljs.core.async.t_cljs$core$async51829.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51829.
 */
cljs.core.async.__GT_t_cljs$core$async51829 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51829(f__$1,ch__$1,meta51812__$1,___$2,fn1__$1,meta51830){
return (new cljs.core.async.t_cljs$core$async51829(f__$1,ch__$1,meta51812__$1,___$2,fn1__$1,meta51830));
});

}

return (new cljs.core.async.t_cljs$core$async51829(self__.f,self__.ch,self__.meta51812,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51866 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51866) : self__.f.call(null,G__51866));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51812","meta51812",721787502,null)], null);
}));

(cljs.core.async.t_cljs$core$async51811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51811");

(cljs.core.async.t_cljs$core$async51811.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51811.
 */
cljs.core.async.__GT_t_cljs$core$async51811 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51811(f__$1,ch__$1,meta51812){
return (new cljs.core.async.t_cljs$core$async51811(f__$1,ch__$1,meta51812));
});

}

return (new cljs.core.async.t_cljs$core$async51811(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51881 = (function (f,ch,meta51882){
this.f = f;
this.ch = ch;
this.meta51882 = meta51882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51883,meta51882__$1){
var self__ = this;
var _51883__$1 = this;
return (new cljs.core.async.t_cljs$core$async51881(self__.f,self__.ch,meta51882__$1));
}));

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51883){
var self__ = this;
var _51883__$1 = this;
return self__.meta51882;
}));

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51882","meta51882",1334282619,null)], null);
}));

(cljs.core.async.t_cljs$core$async51881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51881");

(cljs.core.async.t_cljs$core$async51881.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51881.
 */
cljs.core.async.__GT_t_cljs$core$async51881 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51881(f__$1,ch__$1,meta51882){
return (new cljs.core.async.t_cljs$core$async51881(f__$1,ch__$1,meta51882));
});

}

return (new cljs.core.async.t_cljs$core$async51881(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51897 = (function (p,ch,meta51898){
this.p = p;
this.ch = ch;
this.meta51898 = meta51898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51899,meta51898__$1){
var self__ = this;
var _51899__$1 = this;
return (new cljs.core.async.t_cljs$core$async51897(self__.p,self__.ch,meta51898__$1));
}));

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51899){
var self__ = this;
var _51899__$1 = this;
return self__.meta51898;
}));

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51898","meta51898",1023085645,null)], null);
}));

(cljs.core.async.t_cljs$core$async51897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51897");

(cljs.core.async.t_cljs$core$async51897.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51897.
 */
cljs.core.async.__GT_t_cljs$core$async51897 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51897(p__$1,ch__$1,meta51898){
return (new cljs.core.async.t_cljs$core$async51897(p__$1,ch__$1,meta51898));
});

}

return (new cljs.core.async.t_cljs$core$async51897(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51919 = arguments.length;
switch (G__51919) {
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
var c__49910__auto___53716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_51951){
var state_val_51952 = (state_51951[(1)]);
if((state_val_51952 === (7))){
var inst_51947 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
var statearr_51956_53718 = state_51951__$1;
(statearr_51956_53718[(2)] = inst_51947);

(statearr_51956_53718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (1))){
var state_51951__$1 = state_51951;
var statearr_51961_53721 = state_51951__$1;
(statearr_51961_53721[(2)] = null);

(statearr_51961_53721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (4))){
var inst_51933 = (state_51951[(7)]);
var inst_51933__$1 = (state_51951[(2)]);
var inst_51934 = (inst_51933__$1 == null);
var state_51951__$1 = (function (){var statearr_51962 = state_51951;
(statearr_51962[(7)] = inst_51933__$1);

return statearr_51962;
})();
if(cljs.core.truth_(inst_51934)){
var statearr_51964_53724 = state_51951__$1;
(statearr_51964_53724[(1)] = (5));

} else {
var statearr_51965_53725 = state_51951__$1;
(statearr_51965_53725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (6))){
var inst_51933 = (state_51951[(7)]);
var inst_51938 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51933) : p.call(null,inst_51933));
var state_51951__$1 = state_51951;
if(cljs.core.truth_(inst_51938)){
var statearr_51966_53726 = state_51951__$1;
(statearr_51966_53726[(1)] = (8));

} else {
var statearr_51967_53727 = state_51951__$1;
(statearr_51967_53727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (3))){
var inst_51949 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51951__$1,inst_51949);
} else {
if((state_val_51952 === (2))){
var state_51951__$1 = state_51951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51951__$1,(4),ch);
} else {
if((state_val_51952 === (11))){
var inst_51941 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
var statearr_51973_53728 = state_51951__$1;
(statearr_51973_53728[(2)] = inst_51941);

(statearr_51973_53728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (9))){
var state_51951__$1 = state_51951;
var statearr_51976_53732 = state_51951__$1;
(statearr_51976_53732[(2)] = null);

(statearr_51976_53732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (5))){
var inst_51936 = cljs.core.async.close_BANG_(out);
var state_51951__$1 = state_51951;
var statearr_51978_53733 = state_51951__$1;
(statearr_51978_53733[(2)] = inst_51936);

(statearr_51978_53733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (10))){
var inst_51944 = (state_51951[(2)]);
var state_51951__$1 = (function (){var statearr_51979 = state_51951;
(statearr_51979[(8)] = inst_51944);

return statearr_51979;
})();
var statearr_51980_53734 = state_51951__$1;
(statearr_51980_53734[(2)] = null);

(statearr_51980_53734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (8))){
var inst_51933 = (state_51951[(7)]);
var state_51951__$1 = state_51951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51951__$1,(11),out,inst_51933);
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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_51987 = [null,null,null,null,null,null,null,null,null];
(statearr_51987[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_51987[(1)] = (1));

return statearr_51987;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_51951){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_51951);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e51988){var ex__49487__auto__ = e51988;
var statearr_51989_53740 = state_51951;
(statearr_51989_53740[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_51951[(4)]))){
var statearr_51990_53741 = state_51951;
(statearr_51990_53741[(1)] = cljs.core.first((state_51951[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53742 = state_51951;
state_51951 = G__53742;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_51951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_51951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_51992 = f__49911__auto__();
(statearr_51992[(6)] = c__49910__auto___53716);

return statearr_51992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51998 = arguments.length;
switch (G__51998) {
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
var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_52092){
var state_val_52094 = (state_52092[(1)]);
if((state_val_52094 === (7))){
var inst_52086 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
var statearr_52098_53748 = state_52092__$1;
(statearr_52098_53748[(2)] = inst_52086);

(statearr_52098_53748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (20))){
var inst_52050 = (state_52092[(7)]);
var inst_52067 = (state_52092[(2)]);
var inst_52068 = cljs.core.next(inst_52050);
var inst_52032 = inst_52068;
var inst_52033 = null;
var inst_52034 = (0);
var inst_52035 = (0);
var state_52092__$1 = (function (){var statearr_52099 = state_52092;
(statearr_52099[(8)] = inst_52033);

(statearr_52099[(9)] = inst_52034);

(statearr_52099[(10)] = inst_52032);

(statearr_52099[(11)] = inst_52035);

(statearr_52099[(12)] = inst_52067);

return statearr_52099;
})();
var statearr_52100_53750 = state_52092__$1;
(statearr_52100_53750[(2)] = null);

(statearr_52100_53750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (1))){
var state_52092__$1 = state_52092;
var statearr_52102_53751 = state_52092__$1;
(statearr_52102_53751[(2)] = null);

(statearr_52102_53751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (4))){
var inst_52021 = (state_52092[(13)]);
var inst_52021__$1 = (state_52092[(2)]);
var inst_52022 = (inst_52021__$1 == null);
var state_52092__$1 = (function (){var statearr_52106 = state_52092;
(statearr_52106[(13)] = inst_52021__$1);

return statearr_52106;
})();
if(cljs.core.truth_(inst_52022)){
var statearr_52110_53752 = state_52092__$1;
(statearr_52110_53752[(1)] = (5));

} else {
var statearr_52111_53753 = state_52092__$1;
(statearr_52111_53753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (15))){
var state_52092__$1 = state_52092;
var statearr_52116_53755 = state_52092__$1;
(statearr_52116_53755[(2)] = null);

(statearr_52116_53755[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (21))){
var state_52092__$1 = state_52092;
var statearr_52117_53756 = state_52092__$1;
(statearr_52117_53756[(2)] = null);

(statearr_52117_53756[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (13))){
var inst_52033 = (state_52092[(8)]);
var inst_52034 = (state_52092[(9)]);
var inst_52032 = (state_52092[(10)]);
var inst_52035 = (state_52092[(11)]);
var inst_52043 = (state_52092[(2)]);
var inst_52044 = (inst_52035 + (1));
var tmp52113 = inst_52033;
var tmp52114 = inst_52034;
var tmp52115 = inst_52032;
var inst_52032__$1 = tmp52115;
var inst_52033__$1 = tmp52113;
var inst_52034__$1 = tmp52114;
var inst_52035__$1 = inst_52044;
var state_52092__$1 = (function (){var statearr_52124 = state_52092;
(statearr_52124[(8)] = inst_52033__$1);

(statearr_52124[(9)] = inst_52034__$1);

(statearr_52124[(10)] = inst_52032__$1);

(statearr_52124[(14)] = inst_52043);

(statearr_52124[(11)] = inst_52035__$1);

return statearr_52124;
})();
var statearr_52126_53759 = state_52092__$1;
(statearr_52126_53759[(2)] = null);

(statearr_52126_53759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (22))){
var state_52092__$1 = state_52092;
var statearr_52132_53760 = state_52092__$1;
(statearr_52132_53760[(2)] = null);

(statearr_52132_53760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (6))){
var inst_52021 = (state_52092[(13)]);
var inst_52030 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52021) : f.call(null,inst_52021));
var inst_52031 = cljs.core.seq(inst_52030);
var inst_52032 = inst_52031;
var inst_52033 = null;
var inst_52034 = (0);
var inst_52035 = (0);
var state_52092__$1 = (function (){var statearr_52135 = state_52092;
(statearr_52135[(8)] = inst_52033);

(statearr_52135[(9)] = inst_52034);

(statearr_52135[(10)] = inst_52032);

(statearr_52135[(11)] = inst_52035);

return statearr_52135;
})();
var statearr_52136_53769 = state_52092__$1;
(statearr_52136_53769[(2)] = null);

(statearr_52136_53769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (17))){
var inst_52050 = (state_52092[(7)]);
var inst_52054 = cljs.core.chunk_first(inst_52050);
var inst_52055 = cljs.core.chunk_rest(inst_52050);
var inst_52056 = cljs.core.count(inst_52054);
var inst_52032 = inst_52055;
var inst_52033 = inst_52054;
var inst_52034 = inst_52056;
var inst_52035 = (0);
var state_52092__$1 = (function (){var statearr_52141 = state_52092;
(statearr_52141[(8)] = inst_52033);

(statearr_52141[(9)] = inst_52034);

(statearr_52141[(10)] = inst_52032);

(statearr_52141[(11)] = inst_52035);

return statearr_52141;
})();
var statearr_52142_53779 = state_52092__$1;
(statearr_52142_53779[(2)] = null);

(statearr_52142_53779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (3))){
var inst_52088 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52092__$1,inst_52088);
} else {
if((state_val_52094 === (12))){
var inst_52076 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
var statearr_52146_53780 = state_52092__$1;
(statearr_52146_53780[(2)] = inst_52076);

(statearr_52146_53780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (2))){
var state_52092__$1 = state_52092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52092__$1,(4),in$);
} else {
if((state_val_52094 === (23))){
var inst_52084 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
var statearr_52148_53783 = state_52092__$1;
(statearr_52148_53783[(2)] = inst_52084);

(statearr_52148_53783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (19))){
var inst_52071 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
var statearr_52149_53784 = state_52092__$1;
(statearr_52149_53784[(2)] = inst_52071);

(statearr_52149_53784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (11))){
var inst_52032 = (state_52092[(10)]);
var inst_52050 = (state_52092[(7)]);
var inst_52050__$1 = cljs.core.seq(inst_52032);
var state_52092__$1 = (function (){var statearr_52151 = state_52092;
(statearr_52151[(7)] = inst_52050__$1);

return statearr_52151;
})();
if(inst_52050__$1){
var statearr_52152_53785 = state_52092__$1;
(statearr_52152_53785[(1)] = (14));

} else {
var statearr_52154_53787 = state_52092__$1;
(statearr_52154_53787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (9))){
var inst_52078 = (state_52092[(2)]);
var inst_52079 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52092__$1 = (function (){var statearr_52156 = state_52092;
(statearr_52156[(15)] = inst_52078);

return statearr_52156;
})();
if(cljs.core.truth_(inst_52079)){
var statearr_52157_53793 = state_52092__$1;
(statearr_52157_53793[(1)] = (21));

} else {
var statearr_52158_53794 = state_52092__$1;
(statearr_52158_53794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (5))){
var inst_52024 = cljs.core.async.close_BANG_(out);
var state_52092__$1 = state_52092;
var statearr_52161_53796 = state_52092__$1;
(statearr_52161_53796[(2)] = inst_52024);

(statearr_52161_53796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (14))){
var inst_52050 = (state_52092[(7)]);
var inst_52052 = cljs.core.chunked_seq_QMARK_(inst_52050);
var state_52092__$1 = state_52092;
if(inst_52052){
var statearr_52164_53797 = state_52092__$1;
(statearr_52164_53797[(1)] = (17));

} else {
var statearr_52165_53799 = state_52092__$1;
(statearr_52165_53799[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (16))){
var inst_52074 = (state_52092[(2)]);
var state_52092__$1 = state_52092;
var statearr_52166_53804 = state_52092__$1;
(statearr_52166_53804[(2)] = inst_52074);

(statearr_52166_53804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (10))){
var inst_52033 = (state_52092[(8)]);
var inst_52035 = (state_52092[(11)]);
var inst_52040 = cljs.core._nth(inst_52033,inst_52035);
var state_52092__$1 = state_52092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52092__$1,(13),out,inst_52040);
} else {
if((state_val_52094 === (18))){
var inst_52050 = (state_52092[(7)]);
var inst_52060 = cljs.core.first(inst_52050);
var state_52092__$1 = state_52092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52092__$1,(20),out,inst_52060);
} else {
if((state_val_52094 === (8))){
var inst_52034 = (state_52092[(9)]);
var inst_52035 = (state_52092[(11)]);
var inst_52037 = (inst_52035 < inst_52034);
var inst_52038 = inst_52037;
var state_52092__$1 = state_52092;
if(cljs.core.truth_(inst_52038)){
var statearr_52168_53806 = state_52092__$1;
(statearr_52168_53806[(1)] = (10));

} else {
var statearr_52169_53807 = state_52092__$1;
(statearr_52169_53807[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____0 = (function (){
var statearr_52174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52174[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__);

(statearr_52174[(1)] = (1));

return statearr_52174;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____1 = (function (state_52092){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_52092);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e52177){var ex__49487__auto__ = e52177;
var statearr_52179_53813 = state_52092;
(statearr_52179_53813[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_52092[(4)]))){
var statearr_52182_53814 = state_52092;
(statearr_52182_53814[(1)] = cljs.core.first((state_52092[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53816 = state_52092;
state_52092 = G__53816;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__ = function(state_52092){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____1.call(this,state_52092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_52189 = f__49911__auto__();
(statearr_52189[(6)] = c__49910__auto__);

return statearr_52189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52198 = arguments.length;
switch (G__52198) {
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
var G__52211 = arguments.length;
switch (G__52211) {
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
var G__52221 = arguments.length;
switch (G__52221) {
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
var c__49910__auto___53836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_52262){
var state_val_52264 = (state_52262[(1)]);
if((state_val_52264 === (7))){
var inst_52256 = (state_52262[(2)]);
var state_52262__$1 = state_52262;
var statearr_52270_53839 = state_52262__$1;
(statearr_52270_53839[(2)] = inst_52256);

(statearr_52270_53839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (1))){
var inst_52236 = null;
var state_52262__$1 = (function (){var statearr_52273 = state_52262;
(statearr_52273[(7)] = inst_52236);

return statearr_52273;
})();
var statearr_52275_53842 = state_52262__$1;
(statearr_52275_53842[(2)] = null);

(statearr_52275_53842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (4))){
var inst_52240 = (state_52262[(8)]);
var inst_52240__$1 = (state_52262[(2)]);
var inst_52241 = (inst_52240__$1 == null);
var inst_52242 = cljs.core.not(inst_52241);
var state_52262__$1 = (function (){var statearr_52280 = state_52262;
(statearr_52280[(8)] = inst_52240__$1);

return statearr_52280;
})();
if(inst_52242){
var statearr_52281_53845 = state_52262__$1;
(statearr_52281_53845[(1)] = (5));

} else {
var statearr_52283_53847 = state_52262__$1;
(statearr_52283_53847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (6))){
var state_52262__$1 = state_52262;
var statearr_52285_53848 = state_52262__$1;
(statearr_52285_53848[(2)] = null);

(statearr_52285_53848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (3))){
var inst_52259 = (state_52262[(2)]);
var inst_52260 = cljs.core.async.close_BANG_(out);
var state_52262__$1 = (function (){var statearr_52286 = state_52262;
(statearr_52286[(9)] = inst_52259);

return statearr_52286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52262__$1,inst_52260);
} else {
if((state_val_52264 === (2))){
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52262__$1,(4),ch);
} else {
if((state_val_52264 === (11))){
var inst_52240 = (state_52262[(8)]);
var inst_52249 = (state_52262[(2)]);
var inst_52236 = inst_52240;
var state_52262__$1 = (function (){var statearr_52288 = state_52262;
(statearr_52288[(7)] = inst_52236);

(statearr_52288[(10)] = inst_52249);

return statearr_52288;
})();
var statearr_52291_53850 = state_52262__$1;
(statearr_52291_53850[(2)] = null);

(statearr_52291_53850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (9))){
var inst_52240 = (state_52262[(8)]);
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52262__$1,(11),out,inst_52240);
} else {
if((state_val_52264 === (5))){
var inst_52236 = (state_52262[(7)]);
var inst_52240 = (state_52262[(8)]);
var inst_52244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52240,inst_52236);
var state_52262__$1 = state_52262;
if(inst_52244){
var statearr_52296_53854 = state_52262__$1;
(statearr_52296_53854[(1)] = (8));

} else {
var statearr_52299_53856 = state_52262__$1;
(statearr_52299_53856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (10))){
var inst_52253 = (state_52262[(2)]);
var state_52262__$1 = state_52262;
var statearr_52300_53859 = state_52262__$1;
(statearr_52300_53859[(2)] = inst_52253);

(statearr_52300_53859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52264 === (8))){
var inst_52236 = (state_52262[(7)]);
var tmp52293 = inst_52236;
var inst_52236__$1 = tmp52293;
var state_52262__$1 = (function (){var statearr_52301 = state_52262;
(statearr_52301[(7)] = inst_52236__$1);

return statearr_52301;
})();
var statearr_52302_53861 = state_52262__$1;
(statearr_52302_53861[(2)] = null);

(statearr_52302_53861[(1)] = (2));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_52305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52305[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_52305[(1)] = (1));

return statearr_52305;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_52262){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_52262);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e52306){var ex__49487__auto__ = e52306;
var statearr_52308_53865 = state_52262;
(statearr_52308_53865[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_52262[(4)]))){
var statearr_52309_53867 = state_52262;
(statearr_52309_53867[(1)] = cljs.core.first((state_52262[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53869 = state_52262;
state_52262 = G__53869;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_52262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_52262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_52312 = f__49911__auto__();
(statearr_52312[(6)] = c__49910__auto___53836);

return statearr_52312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52316 = arguments.length;
switch (G__52316) {
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
var c__49910__auto___53873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_52371){
var state_val_52372 = (state_52371[(1)]);
if((state_val_52372 === (7))){
var inst_52367 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52376_53874 = state_52371__$1;
(statearr_52376_53874[(2)] = inst_52367);

(statearr_52376_53874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (1))){
var inst_52329 = (new Array(n));
var inst_52330 = inst_52329;
var inst_52331 = (0);
var state_52371__$1 = (function (){var statearr_52377 = state_52371;
(statearr_52377[(7)] = inst_52330);

(statearr_52377[(8)] = inst_52331);

return statearr_52377;
})();
var statearr_52378_53876 = state_52371__$1;
(statearr_52378_53876[(2)] = null);

(statearr_52378_53876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (4))){
var inst_52337 = (state_52371[(9)]);
var inst_52337__$1 = (state_52371[(2)]);
var inst_52338 = (inst_52337__$1 == null);
var inst_52339 = cljs.core.not(inst_52338);
var state_52371__$1 = (function (){var statearr_52381 = state_52371;
(statearr_52381[(9)] = inst_52337__$1);

return statearr_52381;
})();
if(inst_52339){
var statearr_52382_53884 = state_52371__$1;
(statearr_52382_53884[(1)] = (5));

} else {
var statearr_52383_53885 = state_52371__$1;
(statearr_52383_53885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (15))){
var inst_52361 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52384_53887 = state_52371__$1;
(statearr_52384_53887[(2)] = inst_52361);

(statearr_52384_53887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (13))){
var state_52371__$1 = state_52371;
var statearr_52385_53888 = state_52371__$1;
(statearr_52385_53888[(2)] = null);

(statearr_52385_53888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (6))){
var inst_52331 = (state_52371[(8)]);
var inst_52357 = (inst_52331 > (0));
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52357)){
var statearr_52386_53889 = state_52371__$1;
(statearr_52386_53889[(1)] = (12));

} else {
var statearr_52387_53890 = state_52371__$1;
(statearr_52387_53890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (3))){
var inst_52369 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52371__$1,inst_52369);
} else {
if((state_val_52372 === (12))){
var inst_52330 = (state_52371[(7)]);
var inst_52359 = cljs.core.vec(inst_52330);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52371__$1,(15),out,inst_52359);
} else {
if((state_val_52372 === (2))){
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52371__$1,(4),ch);
} else {
if((state_val_52372 === (11))){
var inst_52350 = (state_52371[(2)]);
var inst_52351 = (new Array(n));
var inst_52330 = inst_52351;
var inst_52331 = (0);
var state_52371__$1 = (function (){var statearr_52393 = state_52371;
(statearr_52393[(7)] = inst_52330);

(statearr_52393[(8)] = inst_52331);

(statearr_52393[(10)] = inst_52350);

return statearr_52393;
})();
var statearr_52394_53902 = state_52371__$1;
(statearr_52394_53902[(2)] = null);

(statearr_52394_53902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (9))){
var inst_52330 = (state_52371[(7)]);
var inst_52348 = cljs.core.vec(inst_52330);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52371__$1,(11),out,inst_52348);
} else {
if((state_val_52372 === (5))){
var inst_52330 = (state_52371[(7)]);
var inst_52331 = (state_52371[(8)]);
var inst_52337 = (state_52371[(9)]);
var inst_52342 = (state_52371[(11)]);
var inst_52341 = (inst_52330[inst_52331] = inst_52337);
var inst_52342__$1 = (inst_52331 + (1));
var inst_52343 = (inst_52342__$1 < n);
var state_52371__$1 = (function (){var statearr_52395 = state_52371;
(statearr_52395[(12)] = inst_52341);

(statearr_52395[(11)] = inst_52342__$1);

return statearr_52395;
})();
if(cljs.core.truth_(inst_52343)){
var statearr_52396_53903 = state_52371__$1;
(statearr_52396_53903[(1)] = (8));

} else {
var statearr_52397_53904 = state_52371__$1;
(statearr_52397_53904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (14))){
var inst_52364 = (state_52371[(2)]);
var inst_52365 = cljs.core.async.close_BANG_(out);
var state_52371__$1 = (function (){var statearr_52402 = state_52371;
(statearr_52402[(13)] = inst_52364);

return statearr_52402;
})();
var statearr_52403_53910 = state_52371__$1;
(statearr_52403_53910[(2)] = inst_52365);

(statearr_52403_53910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (10))){
var inst_52355 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52404_53912 = state_52371__$1;
(statearr_52404_53912[(2)] = inst_52355);

(statearr_52404_53912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (8))){
var inst_52330 = (state_52371[(7)]);
var inst_52342 = (state_52371[(11)]);
var tmp52398 = inst_52330;
var inst_52330__$1 = tmp52398;
var inst_52331 = inst_52342;
var state_52371__$1 = (function (){var statearr_52408 = state_52371;
(statearr_52408[(7)] = inst_52330__$1);

(statearr_52408[(8)] = inst_52331);

return statearr_52408;
})();
var statearr_52409_53915 = state_52371__$1;
(statearr_52409_53915[(2)] = null);

(statearr_52409_53915[(1)] = (2));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_52411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52411[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_52411[(1)] = (1));

return statearr_52411;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_52371){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_52371);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e52412){var ex__49487__auto__ = e52412;
var statearr_52413_53917 = state_52371;
(statearr_52413_53917[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_52371[(4)]))){
var statearr_52414_53922 = state_52371;
(statearr_52414_53922[(1)] = cljs.core.first((state_52371[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53928 = state_52371;
state_52371 = G__53928;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_52371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_52371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_52415 = f__49911__auto__();
(statearr_52415[(6)] = c__49910__auto___53873);

return statearr_52415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52420 = arguments.length;
switch (G__52420) {
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
var c__49910__auto___53933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_52469){
var state_val_52470 = (state_52469[(1)]);
if((state_val_52470 === (7))){
var inst_52463 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
var statearr_52479_53935 = state_52469__$1;
(statearr_52479_53935[(2)] = inst_52463);

(statearr_52479_53935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (1))){
var inst_52421 = [];
var inst_52422 = inst_52421;
var inst_52423 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52469__$1 = (function (){var statearr_52482 = state_52469;
(statearr_52482[(7)] = inst_52423);

(statearr_52482[(8)] = inst_52422);

return statearr_52482;
})();
var statearr_52484_53936 = state_52469__$1;
(statearr_52484_53936[(2)] = null);

(statearr_52484_53936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (4))){
var inst_52426 = (state_52469[(9)]);
var inst_52426__$1 = (state_52469[(2)]);
var inst_52427 = (inst_52426__$1 == null);
var inst_52428 = cljs.core.not(inst_52427);
var state_52469__$1 = (function (){var statearr_52485 = state_52469;
(statearr_52485[(9)] = inst_52426__$1);

return statearr_52485;
})();
if(inst_52428){
var statearr_52487_53940 = state_52469__$1;
(statearr_52487_53940[(1)] = (5));

} else {
var statearr_52488_53941 = state_52469__$1;
(statearr_52488_53941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (15))){
var inst_52422 = (state_52469[(8)]);
var inst_52455 = cljs.core.vec(inst_52422);
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52469__$1,(18),out,inst_52455);
} else {
if((state_val_52470 === (13))){
var inst_52449 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
var statearr_52494_53945 = state_52469__$1;
(statearr_52494_53945[(2)] = inst_52449);

(statearr_52494_53945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (6))){
var inst_52422 = (state_52469[(8)]);
var inst_52452 = inst_52422.length;
var inst_52453 = (inst_52452 > (0));
var state_52469__$1 = state_52469;
if(cljs.core.truth_(inst_52453)){
var statearr_52496_53949 = state_52469__$1;
(statearr_52496_53949[(1)] = (15));

} else {
var statearr_52497_53950 = state_52469__$1;
(statearr_52497_53950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (17))){
var inst_52460 = (state_52469[(2)]);
var inst_52461 = cljs.core.async.close_BANG_(out);
var state_52469__$1 = (function (){var statearr_52502 = state_52469;
(statearr_52502[(10)] = inst_52460);

return statearr_52502;
})();
var statearr_52503_53951 = state_52469__$1;
(statearr_52503_53951[(2)] = inst_52461);

(statearr_52503_53951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (3))){
var inst_52465 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52469__$1,inst_52465);
} else {
if((state_val_52470 === (12))){
var inst_52422 = (state_52469[(8)]);
var inst_52442 = cljs.core.vec(inst_52422);
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52469__$1,(14),out,inst_52442);
} else {
if((state_val_52470 === (2))){
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52469__$1,(4),ch);
} else {
if((state_val_52470 === (11))){
var inst_52430 = (state_52469[(11)]);
var inst_52426 = (state_52469[(9)]);
var inst_52422 = (state_52469[(8)]);
var inst_52439 = inst_52422.push(inst_52426);
var tmp52505 = inst_52422;
var inst_52422__$1 = tmp52505;
var inst_52423 = inst_52430;
var state_52469__$1 = (function (){var statearr_52507 = state_52469;
(statearr_52507[(7)] = inst_52423);

(statearr_52507[(8)] = inst_52422__$1);

(statearr_52507[(12)] = inst_52439);

return statearr_52507;
})();
var statearr_52508_53957 = state_52469__$1;
(statearr_52508_53957[(2)] = null);

(statearr_52508_53957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (9))){
var inst_52423 = (state_52469[(7)]);
var inst_52435 = cljs.core.keyword_identical_QMARK_(inst_52423,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52469__$1 = state_52469;
var statearr_52514_53959 = state_52469__$1;
(statearr_52514_53959[(2)] = inst_52435);

(statearr_52514_53959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (5))){
var inst_52430 = (state_52469[(11)]);
var inst_52423 = (state_52469[(7)]);
var inst_52426 = (state_52469[(9)]);
var inst_52432 = (state_52469[(13)]);
var inst_52430__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52426) : f.call(null,inst_52426));
var inst_52432__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52430__$1,inst_52423);
var state_52469__$1 = (function (){var statearr_52521 = state_52469;
(statearr_52521[(11)] = inst_52430__$1);

(statearr_52521[(13)] = inst_52432__$1);

return statearr_52521;
})();
if(inst_52432__$1){
var statearr_52524_53963 = state_52469__$1;
(statearr_52524_53963[(1)] = (8));

} else {
var statearr_52526_53964 = state_52469__$1;
(statearr_52526_53964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (14))){
var inst_52430 = (state_52469[(11)]);
var inst_52426 = (state_52469[(9)]);
var inst_52444 = (state_52469[(2)]);
var inst_52445 = [];
var inst_52446 = inst_52445.push(inst_52426);
var inst_52422 = inst_52445;
var inst_52423 = inst_52430;
var state_52469__$1 = (function (){var statearr_52529 = state_52469;
(statearr_52529[(14)] = inst_52446);

(statearr_52529[(15)] = inst_52444);

(statearr_52529[(7)] = inst_52423);

(statearr_52529[(8)] = inst_52422);

return statearr_52529;
})();
var statearr_52530_53969 = state_52469__$1;
(statearr_52530_53969[(2)] = null);

(statearr_52530_53969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (16))){
var state_52469__$1 = state_52469;
var statearr_52531_53971 = state_52469__$1;
(statearr_52531_53971[(2)] = null);

(statearr_52531_53971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (10))){
var inst_52437 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
if(cljs.core.truth_(inst_52437)){
var statearr_52532_53972 = state_52469__$1;
(statearr_52532_53972[(1)] = (11));

} else {
var statearr_52534_53973 = state_52469__$1;
(statearr_52534_53973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (18))){
var inst_52457 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
var statearr_52537_53976 = state_52469__$1;
(statearr_52537_53976[(2)] = inst_52457);

(statearr_52537_53976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (8))){
var inst_52432 = (state_52469[(13)]);
var state_52469__$1 = state_52469;
var statearr_52539_53977 = state_52469__$1;
(statearr_52539_53977[(2)] = inst_52432);

(statearr_52539_53977[(1)] = (10));


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
var cljs$core$async$state_machine__49484__auto__ = null;
var cljs$core$async$state_machine__49484__auto____0 = (function (){
var statearr_52543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52543[(0)] = cljs$core$async$state_machine__49484__auto__);

(statearr_52543[(1)] = (1));

return statearr_52543;
});
var cljs$core$async$state_machine__49484__auto____1 = (function (state_52469){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_52469);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e52544){var ex__49487__auto__ = e52544;
var statearr_52545_53981 = state_52469;
(statearr_52545_53981[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_52469[(4)]))){
var statearr_52546_53982 = state_52469;
(statearr_52546_53982[(1)] = cljs.core.first((state_52469[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53984 = state_52469;
state_52469 = G__53984;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
cljs$core$async$state_machine__49484__auto__ = function(state_52469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49484__auto____1.call(this,state_52469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49484__auto____0;
cljs$core$async$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49484__auto____1;
return cljs$core$async$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_52550 = f__49911__auto__();
(statearr_52550[(6)] = c__49910__auto___53933);

return statearr_52550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
