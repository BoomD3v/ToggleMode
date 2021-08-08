const { React } = require('powercord/webpack')

module.exports = React.memo(
  (props) => (
    <svg viewBox='6 3.7 16 16' width={24} height={24} {...props}>
      <path
        fill='currentColor'
        d='M 12.5,3.5
        a 22.5,22.5 0 0,1 0,43
        a 22.5,22.5 0 1,0 0,-43 z'
      />
    </svg>
  )
)