export const InputForm = (props) => {
  const {searchKey, handleSearch} = props;
  return (
    <label htmlFor="searchKey">
    <input
      type="text"
      value={searchKey}
      onChange={handleSearch}
      placeholder="Search Keyword"
    />
  </label>
  )
};
