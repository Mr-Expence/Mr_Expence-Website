# Chapter 8 — Lists

A list is an **ordered collection of items**. It can hold any mix of values — strings, numbers, booleans, even other lists.

---

## Creating a list

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]
scores = [9500, 7800, 6200, 4100]
mixed = [1, "hello", True, 3.14]
empty = []
```

---

## Accessing items

Lists are zero-indexed — the first item is at index `0`:

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]

print(packs[0])   # Flaming Swords
print(packs[1])   # Shulker UI
print(packs[-1])  # Default Plus (last item)
print(packs[-2])  # Shulker UI (second to last)
```

---

## Slicing

Get a portion of a list:

```python
scores = [100, 85, 70, 65, 50]

print(scores[1:3])   # [85, 70]    (index 1 and 2, not 3)
print(scores[:3])    # [100, 85, 70]
print(scores[2:])    # [70, 65, 50]
print(scores[::-1])  # [50, 65, 70, 85, 100]  (reversed)
```

---

## Modifying lists

Lists are **mutable** — you can change them after creation.

```python
packs = ["Flaming Swords", "Shulker UI"]

packs[0] = "Flaming Swords v2"
print(packs)  # ['Flaming Swords v2', 'Shulker UI']
```

---

## Common list methods

### Adding items

```python
packs = ["Flaming Swords"]

packs.append("Shulker UI")      # adds to the end
print(packs)  # ['Flaming Swords', 'Shulker UI']

packs.insert(0, "Default Plus") # insert at index 0
print(packs)  # ['Default Plus', 'Flaming Swords', 'Shulker UI']
```

### Merging lists

```python
a = [1, 2, 3]
b = [4, 5, 6]

a.extend(b)
print(a)  # [1, 2, 3, 4, 5, 6]

# Or use +
combined = a + b
```

### Removing items

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]

packs.remove("Shulker UI")  # removes by value
print(packs)  # ['Flaming Swords', 'Default Plus']

packs.pop()      # removes and returns the last item
packs.pop(0)     # removes and returns item at index 0
```

### Finding items

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]

print("Shulker UI" in packs)       # True
print(packs.index("Shulker UI"))   # 1
print(packs.count("Flaming Swords")) # 1
```

---

## Sorting

```python
scores = [70, 100, 45, 85]

scores.sort()             # sorts in place (ascending)
print(scores)  # [45, 70, 85, 100]

scores.sort(reverse=True) # descending
print(scores)  # [100, 85, 70, 45]

# sorted() returns a new list, doesn't modify the original
original = [3, 1, 4, 1, 5]
new = sorted(original)
print(original)  # [3, 1, 4, 1, 5]
print(new)       # [1, 1, 3, 4, 5]
```

Sort strings alphabetically:

```python
packs = ["Shulker UI", "Default Plus", "Flaming Swords"]
packs.sort()
print(packs)  # ['Default Plus', 'Flaming Swords', 'Shulker UI']
```

Sort by a custom key:

```python
packs = [
    {"name": "Shulker UI", "downloads": 8200},
    {"name": "Flaming Swords", "downloads": 15400},
]

packs.sort(key=lambda p: p["downloads"], reverse=True)
print(packs[0]["name"])  # Flaming Swords
```

---

## Length

```python
packs = ["Flaming Swords", "Shulker UI", "Default Plus"]
print(len(packs))  # 3
```

---

## Looping over a list

```python
for pack in packs:
    print(pack)
```

With index:

```python
for i, pack in enumerate(packs):
    print(f"{i + 1}. {pack}")
```

---

## List comprehensions

Build a new list from an existing one in one line:

```python
scores = [45, 80, 90, 55, 70]

# All scores doubled
doubled = [s * 2 for s in scores]

# Only passing scores (>= 60)
passing = [s for s in scores if s >= 60]

print(passing)  # [80, 90, 70]
```

---

## Nested lists (2D lists)

Lists can contain other lists — useful for grids, tables, coordinates:

```python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

print(grid[0])     # [1, 2, 3]
print(grid[1][2])  # 6  (row 1, column 2)
```

---

## Useful built-in functions for lists

```python
numbers = [3, 1, 7, 2, 9]

print(len(numbers))   # 5
print(min(numbers))   # 1
print(max(numbers))   # 9
print(sum(numbers))   # 22
print(sorted(numbers)) # [1, 2, 3, 7, 9]
```

---

## Copying a list

Be careful — assigning a list to a new variable doesn't copy it:

```python
a = [1, 2, 3]
b = a            # b points to the SAME list as a

b.append(4)
print(a)         # [1, 2, 3, 4]  -- a was also changed!
```

To make an actual copy:

```python
a = [1, 2, 3]
b = a.copy()     # or: b = a[:]  or: b = list(a)

b.append(4)
print(a)         # [1, 2, 3]   -- unaffected
print(b)         # [1, 2, 3, 4]
```

---

**Next chapter → [Dictionaries](/python/09-dictionaries)**
