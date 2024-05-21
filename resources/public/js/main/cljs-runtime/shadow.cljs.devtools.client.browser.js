goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59639 = arguments.length;
var i__4865__auto___59640 = (0);
while(true){
if((i__4865__auto___59640 < len__4864__auto___59639)){
args__4870__auto__.push((arguments[i__4865__auto___59640]));

var G__59641 = (i__4865__auto___59640 + (1));
i__4865__auto___59640 = G__59641;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59369){
var G__59370 = cljs.core.first(seq59369);
var seq59369__$1 = cljs.core.next(seq59369);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59370,seq59369__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59380 = cljs.core.seq(sources);
var chunk__59381 = null;
var count__59382 = (0);
var i__59383 = (0);
while(true){
if((i__59383 < count__59382)){
var map__59394 = chunk__59381.cljs$core$IIndexed$_nth$arity$2(null,i__59383);
var map__59394__$1 = cljs.core.__destructure_map(map__59394);
var src = map__59394__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e59395){var e_59647 = e59395;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59647);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59647.message)].join('')));
}

var G__59648 = seq__59380;
var G__59649 = chunk__59381;
var G__59650 = count__59382;
var G__59651 = (i__59383 + (1));
seq__59380 = G__59648;
chunk__59381 = G__59649;
count__59382 = G__59650;
i__59383 = G__59651;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59380);
if(temp__5753__auto__){
var seq__59380__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59380__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59380__$1);
var G__59652 = cljs.core.chunk_rest(seq__59380__$1);
var G__59653 = c__4679__auto__;
var G__59654 = cljs.core.count(c__4679__auto__);
var G__59655 = (0);
seq__59380 = G__59652;
chunk__59381 = G__59653;
count__59382 = G__59654;
i__59383 = G__59655;
continue;
} else {
var map__59397 = cljs.core.first(seq__59380__$1);
var map__59397__$1 = cljs.core.__destructure_map(map__59397);
var src = map__59397__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e59398){var e_59656 = e59398;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59656);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59656.message)].join('')));
}

var G__59657 = cljs.core.next(seq__59380__$1);
var G__59658 = null;
var G__59659 = (0);
var G__59660 = (0);
seq__59380 = G__59657;
chunk__59381 = G__59658;
count__59382 = G__59659;
i__59383 = G__59660;
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
var seq__59408 = cljs.core.seq(js_requires);
var chunk__59409 = null;
var count__59410 = (0);
var i__59411 = (0);
while(true){
if((i__59411 < count__59410)){
var js_ns = chunk__59409.cljs$core$IIndexed$_nth$arity$2(null,i__59411);
var require_str_59665 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59665);


var G__59666 = seq__59408;
var G__59667 = chunk__59409;
var G__59668 = count__59410;
var G__59669 = (i__59411 + (1));
seq__59408 = G__59666;
chunk__59409 = G__59667;
count__59410 = G__59668;
i__59411 = G__59669;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59408);
if(temp__5753__auto__){
var seq__59408__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59408__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59408__$1);
var G__59670 = cljs.core.chunk_rest(seq__59408__$1);
var G__59671 = c__4679__auto__;
var G__59672 = cljs.core.count(c__4679__auto__);
var G__59673 = (0);
seq__59408 = G__59670;
chunk__59409 = G__59671;
count__59410 = G__59672;
i__59411 = G__59673;
continue;
} else {
var js_ns = cljs.core.first(seq__59408__$1);
var require_str_59674 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59674);


