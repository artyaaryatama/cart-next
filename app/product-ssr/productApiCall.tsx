import ProductsApi from "@/lib/producstApi"

interface ProductData {
  id: number;
  title: string
  category: string
  image: string
  price: number
}

export default async function ProductsPage() {
  
  const productList = await ProductsApi()

  return (
    <div>
      <ul>
        {
          productList.map((item: ProductData)  => (
            <li key={item.id}> {item.id}. {item.title}</li>

          ))
        }
      </ul>


    </div>
  )
}