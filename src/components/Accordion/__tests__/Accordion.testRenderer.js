import React from "react";
import ReactDOM from "react-dom";

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
  // Create a div to hold the components this is similar to the
  // <div id="root"></div> component is commonly used.
  const div = document.createElement("div");
  document.body.append(div);

  // Same statement we do in index.js
  ReactDOM.render(<Accordion items={[ruby, smalltalk]} />, div);

  // Search for divs as we would do with vanilla JS
  const divs = div.querySelectorAll("div[role='region']");

  expect(divs).toHaveLength(0);
});

it("does show contents when an item is selected", () => {
  // Create a div to hold the components this is similar to the
  // <div id="root"></div> component is commonly used.
  const div = document.createElement("div");
  document.body.append(div);

  // Same statement we do in index.js
  ReactDOM.render(<Accordion items={[ruby, smalltalk]} />, div);

  // Search for all the headers
  const headers = div.querySelectorAll("header");
  const smalltalkHeader = Array.from(headers).find((header) =>
    header.textContent.includes(smalltalk.header)
  );

  // Click the header
  const expandHeaderClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  smalltalkHeader.dispatchEvent(expandHeaderClickEvent);

  // Search for divs as we would do with vanilla JS
  const divs = div.querySelectorAll("div[role='region']");

  expect(divs).toHaveLength(1);
  expect(divs[0]).toHaveTextContent(smalltalk.body);
});
