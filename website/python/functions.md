# Chapter 7 — Functions

Functions let you group code into a named, reusable block. Instead of writing the same logic multiple times in different places, you write it once as a function and call it whenever you need it.

---

## Defining a function

```python
def greet():
    print("Hello!")
```

- `def` is the keyword that starts a function definition
- `greet` is the name you're giving it
- The colon `:` and indented block work just like `if` statements

Calling (running) the function:

```python
greet()   # Hello!
greet()   # Hello!
greet()   # Hello!
```

---

## Parameters — passing data in

Functions can accept inputs called **parameters**:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Zac")    # Hello, Zac!
greet("Alex")   # Hello, Alex!
```

Multiple parameters:

```python
def add(a, b):
    print(a + b)

add(3, 5)   # 8
add(10, 20) # 30
```

---

## Return values — getting data out

Functions can also **return** a value back to whoever called them:

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
```

The `return` statement exits the function and hands a value back. Without it, the function returns `None`.

```python
def add(a, b):
    result = a + b
    return result

total = add(10, 20)
print(f"Total: {total}")  # Total: 30
```

### Multiple return values

Python can return multiple values at once:

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 7, 2, 9])
print(f"Min: {low}, Max: {high}")  # Min: 1, Max: 9
```

---

## Default parameter values

You can set a default value for a parameter — it's used if no argument is passed:

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Zac")               # Hello, Zac!
greet("Zac", "Welcome")    # Welcome, Zac!
```

Parameters with defaults must come **after** parameters without defaults.

---

## Keyword arguments

Call functions by specifying the parameter names explicitly:

```python
def create_pack(name, version, platform="modrinth"):
    print(f"{name} v{version} on {platform}")

# Positional (order matters)
create_pack("Flaming Swords", "2.0")

# Keyword (order doesn't matter)
create_pack(version="3.0", name="Shulker UI", platform="curseforge")
```

---

## Variable scope

Variables defined **inside** a function only exist inside that function:

```python
def calculate():
    x = 10   # local variable
    print(x)

calculate()  # 10
print(x)     # ERROR: x is not defined outside the function
```

Variables defined outside are **global**:

```python
channel = "MrExpence12"

def announce():
    print(f"Channel: {channel}")  # can read global variable

announce()
```

> ⚠️ Modifying a global variable from inside a function requires the `global` keyword. Avoid this where possible — it makes code hard to follow.

```python
count = 0

def increment():
    global count
    count += 1

increment()
increment()
print(count)  # 2
```

---

## Docstrings — documenting your functions

Add a string right after the `def` line to document what the function does:

```python
def calculate_dps(damage, attacks_per_second):
    """
    Calculate damage per second.

    Args:
        damage: damage per hit
        attacks_per_second: how many hits per second

    Returns:
        float: total DPS
    """
    return damage * attacks_per_second

help(calculate_dps)  # prints the docstring
```

This is optional but a good habit, especially for functions others will use.

---

## `*args` — accepting any number of arguments

```python
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3))        # 6
print(total(10, 20, 30, 40)) # 100
```

`*args` collects all positional arguments into a tuple.

---

## `**kwargs` — accepting keyword arguments

```python
def display_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

display_info(name="Zac", channel="MrExpence12", subs=1000)
```

Output:

```
name: Zac
channel: MrExpence12
subs: 1000
```

---

## Lambda functions — tiny anonymous functions

For small, one-off operations, you can define a function in a single line:

```python
square = lambda x: x ** 2
print(square(5))  # 25
```

These are usually used as arguments to other functions, like `sorted()`:

```python
packs = [
    {"name": "Shulker UI", "downloads": 8200},
    {"name": "Flaming Swords", "downloads": 15400},
    {"name": "Default Plus", "downloads": 3100},
]

sorted_packs = sorted(packs, key=lambda p: p["downloads"], reverse=True)

for pack in sorted_packs:
    print(f"{pack['name']}: {pack['downloads']}")
```

Output:

```
Flaming Swords: 15400
Shulker UI: 8200
Default Plus: 3100
```

---

## Functions are objects

In Python, functions are first-class — you can assign them to variables, pass them around, store them in lists:

```python
def shout(text):
    return text.upper()

def whisper(text):
    return text.lower()

speak = shout
print(speak("hello"))  # HELLO

speak = whisper
print(speak("HELLO"))  # hello
```

This becomes important when working with callbacks and higher-order functions.

---

## A complete example

```python
def calculate_elo(current_elo, opponent_elo, won):
    """
    Calculate new ELO rating after a match.
    K-factor = 32.
    """
    expected = 1 / (1 + 10 ** ((opponent_elo - current_elo) / 400))
    result = 1 if won else 0
    new_elo = current_elo + 32 * (result - expected)
    return round(new_elo)


my_elo = 1200
opponent_elo = 1350

new_elo = calculate_elo(my_elo, opponent_elo, won=True)
print(f"New ELO: {new_elo}")  # New ELO: 1221 (approx)
```

---

