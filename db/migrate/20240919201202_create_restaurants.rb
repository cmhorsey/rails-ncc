class CreateRestaurants < ActiveRecord::Migration[7.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.text :description
      t.json :images

      t.timestamps
    end
  end
end
