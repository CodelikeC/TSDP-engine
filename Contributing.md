# Contributing Guide

Thank you for your interest in contributing to this project.

This document explains how to contribute effectively.

---

# Ways to Contribute

You can contribute in several ways:

* fixing bugs
* improving documentation
* adding new pipeline stages
* improving validation logic
* proposing architectural improvements

---

# Development Setup

1. Clone the repository

```
git clone https://github.com/your-org/type-safe-data-pipeline
```

2. Install dependencies

```
npm install
```

3. Start development

```
npm run dev
```

---

# Project Structure

Key directories:

```
core/
pipeline engine and stage interfaces

types/
data schemas and type definitions

stages/
pipeline stage implementations

ingestion/
data input modules

output/
dataset export modules
```

---

# Coding Guidelines

Please follow these guidelines when contributing:

### Use TypeScript strictly

* Avoid using `any`
* Define clear interfaces
* Maintain type safety across stages

### Keep stages modular

Each stage should:

* have a single responsibility
* define clear input/output types
* be easy to test

### Write clear code

* use descriptive variable names
* keep functions small
* add comments when necessary

---

# Pull Request Process

1. Fork the repository
2. Create a new branch

```
feature/your-feature-name
```

3. Commit your changes

```
git commit -m "Add feature stage for sensor normalization"
```

4. Push your branch

5. Open a Pull Request

---

# Pull Request Review

Pull requests will be reviewed for:

* code quality
* architecture consistency
* documentation clarity
* type safety

---

# Reporting Issues

If you find a bug or want to request a feature:

1. open a GitHub issue
2. describe the problem clearly
3. provide examples if possible

---

# Contribution Philosophy

We aim to keep the project:

* simple
* readable
* educational
* extensible

Contributions that improve **clarity and maintainability** are always welcome.
