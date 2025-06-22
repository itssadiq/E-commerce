export function products() {
  const productData = [
    {
      id: 0,
      images: [
        {
          img: "assets/products/singleproduct1.jpg",
          img1: "assets/products/smart-fitness-watch.jpeg",
          img2: "assets/products/smart-fitness-watch.jpeg",
        },
      ],
      name: "Premium Wireless HeadPhones",
      rating: "assets/ratings/rating-15.png",
      ratingCount: 1.5,
      reviewCount: 124,
      currency: "Rs ",
      price: 299,
      oldPrice: 499,
      stock: "In Stock",
      category: "Electronics",
      description:
        "Experience immersive sound with these wireless headphones designed for comfort and clarity.",
      features: [
        "Bluetooth 5.0 connectivity",
        "Noise-cancellation feature",
        "20-hour battery life",
        "Built-in microphone",
        "Foldable and lightweight design",
      ],
    },
    {
      id: 1,
      images: [
        {
          img: "assets/products/organic-cotton-t-shirt.jpeg",
          img1: "assets/products/smart-fitness-watch.jpeg",
          img2: "assets/products/smart-fitness-watch.jpeg",
        },
      ],
      name: "Organic Cotton T-shirt",
      rating: "assets/ratings/rating-25.png",
      ratingCount: 2.5,
      reviewCount: 50,
      currency: "Rs ",
      price: 500,
      oldPrice: 699,
      stock: "In Stock",
      category: "Clothing",
      description:
        "Soft, breathable, and eco-friendly t-shirt made from 100% organic cotton.",
      features: [
        "Eco-friendly material",
        "Available in multiple sizes",
        "Unisex design",
        "Soft and breathable fabric",
        "Machine washable",
      ],
    },
    {
      id: 2,
      images: [
        {
          img: "assets/products/bluetooth-speaker.jpeg",
          img1: "assets/products/smart-fitness-watch.jpeg",
          img2: "assets/products/smart-fitness-watch.jpeg",
        },
      ],
      name: "Bluetooth Speaker",
      rating: "assets/ratings/rating-45.png",
      ratingCount: 4.5,
      reviewCount: 100,
      currency: "Rs ",
      price: 999,
      oldPrice: 1299,
      stock: "Limited Stock",
      category: "Electronics",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      features: [
        "10W stereo output",
        "Water-resistant design",
        "Up to 12-hour playtime",
        "Bluetooth and AUX input",
        "Built-in microphone",
      ],
    },
    {
      id: 3,
      images: [
        {
          img: "assets/products/leather-cossbody-bag.jpeg",
          img1: "assets/products/smart-fitness-watch.jpeg",
          img2: "assets/products/smart-fitness-watch.jpeg",
        },
      ],
      name: "Leather Corssbody Bag",
      rating: "assets/ratings/rating-0.png",
      ratingCount: 0,
      reviewCount: 55,
      currency: "Rs ",
      price: 899,
      oldPrice: 1199,
      stock: "Out of Stock",
      category: "Accessories",
      description: "Stylish leather crossbody bag perfect for everyday use.",
      features: [
        "Genuine leather finish",
        "Adjustable shoulder strap",
        "Zipper and inner compartments",
        "Magnetic flap closure",
        "Compact yet spacious",
      ],
    },
    {
      id: 4,
      images: [
        {
          img: "assets/products/smart-fitness-watch.jpeg",
          img1: "assets/products/smart-fitness-watch.jpeg",
          img2: "assets/products/smart-fitness-watch.jpeg",
        },
      ],
      name: "Smart Fitness Watch",
      rating: "assets/ratings/rating-50.png",
      ratingCount: 5.0,
      reviewCount: 10,
      currency: "Rs ",
      price: 1499,
      oldPrice: 1899,
      stock: "In Stock",
      category: "Electronics",
      description:
        "Track your fitness and stay connected with this stylish smart watch.",
      features: [
        "Heart rate monitor",
        "Step and sleep tracker",
        "Water-resistant build",
        "Smartphone notifications",
        "USB rechargeable battery",
      ],
    },
  ];
  return productData;
}
