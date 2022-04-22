class Nft
    attr_accessor :hyperlink, :name, :image, :price

    @@all =[]

    def initialize
        @@all << self
    end
    
    def self.all
        @@all
    end
    
    def self.reset_all
        @@all.clear
    end
end