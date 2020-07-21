import * as icons from 'react-icons/fi'

function Icon({ name, ...rest }) {
  const Component = icons[name]
  return <Component className="icon" {...rest} />
}

export default Icon
