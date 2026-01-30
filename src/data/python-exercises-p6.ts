import type { PythonExercise } from './python-exercises';

export const PYTHON_EXERCISES_P6: PythonExercise[] = [
  // ============================================================
  // LEVEL 4: OOP PATTERNS (20 exercises)
  // ============================================================
  {
    id: 'py-ex-4-26',
    title: 'Singleton Pattern',
    titleZh: '单例模式',
    difficulty: 'medium',
    level: 4,
    category: 'OOP Patterns',
    categoryZh: 'OOP 设计模式',
    tags: ['class', 'singleton', 'pattern'],
    description: 'Implement a Singleton class. No matter how many times you instantiate it, it should return the same object. Read n, create n instances, and print whether all are the same object ("YES" or "NO").',
    descriptionZh: '实现单例类。无论实例化多少次都返回同一个对象。读取 n，创建 n 个实例，输出它们是否都是同一对象（"YES" 或 "NO"）。',
    examples: [{ input: '3', output: 'YES' }],
    starterCode: `# TODO: Implement a Singleton class\n`,
    solution: `# Use __new__ to ensure only one instance exists
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

n = int(input())
instances = [Singleton() for _ in range(n)]
print("YES" if all(x is instances[0] for x in instances) else "NO")`,
    hints: ['Override __new__ to control instance creation', 'Store the single instance as a class variable', 'Return the existing instance if already created'],
    hintsZh: ['重写 __new__ 控制实例创建', '用类变量存储唯一实例', '如果已创建则返回现有实例'],
    testCases: [
      { input: '3', expectedOutput: 'YES' },
      { input: '1', expectedOutput: 'YES' },
    ],
  },
  {
    id: 'py-ex-4-27',
    title: 'Observer Pattern',
    titleZh: '观察者模式',
    difficulty: 'medium',
    level: 4,
    category: 'OOP Patterns',
    categoryZh: 'OOP 设计模式',
    tags: ['class', 'observer', 'pattern'],
    description: 'Implement a simple observer pattern. An EventEmitter has subscribe(name, callback) and emit(name, data). Read operations: "sub <name>", "emit <name> <data>". On emit, print "<name> received: <data>" for each subscriber.',
    descriptionZh: '实现简单的观察者模式。EventEmitter 有 subscribe(name, callback) 和 emit(name, data)。读取操作："sub <name>"、"emit <name> <data>"。emit 时为每个订阅者输出 "<name> received: <data>"。',
    examples: [{ input: '3\nsub alice\nsub bob\nemit alice hello', output: 'alice received: hello\nbob received: hello' }],
    starterCode: `# TODO: Implement EventEmitter with subscribe and emit\n`,
    solution: `# Simple observer pattern with a list of subscribers
class EventEmitter:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, name):
        self.subscribers.append(name)

    def emit(self, data):
        for name in self.subscribers:
            print(f"{name} received: {data}")

emitter = EventEmitter()
n = int(input())
for _ in range(n):
    parts = input().split(maxsplit=2)
    if parts[0] == 'sub':
        emitter.subscribe(parts[1])
    elif parts[0] == 'emit':
        emitter.emit(parts[2] if len(parts) > 2 else '')`,
    hints: ['Store subscribers in a list', 'emit loops through all subscribers', 'Use split(maxsplit=2) to handle data with spaces'],
    hintsZh: ['将订阅者存储在列表中', 'emit 遍历所有订阅者', '使用 split(maxsplit=2) 处理含空格的数据'],
    testCases: [
      { input: '3\nsub alice\nsub bob\nemit alice hello', expectedOutput: 'alice received: hello\nbob received: hello' },
      { input: '2\nsub x\nemit x test', expectedOutput: 'x received: test' },
    ],
  },
  {
    id: 'py-ex-4-28',
    title: 'Iterator Protocol',
    titleZh: '迭代器协议',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'iterator', '__iter__', '__next__'],
    description: 'Implement a Range class with __iter__ and __next__ that mimics range(start, stop). Read start and stop, iterate and print each value on one line, space-separated.',
    descriptionZh: '实现 Range 类，包含 __iter__ 和 __next__，模拟 range(start, stop)。读取 start 和 stop，迭代并在一行内输出所有值，空格分隔。',
    examples: [{ input: '1 5', output: '1 2 3 4' }],
    starterCode: `# TODO: Implement a custom Range iterator class\n`,
    solution: `# Implement __iter__ and __next__ for custom iteration
class Range:
    def __init__(self, start, stop):
        self.current = start
        self.stop = stop

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

start, stop = map(int, input().split())
print(' '.join(str(x) for x in Range(start, stop)))`,
    hints: ['__iter__ returns self', '__next__ returns next value or raises StopIteration', 'Track current position as an attribute'],
    hintsZh: ['__iter__ 返回 self', '__next__ 返回下一个值或抛出 StopIteration', '用属性跟踪当前位置'],
    testCases: [
      { input: '1 5', expectedOutput: '1 2 3 4' },
      { input: '0 3', expectedOutput: '0 1 2' },
    ],
  },
  {
    id: 'py-ex-4-29',
    title: 'Descriptor Protocol',
    titleZh: '描述符协议',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'descriptor', '__get__', '__set__'],
    description: 'Create a Positive descriptor that only allows positive integer values. Use it in a Product class with a "price" field. Read a price; if positive print "Price: <value>", if non-positive print "Error".',
    descriptionZh: '创建一个 Positive 描述符，只允许正整数值。在 Product 类的 "price" 字段中使用。读取价格：正数输出 "Price: <value>"，非正数输出 "Error"。',
    examples: [{ input: '10', output: 'Price: 10' }],
    starterCode: `# TODO: Implement a Positive descriptor\n`,
    solution: `# Descriptor with __get__ and __set__ for validation
class Positive:
    def __set_name__(self, owner, name):
        self.name = '_' + name

    def __get__(self, obj, objtype=None):
        return getattr(obj, self.name, None)

    def __set__(self, obj, value):
        if value <= 0:
            raise ValueError("Must be positive")
        setattr(obj, self.name, value)

class Product:
    price = Positive()

p = Product()
val = int(input())
try:
    p.price = val
    print(f"Price: {p.price}")
except ValueError:
    print("Error")`,
    hints: ['Implement __get__ and __set__ on the descriptor', 'Use __set_name__ to know the attribute name', 'Raise ValueError for invalid values'],
    hintsZh: ['在描述符上实现 __get__ 和 __set__', '使用 __set_name__ 获取属性名', '对无效值抛出 ValueError'],
    testCases: [
      { input: '10', expectedOutput: 'Price: 10' },
      { input: '-5', expectedOutput: 'Error' },
    ],
  },
  {
    id: 'py-ex-4-30',
    title: '__slots__ Usage',
    titleZh: '使用 __slots__',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', '__slots__', 'memory'],
    description: 'Create a Point class using __slots__ with "x" and "y". Read two integers, create a Point, print "(<x>, <y>)". Then try setting an attribute "z" — print "AttributeError" if it fails.',
    descriptionZh: '创建使用 __slots__ 的 Point 类，包含 "x" 和 "y"。读取两个整数，创建 Point，输出 "(<x>, <y>)"。然后尝试设置属性 "z"——如果失败则输出 "AttributeError"。',
    examples: [{ input: '3 4', output: '(3, 4)\nAttributeError' }],
    starterCode: `# TODO: Create a class using __slots__\n`,
    solution: `# __slots__ restricts which attributes can be set
class Point:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y

x, y = map(int, input().split())
p = Point(x, y)
print(f"({p.x}, {p.y})")
try:
    p.z = 0
except AttributeError:
    print("AttributeError")`,
    hints: ['Define __slots__ as a tuple of allowed attribute names', '__slots__ prevents creating a __dict__', 'Setting undefined attributes raises AttributeError'],
    hintsZh: ['将 __slots__ 定义为允许的属性名元组', '__slots__ 阻止创建 __dict__', '设置未定义的属性会引发 AttributeError'],
    testCases: [
      { input: '3 4', expectedOutput: '(3, 4)\nAttributeError' },
      { input: '0 0', expectedOutput: '(0, 0)\nAttributeError' },
    ],
  },
  {
    id: 'py-ex-4-31',
    title: 'Custom __hash__',
    titleZh: '自定义 __hash__',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', '__hash__', '__eq__'],
    description: 'Create a Color class with r, g, b. Implement __eq__ and __hash__ so equal colors can be used as dict keys. Read n colors (r g b per line), count unique colors, print the count.',
    descriptionZh: '创建 Color 类（r, g, b）。实现 __eq__ 和 __hash__，使相等的颜色可用作字典键。读取 n 个颜色（每行 r g b），统计不同颜色数量并输出。',
    examples: [{ input: '3\n255 0 0\n0 255 0\n255 0 0', output: '2' }],
    starterCode: `# TODO: Implement __hash__ and __eq__ for Color\n`,
    solution: `# Implement __eq__ and __hash__ for set/dict usage
class Color:
    def __init__(self, r, g, b):
        self.r = r
        self.g = g
        self.b = b

    def __eq__(self, other):
        return (self.r, self.g, self.b) == (other.r, other.g, other.b)

    def __hash__(self):
        return hash((self.r, self.g, self.b))

n = int(input())
colors = set()
for _ in range(n):
    r, g, b = map(int, input().split())
    colors.add(Color(r, g, b))
print(len(colors))`,
    hints: ['__hash__ must return an int, use hash(tuple)', '__eq__ compares the RGB values', 'Equal objects must have equal hashes'],
    hintsZh: ['__hash__ 必须返回整数，用 hash(tuple)', '__eq__ 比较 RGB 值', '相等的对象必须有相同的哈希值'],
    testCases: [
      { input: '3\n255 0 0\n0 255 0\n255 0 0', expectedOutput: '2' },
      { input: '2\n1 2 3\n1 2 3', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-4-32',
    title: 'Multiple Dispatch',
    titleZh: '多分派',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'dispatch', 'overload'],
    description: 'Simulate multiple dispatch: create an "add" function that handles (int, int) → sum, (str, str) → concatenation, (list, list) → merged list. Read type1, val1, type2, val2. Print result.',
    descriptionZh: '模拟多分派：创建 "add" 函数处理 (int, int) → 求和、(str, str) → 拼接、(list, list) → 合并。读取 type1 val1 type2 val2，输出结果。',
    examples: [{ input: 'int 3\nint 4', output: '7' }],
    starterCode: `# TODO: Implement multiple dispatch for add\n`,
    solution: `# Dispatch based on type of arguments
def parse_val(type_name, val_str):
    if type_name == 'int':
        return int(val_str)
    elif type_name == 'str':
        return val_str
    elif type_name == 'list':
        return val_str.split(',')

def add(a, b):
    if isinstance(a, int) and isinstance(b, int):
        return a + b
    elif isinstance(a, str) and isinstance(b, str):
        return a + b
    elif isinstance(a, list) and isinstance(b, list):
        return a + b

t1, v1 = input().split(maxsplit=1)
t2, v2 = input().split(maxsplit=1)
a = parse_val(t1, v1)
b = parse_val(t2, v2)
result = add(a, b)
if isinstance(result, list):
    print(','.join(result))
else:
    print(result)`,
    hints: ['Use isinstance() to check types', 'Python + operator works for int, str, and list', 'Parse input based on the type prefix'],
    hintsZh: ['使用 isinstance() 检查类型', 'Python + 运算符对 int、str、list 都有效', '根据类型前缀解析输入'],
    testCases: [
      { input: 'int 3\nint 4', expectedOutput: '7' },
      { input: 'str hello\nstr world', expectedOutput: 'helloworld' },
      { input: 'list a,b\nlist c,d', expectedOutput: 'a,b,c,d' },
    ],
  },
  {
    id: 'py-ex-4-33',
    title: 'Class Factory',
    titleZh: '类工厂',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'factory', 'type'],
    description: 'Create a function make_class(name, fields) that dynamically creates a class with the given fields as __init__ parameters. Read a class name and comma-separated field names, then field values. Print "<name>(<field>=<value>, ...)".',
    descriptionZh: '创建函数 make_class(name, fields) 动态创建类。读取类名和逗号分隔的字段名，然后读取字段值。输出 "<name>(<field>=<value>, ...)"。',
    examples: [{ input: 'Point\nx,y\n3 4', output: 'Point(x=3, y=4)' }],
    starterCode: `# TODO: Implement a class factory\n`,
    solution: `# Use type() to dynamically create a class
def make_class(name, fields):
    def __init__(self, *args):
        for f, v in zip(fields, args):
            setattr(self, f, v)
    def __repr__(self):
        pairs = ', '.join(f'{f}={getattr(self, f)}' for f in fields)
        return f'{name}({pairs})'
    return type(name, (), {'__init__': __init__, '__repr__': __repr__})

class_name = input()
field_names = input().split(',')
values = input().split()
cls = make_class(class_name, field_names)
obj = cls(*values)
print(obj)`,
    hints: ['Use type(name, bases, dict) to create a class', 'Define __init__ and __repr__ as functions', 'Use setattr/getattr for dynamic attributes'],
    hintsZh: ['使用 type(name, bases, dict) 创建类', '将 __init__ 和 __repr__ 定义为函数', '使用 setattr/getattr 处理动态属性'],
    testCases: [
      { input: 'Point\nx,y\n3 4', expectedOutput: 'Point(x=3, y=4)' },
      { input: 'Dog\nname,breed\nFido Lab', expectedOutput: 'Dog(name=Fido, breed=Lab)' },
    ],
  },
  {
    id: 'py-ex-4-34',
    title: 'Mixin Classes',
    titleZh: 'Mixin 类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'mixin', 'inheritance'],
    description: 'Create a JsonMixin with a to_json() method that returns a JSON string of __dict__. Create a Person(JsonMixin) class with name and age. Read name and age, print the JSON output.',
    descriptionZh: '创建 JsonMixin，包含 to_json() 方法返回 __dict__ 的 JSON 字符串。创建 Person(JsonMixin) 类，有 name 和 age。读取 name 和 age，输出 JSON。',
    examples: [{ input: 'Alice\n30', output: '{"name": "Alice", "age": 30}' }],
    starterCode: `# TODO: Implement a JsonMixin\nimport json\n`,
    solution: `# Mixin provides reusable functionality via multiple inheritance
import json

class JsonMixin:
    def to_json(self):
        return json.dumps(self.__dict__)

class Person(JsonMixin):
    def __init__(self, name, age):
        self.name = name
        self.age = age

name = input()
age = int(input())
p = Person(name, age)
print(p.to_json())`,
    hints: ['Mixin classes provide methods without __init__', 'Use json.dumps(self.__dict__)', 'Inherit from the mixin as first base class'],
    hintsZh: ['Mixin 类提供方法但不需要 __init__', '使用 json.dumps(self.__dict__)', '将 mixin 作为第一个基类继承'],
    testCases: [
      { input: 'Alice\n30', expectedOutput: '{"name": "Alice", "age": 30}' },
      { input: 'Bob\n25', expectedOutput: '{"name": "Bob", "age": 25}' },
    ],
  },
  {
    id: 'py-ex-4-35',
    title: 'Metaclass Basics',
    titleZh: '元类基础',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'metaclass', 'type'],
    description: 'Create a metaclass UpperAttrMeta that converts all non-dunder attribute names to uppercase. Create a class with it, set attr "x" = 1. Read an attribute name, try to access it uppercased, print the value or "NotFound".',
    descriptionZh: '创建元类 UpperAttrMeta，将所有非双下划线属性名转为大写。用它创建类，设置属性 "x" = 1。读取属性名，尝试访问大写版本，输出值或 "NotFound"。',
    examples: [{ input: 'x', output: '1' }],
    starterCode: `# TODO: Implement a metaclass that uppercases attributes\n`,
    solution: `# Metaclass modifies class creation
class UpperAttrMeta(type):
    def __new__(mcs, name, bases, namespace):
        upper_ns = {}
        for k, v in namespace.items():
            if k.startswith('__'):
                upper_ns[k] = v
            else:
                upper_ns[k.upper()] = v
        return super().__new__(mcs, name, bases, upper_ns)

class MyClass(metaclass=UpperAttrMeta):
    x = 1
    y = 2

attr = input().upper()
print(getattr(MyClass, attr, "NotFound"))`,
    hints: ['Override __new__ in the metaclass', 'Iterate namespace dict and uppercase non-dunder keys', 'Use super().__new__ to create the class'],
    hintsZh: ['在元类中重写 __new__', '遍历命名空间字典，将非双下划线键转为大写', '使用 super().__new__ 创建类'],
    testCases: [
      { input: 'x', expectedOutput: '1' },
      { input: 'y', expectedOutput: '2' },
      { input: 'z', expectedOutput: 'NotFound' },
    ],
  },
  {
    id: 'py-ex-4-36',
    title: 'Custom Exception Hierarchy',
    titleZh: '自定义异常层次',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'exception', 'hierarchy'],
    description: 'Create AppError (base), then ValidationError and NotFoundError inheriting from it. Read an error type ("validation" or "notfound") and message. Raise it, catch with AppError, print "<ClassName>: <message>".',
    descriptionZh: '创建 AppError（基类），然后 ValidationError 和 NotFoundError 继承它。读取错误类型和消息，抛出并用 AppError 捕获，输出 "<类名>: <消息>"。',
    examples: [{ input: 'validation\ninvalid email', output: 'ValidationError: invalid email' }],
    starterCode: `# TODO: Create a custom exception hierarchy\n`,
    solution: `# Exception hierarchy with a common base class
class AppError(Exception):
    pass

class ValidationError(AppError):
    pass

class NotFoundError(AppError):
    pass

error_type = input()
message = input()
try:
    if error_type == 'validation':
        raise ValidationError(message)
    else:
        raise NotFoundError(message)
except AppError as e:
    print(f"{type(e).__name__}: {e}")`,
    hints: ['Create a base exception inheriting from Exception', 'Specific exceptions inherit from your base', 'Catch the base class to handle all custom errors'],
    hintsZh: ['创建继承自 Exception 的基础异常', '具体异常继承自基础异常', '捕获基类可以处理所有自定义错误'],
    testCases: [
      { input: 'validation\ninvalid email', expectedOutput: 'ValidationError: invalid email' },
      { input: 'notfound\nuser 42', expectedOutput: 'NotFoundError: user 42' },
    ],
  },
  {
    id: 'py-ex-4-37',
    title: 'Context Manager',
    titleZh: '上下文管理器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'context-manager', '__enter__', '__exit__'],
    description: 'Implement a Timer context manager that prints "Enter" on __enter__ and "Exit" on __exit__. Read a message to print inside the block. Output: Enter, the message, Exit.',
    descriptionZh: '实现 Timer 上下文管理器，__enter__ 时输出 "Enter"，__exit__ 时输出 "Exit"。读取一个消息在块内打印。输出顺序：Enter、消息、Exit。',
    examples: [{ input: 'hello', output: 'Enter\nhello\nExit' }],
    starterCode: `# TODO: Implement a context manager class\n`,
    solution: `# Implement __enter__ and __exit__ for context management
class Timer:
    def __enter__(self):
        print("Enter")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exit")
        return False

msg = input()
with Timer():
    print(msg)`,
    hints: ['__enter__ is called when entering the with block', '__exit__ is called when leaving', 'Return False from __exit__ to not suppress exceptions'],
    hintsZh: ['__enter__ 在进入 with 块时调用', '__exit__ 在离开时调用', '__exit__ 返回 False 以不抑制异常'],
    testCases: [
      { input: 'hello', expectedOutput: 'Enter\nhello\nExit' },
      { input: 'test', expectedOutput: 'Enter\ntest\nExit' },
    ],
  },
  {
    id: 'py-ex-4-38',
    title: 'Chained Decorators',
    titleZh: '链式装饰器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['decorator', 'function'],
    description: 'Create two decorators: bold (wraps result in <b>...</b>) and italic (wraps in <i>...</i>). Apply both to a greet function that returns the input string. Print the result. Apply bold first (outermost), then italic.',
    descriptionZh: '创建两个装饰器：bold（用 <b>...</b> 包裹结果）和 italic（用 <i>...</i> 包裹）。对返回输入字符串的 greet 函数同时应用两者。bold 在外层，italic 在内层。输出结果。',
    examples: [{ input: 'hello', output: '<b><i>hello</i></b>' }],
    starterCode: `# TODO: Implement chained decorators\n`,
    solution: `# Decorators wrap functions; chaining applies bottom-up
def bold(func):
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper

def italic(func):
    def wrapper(*args, **kwargs):
        return f"<i>{func(*args, **kwargs)}</i>"
    return wrapper

@bold
@italic
def greet(text):
    return text

print(greet(input()))`,
    hints: ['Decorators are applied bottom-up', '@bold @italic means bold(italic(greet))', 'Each decorator wraps the result in tags'],
    hintsZh: ['装饰器从下到上应用', '@bold @italic 意味着 bold(italic(greet))', '每个装饰器用标签包裹结果'],
    testCases: [
      { input: 'hello', expectedOutput: '<b><i>hello</i></b>' },
      { input: 'world', expectedOutput: '<b><i>world</i></b>' },
    ],
  },
  {
    id: 'py-ex-4-39',
    title: 'Decorator Factory',
    titleZh: '装饰器工厂',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['decorator', 'factory', 'function'],
    description: 'Create a repeat(n) decorator factory that causes the decorated function to run n times. Read n and a message. The function prints the message; it should print n times.',
    descriptionZh: '创建 repeat(n) 装饰器工厂，使被装饰函数运行 n 次。读取 n 和消息。函数打印消息，应打印 n 次。',
    examples: [{ input: '3\nhello', output: 'hello\nhello\nhello' }],
    starterCode: `# TODO: Implement a decorator factory\n`,
    solution: `# Decorator factory: returns a decorator configured with n
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

n = int(input())
msg = input()

@repeat(n)
def say(text):
    print(text)

say(msg)`,
    hints: ['A decorator factory is a function that returns a decorator', 'Three levels of nesting: factory → decorator → wrapper', 'The wrapper calls the function n times'],
    hintsZh: ['装饰器工厂是返回装饰器的函数', '三层嵌套：工厂 → 装饰器 → 包装器', '包装器调用函数 n 次'],
    testCases: [
      { input: '3\nhello', expectedOutput: 'hello\nhello\nhello' },
      { input: '1\ntest', expectedOutput: 'test' },
    ],
  },
  {
    id: 'py-ex-4-40',
    title: 'Property with Validation',
    titleZh: '带验证的 Property',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'property', 'validation'],
    description: 'Create a Circle class with a "radius" property that only accepts positive values. Read a value; if valid, print the area (pi*r^2 rounded to 2 decimal places). If invalid, print "Invalid".',
    descriptionZh: '创建 Circle 类，"radius" 属性只接受正值。读取值：有效则输出面积（pi*r^2 保留 2 位小数），无效输出 "Invalid"。',
    examples: [{ input: '5', output: '78.54' }],
    starterCode: `# TODO: Use @property with validation\nimport math\n`,
    solution: `# Use @property with setter validation
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value

    def area(self):
        return round(math.pi * self._radius ** 2, 2)

val = float(input())
try:
    c = Circle(val)
    print(c.area())
except ValueError:
    print("Invalid")`,
    hints: ['Use @property for the getter', 'Use @radius.setter for the setter with validation', 'Raise ValueError for non-positive values'],
    hintsZh: ['使用 @property 定义 getter', '使用 @radius.setter 定义带验证的 setter', '非正值时抛出 ValueError'],
    testCases: [
      { input: '5', expectedOutput: '78.54' },
      { input: '-3', expectedOutput: 'Invalid' },
    ],
  },
  {
    id: 'py-ex-4-41',
    title: '@total_ordering',
    titleZh: '全序比较',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'total_ordering', 'comparison'],
    description: 'Use @total_ordering to create a Student class (name, grade). Only define __eq__ and __lt__. Read two students (name grade per line), print the one with the higher grade. If equal, print "Equal".',
    descriptionZh: '使用 @total_ordering 创建 Student 类（name, grade）。只定义 __eq__ 和 __lt__。读取两个学生（每行 name grade），输出成绩更高的。相等则输出 "Equal"。',
    examples: [{ input: 'Alice 90\nBob 85', output: 'Alice' }],
    starterCode: `# TODO: Use @total_ordering for comparison\nfrom functools import total_ordering\n`,
    solution: `# @total_ordering fills in missing comparison methods
from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def __eq__(self, other):
        return self.grade == other.grade

    def __lt__(self, other):
        return self.grade < other.grade

n1, g1 = input().rsplit(maxsplit=1)
n2, g2 = input().rsplit(maxsplit=1)
s1 = Student(n1, int(g1))
s2 = Student(n2, int(g2))
if s1 == s2:
    print("Equal")
elif s1 > s2:
    print(s1.name)
else:
    print(s2.name)`,
    hints: ['@total_ordering requires __eq__ and one of __lt__, __gt__, etc.', 'It auto-generates the other comparison methods', 'Compare by grade field'],
    hintsZh: ['@total_ordering 需要 __eq__ 和 __lt__ 等中的一个', '它自动生成其他比较方法', '按 grade 字段比较'],
    testCases: [
      { input: 'Alice 90\nBob 85', expectedOutput: 'Alice' },
      { input: 'Alice 90\nBob 90', expectedOutput: 'Equal' },
    ],
  },
  {
    id: 'py-ex-4-42',
    title: 'Callable Class (__call__)',
    titleZh: '可调用类 (__call__)',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', '__call__'],
    description: 'Create an Adder class that stores a base value. Calling an instance adds the argument to the base. Read base, then n values (one per line), print result after each call.',
    descriptionZh: '创建 Adder 类存储基础值。调用实例时将参数加到基础值上。读取基础值，然后 n 个值（每行一个），每次调用后输出结果。',
    examples: [{ input: '10\n3\n5\n20\n-3', output: '15\n20\n40\n37' }],
    starterCode: `# TODO: Make a class callable with __call__\n`,
    solution: `# __call__ makes instances callable like functions
class Adder:
    def __init__(self, base):
        self.value = base

    def __call__(self, x):
        self.value += x
        return self.value

import sys
lines = sys.stdin.read().split()
base = int(lines[0])
adder = Adder(base)
for v in lines[1:]:
    print(adder(int(v)))`,
    hints: ['Define __call__(self, x) to make instances callable', 'Update and return the stored value', 'adder(5) calls adder.__call__(5)'],
    hintsZh: ['定义 __call__(self, x) 使实例可调用', '更新并返回存储的值', 'adder(5) 调用 adder.__call__(5)'],
    testCases: [
      { input: '10\n5\n20\n-3', expectedOutput: '15\n35\n32' },
      { input: '0\n1\n2\n3', expectedOutput: '1\n3\n6' },
    ],
  },
  {
    id: 'py-ex-4-43',
    title: 'Proxy Class',
    titleZh: '代理类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP Patterns',
    categoryZh: 'OOP 设计模式',
    tags: ['class', 'proxy', '__getattr__'],
    description: 'Create a LoggingProxy that wraps any object. Attribute access prints "Accessing: <attr>" before returning the value. Read an attribute name, proxy a dict with that attribute, print the log and value.',
    descriptionZh: '创建 LoggingProxy 包装任意对象。访问属性时先输出 "Accessing: <attr>" 再返回值。读取属性名，代理一个具有该属性的对象，输出日志和值。',
    examples: [{ input: 'upper', output: 'Accessing: upper' }],
    starterCode: `# TODO: Implement a proxy using __getattr__\n`,
    solution: `# __getattr__ intercepts attribute access for proxying
class LoggingProxy:
    def __init__(self, target):
        self._target = target

    def __getattr__(self, name):
        print(f"Accessing: {name}")
        return getattr(self._target, name)

attr = input()
proxy = LoggingProxy("hello")
getattr(proxy, attr)`,
    hints: ['__getattr__ is called when normal lookup fails', 'Store the target with a _prefix to avoid recursion', 'Use getattr() to access the target attribute'],
    hintsZh: ['__getattr__ 在普通查找失败时调用', '用 _ 前缀存储目标以避免递归', '使用 getattr() 访问目标属性'],
    testCases: [
      { input: 'upper', expectedOutput: 'Accessing: upper' },
      { input: 'lower', expectedOutput: 'Accessing: lower' },
    ],
  },
  {
    id: 'py-ex-4-44',
    title: 'Class Decorator',
    titleZh: '类装饰器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'decorator'],
    description: 'Create a @add_repr decorator that adds a __repr__ method to a class, showing "ClassName(field1=val1, ...)". Decorate a Point class with x, y. Read x y, print repr.',
    descriptionZh: '创建 @add_repr 装饰器，为类添加 __repr__ 方法，显示 "ClassName(field1=val1, ...)"。装饰 Point 类（x, y）。读取 x y，输出 repr。',
    examples: [{ input: '3 4', output: 'Point(x=3, y=4)' }],
    starterCode: `# TODO: Implement a class decorator\n`,
    solution: `# A class decorator modifies a class after creation
def add_repr(cls):
    def __repr__(self):
        fields = ', '.join(f'{k}={v}' for k, v in self.__dict__.items())
        return f'{cls.__name__}({fields})'
    cls.__repr__ = __repr__
    return cls

@add_repr
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

x, y = map(int, input().split())
print(repr(Point(x, y)))`,
    hints: ['A class decorator takes a class and returns a (modified) class', 'Add __repr__ by assigning to cls.__repr__', 'Use self.__dict__ to get all instance attributes'],
    hintsZh: ['类装饰器接受类并返回（修改过的）类', '通过赋值 cls.__repr__ 添加方法', '使用 self.__dict__ 获取所有实例属性'],
    testCases: [
      { input: '3 4', expectedOutput: 'Point(x=3, y=4)' },
      { input: '0 0', expectedOutput: 'Point(x=0, y=0)' },
    ],
  },
  {
    id: 'py-ex-4-45',
    title: '__enter__/__exit__ File Logger',
    titleZh: '文件日志上下文管理器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: 'OOP',
    tags: ['class', 'context-manager'],
    description: 'Implement a Logger context manager that collects messages via log(msg) and prints them all (one per line) on exit. Read n messages, use the logger, and verify output appears after "Done" is printed.',
    descriptionZh: '实现 Logger 上下文管理器，通过 log(msg) 收集消息，退出时逐行输出。读取 n 条消息，使用 logger，验证输出在 "Done" 之后。',
    examples: [{ input: '2\nhello\nworld', output: 'Done\nhello\nworld' }],
    starterCode: `# TODO: Implement Logger context manager\n`,
    solution: `# Context manager collects logs and flushes on exit
class Logger:
    def __enter__(self):
        self.messages = []
        return self

    def log(self, msg):
        self.messages.append(msg)

    def __exit__(self, *args):
        for m in self.messages:
            print(m)
        return False

n = int(input())
msgs = [input() for _ in range(n)]
with Logger() as logger:
    for m in msgs:
        logger.log(m)
    print("Done")`,
    hints: ['__enter__ initializes the messages list and returns self', 'log() appends to the list', '__exit__ prints all collected messages'],
    hintsZh: ['__enter__ 初始化消息列表并返回 self', 'log() 追加到列表', '__exit__ 打印所有收集的消息'],
    testCases: [
      { input: '2\nhello\nworld', expectedOutput: 'Done\nhello\nworld' },
      { input: '1\ntest', expectedOutput: 'Done\ntest' },
    ],
  },

  // ============================================================
  // LEVEL 5: ALGORITHMS (25 exercises)
  // ============================================================
  {
    id: 'py-ex-5-51',
    title: 'Topological Sort',
    titleZh: '拓扑排序',
    difficulty: 'hard',
    level: 5,
    category: 'Graph Algorithms',
    categoryZh: '图算法',
    tags: ['graph', 'topological-sort', 'dfs'],
    description: 'Read n nodes (0 to n-1) and m directed edges (u v per line). Print a valid topological ordering, space-separated. If a cycle exists, print "CYCLE".',
    descriptionZh: '读取 n 个节点（0 到 n-1）和 m 条有向边（每行 u v）。输出有效的拓扑序，空格分隔。如果存在环，输出 "CYCLE"。',
    examples: [{ input: '4 4\n0 1\n0 2\n1 3\n2 3', output: '0 2 1 3' }],
    starterCode: `# TODO: Implement topological sort\n`,
    solution: `# Kahn's algorithm using in-degree
from collections import deque, defaultdict

n, m = map(int, input().split())
graph = defaultdict(list)
indeg = [0] * n
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    indeg[v] += 1

queue = deque(i for i in range(n) if indeg[i] == 0)
result = []
while queue:
    node = queue.popleft()
    result.append(node)
    for nei in graph[node]:
        indeg[nei] -= 1
        if indeg[nei] == 0:
            queue.append(nei)

if len(result) == n:
    print(' '.join(map(str, result)))
else:
    print("CYCLE")`,
    hints: ['Use Kahn\'s algorithm with in-degree counting', 'Start with nodes that have in-degree 0', 'If result has fewer than n nodes, there\'s a cycle'],
    hintsZh: ['使用 Kahn 算法和入度计数', '从入度为 0 的节点开始', '如果结果少于 n 个节点则存在环'],
    testCases: [
      { input: '4 4\n0 1\n0 2\n1 3\n2 3', expectedOutput: '0 1 2 3' },
      { input: '2 2\n0 1\n1 0', expectedOutput: 'CYCLE' },
    ],
  },
  {
    id: 'py-ex-5-52',
    title: "Dijkstra's Shortest Path",
    titleZh: 'Dijkstra 最短路径',
    difficulty: 'hard',
    level: 5,
    category: 'Graph Algorithms',
    categoryZh: '图算法',
    tags: ['graph', 'dijkstra', 'shortest-path'],
    description: 'Read n nodes, m weighted edges (u v w), source s, target t. Print the shortest distance from s to t, or "INF" if unreachable.',
    descriptionZh: '读取 n 个节点、m 条带权边（u v w）、源 s 和目标 t。输出 s 到 t 的最短距离，不可达则输出 "INF"。',
    examples: [{ input: '4 4\n0 1 1\n1 2 2\n0 2 4\n2 3 1\n0 3', output: '4' }],
    starterCode: `# TODO: Implement Dijkstra's algorithm\n`,
    solution: `# Dijkstra's algorithm with a min-heap
import heapq
from collections import defaultdict

n, m = map(int, input().split())
graph = defaultdict(list)
for _ in range(m):
    u, v, w = map(int, input().split())
    graph[u].append((v, w))
    graph[v].append((u, w))

s, t = map(int, input().split())
dist = [float('inf')] * n
dist[s] = 0
heap = [(0, s)]

while heap:
    d, u = heapq.heappop(heap)
    if d > dist[u]:
        continue
    for v, w in graph[u]:
        if dist[u] + w < dist[v]:
            dist[v] = dist[u] + w
            heapq.heappush(heap, (dist[v], v))

print(dist[t] if dist[t] != float('inf') else "INF")`,
    hints: ['Use a min-heap (heapq) for efficient extraction', 'Skip nodes if we already found a shorter path', 'Initialize all distances to infinity except source'],
    hintsZh: ['使用最小堆 (heapq) 高效提取', '如果已找到更短路径则跳过节点', '除源点外所有距离初始化为无穷大'],
    testCases: [
      { input: '4 4\n0 1 1\n1 2 2\n0 2 4\n2 3 1\n0 3', expectedOutput: '4' },
      { input: '3 1\n0 1 5\n0 2', expectedOutput: 'INF' },
    ],
  },
  {
    id: 'py-ex-5-53',
    title: 'Union-Find',
    titleZh: '并查集',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['union-find', 'disjoint-set'],
    description: 'Read n elements and m operations. "u a b" unions a and b. "q a b" queries if a and b are connected (print "YES" or "NO"). Use path compression and union by rank.',
    descriptionZh: '读取 n 个元素和 m 个操作。"u a b" 合并 a 和 b。"q a b" 查询 a 和 b 是否连通（输出 "YES" 或 "NO"）。使用路径压缩和按秩合并。',
    examples: [{ input: '5 4\nu 0 1\nu 1 2\nq 0 2\nq 0 3', output: 'YES\nNO' }],
    starterCode: `# TODO: Implement Union-Find with path compression\n`,
    solution: `# Union-Find with path compression and union by rank
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1

n, m = map(int, input().split())
uf = UnionFind(n)
for _ in range(m):
    parts = input().split()
    if parts[0] == 'u':
        uf.union(int(parts[1]), int(parts[2]))
    else:
        print("YES" if uf.find(int(parts[1])) == uf.find(int(parts[2])) else "NO")`,
    hints: ['Path compression: set parent to root during find', 'Union by rank: attach smaller tree under larger', 'find() returns the root representative'],
    hintsZh: ['路径压缩：find 时将 parent 设为根', '按秩合并：小树挂在大树下', 'find() 返回根代表元素'],
    testCases: [
      { input: '5 4\nu 0 1\nu 1 2\nq 0 2\nq 0 3', expectedOutput: 'YES\nNO' },
      { input: '3 3\nq 0 1\nu 0 1\nq 0 1', expectedOutput: 'NO\nYES' },
    ],
  },
  {
    id: 'py-ex-5-54',
    title: 'Trie (Prefix Tree)',
    titleZh: '字典树',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['trie', 'prefix', 'tree'],
    description: 'Implement a Trie. Read m operations: "i word" inserts, "s word" searches (exact), "p prefix" checks prefix existence. Print "YES"/"NO" for s and p queries.',
    descriptionZh: '实现字典树。读取 m 个操作："i word" 插入，"s word" 精确搜索，"p prefix" 检查前缀。对 s 和 p 查询输出 "YES"/"NO"。',
    examples: [{ input: '4\ni apple\ns apple\ns app\np app', output: 'YES\nNO\nYES' }],
    starterCode: `# TODO: Implement a Trie\n`,
    solution: `# Trie node with children dict and end-of-word flag
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self._find(word)
        return node is not None and node.is_end

    def starts_with(self, prefix):
        return self._find(prefix) is not None

    def _find(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

trie = Trie()
m = int(input())
for _ in range(m):
    parts = input().split()
    op, word = parts[0], parts[1]
    if op == 'i':
        trie.insert(word)
    elif op == 's':
        print("YES" if trie.search(word) else "NO")
    elif op == 'p':
        print("YES" if trie.starts_with(word) else "NO")`,
    hints: ['Each node has a dict of children and an is_end flag', 'Insert traverses/creates nodes for each character', 'Search must check is_end; prefix check does not'],
    hintsZh: ['每个节点有 children 字典和 is_end 标志', '插入时遍历/创建每个字符的节点', '搜索需检查 is_end，前缀检查不需要'],
    testCases: [
      { input: '4\ni apple\ns apple\ns app\np app', expectedOutput: 'YES\nNO\nYES' },
      { input: '3\ni cat\np ca\np dog', expectedOutput: 'YES\nNO' },
    ],
  },
  {
    id: 'py-ex-5-55',
    title: 'Heap Operations',
    titleZh: '堆操作',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['heap', 'priority-queue'],
    description: 'Implement a min-heap from scratch (no heapq). Support "push x" and "pop" (prints and removes minimum). Read m operations and handle them.',
    descriptionZh: '从零实现最小堆（不用 heapq）。支持 "push x" 和 "pop"（输出并移除最小值）。读取 m 个操作并处理。',
    examples: [{ input: '5\npush 3\npush 1\npush 2\npop\npop', output: '1\n2' }],
    starterCode: `# TODO: Implement a min-heap from scratch\n`,
    solution: `# Min-heap with push (sift up) and pop (sift down)
class MinHeap:
    def __init__(self):
        self.data = []

    def push(self, val):
        self.data.append(val)
        self._sift_up(len(self.data) - 1)

    def pop(self):
        if len(self.data) == 1:
            return self.data.pop()
        val = self.data[0]
        self.data[0] = self.data.pop()
        self._sift_down(0)
        return val

    def _sift_up(self, i):
        while i > 0:
            parent = (i - 1) // 2
            if self.data[i] < self.data[parent]:
                self.data[i], self.data[parent] = self.data[parent], self.data[i]
                i = parent
            else:
                break

    def _sift_down(self, i):
        n = len(self.data)
        while True:
            smallest = i
            left = 2 * i + 1
            right = 2 * i + 2
            if left < n and self.data[left] < self.data[smallest]:
                smallest = left
            if right < n and self.data[right] < self.data[smallest]:
                smallest = right
            if smallest != i:
                self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
                i = smallest
            else:
                break

heap = MinHeap()
m = int(input())
for _ in range(m):
    parts = input().split()
    if parts[0] == 'push':
        heap.push(int(parts[1]))
    else:
        print(heap.pop())`,
    hints: ['Parent of i is (i-1)//2, children are 2i+1 and 2i+2', 'Sift up after push, sift down after pop', 'Pop swaps root with last element, then sifts down'],
    hintsZh: ['i 的父节点是 (i-1)//2，子节点是 2i+1 和 2i+2', 'push 后上浮，pop 后下沉', 'pop 将根与最后元素交换，然后下沉'],
    testCases: [
      { input: '5\npush 3\npush 1\npush 2\npop\npop', expectedOutput: '1\n2' },
      { input: '4\npush 5\npush 3\npop\npop', expectedOutput: '3\n5' },
    ],
  },
  {
    id: 'py-ex-5-56',
    title: 'LRU Cache',
    titleZh: 'LRU 缓存',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['cache', 'lru', 'linked-list', 'dict'],
    description: 'Implement an LRU cache with capacity c. "put k v" inserts/updates. "get k" prints value or -1. Read c, then m operations.',
    descriptionZh: '实现容量为 c 的 LRU 缓存。"put k v" 插入/更新。"get k" 输出值或 -1。读取 c，然后 m 个操作。',
    examples: [{ input: '2\n5\nput 1 10\nput 2 20\nget 1\nput 3 30\nget 2', output: '10\n-1' }],
    starterCode: `# TODO: Implement LRU Cache from scratch\n`,
    solution: `# LRU Cache using OrderedDict
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

c = int(input())
m = int(input())
lru = LRUCache(c)
for _ in range(m):
    parts = input().split()
    if parts[0] == 'get':
        print(lru.get(int(parts[1])))
    else:
        lru.put(int(parts[1]), int(parts[2]))`,
    hints: ['Use OrderedDict for O(1) move-to-end', 'On get: move to end (most recent)', 'On put: if over capacity, remove the first (least recent) item'],
    hintsZh: ['使用 OrderedDict 实现 O(1) 移到末尾', 'get 时移到末尾（最近使用）', 'put 时如果超出容量，移除第一个（最久未使用）'],
    testCases: [
      { input: '2\n5\nput 1 10\nput 2 20\nget 1\nput 3 30\nget 2', expectedOutput: '10\n-1' },
      { input: '1\n3\nput 1 1\nput 2 2\nget 1', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-57',
    title: 'Bloom Filter Concept',
    titleZh: '布隆过滤器概念',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['bloom-filter', 'hash', 'probabilistic'],
    description: 'Implement a simple Bloom filter with size s and 2 hash functions (hash1=hash(x)%s, hash2=(hash(x)//s)%s). "add x" adds. "check x" prints "MAYBE" if all bits set, "NO" otherwise. Read s, then m operations.',
    descriptionZh: '实现简单布隆过滤器，大小 s，2 个哈希函数。"add x" 添加，"check x" 如果所有位都设置则输出 "MAYBE"，否则 "NO"。读取 s 和 m 个操作。',
    examples: [{ input: '10\n3\nadd hello\ncheck hello\ncheck world', output: 'MAYBE\nNO' }],
    starterCode: `# TODO: Implement a simple Bloom filter\n`,
    solution: `# Bloom filter with bit array and two hash functions
class BloomFilter:
    def __init__(self, size):
        self.size = size
        self.bits = [False] * size

    def _hashes(self, item):
        h = hash(item)
        return [h % self.size, (h // self.size) % self.size]

    def add(self, item):
        for idx in self._hashes(item):
            self.bits[idx] = True

    def check(self, item):
        return all(self.bits[idx] for idx in self._hashes(item))

s = int(input())
m = int(input())
bf = BloomFilter(s)
for _ in range(m):
    parts = input().split(maxsplit=1)
    if parts[0] == 'add':
        bf.add(parts[1])
    else:
        print("MAYBE" if bf.check(parts[1]) else "NO")`,
    hints: ['Use a list of booleans as the bit array', 'Two hash functions reduce false positive rate', 'Check returns True only if ALL hash positions are set'],
    hintsZh: ['用布尔列表作为位数组', '两个哈希函数降低误报率', 'check 仅在所有哈希位置都被设置时返回 True'],
    testCases: [
      { input: '10\n3\nadd hello\ncheck hello\ncheck world', expectedOutput: 'MAYBE\nNO' },
      { input: '100\n2\nadd test\ncheck test', expectedOutput: 'MAYBE' },
    ],
  },
  {
    id: 'py-ex-5-58',
    title: 'KMP String Matching',
    titleZh: 'KMP 字符串匹配',
    difficulty: 'hard',
    level: 5,
    category: 'String Algorithms',
    categoryZh: '字符串算法',
    tags: ['kmp', 'string', 'pattern-matching'],
    description: 'Implement KMP pattern matching. Read text and pattern. Print all starting indices (0-based) where pattern occurs, space-separated. If none, print "-1".',
    descriptionZh: '实现 KMP 模式匹配。读取文本和模式。输出模式出现的所有起始索引（0-based），空格分隔。没有则输出 "-1"。',
    examples: [{ input: 'ababcababc\nabc', output: '2 7' }],
    starterCode: `# TODO: Implement KMP string matching\n`,
    solution: `# KMP: build failure function, then search
def build_lps(pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps

def kmp_search(text, pattern):
    lps = build_lps(pattern)
    results = []
    i = j = 0
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
        if j == len(pattern):
            results.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and text[i] != pattern[j]:
            if j:
                j = lps[j - 1]
            else:
                i += 1
    return results

text = input()
pattern = input()
res = kmp_search(text, pattern)
print(' '.join(map(str, res)) if res else '-1')`,
    hints: ['Build the LPS (longest proper prefix suffix) array first', 'Use LPS to skip comparisons on mismatch', 'Time complexity is O(n + m)'],
    hintsZh: ['先构建 LPS（最长真前缀后缀）数组', '不匹配时利用 LPS 跳过比较', '时间复杂度为 O(n + m)'],
    testCases: [
      { input: 'ababcababc\nabc', expectedOutput: '2 7' },
      { input: 'aaaa\naa', expectedOutput: '0 1 2' },
      { input: 'hello\nxyz', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-59',
    title: 'Edit Distance',
    titleZh: '编辑距离',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'edit-distance', 'string'],
    description: 'Read two strings. Print the minimum edit distance (insert, delete, replace each cost 1).',
    descriptionZh: '读取两个字符串，输出最小编辑距离（插入、删除、替换各花费 1）。',
    examples: [{ input: 'kitten\nsitting', output: '3' }],
    starterCode: `# TODO: Compute edit distance\n`,
    solution: `# Classic DP: dp[i][j] = edit distance of s1[:i] and s2[:j]
s1 = input()
s2 = input()
m, n = len(s1), len(s2)
dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(m + 1):
    dp[i][0] = i
for j in range(n + 1):
    dp[0][j] = j
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1]
        else:
            dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
print(dp[m][n])`,
    hints: ['Use a 2D DP table', 'Base case: transforming empty string costs i or j', 'If chars match, no cost; else min of insert/delete/replace + 1'],
    hintsZh: ['使用二维 DP 表', '基础情况：空字符串的转换代价为 i 或 j', '字符匹配则无代价，否则取插入/删除/替换的最小值 + 1'],
    testCases: [
      { input: 'kitten\nsitting', expectedOutput: '3' },
      { input: 'abc\nabc', expectedOutput: '0' },
      { input: '\nabc', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-5-60',
    title: 'Longest Common Subsequence',
    titleZh: '最长公共子序列',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'lcs', 'string'],
    description: 'Read two strings. Print the length of their longest common subsequence.',
    descriptionZh: '读取两个字符串，输出最长公共子序列的长度。',
    examples: [{ input: 'abcde\nace', output: '3' }],
    starterCode: `# TODO: Find longest common subsequence length\n`,
    solution: `# DP: dp[i][j] = LCS length of s1[:i] and s2[:j]
s1 = input()
s2 = input()
m, n = len(s1), len(s2)
dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1] + 1
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])
print(dp[m][n])`,
    hints: ['If characters match, extend the LCS by 1', 'Otherwise take the max of skipping either character', '2D DP table of size (m+1) × (n+1)'],
    hintsZh: ['字符匹配时 LCS 长度 + 1', '否则取跳过任一字符的最大值', '二维 DP 表大小为 (m+1) × (n+1)'],
    testCases: [
      { input: 'abcde\nace', expectedOutput: '3' },
      { input: 'abc\ndef', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-5-61',
    title: '0/1 Knapsack',
    titleZh: '0/1 背包',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'knapsack'],
    description: 'Read n items and capacity W. Then n lines of "weight value". Print the maximum value achievable.',
    descriptionZh: '读取 n 个物品和容量 W，然后 n 行 "weight value"。输出可获得的最大价值。',
    examples: [{ input: '3 4\n1 2\n2 3\n3 5', output: '7' }],
    starterCode: `# TODO: Solve 0/1 knapsack\n`,
    solution: `# 1D DP knapsack: iterate items, update from right to left
n, W = map(int, input().split())
items = []
for _ in range(n):
    w, v = map(int, input().split())
    items.append((w, v))
dp = [0] * (W + 1)
for w, v in items:
    for j in range(W, w - 1, -1):
        dp[j] = max(dp[j], dp[j - w] + v)
print(dp[W])`,
    hints: ['Use 1D DP array of size W+1', 'Iterate weights from right to left to avoid reuse', 'dp[j] = max(dp[j], dp[j-w] + v)'],
    hintsZh: ['使用大小为 W+1 的一维 DP 数组', '从右到左遍历以避免重复使用', 'dp[j] = max(dp[j], dp[j-w] + v)'],
    testCases: [
      { input: '3 4\n1 2\n2 3\n3 5', expectedOutput: '7' },
      { input: '2 3\n2 4\n3 5', expectedOutput: '5' },
    ],
  },
  {
    id: 'py-ex-5-62',
    title: 'Matrix Chain Multiplication',
    titleZh: '矩阵链乘法',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'matrix'],
    description: 'Read n, then n+1 dimensions (space-separated). Matrix i has dimensions d[i]×d[i+1]. Print the minimum number of scalar multiplications.',
    descriptionZh: '读取 n，然后 n+1 个维度（空格分隔）。矩阵 i 的维度为 d[i]×d[i+1]。输出最少标量乘法次数。',
    examples: [{ input: '3\n10 30 5 60', output: '4500' }],
    starterCode: `# TODO: Solve matrix chain multiplication\n`,
    solution: `# DP: dp[i][j] = min cost to multiply matrices i..j
n = int(input())
d = list(map(int, input().split()))
dp = [[0] * n for _ in range(n)]
for length in range(2, n + 1):
    for i in range(n - length + 1):
        j = i + length - 1
        dp[i][j] = float('inf')
        for k in range(i, j):
            cost = dp[i][k] + dp[k+1][j] + d[i] * d[k+1] * d[j+1]
            dp[i][j] = min(dp[i][j], cost)
print(dp[0][n-1])`,
    hints: ['dp[i][j] = minimum multiplications for matrices i through j', 'Try all split points k between i and j', 'Cost of split at k: dp[i][k] + dp[k+1][j] + d[i]*d[k+1]*d[j+1]'],
    hintsZh: ['dp[i][j] = 矩阵 i 到 j 的最少乘法次数', '尝试 i 和 j 之间所有分割点 k', '分割点 k 的代价：dp[i][k] + dp[k+1][j] + d[i]*d[k+1]*d[j+1]'],
    testCases: [
      { input: '3\n10 30 5 60', expectedOutput: '4500' },
      { input: '4\n40 20 30 10 30', expectedOutput: '26000' },
    ],
  },
  {
    id: 'py-ex-5-63',
    title: 'Reservoir Sampling',
    titleZh: '蓄水池抽样',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['sampling', 'random', 'streaming'],
    description: 'Implement reservoir sampling to select k items from a stream. Read k, then n items (one per line), then "END". Print the k selected items (use seed 42 for reproducibility). Use random.seed(42) and random.randint.',
    descriptionZh: '实现蓄水池抽样从流中选 k 项。读取 k，然后 n 个项（每行一个），然后 "END"。打印选中的 k 项（用 seed 42 保证可复现）。',
    examples: [{ input: '2\na\nb\nc\nd\ne\nEND', output: 'a\nd' }],
    starterCode: `# TODO: Implement reservoir sampling\nimport random\n`,
    solution: `# Reservoir sampling: keep k items with equal probability
import random
random.seed(42)

k = int(input())
reservoir = []
i = 0
while True:
    line = input()
    if line == 'END':
        break
    if i < k:
        reservoir.append(line)
    else:
        j = random.randint(0, i)
        if j < k:
            reservoir[j] = line
    i += 1
for item in reservoir:
    print(item)`,
    hints: ['Fill reservoir with first k items', 'For each subsequent item i, pick random j in [0, i]', 'If j < k, replace reservoir[j]'],
    hintsZh: ['先用前 k 个项填满蓄水池', '对后续每项 i，在 [0, i] 中随机选 j', '如果 j < k，替换 reservoir[j]'],
    testCases: [
      { input: '2\na\nb\nc\nd\ne\nEND', expectedOutput: 'a\nd' },
      { input: '1\nx\ny\nz\nEND', expectedOutput: 'z' },
    ],
  },
  {
    id: 'py-ex-5-64',
    title: 'Fisher-Yates Shuffle',
    titleZh: 'Fisher-Yates 洗牌',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['shuffle', 'random'],
    description: 'Implement the Fisher-Yates shuffle. Read a list of integers (space-separated). Shuffle using random.seed(42). Print the shuffled list space-separated.',
    descriptionZh: '实现 Fisher-Yates 洗牌。读取一行整数。使用 random.seed(42) 洗牌后输出，空格分隔。',
    examples: [{ input: '1 2 3 4 5', output: '1 4 2 5 3' }],
    starterCode: `# TODO: Implement Fisher-Yates shuffle\nimport random\n`,
    solution: `# Fisher-Yates: swap each element with a random earlier/equal position
import random
random.seed(42)

arr = list(map(int, input().split()))
n = len(arr)
for i in range(n - 1, 0, -1):
    j = random.randint(0, i)
    arr[i], arr[j] = arr[j], arr[i]
print(' '.join(map(str, arr)))`,
    hints: ['Iterate from last to first', 'Pick random index j in [0, i] and swap', 'This produces a uniformly random permutation'],
    hintsZh: ['从最后一个元素向前遍历', '在 [0, i] 中随机选 j 并交换', '这会产生均匀随机排列'],
    testCases: [
      { input: '1 2 3 4 5', expectedOutput: '1 4 2 5 3' },
      { input: '10 20 30', expectedOutput: '10 30 20' },
    ],
  },
  {
    id: 'py-ex-5-65',
    title: 'Median of Stream',
    titleZh: '数据流中位数',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['heap', 'median', 'stream'],
    description: 'Read n integers one per line. After each, print the current median (if even count, average of two middle values as a float with 1 decimal).',
    descriptionZh: '逐行读取 n 个整数。每读一个后输出当前中位数（偶数个时取中间两个的平均值，保留 1 位小数）。',
    examples: [{ input: '5\n2\n3\n4\n1\n5', output: '2.0\n2.5\n3.0\n2.5\n3.0' }],
    starterCode: `# TODO: Find median after each insertion\nimport heapq\n`,
    solution: `# Two heaps: max-heap (negated) for lower half, min-heap for upper half
import heapq

n = int(input())
lo = []  # max-heap (negated)
hi = []  # min-heap

for _ in range(n):
    x = int(input())
    heapq.heappush(lo, -x)
    # Balance: move top of lo to hi
    heapq.heappush(hi, -heapq.heappop(lo))
    # Keep lo same size or 1 larger
    if len(hi) > len(lo):
        heapq.heappush(lo, -heapq.heappop(hi))
    if len(lo) > len(hi):
        median = -lo[0]
    else:
        median = (-lo[0] + hi[0]) / 2
    print(f"{median:.1f}")`,
    hints: ['Use two heaps: max-heap for lower half, min-heap for upper half', 'Balance so lower heap has same or one more element', 'Median is either top of lower heap or average of both tops'],
    hintsZh: ['使用两个堆：下半部分最大堆，上半部分最小堆', '保持下半部分堆大小相同或多 1', '中位数是下半部分堆顶或两个堆顶的平均值'],
    testCases: [
      { input: '5\n2\n3\n4\n1\n5', expectedOutput: '2.0\n2.5\n3.0\n2.5\n3.0' },
      { input: '3\n1\n2\n3', expectedOutput: '1.0\n1.5\n2.0' },
    ],
  },
  {
    id: 'py-ex-5-66',
    title: 'Interval Merge',
    titleZh: '区间合并',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['interval', 'merge', 'sort'],
    description: 'Read n intervals (start end per line). Merge overlapping intervals. Print merged intervals, one per line, sorted by start.',
    descriptionZh: '读取 n 个区间（每行 start end）。合并重叠区间。按 start 排序输出合并后的区间，每行一个。',
    examples: [{ input: '4\n1 3\n2 6\n8 10\n15 18', output: '1 6\n8 10\n15 18' }],
    starterCode: `# TODO: Merge overlapping intervals\n`,
    solution: `# Sort by start, merge overlapping
n = int(input())
intervals = []
for _ in range(n):
    s, e = map(int, input().split())
    intervals.append([s, e])
intervals.sort()
merged = [intervals[0]]
for s, e in intervals[1:]:
    if s <= merged[-1][1]:
        merged[-1][1] = max(merged[-1][1], e)
    else:
        merged.append([s, e])
for s, e in merged:
    print(s, e)`,
    hints: ['Sort intervals by start time', 'If current start <= last merged end, extend', 'Otherwise start a new merged interval'],
    hintsZh: ['按起始时间排序', '如果当前起始 <= 上个合并区间的结束，则扩展', '否则开始新的合并区间'],
    testCases: [
      { input: '4\n1 3\n2 6\n8 10\n15 18', expectedOutput: '1 6\n8 10\n15 18' },
      { input: '2\n1 4\n4 5', expectedOutput: '1 5' },
    ],
  },
  {
    id: 'py-ex-5-67',
    title: 'Meeting Rooms',
    titleZh: '会议室',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['interval', 'heap', 'greedy'],
    description: 'Read n meetings (start end per line). Print the minimum number of meeting rooms required.',
    descriptionZh: '读取 n 个会议（每行 start end）。输出所需的最少会议室数量。',
    examples: [{ input: '3\n0 30\n5 10\n15 20', output: '2' }],
    starterCode: `# TODO: Find minimum meeting rooms needed\n`,
    solution: `# Use events: +1 for start, -1 for end, sweep
n = int(input())
events = []
for _ in range(n):
    s, e = map(int, input().split())
    events.append((s, 1))
    events.append((e, -1))
events.sort()
rooms = 0
max_rooms = 0
for _, delta in events:
    rooms += delta
    max_rooms = max(max_rooms, rooms)
print(max_rooms)`,
    hints: ['Create start (+1) and end (-1) events', 'Sort events (end before start if same time)', 'Track max concurrent meetings'],
    hintsZh: ['创建开始 (+1) 和结束 (-1) 事件', '排序事件（相同时间先结束后开始）', '跟踪最大并发会议数'],
    testCases: [
      { input: '3\n0 30\n5 10\n15 20', expectedOutput: '2' },
      { input: '2\n1 5\n5 10', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-5-68',
    title: 'Stock Buy and Sell',
    titleZh: '股票买卖',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'greedy', 'stock'],
    description: 'Read a list of stock prices (space-separated). Print the maximum profit from one buy and one sell (buy before sell). If no profit possible, print 0.',
    descriptionZh: '读取一行股票价格。输出一次买卖（先买后卖）的最大利润。无利可图则输出 0。',
    examples: [{ input: '7 1 5 3 6 4', output: '5' }],
    starterCode: `# TODO: Find max profit from one transaction\n`,
    solution: `# Track min price so far and max profit
prices = list(map(int, input().split()))
min_price = float('inf')
max_profit = 0
for p in prices:
    min_price = min(min_price, p)
    max_profit = max(max_profit, p - min_price)
print(max_profit)`,
    hints: ['Track the minimum price seen so far', 'At each price, profit = current - min_so_far', 'Track the maximum profit'],
    hintsZh: ['跟踪到目前为止的最低价格', '每个价格的利润 = 当前价格 - 最低价格', '跟踪最大利润'],
    testCases: [
      { input: '7 1 5 3 6 4', expectedOutput: '5' },
      { input: '7 6 4 3 1', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-5-69',
    title: 'Rain Water Trapping',
    titleZh: '接雨水',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['two-pointer', 'stack'],
    description: 'Read a list of non-negative integers representing elevation heights. Print the total units of rain water trapped.',
    descriptionZh: '读取一行非负整数表示高度。输出能接的雨水总量。',
    examples: [{ input: '0 1 0 2 1 0 1 3 2 1 2 1', output: '6' }],
    starterCode: `# TODO: Calculate trapped rain water\n`,
    solution: `# Two-pointer approach: O(n) time, O(1) space
heights = list(map(int, input().split()))
left, right = 0, len(heights) - 1
left_max = right_max = 0
water = 0
while left < right:
    if heights[left] < heights[right]:
        if heights[left] >= left_max:
            left_max = heights[left]
        else:
            water += left_max - heights[left]
        left += 1
    else:
        if heights[right] >= right_max:
            right_max = heights[right]
        else:
            water += right_max - heights[right]
        right -= 1
print(water)`,
    hints: ['Use two pointers from both ends', 'Track left_max and right_max', 'Water at position = min(left_max, right_max) - height'],
    hintsZh: ['使用两端双指针', '跟踪 left_max 和 right_max', '位置的水量 = min(left_max, right_max) - 高度'],
    testCases: [
      { input: '0 1 0 2 1 0 1 3 2 1 2 1', expectedOutput: '6' },
      { input: '4 2 0 3 2 5', expectedOutput: '9' },
    ],
  },
  {
    id: 'py-ex-5-70',
    title: 'Next Permutation',
    titleZh: '下一个排列',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['permutation', 'array'],
    description: 'Read a list of integers (space-separated). Print the next lexicographic permutation. If it\'s the last permutation, print the first (sorted ascending).',
    descriptionZh: '读取一行整数。输出下一个字典序排列。如果是最后一个排列，输出第一个（升序排列）。',
    examples: [{ input: '1 2 3', output: '1 3 2' }],
    starterCode: `# TODO: Find the next permutation\n`,
    solution: `# Find rightmost i where a[i] < a[i+1], swap, reverse suffix
nums = list(map(int, input().split()))
n = len(nums)
# Step 1: Find the largest i such that nums[i] < nums[i+1]
i = n - 2
while i >= 0 and nums[i] >= nums[i + 1]:
    i -= 1
if i >= 0:
    # Step 2: Find largest j such that nums[j] > nums[i]
    j = n - 1
    while nums[j] <= nums[i]:
        j -= 1
    nums[i], nums[j] = nums[j], nums[i]
# Step 3: Reverse from i+1 to end
nums[i+1:] = reversed(nums[i+1:])
print(' '.join(map(str, nums)))`,
    hints: ['Find rightmost index i where nums[i] < nums[i+1]', 'Swap nums[i] with the smallest larger element to its right', 'Reverse the suffix after position i'],
    hintsZh: ['找到最右边的 i 使得 nums[i] < nums[i+1]', '将 nums[i] 与右侧最小的更大元素交换', '反转位置 i 之后的后缀'],
    testCases: [
      { input: '1 2 3', expectedOutput: '1 3 2' },
      { input: '3 2 1', expectedOutput: '1 2 3' },
      { input: '1 1 5', expectedOutput: '1 5 1' },
    ],
  },
  {
    id: 'py-ex-5-71',
    title: 'String to Integer (atoi)',
    titleZh: '字符串转整数',
    difficulty: 'hard',
    level: 5,
    category: 'String Algorithms',
    categoryZh: '字符串算法',
    tags: ['string', 'parsing'],
    description: 'Implement atoi: Read a string, skip leading whitespace, handle optional +/- sign, read digits until non-digit. Clamp to [-2^31, 2^31-1]. Print the integer.',
    descriptionZh: '实现 atoi：读取字符串，跳过前导空格，处理可选的 +/- 符号，读取数字直到非数字。夹紧到 [-2^31, 2^31-1]。输出整数。',
    examples: [{ input: '   -42abc', output: '-42' }],
    starterCode: `# TODO: Implement string to integer (atoi)\n`,
    solution: `# Parse string to integer with overflow handling
s = input()
i = 0
n = len(s)
# Skip whitespace
while i < n and s[i] == ' ':
    i += 1
# Handle sign
sign = 1
if i < n and s[i] in '+-':
    sign = -1 if s[i] == '-' else 1
    i += 1
# Read digits
result = 0
while i < n and s[i].isdigit():
    result = result * 10 + int(s[i])
    i += 1
result *= sign
# Clamp to 32-bit range
INT_MIN, INT_MAX = -(2**31), 2**31 - 1
result = max(INT_MIN, min(INT_MAX, result))
print(result)`,
    hints: ['Skip whitespace, then check for sign', 'Read digits one by one, building the number', 'Clamp result to 32-bit signed integer range'],
    hintsZh: ['跳过空格，然后检查符号', '逐个读取数字构建结果', '将结果夹紧到 32 位有符号整数范围'],
    testCases: [
      { input: '   -42abc', expectedOutput: '-42' },
      { input: '4193 with words', expectedOutput: '4193' },
      { input: '-91283472332', expectedOutput: '-2147483648' },
    ],
  },
  {
    id: 'py-ex-5-72',
    title: 'Segment Tree (Range Sum)',
    titleZh: '线段树（区间和）',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['segment-tree', 'range-query'],
    description: 'Implement a segment tree for range sum queries. Read n numbers, then m operations: "q l r" (query sum [l,r] inclusive, 0-indexed) or "u i v" (update index i to value v).',
    descriptionZh: '实现区间和线段树。读取 n 个数，然后 m 个操作："q l r"（查询 [l,r] 的和，0-indexed）或 "u i v"（将索引 i 更新为值 v）。',
    examples: [{ input: '5\n1 2 3 4 5\n3\nq 0 4\nu 2 10\nq 0 4', output: '15\n22' }],
    starterCode: `# TODO: Implement a segment tree\n`,
    solution: `# Segment tree with build, update, and query
class SegTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (4 * self.n)
        self._build(data, 1, 0, self.n - 1)

    def _build(self, data, node, start, end):
        if start == end:
            self.tree[node] = data[start]
        else:
            mid = (start + end) // 2
            self._build(data, 2*node, start, mid)
            self._build(data, 2*node+1, mid+1, end)
            self.tree[node] = self.tree[2*node] + self.tree[2*node+1]

    def update(self, idx, val, node=1, start=0, end=None):
        if end is None:
            end = self.n - 1
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self.update(idx, val, 2*node, start, mid)
            else:
                self.update(idx, val, 2*node+1, mid+1, end)
            self.tree[node] = self.tree[2*node] + self.tree[2*node+1]

    def query(self, l, r, node=1, start=0, end=None):
        if end is None:
            end = self.n - 1
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return self.query(l, r, 2*node, start, mid) + self.query(l, r, 2*node+1, mid+1, end)

n = int(input())
data = list(map(int, input().split()))
st = SegTree(data)
m = int(input())
for _ in range(m):
    parts = input().split()
    if parts[0] == 'q':
        print(st.query(int(parts[1]), int(parts[2])))
    else:
        st.update(int(parts[1]), int(parts[2]))`,
    hints: ['Use a 1-indexed array of size 4n', 'Build recursively, splitting at midpoint', 'Query/update decompose range into tree segments'],
    hintsZh: ['使用大小为 4n 的 1-indexed 数组', '递归构建，在中点分割', '查询/更新将范围分解为树段'],
    testCases: [
      { input: '5\n1 2 3 4 5\n3\nq 0 4\nu 2 10\nq 0 4', expectedOutput: '15\n22' },
      { input: '3\n1 1 1\n2\nq 0 2\nq 1 1', expectedOutput: '3\n1' },
    ],
  },
  {
    id: 'py-ex-5-73',
    title: 'Fenwick Tree (BIT)',
    titleZh: '树状数组',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['fenwick', 'bit', 'prefix-sum'],
    description: 'Implement a Fenwick tree for prefix sums. Read n numbers, then m operations: "q i" (prefix sum [0..i]) or "u i d" (add d to index i).',
    descriptionZh: '实现树状数组（前缀和）。读取 n 个数，然后 m 个操作："q i"（前缀和 [0..i]）或 "u i d"（将 d 加到索引 i）。',
    examples: [{ input: '5\n1 2 3 4 5\n3\nq 4\nu 2 7\nq 4', output: '15\n22' }],
    starterCode: `# TODO: Implement a Fenwick tree\n`,
    solution: `# Fenwick tree (Binary Indexed Tree) for prefix sums
class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def update(self, i, delta):
        i += 1  # 1-indexed
        while i <= self.n:
            self.tree[i] += delta
            i += i & (-i)

    def query(self, i):
        i += 1  # 1-indexed
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)
        return s

n = int(input())
data = list(map(int, input().split()))
ft = FenwickTree(n)
for i, v in enumerate(data):
    ft.update(i, v)
m = int(input())
for _ in range(m):
    parts = input().split()
    if parts[0] == 'q':
        print(ft.query(int(parts[1])))
    else:
        ft.update(int(parts[1]), int(parts[2]))`,
    hints: ['Use 1-indexed array internally', 'i & (-i) gives the lowest set bit', 'Update walks up, query walks down'],
    hintsZh: ['内部使用 1-indexed 数组', 'i & (-i) 得到最低位', '更新向上走，查询向下走'],
    testCases: [
      { input: '5\n1 2 3 4 5\n3\nq 4\nu 2 7\nq 4', expectedOutput: '15\n22' },
      { input: '3\n1 1 1\n2\nq 2\nq 0', expectedOutput: '3\n1' },
    ],
  },
  {
    id: 'py-ex-5-74',
    title: 'Minimax (Tic-Tac-Toe)',
    titleZh: 'Minimax（井字棋）',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['minimax', 'game', 'recursion'],
    description: 'Read a 3x3 tic-tac-toe board (X, O, or . for empty) and whose turn it is (X or O). Print the best score for the current player using minimax: +1 win, -1 loss, 0 draw.',
    descriptionZh: '读取 3x3 井字棋棋盘（X、O 或 . 表示空）和当前玩家（X 或 O）。用 minimax 输出当前玩家的最佳得分：+1 赢，-1 输，0 平。',
    examples: [{ input: 'X O X\nO X .\n. . O\nX', output: '1' }],
    starterCode: `# TODO: Implement minimax for tic-tac-toe\n`,
    solution: `# Minimax recursion for tic-tac-toe
def check_winner(board):
    lines = []
    for i in range(3):
        lines.append(board[i])
        lines.append([board[j][i] for j in range(3)])
    lines.append([board[i][i] for i in range(3)])
    lines.append([board[i][2-i] for i in range(3)])
    for line in lines:
        if line[0] == line[1] == line[2] and line[0] != '.':
            return line[0]
    return None

def minimax(board, is_max, player, opponent):
    winner = check_winner(board)
    if winner == player:
        return 1
    if winner == opponent:
        return -1
    if all(board[i][j] != '.' for i in range(3) for j in range(3)):
        return 0
    if is_max:
        best = -2
        for i in range(3):
            for j in range(3):
                if board[i][j] == '.':
                    board[i][j] = player
                    best = max(best, minimax(board, False, player, opponent))
                    board[i][j] = '.'
        return best
    else:
        best = 2
        for i in range(3):
            for j in range(3):
                if board[i][j] == '.':
                    board[i][j] = opponent
                    best = min(best, minimax(board, True, player, opponent))
                    board[i][j] = '.'
        return best

board = []
for _ in range(3):
    board.append(input().split())
player = input().strip()
opponent = 'O' if player == 'X' else 'X'
print(minimax(board, True, player, opponent))`,
    hints: ['Check all 8 lines (rows, cols, diags) for a winner', 'Maximizer picks the move with highest score', 'Minimizer picks the move with lowest score'],
    hintsZh: ['检查所有 8 条线（行、列、对角线）是否有赢家', '最大化方选择得分最高的走法', '最小化方选择得分最低的走法'],
    testCases: [
      { input: 'X O X\nO X .\n. . O\nX', expectedOutput: '1' },
      { input: '. . .\n. . .\n. . .\nX', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-5-75',
    title: 'A* Search',
    titleZh: 'A* 搜索',
    difficulty: 'hard',
    level: 5,
    category: 'Graph Algorithms',
    categoryZh: '图算法',
    tags: ['astar', 'graph', 'heuristic'],
    description: 'Read an r×c grid where "." is open and "#" is blocked. "S" is start, "E" is end. Find shortest path length using A* with Manhattan distance heuristic. Print the path length or -1.',
    descriptionZh: '读取 r×c 网格，"." 为可通行，"#" 为障碍，"S" 为起点，"E" 为终点。用 A*（曼哈顿距离启发式）找最短路径长度，输出路径长度或 -1。',
    examples: [{ input: '3 5\nS . . . .\n. # # # .\n. . . . E', output: '6' }],
    starterCode: `# TODO: Implement A* search on a grid\n`,
    solution: `# A* search with Manhattan distance heuristic
import heapq

r, c = map(int, input().split())
grid = []
start = end = None
for i in range(r):
    row = input().split()
    grid.append(row)
    for j in range(len(row)):
        if row[j] == 'S':
            start = (i, j)
        elif row[j] == 'E':
            end = (i, j)

def heuristic(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

# A* algorithm
open_set = [(heuristic(start, end), 0, start)]
g_score = {start: 0}
closed = set()

while open_set:
    f, g, pos = heapq.heappop(open_set)
    if pos == end:
        print(g)
        break
    if pos in closed:
        continue
    closed.add(pos)
    for di, dj in [(-1,0),(1,0),(0,-1),(0,1)]:
        ni, nj = pos[0]+di, pos[1]+dj
        if 0 <= ni < r and 0 <= nj < c and grid[ni][nj] != '#' and (ni,nj) not in closed:
            new_g = g + 1
            if new_g < g_score.get((ni,nj), float('inf')):
                g_score[(ni,nj)] = new_g
                heapq.heappush(open_set, (new_g + heuristic((ni,nj), end), new_g, (ni,nj)))
else:
    print(-1)`,
    hints: ['f(n) = g(n) + h(n) where h is Manhattan distance', 'Use a min-heap ordered by f-score', 'Track g-scores to avoid revisiting with worse paths'],
    hintsZh: ['f(n) = g(n) + h(n)，h 为曼哈顿距离', '用 f 值排序的最小堆', '记录 g 值以避免更差路径重复访问'],
    testCases: [
      { input: '3 5\nS . . . .\n. # # # .\n. . . . E', expectedOutput: '6' },
      { input: '2 2\nS #\n# E', expectedOutput: '-1' },
    ],
  },
];
