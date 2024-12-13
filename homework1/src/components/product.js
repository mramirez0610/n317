import styles from "../styles/product.module.css";
import Image from "next/image";

export default function Product() {
  const products = [
    {
      id: 1,
      img: "/imgs/img1.jpg",
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      img: "/imgs/img2.jpg",
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      img: "/imgs/img3.jpg",
      name: "Product 3",
      price: 300,
    },
  ];
  return (
    <div className={styles.product}>
      {products.map((product) => (
        <div key={product.id}>
          <Image width={50} height={50} src={product.img}></Image>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <h3>test</h3>
        </div>
      ))}
    </div>
  );
}
