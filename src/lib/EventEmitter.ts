type EventParam = {
    type: string;
    data: any;
  };
  
  type EventParamData = {
    [key: string]: any;
  };
  
  type EventCallback = (data: EventParam) => {
    evt?: EventParam;
  };
  
  type EventListeners = {
    [key: string]: EventCallback[];
  };
  
  /**
   * Represents an event emitter.
   */
  abstract class EventEmitter {
    /**
     * The listeners.
     */
    private listeners: EventListeners = {};
  
    constructor() {
      this.on = this.on.bind(this);
      this.off = this.off.bind(this);
      this.emit = this.emit.bind(this);
    }
  
    /**
     * Registers a callback to be called when the event type is emitted.
     */
    on(type: string, callback: EventCallback, force = false) {
      const { listeners } = this;
  
      if (typeof callback === 'function') {
        if (!(type in listeners)) {
          listeners[type] = [];
        }
  
        if (force || !listeners[type].includes(callback)) {
          listeners[type].push(callback);
        }
      }
  
      return this;
    }
  
    /**
     * Unregisters a callback function related to an event type.
     */
    off(type: string, callback: EventCallback) {
      const { listeners } = this;
  
      if (type in listeners) {
        listeners[type] = listeners[type].filter(c => c !== callback);
      }
  
      return this;
    }
  
    /**
     * Emits an event.
     */
    emit(type: string, eventParamData?: EventParamData) {
      const { listeners } = this;
  
      const eventParams: EventParam = {
        type,
        data: eventParamData,
      };
  
      if (type in listeners) {
        listeners[type!].forEach(callback => callback(eventParams));
      }
  
      return this;
    }
  }
  
  export default EventEmitter;