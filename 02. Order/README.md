# Order in component:

```javascript
// 1. Name
  name: "MyComponent",

// 2. Assets
  mixins: [ myMixin ],
  
  components: {
    OtherComponent
  },
  
  directives: {
    MyDirective
  },

  filters: {
    myFilter1(value) {
      return value;
    }
  },

// 3. Props
  props: {
    some: {
      type: Object | Array,
      
      required: true;
      
      // if required false, can default
      default: () => {}
 
      validator: value => value;
    }
  }

// 4. Data
  data() {
    return {
      some: 1
    }
  }
```
