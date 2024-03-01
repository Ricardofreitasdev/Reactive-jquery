import DomManipulator from './DomManipulator';

describe('DomManipulator', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div class="test-class">Test Content</div>
      <div class="test-class">Test Content</div>
      <div class="test-class">Test Content</div>
    `;
    });

    test('appendContent appends content to elements', () => {
        const elements = document.querySelectorAll('.test-class');
        DomManipulator.appendContent(elements, ' New Content');
        elements.forEach((element) => {
            expect(element.innerHTML).toContain('New Content');
        });
    });

    test('removeContent removes elements', () => {
        const elements = document.querySelectorAll('.test-class');
        DomManipulator.removeContent(elements);
        expect(document.querySelectorAll('.test-class')).toHaveLength(0);
    });

    test('selectElements returns elements for valid selector', () => {
        const elements = DomManipulator.selectElements('.test-class');
        expect(elements).toHaveLength(3);
    });

    test('selectElements logs error for invalid selector', () => {
        console.error = jest.fn();
        const elements = DomManipulator.selectElements('.non-existing-class');
        expect(elements).toHaveLength(0);
        expect(console.error).toHaveBeenCalledWith('Nenhum elemento encontrado para o seletor:', '.non-existing-class');
    });
});
