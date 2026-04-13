# Chapter 2 — Variables & Data Types

## What's a variable?

A variable is a **named container for a value**. Instead of typing the same number or piece of text over and over, you give it a name and refer to it by that name.

```python
score = 100
print(score)  # 100
```

Think of it like a labelled box. You put something inside, give it a name, and you can open it later to see what's in it — or swap out the contents.

```python
score = 100
score = 150  # replaced the old value
print(score)  # 150
```

---

## Naming variables

Variable names in Python:

- Can contain **letters, numbers, and underscores**
- **Cannot start with a number**
- Are **case-sensitive** (`score` and `Score` are different variables)
- Should be **descriptive** — name it what it *is*

```python
# Good names
player_name = "Zac"
kill_count = 7
is_alive = True

# Bad names (avoid these)
x = "Zac"
n = 7
b = True
```

Python convention uses **snake_case** — all lowercase with underscores between words. Like `player_health`, not `playerHealth` or `PlayerHealth`.

---

## The four core data types

Python has several types of data. Here are the four you'll use constantly:

### 1. `int` — Whole numbers

```python
kills = 12
level = 5
year = 2025
```

No quotes. No decimal. Just the number.

### 2. `float` — Decimal numbers

```python
health = 84.5
speed = 1.25
pi = 3.14159
```

### 3. `str` — Text (strings)

```python
name = "Zac"
message = 'Welcome back!'
server_ip = "192.168.1.1"
```

Use single `'` or double `"` quotes — both work. Just be consistent.

### 4. `bool` — True or False

```python
is_online = True
is_banned = False
```

Booleans are always exactly `True` or `False`. Capital first letter, no quotes.

---

## Checking a variable's type

Use `type()` to see what type a variable is:

```python
print(type(42))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("hello"))  # <class 'str'>
print(type(True))     # <class 'bool'>
```

---

## Converting between types

Sometimes you need to change a value from one type to another:

```python
# String to integer
age_text = "20"
age = int(age_text)
print(age + 5)  # 25

# Integer to string
score = 9500
score_text = str(score)
print("Your score: " + score_text)  # "Your score: 9500"

# Integer to float
coins = 5
coins_float = float(coins)
print(coins_float)  # 5.0
```

> ⚠️ **Warning:** You can't do `"hello" + 5`. Python won't guess what you mean. Convert one of them first.

```python
# This breaks:
print("Score: " + 100)  # TypeError

# This works:
print("Score: " + str(100))  # Score: 100
```

---

## Multiple assignment

You can assign several variables at once:

```python
x, y, z = 1, 2, 3
print(x)  # 1
print(y)  # 2
print(z)  # 3
```

Or set multiple variables to the same value:

```python
a = b = c = 0
```

---

## Constants

Python doesn't have a strict "constant" keyword, but by convention, variables written in ALL_CAPS are treated as constants — values that shouldn't change:

```python
MAX_HEALTH = 100
GRAVITY = 9.81
SERVER_VERSION = "1.21.6"
```

Nothing stops you from changing them, but the naming signals to anyone reading the code: *don't touch this.*

---

## Quick summary

| Type | Example | Stores |
|---|---|---|
| `int` | `42` | Whole numbers |
| `float` | `3.14` | Decimal numbers |
| `str` | `"hello"` | Text |
| `bool` | `True` | True or False |

---

**Next chapter → [Strings](/python/03-strings)**
