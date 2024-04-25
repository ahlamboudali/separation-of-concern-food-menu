/**
 * @jest-environment jsdom
 */

import createItems from "./createItems.js";

describe('create item element', () => {
    const item = createItems({            id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        src: '../assets/img/item-1.jpeg',
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    })
    it('nodeName => ARTICLE', () => {
        expect(item.nodeName).toEqual('ARTICLE');
    });
    it('className => menu-item breakfast', () => {
        expect(item.className).toEqual('menu-item breakfast');
    });
    it('childElementCount => 2', () => {
        expect(item.childElementCount).toEqual(2);
    });
});