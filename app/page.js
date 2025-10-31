import { Header } from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
    // console.log('api response is',res);
    
    if (!res.ok) throw new Error('Failed to fetch products')
    const data = await res.json()
    console.log("response is ",data);

    return data.map(p => ({ id: p.id, image: p.image, title: p.title, inStock: true }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid products={products} />
        <Footer />
      </main>
    </>
  )
}