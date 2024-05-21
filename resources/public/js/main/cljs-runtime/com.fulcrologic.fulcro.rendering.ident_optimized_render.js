goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__59573 = app__$1;
var map__59573__$1 = cljs.core.__destructure_map(map__59573);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__59574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__59575 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59574,G__59575) : com.fulcrologic.fulcro.components.computed.call(null,G__59574,G__59575));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1697428695,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__59580 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__59580) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__59580));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1236869256,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59581 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59582 = null;
var count__59583 = (0);
var i__59584 = (0);
while(true){
if((i__59584 < count__59583)){
var c = chunk__59582.cljs$core$IIndexed$_nth$arity$2(null,i__59584);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59886 = seq__59581;
var G__59887 = chunk__59582;
var G__59888 = count__59583;
var G__59889 = (i__59584 + (1));
seq__59581 = G__59886;
chunk__59582 = G__59887;
count__59583 = G__59888;
i__59584 = G__59889;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59581);
if(temp__5753__auto__){
var seq__59581__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59581__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59581__$1);
var G__59890 = cljs.core.chunk_rest(seq__59581__$1);
var G__59891 = c__4679__auto__;
var G__59892 = cljs.core.count(c__4679__auto__);
var G__59893 = (0);
seq__59581 = G__59890;
chunk__59582 = G__59891;
count__59583 = G__59892;
i__59584 = G__59893;
continue;
} else {
var c = cljs.core.first(seq__59581__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59895 = cljs.core.next(seq__59581__$1);
var G__59896 = null;
var G__59897 = (0);
var G__59898 = (0);
seq__59581 = G__59895;
chunk__59582 = G__59896;
count__59583 = G__59897;
i__59584 = G__59898;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__59585 = app__$1;
var map__59585__$1 = cljs.core.__destructure_map(map__59585);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59586 = cljs.core.deref(runtime_atom);
var map__59586__$1 = cljs.core.__destructure_map(map__59586);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59586__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59587 = indexes;
var map__59587__$1 = cljs.core.__destructure_map(map__59587);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59587__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59587__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59587__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__59590 = cljs.core.seq(classes);
var chunk__59591 = null;
var count__59592 = (0);
var i__59593 = (0);
while(true){
if((i__59593 < count__59592)){
var class$ = chunk__59591.cljs$core$IIndexed$_nth$arity$2(null,i__59593);
var seq__59621_59899 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59623_59900 = null;
var count__59624_59901 = (0);
var i__59625_59902 = (0);
while(true){
if((i__59625_59902 < count__59624_59901)){
var component_59903 = chunk__59623_59900.cljs$core$IIndexed$_nth$arity$2(null,i__59625_59902);
var component_ident_59905 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59903) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59903));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59905,component_59903);


var G__59906 = seq__59621_59899;
var G__59907 = chunk__59623_59900;
var G__59908 = count__59624_59901;
var G__59909 = (i__59625_59902 + (1));
seq__59621_59899 = G__59906;
chunk__59623_59900 = G__59907;
count__59624_59901 = G__59908;
i__59625_59902 = G__59909;
continue;
} else {
var temp__5753__auto___59910 = cljs.core.seq(seq__59621_59899);
if(temp__5753__auto___59910){
var seq__59621_59911__$1 = temp__5753__auto___59910;
if(cljs.core.chunked_seq_QMARK_(seq__59621_59911__$1)){
var c__4679__auto___59912 = cljs.core.chunk_first(seq__59621_59911__$1);
var G__59913 = cljs.core.chunk_rest(seq__59621_59911__$1);
var G__59914 = c__4679__auto___59912;
var G__59915 = cljs.core.count(c__4679__auto___59912);
var G__59916 = (0);
seq__59621_59899 = G__59913;
chunk__59623_59900 = G__59914;
count__59624_59901 = G__59915;
i__59625_59902 = G__59916;
continue;
} else {
var component_59917 = cljs.core.first(seq__59621_59911__$1);
var component_ident_59918 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59917) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59917));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59918,component_59917);


var G__59919 = cljs.core.next(seq__59621_59911__$1);
var G__59920 = null;
var G__59921 = (0);
var G__59922 = (0);
seq__59621_59899 = G__59919;
chunk__59623_59900 = G__59920;
count__59624_59901 = G__59921;
i__59625_59902 = G__59922;
continue;
}
} else {
}
}
break;
}


var G__59923 = seq__59590;
var G__59924 = chunk__59591;
var G__59925 = count__59592;
var G__59926 = (i__59593 + (1));
seq__59590 = G__59923;
chunk__59591 = G__59924;
count__59592 = G__59925;
i__59593 = G__59926;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59590);
if(temp__5753__auto__){
var seq__59590__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59590__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59590__$1);
var G__59927 = cljs.core.chunk_rest(seq__59590__$1);
var G__59928 = c__4679__auto__;
var G__59929 = cljs.core.count(c__4679__auto__);
var G__59930 = (0);
seq__59590 = G__59927;
chunk__59591 = G__59928;
count__59592 = G__59929;
i__59593 = G__59930;
continue;
} else {
var class$ = cljs.core.first(seq__59590__$1);
var seq__59631_59931 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59633_59932 = null;
var count__59634_59933 = (0);
var i__59635_59934 = (0);
while(true){
if((i__59635_59934 < count__59634_59933)){
var component_59935 = chunk__59633_59932.cljs$core$IIndexed$_nth$arity$2(null,i__59635_59934);
var component_ident_59937 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59935) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59935));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59937,component_59935);


