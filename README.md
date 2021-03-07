# Effective React ⚛️ Testing 🧪

## Slides

You can get the slides of the talk in the [slides.pdf](/slides.pdf) file.

## How can we increase our confidence in the tests?

We can say that our tests are effective when we have **full confidence** on our universe
of test cases. But I'm not talking into **false confidence** we might have, I'm talking
about real confidence that our tests are currently working and they do test our most
critical functionality **correctly**.

## Do not test implementation details

Most people who learned to make tests in React was taught to test the
**implementation details** of a component, either because the people who was teaching
it was doing that way or because that was actually the way that some libraries, such
as (Enzyme)[https://enzymejs.github.io/enzyme/], encouraged to test the implementation
details of your components.

Testing implementation details means testing the internal methods or variables of our
component, isolated of any interaction that may occur.

### False Negatives

Testing implementation details might result in false negatives, specially when you refactor
a component. This kind of errors may increase the developer fatigue as they will be fixing
tests that are not actually breaking because the component stopped working correctly,
but because the test was configured into testing some internal parts of the components
that changed, the tests will falsely fail.

The time that is invested into fixing tests broken by false negative is basically wasted,
because neither the stability of the component is being improved, no new tests cases are
being created and no new value is being built.

### False Positives

This is the most serious problem that may arise when testing implementation details. You
may change some behavior in the component, that actually breaks the component, but your
tests are telling you that everything is working perfectly and no test breaks.

This is what I was referring about having **false confidence** in your tests.

## Let's change the paradigm

Instead of testing the components by isolating its methods, its state, etc. Let's think
the following: **Who are the users of my application and how are they going to interact**
**with my component?**

Thinking this way will be very helpful as we will be able to test our components the way
our users are going to be using them.

You can see the difference of testing paradigm by comparing the implementation of these
two files:

- 📄 [Accordion/**tests**/Accordion.enzyme.js](src/components/Accordion/__tests__/Accordion.enzyme.js)
- 📄 [Accordion/**tests**/Accordion.rtl.js](src/components/Accordion/__tests__/Accordion.rtl.js)

_There is also an implementation using `react-test-renderer` that you can take a look_
_in the [tests folder](src/components/Accordion/__tests__/)_

## Testing Checklist

- [ ] **Which part of the codebase will be really bad if it broke?** Let's face it, not
      all parts of our application is important for the business, is testing those parts a
      correct use of your time or can you be adding value elsewhere in your application?

- [ ] **Reduce test cases into units**: Test individual use cases in every test case, do
      not try to pack every use case of your application into single test cases, this will make
      difficult to find the problem in case the tests case fails.

- [ ] **Look at the code and consider who's the user of this component**: The user of the
      example I'm showing in this component is clearly a end user, that interacts with the
      component using the browser and a mouse or their finger (in case they're in a mobile
      device). But sometimes, you may be testing Redux actions or other things like that,
      and thus, you need to create your tests using a different paradigm.

Making good tests increases the confidence level on your code.

## References

- [Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details/) by Kent C. Dodds
- [Avoid the test user](https://kentcdodds.com/blog/avoid-the-test-user/) by Kent C. Dodds
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html) documentation
- [Guiding Principles](https://testing-library.com/docs/guiding-principles) by React Testing Library
