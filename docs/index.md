---
sidebar: auto
---

# ERML - Entity-Relationship Markup Language

## The What

ERML is a super easy-to-write DSL that represents conceptual data models using the Entity-Relationship modeling concepts.
What does that gibberish mean? You write code to represent your Entity-Relationship diagram, and the ERML parser parses it into an AST. From there, an application can take the resulted AST and build all sorts of things with it, creating an ecosystem.
<br/>
Examples of things that can be built on top of ERML:

* [ERD visualizer](https://erml-visualizer.netlify.app/)
* CLI tool that takes ERML code as input and turns it into [DBML](https://www.dbml.org/) code, which can be converted into SQL

What is DBML? DBML is where ERML is inspired from. You can read more about it from the [inspiration section](/#inspiration).

## The Why

ERML came to life from my frustration caused by using drawing tools. Where I have to drag things around and make sure they look good. Using the ERML parser, a visualizer can take the generated AST and turns it into pre-made visualizes.

## Inspiration

As mentioned above, ERML is inspired by DBML and [dbdiagram](https://dbdiagram.io/home). DBML is a DSL language designed to define and document database schemas and structures (relational models). While ERML is designed to define and document ER diagrams.
