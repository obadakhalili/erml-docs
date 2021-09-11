---
sidebar: auto
---

# Guide

::: warning
This documentation is not aimed at teaching you Entity-Relationship modeling concepts, rather than how to represent them using ERML. If you don't know what is Entity-Relationship, you can read about it from [here](https://creately.com/blog/diagrams/er-diagrams-tutorial)
:::

# Table of Content

[[toc]]

## Installation

Prerequisites

- Node version 12.0.0 or higher
- NPM

You can install the ERML parser from [NPM](http://npmjs.org/package/@erml/parser) or [yarn](https://classic.yarnpkg.com/en/package/@erml/parser) via the commands

```sh
npm install @erml/parser
yarn add @erml/parser
```

After that, all you have to do is to execute the parsing function exported by the library

```js
const ERMLParser = require("@erml/parser")
const ast = ERMLParser(`ENTITY Example_entity { SIMPLE "attribute_name" }`)
```

## Entities

Entities can be declared as

- Independent entities

  ```ts{1}
  ENTITY Entity_name {
    // Set of entity attributes
  }
  ```

- Dependent/Week entities

  ```ts{1}
  WEAK ENTITY Entity_name OWNER Owner_entity_name {
    // Set of entity attributes
  }
  ```

## Relationships

Relationships can be declared as

- Normal relationships

  ```ts{1}
  REL Relationship_name {
    // Set of participating entities, structural constraints, and attributes
  }
  ```

- Identifying relationships

  ```ts{1}
  IDEN REL Relationship_name {
    // Set of participating entities, structural constraints, and attributes
  }
  ```

### Participating Entities, and Structural Constraints

Participating entities are declared inside a relationship as follows

```ts{2,3}
{
  Participating_entity1 /* constraints */
  Participating_entity2 /* constraints */
}
```

We can declare the constraints of a participating entity using the angle brackets notation `<arg1, agr2>`. Where `arg1` is the participating constraint (`TOTAL` or `PARTIAL`), and `arg2` is the cardinality ratio constraint (`1` or `N`).

```ts{3,4}
REL User_group {
  // ..
  User <PARTIAL, 1>,
  Group <TOTAL, N>,
  // ..
}
```

Alternatively, we can use the `(min, max)` notation. Where `min` is the minimum number of participating entities (participation constraint), and `max` is the maximum number of participating entities (cardinality ratio).
Such that $0 \leq min \leq max \land max \geq 1$.

```ts{3,4}
REL User_group {
  // ..
  User (0, N),
  Group (5, N),
  // ..
}
```

### Relationship's Attributes

We can set attributes to relationships as follows

```ts{2}
{
  ATTRIBUTES {
    // Set of relationship attributes
  }
}
```

## Attributes

Attributes can be set to entities, relationships, and `COMPOSITE` attribute types. An attribute can take on one of 8 types

1. `SIMPLE` / `ATOMIC`
2. `PRIMARY`
3. `PARTIAL`
4. `DERIVED`
5. `MULTIVALUED`

The syntax for the mentioned types

```ts{3}
{
  // ..
  SIMPLE "DoB",
  DERIVED "age",
  // ..
}
```

6. `COMPOSITE`

The syntax for the `COMPOSITE` attribute type

```ts{2,4}
{
	COMPOSITE "attribute_name" {
		// ..
		SIMPLE "attribute1_name",
		PRIMARY "attribute2_name",
		DERIVED "attribute3_name",
		// ..
	}
}
```

::: tip Note

- One-line comments can be achieved by prefixing them with `//`
- Multi-line comments can be achieved by wrapping them between `/* */`
  :::

::: tip Note
ERML supports trailing commas. These code examples are valid
:::

```ts{5,6}
REL Rel_name {
  Participating_entity1 <PARTIAL, 1>,
  Participating_entity2 <TOTAL, 1>,
  ATTRIBUTES {
    SIMPLE "attribute_name",
  },
}
```

```ts{4,6}
ENTITY Entity_name {
  COMPOSITE "attribute_name1" {
    SIMPLE "attribute_name2",
    SIMPLE "attribute_name3",
  },
  PRIMARY "attribute_name4",
}
```

# The Complete Code of The Popular Company DB Example

## Example

```ts
ENTITY Employee {
  PRIMARY "SSN",
  SIMPLE "salary",
  SIMPLE "DoB",
  DERIVED "age",
  COMPOSITE "full_name" {
    SIMPLE "first_name",
    SIMPLE "last_name"
  }
}

ENTITY Department {
  PRIMARY "name",
  PRIMARY "number",
  DERIVED "employees_number",
  MULTIVALUED "locations"
}

ENTITY Project {
  PRIMARY "number",
  PRIMARY "name",
  SIMPLE "location"
}

WEAK ENTITY Dependent OWNER Employee {
  COMPOSITE "key" {
    PARTIAL "name",
    PARTIAL "DoB"
  },
  SIMPLE "relationship",
  SIMPLE "gender"
}

REL Works_for {
  Employee (1, N),
  Department (20, N)
}

REL Manages {
  Employee <PARTIAL, 1>,
  Department <TOTAL, 1>,
  ATTRIBUTES { SIMPLE "start_date" }
}

REL Supervision {
  Employee <PARTIAL, 1>,
  Employee <PARTIAL, N>
}

IDEN REL Dependents_of {
  Employee <PARTIAL, 1>,
  Dependent <TOTAL, N>
}

REL Works_on {
  Employee <PARTIAL, N>,
  Project <TOTAL, N>,
  ATTRIBUTES { SIMPLE "hours" }
}

REL Controls {
  Department <PARTIAL, N>,
  Project <TOTAL, 1>
}
```
