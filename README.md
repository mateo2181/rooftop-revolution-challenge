# Rooftop Revolution - Challenge

## 🚀 Exercice
We need a web application page that given a CUPS search we display both its client and supply point information, plus if the client can become part of the rooftop revolution including the type of offer they would get.

## 👾 Requirements

### Business requirements

* We need to know which clients are allowed to get enrolled with the rooftop revolution. In order to offer solar product, the client's `building_type` must be **house** and it needs to have **at least 1 neighbor**.

* We have three types of offers for those clients that can have be part of the rooftop revolution each of them with a different discount percentage and with their conditions:
    1. **Standard offer**: No discount, no conditions.
    2. **Basic discount**: 5% discount. Conditions: its neighbors should have `p1` and `p2` powers lower than the current client's supply point.
    3. **Special discount**: 12% discount. Conditions: the addition of the `invoiced_amount` of its neighbors should be more than 100 euros.

## Notes
- For the business logic implementation, I assumed that an offer with a better discount will be prioritized over the other ones. For instead, in case a client can get the Basic discount and Special discount offers, only the Special discount is returned since has a better discount (12%) than the Basic one (5%).
- An API using **Nuxt Server** was created to returns the data from the JSON files.
    - `/api/clients`: Get all the clients.
    - `/api/clients/{cups}`: Get client by CUPS.
    - `/api/supply-points`: Get all the supply points.
    - `/api/supply-points/{cups}`: Get supply point by CUPS.

- We use hexagonal architecture to encapsulate all the business logic in one place providing more maintainability and separation between domain, insfrastructure and presentation. 


## Project structure

- `core/domain`: business logic where we have models (entities), repositories (interfaces) and services with the use cases.
- `core/infrastructure`: We create the implementations of the repositories (adapters) that allow the application to access external services such as databases, APIs, etc. In our case, we will consume the API mentioned previously.
- `tests`: repository mocks and testing of the client service using Jest. 
- `ui`: contains the presentation layer. Technical details:
    - Implemented with Nuxt 3.
    - Using Pinia as state management.
    - TailwindCSS and custom components for styling.
    - Translations with i18n.
    - Unit tests with Vitest.
    - E2E tests with Cypress.


## 🚀 How to run the App
1. Install dependecies on the root level
```console
npm install
```

### Move to the ui folder and run:
1. Install dependencies
```console
npm install
```
2. Start the development server on `http://localhost:3000`
```console
npm run dev
```



## 🧪 How to run the Tests
- Run tests  
```console
npm run test
```
### Nuxt project
- Run unit tests  
```console
npm run test
```
- Run e2e tests (You should have running the dev server before to run cypress. Use `npm run dev` )  
```console
npm run cy:run
```


## Author
Mateo Merlo