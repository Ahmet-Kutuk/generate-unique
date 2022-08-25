import constant from './constant';

const createLetterPool = (
  hasNumber: boolean | undefined,
  hasSpecial: boolean | undefined,
  hasUpperCharacter: boolean | undefined,
  hasLowerCharacter: boolean | undefined
) => {
  const numberList = constant.number;
  const specialList = constant.specialCharacter;
  const upperCharacterList = constant.upperCharacter;
  const lowerCharacterList = constant.lowerCharacter;
  const letterPool: Array<string[]> = [];
  hasNumber && letterPool.push(numberList);
  hasSpecial && letterPool.push(specialList);
  hasUpperCharacter && letterPool.push(upperCharacterList);
  hasLowerCharacter && letterPool.push(lowerCharacterList);

  return letterPool;
};

const getMaxLength = (
  startWith: string | number,
  endWith: string | number,
  maxLength: number
) => {
  let createdMaxLength = 0;
  if (startWith || endWith) {
    startWith && !endWith
      ? (createdMaxLength = Number(maxLength - String(startWith).length))
      : null;
    !startWith && endWith
      ? (createdMaxLength = Number(maxLength - String(endWith).length))
      : null;
    startWith && endWith
      ? (createdMaxLength = Number(
          maxLength - (String(startWith).length + String(endWith).length)
        ))
      : null;
  } else 
    createdMaxLength = maxLength;
  
  return createdMaxLength;
};

const generateUnique = (
  maxLength: number,
  hasNumber?: boolean,
  hasSpecial?: boolean,
  hasUpperCharacter?: boolean,
  hasLowerCharacter?: boolean,
  startWith?: string | number,
  endWith?: string | number
) => {
  let createdUnique = '';
  const pool = createLetterPool(
    hasNumber,
    hasSpecial,
    hasUpperCharacter,
    hasLowerCharacter
  );
  const forMaxLength = getMaxLength(startWith, endWith, maxLength);
  createdUnique += startWith ? String(startWith) : '';
  if (pool.length > 0)
    for (let index = 0; index < forMaxLength; index++) {
      const randomArrayListIndex: number =
        Math.ceil(Math.random() * pool.length) - 1;
      const characterSet: string[] = pool[randomArrayListIndex];
      const randomArrayValueIndex =
        Math.ceil(Math.random() * characterSet.length) - 1;
      createdUnique += characterSet[randomArrayValueIndex] as string;
    }

  createdUnique += endWith ? String(endWith) : '';

  return createdUnique;
};

export { generateUnique };
