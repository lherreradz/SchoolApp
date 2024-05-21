(ns app.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defsc School [this {:school/keys [id name location student-count] :as props}]
  {:ident         (fn [] [:school/id (:school/id props)])
   :query         [:school/name :school/id :school/location :school/student-count]
   :initial-state (fn [{:keys [id name location student-count] :as params}] {:school/id id :school/name name :school/location location :school/student-count student-count})}
  (dom/li
    (dom/h5 (str name ", location: " location ", student count: " student-count))
    )
  )

(def ui-school (comp/factory School {:keyfn :school/id}))

(defsc SchoolList [this {:school-list/keys [id schools] :as props}]
  {:ident         (fn [] [:school-list/id (:school-list/id props)])
   :query         [:school-list/id {:school-list/schools (comp/get-query School)}]
   :initial-state (fn [{:keys [id]}]
                    {:school-list/id      id
                     :school-list/schools [
                                           (comp/get-initial-state School {:id            1
                                                                           :name          "Phillips"
                                                                           :location      "Av Sea 34"
                                                                           :student-count 339})
                                           (comp/get-initial-state School {:id            2
                                                                           :name          "Learning Land"
                                                                           :location      "Av Pencil 334"
                                                                           :student-count 539})
                                           (comp/get-initial-state School {:id            3
                                                                           :name          "Madrid"
                                                                           :location      "St Wolf 44"
                                                                           :student-count 249})]})}
  (dom/div
    (dom/h3 "Schools"
      )
    (dom/ul
      (map ui-school schools)
      )
    )
  )

(def ui-school-list (comp/factory SchoolList))

(defsc Root [this {:keys [list1]}]
  {:query         [{:list1 (comp/get-query SchoolList)}]
   :initial-state (fn [params] {:list1 (comp/get-initial-state SchoolList {:id :list1})})}
  (dom/div
    (ui-school-list list1)))


(comment
  (shadow/repl :main)
  (comp/get-query ui/Root)
  (cljs.pprint/pprint (app/current-state app))
  )
