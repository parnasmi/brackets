module.exports = function check(str, bracketsConfig) {
  let inputStack = str.split('');
  let bracketsStack = [];
  while (inputStack.length > 0) {
    if (checkDouble(bracketsConfig, topStack(inputStack))) {
      if (bracketsStack.length > 0) {
        if (bracketsStack.some(brackets => brackets == topStack(inputStack))){
          if (topStack(inputStack) == topStack(bracketsStack)) {
            inputStack.pop();
            bracketsStack.pop();
          }
          else {
            return false;
          }
        }
        else {
          bracketsStack.push(inputStack.pop());
        }
      }
      else {
        bracketsStack.push(inputStack.pop());
      }
    }
    else {
      if (checkOpen(bracketsConfig, (topStack(inputStack)))) {
        if (bracketsStack.length > 0) {
          if (checkClose(bracketsConfig, topStack(inputStack)) == topStack(bracketsStack)) {
            inputStack.pop();
            bracketsStack.pop();
          }
          else {
            return false;
          }
        }
        else { return false }
      }
      else {
        bracketsStack.push(inputStack.pop());
      }
    }
  }
  if (inputStack.length == 0 && bracketsStack.length == 0) {
    return true
  }
  else { return false; }
}
function topStack(stack) {
  return stack[stack.length - 1];
}
function checkOpen(arrayConfig, str) {
  for (let i = 0; i <= arrayConfig.length - 1; i++) {
    if (arrayConfig[i][0] == str) {
      a = true;
      break;
    }
    else { a = false }
  }
  return a;
}
function checkClose(arrayConfig, str) {
  for (let i = 0; i <= arrayConfig.length - 1; i++) {
    if (arrayConfig[i][0] == str) {
      a = arrayConfig[i][1];
      break;
    }
    else { a = false }
  }
  return a;
}
function checkDouble(arrayConfig, str) {
  for (let i = 0; i <= arrayConfig.length - 1; i++) {
    if (arrayConfig[i][0] == str && arrayConfig[i][1] == str) {
      a = true;
      break;
    }
    else { a = false }
  }
  return a;
}