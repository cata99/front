import HomeItem from "./HomeItem";
import Layout from "../Layout/Layout";

function HomePage(){
    const boxHome=[
        {title:'Donaciones recibidas hasta la fecha', quantity:'10'},
        {title:'Entregas realizadas hasta la fecha', quantity:'20'},
        {title:'Voluntarios registrados hasta la fecha', quantity:'30'},
        {title:'Instituciones a las que ayudamos', quantity:'40'},
      ]
    
      return (
        <Layout>
       <HomeItem title={boxHome[0].title} quantity={boxHome[0].quantity}></HomeItem>
       <HomeItem title={boxHome[1].title} quantity={boxHome[1].quantity}></HomeItem>
       <HomeItem title={boxHome[2].title} quantity={boxHome[2].quantity}></HomeItem>
       <HomeItem title={boxHome[3].title} quantity={boxHome[3].quantity}></HomeItem>
       </Layout>
      );
}

export default HomePage;