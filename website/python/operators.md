# Chapter 4 — Operators & Comparisons

Operators are the symbols you use to do math, compare values, and combine logic. They're everywhere.

---

## Arithmetic operators

These work exactly like you'd expect from a calculator:

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `9 / 2` | `4.5` |
| `//` | Floor division | `9 // 2` | `4` |
| `%` | Modulo (remainder) | `9 % 2` | `1` |
| `**` | Exponentiation | `2 ** 8` | `256` |

### Division always returns a float

```python
print(10 / 2)   # 5.0  (not 5)
print(10 // 2)  # 5    (floor division — rounds down)
```

### Modulo is more useful than it looks

```python
print(10 % 3)  # 1  (10 divided by 3 leaves remainder 1)
```

Classic use case: check if a number is even or odd.

```python
number = 14
if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

---

## Assignment operators

These modify a variable's value in place:

| Operator | Equivalent to |
|---|---|
| `x += 5` | `x = x + 5` |
| `x -= 5` | `x = x - 5` |
| `x *= 2` | `x = x * 2` |
| `x /= 2` | `x = x / 2` |
| `x //= 2` | `x = x // 2` |
| `x **= 3` | `x = x ** 3` |
| `x %= 3` | `x = x % 3` |

```python
score = 100
score += 50   # score is now 150
score *= 2    # score is now 300
print(score)  # 300
```

---

## Comparison operators

These compare two values and return `True` or `False`:

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal to | `5 == 5` → `True` |
| `!=` | Not equal to | `5 != 3` → `True` |
| `>` | Greater than | `10 > 3` → `True` |
| `<` | Less than | `2 < 1` → `False` |
| `>=` | Greater than or equal | `5 >= 5` → `True` |
| `<=` | Less than or equal | `4 <= 3` → `False` |

```python
health = 50
max_health = 100

print(health < max_health)   # True
print(health == max_health)  # False
print(health != 0)           # True
```

> ⚠️ **Common mistake:** `=` assigns a value. `==` *compares* two values. Don't mix them up.

```python
x = 5       # assigns 5 to x
x == 5      # asks: is x equal to 5? (True)
```

---

## Logical operators

Combine multiple comparisons:

| Operator | Meaning | Example |
|---|---|---|
| `and` | Both must be True | `True and False` → `False` |
| `or` | At least one must be True | `True or False` → `True` |
| `not` | Flips True/False | `not True` → `False` |

```python
health = 80
shield = 30

# Both conditions must be true
if health > 50 and shield > 0:
    print("You're in good shape")

# At least one must be true
if health < 20 or shield == 0:
    print("You're in danger!")

# Flip a condition
is_dead = False
if not is_dead:
    print("Still alive")
```

### Truth table for `and`

| A | B | A and B |
|---|---|---|
| True | True | **True** |
| True | False | False |
| False | True | False |
| False | False | False |

### Truth table for `or`

| A | B | A or B |
|---|---|---|
| True | True | **True** |
| True | False | **True** |
| False | True | **True** |
| False | False | False |

---

## Identity and membership operators

### `is` — checks if two variables point to the same object

```python
a = None
print(a is None)      # True
print(a is not None)  # False
```

> Don't use `==` to check for `None`. Use `is None`.

### `in` — checks if something is inside a collection

```python
pack_list = ["Flaming Swords", "Shulker UI", "Default"]

print("Shulker UI" in pack_list)    # True
print("Missing Pack" in pack_list)  # False
print("Missing Pack" not in pack_list)  # True
```

Also works on strings:

```python
name = "MrExpence12"
print("Expence" in name)  # True
```

---

## Operator precedence

Python follows standard math order. From highest to lowest priority:

1. `**` (exponent)
2. `*`, `/`, `//`, `%`
3. `+`, `-`
4. `==`, `!=`, `<`, `>`, `<=`, `>=`
5. `not`
6. `and`
7. `or`

When in doubt, use parentheses to be explicit:

```python
result = 2 + 3 * 4      # 14 (not 20)
result = (2 + 3) * 4    # 20
```

---

**Next chapter → [If / Elif / Else](/python/05-conditionals)**
