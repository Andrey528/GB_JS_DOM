const dataProducts = [
  {
    id: 1,
    img: 'img/product1.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },

  {
    id: 2,
    img: 'img/product2.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },

  {
    id: 3,
    img: 'img/product3.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },

  {
    id: 4,
    img: 'img/product4.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },

  {
    id: 5,
    img: 'img/product5.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },

  {
    id: 6,
    img: 'img/product6.jpg',
    title: "ELLERY X M'O CAPSULE",
    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    price: 52.0,
    currency: '$',
  },
];

const productBoxContent = document.querySelector('.product-box__content');

dataProducts.forEach((el) => {
  // Контейнер продукта
  const product = document.createElement('div');
  product.classList.add('product');

  // Контейнер изображения
  const productImgBox = document.createElement('div');
  productImgBox.classList.add('product__img-box');

  const img = document.createElement('img');
  img.setAttribute('src', el.img);
  img.setAttribute('alt', el.title);
  img.classList.add('product__img');
  productImgBox.appendChild(img);

  const productAddBox = document.createElement('div');
  productAddBox.classList.add('product__add-box');

  const productAddLink = document.createElement('a');
  productAddLink.classList.add('product__add');

  const productAddLinkI = document.createElement('i');
  productAddLinkI.classList.add('fa-solid');
  productAddLinkI.classList.add('fa-cart-shopping');
  productAddLink.appendChild(productAddLinkI);

  const productAddText = document.createElement('p');
  productAddText.classList.add('product__add-text');
  productAddText.textContent = 'Add to Cart';
  productAddLink.appendChild(productAddText);

  productAddBox.appendChild(productAddLink);
  productImgBox.appendChild(productAddBox);
  product.appendChild(productImgBox);

  // Контейнер информации о продукте
  const productContent = document.createElement('div');
  productContent.classList.add('product__content');

  const productName = document.createElement('p');
  productName.classList.add('product__name');
  productName.textContent = el.title;
  productContent.appendChild(productName);

  const productText = document.createElement('p');
  productText.classList.add('product__text');
  productText.textContent = el.desc;
  productContent.appendChild(productText);

  const productPrice = document.createElement('p');
  productPrice.classList.add('product__price');
  productPrice.textContent = el.currency + el.price;
  productContent.appendChild(productPrice);

  product.appendChild(productContent);
  productBoxContent.appendChild(product);
});
