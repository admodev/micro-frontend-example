/*
 *
 * SafeComponent for error handling.
 * Wrap other components inside this one to handle posible errors.
 *
 */

import React from "react";

interface Estado {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<{}, Estado> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Ups! algo salio mal...</h1>;
    }

    return this.props.children;
  }
}
