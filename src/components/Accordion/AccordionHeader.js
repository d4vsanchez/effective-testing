import tw from "twin.macro";
import styled from "styled-components";

const Header = styled.header(({ isOpen }) => [isOpen && tw`text-indigo-500`]);
const Button = styled.button(({ isOpen }) => [
  isOpen && tw`bg-indigo-500 text-white`,
]);

function AccordionHeader({ children, isOpen, onClick }) {
  return (
    <Header
      isOpen={isOpen}
      onClick={onClick}
      aria-expanded={isOpen}
      tw="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none bg-white"
    >
      <span tw="font-extralight text-xl">{children}</span>
      <Button
        aria-label={`Open ${children}`}
        tw="rounded-full border w-7 h-7 flex items-center justify-center"
        isOpen={isOpen}
      >
        {isOpen ? "-" : "+"}
      </Button>
    </Header>
  );
}

export default AccordionHeader;
