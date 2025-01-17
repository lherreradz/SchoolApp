(ns app.client
  (:require
    [app.application :refer [app]]
    [app.ui :as ui]
    [com.fulcrologic.fulcro.components :as comp]
    [com.fulcrologic.fulcro.application :as app]))

(defn ^:export init []
  (app/mount! app ui/Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh []
  ;; re-mounting will cause forced UI refresh
  (app/mount! app ui/Root "app")
  ;; 3.3.0+ Make sure dynamic queries are refreshed
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))

(comment
  (shadow/repl :main)
  (comp/get-query ui/Root)
  (cljs.pprint/pprint (app/current-state app))
  )
