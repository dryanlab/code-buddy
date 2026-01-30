// Browser-based Turtle Graphics Simulation using HTML5 Canvas
// Provides a Python-compatible turtle module that renders to a canvas element

export interface TurtleState {
  x: number;
  y: number;
  angle: number; // degrees, 0 = right/east
  penDown: boolean;
  penColor: string;
  penWidth: number;
  speed: number;
  visible: boolean;
  shape: string;
  fillColor: string;
  filling: boolean;
  fillPath: { x: number; y: number }[];
}

/**
 * Generate Python code that defines a mock turtle module for Pyodide.
 * The mock uses JS interop to draw on a canvas element.
 */
export function getTurtleMockPython(): string {
  return `
import js
from pyodide.ffi import create_proxy

class _TurtleCanvas:
    """Manages the HTML5 Canvas for turtle graphics."""
    _instance = None
    
    @classmethod
    def get(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance
    
    def __init__(self):
        self.canvas = None
        self.ctx = None
        self.width = 600
        self.height = 400
        self._setup_canvas()
    
    def _setup_canvas(self):
        doc = js.document
        # Find or create the turtle canvas container
        container = doc.getElementById("turtle-canvas-container")
        if not container:
            # Create container in the output area
            output_el = doc.getElementById("turtle-output")
            if not output_el:
                # Fallback: create it somewhere visible
                output_el = doc.querySelector("[data-turtle-mount]")
            if not output_el:
                output_el = doc.body
            container = doc.createElement("div")
            container.id = "turtle-canvas-container"
            container.style.cssText = "margin:8px 0;border-radius:12px;overflow:hidden;border:1px solid #334155;"
            output_el.appendChild(container)
        
        # Clear previous canvas
        container.innerHTML = ""
        
        self.canvas = doc.createElement("canvas")
        self.canvas.width = self.width
        self.canvas.height = self.height
        self.canvas.style.cssText = "background:#1a1a2e;display:block;width:100%;max-width:600px;"
        container.appendChild(self.canvas)
        self.ctx = self.canvas.getContext("2d")
        self.ctx.lineCap = "round"
        self.ctx.lineJoin = "round"
    
    def clear(self):
        self.ctx.clearRect(0, 0, self.width, self.height)

import math as _math
import time as _time

class Turtle:
    """Browser-compatible turtle graphics implementation."""
    
    def __init__(self):
        self._canvas = _TurtleCanvas.get()
        self._x = 0.0
        self._y = 0.0
        self._angle = 0.0  # 0 = facing right (east), like real turtle
        self._pen_down = True
        self._pen_color = "white"
        self._pen_width = 2
        self._speed_val = 6
        self._visible = True
        self._shape = "turtle"
        self._fill_color = "white"
        self._filling = False
        self._fill_path = []
        self._draw_turtle()
    
    def _canvas_x(self, x=None):
        if x is None:
            x = self._x
        return self._canvas.width / 2 + x
    
    def _canvas_y(self, y=None):
        if y is None:
            y = self._y
        return self._canvas.height / 2 - y  # Flip Y axis
    
    def _draw_turtle(self):
        if not self._visible:
            return
        ctx = self._canvas.ctx
        cx = self._canvas_x()
        cy = self._canvas_y()
        size = 10
        angle_rad = _math.radians(-self._angle + 90)  # Adjust for canvas coords
        
        # Draw turtle shape (triangle pointing in direction of movement)
        angle_rad_move = _math.radians(self._angle)
        tip_x = cx + size * _math.cos(angle_rad_move)
        tip_y = cy - size * _math.sin(angle_rad_move)
        left_x = cx + size * 0.6 * _math.cos(angle_rad_move + 2.5)
        left_y = cy - size * 0.6 * _math.sin(angle_rad_move + 2.5)
        right_x = cx + size * 0.6 * _math.cos(angle_rad_move - 2.5)
        right_y = cy - size * 0.6 * _math.sin(angle_rad_move - 2.5)
        
        ctx.save()
        ctx.fillStyle = self._pen_color
        ctx.globalAlpha = 0.8
        ctx.beginPath()
        ctx.moveTo(tip_x, tip_y)
        ctx.lineTo(left_x, left_y)
        ctx.lineTo(right_x, right_y)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    
    def _clear_turtle(self):
        # We redraw everything, so this is a no-op with our approach
        pass
    
    def _redraw_all(self):
        """Redraw turtle indicator at current position."""
        self._draw_turtle()
    
    def forward(self, distance):
        angle_rad = _math.radians(self._angle)
        new_x = self._x + distance * _math.cos(angle_rad)
        new_y = self._y + distance * _math.sin(angle_rad)
        
        if self._pen_down:
            ctx = self._canvas.ctx
            ctx.beginPath()
            ctx.strokeStyle = self._pen_color
            ctx.lineWidth = self._pen_width
            ctx.moveTo(self._canvas_x(), self._canvas_y())
            ctx.lineTo(self._canvas_x(new_x), self._canvas_y(new_y))
            ctx.stroke()
        
        self._x = new_x
        self._y = new_y
        
        if self._filling:
            self._fill_path.append({"x": new_x, "y": new_y})
        
        self._draw_turtle()
    
    fd = forward
    
    def backward(self, distance):
        self.forward(-distance)
    
    bk = backward
    back = backward
    
    def right(self, angle):
        self._angle -= angle
    
    rt = right
    
    def left(self, angle):
        self._angle += angle
    
    lt = left
    
    def goto(self, x, y=None):
        if y is None and hasattr(x, '__iter__'):
            x, y = x[0], x[1]
        
        if self._pen_down:
            ctx = self._canvas.ctx
            ctx.beginPath()
            ctx.strokeStyle = self._pen_color
            ctx.lineWidth = self._pen_width
            ctx.moveTo(self._canvas_x(), self._canvas_y())
            ctx.lineTo(self._canvas_x(x), self._canvas_y(y))
            ctx.stroke()
        
        self._x = float(x)
        self._y = float(y)
        self._draw_turtle()
    
    setpos = goto
    setposition = goto
    
    def setx(self, x):
        self.goto(x, self._y)
    
    def sety(self, y):
        self.goto(self._x, y)
    
    def setheading(self, angle):
        self._angle = angle
    
    seth = setheading
    
    def home(self):
        self.goto(0, 0)
        self._angle = 0
    
    def circle(self, radius, extent=360, steps=None):
        if steps is None:
            steps = max(int(abs(radius * extent / 6)), 12)
        
        angle_step = extent / steps
        length = 2 * abs(radius) * _math.sin(_math.radians(abs(angle_step) / 2))
        
        if radius < 0:
            angle_step = -angle_step
        
        for _ in range(steps):
            self.forward(length)
            self.left(angle_step)
    
    def dot(self, size=None, color=None):
        if size is None:
            size = max(self._pen_width + 4, 2 * self._pen_width)
        ctx = self._canvas.ctx
        ctx.beginPath()
        ctx.fillStyle = color or self._pen_color
        ctx.arc(self._canvas_x(), self._canvas_y(), size / 2, 0, 2 * _math.pi)
        ctx.fill()
    
    def stamp(self):
        self._draw_turtle()
        return id(self)
    
    def speed(self, s=None):
        if s is None:
            return self._speed_val
        self._speed_val = s
    
    def penup(self):
        self._pen_down = False
    
    pu = penup
    up = penup
    
    def pendown(self):
        self._pen_down = True
    
    pd = pendown
    down = pendown
    
    def isdown(self):
        return self._pen_down
    
    def pensize(self, width=None):
        if width is None:
            return self._pen_width
        self._pen_width = width
    
    width = pensize
    
    def pencolor(self, *args):
        if not args:
            return self._pen_color
        if len(args) == 1:
            self._pen_color = args[0]
        elif len(args) == 3:
            r, g, b = args
            if all(isinstance(v, float) and v <= 1.0 for v in args):
                r, g, b = int(r*255), int(g*255), int(b*255)
            self._pen_color = f"rgb({r},{g},{b})"
    
    def fillcolor(self, *args):
        if not args:
            return self._fill_color
        if len(args) == 1:
            self._fill_color = args[0]
        elif len(args) == 3:
            r, g, b = args
            if all(isinstance(v, float) and v <= 1.0 for v in args):
                r, g, b = int(r*255), int(g*255), int(b*255)
            self._fill_color = f"rgb({r},{g},{b})"
    
    def color(self, *args):
        if not args:
            return (self._pen_color, self._fill_color)
        if len(args) == 1:
            self._pen_color = args[0]
            self._fill_color = args[0]
        elif len(args) == 2:
            self._pen_color = args[0]
            self._fill_color = args[1]
    
    def begin_fill(self):
        self._filling = True
        self._fill_path = [{"x": self._x, "y": self._y}]
    
    def end_fill(self):
        if not self._filling or len(self._fill_path) < 2:
            self._filling = False
            return
        ctx = self._canvas.ctx
        ctx.beginPath()
        ctx.fillStyle = self._fill_color
        first = self._fill_path[0]
        ctx.moveTo(self._canvas_x(first["x"]), self._canvas_y(first["y"]))
        for pt in self._fill_path[1:]:
            ctx.lineTo(self._canvas_x(pt["x"]), self._canvas_y(pt["y"]))
        ctx.closePath()
        ctx.fill()
        self._filling = False
        self._fill_path = []
    
    def hideturtle(self):
        self._visible = False
    
    ht = hideturtle
    
    def showturtle(self):
        self._visible = True
    
    st = showturtle
    
    def isvisible(self):
        return self._visible
    
    def shape(self, name=None):
        if name is None:
            return self._shape
        self._shape = name
    
    def position(self):
        return (self._x, self._y)
    
    pos = position
    
    def xcor(self):
        return self._x
    
    def ycor(self):
        return self._y
    
    def heading(self):
        return self._angle
    
    def towards(self, x, y=None):
        if y is None:
            x, y = x[0], x[1]
        dx = x - self._x
        dy = y - self._y
        return _math.degrees(_math.atan2(dy, dx))
    
    def distance(self, x, y=None):
        if y is None:
            x, y = x[0], x[1]
        return _math.sqrt((x - self._x)**2 + (y - self._y)**2)
    
    def clear(self):
        self._canvas.clear()
    
    def reset(self):
        self.clear()
        self._x = 0
        self._y = 0
        self._angle = 0
        self._pen_down = True
        self._pen_color = "white"
        self._pen_width = 2
        self._visible = True
    
    def write(self, text, move=False, align="left", font=("Arial", 12, "normal")):
        ctx = self._canvas.ctx
        fname, fsize, fstyle = font if len(font) == 3 else ("Arial", 12, "normal")
        ctx.font = f"{fstyle} {fsize}px {fname}"
        ctx.fillStyle = self._pen_color
        ctx.textAlign = align
        ctx.fillText(str(text), self._canvas_x(), self._canvas_y())

# Module-level functions (turtle.forward(), etc.)
_default_turtle = None

def _get_default():
    global _default_turtle
    if _default_turtle is None:
        _default_turtle = Turtle()
    return _default_turtle

def forward(d): _get_default().forward(d)
def fd(d): forward(d)
def backward(d): _get_default().backward(d)
def bk(d): backward(d)
def back(d): backward(d)
def right(a): _get_default().right(a)
def rt(a): right(a)
def left(a): _get_default().left(a)
def lt(a): left(a)
def goto(x, y=None): _get_default().goto(x, y)
def setpos(x, y=None): goto(x, y)
def setposition(x, y=None): goto(x, y)
def setx(x): _get_default().setx(x)
def sety(y): _get_default().sety(y)
def setheading(a): _get_default().setheading(a)
def seth(a): setheading(a)
def home(): _get_default().home()
def circle(r, extent=360, steps=None): _get_default().circle(r, extent, steps)
def dot(size=None, color=None): _get_default().dot(size, color)
def stamp(): return _get_default().stamp()
def speed(s=None): return _get_default().speed(s)
def penup(): _get_default().penup()
def pu(): penup()
def up(): penup()
def pendown(): _get_default().pendown()
def pd(): pendown()
def down(): pendown()
def isdown(): return _get_default().isdown()
def pensize(w=None): return _get_default().pensize(w)
def width(w=None): return pensize(w)
def pencolor(*a): return _get_default().pencolor(*a)
def fillcolor(*a): return _get_default().fillcolor(*a)
def color(*a): return _get_default().color(*a)
def begin_fill(): _get_default().begin_fill()
def end_fill(): _get_default().end_fill()
def hideturtle(): _get_default().hideturtle()
def ht(): hideturtle()
def showturtle(): _get_default().showturtle()
def st(): showturtle()
def isvisible(): return _get_default().isvisible()
def shape(n=None): return _get_default().shape(n)
def position(): return _get_default().position()
def pos(): return position()
def xcor(): return _get_default().xcor()
def ycor(): return _get_default().ycor()
def heading(): return _get_default().heading()
def towards(x, y=None): return _get_default().towards(x, y)
def distance(x, y=None): return _get_default().distance(x, y)
def clear(): _get_default().clear()
def reset(): _get_default().reset()
def write(text, move=False, align="left", font=("Arial", 12, "normal")): _get_default().write(text, move, align, font)

def done(): 
    print("🐢 Turtle drawing complete! 海龟绘图完成！")

def mainloop():
    done()

def exitonclick():
    done()

def Screen():
    """Return a mock screen object."""
    class _Screen:
        def setup(self, w=None, h=None): pass
        def bgcolor(self, c=None): 
            if c:
                _TurtleCanvas.get().ctx.fillStyle = c
                _TurtleCanvas.get().ctx.fillRect(0, 0, _TurtleCanvas.get().width, _TurtleCanvas.get().height)
        def title(self, t): pass
        def tracer(self, n=None, delay=None): pass
        def update(self): pass
        def bye(self): pass
        def exitonclick(self): pass
        def mainloop(self): pass
        def colormode(self, mode=None): pass
    return _Screen()
`;
}

/**
 * Python code to register the turtle mock as a proper module in sys.modules
 */
export function getTurtleRegistrationCode(): string {
  return `
import sys
import types

# Create a module from our turtle mock code
_turtle_module = types.ModuleType("turtle")
exec(open("/dev/null").read() if False else "", _turtle_module.__dict__)  # init empty

# We'll exec the turtle code into the module namespace
import js as _js
`;
}
