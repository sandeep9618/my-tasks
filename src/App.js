import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from './components/TagItem'
import './App.css'
import TaskItem from './components/TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const Option = props => {
  const {eachItem} = props
  const {displayText} = eachItem
  return <option value={displayText}>{displayText}</option>
}

class App extends Component {
  state = {
    tasks: [],
    userInput: '',
    tagInput: tagsList[0].displayText,
    activeTag: 'all',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTagInput = event => {
    this.setState({tagInput: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {tasks, userInput, tagInput} = this.state
    const newObj = {taskName: userInput, tagName: tagInput, id: v4()}
    this.setState({tasks: [...tasks, newObj]})
  }

  onChangeActiveTagName = id => {
    this.setState({activeTag: id})
  }

  render() {
    const {tasks, userInput, tagInput, activeTag} = this.state
    const filterData =
      activeTag === 'all' ? tasks : tasks.filter(i => i.tagName === activeTag)
    return (
      <div className="bg-container">
        <form className="create-task-container" onSubmit={this.onAddTask}>
          <h1 className="main-heading">Create a task!</h1>
          <label htmlFor="task" className="task-label">
            Task
          </label>
          <input
            id="task"
            type="text"
            className="input"
            placeholder="Enter the task here"
            onChange={this.onChangeUserInput}
            value={userInput}
          />
          <label htmlFor="tags" className="task-label">
            Tags
          </label>
          <select
            className="input"
            onChange={this.onChangeTagInput}
            value={tagInput}
          >
            {tagsList.map(eachItem => (
              <Option eachItem={eachItem} key={eachItem.optionId} />
            ))}
          </select>
          <button type="submit" className="add-task-btn">
            Add Task
          </button>
        </form>

        <div className="task-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachItem => (
              <TagItem
                eachItem={eachItem}
                key={eachItem.optionId}
                onChangeActiveTagName={this.onChangeActiveTagName}
                activeTag={activeTag}
              />
            ))}
          </ul>
          <h1 className="tags-heading">Tasks</h1>
          <div>
            {filterData.length === 0 ? (
              <p className="not-task">No Tasks Added Yet</p>
            ) : (
              <ul className="list-of-tasks-container">
                {filterData.map(eachItem => (
                  <TaskItem eachItem={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
