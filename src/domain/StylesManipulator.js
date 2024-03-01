export default class StylesManipulator {
    static addClass(elements, className) {
        elements.forEach((element) => {
            element.classList.add(className);
        });
    }
}
