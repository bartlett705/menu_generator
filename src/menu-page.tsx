import * as React from 'react'
import { RouterProps } from 'react-router'
import { mockState } from '../test/__mocks__/state'
import { ItemList } from './item-list'

interface State {
  inputError: boolean
  proteins: string[]
  starches: string[]
  sauces: string[]
}

export class MenuPage extends React.Component<RouterProps> {
  public state: State = {
    inputError: false,
    ...mockState(),
  }

  public render() {
    return (
      <div className="ingredient-form">
      <div className="ingredient-list">
        <ItemList
          label="Proteins"
          items={this.state.proteins}
          onChange={(proteins) => this.setState({ proteins })}
        />
        <ItemList
          label="Starches"
          items={this.state.starches}
          onChange={(starches) => this.setState({ starches })}
        />
        <ItemList
          label="Sauces"
          items={this.state.sauces}
          onChange={(sauces) => this.setState({ sauces })}
        />
        </div>
        <div className="ingredient-form__controls">
        <button>Go ▶️</button>
        </div>
        {this.state.inputError && (
          <div className="errors">
            {this.state.inputError && 'You need to fix something.'}
          </div>
        )}
        </div>
    )
  }

  private genMenu = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    this.setState({ inputError: true })
  }
}