var G__59938 = seq__59631_59931;
var G__59939 = chunk__59633_59932;
var G__59940 = count__59634_59933;
var G__59941 = (i__59635_59934 + (1));
seq__59631_59931 = G__59938;
chunk__59633_59932 = G__59939;
count__59634_59933 = G__59940;
i__59635_59934 = G__59941;
continue;
} else {
var temp__5753__auto___59942__$1 = cljs.core.seq(seq__59631_59931);
if(temp__5753__auto___59942__$1){
var seq__59631_59943__$1 = temp__5753__auto___59942__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59631_59943__$1)){
var c__4679__auto___59944 = cljs.core.chunk_first(seq__59631_59943__$1);
var G__59945 = cljs.core.chunk_rest(seq__59631_59943__$1);
var G__59946 = c__4679__auto___59944;
var G__59947 = cljs.core.count(c__4679__auto___59944);
var G__59948 = (0);
seq__59631_59931 = G__59945;
chunk__59633_59932 = G__59946;
count__59634_59933 = G__59947;
i__59635_59934 = G__59948;
continue;
} else {
var component_59949 = cljs.core.first(seq__59631_59943__$1);
var component_ident_59950 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59949) : com.fulcrologic.fulcro.components.get_ident.call(null,component_59949));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59950,component_59949);


var G__59951 = cljs.core.next(seq__59631_59943__$1);
var G__59952 = null;
var G__59953 = (0);
var G__59954 = (0);
seq__59631_59931 = G__59951;
chunk__59633_59932 = G__59952;
count__59634_59933 = G__59953;
i__59635_59934 = G__59954;
continue;
}
} else {
}
}
break;
}


var G__59955 = cljs.core.next(seq__59590__$1);
var G__59956 = null;
var G__59957 = (0);
var G__59958 = (0);
seq__59590 = G__59955;
chunk__59591 = G__59956;
count__59592 = G__59957;
i__59593 = G__59958;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__59644 = app__$1;
var map__59644__$1 = cljs.core.__destructure_map(map__59644);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59644__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59645 = cljs.core.deref(runtime_atom);
var map__59645__$1 = cljs.core.__destructure_map(map__59645);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59645__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59646 = indexes;
var map__59646__$1 = cljs.core.__destructure_map(map__59646);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59646__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59646__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59642_SHARP_,p2__59643_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59642_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59643_SHARP_) : class__GT_components.call(null,p2__59643_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__59661 = app__$1;
var map__59661__$1 = cljs.core.__destructure_map(map__59661);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59661__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59661__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59663 = cljs.core.deref(runtime_atom);
var map__59663__$1 = cljs.core.__destructure_map(map__59663);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59664 = indexes;
var map__59664__$1 = cljs.core.__destructure_map(map__59664);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59679 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59679__$1 = cljs.core.__destructure_map(map__59679);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59679__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59679__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59708_59962 = cljs.core.seq(limited_to_render);
var chunk__59710_59963 = null;
var count__59711_59964 = (0);
var i__59712_59965 = (0);
while(true){
if((i__59712_59965 < count__59711_59964)){
var c_59966 = chunk__59710_59963.cljs$core$IIndexed$_nth$arity$2(null,i__59712_59965);
var ident_59967 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59966) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59966));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59967,c_59966);


var G__59968 = seq__59708_59962;
var G__59969 = chunk__59710_59963;
var G__59970 = count__59711_59964;
var G__59971 = (i__59712_59965 + (1));
seq__59708_59962 = G__59968;
chunk__59710_59963 = G__59969;
count__59711_59964 = G__59970;
i__59712_59965 = G__59971;
continue;
} else {
var temp__5753__auto___59972 = cljs.core.seq(seq__59708_59962);
if(temp__5753__auto___59972){
var seq__59708_59973__$1 = temp__5753__auto___59972;
if(cljs.core.chunked_seq_QMARK_(seq__59708_59973__$1)){
var c__4679__auto___59974 = cljs.core.chunk_first(seq__59708_59973__$1);
var G__59975 = cljs.core.chunk_rest(seq__59708_59973__$1);
var G__59976 = c__4679__auto___59974;
var G__59977 = cljs.core.count(c__4679__auto___59974);
var G__59978 = (0);
seq__59708_59962 = G__59975;
chunk__59710_59963 = G__59976;
count__59711_59964 = G__59977;
i__59712_59965 = G__59978;
continue;
} else {
var c_59979 = cljs.core.first(seq__59708_59973__$1);
var ident_59981 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59979) : com.fulcrologic.fulcro.components.get_ident.call(null,c_59979));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59981,c_59979);


