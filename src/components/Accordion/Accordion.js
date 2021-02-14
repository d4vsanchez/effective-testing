import "twin.macro";
import React from "react";

import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  state = {
    openItem: null,
  };

  setOpenItem = (openItem) => this.setState({ openItem });

  render() {
    const { openItem } = this.state;

    return (
      <section tw="shadow">
        {this.props.items.map((item) => {
          const isOpen = item.id === openItem;
          return (
            <AccordionItem
              key={item.id}
              isOpen={isOpen}
              body={item.body}
              header={item.header}
              onClick={() => this.setOpenItem(item.id)}
            />
          );
        })}
      </section>
    );
  }
}

export default Accordion;
