import "twin.macro";

function AccordionBody({ children }) {
  return (
    <div>
      <div tw="pl-12 pr-12 pb-5 text-gray-700 bg-white" role="region">
        {children}
      </div>
    </div>
  );
}

export default AccordionBody;
