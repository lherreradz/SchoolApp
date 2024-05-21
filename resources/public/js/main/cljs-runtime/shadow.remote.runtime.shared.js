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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__57888,res){
var map__57889 = p__57888;
var map__57889__$1 = cljs.core.__destructure_map(map__57889);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__57891 = res;
var G__57891__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57891,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__57891);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57891__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__57891__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__57895 = arguments.length;
switch (G__57895) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__57901,msg,handlers,timeout_after_ms){
var map__57902 = p__57901;
var map__57902__$1 = cljs.core.__destructure_map(map__57902);
var runtime = map__57902__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57902__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58102 = arguments.length;
var i__4865__auto___58103 = (0);
while(true){
if((i__4865__auto___58103 < len__4864__auto___58102)){
args__4870__auto__.push((arguments[i__4865__auto___58103]));

var G__58104 = (i__4865__auto___58103 + (1));
i__4865__auto___58103 = G__58104;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__57926,ev,args){
var map__57927 = p__57926;
var map__57927__$1 = cljs.core.__destructure_map(map__57927);
var runtime = map__57927__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57927__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__57928 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57931 = null;
var count__57932 = (0);
var i__57933 = (0);
while(true){
if((i__57933 < count__57932)){
var ext = chunk__57931.cljs$core$IIndexed$_nth$arity$2(null,i__57933);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__58105 = seq__57928;
var G__58106 = chunk__57931;
var G__58107 = count__57932;
var G__58108 = (i__57933 + (1));
seq__57928 = G__58105;
chunk__57931 = G__58106;
count__57932 = G__58107;
i__57933 = G__58108;
continue;
} else {
var G__58114 = seq__57928;
var G__58115 = chunk__57931;
var G__58116 = count__57932;
var G__58117 = (i__57933 + (1));
seq__57928 = G__58114;
chunk__57931 = G__58115;
count__57932 = G__58116;
i__57933 = G__58117;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57928);
if(temp__5753__auto__){
var seq__57928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57928__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57928__$1);
var G__58119 = cljs.core.chunk_rest(seq__57928__$1);
var G__58120 = c__4679__auto__;
var G__58121 = cljs.core.count(c__4679__auto__);
var G__58122 = (0);
seq__57928 = G__58119;
chunk__57931 = G__58120;
count__57932 = G__58121;
i__57933 = G__58122;
continue;
} else {
var ext = cljs.core.first(seq__57928__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__58124 = cljs.core.next(seq__57928__$1);
var G__58125 = null;
var G__58126 = (0);
var G__58127 = (0);
seq__57928 = G__58124;
chunk__57931 = G__58125;
count__57932 = G__58126;
i__57933 = G__58127;
continue;
} else {
var G__58128 = cljs.core.next(seq__57928__$1);
var G__58129 = null;
var G__58130 = (0);
var G__58131 = (0);
seq__57928 = G__58128;
chunk__57931 = G__58129;
count__57932 = G__58130;
i__57933 = G__58131;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq57916){
var G__57917 = cljs.core.first(seq57916);
var seq57916__$1 = cljs.core.next(seq57916);
var G__57918 = cljs.core.first(seq57916__$1);
var seq57916__$2 = cljs.core.next(seq57916__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57917,G__57918,seq57916__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57959,p__57960){
var map__57961 = p__57959;
var map__57961__$1 = cljs.core.__destructure_map(map__57961);
var runtime = map__57961__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57961__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57962 = p__57960;
var map__57962__$1 = cljs.core.__destructure_map(map__57962);
var msg = map__57962__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57962__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__57963 = cljs.core.deref(state_ref);
var map__57963__$1 = cljs.core.__destructure_map(map__57963);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__57968){
var map__57969 = p__57968;
var map__57969__$1 = cljs.core.__destructure_map(map__57969);
var runtime = map__57969__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57970,msg){
var map__57971 = p__57970;
var map__57971__$1 = cljs.core.__destructure_map(map__57971);
var runtime = map__57971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57973,key,p__57974){
var map__57975 = p__57973;
var map__57975__$1 = cljs.core.__destructure_map(map__57975);
var state = map__57975__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57975__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57976 = p__57974;
var map__57976__$1 = cljs.core.__destructure_map(map__57976);
var spec = map__57976__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57976__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57979,key,spec){
var map__57980 = p__57979;
var map__57980__$1 = cljs.core.__destructure_map(map__57980);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57980__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57982_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57982_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57984_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57984_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57985_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57985_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__57986_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__57986_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57987_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57987_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57998,key){
var map__57999 = p__57998;
var map__57999__$1 = cljs.core.__destructure_map(map__57999);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57999__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__58006,msg){
var map__58007 = p__58006;
var map__58007__$1 = cljs.core.__destructure_map(map__58007);
var runtime = map__58007__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58007__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__58013,p__58014){
var map__58015 = p__58013;
var map__58015__$1 = cljs.core.__destructure_map(map__58015);
var runtime = map__58015__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58015__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__58016 = p__58014;
var map__58016__$1 = cljs.core.__destructure_map(map__58016);
var msg = map__58016__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__58031 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__58033 = null;
var count__58034 = (0);
var i__58035 = (0);
while(true){
if((i__58035 < count__58034)){
var map__58048 = chunk__58033.cljs$core$IIndexed$_nth$arity$2(null,i__58035);
var map__58048__$1 = cljs.core.__destructure_map(map__58048);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58048__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58209 = seq__58031;
var G__58210 = chunk__58033;
var G__58211 = count__58034;
var G__58212 = (i__58035 + (1));
seq__58031 = G__58209;
chunk__58033 = G__58210;
count__58034 = G__58211;
i__58035 = G__58212;
continue;
} else {
var G__58213 = seq__58031;
var G__58214 = chunk__58033;
var G__58215 = count__58034;
var G__58216 = (i__58035 + (1));
seq__58031 = G__58213;
chunk__58033 = G__58214;
count__58034 = G__58215;
i__58035 = G__58216;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58031);
if(temp__5753__auto__){
var seq__58031__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58031__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58031__$1);
var G__58218 = cljs.core.chunk_rest(seq__58031__$1);
var G__58219 = c__4679__auto__;
var G__58220 = cljs.core.count(c__4679__auto__);
var G__58221 = (0);
seq__58031 = G__58218;
chunk__58033 = G__58219;
count__58034 = G__58220;
i__58035 = G__58221;
continue;
} else {
var map__58049 = cljs.core.first(seq__58031__$1);
var map__58049__$1 = cljs.core.__destructure_map(map__58049);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58049__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58222 = cljs.core.next(seq__58031__$1);
var G__58223 = null;
var G__58224 = (0);
var G__58225 = (0);
seq__58031 = G__58222;
chunk__58033 = G__58223;
count__58034 = G__58224;
i__58035 = G__58225;
continue;
} else {
var G__58226 = cljs.core.next(seq__58031__$1);
var G__58227 = null;
var G__58228 = (0);
var G__58229 = (0);
seq__58031 = G__58226;
chunk__58033 = G__58227;
count__58034 = G__58228;
i__58035 = G__58229;
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
