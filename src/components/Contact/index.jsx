import React, { Component } from 'react';


class Index extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      titleComponent: 'My Title',
    };

    this.handlerOnClick = this.handlerOnClick.bind(this);
    this.handlerOnChance = this.handlerOnChance.bind(this);
  }

  handlerOnClick(){
    const { updateTitle } = this.props;
    const { titleComponent } = this.state;
    updateTitle(titleComponent);
  };

  handlerOnChance(e) {

    this.setState({
      titleComponent: e.target.value,
    });

  };

  render () {
    const { title } = this.props;
    const { titleComponent } = this.state;
    return (
      <div>
        <h2>
          { title }
        </h2>
        <h3>
          { titleComponent }
        </h3>
        <form>
          <input type="text" onChange={this.handlerOnChance} placeholder="Cambiar Title" value={this.titleComponent}/>
            <button type="button" onClick={this.handlerOnClick}>
              Cambiar Title
            </button>
          </form>
      </div>
    );

  };

}


export default Index;
