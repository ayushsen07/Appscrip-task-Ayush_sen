import './globals.css'

export const metadata = {
  title: 'mettä muse',
  description: 'Explore our wide range of quality products including bags, accessories, and more. Shop the latest collection with great deals.',
  
  keywords: 'products, shopping, bags, accessories, online store',
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