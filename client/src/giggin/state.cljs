(ns giggin.state
  (:require [reagent.core :as r]))

(def orders (r/atom {}))

(def favorites (r/atom []))

(def gigs (r/atom {}))



