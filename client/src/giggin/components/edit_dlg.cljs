(ns giggin.components.edit-dlg)

(defn form-input
  [{:keys [id type value values]}]
  [:div.form__group
   [:label {:for id} id]
   [:input {:type type
            :id id
            :value value
            :on-change #(swap! values assoc (keyword id) (.. % -target -value))}]])

(defn edit-dlg
  [isEditMode values save-gig toggle-modal]
  [:div.modal (when (:active @isEditMode) {:class "active"})
   [:div.modal__overlay]
   [:div.modal__container
    [:div.modal__body
     [:h2 {:style {:padding "20px 10px "}} str "Edit Gig " (:title @values)]
     [form-input {:id "title"
                  :type "text"
                  :value (:title @values)
                  :values values}]
     [form-input {:id "desc"
                  :type "text"
                  :value (:desc @values)
                  :values values}]
     [form-input {:id "price"
                  :type "number"
                  :value (:price @values)
                  :values values}]]
    [:div.modal__footer
     [:button.btn.btn--link.float--right
      {:on-click #(toggle-modal {:active false :gig {}})}
      "Cancel"]
     [:button.btn.btn--secondary
        {:on-click #(save-gig @values)}
      "Save"]]]])