var G__59675 = cljs.core.next(seq__59408__$1);
var G__59676 = null;
var G__59677 = (0);
var G__59678 = (0);
seq__59408 = G__59675;
chunk__59409 = G__59676;
count__59410 = G__59677;
i__59411 = G__59678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__59422){
var map__59423 = p__59422;
var map__59423__$1 = cljs.core.__destructure_map(map__59423);
var msg = map__59423__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59424(s__59425){
return (new cljs.core.LazySeq(null,(function (){
var s__59425__$1 = s__59425;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59425__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__59430 = cljs.core.first(xs__6308__auto__);
var map__59430__$1 = cljs.core.__destructure_map(map__59430);
var src = map__59430__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__59425__$1,map__59430,map__59430__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__59423,map__59423__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59424_$_iter__59426(s__59427){
return (new cljs.core.LazySeq(null,((function (s__59425__$1,map__59430,map__59430__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__59423,map__59423__$1,msg,info,reload_info){
return (function (){
var s__59427__$1 = s__59427;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59427__$1);
if(temp__5753__auto____$1){
var s__59427__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59427__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59427__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59429 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59428 = (0);
while(true){
if((i__59428 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__59428);
cljs.core.chunk_append(b__59429,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__59684 = (i__59428 + (1));
i__59428 = G__59684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59429),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59424_$_iter__59426(cljs.core.chunk_rest(s__59427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59429),null);
}
} else {
var warning = cljs.core.first(s__59427__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59424_$_iter__59426(cljs.core.rest(s__59427__$2)));
}
} else {
return null;
}
break;
}
});})(s__59425__$1,map__59430,map__59430__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__59423,map__59423__$1,msg,info,reload_info))
,null,null));
});})(s__59425__$1,map__59430,map__59430__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__59423,map__59423__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59424(cljs.core.rest(s__59425__$1)));
} else {
var G__59691 = cljs.core.rest(s__59425__$1);
s__59425__$1 = G__59691;
continue;
}
} else {
var G__59692 = cljs.core.rest(s__59425__$1);
s__59425__$1 = G__59692;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__59433_59697 = cljs.core.seq(warnings);
var chunk__59434_59698 = null;
var count__59435_59699 = (0);
var i__59436_59700 = (0);
while(true){
if((i__59436_59700 < count__59435_59699)){
var map__59439_59701 = chunk__59434_59698.cljs$core$IIndexed$_nth$arity$2(null,i__59436_59700);
var map__59439_59702__$1 = cljs.core.__destructure_map(map__59439_59701);
var w_59703 = map__59439_59702__$1;
var msg_59704__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439_59702__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439_59702__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439_59702__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439_59702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59707)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59705),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59706),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59704__$1)].join(''));


var G__59714 = seq__59433_59697;
var G__59715 = chunk__59434_59698;
var G__59716 = count__59435_59699;
var G__59717 = (i__59436_59700 + (1));
seq__59433_59697 = G__59714;
chunk__59434_59698 = G__59715;
count__59435_59699 = G__59716;
i__59436_59700 = G__59717;
continue;
} else {
var temp__5753__auto___59718 = cljs.core.seq(seq__59433_59697);
if(temp__5753__auto___59718){
var seq__59433_59719__$1 = temp__5753__auto___59718;
if(cljs.core.chunked_seq_QMARK_(seq__59433_59719__$1)){
var c__4679__auto___59720 = cljs.core.chunk_first(seq__59433_59719__$1);
var G__59721 = cljs.core.chunk_rest(seq__59433_59719__$1);
var G__59722 = c__4679__auto___59720;
var G__59723 = cljs.core.count(c__4679__auto___59720);
var G__59724 = (0);
seq__59433_59697 = G__59721;
chunk__59434_59698 = G__59722;
count__59435_59699 = G__59723;
i__59436_59700 = G__59724;
continue;
} else {
var map__59440_59726 = cljs.core.first(seq__59433_59719__$1);
var map__59440_59727__$1 = cljs.core.__destructure_map(map__59440_59726);
var w_59728 = map__59440_59727__$1;
var msg_59729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440_59727__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440_59727__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440_59727__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440_59727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59732)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59730),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59731),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59729__$1)].join(''));


