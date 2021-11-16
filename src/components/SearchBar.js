import PropTypes from 'prop-types';

let search = ''

const setSearch = value => {
  search = value
}

const SearchBar = ({ placeholder, onClick }) => {
  return (
    <div className="flex gap-x-4 mx-auto w-3/5">
      <span
        className="px-2 py-1 invisible"
      >
        Submit
      </span>
      <input 
        className="px-2 py-1 w-full text-center focus:outline-none" 
        type="text" name="search" 
        onChange={e => setSearch(e.target.value)}  
        placeholder={ placeholder }
        onKeyPress={e => e.key === 'Enter' ? onClick(search): ''}
      />
      <button 
        className="border rounded-lg px-2 py-1" 
        onClick={() => onClick(search)} 
      >
        Submit
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func
}

SearchBar.defaultProps = {
  placeholder: 'Search something...'
}

export default SearchBar
