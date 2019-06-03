import React from 'react'
import PropTypes from 'prop-types'

const Text = React.forwardRef(({
  children,
  className,
  as,
  title
}, ref) => {
  const TagType = `${as || 'span'}`
  return (
    <TagType ref={ref} className={className} title={title}>{children}</TagType>
  )
})

Text.displayName = Text

Text.defaultProps = {
  children: null,
  className: null,
  as: 'span',
  title: null
}

Text.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
  title: PropTypes.string
}

export default Text