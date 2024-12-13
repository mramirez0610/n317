import styles from "../styles/product.module.css";

export default function Product() {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  return (
    <div className={styles.product}>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <h3>test</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
