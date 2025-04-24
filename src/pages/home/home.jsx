import React from "react";
import StoreLayout from "/src/components/StoreLayout";
import SocialButtons from "/src/components/SocialButtons";

const Home = () => {
  const products = [
    {
      name: "Pastel de Chocolate",
      description: "Delicioso pastel de chocolate con relleno de crema",
      price: "$25.00",
      image: "https://www.azucardominomex.com/sites/azucardominomex_com/files/styles/m/public/2022-09/600x336_PASTEL-DE-CHOCOLATE-BRUCE.jpg.webp?itok=1xSHaWTo",
    },
    {
      name: "Cupcakes de Fresa",
      description: "Cupcakes suaves y esponjosos con glaseado de fresa",
      price: "$15.00",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9YCRMh_Uu2CwT7u7n3cMKEJ7-zqFeRlFgAQ1JiyoImO4Hlx6tLZhzmcaPOmQBOYFQ51W3PumQptTZOc7jSI5rqkVWKal-B8giKfg0veO1qEgGbpabXcFpI_Oa22qzZdfDto8XSPsd2xXm/s1600/IMG_2444.jpg",
    },
    {
      name: "Galletas de Avena",
      description: "Galletas de avena con chispas de chocolate",
      price: "$10.00",
      image: "https://osojimix.com/wp-content/uploads/2021/11/Galletas-de-avena-con-chocolate-Pa%CC%81gina.jpg",
    },
    {
      name: "Tarta de Limón",
      description: "Tarta de limón fresca y deliciosa con base crujiente",
      price: "$20.00",
      image: "https://imag.bonviveur.com/tarta-de-limon-sin-horno.jpg",
    },
    {
      name: "Brownies de Nutella",
      description: "Brownies suaves y cremosos con Nutella",
      price: "$12.00",
      image: "https://thecookiedoughdiaries.com/wp-content/uploads/2022/10/nutella-brownies-featured.jpg",
    },
    {
      name: "Pan de Plátano",
      description: "Pan de plátano casero, suave y esponjoso",
      price: "$8.00",
      image: "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/29512d5f9e4f0cb6792526c66e48eacb.jpg",
    },
  ];

  return (
    <StoreLayout>
      <div className="pb-24">
        <div className="flex items-center justify-between px-4 sm:px-6 mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos Destacados</h2>
        </div>

        <div className="relative mt-4">
          <div className="relative -mb-6 w-full overflow-x-auto pb-4">
            <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0 lg:w-full">
              {products.map((product, index) => (
                <li key={index} className="inline-flex w-full flex-col text-center">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-50 p-4">
        <SocialButtons />
      </div>
    </StoreLayout>
  );
};

export default Home;




