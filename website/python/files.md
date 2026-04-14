---
search: false
---
# Files & I/O

Reading and writing files is how Python interacts with the outside world — loading config, saving data, processing logs, generating output. You'll use it constantly.

---

## Getting user input

Before files, here's how to get input from the user while the program is running:

```python
name = input("What's your name? ")
print(f"Hello, {name}!")
```

`input()` always returns a **string**. Convert it if you need a number:

```python
age = input("How old are you? ")
age = int(age)
print(f"In 5 years you'll be {age + 5}.")
```

Or on one line:

```python
age = int(input("How old are you? "))
```

---

## Opening files

Use `open()` to work with files. Always use a `with` block — it automatically closes the file when you're done, even if something goes wrong:

```python
with open("readme.txt", "r") as file:
    content = file.read()
print(content)
```

### File modes

| Mode | Meaning |
|---|---|
| `"r"` | Read (default) |
| `"w"` | Write (creates or overwrites) |
| `"a"` | Append (add to end) |
| `"x"` | Create new (fails if file exists) |
| `"rb"` | Read binary (images, etc.) |

---

## Reading files

### Read the whole file at once

```python
with open("notes.txt", "r") as file:
    content = file.read()
print(content)
```

### Read line by line

```python
with open("notes.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes the trailing \n
```

### Read all lines into a list

```python
with open("notes.txt", "r") as file:
    lines = file.readlines()
    
print(lines[0])  # first line
print(len(lines))  # number of lines
```

---

## Writing files

### Overwrite (or create)

```python
with open("output.txt", "w") as file:
    file.write("Hello, world!\n")
    file.write("This is a new line.\n")
```

> ⚠️ `"w"` mode completely **overwrites** the file if it already exists. Use `"a"` if you want to add to it instead.

### Append to an existing file

```python
with open("log.txt", "a") as file:
    file.write("New log entry\n")
```

### Write multiple lines

```python
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]

with open("output.txt", "w") as file:
    file.writelines(lines)
```

---

## Working with file paths

```python
# Relative path (relative to where your script is)
with open("data/config.txt", "r") as file:
    ...

# Absolute path
with open("C:/Users/Zac/Documents/config.txt", "r") as file:
    ...
```

Use `pathlib` for cross-platform path handling (better than string concatenation):

```python
from pathlib import Path

base = Path("data")
config_path = base / "config.txt"   # works on Windows and Linux

with open(config_path, "r") as file:
    content = file.read()
```

### Useful `pathlib` operations

```python
from pathlib import Path

p = Path("packs/flaming_swords/pack.mcmeta")

print(p.name)       # pack.mcmeta
print(p.stem)       # pack
print(p.suffix)     # .mcmeta
print(p.parent)     # packs/flaming_swords
print(p.exists())   # True or False
```

---

## Working with JSON files

JSON is the standard format for storing structured data. Python has a built-in `json` module:

```python
import json

# Writing JSON
data = {
    "name": "Flaming Swords",
    "version": "2.0",
    "downloads": 15400,
}

with open("pack_info.json", "w") as file:
    json.dump(data, file, indent=4)
```

Result in `pack_info.json`:

```json
{
    "name": "Flaming Swords",
    "version": "2.0",
    "downloads": 15400
}
```

Reading JSON back:

```python
with open("pack_info.json", "r") as file:
    data = json.load(file)

print(data["name"])      # Flaming Swords
print(data["downloads"]) # 15400
```

---

## Checking if a file exists

```python
from pathlib import Path

if Path("config.txt").exists():
    print("Config found!")
else:
    print("No config file. Using defaults.")
```

---

## A real example — pack version tracker

```python
import json
from pathlib import Path

TRACKER_FILE = Path("pack_versions.json")

def load_versions():
    if TRACKER_FILE.exists():
        with open(TRACKER_FILE, "r") as f:
            return json.load(f)
    return {}

def save_version(pack_name, version):
    versions = load_versions()
    versions[pack_name] = version
    with open(TRACKER_FILE, "w") as f:
        json.dump(versions, f, indent=4)

def display_all():
    versions = load_versions()
    if not versions:
        print("No versions tracked yet.")
        return
    for name, ver in versions.items():
        print(f"{name}: v{ver}")


save_version("Flaming Swords", "2.0")
save_version("Shulker UI", "1.3")
display_all()
```

Output:

```
Flaming Swords: v2.0
Shulker UI: v1.3
```

---


