const TagItem = props => {
  const {eachItem, onChangeActiveTagName, activeTag} = props
  const {displayText} = eachItem
  const onClickItem = () => {
    onChangeActiveTagName(displayText)
  }
  const cssButton =
    activeTag === displayText ? 'active-button' : 'inactive-button'
  return (
    <li className="tag-item">
      <button className={cssButton} type="button" onClick={onClickItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