var G__59735 = cljs.core.next(seq__59433_59719__$1);
var G__59736 = null;
var G__59737 = (0);
var G__59738 = (0);
seq__59433_59697 = G__59735;
chunk__59434_59698 = G__59736;
count__59435_59699 = G__59737;
i__59436_59700 = G__59738;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__59418_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59418_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__59449){
var map__59450 = p__59449;
var map__59450__$1 = cljs.core.__destructure_map(map__59450);
var msg = map__59450__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59451 = cljs.core.seq(updates);
var chunk__59453 = null;
var count__59454 = (0);
var i__59455 = (0);
while(true){
if((i__59455 < count__59454)){
var path = chunk__59453.cljs$core$IIndexed$_nth$arity$2(null,i__59455);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59523_59744 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59527_59745 = null;
var count__59528_59746 = (0);
var i__59529_59747 = (0);
while(true){
if((i__59529_59747 < count__59528_59746)){
var node_59748 = chunk__59527_59745.cljs$core$IIndexed$_nth$arity$2(null,i__59529_59747);
if(cljs.core.not(node_59748.shadow$old)){
var path_match_59749 = shadow.cljs.devtools.client.browser.match_paths(node_59748.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59749)){
var new_link_59750 = (function (){var G__59541 = node_59748.cloneNode(true);
G__59541.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59749),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59541;
})();
(node_59748.shadow$old = true);

(new_link_59750.onload = ((function (seq__59523_59744,chunk__59527_59745,count__59528_59746,i__59529_59747,seq__59451,chunk__59453,count__59454,i__59455,new_link_59750,path_match_59749,node_59748,path,map__59450,map__59450__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_59748);
});})(seq__59523_59744,chunk__59527_59745,count__59528_59746,i__59529_59747,seq__59451,chunk__59453,count__59454,i__59455,new_link_59750,path_match_59749,node_59748,path,map__59450,map__59450__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59749], 0));

goog.dom.insertSiblingAfter(new_link_59750,node_59748);


var G__59752 = seq__59523_59744;
var G__59753 = chunk__59527_59745;
var G__59754 = count__59528_59746;
var G__59755 = (i__59529_59747 + (1));
seq__59523_59744 = G__59752;
chunk__59527_59745 = G__59753;
count__59528_59746 = G__59754;
i__59529_59747 = G__59755;
continue;
} else {
var G__59756 = seq__59523_59744;
var G__59757 = chunk__59527_59745;
var G__59758 = count__59528_59746;
var G__59759 = (i__59529_59747 + (1));
seq__59523_59744 = G__59756;
chunk__59527_59745 = G__59757;
count__59528_59746 = G__59758;
i__59529_59747 = G__59759;
continue;
}
} else {
var G__59760 = seq__59523_59744;
var G__59761 = chunk__59527_59745;
var G__59762 = count__59528_59746;
var G__59763 = (i__59529_59747 + (1));
seq__59523_59744 = G__59760;
chunk__59527_59745 = G__59761;
count__59528_59746 = G__59762;
i__59529_59747 = G__59763;
continue;
}
} else {
var temp__5753__auto___59764 = cljs.core.seq(seq__59523_59744);
if(temp__5753__auto___59764){
var seq__59523_59765__$1 = temp__5753__auto___59764;
if(cljs.core.chunked_seq_QMARK_(seq__59523_59765__$1)){
var c__4679__auto___59766 = cljs.core.chunk_first(seq__59523_59765__$1);
var G__59767 = cljs.core.chunk_rest(seq__59523_59765__$1);
var G__59768 = c__4679__auto___59766;
var G__59769 = cljs.core.count(c__4679__auto___59766);
var G__59770 = (0);
seq__59523_59744 = G__59767;
chunk__59527_59745 = G__59768;
count__59528_59746 = G__59769;
i__59529_59747 = G__59770;
continue;
} else {
var node_59771 = cljs.core.first(seq__59523_59765__$1);
if(cljs.core.not(node_59771.shadow$old)){
var path_match_59772 = shadow.cljs.devtools.client.browser.match_paths(node_59771.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59772)){
var new_link_59774 = (function (){var G__59544 = node_59771.cloneNode(true);
G__59544.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59772),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59544;
})();
(node_59771.shadow$old = true);

(new_link_59774.onload = ((function (seq__59523_59744,chunk__59527_59745,count__59528_59746,i__59529_59747,seq__59451,chunk__59453,count__59454,i__59455,new_link_59774,path_match_59772,node_59771,seq__59523_59765__$1,temp__5753__auto___59764,path,map__59450,map__59450__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_59771);
});})(seq__59523_59744,chunk__59527_59745,count__59528_59746,i__59529_59747,seq__59451,chunk__59453,count__59454,i__59455,new_link_59774,path_match_59772,node_59771,seq__59523_59765__$1,temp__5753__auto___59764,path,map__59450,map__59450__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59772], 0));

goog.dom.insertSiblingAfter(new_link_59774,node_59771);


var G__59775 = cljs.core.next(seq__59523_59765__$1);
var G__59776 = null;
var G__59777 = (0);
var G__59778 = (0);
seq__59523_59744 = G__59775;
chunk__59527_59745 = G__59776;
count__59528_59746 = G__59777;
i__59529_59747 = G__59778;
continue;
} else {
var G__59779 = cljs.core.next(seq__59523_59765__$1);
var G__59780 = null;
var G__59781 = (0);
var G__59782 = (0);
seq__59523_59744 = G__59779;
chunk__59527_59745 = G__59780;
count__59528_59746 = G__59781;
i__59529_59747 = G__59782;
continue;
}
} else {
var G__59784 = cljs.core.next(seq__59523_59765__$1);
var G__59785 = null;
var G__59786 = (0);
var G__59787 = (0);
seq__59523_59744 = G__59784;
chunk__59527_59745 = G__59785;
count__59528_59746 = G__59786;
i__59529_59747 = G__59787;
continue;
}
}
} else {
}
}
break;
}


