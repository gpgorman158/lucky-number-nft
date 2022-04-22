require 'nokogiri'
require 'open-uri'
require 'pry'
require 'csv'

def create_project_hash
  
  kickstarter = Nokogiri::HTML(URI.open("https://www.istockphoto.com/photos/space-exploration"))
  
  projects = []
  
  # kickstarter.css(".GalleryItems-module__container___h2Tb5").each do |project|
    
  #   title = project.css(".GatewayAsset-module__assetDetails___CH7MK").css("a").text
  #   binding.pry
  #   projects[title.to_sym] = {
  #     :image_link => project.css(".GatewayAsset-module__assetDetails___CH7MK").css("a").attribute("href").value,
  #   #   :description => project.css("p.bbcard_blurb").text,
  #   #   :location => project.css("ul.project-meta span.location-name").text,
  #   #   :percent_funded => project.css("ul.project-stats li.first.funded strong").text.gsub("%","").to_i
  #   }
  # end

  kickstarter.css(".GatewayAsset-module__imageContainer___OgAfi").each do |project|
    
    projects << {
      :title => project.css(".GatewayAsset-module__assetDetails___CH7MK").css("a").text,
      # :image => project.css(".GatewayAsset-module__assetDetails___CH7MK").css("a").attribute("href").value,
      # :title2 => project.css(".GatewayAsset-module__figcaption___vzRUT").text,
      :image2 => project.css("figure.GatewayAsset-module__figure___js9NH picture").css("img").attribute("src").value
      # :image2 => project.css("div.gallery-asset-schema div.gallery-asset-schema").css("meta[itemprop=contentUrl]")
    }
    
  
  end

  # return the projects hash
  projects

  
  CSV.open("myfiletest2.csv", "w") do |csv|
    projects.each do |project|
      csv << [project[:title], project[:image2]]
    end
  end
  
end

# create_project_hash()