// BaseComponent.js
class BaseComponent {
  constructor(element) {
    if (new.target === BaseComponent) {
      throw new TypeError("Cannot construct BaseComponent instances directly");
    }
    if (!element) {
      throw new Error("Component requires a DOM element");
    }
    this.element = element;
    this.initialize();
  }

  initialize() {
    // Initialization logic for the component
  }
}

// ComponentRegistry.js
class ComponentRegistry {
  constructor() {
    this.components = {};
    this.observer = null;
    this.initObserver();
  }

  registerComponent(name, componentClass) {
    if (this.components[name]) {
      throw new Error(`A component with the name "${name}" is already registered.`);
    }
    this.components[name] = componentClass;
    this.initializeExisting(name);
  }

  initializeExisting(name) {
    document.querySelectorAll(`.${name}`).forEach((element) => {
      new this.components[name](element);
    });
  }

  initObserver() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((newNode) => {
            if (newNode.nodeType === Node.ELEMENT_NODE) {
              for (const name in this.components) {
                if (newNode.classList.contains(name)) {
                  new this.components[name](newNode);
                }
              }
            }
          });
        }
      });
    });

    this.observer.observe(document.body, { childList: true, subtree: true });
  }
}

const registry = new ComponentRegistry();
