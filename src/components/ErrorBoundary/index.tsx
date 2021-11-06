import React from "react";

type Props = {
  fallback: JSX.Element;
  resetKey: string;
};

type State = {
  hasError: boolean;
};

const INITIAL_STATE: State = {
  hasError: false,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }

  resetBoundary() {
    this.setState(INITIAL_STATE);
  }

  componentDidCatch(error: unknown) {
    console.log(error);
  }

  componentDidUpdate(prev: Props) {
    if (this.props.resetKey !== prev.resetKey) {
      this.resetBoundary();
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
