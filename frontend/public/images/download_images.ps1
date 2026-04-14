$imageUrls = @(
  'https://www.vaishnohillsdairy.co.in/image/logo.jpg',
  'https://www.vaishnohillsdairy.co.in/image/beverage-whitener-classic-22.jpg',
  'https://www.vaishnohillsdairy.co.in/image/beverage-whitener-gold-22.jpg',
  'https://www.vaishnohillsdairy.co.in/image/dairy-whitener-premix-premium-20.jpg',
  'https://www.vaishnohillsdairy.co.in/image/dairy-whitener-premix-premium-sugarless-22.jpg',
  'https://www.vaishnohillsdairy.co.in/image/instant-whole-milk-powder-26.jpg',
  'https://www.vaishnohillsdairy.co.in/image/whole-milk-powder-cm-26.jpg',
  'https://www.vaishnohillsdairy.co.in/image/skimmed-milk-powder-cm.jpg',
  'https://www.vaishnohillsdairy.co.in/image/skimmed-milk-powder-bm.jpg',
  'https://www.vaishnohillsdairy.co.in/image/whey-powder.jpg',
  'https://www.vaishnohillsdairy.co.in/image/non-dairy-creamer-ndc-fat-powder-36-75.jpg',
  'https://www.vaishnohillsdairy.co.in/image/chai-special-6-dairy-mix-powder.jpg',
  'https://www.vaishnohillsdairy.co.in/image/dairy-mix-premium-18.jpg'
)

foreach ($url in $imageUrls) {
  $filename = [System.IO.Path]::GetFileName($url)
  try {
    Invoke-WebRequest -Uri $url -OutFile $filename -TimeoutSec 10
    Write-Host "Downloaded: $filename"
  } catch {
    Write-Host "Failed: $url - $_"
  }
}

Write-Host "Done!"
