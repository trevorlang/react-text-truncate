import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text/Text'

export class TruncateText extends React.Component {
  constructor() {
    super()
    this.componentRef = React.createRef()
    this.state = {
      truncatedText: ''
    }
  }

  componentDidMount() {
    const { lines } = this.props
    this.maxLines = lines
    this.setLineHeight(this.componentRef.current)
    this.truncateText(this.componentRef.current)
  }

  setLineHeight(element) {
    const tempElement = this.createClone(element)
    const tempParent = this.createClone(element.parentNode)
    const grandparent = element.parentNode.parentNode

    tempElement.innerHTML = 'A'
    tempParent.innerHTML = ''
    tempParent.appendChild(tempElement)
    grandparent.appendChild(tempParent)
    this.lineHeight = tempElement.getBoundingClientRect().height + 2
    grandparent.removeChild(tempParent)
  }

  createClone(element) {
    const clone = document.createElement(element.nodeName)
    clone.setAttribute('class', element.className)
    clone.setAttribute('id', element.id)
    return clone
  }

  truncateText(element) {
    const { children } = this.props
    if (!children) return
    const tempParent = element.parentNode.cloneNode(true)
    const originalElement = tempParent.querySelector('.rtt-element')
    const tempElement = this.createClone(tempParent.querySelector('.rtt-element'))
    const grandparent = element.parentNode.parentNode

    tempElement.innerHTML = children
    tempParent.replaceChild(tempElement, originalElement)
    grandparent.appendChild(tempParent)

    while (tempElement.getBoundingClientRect().height > this.lineHeight * this.maxLines) {
      tempElement.innerHTML = tempElement.innerHTML.replace(/\W*\s(\S)*$/, '...')
    }

    this.setState({
      truncatedText: tempElement.innerHTML
    })
    grandparent.removeChild(tempParent)
  }

  render() {
    const { children, className, ...rest } = this.props
    const { truncatedText } = this.state
    const classNames = `rtt-element ${className}`
    return (
      <Text ref={this.componentRef} className={classNames} title={children} {...rest}>
        {truncatedText}
      </Text>
    )
  }
}

TruncateText.defaultProps = {
  as: null,
  className: '',
  children: null,
  lines: 1
}

TruncateText.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
  lines: PropTypes.number
}

export default TruncateText
