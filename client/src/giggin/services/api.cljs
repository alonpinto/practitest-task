(ns giggin.services.api
  (:require [ajax.core :refer [GET POST PUT]]
            [giggin.state :as state]))

(defn index-by
  [key coll]
  "Transfomr a coll to a map with a given key as a lookup value"
  (->> coll
       (map (juxt key identity))
       (into {})))

(defn handler-add-to-favorite [response]
  (reset! state/favorites (index-by :id response)))


(defn handler [response]
  (reset! state/gigs (index-by :id response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn fetch-gigs
  []
  (GET "http://localhost:3005/gigs"
    {:handler handler
     :error-handler error-handler
     :response-format :json
     :keywords? true}))


(defn handler-fetch-favorites [response]
  (reset! state/favorites (index-by :id response)))




(defn save-gig
  [id title desc price img artist]
  (PUT "http://localhost:3005/gigs"
    {:format :json
     :params {:id id :title title :desc desc :price price :img img :artist artist}
     :handler handler
     :error-handler error-handler
     :response-format :json
     :keywords? true}))





(defn fetch-favorites
  []
  (GET "http://localhost:3005/favorites"
    {:handler handler-fetch-favorites
     :error-handler error-handler
     :response-format :json
     :keywords? true}))






(defn add-to-favorite
  [user id]
  (POST "http://localhost:3005/favorite/toggle"
    {:format :json
     :params {:id id :user user}
     :handler handler-add-to-favorite
     :error-handler error-handler
     :response-format :json
     :keywords? true}))