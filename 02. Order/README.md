# Order in component:

## 1. Options
```javascript
  name: "MyComponent",
  
  delimiters: ["<%","%>"],
  
  functional: false,
  
  model: {
    prop: 'checked',
    event: 'change'
  }
```

## 2. Assets
```javascript
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
  }
```

## 3. Composition
```javascript
  mixins: [ myMixin ],

  extends: myComponent2,

  provide () {
    return {
      [s]: 'foo'
    }
  },

  inject: { s }
```

## 4. Element
```javascript
  el: "#app",

  template: "<div></div>"
```

## 5. Props
```javascript
  props: {
    some: {
      type: String | Object,
      
      required: true,
      
      // if required false, can default
      default: () => {},
 
      validator: value => value
    }
  },

  // propsData is most often used for tests
  propsData: {
    some: "hello"
  }
```

## 6. Data
```javascript
  data: () => ({
      some: 1
  })
```

## 7. Computed
```javascript
  computed: {
    someComputed() {
       return 1;
    }
  }
  // or if you use mapstate
  computed: mapState({
    someValue = state => state.someValue
  })
  // and spread
  computed: {
    someComputed() {
      return 1;
    },
    ...mapState({
      someValue = state => state.someValue
    })
  }
```

## 8. Watch
```javascript
  watch: {
    some: (val) {
      //...
    }
  }
```

## 9. Methods
```javascript
  methods: {
    someMethod() {
      //...
    }
  }
```

## 10. Lifecycle hooks
```javascript
  beforeCreate() {
    //...
  },

  created() {
    //...
  },
  
  beforeMount() {
    //...
  },
  
  mounted() {
    //...
  },
  
  beforeUpdate() {
    //...
  },
  
  updated() {
    //...
  },
  
  activated() {
    //...
  },
  
  deactivated() {
    //...
  },
  
  beforeDestroy() {
    //...
  },
  
  destroyed() {
    //...
  },
  
  errorCaptured: (error) => {
    console.log(error);
  }
```

## 11. Render
```javascript
  render: (createElement) => {
    return '';
  },

  renderError () {
    return '';
  }
```
