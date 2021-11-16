import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className="bg-gray-500 text-center font-bold text-white py-4 text-3xl">
      <h1 className="capitalize">{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Todo App'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
