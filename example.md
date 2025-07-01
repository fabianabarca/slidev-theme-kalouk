---
theme: ./
transition: slide-left
---

# Kalouk

Presentation slides with some niceties for math and programming

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: section
---

# Layouts

---
layout: fact 
---

# The Secret Sauce

Kalouk's layouts use PrimeVue UI components to enable new styles and functionality.

---
layout: subsection
---

# Kalouk Layouts

---

Kalouk provides a set of layouts specially suited for teaching and learning, with a focus on math and programming.

- Equation
- Chart
- Quiz
- Steps
- Code
- Process
- Exercise

---

# Equation

Showing an equation in its full glory with an extra big font.

```md 
---
layout: equation
---

# Title of the Equation

::equation::

E = mc^2

::bottom::

$E$ is the energy, $m$ is the mass, and $c$ is the speed of light.
```

---
layout: equation
---

# Title of the Equation

::equation::

$$
E = mc^2
$$

::bottom::

$E$ is the energy, $m$ is the mass, and $c$ is the speed of light.

---

# Chart

Good-looking charts with PrimeVue's Chart component.

```md
---
layout: chart
type: bar
dataSource: https://sli.dev/data/chart.json
---

# Title of the Chart
```

---
layout: chart
dataset: ingresos-semanales
type: line
---

# Title of the Chart

::bottom::

Footer content

---

# Quiz

Test your readers with a quiz and up to four options to choose the right one.

```md
---
layout: quiz
answer: B
---

# Title of the Quiz

::statement::

Statement of the quiz

::A::
Option A 

::B::
Option B
```

---
layout: quiz
answer: C
---

# Title of the Quiz

::statement::

Statement of the quiz

::A::
Option A

::B::
Option B

::C::
Option C

---

# Steps

A layout to show a sequence of steps, with a progress bar and navigation.

```md
---
layout: steps
---

# Title of the Steps

::step{header="Header 1" value="1"}
The content of step 1
::

::step{header="Header 2" value="2"}
The content of step 2
::

::step{header="Header 3" value="3"}
The content of step 3
::
```

---

# Title of the Steps

<Stepper />

---

# Code

This layout is for showing code snippets with syntax highlighting and line numbers, that executes the code in the browser and shows the output.

```md
---
layout: code
language: typescript
---

# Title of the Code

::code::

The initial content of the code block (can be edited)
```

---
layout: code
language: typescript
---

# Title of the Code

::code::

```ts {monaco-run} {autorun:false}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```

---

# Real-Time Plot

---

# Title of the Real-Time Plot

---
layout: subsection
---

# Slidev Layouts

*Kaloukified*

---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right

---
layout: two-cols-header 
---

# This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right

::bottom::

This shows at the bottom, aligned to the end (bottom) of the grid

---

# Mermaid

```mermaid
flowchart TD
  Start e1@--> Stop

  e1@{ animate: true }
```

---
layout: end
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
