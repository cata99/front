import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import AddProductCard from "../Card/AddProductCard";

function AddProductsDelivery() {
  return (
    <Layout>
      <Card>
        <div className="congrats-register">
          <h2>¡Felicitaciones!</h2>
          <h4>
            Se ha registrado con exito su entrega, por favor asocie los
            productos
          </h4>
        </div>
      </Card>
      <div className="product-wrapper ">
        <AddProductCard></AddProductCard>
        <AddProductCard></AddProductCard>
        <AddProductCard></AddProductCard>
      </div>
    </Layout>
  );
}

export default AddProductsDelivery;
