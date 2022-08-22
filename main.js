'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createSelector = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position
) {
  if (selector[0] === '.') {
    console.log(selector);
    const elem = document.createElement('div');
    elem.setAttribute('class', selector.slice(1));
    document.body.appendChild(elem);
    elem.textContent = selector;
    elem.style.cssText = `height: ${height}; width: ${width}; background-color: ${bg}; font-size: ${fontSize}; position: ${position}`;
  }

  if (selector[0] === '#') {
    console.log(selector);

    const elem = document.createElement('p');
    elem.setAttribute('id', selector.slice(1));
    document.body.appendChild(elem);
    elem.textContent = selector;
    elem.style.cssText = `height: ${height}; width: ${width}; background-color: ${bg}; font-size: ${fontSize}; position: ${position}`;
  }
};

const newDomElement = function (selector, height, width, bg, fontSize) {
  DomElement.call(this, selector, height, width, bg, fontSize);
  // this.text = text;
};

newDomElement.prototype = Object.create(DomElement.prototype);

const test = new newDomElement();

console.log(test);
console.log(
  test.createSelector('.block', '100px', '100px', 'red', '30px', 'absolute')
);
console.log(
  test.createSelector('#p', '100px', '100px', 'green', '30px', 'absolute')
);

document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelector('.block');

  document.addEventListener('keydown', function (event) {
    if (
      event.code != 'ArrowRight' &&
      event.code != 'ArrowLeft' &&
      event.code != 'ArrowUp' &&
      event.code != 'ArrowDown'
    )
      return;

    let rectElem = elem.getBoundingClientRect();

    let x = rectElem.x + pageXOffset,
      y = rectElem.y + pageYOffset;

    if (event.code == 'ArrowRight') x += 10;
    if (event.code == 'ArrowLeft') x -= 10;
    if (event.code == 'ArrowUp') y -= 10;
    if (event.code == 'ArrowDown') y += 10;

    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
  });
});
