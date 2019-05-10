import React, { Component } from 'react';

interface Props {
  prop: string;
}
interface State {
  state: string;
}

class ClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { state: '' };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <div>Class Component</div>;
  }
}

export default ClassComponent;
