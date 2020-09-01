import React from 'react';
import shouldComponentUpdate from './shouldComponentUpdate';

export default class PureComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  constructor(props?: any, context?: any) {
    super(props, context);
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
  }

  setState(state, callback, mandatoryUpdate) {
    super.setState(mandatoryUpdate || (callback && typeof callback === 'boolean') ? {
      ...state,
      PURE_COMPONENT_RANDOM_CHARACTER_STAMP: new Date().getTime()
    } : state, typeof callback === 'function' ? callback : null);
  }
}
