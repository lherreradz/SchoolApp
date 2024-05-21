(ns app.mutations
  (:require [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]))

(defmutation delete-person
  "Mutation: Delete the school with `name` from the list with `list-name`"
  [{list-id :school-list/id school-id :period/id}]          ; (1)
  (action [{:keys [state]}]                                 ; (2)
    (let [path [:list1 :list/people]
    old-list (get-in @state path)
    new-list (vec (filter #(not= (:school/id %) school-id) old-list)) ]
(swap! state assoc-in path new-list) ) ) )
