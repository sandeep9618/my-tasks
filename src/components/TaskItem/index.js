const TagItem = props => {
  const {eachItem} = props
  const {taskName, tagName} = eachItem
  return (
    <li className="task-item">
      <p className="task-name">{taskName}</p>
      <p className="tag-name">{tagName}</p>
    </li>
  )
}

export default TagItem
