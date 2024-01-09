(ns giggin.components.gig-item
  (:require [giggin.helpers :refer [format-price toggleFavorite]]
            [giggin.state :as state]))



(defn gig-item
  [id img title price desc]
  (let [add-to-order #(swap! state/orders update % inc)]
    (fn []
      [:main
       [:div.gigs
        [:div.gig
         [:img.gig__artwork {:src img :alt title}]
         [:div.gig__body
          [:div.gig__title
           [:div.btn.btn--primary.float--right.tooltip
            {:data-tooltip "Add to order"
             :on-click #(add-to-order id)}
            [:i.icon.icon--plus]] title]
          [:p.gig__price (format-price price)]
          [:div.row
           [:p.gig__desc desc]
           [:p.column.gap-2

            [:img.btn.btn--secondary.float--right.tooltip {:src "img/giggin-logo.svg"}
             {:data-tooltip "Edit"
              :on-click #(add-to-order id)}
             [:i.icon.icon--plus]]

            [:div.btn.btn--secondary.float--right.tooltip
             {:data-tooltip "Add to Favorite"
              :on-click #(toggleFavorite id)}
             [:i.icon.icon--plus]]]]]]]])))





 