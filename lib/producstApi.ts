export default async function ProductsApi() {
  const apiUrl = 'https://fakestoreapi.com/products'

  const res = await fetch(apiUrl)
  const data = await res.json()

  await new Promise((resolve)=> {
    setTimeout(resolve, 3000)
  })

  return data
}