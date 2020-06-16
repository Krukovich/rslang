export const imageRender = (src) => {
  return `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`; 
}

export const playExampleSound = (src) => {
  const myAudio = new Audio();
  myAudio.src = `https://raw.githubusercontent.com/krukovich/rslang-data/master/${ src }`;
  myAudio.play();
} 
