import "twin.macro";

import Accordion from "./components/Accordion/Accordion";

import languages from "./data/languages.json";

function App() {
  return (
    <div tw="flex h-screen items-center bg-gray-100">
      <div tw="mx-auto w-auto max-w-lg w-full">
        <h1 tw="mb-4 text-2xl font-light">Programming languages</h1>
        <Accordion items={languages} />
      </div>
    </div>
  );
}

export default App;
