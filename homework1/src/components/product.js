import styles from "../styles/product.module.css";
import Image from "next/image";

export default function Product() {
  const products = [
    {
      id: 1,
      img: "/imgs/img1.jpg",
      name: "Schlagenheim",
      price: 100,
    },
    {
      id: 2,
      img: "/imgs/img2.jpg",
      name: "What Burns Never Returns",
      price: 200,
    },
    {
      id: 3,
      img: "/imgs/img3.jpg",
      name: "Bridge Over Troubled Water",
      price: 300,
    },
  ];
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <Image
            width={200}
            height={200}
            src={product.img}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <div>${product.price}</div>
        </div>
      ))}
    </div>
  );
}
