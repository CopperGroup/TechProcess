import Image from "next/image"
import AddToCart from "../shared/AddToCart"
import Link from "next/link"
import LikeButton from "../interface/LikeButton"
import { Store } from "@/constants/store"

interface Props {
  id: string
  productId: string
  email: string
  priceToShow: number
  price: number
  name: string
  imageUrl: string
  description: string
  url: string
  likedBy: {
    _id: string
    email: string
  }[]
}

const ProductCard = ({
  id,
  productId,
  email,
  priceToShow,
  price,
  name,
  imageUrl,
  description,
  url,
  likedBy,
}: Props) => {
  return (
    <article
      className="w-full bg-white rounded-md shadow-sm overflow-hidden border border-gray-100"
    >
      <Link href={`/catalog/${id}`} prefetch={false} className="block group">
        <div className="relative aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg"}
            fill
            alt={name}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <LikeButton
              likedBy={JSON.stringify(likedBy)}
              productId={productId}
              productName={name}
              value={priceToShow}
              email={email}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base-semibold text-gray-800 mb-1 truncate group-hover:text-[#C2AD8F] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-small-regular text-gray-500 mb-2 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <div>
              {price !== priceToShow && (
                <p className="text-small-regular text-gray-400 line-through">
                  {Store.currency_sign}
                  {price}
                </p>
              )}
              <p className="text-base-semibold text-[#C2AD8F]">
                {Store.currency_sign}
                {priceToShow}
              </p>
            </div>
            <AddToCart id={id} image={imageUrl} name={name} price={priceToShow} priceWithoutDiscount={price} />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard

