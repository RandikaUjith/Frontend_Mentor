const cartMenu = document.createElement('div');
const cartItems = document.createElement('div');
    cartMenu.className = 'cart-menu';
    cartItems.className = 'cart-items';
    cartMenu.innerText = 'Cart';
    cartItems.innerText = 'Your Cart is Empty';
    
    

let mainImage = document.createElement('img');
mainImage.src = 'images/image-product-1.jpg';
mainImage.className = 'main-product-image';
mainImage.id = 'main_product_image';
document.getElementById('main_product_image_div').appendChild(mainImage);

function addToCart() {
    //const cartElement = document.createElement('div');
    const thumbImage = document.createElement('img');
    thumbImage.src = 'images/image-product-1-thumbnail.jpg';
    thumbImage.style = 'width: 60px; border-radius: 10px; margin-right:10px;';
    cartItems.innerText = ''

    let itemName = document.querySelector('#item_name').innerText;
    let itemPrice = document.querySelector('#item_price').innerText;
    let totalPrice = '$' + qty*(itemPrice.replace(/[^0-9]/g, ''));
    totalPrice.style = 'text-weight: 700;'
    let cartText = document.createTextNode(itemName + " " + itemPrice + " x " + qty + ' = ' + totalPrice);
    cartItems.appendChild(thumbImage);
    cartItems.appendChild(cartText);

}
let cartOpen = false;
function viewCart () {
    if(cartOpen === false) {
        document.getElementById('right_div').appendChild(cartMenu);
        cartMenu.appendChild(cartItems);
        cartOpen = true;
    } else {
        cartMenu.remove();
        cartOpen = false;
    }
    
}

function viewImage(thumbnail) {
    let A = thumbnail.id.charAt(thumbnail.id.length-1);
    
    mainImage.src = `images/image-product-${A}.jpg`;

    document.getElementById('main_product_image').remove();
    document.getElementById('main_product_image_div').appendChild(mainImage);

    thumbnail.style = 'border: 2px solid hsl(26, 100%, 55%); opacity:0.7';

    for (let i=1; i<5; i++) {
        if (i!= A) {
            let thumb = document.getElementById(`thumbnail${i}`);
            thumb.style.removeProperty('border');
            thumb.style.removeProperty('opacity');
        }
    }
}

let qty = 0;

function qtyFunction(id) {
    if (id === 'plus_button') {
        qty = qty + 1;
    } else {
        if (qty === 0){
            qty = 0;
        } else {
            qty = qty - 1;
        }
    }
    document.getElementById('quantity').innerText = qty;
}

function viewMainImage() {
    const zoomedImageDiv = document.createElement('div');
    zoomedImageDiv.className = 'zoomed-image-div';
    zoomedImageDiv.id = 'zoomed_image_div';

    let zoomedImage = document.createElement('img');
    zoomedImage.src = document.getElementById('main_product_image').src;
    zoomedImage.className = 'zoomed-image';

    const closeIcon = document.createElement('svg');
    closeIcon.setAttribute('width', '14');
    closeIcon.setAttribute('height', '15');
    closeIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    closeIcon.innerHTML = '<path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>';
    //const closeIcon = <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>;
    closeIcon.className = 'close-icon';
    closeIcon.id = 'close_icon';

    document.body.appendChild(zoomedImageDiv);
    document.body.appendChild(zoomedImage);
    document.body.appendChild(closeIcon);
    
}

    


document.querySelector('#cart_icon').addEventListener('click', viewCart);
document.querySelector('#add_to_cart_button').addEventListener('click', addToCart);
document.querySelector('#main_product_image').addEventListener('click', viewMainImage);
//document.body.addEventListener('click', cartClose);
