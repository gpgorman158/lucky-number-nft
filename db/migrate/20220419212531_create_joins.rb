class CreateJoins < ActiveRecord::Migration[7.0]
  def change
    create_table :joins do |t|
      t.references :nft
      t.references :user

      t.timestamps
    end
  end
end
