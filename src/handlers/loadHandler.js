import data from '../data.js';
import dom from '../dom.js';
import createButton from '../components/createButton.js';
import createItem from '../components/createItem.js';

const loadHandler = () => {
    data.buttons.forEach((btn) => {
        const button = createButton(btn);

        dom.buttonContainer.append(button);
    });

    data.menu.forEach((item) => {
        const article = createItem(item);
        dom.menuItems.append(article);
    });
};

export default loadHandler;
