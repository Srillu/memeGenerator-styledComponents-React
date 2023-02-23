import {Component} from 'react'

import {
  BgContainer,
  GenerateButton,
  MemeBackground,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    isGenerate: false,
    url: '',
    fontSize: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMemeBackground = () => {
    const {topText, bottomText, url, fontSize} = this.state

    return (
      <MemeBackground bgImage={url} data-testid="meme">
        <div>
          <Paragraph fontSize={fontSize}>{topText}</Paragraph>
        </div>
        <Paragraph fontSize={fontSize}>{bottomText}</Paragraph>
      </MemeBackground>
    )
  }

  onClickGenerate = event => {
    event.preventDefault()
    const {topText, bottomText, url, fontSize} = this.state

    this.setState({
      isGenerate: true,
      topText,
      bottomText,
      url,
      fontSize,
    })

    // this.setState({topText: '', bottomText: '', url: ''})
  }

  renderMemeGenerator = () => {
    const {topText, bottomText, url, fontSize} = this.state
    console.log(fontSize)
    return (
      <div>
        <h1>Meme Generator</h1>
        <form onSubmit={this.onClickGenerate}>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <br />
            <input
              id="imageUrl"
              type="text"
              placeholder="Enter the image Url"
              onChange={this.onChangeUrl}
              value={url}
            />
          </div>
          <br />
          <div>
            <label htmlFor="topText">Top Text</label>
            <br />
            <input
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              value={topText}
            />
          </div>
          <br />
          <div>
            <label htmlFor="bottomText">Bottom Text</label>
            <br />
            <input
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              value={bottomText}
            />
          </div>
          <br />
          <div>
            <label htmlFor="fontSize">Font Size</label>
            <br />
            <select id="fontSize" onChange={this.onChangeSelectOption}>
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
          </div>

          <GenerateButton type="submit">Generate</GenerateButton>
        </form>
      </div>
    )
  }

  render() {
    const {isGenerate} = this.state
    return (
      <BgContainer>
        {this.renderMemeGenerator()}
        {isGenerate ? this.renderMemeBackground() : null}
      </BgContainer>
    )
  }
}

export default MemeGenerator
