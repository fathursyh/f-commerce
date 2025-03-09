import type { ProductType } from "src/models/productType";
import { localCurency } from "src/stores/utility";

type Props = {
    data: ProductType
}
export default function ProductCard({data} : Props) {

    return (
        <div className="card bg-base-100 card-sm w-80 shadow border border-gray-300 dark:border-gray-600 box-border overflow-hidden">
        <a href={`/products/detail/${data.id_product}`}>
        <figure>
          <img
            src={data.image}
            className="h-52 object-cover w-full object-center"
            alt="product image" />
        </figure>
        </a>
        <div className="card-body p-6 box-border">
          <h2 className="card-title text-lg">{data.title}</h2>
          <p className="line-clamp-2 text-ellipsis">{data.description}</p>
          <p className="text-lg font-semibold text-blue-500">{localCurency(data.price)}</p>
          <div className="card-actions justify-end">
            <a href={`/products/detail/${data.id_product}`} className="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    );
}