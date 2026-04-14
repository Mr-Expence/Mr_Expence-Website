# Error Handling

Programs crash. Users enter the wrong thing, files go missing, servers go down. Error handling is how you deal with that gracefully — catching problems before they explode and giving useful feedback instead of a raw stack trace.

---

## What is an exception?

When Python encounters an error it can't continue from, it **raises an exception** — an error object that travels up the call stack until something catches it. If nothing does, the program crashes and prints a traceback.

Common exceptions:

| Exception | When it happens |
|---|---|
| `TypeError` | Wrong type passed to an operation |
| `ValueError` | Right type, wrong value (e.g. `int("abc")`) |
| `KeyError` | Dictionary key doesn't exist |
| `IndexError` | List index out of range |
| `FileNotFoundError` | File doesn't exist |
| `ZeroDivisionError` | Dividing by zero |
| `AttributeError` | Object doesn't have that attribute/method |
| `ImportError` | Module not found |

---

## `try` / `except`

Wrap risky code in a `try` block. If an exception occurs, the `except` block runs instead of crashing:

```python
try:
    number = int(input("Enter a number: "))
    print(f"You entered: {number}")
except ValueError:
    print("That's not a valid number.")
```

Without error handling, `int("abc")` would crash. With it, you get a friendly message.

---

## Catching specific exceptions

Be specific about what you catch — don't just catch everything:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero.")
```

Catch multiple types:

```python
try:
    data = packs["missing_key"]
    value = int(data)
except KeyError:
    print("Pack not found.")
except ValueError:
    print("Data isn't a valid number.")
```

Catch multiple in one line:

```python
except (KeyError, ValueError):
    print("Something went wrong with the data.")
```

---

## The `else` clause

The `else` block runs only if **no exception** was raised:

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Division error!")
else:
    print(f"Result: {result}")  # only runs if no exception
```

---

## The `finally` clause

The `finally` block runs **no matter what** — exception or not. Useful for cleanup:

```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    print("Done attempting to read file.")
    # file.close() would go here too if not using 'with'
```

> 💡 When working with files, use `with open(...)` instead — it handles closing automatically.

---

## Getting exception details

Use `as` to capture the exception object:

```python
try:
    result = int("not_a_number")
except ValueError as e:
    print(f"Error: {e}")
    # Error: invalid literal for int() with base 10: 'not_a_number'
```

---

## Raising exceptions

You can raise your own exceptions when something is wrong:

```python
def set_health(value):
    if value < 0 or value > 100:
        raise ValueError(f"Health must be between 0 and 100, got {value}")
    return value

try:
    set_health(150)
except ValueError as e:
    print(f"Invalid: {e}")
```

---

## Creating custom exceptions

For larger projects, create your own exception types by inheriting from `Exception`:

```python
class PackNotFoundError(Exception):
    pass

class InvalidVersionError(Exception):
    pass


def load_pack(name):
    available = ["Flaming Swords", "Shulker UI"]
    if name not in available:
        raise PackNotFoundError(f"'{name}' is not in the registry.")
    return {"name": name, "version": "1.0"}


try:
    pack = load_pack("OptiFine Pack")
except PackNotFoundError as e:
    print(f"Pack error: {e}")
```

---

## Input validation pattern

A common pattern: keep asking until the user gives valid input.

```python
while True:
    try:
        age = int(input("Enter your age: "))
        if age < 0 or age > 120:
            raise ValueError("Age out of reasonable range.")
        break  # exit loop on success
    except ValueError as e:
        print(f"Invalid input: {e}. Please try again.")

print(f"Your age is {age}.")
```

---

## Don't catch everything blindly

Avoid this:

```python
try:
    do_something()
except Exception:
    pass  # silently swallows ALL errors
```

This hides bugs. If something unexpected goes wrong, you'll never know. Always be as specific as possible about what you're catching, and always log or display the error.

```python
try:
    do_something()
except FileNotFoundError as e:
    print(f"Missing file: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
    raise  # re-raise it so it still surfaces
```

---

## A real example — safe JSON loading

```python
import json
from pathlib import Path

def load_config(path):
    try:
        with open(path, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Config file not found: {path}. Using defaults.")
        return {}
    except json.JSONDecodeError as e:
        print(f"Config file is malformed: {e}")
        return {}


config = load_config("settings.json")
debug_mode = config.get("debug", False)
```

---


