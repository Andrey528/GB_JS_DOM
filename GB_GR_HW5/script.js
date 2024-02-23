const cartContainer = document.querySelector('.cart');
const cartProductsContent = document.querySelector('.cart-content__products');
const productBoxContent = document.querySelector('.product-box__content');

const cartContentController = () => {
  if (cartProductsContent.children.length == 0)
    cartContainer.style.display = 'none';
  else cartContainer.style.display = 'grid';
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      // Обнаружено изменение дочерних элементов в DOM дереве
      cartContentController();
    }
  });
});

// Начинаем наблюдение за изменениями в DOM дереве контейнера корзины с продуктами
observer.observe(cartProductsContent, {
  childList: true,
  subtree: true,
});

const updateQuantityOfProduct = (productId) => {
  // Данные
  const targetProduct = dataProducts.find(
    (product) => product.id === productId
  );
  // Dom элемент
  const targetProductNode = cartProductsContent.querySelector(
    '#cartProduct' + productId
  );

  targetProduct.quantity = targetProductNode.querySelector(
    '.cartQuantity__value'
  ).value;
};

const removeFromCart = (productId) => {
  dataProducts.find((product) => product.id === productId).quantity = 0;
  cartProductsContent.querySelector('#cartProduct' + productId).remove();
};

const addToCart = (productId) => {
  const targetProduct = dataProducts.find(
    (product) => product.id === productId
  );

  if (targetProduct.quantity !== 0) {
    const targetProductNode = cartProductsContent.querySelector(
      '#cartProduct' + productId
    );
    targetProduct.quantity += 1;
    targetProductNode.querySelector('.cartQuantity__value').value =
      targetProduct.quantity;
  } else {
    const product = document.createElement('div');
    product.classList.add('cartProduct');
    product.setAttribute('id', 'cartProduct' + targetProduct.id);

    const img = document.createElement('img');
    img.setAttribute('src', targetProduct.img);
    img.setAttribute('alt', targetProduct.title);
    img.classList.add('cartProduct__img');
    product.appendChild(img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('cartProduct__info');

    const productTitle = document.createElement('h3');
    productTitle.classList.add('cartProduct__title');

    const productTitleLink = document.createElement('a');
    productTitleLink.textContent = targetProduct.title;
    productTitle.appendChild(productTitleLink);
    productInfo.appendChild(productTitle);

    const productParams = document.createElement('div');
    productParams.classList.add('cartProduct__params');

    const productPriceBox = document.createElement('div');
    productPriceBox.classList.add('cartProduct__price');

    const productPriceTitle = document.createElement('h4');
    productPriceTitle.classList.add('cartProduct__title');
    productPriceTitle.textContent = 'Price:';
    productPriceBox.appendChild(productPriceTitle);

    const productPriceValue = document.createElement('span');
    productPriceValue.classList.add('cartPrice__value');
    productPriceValue.textContent =
      targetProduct.currency + targetProduct.price;
    productPriceBox.appendChild(productPriceValue);
    productParams.appendChild(productPriceBox);

    const productColorBox = document.createElement('div');
    productColorBox.classList.add('cartProduct__color');

    const productColorTitle = document.createElement('h4');
    productColorTitle.classList.add('cartColor__title');
    productColorTitle.textContent = 'Color:';
    productColorBox.appendChild(productColorTitle);

    const productColorValue = document.createElement('span');
    productColorValue.classList.add('cartColor__value');
    productColorValue.textContent = targetProduct.color;
    productColorBox.appendChild(productColorValue);
    productParams.appendChild(productColorBox);

    const productSizeBox = document.createElement('div');
    productSizeBox.classList.add('cartProduct__size');

    const productSizeTitle = document.createElement('h4');
    productSizeTitle.classList.add('cartSize__title');
    productSizeTitle.textContent = 'Size:';
    productSizeBox.appendChild(productSizeTitle);

    const productSizeValue = document.createElement('span');
    productSizeValue.classList.add('cartSize__value');
    productSizeValue.textContent = targetProduct.size;
    productSizeBox.appendChild(productSizeValue);
    productParams.appendChild(productSizeBox);

    const productQuantityBox = document.createElement('div');
    productQuantityBox.classList.add('cartProduct__quantity');

    const productQuantityTitle = document.createElement('h4');
    productQuantityTitle.classList.add('cartQuantity__title');
    productQuantityTitle.textContent = 'Quantity:';
    productQuantityBox.appendChild(productQuantityTitle);

    const productQuantityValue = document.createElement('input');
    productQuantityValue.classList.add('cartQuantity__value');
    productQuantityValue.type = 'number';
    targetProduct.quantity += 1;
    productQuantityValue.value = targetProduct.quantity;
    productQuantityValue.ariaValueMax = targetProduct.amount;

    productQuantityValue.addEventListener('input', () => {
      updateQuantityOfProduct(targetProduct.id);
    });

    productQuantityBox.appendChild(productQuantityValue);
    productParams.appendChild(productQuantityBox);

    productInfo.appendChild(productParams);

    const productDeleteBtn = document.createElement('span');
    productDeleteBtn.classList.add('cartProduct__delete-btn');

    // Обработка события удаления товара из корзины
    productDeleteBtn.addEventListener('click', () => {
      removeFromCart(targetProduct.id);
    });

    const productDeleteBtnI = document.createElement('i');
    productDeleteBtnI.classList.add('fa-solid');
    productDeleteBtnI.classList.add('fa-xmark');
    productDeleteBtn.appendChild(productDeleteBtnI);
    productInfo.appendChild(productDeleteBtn);
    product.appendChild(productInfo);

    cartProductsContent.appendChild(product);
  }
};

const loadData = () => {
  dataProducts.forEach((el) => {
    // Контейнер продукта
    const product = document.createElement('div');
    product.classList.add('product');
    product.setAttribute('id', 'product' + el.id);

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

    // Обработчик нажатия "Добавить в корзину"
    productAddLink.addEventListener('click', () => addToCart(el.id));

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
};

loadData();
cartContentController();
