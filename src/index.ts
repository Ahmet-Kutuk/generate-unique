import constant from "./constant";

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

export const GenerateUnique = (
  maxLength: number,
  hasNumber?: boolean,
  hasSpecial?: boolean,
  hasUpperCharacter?: boolean,
  hasLowerCharacter?: boolean
) => {
  let createdUnique = "";
  const pool = createLetterPool(
    hasNumber,
    hasSpecial,
    hasUpperCharacter,
    hasLowerCharacter
  );

  if (pool.length > 0)
    for (let index = 0; index < maxLength; index++) {
      const randomArrayListIndex: number =
        Math.ceil(Math.random() * pool.length) - 1;
      const characterSet: string[] = pool[randomArrayListIndex];
      const randomArrayValueIndex =
        Math.ceil(Math.random() * characterSet.length) - 1;
      createdUnique += characterSet[randomArrayValueIndex] as string;
    }

  return createdUnique;
};
