(ns giggin.core
  (:require [giggin.components.footer :refer [footer]]
            [giggin.components.gig-list :refer [gig-list]]
            [giggin.components.header :refer [header]]
            [giggin.components.orders :refer [orders]]
            [giggin.services.api :as api]
            [reagent.core :as r]))

(defn app
  []
  [:div.container
   [header]
   [gig-list]
   [orders]
   [footer]])

(defn ^:export main
  []
  (api/fetch-gigs)
  (api/fetch-favorites)
  (r/render
   [app]
   (.getElementById js/document "app")))
