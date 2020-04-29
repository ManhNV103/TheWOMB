class Field {
    constructor(options) {
        this.id = options.id;
        this.label =  options.label;
        this.component = options.component;
        this.value = options.value ?? '';
    }
}

export default Field;