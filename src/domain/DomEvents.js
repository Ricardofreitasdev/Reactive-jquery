export default class DomEvents {
    static newEventListener(elements, eventType, handler) {
        elements.forEach((element) => {
            element.addEventListener(eventType, handler);
        });
    }

    static removeEventListener(elements, eventType, handler) {
        elements.forEach((element) => {
            element.removeEventListener(eventType, handler);
        });
    }
}