var G__59982 = cljs.core.next(seq__59708_59973__$1);
var G__59983 = null;
var G__59984 = (0);
var G__59985 = (0);
seq__59708_59962 = G__59982;
chunk__59710_59963 = G__59983;
count__59711_59964 = G__59984;
i__59712_59965 = G__59985;
continue;
}
} else {
}
}
break;
}

var seq__59809 = cljs.core.seq(limited_idents);
var chunk__59810 = null;
var count__59811 = (0);
var i__59812 = (0);
while(true){
if((i__59812 < count__59811)){
var i = chunk__59810.cljs$core$IIndexed$_nth$arity$2(null,i__59812);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59986 = seq__59809;
var G__59987 = chunk__59810;
var G__59988 = count__59811;
var G__59989 = (i__59812 + (1));
seq__59809 = G__59986;
chunk__59810 = G__59987;
count__59811 = G__59988;
i__59812 = G__59989;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59809);
if(temp__5753__auto__){
var seq__59809__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59809__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59809__$1);
var G__59990 = cljs.core.chunk_rest(seq__59809__$1);
var G__59991 = c__4679__auto__;
var G__59992 = cljs.core.count(c__4679__auto__);
var G__59993 = (0);
seq__59809 = G__59990;
chunk__59810 = G__59991;
count__59811 = G__59992;
i__59812 = G__59993;
continue;
} else {
var i = cljs.core.first(seq__59809__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59994 = cljs.core.next(seq__59809__$1);
var G__59995 = null;
var G__59996 = (0);
var G__59997 = (0);
seq__59809 = G__59994;
chunk__59810 = G__59995;
count__59811 = G__59996;
i__59812 = G__59997;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__59856 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59856__$1 = cljs.core.__destructure_map(map__59856);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59856__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59856__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59859_59999 = cljs.core.seq(all_idents);
var chunk__59860_60000 = null;
var count__59861_60001 = (0);
var i__59862_60002 = (0);
while(true){
if((i__59862_60002 < count__59861_60001)){
var i_60003 = chunk__59860_60000.cljs$core$IIndexed$_nth$arity$2(null,i__59862_60002);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60003);


var G__60004 = seq__59859_59999;
var G__60005 = chunk__59860_60000;
var G__60006 = count__59861_60001;
var G__60007 = (i__59862_60002 + (1));
seq__59859_59999 = G__60004;
chunk__59860_60000 = G__60005;
count__59861_60001 = G__60006;
i__59862_60002 = G__60007;
continue;
} else {
var temp__5753__auto___60008 = cljs.core.seq(seq__59859_59999);
if(temp__5753__auto___60008){
var seq__59859_60009__$1 = temp__5753__auto___60008;
if(cljs.core.chunked_seq_QMARK_(seq__59859_60009__$1)){
var c__4679__auto___60010 = cljs.core.chunk_first(seq__59859_60009__$1);
var G__60011 = cljs.core.chunk_rest(seq__59859_60009__$1);
var G__60012 = c__4679__auto___60010;
var G__60013 = cljs.core.count(c__4679__auto___60010);
var G__60014 = (0);
seq__59859_59999 = G__60011;
chunk__59860_60000 = G__60012;
count__59861_60001 = G__60013;
i__59862_60002 = G__60014;
continue;
} else {
var i_60016 = cljs.core.first(seq__59859_60009__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60016);


var G__60017 = cljs.core.next(seq__59859_60009__$1);
var G__60018 = null;
var G__60019 = (0);
var G__60020 = (0);
seq__59859_59999 = G__60017;
chunk__59860_60000 = G__60018;
count__59861_60001 = G__60019;
i__59862_60002 = G__60020;
continue;
}
} else {
}
}
break;
}

var seq__59866 = cljs.core.seq(extra_to_force);
var chunk__59867 = null;
var count__59868 = (0);
var i__59869 = (0);
while(true){
if((i__59869 < count__59868)){
var c = chunk__59867.cljs$core$IIndexed$_nth$arity$2(null,i__59869);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__60021 = seq__59866;
var G__60022 = chunk__59867;
var G__60023 = count__59868;
var G__60024 = (i__59869 + (1));
seq__59866 = G__60021;
chunk__59867 = G__60022;
count__59868 = G__60023;
i__59869 = G__60024;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59866);
if(temp__5753__auto__){
var seq__59866__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59866__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59866__$1);
var G__60025 = cljs.core.chunk_rest(seq__59866__$1);
var G__60026 = c__4679__auto__;
var G__60027 = cljs.core.count(c__4679__auto__);
var G__60028 = (0);
seq__59866 = G__60025;
chunk__59867 = G__60026;
count__59868 = G__60027;
i__59869 = G__60028;
continue;
} else {
var c = cljs.core.first(seq__59866__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__60030 = cljs.core.next(seq__59866__$1);
var G__60031 = null;
var G__60032 = (0);
var G__60033 = (0);
seq__59866 = G__60030;
chunk__59867 = G__60031;
count__59868 = G__60032;
i__59869 = G__60033;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__59875 = arguments.length;
switch (G__59875) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59879){
var map__59880 = p__59879;
var map__59880__$1 = cljs.core.__destructure_map(map__59880);
var options = map__59880__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e59881){var e = e59881;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-762170385,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
