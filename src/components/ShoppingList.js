import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All"
  };

  handleCategoryChange = (event) => {
    // event.target.value will be the value selected by the user
    this.setState({ selectedCategory: event.target.value });
  };

  render() {
    const { items } = this.props;
    // we want to filter the items to only display the ones based on the selected category
    const itemsToDisplay = items.filter((item) => {
      if (this.state.selectedCategory === "All") return true;

      return item.category === this.state.selectedCategory;
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
