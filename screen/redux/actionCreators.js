export function toggleIsAdding(){
  return {type: 'TOGGLE_IS_ADDING'};
};

export function addWord() {
  return {type: 'ADD_WORD', en, vn};
};

export function toggleMemorized(id) {
  return  {type: 'TOGGLE_MEMORIZED', id };
};

export function toggleShow(id) {
  return  {type: 'TOGGLE_SHOW', id };
};

export function showAll() {
  return {type: 'FIlTER_SHOW_ALL' };
}


export function showMemorized() {
  return {type: 'SHOW_MEMORIZED' };
}

export function showNeedPractice() {
  return {type: 'SHOW_NEED_PRACTICE' };
}


