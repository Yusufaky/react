import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["teste1", "teste2", "teste3"],
  };

  handlerIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handlerIncrement}
          className="btn btn-secondary btn-sm"
        >
          Adicionar
        </button>
        {/* {this.state.tags.length === 0 && "Colocar novas tags"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>Nao ha tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
