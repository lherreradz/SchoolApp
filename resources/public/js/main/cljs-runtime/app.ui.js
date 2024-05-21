goog.provide('app.ui');

var options__45850__auto___53751 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__53709){
var map__53710 = p__53709;
var map__53710__$1 = cljs.core.__destructure_map(map__53710);
var props = map__53710__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword("school","id","school/id",-274854208));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword("school","name","school/name",600120221));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword("school","location","school/location",580545616));
var student_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword("school","student-count","school/student-count",-1702654794));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("school","id","school/id",-274854208),new cljs.core.Keyword("school","id","school/id",-274854208).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("school","name","school/name",600120221),new cljs.core.Keyword("school","id","school/id",-274854208),new cljs.core.Keyword("school","location","school/location",580545616),new cljs.core.Keyword("school","student-count","school/student-count",-1702654794)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__53711){
var map__53712 = p__53711;
var map__53712__$1 = cljs.core.__destructure_map(map__53712);
var params = map__53712__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var student_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"student-count","student-count",1440954650));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("school","id","school/id",-274854208),id,new cljs.core.Keyword("school","name","school/name",600120221),name,new cljs.core.Keyword("school","location","school/location",580545616),location,new cljs.core.Keyword("school","student-count","school/student-count",-1702654794),student_count], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_School(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__53713 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__53713__$1 = cljs.core.__destructure_map(map__53713);
var props = map__53713__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword("school","id","school/id",-274854208));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword("school","name","school/name",600120221));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword("school","location","school/location",580545616));
var student_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword("school","student-count","school/student-count",-1702654794));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__46726__auto__ = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__46726__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", location: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location),", student count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(student_count)].join('');
var G__53714 = a__46726__auto__;
if(cljs.core.map_QMARK_(a__46726__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:11"], null),G__53714], 0));
} else {
return G__53714;
}
})()], null),null);
var G__53715 = a__46726__auto__;
if(cljs.core.map_QMARK_(a__46726__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:10"], null),G__53715], 0));
} else {
return G__53715;
}
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.School !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.School = (function app$ui$School(props__45851__auto__){
var this__45852__auto__ = this;
var temp__5751__auto___53752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45850__auto___53751,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___53752)){
var init_state__45853__auto___53753 = temp__5751__auto___53752;
(this__45852__auto__.state = (function (){var obj53717 = ({"fulcro$state":(function (){var G__53718 = this__45852__auto__;
var G__53719 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45851__auto__,"fulcro$value"));
return (init_state__45853__auto___53753.cljs$core$IFn$_invoke$arity$2 ? init_state__45853__auto___53753.cljs$core$IFn$_invoke$arity$2(G__53718,G__53719) : init_state__45853__auto___53753.call(null,G__53718,G__53719));
})()});
return obj53717;
})());
} else {
(this__45852__auto__.state = (function (){var obj53721 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj53721;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.School,new cljs.core.Keyword("app.ui","School","app.ui/School",1275421867),options__45850__auto___53751);
app.ui.ui_school = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.School,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("school","id","school/id",-274854208)], null));

