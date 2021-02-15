import { mount } from "enzyme";
import Accordion from "../Accordion";

// Test utils
const smalltalk = {
  id: "smalltalk",
  header: "Smalltalk",
  body:
    'Smalltalk is an object-oriented, dynamically typed reflective programming language. Smalltalk was created as the language underpinning the "new world" of computing exemplified by "human–computer symbiosis". It was designed and created in part for educational use, specifically for constructionist learning, at the Learning Research Group (LRG) of Xerox PARC by Alan Kay, Dan Ingalls, Adele Goldberg, Ted Kaehler, Diana Merry, Scott Wallace, and others during the 1970s.',
};

const ruby = {
  id: "ruby",
  header: "Ruby",
  body:
    'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, and Lisp',
};

it("sets the state properly when using setOpenItem", () => {
  const wrapper = mount(<Accordion items={[]} />);
  expect(wrapper.state("openItem")).toBeNull();

  // Use setOpenItem to change the state value
  wrapper.instance().setOpenItem(1);
  expect(wrapper.state("openItem")).toBe(1);
});

it("does not render contents when no item is selected", () => {
  const wrapper = mount(<Accordion items={[ruby, smalltalk]} />);
  expect(wrapper.find("AccordionBody")).toHaveLength(0);
});

it("renders the contents when an item is selected", () => {
  const wrapper = mount(<Accordion items={[ruby, smalltalk]} />);

  // Use setOpenItem to change the state value
  wrapper.instance().setOpenItem(smalltalk.id);
  wrapper.update();

  expect(wrapper.find("AccordionBody")).toHaveLength(1);
  expect(wrapper.find("AccordionBody").prop("children")).toBe(smalltalk.body);
});
