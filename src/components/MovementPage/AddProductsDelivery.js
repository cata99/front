import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import AddProductCard from "../Card/AddProductCard";

function AddProductsDelivery() {
  return (
    <Layout>
      <div className="product-wrapper ">
        <AddProductCard></AddProductCard>
        <AddProductCard></AddProductCard>
        <AddProductCard></AddProductCard>
      </div>
    </Layout>
  );
}

export default AddProductsDelivery;