var options__45850__auto___53754 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__53722){
var map__53723 = p__53722;
var map__53723__$1 = cljs.core.__destructure_map(map__53723);
var props = map__53723__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53723__$1,new cljs.core.Keyword("school-list","id","school-list/id",1914251997));
var schools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53723__$1,new cljs.core.Keyword("school-list","schools","school-list/schools",800274691));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("school-list","id","school-list/id",1914251997),new cljs.core.Keyword("school-list","id","school-list/id",1914251997).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("school-list","id","school-list/id",1914251997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("school-list","schools","school-list/schools",800274691),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.School)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(p__53724){
var map__53725 = p__53724;
var map__53725__$1 = cljs.core.__destructure_map(map__53725);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53725__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("school-list","id","school-list/id",1914251997),id,new cljs.core.Keyword("school-list","schools","school-list/schools",800274691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53726 = app.ui.School;
var G__53727 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Phillips",new cljs.core.Keyword(null,"location","location",1815599388),"Av Sea 34",new cljs.core.Keyword(null,"student-count","student-count",1440954650),(339)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__53726,G__53727) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__53726,G__53727));
})(),(function (){var G__53728 = app.ui.School;
var G__53729 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Learning Land",new cljs.core.Keyword(null,"location","location",1815599388),"Av Pencil 334",new cljs.core.Keyword(null,"student-count","student-count",1440954650),(539)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__53728,G__53729) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__53728,G__53729));
})(),(function (){var G__53730 = app.ui.School;
var G__53731 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Madrid",new cljs.core.Keyword(null,"location","location",1815599388),"St Wolf 44",new cljs.core.Keyword(null,"student-count","student-count",1440954650),(249)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__53730,G__53731) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__53730,G__53731));
})()], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_SchoolList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__53732 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__53732__$1 = cljs.core.__destructure_map(map__53732);
var props = map__53732__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword("school-list","id","school-list/id",1914251997));
var schools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword("school-list","schools","school-list/schools",800274691));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__46726__auto__ = com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"data-fulcro-source": "app.ui:36"}),"Schools"]);
var G__53733 = a__46726__auto__;
if(cljs.core.map_QMARK_(a__46726__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:35"], null),G__53733], 0));
} else {
return G__53733;
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__46726__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_school,schools);
var G__53734 = a__46726__auto__;
if(cljs.core.map_QMARK_(a__46726__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:38"], null),G__53734], 0));
} else {
return G__53734;
}
})()], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.SchoolList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.SchoolList = (function app$ui$SchoolList(props__45851__auto__){
var this__45852__auto__ = this;
var temp__5751__auto___53755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45850__auto___53754,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___53755)){
var init_state__45853__auto___53756 = temp__5751__auto___53755;
(this__45852__auto__.state = (function (){var obj53736 = ({"fulcro$state":(function (){var G__53737 = this__45852__auto__;
var G__53738 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45851__auto__,"fulcro$value"));
return (init_state__45853__auto___53756.cljs$core$IFn$_invoke$arity$2 ? init_state__45853__auto___53756.cljs$core$IFn$_invoke$arity$2(G__53737,G__53738) : init_state__45853__auto___53756.call(null,G__53737,G__53738));
})()});
return obj53736;
})());
} else {
(this__45852__auto__.state = (function (){var obj53740 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj53740;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.SchoolList,new cljs.core.Keyword("app.ui","SchoolList","app.ui/SchoolList",-85441926),options__45850__auto___53754);
app.ui.ui_school_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.SchoolList);

var options__45850__auto___53757 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list1","list1",1526447228),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.SchoolList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list1","list1",1526447228),(function (){var G__53741 = app.ui.SchoolList;
var G__53742 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"list1","list1",1526447228)], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__53741,G__53742) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__53741,G__53742));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__53743 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__53743__$1 = cljs.core.__destructure_map(map__53743);
var list1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"list1","list1",1526447228));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__46726__auto__ = (app.ui.ui_school_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_school_list.cljs$core$IFn$_invoke$arity$1(list1) : app.ui.ui_school_list.call(null,list1));
var G__53744 = a__46726__auto__;
if(cljs.core.map_QMARK_(a__46726__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:49"], null),G__53744], 0));
} else {
return G__53744;
}
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__45851__auto__){
var this__45852__auto__ = this;
var temp__5751__auto___53758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45850__auto___53757,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___53758)){
var init_state__45853__auto___53759 = temp__5751__auto___53758;
(this__45852__auto__.state = (function (){var obj53746 = ({"fulcro$state":(function (){var G__53747 = this__45852__auto__;
var G__53748 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__45851__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__45851__auto__,"fulcro$value"));
return (init_state__45853__auto___53759.cljs$core$IFn$_invoke$arity$2 ? init_state__45853__auto___53759.cljs$core$IFn$_invoke$arity$2(G__53747,G__53748) : init_state__45853__auto___53759.call(null,G__53747,G__53748));
})()});
return obj53746;
})());
} else {
(this__45852__auto__.state = (function (){var obj53750 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj53750;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__45850__auto___53757);

//# sourceMappingURL=app.ui.js.map
