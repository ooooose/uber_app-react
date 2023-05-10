class Food < ApplicationRecord
  belongs_to :restaurnt
  belongs_to :order, optional: true
  has_one :line_food
end
