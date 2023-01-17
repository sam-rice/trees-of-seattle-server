# Trees of Seattle API

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/Knex.js-E34F26?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
</p>

This is the repository for the server created for use with the [Trees of Seattle](https://github.com/sam-rice/trees-of-seattle) project. The server is built on Node.js/Express, with Knex.js middleware connecting to a Postgres database. The server is currently deployed via Heroku.

## API Reference

#### Base URL

```http
  https://radiant-harbor-65607.herokuapp.com/
```

#### Get all trees

```http
  GET v1/trees
```
<table>
  <tbody>
    <tr>
      <td>Method</td><td>Request Body</td><td>Sample Successful Response</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>n/a</code></td>
      <td>
<code>[{ 
    id: [number],
    species_common: [string], 
    species_sci: [string],
    is_native: [boolean],
    address: [string], 
    height: [number || null], 
    circ: [number || null],
    age: [number], 
    author: [string],
    img_url: [string || null],
    neighborhood: [string || null],
    lat: [number],
    long: [number],
},
...]</code>
      </td>
    </tr>
  </tbody>
</table>

#### Post new tree

```http
  POST v1/trees
```

<table>
  <tbody>
    <tr>
      <td>Method</td><td>Request Body</td><td>Sample Successful Response</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td>
<code>{ 
    speciesCommon: [string], 
    speciesSci: [string],
    isNative: [boolean],
    address: [string], 
    height: [number || null], 
    circ: [number || null],
    age: [number], 
    author: [string],
    imageURL: [string || null],
    neighborhood: [string || null],
    lat: [number],
    long: [number],
}</code>
      </td>
      <td>
<code>{ 
    id: [number],
    species_common: [string], 
    species_sci: [string],
    is_native: [boolean],
    address: [string], 
    height: [number || null], 
    circ: [number || null],
    age: [number], 
    author: [string],
    img_url: [string || null],
    neighborhood: [string || null],
    lat: [number],
    long: [number],
}</code>
      </td>
    </tr>
  </tbody>
</table>
