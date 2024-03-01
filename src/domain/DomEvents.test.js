import DomEvents from './DomEvents';

describe('DomEvents', () => {
    let mockElements;

    beforeEach(() => {
        mockElements = [
            { addEventListener: jest.fn(), removeEventListener: jest.fn() },
            { addEventListener: jest.fn(), removeEventListener: jest.fn() },
        ];
    });

    test('newEventListener adds event listener to elements', () => {
        const eventType = 'click';
        const handler = jest.fn();

        DomEvents.newEventListener(mockElements, eventType, handler);

        mockElements.forEach((element) => {
            expect(element.addEventListener).toHaveBeenCalledWith(eventType, handler);
        });
    });

    test('removeEventListener removes event listener from elements', () => {
        const eventType = 'click';
        const handler = jest.fn();

        DomEvents.removeEventListener(mockElements, eventType, handler);

        mockElements.forEach((element) => {
            expect(element.removeEventListener).toHaveBeenCalledWith(eventType, handler);
        });
    });
});
