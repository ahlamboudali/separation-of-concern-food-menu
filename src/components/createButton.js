import filterHandler from '../handlers/filterHandler.js';

const createButton = (btn) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = btn.id;
    button.classList.add('filter-btn');
    button.innerText = btn.text;

    button.addEventListener('click', () => { 
        const { id } = button;
        filterHandler(id);
    });
   
    return button;
};

export default createButton;