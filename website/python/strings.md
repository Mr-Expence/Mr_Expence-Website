---
search: false
---
# Strings

Strings are how Python handles text. You'll use them constantly — for output, user input, file names, messages, everything.

---

## Creating strings

```python
name = "Zac"
greeting = 'Hello there'
empty = ""
```

Single or double quotes both work. Use double quotes as a default — it lets you put apostrophes inside without issues:

```python
message = "It's working!"   # fine
message = 'It\'s working!'  # also fine, but uglier
```

### Multi-line strings

Use triple quotes for strings that span multiple lines:

```python
bio = """
Name: Zac
Channel: MrExpence12
Platform: YouTube
"""
print(bio)
```

---

## String concatenation

Join strings together with `+`:

```python
first = "Mr"
last = "Expence"
full = first + last
print(full)  # MrExpence
```

Add a space manually:

```python
full = first + " " + last  # Mr Expence
```

---

## f-strings (the right way to insert variables)

Instead of concatenating with `+`, use **f-strings** — they're cleaner and easier to read:

```python
name = "Zac"
views = 50000
print(f"Hey {name}, your video has {views} views!")
# Hey Zac, your video has 50000 views!
```

Put an `f` before the opening quote, then use `{curly braces}` to drop variables or expressions in:

```python
a = 10
b = 3
print(f"{a} divided by {b} is {a / b:.2f}")
# 10 divided by 3 is 3.33
```

The `:.2f` part means "round to 2 decimal places". More on that below.

---

## String methods

Strings come with a bunch of built-in tools. Call them with a dot after the string or variable.

### Case

```python
s = "hello world"
print(s.upper())    # HELLO WORLD
print(s.lower())    # hello world
print(s.title())    # Hello World
print(s.capitalize()) # Hello world
```

### Checking content

```python
s = "MrExpence12"
print(s.startswith("Mr"))   # True
print(s.endswith("12"))     # True
print("12" in s)            # True
print(s.isdigit())          # False
```

### Cleaning

```python
s = "   lots of spaces   "
print(s.strip())   # "lots of spaces"
print(s.lstrip())  # "lots of spaces   "
print(s.rstrip())  # "   lots of spaces"
```

### Replacing

```python
s = "I love Java"
print(s.replace("Java", "Python"))  # I love Python
```

### Splitting

```python
csv = "red,green,blue"
colors = csv.split(",")
print(colors)  # ['red', 'green', 'blue']
```

### Joining

```python
words = ["Python", "is", "great"]
print(" ".join(words))  # Python is great
print("-".join(words))  # Python-is-great
```

---

## Indexing — accessing individual characters

Strings are sequences. Each character has a position (index), starting at `0`:

```python
name = "Python"
#       P  y  t  h  o  n
#       0  1  2  3  4  5

print(name[0])  # P
print(name[3])  # h
print(name[-1]) # n  (last character)
print(name[-2]) # o  (second to last)
```

Negative indexes count from the end. `-1` is always the last character.

---

## Slicing — grabbing a section

Use `[start:end]` to grab a chunk of a string. The end index is **not included**:

```python
s = "MrExpence12"
print(s[0:2])   # Mr
print(s[2:9])   # Expence
print(s[9:])    # 12    (everything from index 9)
print(s[:2])    # Mr    (everything up to index 2)
print(s[::-1])  # 21ecnepxErM  (reversed!)
```

---

## String length

```python
name = "Expence"
print(len(name))  # 7
```

---

## Formatting numbers in f-strings

| Format | Meaning | Example |
|---|---|---|
| `:.2f` | 2 decimal places | `3.14` |
| `:,` | Thousands separator | `1,000,000` |
| `:05d` | Zero-padded integer | `00042` |
| `:.0%` | Percentage, no decimals | `75%` |

```python
big_number = 1000000
ratio = 0.753

print(f"{big_number:,}")    # 1,000,000
print(f"{ratio:.0%}")       # 75%
```

---

## Escape characters

Some characters need a backslash to be included in a string:

| Escape | What it does |
|---|---|
| `\n` | New line |
| `\t` | Tab |
| `\\` | Literal backslash |
| `\"` | Literal double quote |

```python
print("Line 1\nLine 2")
# Line 1
# Line 2

print("C:\\Users\\Zac")
# C:\Users\Zac
```

| Method | Description |
|---|---|
| `capitalize()` | Converts the first character to upper case |
| `casefold()` | Converts string into lower case |
| `center()` | Returns a centered string |
| `count()` | Returns the number of times a specified value occurs in a string |
| `encode()` | Returns an encoded version of the string |
| `endswith()` | Returns true if the string ends with the specified value |
| `expandtabs()` | Sets the tab size of the string |
| `find()` | Searches the string for a specified value and returns the position of where it was found |
| `format()` | Formats specified values in a string |
| `format_map()` | Formats specified values in a string |
| `index()` | Searches the string for a specified value and returns the position of where it was found |
| `isalnum()` | Returns True if all characters in the string are alphanumeric |
| `isalpha()` | Returns True if all characters in the string are in the alphabet |
| `isascii()` | Returns True if all characters in the string are ascii characters |
| `isdecimal()` | Returns True if all characters in the string are decimals |
| `isdigit()` | Returns True if all characters in the string are digits |
| `isidentifier()` | Returns True if the string is an identifier |
| `islower()` | Returns True if all characters in the string are lower case |
| `isnumeric()` | Returns True if all characters in the string are numeric |
| `isprintable()` | Returns True if all characters in the string are printable |
| `isspace()` | Returns True if all characters in the string are whitespaces |
| `istitle()` | Returns True if the string follows the rules of a title |
| `isupper()` | Returns True if all characters in the string are upper case |
| `join()` | Joins the elements of an iterable to the end of the string |
| `ljust()` | Returns a left justified version of the string |
| `lower()` | Converts a string into lower case |
| `lstrip()` | Returns a left trim version of the string |
| `maketrans()` | Returns a translation table to be used in translations |
| `partition()` | Returns a tuple where the string is parted into three parts |
| `replace()` | Returns a string where a specified value is replaced with a specified value |
| `rfind()` | Searches the string for a specified value and returns the last position of where it was found |
| `rindex()` | Searches the string for a specified value and returns the last position of where it was found |
| `rjust()` | Returns a right justified version of the string |
| `rpartition()` | Returns a tuple where the string is parted into three parts |
| `rsplit()` | Splits the string at the specified separator, and returns a list |
| `rstrip()` | Returns a right trim version of the string |
| `split()` | Splits the string at the specified separator, and returns a list |
| `splitlines()` | Splits the string at line breaks and returns a list |
| `startswith()` | Returns true if the string starts with the specified value |
| `strip()` | Returns a trimmed version of the string |
| `swapcase()` | Swaps cases, lower case becomes upper case and vice versa |
| `title()` | Converts the first character of each word to upper case |
| `translate()` | Returns a translated string |
| `upper()` | Converts a string into upper case |
| `zfill()` | Fills the string with a specified number of 0 values at the beginning |


---

