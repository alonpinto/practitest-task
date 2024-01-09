(ns giggin.components.gig-list
  (:require [giggin.components.edit-dlg :refer [edit-dlg]]
            [giggin.helpers :refer [format-price toggleFavorite]]
            [giggin.services.api :refer [save-gig]]
            [giggin.state :as state]
            [reagent.core :as r]))





(defn gig-list
  []
  (let [add-to-order #(swap! state/orders update % inc)
        values (r/atom {:id nil :title "" :desc "" :price 0 :img "" :sold-out false})
        isEditMode (r/atom {:active false})
        toggle-modal (fn
                       [{:keys [active gig]}]
                       (swap! isEditMode assoc :active active)
                       (reset! values gig))
        save-gig (fn [{:keys [id title desc price img artist]}]
                   (save-gig id title desc price img artist)
                   (toggle-modal {:active false :gig {}}))]
    (fn []
      [:main
       [edit-dlg isEditMode values save-gig toggle-modal]
       [:div.gigs
        (for [{:keys [id img title price desc] :as gig} (vals @state/gigs)]
          [:main {:key id}
           [:div.gigs
            [:div.gig
             [:img.gig__artwork {:src img :alt title}]
             [:div.gig__body
              [:div.gig__title title]
              [:p.gig__price (format-price price)]
              [:div.row
               [:p.gig__desc desc]
               [:p.column.gap-2
                [:div.btn.float--right.tooltip
                 {:data-tooltip "Edit"
                  :on-click #(toggle-modal {:active true
                                            :gig gig})}
                 [:img
                  {:src  "img/edit-246.svg"}]]

                [:div.btn.float--right.tooltip
                 {:data-tooltip "Add to Favorite"
                  :on-click #(toggleFavorite id)}
                 [:img
                  {:src  "img/favorite-26.svg"}]]

                [:div.btn.btn--secondary.float--right.tooltip.hidden
                 {:data-tooltip "Add to order"
                  :on-click #(add-to-order id)}

                 [:i.icon.icon--plus]]]]]]]])]])))



   


