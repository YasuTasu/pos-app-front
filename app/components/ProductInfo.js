"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductInfo({ barcode }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (barcode) {
      axios.get(`${API_URL}/products/${barcode}`)
        .then(res => setProduct(res.data))
        .catch(err => setError("商品が見つかりません"));
    }
  }, [barcode]);

  return (
    <div className="p-4 bg-white shadow rounded">
      {error ? <p className="text-red-500">{error}</p> : (
        product && (
          <>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">価格: {product.price}円</p>
          </>
        )
      )}
    </div>
  );
}
