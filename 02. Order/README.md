# Order in component:

## 1. Name
```javascript
  name: "MyComponent",
```
## 2. Assets
```javascript
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
```

## 3. Props
```javascript
  props: {
    some: {
      type: Object | Array,
      
      required: true,
      
      // if required false, can default
      default: () => {},
 
      validator: value => value
    }
  }
```

## 4. Data
```javascript
  data() {
    return {
      some: 1
    }
  }
```

## 5. Computed
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

## 6. Methods
```javascript
  methods: {
    someMethod() {
      //...
    }
  }
```

## 7. Lifecycle hooks
```javascript
  beforeCreate() {
    //...
  }

  created() {
    //...
  }
  
  beforeMount() {
    //...
  }
  
  mounted() {
    //...
  }
  
  beforeUpdate() {
    //...
  }
  
  updated() {
    //...
  }
  
  activated() {
    //...
  }
  
  deactivated() {
    //...
  }
  
  beforeDestroy() {
    //...
  }
  
  destroyed() {
    //...
  }
  
  errorCaptured: (error) => {
			console.log(error);
	}
```
