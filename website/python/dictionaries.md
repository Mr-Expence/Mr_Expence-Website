---
search: false
---
# Dictionaries

A dictionary stores data as **key-value pairs**. Instead of accessing items by index (position 0, 1, 2...), you access them by a **name** (the key).

Think of it like a real dictionary: you look up a word (key) to get its definition (value).

---

## Creating a dictionary

```python
pack = {
    "name": "Flaming Swords",
    "version": "2.0",
    "downloads": 15400,
    "platforms": ["Modrinth", "CurseForge"],
}
```

Keys are usually strings. Values can be anything — strings, numbers, lists, even other dicts.

---

## Accessing values

```python
print(pack["name"])       # Flaming Swords
print(pack["downloads"])  # 15400
```

If the key doesn't exist, you'll get a `KeyError`. Use `.get()` to avoid this:

```python
print(pack.get("author"))           # None (no error)
print(pack.get("author", "Unknown")) # Unknown (default value)
```

---

## Adding and modifying entries

```python
pack["author"] = "Mr_Expence"     # add new key
pack["version"] = "2.1"           # update existing key
print(pack["version"])  # 2.1
```

---

## Removing entries

```python
del pack["platforms"]           # delete by key

removed = pack.pop("version")   # delete and return the value
print(removed)  # 2.1
```

---

## Checking if a key exists

```python
if "name" in pack:
    print(f"Pack: {pack['name']}")

if "price" not in pack:
    print("No price listed.")
```

---

## Iterating over a dictionary

### Keys only (default)

```python
for key in pack:
    print(key)
# name, version, downloads, ...
```

### Values only

```python
for value in pack.values():
    print(value)
```

### Keys and values together

```python
for key, value in pack.items():
    print(f"{key}: {value}")
```

Output:

```
name: Flaming Swords
version: 2.0
downloads: 15400
platforms: ['Modrinth', 'CurseForge']
```

---

## Useful methods

```python
pack = {"name": "Shulker UI", "version": "1.3", "downloads": 8200}

print(pack.keys())    # dict_keys(['name', 'version', 'downloads'])
print(pack.values())  # dict_values(['Shulker UI', '1.3', 8200])
print(pack.items())   # dict_items([('name', 'Shulker UI'), ...])
print(len(pack))      # 3
```

### Merging dictionaries

```python
base = {"name": "Shulker UI", "version": "1.3"}
extra = {"author": "Zac", "license": "CC BY-NC 4.0"}

merged = {**base, **extra}  # unpack both into a new dict
print(merged)
# {'name': 'Shulker UI', 'version': '1.3', 'author': 'Zac', 'license': 'CC BY-NC 4.0'}
```

Or use `.update()`:

```python
base.update(extra)
print(base)  # base now has all keys
```

---

## Nested dictionaries

Dictionaries can contain other dictionaries:

```python
packs = {
    "flaming_swords": {
        "version": "2.0",
        "downloads": 15400,
    },
    "shulker_ui": {
        "version": "1.3",
        "downloads": 8200,
    }
}

print(packs["flaming_swords"]["downloads"])  # 15400
```

Accessing nested data gets deep fast. Assign to a local variable when reusing:

```python
fs = packs["flaming_swords"]
print(fs["version"])   # 2.0
print(fs["downloads"]) # 15400
```

---

## Dictionary comprehensions

Just like list comprehensions, but for dicts:

```python
numbers = [1, 2, 3, 4, 5]
squares = {n: n ** 2 for n in numbers}
print(squares)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

Filter while building:

```python
scores = {"Zac": 9500, "Alex": 7800, "Sam": 4200, "Tom": 6100}

# Only players with 7000+
high_scores = {name: score for name, score in scores.items() if score >= 7000}
print(high_scores)
# {'Zac': 9500, 'Alex': 7800}
```

---

## When to use a list vs a dictionary

| Use a **list** when | Use a **dict** when |
|---|---|
| Order matters | You need labelled data |
| Items are the same type of thing | Items have multiple attributes |
| You access by position | You access by name |
| Example: top 10 scores | Example: a player profile |

```python
# List: ordered scores
leaderboard = [9500, 7800, 6200]

# Dict: named player data
player = {
    "name": "Zac",
    "elo": 1450,
    "wins": 42,
    "losses": 8,
}
```

---


