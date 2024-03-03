import StylesManipulator from './StylesManipulator';

describe('StylesManipulator', () => {
    test('addClass adds class to elements', () => {
        const elements = [
            { classList: { add: jest.fn() } },
            { classList: { add: jest.fn() } },
            { classList: { add: jest.fn() } },
        ];
        
        const className = 'test-class';
        StylesManipulator.addClass(elements, className);
        elements.forEach((element) => {
            expect(element.classList.add).toHaveBeenCalledWith(className);
        });
    });
});
