export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products =[
  {
    id: "SerenityIDWTLZ",
    image: "images/products/GoldenCandle1.jpg",
    name: "Australian Opulence: Gilt-Edged Heritage Vintage Candle",
    priceCents: 6990,
    keywords: ["candle", "expensive", "apparel"]
  },
  {
    id: "SerenityIDSMW3",
    image: "images/products/WoodCoffin2.jpg",
    name: "Italian Maple Coffin",
    priceCents: 6990,
    keywords: ["coffin", "expensive", "apparel"]
  },
  {
    id: "SerenityIDRRI8",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDR7FP",
    image: "images/products/WhiteMarble4.jpg",
    name: "Authentic White Marble Urn",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDCOFH",
    image: "images/products/Urn5.jpg",
    name: "Italian Wooden 1980s Urn",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDZRPL",
    image: "images/products/Urn6.jpg",
    name: "Silver Authentic Urn",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDYWCR",
    image: "images/products/GoldenCasket7.jpg",
    name: "Ancient Golden Casket",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityID8C9H",
    image: "images/products/Casket8.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDJU89",
    image: "images/products/Urn9.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  },
  {
    id: "SerenityIDGNJ4",
    image: "images/products/AngelStone3.jpg",
    name: "An Angel Stone Memorial Grave",
    priceCents: 6990,
    keywords: ["stone", "cheap", "apparel"]
  }
];