var G__59789 = seq__59451;
var G__59790 = chunk__59453;
var G__59791 = count__59454;
var G__59792 = (i__59455 + (1));
seq__59451 = G__59789;
chunk__59453 = G__59790;
count__59454 = G__59791;
i__59455 = G__59792;
continue;
} else {
var G__59794 = seq__59451;
var G__59795 = chunk__59453;
var G__59796 = count__59454;
var G__59797 = (i__59455 + (1));
seq__59451 = G__59794;
chunk__59453 = G__59795;
count__59454 = G__59796;
i__59455 = G__59797;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59451);
if(temp__5753__auto__){
var seq__59451__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59451__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59451__$1);
var G__59798 = cljs.core.chunk_rest(seq__59451__$1);
var G__59799 = c__4679__auto__;
var G__59800 = cljs.core.count(c__4679__auto__);
var G__59801 = (0);
seq__59451 = G__59798;
chunk__59453 = G__59799;
count__59454 = G__59800;
i__59455 = G__59801;
continue;
} else {
var path = cljs.core.first(seq__59451__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59549_59802 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59553_59803 = null;
var count__59554_59804 = (0);
var i__59555_59805 = (0);
while(true){
if((i__59555_59805 < count__59554_59804)){
var node_59807 = chunk__59553_59803.cljs$core$IIndexed$_nth$arity$2(null,i__59555_59805);
if(cljs.core.not(node_59807.shadow$old)){
var path_match_59808 = shadow.cljs.devtools.client.browser.match_paths(node_59807.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59808)){
var new_link_59813 = (function (){var G__59567 = node_59807.cloneNode(true);
G__59567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59808),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59567;
})();
(node_59807.shadow$old = true);

(new_link_59813.onload = ((function (seq__59549_59802,chunk__59553_59803,count__59554_59804,i__59555_59805,seq__59451,chunk__59453,count__59454,i__59455,new_link_59813,path_match_59808,node_59807,path,seq__59451__$1,temp__5753__auto__,map__59450,map__59450__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_59807);
});})(seq__59549_59802,chunk__59553_59803,count__59554_59804,i__59555_59805,seq__59451,chunk__59453,count__59454,i__59455,new_link_59813,path_match_59808,node_59807,path,seq__59451__$1,temp__5753__auto__,map__59450,map__59450__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59808], 0));

goog.dom.insertSiblingAfter(new_link_59813,node_59807);


var G__59814 = seq__59549_59802;
var G__59815 = chunk__59553_59803;
var G__59816 = count__59554_59804;
var G__59817 = (i__59555_59805 + (1));
seq__59549_59802 = G__59814;
chunk__59553_59803 = G__59815;
count__59554_59804 = G__59816;
i__59555_59805 = G__59817;
continue;
} else {
var G__59818 = seq__59549_59802;
var G__59819 = chunk__59553_59803;
var G__59820 = count__59554_59804;
var G__59821 = (i__59555_59805 + (1));
seq__59549_59802 = G__59818;
chunk__59553_59803 = G__59819;
count__59554_59804 = G__59820;
i__59555_59805 = G__59821;
continue;
}
} else {
var G__59822 = seq__59549_59802;
var G__59823 = chunk__59553_59803;
var G__59824 = count__59554_59804;
var G__59825 = (i__59555_59805 + (1));
seq__59549_59802 = G__59822;
chunk__59553_59803 = G__59823;
count__59554_59804 = G__59824;
i__59555_59805 = G__59825;
continue;
}
} else {
var temp__5753__auto___59826__$1 = cljs.core.seq(seq__59549_59802);
if(temp__5753__auto___59826__$1){
var seq__59549_59827__$1 = temp__5753__auto___59826__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59549_59827__$1)){
var c__4679__auto___59828 = cljs.core.chunk_first(seq__59549_59827__$1);
var G__59829 = cljs.core.chunk_rest(seq__59549_59827__$1);
var G__59830 = c__4679__auto___59828;
var G__59831 = cljs.core.count(c__4679__auto___59828);
var G__59832 = (0);
seq__59549_59802 = G__59829;
chunk__59553_59803 = G__59830;
count__59554_59804 = G__59831;
i__59555_59805 = G__59832;
continue;
} else {
var node_59833 = cljs.core.first(seq__59549_59827__$1);
if(cljs.core.not(node_59833.shadow$old)){
var path_match_59834 = shadow.cljs.devtools.client.browser.match_paths(node_59833.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59834)){
var new_link_59835 = (function (){var G__59568 = node_59833.cloneNode(true);
G__59568.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59834),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59568;
})();
(node_59833.shadow$old = true);

(new_link_59835.onload = ((function (seq__59549_59802,chunk__59553_59803,count__59554_59804,i__59555_59805,seq__59451,chunk__59453,count__59454,i__59455,new_link_59835,path_match_59834,node_59833,seq__59549_59827__$1,temp__5753__auto___59826__$1,path,seq__59451__$1,temp__5753__auto__,map__59450,map__59450__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_59833);
});})(seq__59549_59802,chunk__59553_59803,count__59554_59804,i__59555_59805,seq__59451,chunk__59453,count__59454,i__59455,new_link_59835,path_match_59834,node_59833,seq__59549_59827__$1,temp__5753__auto___59826__$1,path,seq__59451__$1,temp__5753__auto__,map__59450,map__59450__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59834], 0));

