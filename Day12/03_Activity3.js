// Task4
class error extends Error{
    constructor(mssg){
        this.name = this.constructor.name;
        this.stack = (new Error()).stack;
    }
}

function throwError() {
    throw new error('This is a custom error message.');
}

try{
    throwError();
}catch(err){
    if (err instanceof error) {
      console.error(`Caught a CustomError: ${err.message}`);
    }else{
      console.error(`Caught an unexpected error: ${err.message}`);
    }
}

// Task5
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.stack = (new Error()).stack;
    }
  }

function validateInput(input) {
  if(!input || input.trim() === '') {
    throw new ValidationError('Input cannot be empty.');
  }
  console.log('Input is valid:', input);
}

try{
  validateInput('');
}catch(error) {
  if(error instanceof ValidationError) {
    console.error(`ValidationError: ${error.message}`);
  }else{
    console.error(`Unexpected error: ${error.message}`);
  }
}