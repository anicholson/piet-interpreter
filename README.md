# piet-interpreter-js

To install

```bash
npm install piet-interpretter-js
```

To use:

Import the library

```javascript
import Interpreter from 'piet-interpreter-js'
```

Collect the program as a 2d Array:
```javascript
// notes for the shortcut color names are in the Constants file
const SRC = [
    ['mr','mr','dr','wh','wh','wh','mg','dm','wh'],
    ['mr','mr','wh','wh','wh','wh','wh','wh','wh'],
    ['mr','wh','bl','wh','wh','wh','wh','wh','wh'],
    ['wh','bl','mg','bl','wh','wh','wh','mr','mr'],
    ['wh','bl','mg','wh','wh','lm','dr','mr','mr'],
    ['wh','bl','mg','bl','wh','wh','wh','bl','wh'],
    ['wh','wh','bl','wh','wh','wh','wh','wh','wh']
]

const INTERPRETER = new Interpreter(SRC)

while(!INTERPRETTER.halt) {
    const RESPONSE = INTERPRETTER.step()
    
    // do your piet work
}
```

After running the `step()` method you'll have access to the stack, direction and codel pointer, the previous color, the next operation point, and whether the Interpreter is outputting or requiring IO actions.

On every step the Interpretter returns a response object. This object always has a halt property, and when the program has fully executed, that property will be `true`.

Always check for IO obligations in the response object. `prompt` will contain a function if it needs to be furfilled, and type will be set to either `'Char'` or `'Number'`, depending on what the source has asked for. Calling step before executing the `prompt` method will result in an Error being thrown. As well, the `output` property will hold any program output if it exists. `output` with either be empty or replaced upon the next execution of `step`. You are not required to consume the output. 

Currently, the response object does not hold all of the information that the Interpreter Class can provide, so feel free to access the class directly if you require more information from the interpreter, as well though, expect the Response object to widen/become more detailed as the project continues.

For information on the Piet Language, reference [DangerMouse.net](http://www.dangermouse.net/esoteric/piet.html) and follow every link you find.

## TODO

* Commandline interface
* Read a number of inputs: `.json`, `.jpeg`, `.gif`, etc. (Will likely be published as plugins)
* `setUp` method that allows passing of different specs (*Piet spec is currently inspecific and Interpreter to Interpreter*)