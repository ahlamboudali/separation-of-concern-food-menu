const createItem = (item) => {
    // create article element
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

    // img
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    // item
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    // Header
    const header = document.createElement('header');

    //  Title
    const title = document.createElement('h4');
    title.innerText = item.title;

    // price
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${item.price}`;

    header.append(title, price);

    // description
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = item.desc;

    itemInfo.append(header, description);

    return article;
};

export default createItem;
