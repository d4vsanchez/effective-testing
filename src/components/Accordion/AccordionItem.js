import tw from "twin.macro";
import styled from "styled-components";

import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";

const Container = styled.div(({ isOpen }) => [
  !isOpen && tw`border-transparent`,
  isOpen && tw`border-indigo-500`,
]);

function AccordionItem({ onClick, isOpen, header, body }) {
  return (
    <article tw="border-b">
      <Container tw="border-l-2" isOpen={isOpen}>
        <AccordionHeader isOpen={isOpen} onClick={onClick}>
          {header}
        </AccordionHeader>
        {isOpen && <AccordionBody>{body}</AccordionBody>}
      </Container>
    </article>
  );
}

export default AccordionItem;
