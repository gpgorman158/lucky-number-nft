require 'nokogiri'
require 'open-uri'
require 'pry'

require_relative './nfts.rb'

class Scraper
  
  def get_page
    doc = Nokogiri::HTML(URI.open("https://www.istockphoto.com/photos/space-exploration"))
  end

  def get_nfts
    self.get_page.css(".GalleryItems-module__container___h2Tb5")
  end
  
  def make_nfts
    # self.get_nfts.css("a").first.text
    self.get_nfts.each do |item|
      nft = Nft.new
      binding.pry
    #   self.get_nfts.css('.styles__StyledLink-sc-l6elh8-0.ekTmzq.Asset--anchor')['href']
    #   nft.hyperlink = item.css(".styles__StyledLink-sc-l6elh8-0.ekTmzq.Asset--anchor")[0].text
      nft.image = item.css("GatewayAsset-module__assetDetails___CH7MK").css("a").attribute("href")
    #   nft.name = item.css(".css-z6gv93").text
    #   nft.price = item.css(".Overflowreact__OverflowContainer-sc-7qr9y8-0.jPSCbX.Price--amount").text
    end
  end

#   def print_courses
#     self.make_courses
#     Course.all.each do |course|
#       if course.title && course.title != ""
#         puts "Title: #{course.title}"
#         puts "  Schedule: #{course.schedule}"
#         puts "  Description: #{course.description}"
#       end
#     end
#   end
  
end
# puts Scraper.new.make_nfts