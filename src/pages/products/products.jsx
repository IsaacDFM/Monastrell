import React, { useState } from "react";
import StoreLayout from "/src/components/StoreLayout";
import SocialButtons from "/src/components/SocialButtons";
import ProductModal from "/src/components/ProductModal";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pastel de Chocolate",
      description: "Delicioso pastel de chocolate con relleno de crema",
      price: "$25.00",
      image: "https://www.azucardominomex.com/sites/azucardominomex_com/files/styles/m/public/2022-09/600x336_PASTEL-DE-CHOCOLATE-BRUCE.jpg.webp?itok=1xSHaWTo",
      extraDetails: "Este pastel de chocolate está hecho con ingredientes de alta calidad, con una capa suave y esponjosa de pastel de chocolate y un relleno de crema suave que hará que tu paladar se derrita. Ideal para celebraciones y eventos especiales."
    },
    {
      id: 2,
      name: "Cupcakes de Fresa",
      description: "Cupcakes suaves y esponjosos con glaseado de fresa",
      price: "$15.00",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9YCRMh_Uu2CwT7u7n3cMKEJ7-zqFeRlFgAQ1JiyoImO4Hlx6tLZhzmcaPOmQBOYFQ51W3PumQptTZOc7jSI5rqkVWKal-B8giKfg0veO1qEgGbpabXcFpI_Oa22qzZdfDto8XSPsd2xXm/s1600/IMG_2444.jpg",
      extraDetails: "Estos cupcakes están hechos con un glaseado de fresa cremoso y una base de pastel ligero y esponjoso. Perfectos para un té de la tarde o como un dulce detalle en cualquier evento."
    },
    {
      id: 3,
      name: "Galletas de Avena",
      description: "Galletas de avena con chispas de chocolate",
      price: "$10.00",
      image: "https://osojimix.com/wp-content/uploads/2021/11/Galletas-de-avena-con-chocolate-Pa%CC%81gina.jpg",
      extraDetails: "Estas galletas combinan la suavidad de la avena con la dulzura de las chispas de chocolate. Son ideales para un snack saludable y delicioso, con una textura crujiente por fuera y suave por dentro."
    },
    {
      id: 4,
      name: "Tarta de Limón",
      description: "Tarta de limón fresca y deliciosa con base crujiente",
      price: "$20.00",
      image: "https://imag.bonviveur.com/tarta-de-limon-sin-horno.jpg",
      extraDetails: "La tarta de limón es un postre refrescante con un equilibrio perfecto entre lo ácido y lo dulce. Con una base crujiente y una capa cremosa de limón, es ideal para los amantes de los sabores cítricos."
    },
    {
      id: 5,
      name: "Brownies de Nutella",
      description: "Brownies suaves y cremosos con Nutella",
      price: "$12.00",
      image: "https://thecookiedoughdiaries.com/wp-content/uploads/2022/10/nutella-brownies-featured.jpg",
      extraDetails: "Estos brownies están rellenos de Nutella, lo que les da una textura húmeda y cremosa. Perfectos para los amantes del chocolate y la crema de avellanas, ofrecen una explosión de sabor en cada bocado."
    },
    {
      id: 6,
      name: "Pan de Plátano",
      description: "Pan de plátano casero, suave y esponjoso",
      price: "$8.00",
      image: "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/29512d5f9e4f0cb6792526c66e48eacb.jpg",
      extraDetails: "Este pan de plátano está hecho con plátanos maduros y esponjosos, lo que lo hace ideal para acompañar una taza de café. Su textura suave y su sabor natural lo convierten en un postre perfecto para cualquier ocasión."
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <StoreLayout>
      <div className="pb-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>
        <div className="relative mt-4">
          <div className="relative -mb-6 w-full overflow-x-auto pb-4">
            <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0 lg:w-full">
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-full flex-col text-center">
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
                        <a href="#" onClick={() => handleOpenModal(product)}>
                          <span className="absolute inset-0"></span>
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                      <button
                        onClick={() => handleOpenModal(product)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedProduct && (
        <ProductModal
          isOpen={isOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      <div className="fixed bottom-0 right-0 z-50 p-4">
        <SocialButtons />
      </div>
    </StoreLayout>
  );
};

export default Products;





