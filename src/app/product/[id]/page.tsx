import { Metadata } from "next";



async function  fetchProduct(id:number){
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: {
            revalidate:60*60*12,
            tags:[`product_${id}`]
        }
    });

    if(!res.ok){
        throw new Error("Something Went Wrong.")
    }

    const response = await res.json();
    if(response){
    return response
    }
    return null
}


type Props = {
    params: {id:number}
}

export async function generateMetadata({params}: Props):Promise<Metadata> {
    const response = await fetchProduct(params.id)

    const title =response?.title ?? "XYZ Eccommerce Site"
    const description =response?.description ?? "XYZ Eccommerce Site"
    const image = response?.thumbnail ?? "https://images.pexels.com/photos/19119918/pexels-photo-19119918/free-photo-of-portrait-of-man-wearing-white-shirt-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"


    return {
        title:title,
        description: description,
        keywords: "XYZ ",
        openGraph: {
            title:title,
            description: description,
             images: [image],
             url:"https://xyz.com/product/"+params.id
        },
        twitter: {
            title:title,
            description: description,
             images: [image],
             card:"summary_large_image"
        }

    }


}




const product = async ({params}: Props) => {
    const response = await fetchProduct(params.id)

  return (
    <div className='h-screen flex bg-gray-100 justify-center items-center flex-col'>
        <h1 className="text-5xl font-bold text-blue-500"> {response?.title}</h1>
        <p className="text-black">{response?.description}</p>
        </div>
  )
}

export default product