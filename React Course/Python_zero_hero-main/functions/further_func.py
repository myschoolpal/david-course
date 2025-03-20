# Further Functions

# Lambda functions (short, anonymous functions)

# Simple lambda example
addition = lambda a, b: a + b
print(addition(1, 2))  # Output: 3

# Lambda with map function
my_list = [1, 2, 3, 4, 5, 6]
map_list = list(map(lambda n: 2 ** n, my_list))
for i in map_list:
    print(i)

# Filter example: keep even numbers
filter_list = list(filter(lambda i: (i % 2 == 0), my_list))
for i in filter_list:
    print(i)

# Reduce example: sum up values
import functools as ft

i = ft.reduce(lambda x, y: x + y, my_list)
print(i)  # Output: 21


# -------------------------------------
# Higher-Order Functions
# Functions that take other functions as arguments or return them.

def apply_twice(func, value):
    return func(func(value))


print(apply_twice(lambda x: x * 2, 5))  # Output: 20


# -------------------------------------
# Closures
# Functions that capture variables from their enclosing scope.

def multiplier(factor):
    def multiply(x):
        return x * factor

    return multiply


double = multiplier(2)
print(double(5))  # Output: 10

# -------------------------------------
# Partial Functions (Using functools.partial)
# Fix a function’s arguments to create a new function with predefined parameters.

from functools import partial


def power(base, exponent):
    return base ** exponent


square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(4))  # Output: 16
print(cube(2))  # Output: 8


# -------------------------------------
# Function Decorators -- We'll explore this more in decorators.
# Functions that modify the behavior of other functions.

def decorator_example(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")

    return wrapper


@decorator_example
def say_hello():
    print("Hello!")


say_hello()
# Output:
# Before function call
# Hello!
# After function call
