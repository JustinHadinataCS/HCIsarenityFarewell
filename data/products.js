export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: " serenityidzwo22",
    image: "images/products/GoldenCandle1.jpg",
    name: "Australian Opulence: Gilt-Edged Heritage Vintage Candle",
    priceCents: 6990,
    keywords: [
      "candle",
      "expensive",
      "apparel"
    ]
  },   {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/WoodCoffin2.jpg",
    name: "Italian Maple Coffin",
    priceCents: 6990,
    keywords: [
      "coffin",
      "expensive",
      "apparel"
    ]
  },  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }, {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }, {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }, {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }, {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }, {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: [
      "stone",
      "cheap",
      "apparel"
    ]
  }
];