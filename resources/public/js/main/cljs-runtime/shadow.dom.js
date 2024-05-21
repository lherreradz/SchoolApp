goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56829 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_56829(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56830 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_56830(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__56015 = coll;
var G__56016 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__56015,G__56016) : shadow.dom.lazy_native_coll_seq.call(null,G__56015,G__56016));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__56036 = arguments.length;
switch (G__56036) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__56043 = arguments.length;
switch (G__56043) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__56051 = arguments.length;
switch (G__56051) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__56056 = arguments.length;
switch (G__56056) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__56068 = arguments.length;
switch (G__56068) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__56076 = arguments.length;
switch (G__56076) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e56088){if((e56088 instanceof Object)){
var e = e56088;
return console.log("didnt support attachEvent",el,e);
} else {
throw e56088;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__56097 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__56098 = null;
var count__56099 = (0);
var i__56100 = (0);
while(true){
if((i__56100 < count__56099)){
var el = chunk__56098.cljs$core$IIndexed$_nth$arity$2(null,i__56100);
var handler_56864__$1 = ((function (seq__56097,chunk__56098,count__56099,i__56100,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56097,chunk__56098,count__56099,i__56100,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56864__$1);


var G__56865 = seq__56097;
var G__56866 = chunk__56098;
var G__56867 = count__56099;
var G__56868 = (i__56100 + (1));
seq__56097 = G__56865;
chunk__56098 = G__56866;
count__56099 = G__56867;
i__56100 = G__56868;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56097);
if(temp__5753__auto__){
var seq__56097__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56097__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56097__$1);
var G__56869 = cljs.core.chunk_rest(seq__56097__$1);
var G__56870 = c__4679__auto__;
var G__56871 = cljs.core.count(c__4679__auto__);
var G__56872 = (0);
seq__56097 = G__56869;
chunk__56098 = G__56870;
count__56099 = G__56871;
i__56100 = G__56872;
continue;
} else {
var el = cljs.core.first(seq__56097__$1);
var handler_56873__$1 = ((function (seq__56097,chunk__56098,count__56099,i__56100,el,seq__56097__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56097,chunk__56098,count__56099,i__56100,el,seq__56097__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56873__$1);


var G__56877 = cljs.core.next(seq__56097__$1);
var G__56878 = null;
var G__56879 = (0);
var G__56880 = (0);
seq__56097 = G__56877;
chunk__56098 = G__56878;
count__56099 = G__56879;
i__56100 = G__56880;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__56103 = arguments.length;
switch (G__56103) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__56112 = cljs.core.seq(events);
var chunk__56113 = null;
var count__56114 = (0);
var i__56115 = (0);
while(true){
if((i__56115 < count__56114)){
var vec__56129 = chunk__56113.cljs$core$IIndexed$_nth$arity$2(null,i__56115);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56886 = seq__56112;
var G__56887 = chunk__56113;
var G__56888 = count__56114;
var G__56889 = (i__56115 + (1));
seq__56112 = G__56886;
chunk__56113 = G__56887;
count__56114 = G__56888;
i__56115 = G__56889;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56112);
if(temp__5753__auto__){
var seq__56112__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56112__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56112__$1);
var G__56891 = cljs.core.chunk_rest(seq__56112__$1);
var G__56892 = c__4679__auto__;
var G__56893 = cljs.core.count(c__4679__auto__);
var G__56894 = (0);
seq__56112 = G__56891;
chunk__56113 = G__56892;
count__56114 = G__56893;
i__56115 = G__56894;
continue;
} else {
var vec__56132 = cljs.core.first(seq__56112__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56132,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56895 = cljs.core.next(seq__56112__$1);
var G__56896 = null;
var G__56897 = (0);
var G__56898 = (0);
seq__56112 = G__56895;
chunk__56113 = G__56896;
count__56114 = G__56897;
i__56115 = G__56898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__56135 = cljs.core.seq(styles);
var chunk__56136 = null;
var count__56137 = (0);
var i__56138 = (0);
while(true){
if((i__56138 < count__56137)){
var vec__56148 = chunk__56136.cljs$core$IIndexed$_nth$arity$2(null,i__56138);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56148,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56900 = seq__56135;
var G__56901 = chunk__56136;
var G__56902 = count__56137;
var G__56903 = (i__56138 + (1));
seq__56135 = G__56900;
chunk__56136 = G__56901;
count__56137 = G__56902;
i__56138 = G__56903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56135);
if(temp__5753__auto__){
var seq__56135__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56135__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56135__$1);
var G__56906 = cljs.core.chunk_rest(seq__56135__$1);
var G__56907 = c__4679__auto__;
var G__56908 = cljs.core.count(c__4679__auto__);
var G__56909 = (0);
seq__56135 = G__56906;
chunk__56136 = G__56907;
count__56137 = G__56908;
i__56138 = G__56909;
continue;
} else {
var vec__56155 = cljs.core.first(seq__56135__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56155,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56911 = cljs.core.next(seq__56135__$1);
var G__56912 = null;
var G__56913 = (0);
var G__56914 = (0);
seq__56135 = G__56911;
chunk__56136 = G__56912;
count__56137 = G__56913;
i__56138 = G__56914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__56164_56915 = key;
var G__56164_56916__$1 = (((G__56164_56915 instanceof cljs.core.Keyword))?G__56164_56915.fqn:null);
switch (G__56164_56916__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56920 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_56920,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_56920,"aria-");
}
})())){
el.setAttribute(ks_56920,value);
} else {
(el[ks_56920] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__56211){
var map__56217 = p__56211;
var map__56217__$1 = cljs.core.__destructure_map(map__56217);
var props = map__56217__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56217__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__56222 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56222,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56222,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56222,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__56225 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__56225,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__56225;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__56233 = arguments.length;
switch (G__56233) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__56253){
var vec__56254 = p__56253;
var seq__56255 = cljs.core.seq(vec__56254);
var first__56256 = cljs.core.first(seq__56255);
var seq__56255__$1 = cljs.core.next(seq__56255);
var nn = first__56256;
var first__56256__$1 = cljs.core.first(seq__56255__$1);
var seq__56255__$2 = cljs.core.next(seq__56255__$1);
var np = first__56256__$1;
var nc = seq__56255__$2;
var node = vec__56254;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56262 = nn;
var G__56263 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56262,G__56263) : create_fn.call(null,G__56262,G__56263));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56264 = nn;
var G__56265 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__56264,G__56265) : create_fn.call(null,G__56264,G__56265));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__56267 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56267,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56267,(1),null);
var seq__56270_56935 = cljs.core.seq(node_children);
var chunk__56271_56936 = null;
var count__56272_56937 = (0);
var i__56273_56938 = (0);
while(true){
if((i__56273_56938 < count__56272_56937)){
var child_struct_56939 = chunk__56271_56936.cljs$core$IIndexed$_nth$arity$2(null,i__56273_56938);
var children_56940 = shadow.dom.dom_node(child_struct_56939);
if(cljs.core.seq_QMARK_(children_56940)){
var seq__56291_56941 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56940));
var chunk__56293_56942 = null;
var count__56294_56943 = (0);
var i__56295_56944 = (0);
while(true){
if((i__56295_56944 < count__56294_56943)){
var child_56945 = chunk__56293_56942.cljs$core$IIndexed$_nth$arity$2(null,i__56295_56944);
if(cljs.core.truth_(child_56945)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56945);


var G__56946 = seq__56291_56941;
var G__56947 = chunk__56293_56942;
var G__56948 = count__56294_56943;
var G__56949 = (i__56295_56944 + (1));
seq__56291_56941 = G__56946;
chunk__56293_56942 = G__56947;
count__56294_56943 = G__56948;
i__56295_56944 = G__56949;
continue;
} else {
var G__56950 = seq__56291_56941;
var G__56951 = chunk__56293_56942;
var G__56952 = count__56294_56943;
var G__56953 = (i__56295_56944 + (1));
seq__56291_56941 = G__56950;
chunk__56293_56942 = G__56951;
count__56294_56943 = G__56952;
i__56295_56944 = G__56953;
continue;
}
} else {
var temp__5753__auto___56955 = cljs.core.seq(seq__56291_56941);
if(temp__5753__auto___56955){
var seq__56291_56956__$1 = temp__5753__auto___56955;
if(cljs.core.chunked_seq_QMARK_(seq__56291_56956__$1)){
var c__4679__auto___56957 = cljs.core.chunk_first(seq__56291_56956__$1);
var G__56958 = cljs.core.chunk_rest(seq__56291_56956__$1);
var G__56959 = c__4679__auto___56957;
var G__56960 = cljs.core.count(c__4679__auto___56957);
var G__56961 = (0);
seq__56291_56941 = G__56958;
chunk__56293_56942 = G__56959;
count__56294_56943 = G__56960;
i__56295_56944 = G__56961;
continue;
} else {
var child_56962 = cljs.core.first(seq__56291_56956__$1);
if(cljs.core.truth_(child_56962)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56962);


var G__56963 = cljs.core.next(seq__56291_56956__$1);
var G__56964 = null;
var G__56965 = (0);
var G__56966 = (0);
seq__56291_56941 = G__56963;
chunk__56293_56942 = G__56964;
count__56294_56943 = G__56965;
i__56295_56944 = G__56966;
continue;
} else {
var G__56967 = cljs.core.next(seq__56291_56956__$1);
var G__56968 = null;
var G__56969 = (0);
var G__56970 = (0);
seq__56291_56941 = G__56967;
chunk__56293_56942 = G__56968;
count__56294_56943 = G__56969;
i__56295_56944 = G__56970;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56940);
}


var G__56971 = seq__56270_56935;
var G__56972 = chunk__56271_56936;
var G__56973 = count__56272_56937;
var G__56974 = (i__56273_56938 + (1));
seq__56270_56935 = G__56971;
chunk__56271_56936 = G__56972;
count__56272_56937 = G__56973;
i__56273_56938 = G__56974;
continue;
} else {
var temp__5753__auto___56976 = cljs.core.seq(seq__56270_56935);
if(temp__5753__auto___56976){
var seq__56270_56977__$1 = temp__5753__auto___56976;
if(cljs.core.chunked_seq_QMARK_(seq__56270_56977__$1)){
var c__4679__auto___56978 = cljs.core.chunk_first(seq__56270_56977__$1);
var G__56979 = cljs.core.chunk_rest(seq__56270_56977__$1);
var G__56980 = c__4679__auto___56978;
var G__56981 = cljs.core.count(c__4679__auto___56978);
var G__56982 = (0);
seq__56270_56935 = G__56979;
chunk__56271_56936 = G__56980;
count__56272_56937 = G__56981;
i__56273_56938 = G__56982;
continue;
} else {
var child_struct_56983 = cljs.core.first(seq__56270_56977__$1);
var children_56984 = shadow.dom.dom_node(child_struct_56983);
if(cljs.core.seq_QMARK_(children_56984)){
var seq__56297_56985 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56984));
var chunk__56299_56986 = null;
var count__56300_56987 = (0);
var i__56301_56988 = (0);
while(true){
if((i__56301_56988 < count__56300_56987)){
var child_56989 = chunk__56299_56986.cljs$core$IIndexed$_nth$arity$2(null,i__56301_56988);
if(cljs.core.truth_(child_56989)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56989);


var G__56991 = seq__56297_56985;
var G__56992 = chunk__56299_56986;
var G__56993 = count__56300_56987;
var G__56994 = (i__56301_56988 + (1));
seq__56297_56985 = G__56991;
chunk__56299_56986 = G__56992;
count__56300_56987 = G__56993;
i__56301_56988 = G__56994;
continue;
} else {
var G__56995 = seq__56297_56985;
var G__56996 = chunk__56299_56986;
var G__56997 = count__56300_56987;
var G__56998 = (i__56301_56988 + (1));
seq__56297_56985 = G__56995;
chunk__56299_56986 = G__56996;
count__56300_56987 = G__56997;
i__56301_56988 = G__56998;
continue;
}
} else {
var temp__5753__auto___56999__$1 = cljs.core.seq(seq__56297_56985);
if(temp__5753__auto___56999__$1){
var seq__56297_57000__$1 = temp__5753__auto___56999__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56297_57000__$1)){
var c__4679__auto___57001 = cljs.core.chunk_first(seq__56297_57000__$1);
var G__57002 = cljs.core.chunk_rest(seq__56297_57000__$1);
var G__57003 = c__4679__auto___57001;
var G__57004 = cljs.core.count(c__4679__auto___57001);
var G__57005 = (0);
seq__56297_56985 = G__57002;
chunk__56299_56986 = G__57003;
count__56300_56987 = G__57004;
i__56301_56988 = G__57005;
continue;
} else {
var child_57006 = cljs.core.first(seq__56297_57000__$1);
if(cljs.core.truth_(child_57006)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57006);


var G__57008 = cljs.core.next(seq__56297_57000__$1);
var G__57009 = null;
var G__57010 = (0);
var G__57011 = (0);
seq__56297_56985 = G__57008;
chunk__56299_56986 = G__57009;
count__56300_56987 = G__57010;
i__56301_56988 = G__57011;
continue;
} else {
var G__57012 = cljs.core.next(seq__56297_57000__$1);
var G__57013 = null;
var G__57014 = (0);
var G__57015 = (0);
seq__56297_56985 = G__57012;
chunk__56299_56986 = G__57013;
count__56300_56987 = G__57014;
i__56301_56988 = G__57015;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56984);
}


var G__57016 = cljs.core.next(seq__56270_56977__$1);
var G__57017 = null;
var G__57018 = (0);
var G__57019 = (0);
seq__56270_56935 = G__57016;
chunk__56271_56936 = G__57017;
count__56272_56937 = G__57018;
i__56273_56938 = G__57019;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__56307 = cljs.core.seq(node);
var chunk__56308 = null;
var count__56309 = (0);
var i__56310 = (0);
while(true){
if((i__56310 < count__56309)){
var n = chunk__56308.cljs$core$IIndexed$_nth$arity$2(null,i__56310);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57023 = seq__56307;
var G__57024 = chunk__56308;
var G__57025 = count__56309;
var G__57026 = (i__56310 + (1));
seq__56307 = G__57023;
chunk__56308 = G__57024;
count__56309 = G__57025;
i__56310 = G__57026;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56307);
if(temp__5753__auto__){
var seq__56307__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56307__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56307__$1);
var G__57028 = cljs.core.chunk_rest(seq__56307__$1);
var G__57029 = c__4679__auto__;
var G__57030 = cljs.core.count(c__4679__auto__);
var G__57031 = (0);
seq__56307 = G__57028;
chunk__56308 = G__57029;
count__56309 = G__57030;
i__56310 = G__57031;
continue;
} else {
var n = cljs.core.first(seq__56307__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57032 = cljs.core.next(seq__56307__$1);
var G__57033 = null;
var G__57034 = (0);
var G__57035 = (0);
seq__56307 = G__57032;
chunk__56308 = G__57033;
count__56309 = G__57034;
i__56310 = G__57035;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__56316 = arguments.length;
switch (G__56316) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__56318 = arguments.length;
switch (G__56318) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__56322 = arguments.length;
switch (G__56322) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57046 = arguments.length;
var i__4865__auto___57047 = (0);
while(true){
if((i__4865__auto___57047 < len__4864__auto___57046)){
args__4870__auto__.push((arguments[i__4865__auto___57047]));

var G__57048 = (i__4865__auto___57047 + (1));
i__4865__auto___57047 = G__57048;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__56328_57049 = cljs.core.seq(nodes);
var chunk__56329_57050 = null;
var count__56330_57051 = (0);
var i__56331_57052 = (0);
while(true){
if((i__56331_57052 < count__56330_57051)){
var node_57053 = chunk__56329_57050.cljs$core$IIndexed$_nth$arity$2(null,i__56331_57052);
fragment.appendChild(shadow.dom._to_dom(node_57053));


var G__57054 = seq__56328_57049;
var G__57055 = chunk__56329_57050;
var G__57056 = count__56330_57051;
var G__57057 = (i__56331_57052 + (1));
seq__56328_57049 = G__57054;
chunk__56329_57050 = G__57055;
count__56330_57051 = G__57056;
i__56331_57052 = G__57057;
continue;
} else {
var temp__5753__auto___57059 = cljs.core.seq(seq__56328_57049);
if(temp__5753__auto___57059){
var seq__56328_57060__$1 = temp__5753__auto___57059;
if(cljs.core.chunked_seq_QMARK_(seq__56328_57060__$1)){
var c__4679__auto___57061 = cljs.core.chunk_first(seq__56328_57060__$1);
var G__57062 = cljs.core.chunk_rest(seq__56328_57060__$1);
var G__57063 = c__4679__auto___57061;
var G__57064 = cljs.core.count(c__4679__auto___57061);
var G__57065 = (0);
seq__56328_57049 = G__57062;
chunk__56329_57050 = G__57063;
count__56330_57051 = G__57064;
i__56331_57052 = G__57065;
continue;
} else {
var node_57066 = cljs.core.first(seq__56328_57060__$1);
fragment.appendChild(shadow.dom._to_dom(node_57066));


var G__57067 = cljs.core.next(seq__56328_57060__$1);
var G__57068 = null;
var G__57069 = (0);
var G__57070 = (0);
seq__56328_57049 = G__57067;
chunk__56329_57050 = G__57068;
count__56330_57051 = G__57069;
i__56331_57052 = G__57070;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq56324){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56324));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__56337_57071 = cljs.core.seq(scripts);
var chunk__56338_57072 = null;
var count__56339_57073 = (0);
var i__56340_57074 = (0);
while(true){
if((i__56340_57074 < count__56339_57073)){
var vec__56353_57076 = chunk__56338_57072.cljs$core$IIndexed$_nth$arity$2(null,i__56340_57074);
var script_tag_57077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56353_57076,(0),null);
var script_body_57078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56353_57076,(1),null);
eval(script_body_57078);


var G__57080 = seq__56337_57071;
var G__57081 = chunk__56338_57072;
var G__57082 = count__56339_57073;
var G__57083 = (i__56340_57074 + (1));
seq__56337_57071 = G__57080;
chunk__56338_57072 = G__57081;
count__56339_57073 = G__57082;
i__56340_57074 = G__57083;
continue;
} else {
var temp__5753__auto___57085 = cljs.core.seq(seq__56337_57071);
if(temp__5753__auto___57085){
var seq__56337_57086__$1 = temp__5753__auto___57085;
if(cljs.core.chunked_seq_QMARK_(seq__56337_57086__$1)){
var c__4679__auto___57087 = cljs.core.chunk_first(seq__56337_57086__$1);
var G__57088 = cljs.core.chunk_rest(seq__56337_57086__$1);
var G__57089 = c__4679__auto___57087;
var G__57090 = cljs.core.count(c__4679__auto___57087);
var G__57091 = (0);
seq__56337_57071 = G__57088;
chunk__56338_57072 = G__57089;
count__56339_57073 = G__57090;
i__56340_57074 = G__57091;
continue;
} else {
var vec__56358_57092 = cljs.core.first(seq__56337_57086__$1);
var script_tag_57093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358_57092,(0),null);
var script_body_57094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358_57092,(1),null);
eval(script_body_57094);


var G__57095 = cljs.core.next(seq__56337_57086__$1);
var G__57096 = null;
var G__57097 = (0);
var G__57098 = (0);
seq__56337_57071 = G__57095;
chunk__56338_57072 = G__57096;
count__56339_57073 = G__57097;
i__56340_57074 = G__57098;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__56361){
var vec__56362 = p__56361;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56362,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56362,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__56370 = arguments.length;
switch (G__56370) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__56382 = cljs.core.seq(style_keys);
var chunk__56383 = null;
var count__56384 = (0);
var i__56385 = (0);
while(true){
if((i__56385 < count__56384)){
var it = chunk__56383.cljs$core$IIndexed$_nth$arity$2(null,i__56385);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57110 = seq__56382;
var G__57111 = chunk__56383;
var G__57112 = count__56384;
var G__57113 = (i__56385 + (1));
seq__56382 = G__57110;
chunk__56383 = G__57111;
count__56384 = G__57112;
i__56385 = G__57113;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56382);
if(temp__5753__auto__){
var seq__56382__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56382__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56382__$1);
var G__57114 = cljs.core.chunk_rest(seq__56382__$1);
var G__57115 = c__4679__auto__;
var G__57116 = cljs.core.count(c__4679__auto__);
var G__57117 = (0);
seq__56382 = G__57114;
chunk__56383 = G__57115;
count__56384 = G__57116;
i__56385 = G__57117;
continue;
} else {
var it = cljs.core.first(seq__56382__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57118 = cljs.core.next(seq__56382__$1);
var G__57119 = null;
var G__57120 = (0);
var G__57121 = (0);
seq__56382 = G__57118;
chunk__56383 = G__57119;
count__56384 = G__57120;
i__56385 = G__57121;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k56416,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__56433 = k56416;
var G__56433__$1 = (((G__56433 instanceof cljs.core.Keyword))?G__56433.fqn:null);
switch (G__56433__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56416,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__56436){
var vec__56443 = p__56436;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56443,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56443,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56415){
var self__ = this;
var G__56415__$1 = this;
return (new cljs.core.RecordIter((0),G__56415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56417,other56418){
var self__ = this;
var this56417__$1 = this;
return (((!((other56418 == null)))) && ((((this56417__$1.constructor === other56418.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56417__$1.x,other56418.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56417__$1.y,other56418.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56417__$1.__extmap,other56418.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k56416){
var self__ = this;
var this__4509__auto____$1 = this;
var G__56505 = k56416;
var G__56505__$1 = (((G__56505 instanceof cljs.core.Keyword))?G__56505.fqn:null);
switch (G__56505__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56416);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__56415){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__56511 = cljs.core.keyword_identical_QMARK_;
var expr__56512 = k__4511__auto__;
if(cljs.core.truth_((pred__56511.cljs$core$IFn$_invoke$arity$2 ? pred__56511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__56512) : pred__56511.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__56512)))){
return (new shadow.dom.Coordinate(G__56415,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56511.cljs$core$IFn$_invoke$arity$2 ? pred__56511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__56512) : pred__56511.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__56512)))){
return (new shadow.dom.Coordinate(self__.x,G__56415,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__56415),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__56415){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__56415,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__56421){
var extmap__4542__auto__ = (function (){var G__56543 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56421,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__56421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56543);
} else {
return G__56543;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56421),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56421),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k56561,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__56576 = k56561;
var G__56576__$1 = (((G__56576 instanceof cljs.core.Keyword))?G__56576.fqn:null);
switch (G__56576__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56561,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__56578){
var vec__56579 = p__56578;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56560){
var self__ = this;
var G__56560__$1 = this;
return (new cljs.core.RecordIter((0),G__56560__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56562,other56563){
var self__ = this;
var this56562__$1 = this;
return (((!((other56563 == null)))) && ((((this56562__$1.constructor === other56563.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56562__$1.w,other56563.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56562__$1.h,other56563.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56562__$1.__extmap,other56563.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k56561){
var self__ = this;
var this__4509__auto____$1 = this;
var G__56602 = k56561;
var G__56602__$1 = (((G__56602 instanceof cljs.core.Keyword))?G__56602.fqn:null);
switch (G__56602__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56561);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__56560){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__56603 = cljs.core.keyword_identical_QMARK_;
var expr__56604 = k__4511__auto__;
if(cljs.core.truth_((pred__56603.cljs$core$IFn$_invoke$arity$2 ? pred__56603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__56604) : pred__56603.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__56604)))){
return (new shadow.dom.Size(G__56560,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56603.cljs$core$IFn$_invoke$arity$2 ? pred__56603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__56604) : pred__56603.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__56604)))){
return (new shadow.dom.Size(self__.w,G__56560,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__56560),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__56560){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__56560,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56568){
var extmap__4542__auto__ = (function (){var G__56619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56568,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56619);
} else {
return G__56619;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56568),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56568),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__57155 = (i + (1));
var G__57156 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__57155;
ret = G__57156;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56655){
var vec__56656 = p__56655;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56656,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56660 = arguments.length;
switch (G__56660) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__57168 = ps;
var G__57169 = (i + (1));
el__$1 = G__57168;
i = G__57169;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__56676 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56676,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56676,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56676,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__56682_57176 = cljs.core.seq(props);
var chunk__56683_57177 = null;
var count__56684_57178 = (0);
var i__56685_57179 = (0);
while(true){
if((i__56685_57179 < count__56684_57178)){
var vec__56692_57180 = chunk__56683_57177.cljs$core$IIndexed$_nth$arity$2(null,i__56685_57179);
var k_57181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56692_57180,(0),null);
var v_57182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56692_57180,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_57181);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57181),v_57182);


var G__57186 = seq__56682_57176;
var G__57187 = chunk__56683_57177;
var G__57188 = count__56684_57178;
var G__57189 = (i__56685_57179 + (1));
seq__56682_57176 = G__57186;
chunk__56683_57177 = G__57187;
count__56684_57178 = G__57188;
i__56685_57179 = G__57189;
continue;
} else {
var temp__5753__auto___57191 = cljs.core.seq(seq__56682_57176);
if(temp__5753__auto___57191){
var seq__56682_57192__$1 = temp__5753__auto___57191;
if(cljs.core.chunked_seq_QMARK_(seq__56682_57192__$1)){
var c__4679__auto___57193 = cljs.core.chunk_first(seq__56682_57192__$1);
var G__57194 = cljs.core.chunk_rest(seq__56682_57192__$1);
var G__57195 = c__4679__auto___57193;
var G__57196 = cljs.core.count(c__4679__auto___57193);
var G__57197 = (0);
seq__56682_57176 = G__57194;
chunk__56683_57177 = G__57195;
count__56684_57178 = G__57196;
i__56685_57179 = G__57197;
continue;
} else {
var vec__56701_57198 = cljs.core.first(seq__56682_57192__$1);
var k_57199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56701_57198,(0),null);
var v_57200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56701_57198,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_57199);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57199),v_57200);


var G__57201 = cljs.core.next(seq__56682_57192__$1);
var G__57202 = null;
var G__57203 = (0);
var G__57204 = (0);
seq__56682_57176 = G__57201;
chunk__56683_57177 = G__57202;
count__56684_57178 = G__57203;
i__56685_57179 = G__57204;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__56707 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56707,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56707,(1),null);
var seq__56710_57207 = cljs.core.seq(node_children);
var chunk__56712_57208 = null;
var count__56713_57209 = (0);
var i__56714_57210 = (0);
while(true){
if((i__56714_57210 < count__56713_57209)){
var child_struct_57212 = chunk__56712_57208.cljs$core$IIndexed$_nth$arity$2(null,i__56714_57210);
if((!((child_struct_57212 == null)))){
if(typeof child_struct_57212 === 'string'){
var text_57214 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57214),child_struct_57212].join(''));
} else {
var children_57215 = shadow.dom.svg_node(child_struct_57212);
if(cljs.core.seq_QMARK_(children_57215)){
var seq__56744_57216 = cljs.core.seq(children_57215);
var chunk__56746_57217 = null;
var count__56747_57218 = (0);
var i__56748_57219 = (0);
while(true){
if((i__56748_57219 < count__56747_57218)){
var child_57220 = chunk__56746_57217.cljs$core$IIndexed$_nth$arity$2(null,i__56748_57219);
if(cljs.core.truth_(child_57220)){
node.appendChild(child_57220);


var G__57221 = seq__56744_57216;
var G__57222 = chunk__56746_57217;
var G__57223 = count__56747_57218;
var G__57224 = (i__56748_57219 + (1));
seq__56744_57216 = G__57221;
chunk__56746_57217 = G__57222;
count__56747_57218 = G__57223;
i__56748_57219 = G__57224;
continue;
} else {
var G__57225 = seq__56744_57216;
var G__57226 = chunk__56746_57217;
var G__57227 = count__56747_57218;
var G__57228 = (i__56748_57219 + (1));
seq__56744_57216 = G__57225;
chunk__56746_57217 = G__57226;
count__56747_57218 = G__57227;
i__56748_57219 = G__57228;
continue;
}
} else {
var temp__5753__auto___57229 = cljs.core.seq(seq__56744_57216);
if(temp__5753__auto___57229){
var seq__56744_57230__$1 = temp__5753__auto___57229;
if(cljs.core.chunked_seq_QMARK_(seq__56744_57230__$1)){
var c__4679__auto___57231 = cljs.core.chunk_first(seq__56744_57230__$1);
var G__57232 = cljs.core.chunk_rest(seq__56744_57230__$1);
var G__57233 = c__4679__auto___57231;
var G__57234 = cljs.core.count(c__4679__auto___57231);
var G__57235 = (0);
seq__56744_57216 = G__57232;
chunk__56746_57217 = G__57233;
count__56747_57218 = G__57234;
i__56748_57219 = G__57235;
continue;
} else {
var child_57236 = cljs.core.first(seq__56744_57230__$1);
if(cljs.core.truth_(child_57236)){
node.appendChild(child_57236);


var G__57239 = cljs.core.next(seq__56744_57230__$1);
var G__57240 = null;
var G__57241 = (0);
var G__57242 = (0);
seq__56744_57216 = G__57239;
chunk__56746_57217 = G__57240;
count__56747_57218 = G__57241;
i__56748_57219 = G__57242;
continue;
} else {
var G__57243 = cljs.core.next(seq__56744_57230__$1);
var G__57244 = null;
var G__57245 = (0);
var G__57246 = (0);
seq__56744_57216 = G__57243;
chunk__56746_57217 = G__57244;
count__56747_57218 = G__57245;
i__56748_57219 = G__57246;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57215);
}
}


var G__57247 = seq__56710_57207;
var G__57248 = chunk__56712_57208;
var G__57249 = count__56713_57209;
var G__57250 = (i__56714_57210 + (1));
seq__56710_57207 = G__57247;
chunk__56712_57208 = G__57248;
count__56713_57209 = G__57249;
i__56714_57210 = G__57250;
continue;
} else {
var G__57252 = seq__56710_57207;
var G__57253 = chunk__56712_57208;
var G__57254 = count__56713_57209;
var G__57255 = (i__56714_57210 + (1));
seq__56710_57207 = G__57252;
chunk__56712_57208 = G__57253;
count__56713_57209 = G__57254;
i__56714_57210 = G__57255;
continue;
}
} else {
var temp__5753__auto___57257 = cljs.core.seq(seq__56710_57207);
if(temp__5753__auto___57257){
var seq__56710_57258__$1 = temp__5753__auto___57257;
if(cljs.core.chunked_seq_QMARK_(seq__56710_57258__$1)){
var c__4679__auto___57259 = cljs.core.chunk_first(seq__56710_57258__$1);
var G__57260 = cljs.core.chunk_rest(seq__56710_57258__$1);
var G__57261 = c__4679__auto___57259;
var G__57262 = cljs.core.count(c__4679__auto___57259);
var G__57263 = (0);
seq__56710_57207 = G__57260;
chunk__56712_57208 = G__57261;
count__56713_57209 = G__57262;
i__56714_57210 = G__57263;
continue;
} else {
var child_struct_57266 = cljs.core.first(seq__56710_57258__$1);
if((!((child_struct_57266 == null)))){
if(typeof child_struct_57266 === 'string'){
var text_57267 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57267),child_struct_57266].join(''));
} else {
var children_57269 = shadow.dom.svg_node(child_struct_57266);
if(cljs.core.seq_QMARK_(children_57269)){
var seq__56756_57270 = cljs.core.seq(children_57269);
var chunk__56758_57271 = null;
var count__56759_57272 = (0);
var i__56760_57273 = (0);
while(true){
if((i__56760_57273 < count__56759_57272)){
var child_57277 = chunk__56758_57271.cljs$core$IIndexed$_nth$arity$2(null,i__56760_57273);
if(cljs.core.truth_(child_57277)){
node.appendChild(child_57277);


var G__57278 = seq__56756_57270;
var G__57279 = chunk__56758_57271;
var G__57280 = count__56759_57272;
var G__57281 = (i__56760_57273 + (1));
seq__56756_57270 = G__57278;
chunk__56758_57271 = G__57279;
count__56759_57272 = G__57280;
i__56760_57273 = G__57281;
continue;
} else {
var G__57283 = seq__56756_57270;
var G__57284 = chunk__56758_57271;
var G__57285 = count__56759_57272;
var G__57286 = (i__56760_57273 + (1));
seq__56756_57270 = G__57283;
chunk__56758_57271 = G__57284;
count__56759_57272 = G__57285;
i__56760_57273 = G__57286;
continue;
}
} else {
var temp__5753__auto___57287__$1 = cljs.core.seq(seq__56756_57270);
if(temp__5753__auto___57287__$1){
var seq__56756_57288__$1 = temp__5753__auto___57287__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56756_57288__$1)){
var c__4679__auto___57289 = cljs.core.chunk_first(seq__56756_57288__$1);
var G__57290 = cljs.core.chunk_rest(seq__56756_57288__$1);
var G__57291 = c__4679__auto___57289;
var G__57292 = cljs.core.count(c__4679__auto___57289);
var G__57293 = (0);
seq__56756_57270 = G__57290;
chunk__56758_57271 = G__57291;
count__56759_57272 = G__57292;
i__56760_57273 = G__57293;
continue;
} else {
var child_57294 = cljs.core.first(seq__56756_57288__$1);
if(cljs.core.truth_(child_57294)){
node.appendChild(child_57294);


var G__57295 = cljs.core.next(seq__56756_57288__$1);
var G__57296 = null;
var G__57297 = (0);
var G__57298 = (0);
seq__56756_57270 = G__57295;
chunk__56758_57271 = G__57296;
count__56759_57272 = G__57297;
i__56760_57273 = G__57298;
continue;
} else {
var G__57299 = cljs.core.next(seq__56756_57288__$1);
var G__57300 = null;
var G__57301 = (0);
var G__57302 = (0);
seq__56756_57270 = G__57299;
chunk__56758_57271 = G__57300;
count__56759_57272 = G__57301;
i__56760_57273 = G__57302;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57269);
}
}


var G__57303 = cljs.core.next(seq__56710_57258__$1);
var G__57304 = null;
var G__57305 = (0);
var G__57306 = (0);
seq__56710_57207 = G__57303;
chunk__56712_57208 = G__57304;
count__56713_57209 = G__57305;
i__56714_57210 = G__57306;
continue;
} else {
var G__57307 = cljs.core.next(seq__56710_57258__$1);
var G__57308 = null;
var G__57309 = (0);
var G__57310 = (0);
seq__56710_57207 = G__57307;
chunk__56712_57208 = G__57308;
count__56713_57209 = G__57309;
i__56714_57210 = G__57310;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57315 = arguments.length;
var i__4865__auto___57316 = (0);
while(true){
if((i__4865__auto___57316 < len__4864__auto___57315)){
args__4870__auto__.push((arguments[i__4865__auto___57316]));

var G__57317 = (i__4865__auto___57316 + (1));
i__4865__auto___57316 = G__57317;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56776){
var G__56777 = cljs.core.first(seq56776);
var seq56776__$1 = cljs.core.next(seq56776);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56777,seq56776__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56787 = arguments.length;
switch (G__56787) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__49910__auto___57328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_56798){
var state_val_56799 = (state_56798[(1)]);
if((state_val_56799 === (1))){
var state_56798__$1 = state_56798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56798__$1,(2),once_or_cleanup);
} else {
if((state_val_56799 === (2))){
var inst_56795 = (state_56798[(2)]);
var inst_56796 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56798__$1 = (function (){var statearr_56802 = state_56798;
(statearr_56802[(7)] = inst_56795);

return statearr_56802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56798__$1,inst_56796);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49484__auto__ = null;
var shadow$dom$state_machine__49484__auto____0 = (function (){
var statearr_56806 = [null,null,null,null,null,null,null,null];
(statearr_56806[(0)] = shadow$dom$state_machine__49484__auto__);

(statearr_56806[(1)] = (1));

return statearr_56806;
});
var shadow$dom$state_machine__49484__auto____1 = (function (state_56798){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_56798);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e56808){var ex__49487__auto__ = e56808;
var statearr_56809_57336 = state_56798;
(statearr_56809_57336[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_56798[(4)]))){
var statearr_56810_57337 = state_56798;
(statearr_56810_57337[(1)] = cljs.core.first((state_56798[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57338 = state_56798;
state_56798 = G__57338;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
shadow$dom$state_machine__49484__auto__ = function(state_56798){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49484__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49484__auto____1.call(this,state_56798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49484__auto____0;
shadow$dom$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49484__auto____1;
return shadow$dom$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_56812 = f__49911__auto__();
(statearr_56812[(6)] = c__49910__auto___57328);

return statearr_56812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