goog.dom.insertSiblingAfter(new_link_59835,node_59833);


var G__59836 = cljs.core.next(seq__59549_59827__$1);
var G__59837 = null;
var G__59838 = (0);
var G__59839 = (0);
seq__59549_59802 = G__59836;
chunk__59553_59803 = G__59837;
count__59554_59804 = G__59838;
i__59555_59805 = G__59839;
continue;
} else {
var G__59840 = cljs.core.next(seq__59549_59827__$1);
var G__59841 = null;
var G__59842 = (0);
var G__59843 = (0);
seq__59549_59802 = G__59840;
chunk__59553_59803 = G__59841;
count__59554_59804 = G__59842;
i__59555_59805 = G__59843;
continue;
}
} else {
var G__59844 = cljs.core.next(seq__59549_59827__$1);
var G__59845 = null;
var G__59846 = (0);
var G__59847 = (0);
seq__59549_59802 = G__59844;
chunk__59553_59803 = G__59845;
count__59554_59804 = G__59846;
i__59555_59805 = G__59847;
continue;
}
}
} else {
}
}
break;
}


var G__59848 = cljs.core.next(seq__59451__$1);
var G__59849 = null;
var G__59850 = (0);
var G__59851 = (0);
seq__59451 = G__59848;
chunk__59453 = G__59849;
count__59454 = G__59850;
i__59455 = G__59851;
continue;
} else {
var G__59852 = cljs.core.next(seq__59451__$1);
var G__59853 = null;
var G__59854 = (0);
var G__59855 = (0);
seq__59451 = G__59852;
chunk__59453 = G__59853;
count__59454 = G__59854;
i__59455 = G__59855;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__59576){
var map__59577 = p__59576;
var map__59577__$1 = cljs.core.__destructure_map(map__59577);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__59588){
var map__59589 = p__59588;
var map__59589__$1 = cljs.core.__destructure_map(map__59589);
var _ = map__59589__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59589__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__59600,done,error){
var map__59601 = p__59600;
var map__59601__$1 = cljs.core.__destructure_map(map__59601);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__59602,done,error){
var map__59603 = p__59602;
var map__59603__$1 = cljs.core.__destructure_map(map__59603);
var msg = map__59603__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59603__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59603__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59603__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59604){
var map__59605 = p__59604;
var map__59605__$1 = cljs.core.__destructure_map(map__59605);
var src = map__59605__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59605__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__59606 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__59606) : done.call(null,G__59606));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__59607){
var map__59608 = p__59607;
var map__59608__$1 = cljs.core.__destructure_map(map__59608);
var msg__$1 = map__59608__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59608__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e59609){var ex = e59609;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__59616){
var map__59617 = p__59616;
var map__59617__$1 = cljs.core.__destructure_map(map__59617);
var env = map__59617__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__59619){
var map__59620 = p__59619;
var map__59620__$1 = cljs.core.__destructure_map(map__59620);
var msg = map__59620__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59620__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__59627){
var map__59628 = p__59627;
var map__59628__$1 = cljs.core.__destructure_map(map__59628);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59628__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59628__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__59629){
var map__59630 = p__59629;
var map__59630__$1 = cljs.core.__destructure_map(map__59630);
var svc = map__59630__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59630__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
