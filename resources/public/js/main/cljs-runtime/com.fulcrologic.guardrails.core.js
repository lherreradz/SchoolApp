goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__49910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49911__auto__ = (function (){var switch__49483__auto__ = (function (state_55420){
var state_val_55421 = (state_55420[(1)]);
if((state_val_55421 === (7))){
var inst_55416 = (state_55420[(2)]);
var state_55420__$1 = state_55420;
var statearr_55422_55511 = state_55420__$1;
(statearr_55422_55511[(2)] = inst_55416);

(statearr_55422_55511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (1))){
var state_55420__$1 = state_55420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55420__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55421 === (4))){
var inst_55418 = (state_55420[(2)]);
var state_55420__$1 = state_55420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55420__$1,inst_55418);
} else {
if((state_val_55421 === (6))){
var inst_55414 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_55420__$1 = state_55420;
var statearr_55424_55513 = state_55420__$1;
(statearr_55424_55513[(2)] = inst_55414);

(statearr_55424_55513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (3))){
var inst_55397 = (state_55420[(7)]);
var state_55420__$1 = state_55420;
if(cljs.core.truth_(inst_55397)){
var statearr_55426_55514 = state_55420__$1;
(statearr_55426_55514[(1)] = (5));

} else {
var statearr_55427_55515 = state_55420__$1;
(statearr_55427_55515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (12))){
var inst_55411 = (state_55420[(2)]);
var inst_55397 = inst_55411;
var state_55420__$1 = (function (){var statearr_55431 = state_55420;
(statearr_55431[(7)] = inst_55397);

return statearr_55431;
})();
var statearr_55432_55516 = state_55420__$1;
(statearr_55432_55516[(2)] = null);

(statearr_55432_55516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (2))){
var inst_55396 = (state_55420[(2)]);
var inst_55397 = inst_55396;
var state_55420__$1 = (function (){var statearr_55436 = state_55420;
(statearr_55436[(7)] = inst_55397);

return statearr_55436;
})();
var statearr_55437_55517 = state_55420__$1;
(statearr_55437_55517[(2)] = null);

(statearr_55437_55517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (11))){
var _ = (function (){var statearr_55438 = state_55420;
(statearr_55438[(4)] = cljs.core.rest((state_55420[(4)])));

return statearr_55438;
})();
var state_55420__$1 = state_55420;
var ex55429 = (state_55420__$1[(2)]);
var statearr_55440_55518 = state_55420__$1;
(statearr_55440_55518[(5)] = ex55429);


var statearr_55441_55519 = state_55420__$1;
(statearr_55441_55519[(1)] = (10));

(statearr_55441_55519[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (9))){
var inst_55409 = (state_55420[(2)]);
var state_55420__$1 = (function (){var statearr_55446 = state_55420;
(statearr_55446[(8)] = inst_55409);

return statearr_55446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55420__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55421 === (5))){
var state_55420__$1 = state_55420;
var statearr_55447_55520 = state_55420__$1;
(statearr_55447_55520[(2)] = null);

(statearr_55447_55520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (10))){
var inst_55400 = (state_55420[(2)]);
var state_55420__$1 = (function (){var statearr_55448 = state_55420;
(statearr_55448[(9)] = inst_55400);

return statearr_55448;
})();
var statearr_55449_55521 = state_55420__$1;
(statearr_55449_55521[(2)] = null);

(statearr_55449_55521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55421 === (8))){
var inst_55397 = (state_55420[(7)]);
var _ = (function (){var statearr_55450 = state_55420;
(statearr_55450[(4)] = cljs.core.cons((11),(state_55420[(4)])));

return statearr_55450;
})();
var inst_55406 = (inst_55397.cljs$core$IFn$_invoke$arity$0 ? inst_55397.cljs$core$IFn$_invoke$arity$0() : inst_55397.call(null));
var ___$1 = (function (){var statearr_55451 = state_55420;
(statearr_55451[(4)] = cljs.core.rest((state_55420[(4)])));

return statearr_55451;
})();
var state_55420__$1 = state_55420;
var statearr_55452_55522 = state_55420__$1;
(statearr_55452_55522[(2)] = inst_55406);

(statearr_55452_55522[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__49484__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__49484__auto____0 = (function (){
var statearr_55456 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55456[(0)] = com$fulcrologic$guardrails$core$state_machine__49484__auto__);

(statearr_55456[(1)] = (1));

return statearr_55456;
});
var com$fulcrologic$guardrails$core$state_machine__49484__auto____1 = (function (state_55420){
while(true){
var ret_value__49485__auto__ = (function (){try{while(true){
var result__49486__auto__ = switch__49483__auto__(state_55420);
if(cljs.core.keyword_identical_QMARK_(result__49486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49486__auto__;
}
break;
}
}catch (e55458){var ex__49487__auto__ = e55458;
var statearr_55460_55523 = state_55420;
(statearr_55460_55523[(2)] = ex__49487__auto__);


if(cljs.core.seq((state_55420[(4)]))){
var statearr_55461_55524 = state_55420;
(statearr_55461_55524[(1)] = cljs.core.first((state_55420[(4)])));

} else {
throw ex__49487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55525 = state_55420;
state_55420 = G__55525;
continue;
} else {
return ret_value__49485__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__49484__auto__ = function(state_55420){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__49484__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__49484__auto____1.call(this,state_55420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__49484__auto____0;
com$fulcrologic$guardrails$core$state_machine__49484__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__49484__auto____1;
return com$fulcrologic$guardrails$core$state_machine__49484__auto__;
})()
})();
var state__49912__auto__ = (function (){var statearr_55462 = f__49911__auto__();
(statearr_55462[(6)] = c__49910__auto__);

return statearr_55462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49912__auto__);
}));

return c__49910__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__55464 = data;
var map__55464__$1 = cljs.core.__destructure_map(map__55464);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55464__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__55469,spec,value){
var map__55470 = p__55469;
var map__55470__$1 = cljs.core.__destructure_map(map__55470);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_55526 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__55527 = (function (){var and__4251__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return vararg_QMARK_;
} else {
return and__4251__auto__;
}
})();
var varg_55528 = (cljs.core.truth_(vargs_QMARK__55527)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_55529 = (cljs.core.truth_(vargs_QMARK__55527)?((cljs.core.map_QMARK_(varg_55528))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_55528))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_55528))):value);
var valid_exception_55530 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_55529)){
} else {
var problem_55531 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_55529,expound_opts);
var description_55532 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_55531)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_55530,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_55532,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_55529], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_55532,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = callsite;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e55472){var e_55534 = e55472;
com.fulcrologic.guardrails.utils.report_exception(e_55534,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_55536 = (com.fulcrologic.guardrails.core.now_ms() - start_55526);
if((duration_55536 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_55536),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_55530))){
throw cljs.core.deref(valid_exception_55530);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
