# react-pure-component

Unfortunately React.PureComponent is not embracing Immutable.js to it full potential. While Immutable.js provides hash value, witch allows for fast comparison of two different instances React.PureComonent is only comparing addresses of those instances.

### Example

```
class Example extends PureComponent<Props, Types> {}
```
