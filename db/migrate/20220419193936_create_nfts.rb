class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|
      t.string :title
      t.string :image
      t.integer :value

      t.timestamps
    end
  end
end
