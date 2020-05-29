import React, {Component} from 'react'
import log from 'loglevel'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error}
  }

  componentDidCatch(error, errorInfo) {
    log.warn(error, errorInfo.componentStack)
  }

  render() {
    return this.state.hasError ? (
      <div className="error-page">
        <div className="error-img mb-4" />
        <h2 className="text-center">
          It seems like the page didn&apos;t load properly. Please refresh the
          page
        </h2>
      </div>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
