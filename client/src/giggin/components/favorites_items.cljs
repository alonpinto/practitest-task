(ns giggin.components.favorites-items
  (:require [giggin.helpers :refer [toggleFavorite]]
            [giggin.state :as state]))


(defn favorites-items
  []
  (let [remove-from-order #(swap! state/favorites dissoc %)]

    [:aside

     (if (empty? @state/favorites)

       [:div.empty
        [:div.title "You don't have any favorite"]
        [:div.subtitle "Click on a button to add favorite"]]
       [:div.order
        [:div.subtitle "favorites"]
        [:div.body
         (for [[id] @state/favorites]
           [:div.item
            [:div.img
             [:div.item.font__small  {:key id} (get-in @state/gigs [id :title])

              [:img {:src (get-in @state/gigs [id :img])
                     :alt (get-in @state/gigs [id :title])}]
              [:button.btn.btn--link.tooltip
               {:data-tooltip "Remove"
                :on-click #(toggleFavorite id)}
               [:i.icon.icon--cross]]]]])]])]))
