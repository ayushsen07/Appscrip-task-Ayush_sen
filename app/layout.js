import './globals.css'

export const metadata = {
  title: 'mettā muse',
  description: "Discover mettä muse's premium collection of sustainable bags and fashion accessories. Explore our handcrafted designs featuring luxury materials and contemporary styles. Shop exclusive deals on designer accessories.",
  
  keywords: 'mettā muse, designer bags, luxury accessories, sustainable fashion, handcrafted bags, premium accessories, fashion accessories, designer accessories, eco-friendly fashion, contemporary style, online boutique, designer shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Mettä Muse',
            url: 'https://example.com/',
          }) }}
        />
      </body>
    </html>
  )
}