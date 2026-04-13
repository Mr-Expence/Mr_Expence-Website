# Chapter 5 — If / Elif / Else

Conditionals let your program **make decisions**. Without them, code just runs top to bottom, every line, every time. With conditionals, you can run certain code only when specific conditions are met.

---

## Basic `if`

```python
health = 30

if health < 50:
    print("Low health!")
```

The code inside only runs if `health < 50` is `True`. If it's `False`, nothing happens.

### Indentation matters

Python uses **indentation** (spaces or a tab) to define what's "inside" the `if`. This is not optional — it's syntax.

```python
if health < 50:
    print("This is inside the if block")
    print("So is this")
print("This is outside — always runs")
```

> 💡 **Convention:** Use 4 spaces for indentation. Most editors do this automatically when you press Tab.

---

## `if` / `else`

Add an `else` to handle the case when the condition is `False`:

```python
health = 80

if health < 50:
    print("Low health!")
else:
    print("You're doing fine.")
```

Only one of these will ever run — it's one or the other.

---

## `if` / `elif` / `else`

Use `elif` ("else if") to check multiple conditions in sequence:

```python
health = 65

if health <= 0:
    print("You died.")
elif health < 25:
    print("Critical — heal now!")
elif health < 50:
    print("Low health.")
elif health < 75:
    print("Doing okay.")
else:
    print("Full health!")
```

Python checks each condition **in order**. As soon as one is `True`, it runs that block and skips the rest.

> ⚠️ Order matters. If you put `health < 75` before `health < 25`, someone at 10 HP would match the first condition and never see the critical warning.

---

## Nested conditionals

You can put `if` statements inside other `if` statements:

```python
is_logged_in = True
is_admin = False

if is_logged_in:
    print("Welcome back!")
    if is_admin:
        print("Admin panel unlocked.")
    else:
        print("Standard user access.")
else:
    print("Please log in.")
```

Be careful with nesting too deep — it gets hard to read fast. If you're 4+ levels deep, something usually needs refactoring.

---

## Combining conditions

Use `and`, `or`, and `not` to build more complex conditions:

```python
username = "Zac"
password = "correct"

if username == "Zac" and password == "correct":
    print("Access granted.")
else:
    print("Wrong credentials.")
```

```python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
```

```python
is_banned = False

if not is_banned:
    print("You may proceed.")
```

---

## One-line conditionals (ternary)

For simple cases, you can write an `if/else` on one line:

```python
health = 20
status = "alive" if health > 0 else "dead"
print(status)  # alive
```

This is called a **ternary expression**. Use it sparingly — it's clean for simple cases but gets unreadable fast.

---

## Truthy and falsy values

In Python, conditions don't have to be explicitly `True` or `False`. Any value can be evaluated as one:

**Falsy** (treated as `False`):
- `False`
- `0`
- `0.0`
- `""` (empty string)
- `[]` (empty list)
- `{}` (empty dict)
- `None`

**Truthy** (treated as `True`):
- Everything else

```python
name = ""

if name:
    print(f"Hello, {name}!")
else:
    print("No name provided.")  # This runs — empty string is falsy
```

```python
items = [1, 2, 3]

if items:
    print("List has items")   # This runs

items = []

if items:
    print("This won't run")   # Empty list is falsy
```

This is idiomatic Python — you'll see it everywhere.

---

## `match` / `case` (Python 3.10+)

For checking one variable against many specific values, Python 3.10 added `match`:

```python
command = "quit"

match command:
    case "start":
        print("Starting game...")
    case "pause":
        print("Game paused.")
    case "quit":
        print("Goodbye!")
    case _:
        print("Unknown command.")  # _ is the default/wildcard
```

This is cleaner than a chain of `elif` when comparing one variable to a list of possible values.

---

## Real example — a simple access check

```python
username = "Zac"
role = "admin"
is_active = True

if not is_active:
    print("Account is disabled.")
elif role == "admin":
    print(f"Welcome, Admin {username}. Full access granted.")
elif role == "moderator":
    print(f"Welcome, {username}. Moderator tools available.")
else:
    print(f"Welcome, {username}.")
```

---


