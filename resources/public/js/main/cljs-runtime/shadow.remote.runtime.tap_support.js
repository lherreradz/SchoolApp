goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__58758,p__58759){
var map__58762 = p__58758;
var map__58762__$1 = cljs.core.__destructure_map(map__58762);
var svc = map__58762__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58763 = p__58759;
var map__58763__$1 = cljs.core.__destructure_map(map__58763);
var msg = map__58763__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58763__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58763__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58763__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58763__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__58773,p__58774){
var map__58777 = p__58773;
var map__58777__$1 = cljs.core.__destructure_map(map__58777);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__58778 = p__58774;
var map__58778__$1 = cljs.core.__destructure_map(map__58778);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__58790,p__58791){
var map__58798 = p__58790;
var map__58798__$1 = cljs.core.__destructure_map(map__58798);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58799 = p__58791;
var map__58799__$1 = cljs.core.__destructure_map(map__58799);
var msg = map__58799__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58799__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__58815,tid){
var map__58821 = p__58815;
var map__58821__$1 = cljs.core.__destructure_map(map__58821);
var svc = map__58821__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58821__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__58829 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__58830 = null;
var count__58831 = (0);
var i__58832 = (0);
while(true){
if((i__58832 < count__58831)){
var vec__58864 = chunk__58830.cljs$core$IIndexed$_nth$arity$2(null,i__58832);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58864,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58864,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__58939 = seq__58829;
var G__58940 = chunk__58830;
var G__58941 = count__58831;
var G__58942 = (i__58832 + (1));
seq__58829 = G__58939;
chunk__58830 = G__58940;
count__58831 = G__58941;
i__58832 = G__58942;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58829);
if(temp__5753__auto__){
var seq__58829__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58829__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58829__$1);
var G__58950 = cljs.core.chunk_rest(seq__58829__$1);
var G__58951 = c__4679__auto__;
var G__58952 = cljs.core.count(c__4679__auto__);
var G__58953 = (0);
seq__58829 = G__58950;
chunk__58830 = G__58951;
count__58831 = G__58952;
i__58832 = G__58953;
continue;
} else {
var vec__58873 = cljs.core.first(seq__58829__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58873,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58873,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__58960 = cljs.core.next(seq__58829__$1);
var G__58961 = null;
var G__58962 = (0);
var G__58963 = (0);
seq__58829 = G__58960;
chunk__58830 = G__58961;
count__58831 = G__58962;
i__58832 = G__58963;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__58825_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__58825_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__58826_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__58826_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__58827_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__58827_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__58828_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__58828_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__58894){
var map__58896 = p__58894;
var map__58896__$1 = cljs.core.__destructure_map(map__58896);
var svc = map__58896__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
