goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__62909){
var vec__62910 = p__62909;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62910,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62910,(1),null);
var pair = vec__62910;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__62913){
var vec__62914 = p__62913;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62914,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62914,(1),null);
var pair = vec__62914;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__62917){
var vec__62918 = p__62917;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62918,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62918,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__62921 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62921,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__62921;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__62924 = arguments.length;
switch (G__62924) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__62925 = component.refs;
var G__62925__$1 = (((G__62925 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__62925,name));
if((G__62925__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__62925__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__62926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__62927 = (function (){var G__62928 = r;
if((G__62928 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__62928);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__62927) : ref.call(null,G__62927));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__62926) : factory.call(null,G__62926));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__62933 = arguments.length;
switch (G__62933) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___64733 = arguments.length;
var i__4865__auto___64734 = (0);
while(true){
if((i__4865__auto___64734 < len__4864__auto___64733)){
args_arr__4885__auto__.push((arguments[i__4865__auto___64734]));

var G__64735 = (i__4865__auto___64734 + (1));
i__4865__auto___64734 = G__64735;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq62930){
var G__62931 = cljs.core.first(seq62930);
var seq62930__$1 = cljs.core.next(seq62930);
var G__62932 = cljs.core.first(seq62930__$1);
var seq62930__$2 = cljs.core.next(seq62930__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62931,G__62932,seq62930__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4251__auto__ = tag;
if(cljs.core.truth_(and__4251__auto__)){
var G__62973 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__62973) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__62973));
} else {
return and__4251__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x62993_64736 = ctor.prototype;
(x62993_64736.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x62993_64736.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__62983_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__62983_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4251__auto__ = state_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = element_value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,293083907,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x62993_64736.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__64737__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__64737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64738__i = 0, G__64738__a = new Array(arguments.length -  0);
while (G__64738__i < G__64738__a.length) {G__64738__a[G__64738__i] = arguments[G__64738__i + 0]; ++G__64738__i;}
  args = new cljs.core.IndexedSeq(G__64738__a,0,null);
} 
return G__64737__delegate.call(this,args);};
G__64737.cljs$lang$maxFixedArity = 0;
G__64737.cljs$lang$applyTo = (function (arglist__64739){
var args = cljs.core.seq(arglist__64739);
return G__64737__delegate(args);
});
G__64737.cljs$core$IFn$_invoke$arity$variadic = G__64737__delegate;
return G__64737;
})()
;
return (function() { 
var G__64740__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__64740 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__64741__i = 0, G__64741__a = new Array(arguments.length -  1);
while (G__64741__i < G__64741__a.length) {G__64741__a[G__64741__i] = arguments[G__64741__i + 1]; ++G__64741__i;}
  children = new cljs.core.IndexedSeq(G__64741__a,0,null);
} 
return G__64740__delegate.call(this,props,children);};
G__64740.cljs$lang$maxFixedArity = 1;
G__64740.cljs$lang$applyTo = (function (arglist__64742){
var props = cljs.core.first(arglist__64742);
var children = cljs.core.rest(arglist__64742);
return G__64740__delegate(props,children);
});
G__64740.cljs$core$IFn$_invoke$arity$variadic = G__64740__delegate;
return G__64740;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__63012 = tag;
switch (G__63012) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63012)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__63021 = arguments.length;
switch (G__63021) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__63030 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__63031 = cljs.core.seq(vec__63030);
var first__63032 = cljs.core.first(seq__63031);
var seq__63031__$1 = cljs.core.next(seq__63031);
var head = first__63032;
var tail = seq__63031__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__63035 = (function (){var G__63037 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63037,tail);

return G__63037;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63035) : f.call(null,G__63035));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__63040 = (function (){var G__63041 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63041,args);

return G__63041;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63040) : f.call(null,G__63040));
} else {
if(cljs.core.object_QMARK_(head)){
var G__63043 = (function (){var G__63044 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63044,tail);

return G__63044;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63043) : f.call(null,G__63043));
} else {
if(cljs.core.map_QMARK_(head)){
var G__63049 = (function (){var G__63050 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__63050,tail);

return G__63050;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63049) : f.call(null,G__63049));
} else {
var G__63059 = (function (){var G__63060 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63060,args);

return G__63060;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63059) : f.call(null,G__63059));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__63072 = arguments.length;
switch (G__63072) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__63077 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__63078 = cljs.core.seq(vec__63077);
var first__63079 = cljs.core.first(seq__63078);
var seq__63078__$1 = cljs.core.next(seq__63078);
var head = first__63079;
var tail = seq__63078__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63085 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63085,tail);

return G__63085;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63092 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63092,args);

return G__63092;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63095 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63095,tail);

return G__63095;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63102 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__63102,tail);

return G__63102;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63103 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63103,args);

