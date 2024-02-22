/**
 * Дан макет https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 в котором представлены товары на странице корзины
Необходимо создать файл data.js в котором создать переменную dataProducts в которую присвоить JSON данные по товарам.
Вам нужно самостоятельно создать JSON данные (не забыть про кавычки
Добавить все данные из макета, чтобы в дальнейшем по ним мы смогли создать вёрстку
 */

const dataProducts = [
  {
    id: 3,
    title: 'MANGO PEOPLE T-SHIRT',
    brand: 'MANGO',
    img: 'img/product3.jpg',
    price: 300,
    currency: '$',
    color: 'red',
    size: 'XL',
    quantity: 2,
    amount: 15,
  },

  {
    id: 7,
    title: 'MANGO PEOPLE T-SHIRT',
    brand: 'MANGO',
    img: 'img/product7.jpg',
    price: 123,
    currency: '$',
    color: 'red',
    size: 'XL',
    quantity: 2,
    amount: 15,
  },
];

const productsContent = document.querySelector('.cart-content__products');

dataProducts.forEach((el) => {
  const product = document.createElement('div');
  product.classList.add('product');

  const img = document.createElement('img');
  img.setAttribute('src', el.img);
  img.setAttribute('alt', el.title);
  img.classList.add('product__img');
  product.appendChild(img);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product__info');

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product__title');

  const productTitleLink = document.createElement('a');
  productTitleLink.textContent = el.title;
  productTitle.appendChild(productTitleLink);
  productInfo.appendChild(productTitle);

  const productParams = document.createElement('div');
  productParams.classList.add('product__params');

  const productPriceBox = document.createElement('div');
  productPriceBox.classList.add('product__price');

  const productPriceTitle = document.createElement('h4');
  productPriceTitle.classList.add('product__title');
  productPriceTitle.textContent = 'Price:';
  productPriceBox.appendChild(productPriceTitle);

  const productPriceValue = document.createElement('span');
  productPriceValue.classList.add('price__value');
  productPriceValue.textContent = el.currency + el.price;
  productPriceBox.appendChild(productPriceValue);
  productParams.appendChild(productPriceBox);

  const productColorBox = document.createElement('div');
  productColorBox.classList.add('product__color');

  const productColorTitle = document.createElement('h4');
  productColorTitle.classList.add('color__title');
  productColorTitle.textContent = 'Color:';
  productColorBox.appendChild(productColorTitle);

  const productColorValue = document.createElement('span');
  productColorValue.classList.add('color__value');
  productColorValue.textContent = el.color;
  productColorBox.appendChild(productColorValue);
  productParams.appendChild(productColorBox);

  const productSizeBox = document.createElement('div');
  productSizeBox.classList.add('product__size');

  const productSizeTitle = document.createElement('h4');
  productSizeTitle.classList.add('size__title');
  productSizeTitle.textContent = 'Size:';
  productSizeBox.appendChild(productSizeTitle);

  const productSizeValue = document.createElement('span');
  productSizeValue.classList.add('size__value');
  productSizeValue.textContent = el.size;
  productSizeBox.appendChild(productSizeValue);
  productParams.appendChild(productSizeBox);

  const productQuantityBox = document.createElement('div');
  productQuantityBox.classList.add('product__quantity');

  const productQuantityTitle = document.createElement('h4');
  productQuantityTitle.classList.add('quantity__title');
  productQuantityTitle.textContent = 'Quantity:';
  productQuantityBox.appendChild(productQuantityTitle);

  const productQuantityValue = document.createElement('input');
  productQuantityValue.classList.add('quantity__value');
  productQuantityValue.type = 'number';
  productQuantityValue.value = el.quantity;
  productQuantityValue.ariaValueMax = el.amount;
  productQuantityBox.appendChild(productQuantityValue);
  productParams.appendChild(productQuantityBox);

  productInfo.appendChild(productParams);

  const productDeleteBtn = document.createElement('span');
  productDeleteBtn.classList.add('product__delete-btn');

  const productDeleteBtnI = document.createElement('i');
  productDeleteBtnI.classList.add('fa-solid');
  productDeleteBtnI.classList.add('fa-xmark');
  productDeleteBtn.appendChild(productDeleteBtnI);
  productInfo.appendChild(productDeleteBtn);
  product.appendChild(productInfo);

  productsContent.appendChild(product);
});
