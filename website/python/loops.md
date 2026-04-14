# Loops

Loops let you repeat code. Instead of writing the same thing 100 times, you write it once and tell Python how many times to run it.

There are two types: `for` loops and `while` loops.

---

## `for` loops

A `for` loop iterates over a **sequence** — going through each item one at a time.

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]

for pack in packs:
    print(pack)
```

Output:

```
Flaming Swords
Shulker UI
Default Plus
```

The variable `pack` is just a name — it gets assigned to each item in the list, one by one, each iteration.

---

## `range()` — looping a specific number of times

`range()` generates a sequence of numbers:

```python
for i in range(5):
    print(i)
# 0, 1, 2, 3, 4
```

> Note: `range(5)` gives you **0 through 4**, not 1 through 5.

### Specifying start and end

```python
for i in range(1, 6):
    print(i)
# 1, 2, 3, 4, 5
```

### Step value

```python
for i in range(0, 20, 5):
    print(i)
# 0, 5, 10, 15
```

### Counting down

```python
for i in range(10, 0, -1):
    print(i)
# 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

---

## Looping over strings

Strings are sequences too — you can loop over each character:

```python
for char in "Python":
    print(char)
# P, y, t, h, o, n
```

---

## `while` loops

A `while` loop runs **as long as a condition is True**:

```python
health = 100

while health > 0:
    print(f"Health: {health}")
    health -= 25

print("You died.")
```

Output:

```
Health: 100
Health: 75
Health: 50
Health: 25
You died.
```

### Infinite loops

If the condition never becomes `False`, the loop runs forever. This is usually a bug:

```python
# DON'T DO THIS (unless you mean to)
while True:
    print("This never stops")
```

Sometimes you *want* an infinite loop (like a game loop or server), but you need a way to break out of it.

---

## `break` — exit a loop early

```python
for i in range(10):
    if i == 5:
        break
    print(i)
# 0, 1, 2, 3, 4
```

`break` immediately exits the loop, regardless of where you are in the iteration.

Real use case — searching for something:

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]
target = "Shulker UI"

for pack in packs:
    if pack == target:
        print(f"Found: {pack}")
        break
```

---

## `continue` — skip to the next iteration

```python
for i in range(6):
    if i == 3:
        continue
    print(i)
# 0, 1, 2, 4, 5  (3 is skipped)
```

`continue` skips the rest of the current iteration and jumps to the next one.

---

## `else` on loops

Python has a weird but useful feature: `for` and `while` loops can have an `else` block that runs *only if the loop completed without hitting `break`*:

```python
packs = ["Flaming Swords", "Shulker UI"]
target = "OptiFine Pack"

for pack in packs:
    if pack == target:
        print("Found it!")
        break
else:
    print("Pack not found.")  # runs because break was never hit
```

---

## Nested loops

Loops inside loops:

```python
for row in range(3):
    for col in range(3):
        print(f"({row}, {col})", end=" ")
    print()
```

Output:

```
(0, 0) (0, 1) (0, 2)
(1, 0) (1, 1) (1, 2)
(2, 0) (2, 1) (2, 2)
```

---

## `enumerate()` — loop with index and value

When you need to know both the position and the item:

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]

for i, pack in enumerate(packs):
    print(f"{i}: {pack}")
```

Output:

```
0: Flaming Swords
1: Shulker UI
2: Default Plus
```

Start counting from 1 instead of 0:

```python
for i, pack in enumerate(packs, start=1):
    print(f"{i}. {pack}")
```

---

## `zip()` — loop over two sequences at once

```python
names = ["Zac", "Alex", "Sam"]
scores = [9500, 7800, 6200]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

Output:

```
Zac: 9500
Alex: 7800
Sam: 6200
```

---

## List comprehensions (bonus)

A compact way to create a list using a loop:

```python
# Regular way
squares = []
for n in range(5):
    squares.append(n ** 2)

# List comprehension
squares = [n ** 2 for n in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

With a condition:

```python
evens = [n for n in range(10) if n % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]
```

These look intimidating at first but they're very common in real Python code. Read them as: *"give me X for each item in Y, but only if Z"*.

---

