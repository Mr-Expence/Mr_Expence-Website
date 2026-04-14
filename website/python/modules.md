# Modules & Imports

Python comes with a huge **standard library** — hundreds of built-in modules that handle everything from dates to randomness to file paths to sending HTTP requests. You just have to import them.

---

## What's a module?

A module is a Python file (or package) that contains code you can use in your own programs. Instead of writing everything from scratch, you pull in existing tools.

```python
import math

print(math.pi)         # 3.141592653589793
print(math.sqrt(144))  # 12.0
print(math.floor(4.9)) # 4
print(math.ceil(4.1))  # 5
```

---

## Import syntax

### Import the whole module

```python
import math
print(math.sqrt(25))
```

### Import specific things from a module

```python
from math import sqrt, pi
print(sqrt(25))  # no need for math.sqrt
print(pi)
```

### Import with an alias

```python
import json as j
data = j.loads('{"name": "Zac"}')
```

### Import everything (avoid this)

```python
from math import *   # imports everything into your namespace
```

This pollutes your namespace and makes it unclear where things come from. Avoid it.

---

## The standard library — modules you'll actually use

### `math` — mathematical functions

```python
import math

math.sqrt(16)     # 4.0
math.pow(2, 10)   # 1024.0
math.log(100, 10) # 2.0
math.floor(3.7)   # 3
math.ceil(3.2)    # 4
math.pi           # 3.14159...
math.inf          # positive infinity
```

### `random` — random numbers and choices

```python
import random

random.random()             # float between 0.0 and 1.0
random.randint(1, 100)      # random int between 1 and 100 (inclusive)
random.choice(["a", "b", "c"])  # pick one randomly
random.shuffle(my_list)     # shuffle a list in place
random.sample(my_list, 3)   # pick 3 items without replacement
```

### `os` — operating system interactions

```python
import os

os.getcwd()               # current working directory
os.listdir(".")           # list files in current dir
os.makedirs("output/logs", exist_ok=True)  # create folders
os.path.exists("file.txt")  # check if file exists
os.environ.get("HOME")    # read environment variable
```

### `pathlib` — file paths (modern, prefer over `os.path`)

```python
from pathlib import Path

p = Path("packs/flaming_swords")
p.mkdir(parents=True, exist_ok=True)

config = p / "pack.mcmeta"
print(config.exists())
print(config.suffix)  # .mcmeta
```

### `json` — JSON encoding and decoding

```python
import json

# Python dict → JSON string
data = {"name": "Zac", "score": 9500}
json_str = json.dumps(data, indent=4)
print(json_str)

# JSON string → Python dict
parsed = json.loads('{"name": "Zac"}')
print(parsed["name"])

# File I/O
with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

with open("data.json", "r") as f:
    data = json.load(f)
```

### `datetime` — dates and times

```python
from datetime import datetime, timedelta

now = datetime.now()
print(now)                          # 2025-04-13 15:32:00.123456
print(now.strftime("%Y-%m-%d"))     # 2025-04-13
print(now.strftime("%d/%m/%Y %H:%M"))  # 13/04/2025 15:32

# Math with dates
one_week_later = now + timedelta(weeks=1)
print(one_week_later)
```

### `sys` — system-level info

```python
import sys

print(sys.version)    # Python version
print(sys.platform)   # 'win32', 'linux', 'darwin'
sys.exit(0)           # exit the program with status code
```

### `re` — regular expressions

```python
import re

text = "Contact us at hello@example.com or support@mr-expence.com"
emails = re.findall(r"[\w.-]+@[\w.-]+\.\w+", text)
print(emails)  # ['hello@example.com', 'support@mr-expence.com']
```

### `collections` — extra data structures

```python
from collections import Counter, defaultdict

# Count occurrences
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = Counter(words)
print(counts.most_common(2))  # [('apple', 3), ('banana', 2)]

# Dict with default values
scores = defaultdict(int)
scores["Zac"] += 100
scores["Alex"] += 50
print(scores["Sam"])  # 0 (default, no KeyError)
```

---

## Writing your own modules

Any `.py` file is a module. Create `utils.py`:

```python
# utils.py

def slugify(name):
    """Convert a name to a URL-safe slug."""
    return name.lower().replace(" ", "-")

def clamp(value, minimum, maximum):
    """Clamp a value between min and max."""
    return max(minimum, min(value, maximum))
```

Then import it in another file in the same folder:

```python
# main.py
from utils import slugify, clamp

print(slugify("Flaming Swords"))  # flaming-swords
print(clamp(150, 0, 100))         # 100
```

---

## Installing third-party packages

Python's standard library is huge, but there's even more available via **pip** — Python's package manager.

```bash
pip install requests     # HTTP requests
pip install pillow       # image processing
pip install rich         # beautiful terminal output
```

Then import and use:

```python
import requests

response = requests.get("https://api.modrinth.com/v2/project/flaming-swords")
data = response.json()
print(data["title"])
print(data["downloads"])
```

---

## The `if __name__ == "__main__"` pattern

When you run a Python file directly, Python sets `__name__` to `"__main__"`. When the file is *imported* by another file, `__name__` is the module's filename instead.

This lets you write code that only runs when the file is executed directly — not when imported as a module:

```python
# pack_utils.py

def get_pack_info(name):
    return {"name": name, "version": "1.0"}

if __name__ == "__main__":
    # This only runs when you run: python pack_utils.py
    # NOT when another file imports pack_utils
    info = get_pack_info("Flaming Swords")
    print(info)
```

Always use this pattern when writing reusable modules that also have runnable code.

---

## Wrapping up

You've covered the core of Python:

| Chapter | Topic |
|---|---|
| 1 | Setup & first program |
| 2 | Variables & data types |
| 3 | Strings |
| 4 | Operators |
| 5 | Conditionals |
| 6 | Loops |
| 7 | Functions |
| 8 | Lists |
| 9 | Dictionaries |
| 10 | Files & I/O |
| 11 | Error handling |
| 12 | Modules & imports |

From here, the path forward is: **build things**. Pick a small project — a file renamer, a score tracker, a pack version checker — and write it. You'll hit walls, look things up, and figure it out. That's how it works.

> 💡 **Good next topics:** Classes & OOP, APIs & `requests`, `argparse` for CLI tools, `pytest` for testing.

---