return G__63103;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64746 = arguments.length;
var i__4865__auto___64747 = (0);
while(true){
if((i__4865__auto___64747 < len__4864__auto___64746)){
args__4870__auto__.push((arguments[i__4865__auto___64747]));

var G__64748 = (i__4865__auto___64747 + (1));
i__4865__auto___64747 = G__64748;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63157 = conformed_args__61255__auto__;
var map__63157__$1 = cljs.core.__destructure_map(map__63157);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq63141){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63141));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64749 = arguments.length;
var i__4865__auto___64750 = (0);
while(true){
if((i__4865__auto___64750 < len__4864__auto___64749)){
args__4870__auto__.push((arguments[i__4865__auto___64750]));

var G__64751 = (i__4865__auto___64750 + (1));
i__4865__auto___64750 = G__64751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63178 = conformed_args__61255__auto__;
var map__63178__$1 = cljs.core.__destructure_map(map__63178);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq63169){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64752 = arguments.length;
var i__4865__auto___64753 = (0);
while(true){
if((i__4865__auto___64753 < len__4864__auto___64752)){
args__4870__auto__.push((arguments[i__4865__auto___64753]));

var G__64754 = (i__4865__auto___64753 + (1));
i__4865__auto___64753 = G__64754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63206 = conformed_args__61255__auto__;
var map__63206__$1 = cljs.core.__destructure_map(map__63206);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq63188){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64755 = arguments.length;
var i__4865__auto___64756 = (0);
while(true){
if((i__4865__auto___64756 < len__4864__auto___64755)){
args__4870__auto__.push((arguments[i__4865__auto___64756]));

var G__64757 = (i__4865__auto___64756 + (1));
i__4865__auto___64756 = G__64757;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63220 = conformed_args__61255__auto__;
var map__63220__$1 = cljs.core.__destructure_map(map__63220);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq63219){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64758 = arguments.length;
var i__4865__auto___64759 = (0);
while(true){
if((i__4865__auto___64759 < len__4864__auto___64758)){
args__4870__auto__.push((arguments[i__4865__auto___64759]));

var G__64760 = (i__4865__auto___64759 + (1));
i__4865__auto___64759 = G__64760;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63244 = conformed_args__61255__auto__;
var map__63244__$1 = cljs.core.__destructure_map(map__63244);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq63224){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63224));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64761 = arguments.length;
var i__4865__auto___64762 = (0);
while(true){
if((i__4865__auto___64762 < len__4864__auto___64761)){
args__4870__auto__.push((arguments[i__4865__auto___64762]));

var G__64763 = (i__4865__auto___64762 + (1));
i__4865__auto___64762 = G__64763;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63261 = conformed_args__61255__auto__;
var map__63261__$1 = cljs.core.__destructure_map(map__63261);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq63255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63255));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64764 = arguments.length;
var i__4865__auto___64765 = (0);
while(true){
if((i__4865__auto___64765 < len__4864__auto___64764)){
args__4870__auto__.push((arguments[i__4865__auto___64765]));

var G__64766 = (i__4865__auto___64765 + (1));
i__4865__auto___64765 = G__64766;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63275 = conformed_args__61255__auto__;
var map__63275__$1 = cljs.core.__destructure_map(map__63275);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq63271){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63271));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64767 = arguments.length;
var i__4865__auto___64768 = (0);
while(true){
if((i__4865__auto___64768 < len__4864__auto___64767)){
args__4870__auto__.push((arguments[i__4865__auto___64768]));

var G__64769 = (i__4865__auto___64768 + (1));
i__4865__auto___64768 = G__64769;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63280 = conformed_args__61255__auto__;
var map__63280__$1 = cljs.core.__destructure_map(map__63280);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq63278){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63278));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64770 = arguments.length;
var i__4865__auto___64771 = (0);
while(true){
if((i__4865__auto___64771 < len__4864__auto___64770)){
args__4870__auto__.push((arguments[i__4865__auto___64771]));

var G__64772 = (i__4865__auto___64771 + (1));
i__4865__auto___64771 = G__64772;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63292 = conformed_args__61255__auto__;
var map__63292__$1 = cljs.core.__destructure_map(map__63292);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq63288){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63288));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64773 = arguments.length;
var i__4865__auto___64774 = (0);
while(true){
if((i__4865__auto___64774 < len__4864__auto___64773)){
args__4870__auto__.push((arguments[i__4865__auto___64774]));

var G__64775 = (i__4865__auto___64774 + (1));
i__4865__auto___64774 = G__64775;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63300 = conformed_args__61255__auto__;
var map__63300__$1 = cljs.core.__destructure_map(map__63300);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq63294){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63294));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64776 = arguments.length;
var i__4865__auto___64777 = (0);
while(true){
if((i__4865__auto___64777 < len__4864__auto___64776)){
args__4870__auto__.push((arguments[i__4865__auto___64777]));

var G__64778 = (i__4865__auto___64777 + (1));
i__4865__auto___64777 = G__64778;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63317 = conformed_args__61255__auto__;
var map__63317__$1 = cljs.core.__destructure_map(map__63317);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq63304){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63304));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64779 = arguments.length;
var i__4865__auto___64780 = (0);
while(true){
if((i__4865__auto___64780 < len__4864__auto___64779)){
args__4870__auto__.push((arguments[i__4865__auto___64780]));

var G__64781 = (i__4865__auto___64780 + (1));
i__4865__auto___64780 = G__64781;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63326 = conformed_args__61255__auto__;
var map__63326__$1 = cljs.core.__destructure_map(map__63326);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq63319){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64782 = arguments.length;
var i__4865__auto___64783 = (0);
while(true){
if((i__4865__auto___64783 < len__4864__auto___64782)){
args__4870__auto__.push((arguments[i__4865__auto___64783]));

var G__64784 = (i__4865__auto___64783 + (1));
i__4865__auto___64783 = G__64784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63345 = conformed_args__61255__auto__;
var map__63345__$1 = cljs.core.__destructure_map(map__63345);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq63329){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64785 = arguments.length;
var i__4865__auto___64786 = (0);
while(true){
if((i__4865__auto___64786 < len__4864__auto___64785)){
args__4870__auto__.push((arguments[i__4865__auto___64786]));

var G__64787 = (i__4865__auto___64786 + (1));
i__4865__auto___64786 = G__64787;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63363 = conformed_args__61255__auto__;
var map__63363__$1 = cljs.core.__destructure_map(map__63363);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63363__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63363__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63363__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq63357){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64788 = arguments.length;
var i__4865__auto___64789 = (0);
while(true){
if((i__4865__auto___64789 < len__4864__auto___64788)){
args__4870__auto__.push((arguments[i__4865__auto___64789]));

var G__64790 = (i__4865__auto___64789 + (1));
i__4865__auto___64789 = G__64790;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63378 = conformed_args__61255__auto__;
var map__63378__$1 = cljs.core.__destructure_map(map__63378);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq63373){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63373));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64791 = arguments.length;
var i__4865__auto___64792 = (0);
while(true){
if((i__4865__auto___64792 < len__4864__auto___64791)){
args__4870__auto__.push((arguments[i__4865__auto___64792]));

var G__64793 = (i__4865__auto___64792 + (1));
i__4865__auto___64792 = G__64793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63380 = conformed_args__61255__auto__;
var map__63380__$1 = cljs.core.__destructure_map(map__63380);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq63379){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63379));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64794 = arguments.length;
var i__4865__auto___64795 = (0);
while(true){
if((i__4865__auto___64795 < len__4864__auto___64794)){
args__4870__auto__.push((arguments[i__4865__auto___64795]));

var G__64796 = (i__4865__auto___64795 + (1));
i__4865__auto___64795 = G__64796;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63395 = conformed_args__61255__auto__;
var map__63395__$1 = cljs.core.__destructure_map(map__63395);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq63389){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63389));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64797 = arguments.length;
var i__4865__auto___64798 = (0);
while(true){
if((i__4865__auto___64798 < len__4864__auto___64797)){
args__4870__auto__.push((arguments[i__4865__auto___64798]));

var G__64799 = (i__4865__auto___64798 + (1));
i__4865__auto___64798 = G__64799;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63412 = conformed_args__61255__auto__;
var map__63412__$1 = cljs.core.__destructure_map(map__63412);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq63402){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63402));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64800 = arguments.length;
var i__4865__auto___64801 = (0);
while(true){
if((i__4865__auto___64801 < len__4864__auto___64800)){
args__4870__auto__.push((arguments[i__4865__auto___64801]));

var G__64802 = (i__4865__auto___64801 + (1));
i__4865__auto___64801 = G__64802;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63426 = conformed_args__61255__auto__;
var map__63426__$1 = cljs.core.__destructure_map(map__63426);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq63422){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64803 = arguments.length;
var i__4865__auto___64804 = (0);
while(true){
if((i__4865__auto___64804 < len__4864__auto___64803)){
args__4870__auto__.push((arguments[i__4865__auto___64804]));

var G__64805 = (i__4865__auto___64804 + (1));
i__4865__auto___64804 = G__64805;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63433 = conformed_args__61255__auto__;
var map__63433__$1 = cljs.core.__destructure_map(map__63433);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq63431){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63431));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64806 = arguments.length;
var i__4865__auto___64807 = (0);
while(true){
if((i__4865__auto___64807 < len__4864__auto___64806)){
args__4870__auto__.push((arguments[i__4865__auto___64807]));

var G__64808 = (i__4865__auto___64807 + (1));
i__4865__auto___64807 = G__64808;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63442 = conformed_args__61255__auto__;
var map__63442__$1 = cljs.core.__destructure_map(map__63442);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq63441){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64809 = arguments.length;
var i__4865__auto___64810 = (0);
while(true){
if((i__4865__auto___64810 < len__4864__auto___64809)){
args__4870__auto__.push((arguments[i__4865__auto___64810]));

var G__64811 = (i__4865__auto___64810 + (1));
i__4865__auto___64810 = G__64811;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63458 = conformed_args__61255__auto__;
var map__63458__$1 = cljs.core.__destructure_map(map__63458);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq63451){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64812 = arguments.length;
var i__4865__auto___64813 = (0);
while(true){
if((i__4865__auto___64813 < len__4864__auto___64812)){
args__4870__auto__.push((arguments[i__4865__auto___64813]));

var G__64814 = (i__4865__auto___64813 + (1));
i__4865__auto___64813 = G__64814;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63474 = conformed_args__61255__auto__;
var map__63474__$1 = cljs.core.__destructure_map(map__63474);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq63468){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63468));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64815 = arguments.length;
var i__4865__auto___64816 = (0);
while(true){
if((i__4865__auto___64816 < len__4864__auto___64815)){
args__4870__auto__.push((arguments[i__4865__auto___64816]));

var G__64817 = (i__4865__auto___64816 + (1));
i__4865__auto___64816 = G__64817;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63485 = conformed_args__61255__auto__;
var map__63485__$1 = cljs.core.__destructure_map(map__63485);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq63483){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64818 = arguments.length;
var i__4865__auto___64819 = (0);
while(true){
if((i__4865__auto___64819 < len__4864__auto___64818)){
args__4870__auto__.push((arguments[i__4865__auto___64819]));

var G__64820 = (i__4865__auto___64819 + (1));
i__4865__auto___64819 = G__64820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63489 = conformed_args__61255__auto__;
var map__63489__$1 = cljs.core.__destructure_map(map__63489);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq63487){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63487));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64821 = arguments.length;
var i__4865__auto___64822 = (0);
while(true){
if((i__4865__auto___64822 < len__4864__auto___64821)){
args__4870__auto__.push((arguments[i__4865__auto___64822]));

var G__64823 = (i__4865__auto___64822 + (1));
i__4865__auto___64822 = G__64823;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63501 = conformed_args__61255__auto__;
var map__63501__$1 = cljs.core.__destructure_map(map__63501);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq63495){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64824 = arguments.length;
var i__4865__auto___64825 = (0);
while(true){
if((i__4865__auto___64825 < len__4864__auto___64824)){
args__4870__auto__.push((arguments[i__4865__auto___64825]));

var G__64826 = (i__4865__auto___64825 + (1));
i__4865__auto___64825 = G__64826;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63512 = conformed_args__61255__auto__;
var map__63512__$1 = cljs.core.__destructure_map(map__63512);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq63509){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64827 = arguments.length;
var i__4865__auto___64828 = (0);
while(true){
if((i__4865__auto___64828 < len__4864__auto___64827)){
args__4870__auto__.push((arguments[i__4865__auto___64828]));

var G__64829 = (i__4865__auto___64828 + (1));
i__4865__auto___64828 = G__64829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63524 = conformed_args__61255__auto__;
var map__63524__$1 = cljs.core.__destructure_map(map__63524);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq63520){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64830 = arguments.length;
var i__4865__auto___64831 = (0);
while(true){
if((i__4865__auto___64831 < len__4864__auto___64830)){
args__4870__auto__.push((arguments[i__4865__auto___64831]));

var G__64832 = (i__4865__auto___64831 + (1));
i__4865__auto___64831 = G__64832;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63536 = conformed_args__61255__auto__;
var map__63536__$1 = cljs.core.__destructure_map(map__63536);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq63532){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63532));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64833 = arguments.length;
var i__4865__auto___64834 = (0);
while(true){
if((i__4865__auto___64834 < len__4864__auto___64833)){
args__4870__auto__.push((arguments[i__4865__auto___64834]));

var G__64835 = (i__4865__auto___64834 + (1));
i__4865__auto___64834 = G__64835;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63546 = conformed_args__61255__auto__;
var map__63546__$1 = cljs.core.__destructure_map(map__63546);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq63543){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64836 = arguments.length;
var i__4865__auto___64837 = (0);
while(true){
if((i__4865__auto___64837 < len__4864__auto___64836)){
args__4870__auto__.push((arguments[i__4865__auto___64837]));

var G__64838 = (i__4865__auto___64837 + (1));
i__4865__auto___64837 = G__64838;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63556 = conformed_args__61255__auto__;
var map__63556__$1 = cljs.core.__destructure_map(map__63556);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq63554){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63554));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64839 = arguments.length;
var i__4865__auto___64840 = (0);
while(true){
if((i__4865__auto___64840 < len__4864__auto___64839)){
args__4870__auto__.push((arguments[i__4865__auto___64840]));

var G__64841 = (i__4865__auto___64840 + (1));
i__4865__auto___64840 = G__64841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63567 = conformed_args__61255__auto__;
var map__63567__$1 = cljs.core.__destructure_map(map__63567);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq63558){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63558));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64842 = arguments.length;
var i__4865__auto___64843 = (0);
while(true){
if((i__4865__auto___64843 < len__4864__auto___64842)){
args__4870__auto__.push((arguments[i__4865__auto___64843]));

var G__64844 = (i__4865__auto___64843 + (1));
i__4865__auto___64843 = G__64844;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63575 = conformed_args__61255__auto__;
var map__63575__$1 = cljs.core.__destructure_map(map__63575);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq63568){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63568));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64845 = arguments.length;
var i__4865__auto___64846 = (0);
while(true){
if((i__4865__auto___64846 < len__4864__auto___64845)){
args__4870__auto__.push((arguments[i__4865__auto___64846]));

var G__64847 = (i__4865__auto___64846 + (1));
i__4865__auto___64846 = G__64847;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63582 = conformed_args__61255__auto__;
var map__63582__$1 = cljs.core.__destructure_map(map__63582);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq63579){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64848 = arguments.length;
var i__4865__auto___64849 = (0);
while(true){
if((i__4865__auto___64849 < len__4864__auto___64848)){
args__4870__auto__.push((arguments[i__4865__auto___64849]));

var G__64850 = (i__4865__auto___64849 + (1));
i__4865__auto___64849 = G__64850;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63595 = conformed_args__61255__auto__;
var map__63595__$1 = cljs.core.__destructure_map(map__63595);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq63588){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64851 = arguments.length;
var i__4865__auto___64852 = (0);
while(true){
if((i__4865__auto___64852 < len__4864__auto___64851)){
args__4870__auto__.push((arguments[i__4865__auto___64852]));

var G__64853 = (i__4865__auto___64852 + (1));
i__4865__auto___64852 = G__64853;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63604 = conformed_args__61255__auto__;
var map__63604__$1 = cljs.core.__destructure_map(map__63604);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq63600){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63600));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64854 = arguments.length;
var i__4865__auto___64855 = (0);
while(true){
if((i__4865__auto___64855 < len__4864__auto___64854)){
args__4870__auto__.push((arguments[i__4865__auto___64855]));

var G__64856 = (i__4865__auto___64855 + (1));
i__4865__auto___64855 = G__64856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63611 = conformed_args__61255__auto__;
var map__63611__$1 = cljs.core.__destructure_map(map__63611);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq63607){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64857 = arguments.length;
var i__4865__auto___64858 = (0);
while(true){
if((i__4865__auto___64858 < len__4864__auto___64857)){
args__4870__auto__.push((arguments[i__4865__auto___64858]));

var G__64859 = (i__4865__auto___64858 + (1));
i__4865__auto___64858 = G__64859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63620 = conformed_args__61255__auto__;
var map__63620__$1 = cljs.core.__destructure_map(map__63620);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq63617){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64860 = arguments.length;
var i__4865__auto___64861 = (0);
while(true){
if((i__4865__auto___64861 < len__4864__auto___64860)){
args__4870__auto__.push((arguments[i__4865__auto___64861]));

var G__64862 = (i__4865__auto___64861 + (1));
i__4865__auto___64861 = G__64862;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63632 = conformed_args__61255__auto__;
var map__63632__$1 = cljs.core.__destructure_map(map__63632);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq63626){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63626));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64863 = arguments.length;
var i__4865__auto___64864 = (0);
while(true){
if((i__4865__auto___64864 < len__4864__auto___64863)){
args__4870__auto__.push((arguments[i__4865__auto___64864]));

var G__64865 = (i__4865__auto___64864 + (1));
i__4865__auto___64864 = G__64865;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63638 = conformed_args__61255__auto__;
var map__63638__$1 = cljs.core.__destructure_map(map__63638);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq63635){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63635));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64866 = arguments.length;
var i__4865__auto___64867 = (0);
while(true){
if((i__4865__auto___64867 < len__4864__auto___64866)){
args__4870__auto__.push((arguments[i__4865__auto___64867]));

var G__64868 = (i__4865__auto___64867 + (1));
i__4865__auto___64867 = G__64868;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63640 = conformed_args__61255__auto__;
var map__63640__$1 = cljs.core.__destructure_map(map__63640);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq63639){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64869 = arguments.length;
var i__4865__auto___64870 = (0);
while(true){
if((i__4865__auto___64870 < len__4864__auto___64869)){
args__4870__auto__.push((arguments[i__4865__auto___64870]));

var G__64871 = (i__4865__auto___64870 + (1));
i__4865__auto___64870 = G__64871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63642 = conformed_args__61255__auto__;
var map__63642__$1 = cljs.core.__destructure_map(map__63642);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq63641){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64872 = arguments.length;
var i__4865__auto___64873 = (0);
while(true){
if((i__4865__auto___64873 < len__4864__auto___64872)){
args__4870__auto__.push((arguments[i__4865__auto___64873]));

var G__64874 = (i__4865__auto___64873 + (1));
i__4865__auto___64873 = G__64874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63654 = conformed_args__61255__auto__;
var map__63654__$1 = cljs.core.__destructure_map(map__63654);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq63643){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64875 = arguments.length;
var i__4865__auto___64876 = (0);
while(true){
if((i__4865__auto___64876 < len__4864__auto___64875)){
args__4870__auto__.push((arguments[i__4865__auto___64876]));

var G__64877 = (i__4865__auto___64876 + (1));
i__4865__auto___64876 = G__64877;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63668 = conformed_args__61255__auto__;
var map__63668__$1 = cljs.core.__destructure_map(map__63668);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq63659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64878 = arguments.length;
var i__4865__auto___64879 = (0);
while(true){
if((i__4865__auto___64879 < len__4864__auto___64878)){
args__4870__auto__.push((arguments[i__4865__auto___64879]));

var G__64880 = (i__4865__auto___64879 + (1));
i__4865__auto___64879 = G__64880;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63677 = conformed_args__61255__auto__;
var map__63677__$1 = cljs.core.__destructure_map(map__63677);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq63676){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64881 = arguments.length;
var i__4865__auto___64882 = (0);
while(true){
if((i__4865__auto___64882 < len__4864__auto___64881)){
args__4870__auto__.push((arguments[i__4865__auto___64882]));

var G__64883 = (i__4865__auto___64882 + (1));
i__4865__auto___64882 = G__64883;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63686 = conformed_args__61255__auto__;
var map__63686__$1 = cljs.core.__destructure_map(map__63686);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq63685){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63685));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64884 = arguments.length;
var i__4865__auto___64885 = (0);
while(true){
if((i__4865__auto___64885 < len__4864__auto___64884)){
args__4870__auto__.push((arguments[i__4865__auto___64885]));

var G__64886 = (i__4865__auto___64885 + (1));
i__4865__auto___64885 = G__64886;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63688 = conformed_args__61255__auto__;
var map__63688__$1 = cljs.core.__destructure_map(map__63688);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq63687){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63687));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64887 = arguments.length;
var i__4865__auto___64888 = (0);
while(true){
if((i__4865__auto___64888 < len__4864__auto___64887)){
args__4870__auto__.push((arguments[i__4865__auto___64888]));

var G__64889 = (i__4865__auto___64888 + (1));
i__4865__auto___64888 = G__64889;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63690 = conformed_args__61255__auto__;
var map__63690__$1 = cljs.core.__destructure_map(map__63690);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq63689){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64890 = arguments.length;
var i__4865__auto___64891 = (0);
while(true){
if((i__4865__auto___64891 < len__4864__auto___64890)){
args__4870__auto__.push((arguments[i__4865__auto___64891]));

var G__64892 = (i__4865__auto___64891 + (1));
i__4865__auto___64891 = G__64892;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63692 = conformed_args__61255__auto__;
var map__63692__$1 = cljs.core.__destructure_map(map__63692);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq63691){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64893 = arguments.length;
var i__4865__auto___64894 = (0);
while(true){
if((i__4865__auto___64894 < len__4864__auto___64893)){
args__4870__auto__.push((arguments[i__4865__auto___64894]));

var G__64895 = (i__4865__auto___64894 + (1));
i__4865__auto___64894 = G__64895;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63694 = conformed_args__61255__auto__;
var map__63694__$1 = cljs.core.__destructure_map(map__63694);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq63693){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64896 = arguments.length;
var i__4865__auto___64897 = (0);
while(true){
if((i__4865__auto___64897 < len__4864__auto___64896)){
args__4870__auto__.push((arguments[i__4865__auto___64897]));

var G__64898 = (i__4865__auto___64897 + (1));
i__4865__auto___64897 = G__64898;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63696 = conformed_args__61255__auto__;
var map__63696__$1 = cljs.core.__destructure_map(map__63696);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq63695){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64899 = arguments.length;
var i__4865__auto___64900 = (0);
while(true){
if((i__4865__auto___64900 < len__4864__auto___64899)){
args__4870__auto__.push((arguments[i__4865__auto___64900]));

var G__64901 = (i__4865__auto___64900 + (1));
i__4865__auto___64900 = G__64901;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63698 = conformed_args__61255__auto__;
var map__63698__$1 = cljs.core.__destructure_map(map__63698);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq63697){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64902 = arguments.length;
var i__4865__auto___64903 = (0);
while(true){
if((i__4865__auto___64903 < len__4864__auto___64902)){
args__4870__auto__.push((arguments[i__4865__auto___64903]));

var G__64904 = (i__4865__auto___64903 + (1));
i__4865__auto___64903 = G__64904;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63702 = conformed_args__61255__auto__;
var map__63702__$1 = cljs.core.__destructure_map(map__63702);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq63701){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64905 = arguments.length;
var i__4865__auto___64906 = (0);
while(true){
if((i__4865__auto___64906 < len__4864__auto___64905)){
args__4870__auto__.push((arguments[i__4865__auto___64906]));

var G__64907 = (i__4865__auto___64906 + (1));
i__4865__auto___64906 = G__64907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63715 = conformed_args__61255__auto__;
var map__63715__$1 = cljs.core.__destructure_map(map__63715);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq63711){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64908 = arguments.length;
var i__4865__auto___64909 = (0);
while(true){
if((i__4865__auto___64909 < len__4864__auto___64908)){
args__4870__auto__.push((arguments[i__4865__auto___64909]));

var G__64910 = (i__4865__auto___64909 + (1));
i__4865__auto___64909 = G__64910;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63726 = conformed_args__61255__auto__;
var map__63726__$1 = cljs.core.__destructure_map(map__63726);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq63719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64911 = arguments.length;
var i__4865__auto___64912 = (0);
while(true){
if((i__4865__auto___64912 < len__4864__auto___64911)){
args__4870__auto__.push((arguments[i__4865__auto___64912]));

var G__64913 = (i__4865__auto___64912 + (1));
i__4865__auto___64912 = G__64913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63736 = conformed_args__61255__auto__;
var map__63736__$1 = cljs.core.__destructure_map(map__63736);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq63728){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64914 = arguments.length;
var i__4865__auto___64915 = (0);
while(true){
if((i__4865__auto___64915 < len__4864__auto___64914)){
args__4870__auto__.push((arguments[i__4865__auto___64915]));

var G__64916 = (i__4865__auto___64915 + (1));
i__4865__auto___64915 = G__64916;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63743 = conformed_args__61255__auto__;
var map__63743__$1 = cljs.core.__destructure_map(map__63743);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq63742){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64917 = arguments.length;
var i__4865__auto___64918 = (0);
while(true){
if((i__4865__auto___64918 < len__4864__auto___64917)){
args__4870__auto__.push((arguments[i__4865__auto___64918]));

var G__64919 = (i__4865__auto___64918 + (1));
i__4865__auto___64918 = G__64919;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63761 = conformed_args__61255__auto__;
var map__63761__$1 = cljs.core.__destructure_map(map__63761);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq63749){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64920 = arguments.length;
var i__4865__auto___64921 = (0);
while(true){
if((i__4865__auto___64921 < len__4864__auto___64920)){
args__4870__auto__.push((arguments[i__4865__auto___64921]));

var G__64922 = (i__4865__auto___64921 + (1));
i__4865__auto___64921 = G__64922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63765 = conformed_args__61255__auto__;
var map__63765__$1 = cljs.core.__destructure_map(map__63765);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq63764){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64923 = arguments.length;
var i__4865__auto___64924 = (0);
while(true){
if((i__4865__auto___64924 < len__4864__auto___64923)){
args__4870__auto__.push((arguments[i__4865__auto___64924]));

var G__64925 = (i__4865__auto___64924 + (1));
i__4865__auto___64924 = G__64925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63777 = conformed_args__61255__auto__;
var map__63777__$1 = cljs.core.__destructure_map(map__63777);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq63773){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64926 = arguments.length;
var i__4865__auto___64927 = (0);
while(true){
if((i__4865__auto___64927 < len__4864__auto___64926)){
args__4870__auto__.push((arguments[i__4865__auto___64927]));

var G__64928 = (i__4865__auto___64927 + (1));
i__4865__auto___64927 = G__64928;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63784 = conformed_args__61255__auto__;
var map__63784__$1 = cljs.core.__destructure_map(map__63784);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq63782){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63782));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64929 = arguments.length;
var i__4865__auto___64930 = (0);
while(true){
if((i__4865__auto___64930 < len__4864__auto___64929)){
args__4870__auto__.push((arguments[i__4865__auto___64930]));

var G__64931 = (i__4865__auto___64930 + (1));
i__4865__auto___64930 = G__64931;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63807 = conformed_args__61255__auto__;
var map__63807__$1 = cljs.core.__destructure_map(map__63807);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq63800){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64932 = arguments.length;
var i__4865__auto___64933 = (0);
while(true){
if((i__4865__auto___64933 < len__4864__auto___64932)){
args__4870__auto__.push((arguments[i__4865__auto___64933]));

var G__64934 = (i__4865__auto___64933 + (1));
i__4865__auto___64933 = G__64934;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63819 = conformed_args__61255__auto__;
var map__63819__$1 = cljs.core.__destructure_map(map__63819);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq63814){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64935 = arguments.length;
var i__4865__auto___64936 = (0);
while(true){
if((i__4865__auto___64936 < len__4864__auto___64935)){
args__4870__auto__.push((arguments[i__4865__auto___64936]));

var G__64937 = (i__4865__auto___64936 + (1));
i__4865__auto___64936 = G__64937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63839 = conformed_args__61255__auto__;
var map__63839__$1 = cljs.core.__destructure_map(map__63839);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq63829){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63829));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64938 = arguments.length;
var i__4865__auto___64939 = (0);
while(true){
if((i__4865__auto___64939 < len__4864__auto___64938)){
args__4870__auto__.push((arguments[i__4865__auto___64939]));

var G__64940 = (i__4865__auto___64939 + (1));
i__4865__auto___64939 = G__64940;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63844 = conformed_args__61255__auto__;
var map__63844__$1 = cljs.core.__destructure_map(map__63844);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq63840){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64941 = arguments.length;
var i__4865__auto___64942 = (0);
while(true){
if((i__4865__auto___64942 < len__4864__auto___64941)){
args__4870__auto__.push((arguments[i__4865__auto___64942]));

var G__64943 = (i__4865__auto___64942 + (1));
i__4865__auto___64942 = G__64943;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63851 = conformed_args__61255__auto__;
var map__63851__$1 = cljs.core.__destructure_map(map__63851);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq63847){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64944 = arguments.length;
var i__4865__auto___64945 = (0);
while(true){
if((i__4865__auto___64945 < len__4864__auto___64944)){
args__4870__auto__.push((arguments[i__4865__auto___64945]));

var G__64946 = (i__4865__auto___64945 + (1));
i__4865__auto___64945 = G__64946;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63861 = conformed_args__61255__auto__;
var map__63861__$1 = cljs.core.__destructure_map(map__63861);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq63855){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64947 = arguments.length;
var i__4865__auto___64948 = (0);
while(true){
if((i__4865__auto___64948 < len__4864__auto___64947)){
args__4870__auto__.push((arguments[i__4865__auto___64948]));

var G__64949 = (i__4865__auto___64948 + (1));
i__4865__auto___64948 = G__64949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63866 = conformed_args__61255__auto__;
var map__63866__$1 = cljs.core.__destructure_map(map__63866);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq63863){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64950 = arguments.length;
var i__4865__auto___64951 = (0);
while(true){
if((i__4865__auto___64951 < len__4864__auto___64950)){
args__4870__auto__.push((arguments[i__4865__auto___64951]));

var G__64952 = (i__4865__auto___64951 + (1));
i__4865__auto___64951 = G__64952;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63872 = conformed_args__61255__auto__;
var map__63872__$1 = cljs.core.__destructure_map(map__63872);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq63869){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64953 = arguments.length;
var i__4865__auto___64954 = (0);
while(true){
if((i__4865__auto___64954 < len__4864__auto___64953)){
args__4870__auto__.push((arguments[i__4865__auto___64954]));

var G__64955 = (i__4865__auto___64954 + (1));
i__4865__auto___64954 = G__64955;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63878 = conformed_args__61255__auto__;
var map__63878__$1 = cljs.core.__destructure_map(map__63878);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq63875){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64956 = arguments.length;
var i__4865__auto___64957 = (0);
while(true){
if((i__4865__auto___64957 < len__4864__auto___64956)){
args__4870__auto__.push((arguments[i__4865__auto___64957]));

var G__64958 = (i__4865__auto___64957 + (1));
i__4865__auto___64957 = G__64958;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63883 = conformed_args__61255__auto__;
var map__63883__$1 = cljs.core.__destructure_map(map__63883);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq63881){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64959 = arguments.length;
var i__4865__auto___64960 = (0);
while(true){
if((i__4865__auto___64960 < len__4864__auto___64959)){
args__4870__auto__.push((arguments[i__4865__auto___64960]));

var G__64961 = (i__4865__auto___64960 + (1));
i__4865__auto___64960 = G__64961;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63898 = conformed_args__61255__auto__;
var map__63898__$1 = cljs.core.__destructure_map(map__63898);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq63892){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64962 = arguments.length;
var i__4865__auto___64963 = (0);
while(true){
if((i__4865__auto___64963 < len__4864__auto___64962)){
args__4870__auto__.push((arguments[i__4865__auto___64963]));

var G__64964 = (i__4865__auto___64963 + (1));
i__4865__auto___64963 = G__64964;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63911 = conformed_args__61255__auto__;
var map__63911__$1 = cljs.core.__destructure_map(map__63911);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq63905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63905));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64965 = arguments.length;
var i__4865__auto___64966 = (0);
while(true){
if((i__4865__auto___64966 < len__4864__auto___64965)){
args__4870__auto__.push((arguments[i__4865__auto___64966]));

var G__64967 = (i__4865__auto___64966 + (1));
i__4865__auto___64966 = G__64967;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63920 = conformed_args__61255__auto__;
var map__63920__$1 = cljs.core.__destructure_map(map__63920);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq63914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64968 = arguments.length;
var i__4865__auto___64969 = (0);
while(true){
if((i__4865__auto___64969 < len__4864__auto___64968)){
args__4870__auto__.push((arguments[i__4865__auto___64969]));

var G__64970 = (i__4865__auto___64969 + (1));
i__4865__auto___64969 = G__64970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63927 = conformed_args__61255__auto__;
var map__63927__$1 = cljs.core.__destructure_map(map__63927);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq63925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64971 = arguments.length;
var i__4865__auto___64972 = (0);
while(true){
if((i__4865__auto___64972 < len__4864__auto___64971)){
args__4870__auto__.push((arguments[i__4865__auto___64972]));

var G__64973 = (i__4865__auto___64972 + (1));
i__4865__auto___64972 = G__64973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63938 = conformed_args__61255__auto__;
var map__63938__$1 = cljs.core.__destructure_map(map__63938);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq63934){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64974 = arguments.length;
var i__4865__auto___64975 = (0);
while(true){
if((i__4865__auto___64975 < len__4864__auto___64974)){
args__4870__auto__.push((arguments[i__4865__auto___64975]));

var G__64976 = (i__4865__auto___64975 + (1));
i__4865__auto___64975 = G__64976;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63944 = conformed_args__61255__auto__;
var map__63944__$1 = cljs.core.__destructure_map(map__63944);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq63942){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64977 = arguments.length;
var i__4865__auto___64978 = (0);
while(true){
if((i__4865__auto___64978 < len__4864__auto___64977)){
args__4870__auto__.push((arguments[i__4865__auto___64978]));

var G__64979 = (i__4865__auto___64978 + (1));
i__4865__auto___64978 = G__64979;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63956 = conformed_args__61255__auto__;
var map__63956__$1 = cljs.core.__destructure_map(map__63956);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq63953){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64980 = arguments.length;
var i__4865__auto___64981 = (0);
while(true){
if((i__4865__auto___64981 < len__4864__auto___64980)){
args__4870__auto__.push((arguments[i__4865__auto___64981]));

var G__64982 = (i__4865__auto___64981 + (1));
i__4865__auto___64981 = G__64982;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63967 = conformed_args__61255__auto__;
var map__63967__$1 = cljs.core.__destructure_map(map__63967);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq63962){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64983 = arguments.length;
var i__4865__auto___64984 = (0);
while(true){
if((i__4865__auto___64984 < len__4864__auto___64983)){
args__4870__auto__.push((arguments[i__4865__auto___64984]));

var G__64985 = (i__4865__auto___64984 + (1));
i__4865__auto___64984 = G__64985;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63976 = conformed_args__61255__auto__;
var map__63976__$1 = cljs.core.__destructure_map(map__63976);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq63970){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64986 = arguments.length;
var i__4865__auto___64987 = (0);
while(true){
if((i__4865__auto___64987 < len__4864__auto___64986)){
args__4870__auto__.push((arguments[i__4865__auto___64987]));

var G__64988 = (i__4865__auto___64987 + (1));
i__4865__auto___64987 = G__64988;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63983 = conformed_args__61255__auto__;
var map__63983__$1 = cljs.core.__destructure_map(map__63983);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq63981){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64989 = arguments.length;
var i__4865__auto___64990 = (0);
while(true){
if((i__4865__auto___64990 < len__4864__auto___64989)){
args__4870__auto__.push((arguments[i__4865__auto___64990]));

var G__64991 = (i__4865__auto___64990 + (1));
i__4865__auto___64990 = G__64991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63999 = conformed_args__61255__auto__;
var map__63999__$1 = cljs.core.__destructure_map(map__63999);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq63987){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63987));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64992 = arguments.length;
var i__4865__auto___64993 = (0);
while(true){
if((i__4865__auto___64993 < len__4864__auto___64992)){
args__4870__auto__.push((arguments[i__4865__auto___64993]));

var G__64994 = (i__4865__auto___64993 + (1));
i__4865__auto___64993 = G__64994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64017 = conformed_args__61255__auto__;
var map__64017__$1 = cljs.core.__destructure_map(map__64017);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq64004){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64995 = arguments.length;
var i__4865__auto___64996 = (0);
while(true){
if((i__4865__auto___64996 < len__4864__auto___64995)){
args__4870__auto__.push((arguments[i__4865__auto___64996]));

var G__64997 = (i__4865__auto___64996 + (1));
i__4865__auto___64996 = G__64997;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64037 = conformed_args__61255__auto__;
var map__64037__$1 = cljs.core.__destructure_map(map__64037);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq64027){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64027));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64998 = arguments.length;
var i__4865__auto___64999 = (0);
while(true){
if((i__4865__auto___64999 < len__4864__auto___64998)){
args__4870__auto__.push((arguments[i__4865__auto___64999]));

var G__65000 = (i__4865__auto___64999 + (1));
i__4865__auto___64999 = G__65000;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64048 = conformed_args__61255__auto__;
var map__64048__$1 = cljs.core.__destructure_map(map__64048);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq64040){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65001 = arguments.length;
var i__4865__auto___65002 = (0);
while(true){
if((i__4865__auto___65002 < len__4864__auto___65001)){
args__4870__auto__.push((arguments[i__4865__auto___65002]));

var G__65003 = (i__4865__auto___65002 + (1));
i__4865__auto___65002 = G__65003;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64055 = conformed_args__61255__auto__;
var map__64055__$1 = cljs.core.__destructure_map(map__64055);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq64050){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64050));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65004 = arguments.length;
var i__4865__auto___65005 = (0);
while(true){
if((i__4865__auto___65005 < len__4864__auto___65004)){
args__4870__auto__.push((arguments[i__4865__auto___65005]));

var G__65006 = (i__4865__auto___65005 + (1));
i__4865__auto___65005 = G__65006;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64063 = conformed_args__61255__auto__;
var map__64063__$1 = cljs.core.__destructure_map(map__64063);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq64059){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64059));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65007 = arguments.length;
var i__4865__auto___65008 = (0);
while(true){
if((i__4865__auto___65008 < len__4864__auto___65007)){
args__4870__auto__.push((arguments[i__4865__auto___65008]));

var G__65009 = (i__4865__auto___65008 + (1));
i__4865__auto___65008 = G__65009;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64072 = conformed_args__61255__auto__;
var map__64072__$1 = cljs.core.__destructure_map(map__64072);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64072__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64072__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64072__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq64069){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64069));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65010 = arguments.length;
var i__4865__auto___65011 = (0);
while(true){
if((i__4865__auto___65011 < len__4864__auto___65010)){
args__4870__auto__.push((arguments[i__4865__auto___65011]));

var G__65012 = (i__4865__auto___65011 + (1));
i__4865__auto___65011 = G__65012;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64089 = conformed_args__61255__auto__;
var map__64089__$1 = cljs.core.__destructure_map(map__64089);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq64079){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64079));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65013 = arguments.length;
var i__4865__auto___65014 = (0);
while(true){
if((i__4865__auto___65014 < len__4864__auto___65013)){
args__4870__auto__.push((arguments[i__4865__auto___65014]));

var G__65015 = (i__4865__auto___65014 + (1));
i__4865__auto___65014 = G__65015;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64095 = conformed_args__61255__auto__;
var map__64095__$1 = cljs.core.__destructure_map(map__64095);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq64091){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65016 = arguments.length;
var i__4865__auto___65017 = (0);
while(true){
if((i__4865__auto___65017 < len__4864__auto___65016)){
args__4870__auto__.push((arguments[i__4865__auto___65017]));

var G__65018 = (i__4865__auto___65017 + (1));
i__4865__auto___65017 = G__65018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64097 = conformed_args__61255__auto__;
var map__64097__$1 = cljs.core.__destructure_map(map__64097);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq64096){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65019 = arguments.length;
var i__4865__auto___65020 = (0);
while(true){
if((i__4865__auto___65020 < len__4864__auto___65019)){
args__4870__auto__.push((arguments[i__4865__auto___65020]));

var G__65021 = (i__4865__auto___65020 + (1));
i__4865__auto___65020 = G__65021;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64100 = conformed_args__61255__auto__;
var map__64100__$1 = cljs.core.__destructure_map(map__64100);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq64098){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64098));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65022 = arguments.length;
var i__4865__auto___65023 = (0);
while(true){
if((i__4865__auto___65023 < len__4864__auto___65022)){
args__4870__auto__.push((arguments[i__4865__auto___65023]));

var G__65024 = (i__4865__auto___65023 + (1));
i__4865__auto___65023 = G__65024;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64106 = conformed_args__61255__auto__;
var map__64106__$1 = cljs.core.__destructure_map(map__64106);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq64104){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64104));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65025 = arguments.length;
var i__4865__auto___65026 = (0);
while(true){
if((i__4865__auto___65026 < len__4864__auto___65025)){
args__4870__auto__.push((arguments[i__4865__auto___65026]));

var G__65027 = (i__4865__auto___65026 + (1));
i__4865__auto___65026 = G__65027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64109 = conformed_args__61255__auto__;
var map__64109__$1 = cljs.core.__destructure_map(map__64109);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq64107){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64107));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65028 = arguments.length;
var i__4865__auto___65029 = (0);
while(true){
if((i__4865__auto___65029 < len__4864__auto___65028)){
args__4870__auto__.push((arguments[i__4865__auto___65029]));

var G__65030 = (i__4865__auto___65029 + (1));
i__4865__auto___65029 = G__65030;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64115 = conformed_args__61255__auto__;
var map__64115__$1 = cljs.core.__destructure_map(map__64115);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq64114){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64114));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65031 = arguments.length;
var i__4865__auto___65032 = (0);
while(true){
if((i__4865__auto___65032 < len__4864__auto___65031)){
args__4870__auto__.push((arguments[i__4865__auto___65032]));

var G__65033 = (i__4865__auto___65032 + (1));
i__4865__auto___65032 = G__65033;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64121 = conformed_args__61255__auto__;
var map__64121__$1 = cljs.core.__destructure_map(map__64121);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq64118){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65034 = arguments.length;
var i__4865__auto___65035 = (0);
while(true){
if((i__4865__auto___65035 < len__4864__auto___65034)){
args__4870__auto__.push((arguments[i__4865__auto___65035]));

var G__65036 = (i__4865__auto___65035 + (1));
i__4865__auto___65035 = G__65036;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64127 = conformed_args__61255__auto__;
var map__64127__$1 = cljs.core.__destructure_map(map__64127);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq64125){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65037 = arguments.length;
var i__4865__auto___65038 = (0);
while(true){
if((i__4865__auto___65038 < len__4864__auto___65037)){
args__4870__auto__.push((arguments[i__4865__auto___65038]));

var G__65039 = (i__4865__auto___65038 + (1));
i__4865__auto___65038 = G__65039;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64129 = conformed_args__61255__auto__;
var map__64129__$1 = cljs.core.__destructure_map(map__64129);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq64128){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64128));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65040 = arguments.length;
var i__4865__auto___65041 = (0);
while(true){
if((i__4865__auto___65041 < len__4864__auto___65040)){
args__4870__auto__.push((arguments[i__4865__auto___65041]));

var G__65042 = (i__4865__auto___65041 + (1));
i__4865__auto___65041 = G__65042;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64139 = conformed_args__61255__auto__;
var map__64139__$1 = cljs.core.__destructure_map(map__64139);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq64136){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65043 = arguments.length;
var i__4865__auto___65044 = (0);
while(true){
if((i__4865__auto___65044 < len__4864__auto___65043)){
args__4870__auto__.push((arguments[i__4865__auto___65044]));

var G__65045 = (i__4865__auto___65044 + (1));
i__4865__auto___65044 = G__65045;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64149 = conformed_args__61255__auto__;
var map__64149__$1 = cljs.core.__destructure_map(map__64149);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq64143){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64143));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65046 = arguments.length;
var i__4865__auto___65047 = (0);
while(true){
if((i__4865__auto___65047 < len__4864__auto___65046)){
args__4870__auto__.push((arguments[i__4865__auto___65047]));

var G__65048 = (i__4865__auto___65047 + (1));
i__4865__auto___65047 = G__65048;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64156 = conformed_args__61255__auto__;
var map__64156__$1 = cljs.core.__destructure_map(map__64156);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq64154){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64154));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65049 = arguments.length;
var i__4865__auto___65050 = (0);
while(true){
if((i__4865__auto___65050 < len__4864__auto___65049)){
args__4870__auto__.push((arguments[i__4865__auto___65050]));

var G__65051 = (i__4865__auto___65050 + (1));
i__4865__auto___65050 = G__65051;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64165 = conformed_args__61255__auto__;
var map__64165__$1 = cljs.core.__destructure_map(map__64165);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq64159){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64159));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65052 = arguments.length;
var i__4865__auto___65053 = (0);
while(true){
if((i__4865__auto___65053 < len__4864__auto___65052)){
args__4870__auto__.push((arguments[i__4865__auto___65053]));

var G__65054 = (i__4865__auto___65053 + (1));
i__4865__auto___65053 = G__65054;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64169 = conformed_args__61255__auto__;
var map__64169__$1 = cljs.core.__destructure_map(map__64169);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq64168){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65055 = arguments.length;
var i__4865__auto___65056 = (0);
while(true){
if((i__4865__auto___65056 < len__4864__auto___65055)){
args__4870__auto__.push((arguments[i__4865__auto___65056]));

var G__65057 = (i__4865__auto___65056 + (1));
i__4865__auto___65056 = G__65057;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64182 = conformed_args__61255__auto__;
var map__64182__$1 = cljs.core.__destructure_map(map__64182);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq64177){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65058 = arguments.length;
var i__4865__auto___65059 = (0);
while(true){
if((i__4865__auto___65059 < len__4864__auto___65058)){
args__4870__auto__.push((arguments[i__4865__auto___65059]));

var G__65060 = (i__4865__auto___65059 + (1));
i__4865__auto___65059 = G__65060;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64187 = conformed_args__61255__auto__;
var map__64187__$1 = cljs.core.__destructure_map(map__64187);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq64185){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64185));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65061 = arguments.length;
var i__4865__auto___65062 = (0);
while(true){
if((i__4865__auto___65062 < len__4864__auto___65061)){
args__4870__auto__.push((arguments[i__4865__auto___65062]));

var G__65063 = (i__4865__auto___65062 + (1));
i__4865__auto___65062 = G__65063;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64195 = conformed_args__61255__auto__;
var map__64195__$1 = cljs.core.__destructure_map(map__64195);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq64189){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64189));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65064 = arguments.length;
var i__4865__auto___65065 = (0);
while(true){
if((i__4865__auto___65065 < len__4864__auto___65064)){
args__4870__auto__.push((arguments[i__4865__auto___65065]));

var G__65066 = (i__4865__auto___65065 + (1));
i__4865__auto___65065 = G__65066;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64202 = conformed_args__61255__auto__;
var map__64202__$1 = cljs.core.__destructure_map(map__64202);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq64199){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64199));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65067 = arguments.length;
var i__4865__auto___65068 = (0);
while(true){
if((i__4865__auto___65068 < len__4864__auto___65067)){
args__4870__auto__.push((arguments[i__4865__auto___65068]));

var G__65069 = (i__4865__auto___65068 + (1));
i__4865__auto___65068 = G__65069;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64212 = conformed_args__61255__auto__;
var map__64212__$1 = cljs.core.__destructure_map(map__64212);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq64207){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65070 = arguments.length;
var i__4865__auto___65071 = (0);
while(true){
if((i__4865__auto___65071 < len__4864__auto___65070)){
args__4870__auto__.push((arguments[i__4865__auto___65071]));

var G__65072 = (i__4865__auto___65071 + (1));
i__4865__auto___65071 = G__65072;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64217 = conformed_args__61255__auto__;
var map__64217__$1 = cljs.core.__destructure_map(map__64217);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq64214){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65073 = arguments.length;
var i__4865__auto___65074 = (0);
while(true){
if((i__4865__auto___65074 < len__4864__auto___65073)){
args__4870__auto__.push((arguments[i__4865__auto___65074]));

var G__65075 = (i__4865__auto___65074 + (1));
i__4865__auto___65074 = G__65075;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64228 = conformed_args__61255__auto__;
var map__64228__$1 = cljs.core.__destructure_map(map__64228);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq64220){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65076 = arguments.length;
var i__4865__auto___65077 = (0);
while(true){
if((i__4865__auto___65077 < len__4864__auto___65076)){
args__4870__auto__.push((arguments[i__4865__auto___65077]));

var G__65078 = (i__4865__auto___65077 + (1));
i__4865__auto___65077 = G__65078;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64234 = conformed_args__61255__auto__;
var map__64234__$1 = cljs.core.__destructure_map(map__64234);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq64233){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64233));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65079 = arguments.length;
var i__4865__auto___65080 = (0);
while(true){
if((i__4865__auto___65080 < len__4864__auto___65079)){
args__4870__auto__.push((arguments[i__4865__auto___65080]));

var G__65081 = (i__4865__auto___65080 + (1));
i__4865__auto___65080 = G__65081;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64244 = conformed_args__61255__auto__;
var map__64244__$1 = cljs.core.__destructure_map(map__64244);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq64236){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64236));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65082 = arguments.length;
var i__4865__auto___65083 = (0);
while(true){
if((i__4865__auto___65083 < len__4864__auto___65082)){
args__4870__auto__.push((arguments[i__4865__auto___65083]));

var G__65084 = (i__4865__auto___65083 + (1));
i__4865__auto___65083 = G__65084;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64246 = conformed_args__61255__auto__;
var map__64246__$1 = cljs.core.__destructure_map(map__64246);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq64245){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64245));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65085 = arguments.length;
var i__4865__auto___65086 = (0);
while(true){
if((i__4865__auto___65086 < len__4864__auto___65085)){
args__4870__auto__.push((arguments[i__4865__auto___65086]));

var G__65087 = (i__4865__auto___65086 + (1));
i__4865__auto___65086 = G__65087;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64256 = conformed_args__61255__auto__;
var map__64256__$1 = cljs.core.__destructure_map(map__64256);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq64248){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64248));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65088 = arguments.length;
var i__4865__auto___65089 = (0);
while(true){
if((i__4865__auto___65089 < len__4864__auto___65088)){
args__4870__auto__.push((arguments[i__4865__auto___65089]));

var G__65090 = (i__4865__auto___65089 + (1));
i__4865__auto___65089 = G__65090;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64261 = conformed_args__61255__auto__;
var map__64261__$1 = cljs.core.__destructure_map(map__64261);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq64257){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64257));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65091 = arguments.length;
var i__4865__auto___65092 = (0);
while(true){
if((i__4865__auto___65092 < len__4864__auto___65091)){
args__4870__auto__.push((arguments[i__4865__auto___65092]));

var G__65093 = (i__4865__auto___65092 + (1));
i__4865__auto___65092 = G__65093;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64271 = conformed_args__61255__auto__;
var map__64271__$1 = cljs.core.__destructure_map(map__64271);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq64265){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65094 = arguments.length;
var i__4865__auto___65095 = (0);
while(true){
if((i__4865__auto___65095 < len__4864__auto___65094)){
args__4870__auto__.push((arguments[i__4865__auto___65095]));

var G__65096 = (i__4865__auto___65095 + (1));
i__4865__auto___65095 = G__65096;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64278 = conformed_args__61255__auto__;
var map__64278__$1 = cljs.core.__destructure_map(map__64278);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq64272){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64272));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65097 = arguments.length;
var i__4865__auto___65098 = (0);
while(true){
if((i__4865__auto___65098 < len__4864__auto___65097)){
args__4870__auto__.push((arguments[i__4865__auto___65098]));

var G__65099 = (i__4865__auto___65098 + (1));
i__4865__auto___65098 = G__65099;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64281 = conformed_args__61255__auto__;
var map__64281__$1 = cljs.core.__destructure_map(map__64281);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq64280){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65100 = arguments.length;
var i__4865__auto___65101 = (0);
while(true){
if((i__4865__auto___65101 < len__4864__auto___65100)){
args__4870__auto__.push((arguments[i__4865__auto___65101]));

var G__65102 = (i__4865__auto___65101 + (1));
i__4865__auto___65101 = G__65102;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64285 = conformed_args__61255__auto__;
var map__64285__$1 = cljs.core.__destructure_map(map__64285);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq64284){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65103 = arguments.length;
var i__4865__auto___65104 = (0);
while(true){
if((i__4865__auto___65104 < len__4864__auto___65103)){
args__4870__auto__.push((arguments[i__4865__auto___65104]));

var G__65105 = (i__4865__auto___65104 + (1));
i__4865__auto___65104 = G__65105;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64290 = conformed_args__61255__auto__;
var map__64290__$1 = cljs.core.__destructure_map(map__64290);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq64287){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64287));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65106 = arguments.length;
var i__4865__auto___65107 = (0);
while(true){
if((i__4865__auto___65107 < len__4864__auto___65106)){
args__4870__auto__.push((arguments[i__4865__auto___65107]));

var G__65108 = (i__4865__auto___65107 + (1));
i__4865__auto___65107 = G__65108;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64294 = conformed_args__61255__auto__;
var map__64294__$1 = cljs.core.__destructure_map(map__64294);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq64292){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64292));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65109 = arguments.length;
var i__4865__auto___65110 = (0);
while(true){
if((i__4865__auto___65110 < len__4864__auto___65109)){
args__4870__auto__.push((arguments[i__4865__auto___65110]));

var G__65111 = (i__4865__auto___65110 + (1));
i__4865__auto___65110 = G__65111;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64298 = conformed_args__61255__auto__;
var map__64298__$1 = cljs.core.__destructure_map(map__64298);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq64296){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64296));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65112 = arguments.length;
var i__4865__auto___65113 = (0);
while(true){
if((i__4865__auto___65113 < len__4864__auto___65112)){
args__4870__auto__.push((arguments[i__4865__auto___65113]));

var G__65114 = (i__4865__auto___65113 + (1));
i__4865__auto___65113 = G__65114;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64303 = conformed_args__61255__auto__;
var map__64303__$1 = cljs.core.__destructure_map(map__64303);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq64300){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65115 = arguments.length;
var i__4865__auto___65116 = (0);
while(true){
if((i__4865__auto___65116 < len__4864__auto___65115)){
args__4870__auto__.push((arguments[i__4865__auto___65116]));

var G__65117 = (i__4865__auto___65116 + (1));
i__4865__auto___65116 = G__65117;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64309 = conformed_args__61255__auto__;
var map__64309__$1 = cljs.core.__destructure_map(map__64309);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq64307){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65118 = arguments.length;
var i__4865__auto___65119 = (0);
while(true){
if((i__4865__auto___65119 < len__4864__auto___65118)){
args__4870__auto__.push((arguments[i__4865__auto___65119]));

var G__65120 = (i__4865__auto___65119 + (1));
i__4865__auto___65119 = G__65120;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64312 = conformed_args__61255__auto__;
var map__64312__$1 = cljs.core.__destructure_map(map__64312);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq64311){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64311));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65121 = arguments.length;
var i__4865__auto___65122 = (0);
while(true){
if((i__4865__auto___65122 < len__4864__auto___65121)){
args__4870__auto__.push((arguments[i__4865__auto___65122]));

var G__65123 = (i__4865__auto___65122 + (1));
i__4865__auto___65122 = G__65123;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64314 = conformed_args__61255__auto__;
var map__64314__$1 = cljs.core.__destructure_map(map__64314);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq64313){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64313));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65124 = arguments.length;
var i__4865__auto___65125 = (0);
while(true){
if((i__4865__auto___65125 < len__4864__auto___65124)){
args__4870__auto__.push((arguments[i__4865__auto___65125]));

var G__65126 = (i__4865__auto___65125 + (1));
i__4865__auto___65125 = G__65126;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64316 = conformed_args__61255__auto__;
var map__64316__$1 = cljs.core.__destructure_map(map__64316);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq64315){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65127 = arguments.length;
var i__4865__auto___65128 = (0);
while(true){
if((i__4865__auto___65128 < len__4864__auto___65127)){
args__4870__auto__.push((arguments[i__4865__auto___65128]));

var G__65129 = (i__4865__auto___65128 + (1));
i__4865__auto___65128 = G__65129;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64321 = conformed_args__61255__auto__;
var map__64321__$1 = cljs.core.__destructure_map(map__64321);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq64317){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65130 = arguments.length;
var i__4865__auto___65131 = (0);
while(true){
if((i__4865__auto___65131 < len__4864__auto___65130)){
args__4870__auto__.push((arguments[i__4865__auto___65131]));

var G__65132 = (i__4865__auto___65131 + (1));
i__4865__auto___65131 = G__65132;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64328 = conformed_args__61255__auto__;
var map__64328__$1 = cljs.core.__destructure_map(map__64328);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq64325){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65133 = arguments.length;
var i__4865__auto___65134 = (0);
while(true){
if((i__4865__auto___65134 < len__4864__auto___65133)){
args__4870__auto__.push((arguments[i__4865__auto___65134]));

var G__65135 = (i__4865__auto___65134 + (1));
i__4865__auto___65134 = G__65135;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64334 = conformed_args__61255__auto__;
var map__64334__$1 = cljs.core.__destructure_map(map__64334);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq64330){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64330));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65136 = arguments.length;
var i__4865__auto___65137 = (0);
while(true){
if((i__4865__auto___65137 < len__4864__auto___65136)){
args__4870__auto__.push((arguments[i__4865__auto___65137]));

var G__65138 = (i__4865__auto___65137 + (1));
i__4865__auto___65137 = G__65138;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64359 = conformed_args__61255__auto__;
var map__64359__$1 = cljs.core.__destructure_map(map__64359);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq64341){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64341));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65139 = arguments.length;
var i__4865__auto___65140 = (0);
while(true){
if((i__4865__auto___65140 < len__4864__auto___65139)){
args__4870__auto__.push((arguments[i__4865__auto___65140]));

var G__65141 = (i__4865__auto___65140 + (1));
i__4865__auto___65140 = G__65141;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64365 = conformed_args__61255__auto__;
var map__64365__$1 = cljs.core.__destructure_map(map__64365);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq64361){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65142 = arguments.length;
var i__4865__auto___65143 = (0);
while(true){
if((i__4865__auto___65143 < len__4864__auto___65142)){
args__4870__auto__.push((arguments[i__4865__auto___65143]));

var G__65144 = (i__4865__auto___65143 + (1));
i__4865__auto___65143 = G__65144;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64369 = conformed_args__61255__auto__;
var map__64369__$1 = cljs.core.__destructure_map(map__64369);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq64367){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64367));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65145 = arguments.length;
var i__4865__auto___65146 = (0);
while(true){
if((i__4865__auto___65146 < len__4864__auto___65145)){
args__4870__auto__.push((arguments[i__4865__auto___65146]));

var G__65147 = (i__4865__auto___65146 + (1));
i__4865__auto___65146 = G__65147;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64371 = conformed_args__61255__auto__;
var map__64371__$1 = cljs.core.__destructure_map(map__64371);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq64370){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65148 = arguments.length;
var i__4865__auto___65149 = (0);
while(true){
if((i__4865__auto___65149 < len__4864__auto___65148)){
args__4870__auto__.push((arguments[i__4865__auto___65149]));

var G__65150 = (i__4865__auto___65149 + (1));
i__4865__auto___65149 = G__65150;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64373 = conformed_args__61255__auto__;
var map__64373__$1 = cljs.core.__destructure_map(map__64373);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq64372){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64372));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65151 = arguments.length;
var i__4865__auto___65152 = (0);
while(true){
if((i__4865__auto___65152 < len__4864__auto___65151)){
args__4870__auto__.push((arguments[i__4865__auto___65152]));

var G__65153 = (i__4865__auto___65152 + (1));
i__4865__auto___65152 = G__65153;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64378 = conformed_args__61255__auto__;
var map__64378__$1 = cljs.core.__destructure_map(map__64378);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq64374){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65154 = arguments.length;
var i__4865__auto___65155 = (0);
while(true){
if((i__4865__auto___65155 < len__4864__auto___65154)){
args__4870__auto__.push((arguments[i__4865__auto___65155]));

var G__65156 = (i__4865__auto___65155 + (1));
i__4865__auto___65155 = G__65156;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64417 = conformed_args__61255__auto__;
var map__64417__$1 = cljs.core.__destructure_map(map__64417);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq64400){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64400));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65157 = arguments.length;
var i__4865__auto___65158 = (0);
while(true){
if((i__4865__auto___65158 < len__4864__auto___65157)){
args__4870__auto__.push((arguments[i__4865__auto___65158]));

var G__65159 = (i__4865__auto___65158 + (1));
i__4865__auto___65158 = G__65159;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64463 = conformed_args__61255__auto__;
var map__64463__$1 = cljs.core.__destructure_map(map__64463);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq64440){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64440));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65160 = arguments.length;
var i__4865__auto___65161 = (0);
while(true){
if((i__4865__auto___65161 < len__4864__auto___65160)){
args__4870__auto__.push((arguments[i__4865__auto___65161]));

var G__65162 = (i__4865__auto___65161 + (1));
i__4865__auto___65161 = G__65162;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64486 = conformed_args__61255__auto__;
var map__64486__$1 = cljs.core.__destructure_map(map__64486);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq64481){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64481));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65163 = arguments.length;
var i__4865__auto___65164 = (0);
while(true){
if((i__4865__auto___65164 < len__4864__auto___65163)){
args__4870__auto__.push((arguments[i__4865__auto___65164]));

var G__65165 = (i__4865__auto___65164 + (1));
i__4865__auto___65164 = G__65165;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64495 = conformed_args__61255__auto__;
var map__64495__$1 = cljs.core.__destructure_map(map__64495);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq64493){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64493));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65166 = arguments.length;
var i__4865__auto___65167 = (0);
while(true){
if((i__4865__auto___65167 < len__4864__auto___65166)){
args__4870__auto__.push((arguments[i__4865__auto___65167]));

var G__65168 = (i__4865__auto___65167 + (1));
i__4865__auto___65167 = G__65168;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64508 = conformed_args__61255__auto__;
var map__64508__$1 = cljs.core.__destructure_map(map__64508);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq64505){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64505));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65169 = arguments.length;
var i__4865__auto___65170 = (0);
while(true){
if((i__4865__auto___65170 < len__4864__auto___65169)){
args__4870__auto__.push((arguments[i__4865__auto___65170]));

var G__65171 = (i__4865__auto___65170 + (1));
i__4865__auto___65170 = G__65171;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64513 = conformed_args__61255__auto__;
var map__64513__$1 = cljs.core.__destructure_map(map__64513);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq64510){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64510));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65172 = arguments.length;
var i__4865__auto___65173 = (0);
while(true){
if((i__4865__auto___65173 < len__4864__auto___65172)){
args__4870__auto__.push((arguments[i__4865__auto___65173]));

var G__65174 = (i__4865__auto___65173 + (1));
i__4865__auto___65173 = G__65174;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64517 = conformed_args__61255__auto__;
var map__64517__$1 = cljs.core.__destructure_map(map__64517);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq64514){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64514));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65175 = arguments.length;
var i__4865__auto___65176 = (0);
while(true){
if((i__4865__auto___65176 < len__4864__auto___65175)){
args__4870__auto__.push((arguments[i__4865__auto___65176]));

var G__65177 = (i__4865__auto___65176 + (1));
i__4865__auto___65176 = G__65177;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64521 = conformed_args__61255__auto__;
var map__64521__$1 = cljs.core.__destructure_map(map__64521);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq64520){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65178 = arguments.length;
var i__4865__auto___65179 = (0);
while(true){
if((i__4865__auto___65179 < len__4864__auto___65178)){
args__4870__auto__.push((arguments[i__4865__auto___65179]));

var G__65180 = (i__4865__auto___65179 + (1));
i__4865__auto___65179 = G__65180;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64523 = conformed_args__61255__auto__;
var map__64523__$1 = cljs.core.__destructure_map(map__64523);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq64522){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64522));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65181 = arguments.length;
var i__4865__auto___65182 = (0);
while(true){
if((i__4865__auto___65182 < len__4864__auto___65181)){
args__4870__auto__.push((arguments[i__4865__auto___65182]));

var G__65183 = (i__4865__auto___65182 + (1));
i__4865__auto___65182 = G__65183;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64527 = conformed_args__61255__auto__;
var map__64527__$1 = cljs.core.__destructure_map(map__64527);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq64524){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64524));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65184 = arguments.length;
var i__4865__auto___65185 = (0);
while(true){
if((i__4865__auto___65185 < len__4864__auto___65184)){
args__4870__auto__.push((arguments[i__4865__auto___65185]));

var G__65186 = (i__4865__auto___65185 + (1));
i__4865__auto___65185 = G__65186;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64531 = conformed_args__61255__auto__;
var map__64531__$1 = cljs.core.__destructure_map(map__64531);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq64530){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64530));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65187 = arguments.length;
var i__4865__auto___65188 = (0);
while(true){
if((i__4865__auto___65188 < len__4864__auto___65187)){
args__4870__auto__.push((arguments[i__4865__auto___65188]));

var G__65189 = (i__4865__auto___65188 + (1));
i__4865__auto___65188 = G__65189;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64534 = conformed_args__61255__auto__;
var map__64534__$1 = cljs.core.__destructure_map(map__64534);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq64532){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64532));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65190 = arguments.length;
var i__4865__auto___65191 = (0);
while(true){
if((i__4865__auto___65191 < len__4864__auto___65190)){
args__4870__auto__.push((arguments[i__4865__auto___65191]));

var G__65192 = (i__4865__auto___65191 + (1));
i__4865__auto___65191 = G__65192;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64539 = conformed_args__61255__auto__;
var map__64539__$1 = cljs.core.__destructure_map(map__64539);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq64538){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64538));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65193 = arguments.length;
var i__4865__auto___65194 = (0);
while(true){
if((i__4865__auto___65194 < len__4864__auto___65193)){
args__4870__auto__.push((arguments[i__4865__auto___65194]));

var G__65195 = (i__4865__auto___65194 + (1));
i__4865__auto___65194 = G__65195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64541 = conformed_args__61255__auto__;
var map__64541__$1 = cljs.core.__destructure_map(map__64541);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq64540){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64540));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65196 = arguments.length;
var i__4865__auto___65197 = (0);
while(true){
if((i__4865__auto___65197 < len__4864__auto___65196)){
args__4870__auto__.push((arguments[i__4865__auto___65197]));

var G__65198 = (i__4865__auto___65197 + (1));
i__4865__auto___65197 = G__65198;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64545 = conformed_args__61255__auto__;
var map__64545__$1 = cljs.core.__destructure_map(map__64545);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq64544){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64544));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65199 = arguments.length;
var i__4865__auto___65200 = (0);
while(true){
if((i__4865__auto___65200 < len__4864__auto___65199)){
args__4870__auto__.push((arguments[i__4865__auto___65200]));

var G__65201 = (i__4865__auto___65200 + (1));
i__4865__auto___65200 = G__65201;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64547 = conformed_args__61255__auto__;
var map__64547__$1 = cljs.core.__destructure_map(map__64547);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq64546){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65202 = arguments.length;
var i__4865__auto___65203 = (0);
while(true){
if((i__4865__auto___65203 < len__4864__auto___65202)){
args__4870__auto__.push((arguments[i__4865__auto___65203]));

var G__65204 = (i__4865__auto___65203 + (1));
i__4865__auto___65203 = G__65204;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64551 = conformed_args__61255__auto__;
var map__64551__$1 = cljs.core.__destructure_map(map__64551);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq64550){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64550));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65205 = arguments.length;
var i__4865__auto___65206 = (0);
while(true){
if((i__4865__auto___65206 < len__4864__auto___65205)){
args__4870__auto__.push((arguments[i__4865__auto___65206]));

var G__65207 = (i__4865__auto___65206 + (1));
i__4865__auto___65206 = G__65207;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64556 = conformed_args__61255__auto__;
var map__64556__$1 = cljs.core.__destructure_map(map__64556);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq64554){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64554));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65208 = arguments.length;
var i__4865__auto___65209 = (0);
while(true){
if((i__4865__auto___65209 < len__4864__auto___65208)){
args__4870__auto__.push((arguments[i__4865__auto___65209]));

var G__65210 = (i__4865__auto___65209 + (1));
i__4865__auto___65209 = G__65210;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64560 = conformed_args__61255__auto__;
var map__64560__$1 = cljs.core.__destructure_map(map__64560);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq64557){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65211 = arguments.length;
var i__4865__auto___65212 = (0);
while(true){
if((i__4865__auto___65212 < len__4864__auto___65211)){
args__4870__auto__.push((arguments[i__4865__auto___65212]));

var G__65213 = (i__4865__auto___65212 + (1));
i__4865__auto___65212 = G__65213;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64565 = conformed_args__61255__auto__;
var map__64565__$1 = cljs.core.__destructure_map(map__64565);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq64563){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65214 = arguments.length;
var i__4865__auto___65215 = (0);
while(true){
if((i__4865__auto___65215 < len__4864__auto___65214)){
args__4870__auto__.push((arguments[i__4865__auto___65215]));

var G__65216 = (i__4865__auto___65215 + (1));
i__4865__auto___65215 = G__65216;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64567 = conformed_args__61255__auto__;
var map__64567__$1 = cljs.core.__destructure_map(map__64567);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq64566){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64566));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65217 = arguments.length;
var i__4865__auto___65218 = (0);
while(true){
if((i__4865__auto___65218 < len__4864__auto___65217)){
args__4870__auto__.push((arguments[i__4865__auto___65218]));

var G__65219 = (i__4865__auto___65218 + (1));
i__4865__auto___65218 = G__65219;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64569 = conformed_args__61255__auto__;
var map__64569__$1 = cljs.core.__destructure_map(map__64569);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq64568){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64568));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65220 = arguments.length;
var i__4865__auto___65221 = (0);
while(true){
if((i__4865__auto___65221 < len__4864__auto___65220)){
args__4870__auto__.push((arguments[i__4865__auto___65221]));

var G__65222 = (i__4865__auto___65221 + (1));
i__4865__auto___65221 = G__65222;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64571 = conformed_args__61255__auto__;
var map__64571__$1 = cljs.core.__destructure_map(map__64571);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq64570){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64570));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65223 = arguments.length;
var i__4865__auto___65224 = (0);
while(true){
if((i__4865__auto___65224 < len__4864__auto___65223)){
args__4870__auto__.push((arguments[i__4865__auto___65224]));

var G__65225 = (i__4865__auto___65224 + (1));
i__4865__auto___65224 = G__65225;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64578 = conformed_args__61255__auto__;
var map__64578__$1 = cljs.core.__destructure_map(map__64578);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq64573){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65226 = arguments.length;
var i__4865__auto___65227 = (0);
while(true){
if((i__4865__auto___65227 < len__4864__auto___65226)){
args__4870__auto__.push((arguments[i__4865__auto___65227]));

var G__65228 = (i__4865__auto___65227 + (1));
i__4865__auto___65227 = G__65228;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64595 = conformed_args__61255__auto__;
var map__64595__$1 = cljs.core.__destructure_map(map__64595);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq64588){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65229 = arguments.length;
var i__4865__auto___65230 = (0);
while(true){
if((i__4865__auto___65230 < len__4864__auto___65229)){
args__4870__auto__.push((arguments[i__4865__auto___65230]));

var G__65231 = (i__4865__auto___65230 + (1));
i__4865__auto___65230 = G__65231;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64598 = conformed_args__61255__auto__;
var map__64598__$1 = cljs.core.__destructure_map(map__64598);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq64597){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65232 = arguments.length;
var i__4865__auto___65233 = (0);
while(true){
if((i__4865__auto___65233 < len__4864__auto___65232)){
args__4870__auto__.push((arguments[i__4865__auto___65233]));

var G__65234 = (i__4865__auto___65233 + (1));
i__4865__auto___65233 = G__65234;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64604 = conformed_args__61255__auto__;
var map__64604__$1 = cljs.core.__destructure_map(map__64604);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq64602){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65235 = arguments.length;
var i__4865__auto___65236 = (0);
while(true){
if((i__4865__auto___65236 < len__4864__auto___65235)){
args__4870__auto__.push((arguments[i__4865__auto___65236]));

var G__65237 = (i__4865__auto___65236 + (1));
i__4865__auto___65236 = G__65237;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64606 = conformed_args__61255__auto__;
var map__64606__$1 = cljs.core.__destructure_map(map__64606);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq64605){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65238 = arguments.length;
var i__4865__auto___65239 = (0);
while(true){
if((i__4865__auto___65239 < len__4864__auto___65238)){
args__4870__auto__.push((arguments[i__4865__auto___65239]));

var G__65240 = (i__4865__auto___65239 + (1));
i__4865__auto___65239 = G__65240;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64611 = conformed_args__61255__auto__;
var map__64611__$1 = cljs.core.__destructure_map(map__64611);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq64607){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65241 = arguments.length;
var i__4865__auto___65242 = (0);
while(true){
if((i__4865__auto___65242 < len__4864__auto___65241)){
args__4870__auto__.push((arguments[i__4865__auto___65242]));

var G__65243 = (i__4865__auto___65242 + (1));
i__4865__auto___65242 = G__65243;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64616 = conformed_args__61255__auto__;
var map__64616__$1 = cljs.core.__destructure_map(map__64616);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq64613){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65244 = arguments.length;
var i__4865__auto___65245 = (0);
while(true){
if((i__4865__auto___65245 < len__4864__auto___65244)){
args__4870__auto__.push((arguments[i__4865__auto___65245]));

var G__65246 = (i__4865__auto___65245 + (1));
i__4865__auto___65245 = G__65246;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64619 = conformed_args__61255__auto__;
var map__64619__$1 = cljs.core.__destructure_map(map__64619);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq64618){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64618));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65247 = arguments.length;
var i__4865__auto___65248 = (0);
while(true){
if((i__4865__auto___65248 < len__4864__auto___65247)){
args__4870__auto__.push((arguments[i__4865__auto___65248]));

var G__65249 = (i__4865__auto___65248 + (1));
i__4865__auto___65248 = G__65249;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64622 = conformed_args__61255__auto__;
var map__64622__$1 = cljs.core.__destructure_map(map__64622);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq64621){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65250 = arguments.length;
var i__4865__auto___65251 = (0);
while(true){
if((i__4865__auto___65251 < len__4864__auto___65250)){
args__4870__auto__.push((arguments[i__4865__auto___65251]));

var G__65252 = (i__4865__auto___65251 + (1));
i__4865__auto___65251 = G__65252;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64626 = conformed_args__61255__auto__;
var map__64626__$1 = cljs.core.__destructure_map(map__64626);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq64623){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64623));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65253 = arguments.length;
var i__4865__auto___65254 = (0);
while(true){
if((i__4865__auto___65254 < len__4864__auto___65253)){
args__4870__auto__.push((arguments[i__4865__auto___65254]));

var G__65255 = (i__4865__auto___65254 + (1));
i__4865__auto___65254 = G__65255;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64632 = conformed_args__61255__auto__;
var map__64632__$1 = cljs.core.__destructure_map(map__64632);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq64629){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65256 = arguments.length;
var i__4865__auto___65257 = (0);
while(true){
if((i__4865__auto___65257 < len__4864__auto___65256)){
args__4870__auto__.push((arguments[i__4865__auto___65257]));

var G__65258 = (i__4865__auto___65257 + (1));
i__4865__auto___65257 = G__65258;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64647 = conformed_args__61255__auto__;
var map__64647__$1 = cljs.core.__destructure_map(map__64647);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq64644){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64644));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65259 = arguments.length;
var i__4865__auto___65260 = (0);
while(true){
if((i__4865__auto___65260 < len__4864__auto___65259)){
args__4870__auto__.push((arguments[i__4865__auto___65260]));

var G__65261 = (i__4865__auto___65260 + (1));
i__4865__auto___65260 = G__65261;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64651 = conformed_args__61255__auto__;
var map__64651__$1 = cljs.core.__destructure_map(map__64651);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq64648){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64648));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65262 = arguments.length;
var i__4865__auto___65263 = (0);
while(true){
if((i__4865__auto___65263 < len__4864__auto___65262)){
args__4870__auto__.push((arguments[i__4865__auto___65263]));

var G__65264 = (i__4865__auto___65263 + (1));
i__4865__auto___65263 = G__65264;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64656 = conformed_args__61255__auto__;
var map__64656__$1 = cljs.core.__destructure_map(map__64656);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq64654){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64654));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65265 = arguments.length;
var i__4865__auto___65266 = (0);
while(true){
if((i__4865__auto___65266 < len__4864__auto___65265)){
args__4870__auto__.push((arguments[i__4865__auto___65266]));

var G__65267 = (i__4865__auto___65266 + (1));
i__4865__auto___65266 = G__65267;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64662 = conformed_args__61255__auto__;
var map__64662__$1 = cljs.core.__destructure_map(map__64662);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq64659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65268 = arguments.length;
var i__4865__auto___65269 = (0);
while(true){
if((i__4865__auto___65269 < len__4864__auto___65268)){
args__4870__auto__.push((arguments[i__4865__auto___65269]));

var G__65270 = (i__4865__auto___65269 + (1));
i__4865__auto___65269 = G__65270;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64667 = conformed_args__61255__auto__;
var map__64667__$1 = cljs.core.__destructure_map(map__64667);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq64664){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64664));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65271 = arguments.length;
var i__4865__auto___65272 = (0);
while(true){
if((i__4865__auto___65272 < len__4864__auto___65271)){
args__4870__auto__.push((arguments[i__4865__auto___65272]));

var G__65273 = (i__4865__auto___65272 + (1));
i__4865__auto___65272 = G__65273;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64671 = conformed_args__61255__auto__;
var map__64671__$1 = cljs.core.__destructure_map(map__64671);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq64668){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65274 = arguments.length;
var i__4865__auto___65275 = (0);
while(true){
if((i__4865__auto___65275 < len__4864__auto___65274)){
args__4870__auto__.push((arguments[i__4865__auto___65275]));

var G__65276 = (i__4865__auto___65275 + (1));
i__4865__auto___65275 = G__65276;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64675 = conformed_args__61255__auto__;
var map__64675__$1 = cljs.core.__destructure_map(map__64675);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq64672){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65277 = arguments.length;
var i__4865__auto___65278 = (0);
while(true){
if((i__4865__auto___65278 < len__4864__auto___65277)){
args__4870__auto__.push((arguments[i__4865__auto___65278]));

var G__65279 = (i__4865__auto___65278 + (1));
i__4865__auto___65278 = G__65279;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64679 = conformed_args__61255__auto__;
var map__64679__$1 = cljs.core.__destructure_map(map__64679);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq64678){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65280 = arguments.length;
var i__4865__auto___65281 = (0);
while(true){
if((i__4865__auto___65281 < len__4864__auto___65280)){
args__4870__auto__.push((arguments[i__4865__auto___65281]));

var G__65282 = (i__4865__auto___65281 + (1));
i__4865__auto___65281 = G__65282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64685 = conformed_args__61255__auto__;
var map__64685__$1 = cljs.core.__destructure_map(map__64685);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq64680){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65283 = arguments.length;
var i__4865__auto___65284 = (0);
while(true){
if((i__4865__auto___65284 < len__4864__auto___65283)){
args__4870__auto__.push((arguments[i__4865__auto___65284]));

var G__65285 = (i__4865__auto___65284 + (1));
i__4865__auto___65284 = G__65285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64687 = conformed_args__61255__auto__;
var map__64687__$1 = cljs.core.__destructure_map(map__64687);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq64686){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65286 = arguments.length;
var i__4865__auto___65287 = (0);
while(true){
if((i__4865__auto___65287 < len__4864__auto___65286)){
args__4870__auto__.push((arguments[i__4865__auto___65287]));

var G__65288 = (i__4865__auto___65287 + (1));
i__4865__auto___65287 = G__65288;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64691 = conformed_args__61255__auto__;
var map__64691__$1 = cljs.core.__destructure_map(map__64691);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq64690){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65289 = arguments.length;
var i__4865__auto___65290 = (0);
while(true){
if((i__4865__auto___65290 < len__4864__auto___65289)){
args__4870__auto__.push((arguments[i__4865__auto___65290]));

var G__65291 = (i__4865__auto___65290 + (1));
i__4865__auto___65290 = G__65291;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64693 = conformed_args__61255__auto__;
var map__64693__$1 = cljs.core.__destructure_map(map__64693);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq64692){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65292 = arguments.length;
var i__4865__auto___65293 = (0);
while(true){
if((i__4865__auto___65293 < len__4864__auto___65292)){
args__4870__auto__.push((arguments[i__4865__auto___65293]));

var G__65294 = (i__4865__auto___65293 + (1));
i__4865__auto___65293 = G__65294;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64696 = conformed_args__61255__auto__;
var map__64696__$1 = cljs.core.__destructure_map(map__64696);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq64695){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65295 = arguments.length;
var i__4865__auto___65296 = (0);
while(true){
if((i__4865__auto___65296 < len__4864__auto___65295)){
args__4870__auto__.push((arguments[i__4865__auto___65296]));

var G__65297 = (i__4865__auto___65296 + (1));
i__4865__auto___65296 = G__65297;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64698 = conformed_args__61255__auto__;
var map__64698__$1 = cljs.core.__destructure_map(map__64698);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq64697){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65298 = arguments.length;
var i__4865__auto___65299 = (0);
while(true){
if((i__4865__auto___65299 < len__4864__auto___65298)){
args__4870__auto__.push((arguments[i__4865__auto___65299]));

var G__65300 = (i__4865__auto___65299 + (1));
i__4865__auto___65299 = G__65300;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64701 = conformed_args__61255__auto__;
var map__64701__$1 = cljs.core.__destructure_map(map__64701);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq64700){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65301 = arguments.length;
var i__4865__auto___65302 = (0);
while(true){
if((i__4865__auto___65302 < len__4864__auto___65301)){
args__4870__auto__.push((arguments[i__4865__auto___65302]));

var G__65303 = (i__4865__auto___65302 + (1));
i__4865__auto___65302 = G__65303;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64703 = conformed_args__61255__auto__;
var map__64703__$1 = cljs.core.__destructure_map(map__64703);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq64702){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64702));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65304 = arguments.length;
var i__4865__auto___65305 = (0);
while(true){
if((i__4865__auto___65305 < len__4864__auto___65304)){
args__4870__auto__.push((arguments[i__4865__auto___65305]));

var G__65306 = (i__4865__auto___65305 + (1));
i__4865__auto___65305 = G__65306;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64706 = conformed_args__61255__auto__;
var map__64706__$1 = cljs.core.__destructure_map(map__64706);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq64704){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65307 = arguments.length;
var i__4865__auto___65308 = (0);
while(true){
if((i__4865__auto___65308 < len__4864__auto___65307)){
args__4870__auto__.push((arguments[i__4865__auto___65308]));

var G__65309 = (i__4865__auto___65308 + (1));
i__4865__auto___65308 = G__65309;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64708 = conformed_args__61255__auto__;
var map__64708__$1 = cljs.core.__destructure_map(map__64708);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq64707){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65310 = arguments.length;
var i__4865__auto___65311 = (0);
while(true){
if((i__4865__auto___65311 < len__4864__auto___65310)){
args__4870__auto__.push((arguments[i__4865__auto___65311]));

var G__65312 = (i__4865__auto___65311 + (1));
i__4865__auto___65311 = G__65312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64710 = conformed_args__61255__auto__;
var map__64710__$1 = cljs.core.__destructure_map(map__64710);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq64709){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65313 = arguments.length;
var i__4865__auto___65314 = (0);
while(true){
if((i__4865__auto___65314 < len__4864__auto___65313)){
args__4870__auto__.push((arguments[i__4865__auto___65314]));

var G__65315 = (i__4865__auto___65314 + (1));
i__4865__auto___65314 = G__65315;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64713 = conformed_args__61255__auto__;
var map__64713__$1 = cljs.core.__destructure_map(map__64713);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq64712){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65316 = arguments.length;
var i__4865__auto___65317 = (0);
while(true){
if((i__4865__auto___65317 < len__4864__auto___65316)){
args__4870__auto__.push((arguments[i__4865__auto___65317]));

var G__65318 = (i__4865__auto___65317 + (1));
i__4865__auto___65317 = G__65318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64716 = conformed_args__61255__auto__;
var map__64716__$1 = cljs.core.__destructure_map(map__64716);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq64714){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65319 = arguments.length;
var i__4865__auto___65320 = (0);
while(true){
if((i__4865__auto___65320 < len__4864__auto___65319)){
args__4870__auto__.push((arguments[i__4865__auto___65320]));

var G__65321 = (i__4865__auto___65320 + (1));
i__4865__auto___65320 = G__65321;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64718 = conformed_args__61255__auto__;
var map__64718__$1 = cljs.core.__destructure_map(map__64718);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq64717){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65322 = arguments.length;
var i__4865__auto___65323 = (0);
while(true){
if((i__4865__auto___65323 < len__4864__auto___65322)){
args__4870__auto__.push((arguments[i__4865__auto___65323]));

var G__65324 = (i__4865__auto___65323 + (1));
i__4865__auto___65323 = G__65324;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64720 = conformed_args__61255__auto__;
var map__64720__$1 = cljs.core.__destructure_map(map__64720);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq64719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65325 = arguments.length;
var i__4865__auto___65326 = (0);
while(true){
if((i__4865__auto___65326 < len__4864__auto___65325)){
args__4870__auto__.push((arguments[i__4865__auto___65326]));

var G__65327 = (i__4865__auto___65326 + (1));
i__4865__auto___65326 = G__65327;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64722 = conformed_args__61255__auto__;
var map__64722__$1 = cljs.core.__destructure_map(map__64722);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq64721){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65328 = arguments.length;
var i__4865__auto___65329 = (0);
while(true){
if((i__4865__auto___65329 < len__4864__auto___65328)){
args__4870__auto__.push((arguments[i__4865__auto___65329]));

var G__65330 = (i__4865__auto___65329 + (1));
i__4865__auto___65329 = G__65330;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64724 = conformed_args__61255__auto__;
var map__64724__$1 = cljs.core.__destructure_map(map__64724);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq64723){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65331 = arguments.length;
var i__4865__auto___65332 = (0);
while(true){
if((i__4865__auto___65332 < len__4864__auto___65331)){
args__4870__auto__.push((arguments[i__4865__auto___65332]));

var G__65333 = (i__4865__auto___65332 + (1));
i__4865__auto___65332 = G__65333;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64726 = conformed_args__61255__auto__;
var map__64726__$1 = cljs.core.__destructure_map(map__64726);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq64725){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65334 = arguments.length;
var i__4865__auto___65335 = (0);
while(true){
if((i__4865__auto___65335 < len__4864__auto___65334)){
args__4870__auto__.push((arguments[i__4865__auto___65335]));

var G__65336 = (i__4865__auto___65335 + (1));
i__4865__auto___65335 = G__65336;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64728 = conformed_args__61255__auto__;
var map__64728__$1 = cljs.core.__destructure_map(map__64728);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq64727){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65337 = arguments.length;
var i__4865__auto___65338 = (0);
while(true){
if((i__4865__auto___65338 < len__4864__auto___65337)){
args__4870__auto__.push((arguments[i__4865__auto___65338]));

var G__65339 = (i__4865__auto___65338 + (1));
i__4865__auto___65338 = G__65339;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__61255__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64730 = conformed_args__61255__auto__;
var map__64730__$1 = cljs.core.__destructure_map(map__64730);
var attrs__61256__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__61257__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__61258__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__61257__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__61257__auto__);
var attrs_value__61259__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__61256__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__61259__auto__], null),children__61257__auto____$1),css__61258__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq64729){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64729));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
