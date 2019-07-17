# Load Board Demo

## Running the App

Follow to following steps to show the demo

- Install Yarn - `brew install yarn`
- `yarn install`
- `yarn start`

to test:

- `yarn test`

## Approach

Based on the requirements, the first UI was highly suggested to be a tabular view with a modal dialog to edit values. After creating that I thought that a card view could be valuable for the kind of comparable data of this type.

This demo has many of the architectural philosophies I like to follow:

- Strong architectural boundaries
- Visual components separated from data ones
- Use well known libraries that are highly configurable
- Enable users to have multiple solutions to help them do their work
- High modularity, scalability and maintainability

## Effort

By leveraging well known architectural patterns total development time was about 4 hours spread across 2.5 days elapsed time. Compromises to bring the development time in were: fully specified unit tests (smoke testing was done) and more user focused styling (better text copy, styling of elements, business iconography - e.g. equipment)
