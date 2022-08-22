'use strict';

const DomElement = function (selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
};

DomElement.prototype.createSelector = function () {
  let elem;
  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.setAttribute('class', this.selector.slice(1));
  }
  if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.setAttribute('id', this.selector.slice(1));
  }

  document.body.appendChild(elem);
  elem.textContent = this.selector;
  elem.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position}`;
};

const test = new DomElement(
  '.block',
  '100px',
  '100px',
  'red',
  '30px',
  'absolute'
);

console.log(test);
console.log(test.createSelector());

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
