/**
 * checks if given element is focused
 * @param  {HTMLElement} elem  element to check
 * @return {Boolean}           true if element is focused
 */
export default function (elem: Element) {
    return elem === document.activeElement
}
