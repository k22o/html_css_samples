class MobileMenu {
    constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector(".mobile-menu-btn");
      this.DOM.cover = document.querySelector(".mobile-menu-cover");
      this.DOM.container = document.querySelector(".container");
      this.eventType = this._getEventType();
      this._addEvent();
    }
  
    //スマホの場合、touchstartの方が速い
    _getEventType() {
      const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
  
      return isTouchCapable ? "touchstart" : "click";
    }
  
    _toggle() {
      this.DOM.container.classList.toggle("menu-open");
    }
  
    _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }
  
  new MobileMenu();
  