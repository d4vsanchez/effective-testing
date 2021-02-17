import "twin.macro";
import React from "react";

import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  state = {
    openItems: [],
  };

  setOpenItem = (openItem) => this.setState({ openItems: [openItem] });

  render() {
    const { openItems } = this.state;

    return (
      <section tw="shadow">
        {this.props.items.map((item) => {
          const isOpen = openItems.includes(item.id);
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
