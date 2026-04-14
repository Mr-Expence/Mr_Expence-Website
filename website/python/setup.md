---
search: false
---
# What is Python & Setting Up

## Made by AI for myself

## What even is Python?

Python is a **programming language** — a way to give instructions to a computer that it can actually understand and execute.

Unlike languages like C or Java, Python reads almost like plain English. That's intentional. It was designed to be clear and simple, which makes it perfect for beginners — but it's also powerful enough that companies like Google, NASA, and Netflix use it in production.

Here's what Python code looks like:

```python
print("Hello, Zac!")
```

That's a real, working program. It prints text to the screen. One line. Done.

Compare that to the same thing in Java:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Zac!");
    }
}
```

Python gets out of your way and lets you *think about the problem* instead of fighting with syntax.

---

## Installing Python

### Windows

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Download the latest **Python 3.x** release (e.g. Python 3.12)
3. Run the installer
4. **Important:** Check the box that says **"Add Python to PATH"** before clicking Install

### macOS

macOS may already have Python installed, but it's usually an old version. Install a fresh one:

```bash
brew install python
```

If you don't have Homebrew, get it at [brew.sh](https://brew.sh).

### Linux

Python 3 is usually pre-installed. Check with:

```bash
python3 --version
```

If not, install it:

```bash
sudo apt install python3
```

---

## Verifying your installation

Open a terminal (or Command Prompt on Windows) and run:

```bash
python --version
# or
python3 --version
```

You should see something like:

```
Python 3.12.1
```

If you get an error, Python wasn't added to your PATH. Go back and re-run the installer, making sure to tick that checkbox.

---

## Picking an editor

You need somewhere to write your code. Here are your options:

| Editor | Good for | Link |
|---|---|---|
| **VS Code** | Everything. Best all-rounder | [code.visualstudio.com](https://code.visualstudio.com) |
| **Thonny** | Absolute beginners | [thonny.org](https://thonny.org) |
| **PyCharm** | Big projects | [jetbrains.com/pycharm](https://www.jetbrains.com/pycharm/) |

> 💡 If you're already using VS Code (which you are), install the **Python extension** by Microsoft from the Extensions panel.

---

## Your first program

Create a file called `hello.py` and type this:

```python
print("Hello, world!")
```

Save it, then run it from your terminal:

```bash
python hello.py
```

Output:

```
Hello, world!
```

You just wrote and ran your first Python program. That's it.

---

## The Python shell (REPL)

You can also run Python interactively — no file needed. Just type `python` in your terminal:

```
>>> 2 + 2
4
>>> print("Quick test")
Quick test
>>> exit()
```

The `>>>` is Python waiting for your input. This is great for quickly testing small ideas.

---

## What's next?

Now that Python is running, let's learn how to store and work with information.

