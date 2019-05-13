import * as React from 'react'
interface State {
  inputValue: string
}

export class ItemList extends React.Component<
  {
    label: string
    onChange: (items: string[]) => void
    items: string[]
  },
  State
> {
  public state: State = { inputValue: '' }

  private inputID = this.props.label
  public render() {
    const { items, onChange, label } = this.props
    return (
      <div className="item-list__container">
      <h3 className="item-list__header">
      {label}
      </h3>
        <div>
        </div>
        <div className="item-list">
          {items.map((item) => (
            <div key={item} className="item-list__list-item">
              <span>{item}</span>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onChange(this.props.items.filter((i) => i !== item))
                }}
              >
                ⛔️
              </button>
            </div>
          ))}
        </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onChange([...items, this.state.inputValue])
              this.setState({ inputValue: '' })
            }}
          >
            <label htmlFor={this.inputID}>Add item:</label>
            <input
              id={this.inputID}
              value={this.state.inputValue}
              onChange={(e) =>
                this.setState({ inputValue: e.currentTarget.value })
              }
            />
            <button>+</button>
          </form>
      </div>
    )
  }
}
