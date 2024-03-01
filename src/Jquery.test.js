import { $ } from './Jquery.js'; 

describe('JQuery', () => {
    let element;

    beforeEach(() => {
        document.body.innerHTML = '<div id="test-element"></div>';
        element = $('#test-element');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('append adds HTML content to the selected element', () => {
        const content = '<span>Hello</span>';

        element.append(content);

        expect(document.querySelector('#test-element').innerHTML).toContain(content);
    });

    test('addClass adds a CSS class to the selected element', () => {
        const className = 'test-class';

        element.addClass(className);

        expect(document.querySelector('#test-element').classList.contains(className)).toBe(true);
    });

    test('on adds an event listener to the selected element', () => {
        const eventType = 'click';
        const handler = jest.fn();

        element.on(eventType, handler);

        document.querySelector('#test-element').dispatchEvent(new MouseEvent('click'));

        expect(handler).toHaveBeenCalled();
    });

    test('remove removes the selected element from the DOM', () => {
        element.remove();

        expect(document.querySelector('#test-element')).toBeNull();
    });
});
