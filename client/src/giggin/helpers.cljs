(ns giggin.helpers
  (:require [giggin.services.api :refer [add-to-favorite]]))

(defn format-price
  [cents]
  (str " €" (/ cents 100)))


(defn toggleFavorite
  [id]
  (add-to-favorite "alon" id))
