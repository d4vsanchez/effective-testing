import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

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

beforeEach(() => {
  document.body.innerHTML = "";
});

it("does not show any contents when no item is selected", () => {
  render(<Accordion items={[ruby, smalltalk]} />);

  const divs = screen.queryAllByRole("region");
  expect(divs).toHaveLength(0);
});

it("does show contents when an item is selected", () => {
  render(<Accordion items={[ruby, smalltalk]} />);

  const smalltalkHeader = screen.getByLabelText("Open Smalltalk");
  userEvent.click(smalltalkHeader);

  const divs = screen.queryAllByRole("region");
  expect(divs).toHaveLength(1);
  expect(divs[0]).toHaveTextContent(smalltalk.body);
});
