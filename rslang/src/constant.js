export const BTN_LABEL = {
  NEXT: 'Next',
  PREV: 'Prev',
}

export const wordCards = {
  1: [
    {
      id: '5e9f5ee35eb9e72bc21af4a1',
      group: 0,
      page: 0,
      word: 'agree',
      image: 'files/01_0001.jpg',
      audio: 'files/01_0001.mp3',
      audioMeaning: 'files/01_0001_meaning.mp3',
      audioExample: 'files/01_0001_example.mp3',
      textMeaning: 'To <i>agree</i> is to have the same opinion or belief as another person.',
      textExample: 'The students <b>agree</b> they have too much homework.',
      transcription: '[əgríː]',
      textExampleTranslate: 'Студенты согласны, что у них слишком много домашней работы',
      textMeaningTranslate: 'Согласиться - значит иметь то же мнение или убеждение, что и другой человек',
      wordTranslate: 'согласна',
      wordsPerExampleSentence: 8
    },
    {
      id: '5e9f5ee35eb9e72bc21af4a0',
      group: 0,
      page: 0,
      word: 'alcohol',
      image: 'files/01_0002.jpg',
      audio: 'files/01_0002.mp3',
      audioMeaning: 'files/01_0002_meaning.mp3',
      audioExample: 'files/01_0002_example.mp3',
      textMeaning: '<i>Alcohol</i> is a type of drink that can make people drunk.',
      textExample: 'A person should not drive a car after he or she has been drinking <b>alcohol</b>.',
      transcription: '[ǽlkəhɔ̀ːl]',
      textExampleTranslate: 'Человек не должен водить машину после того, как он выпил алкоголь',
      textMeaningTranslate: 'Алкоголь - это тип напитка, который может сделать людей пьяными',
      wordTranslate: 'алкоголь',
      wordsPerExampleSentence: 15
    },
    {
      id: '5e9f5ee35eb9e72bc21af4a2',
      group: 0,
      page: 0,
      word: 'boat',
      image: 'files/01_0005.jpg',
      audio: 'files/01_0005.mp3',
      audioMeaning: 'files/01_0005_meaning.mp3',
      audioExample: 'files/01_0005_example.mp3',
      textMeaning: 'A <i>boat</i> is a vehicle that moves across water.',
      textExample: 'There is a small <b>boat</b> on the lake.',
      transcription: '[bout]',
      textExampleTranslate: 'На озере есть маленькая лодка',
      textMeaningTranslate: 'Лодка - это транспортное средство, которое движется по воде',
      wordTranslate: 'лодка',
      wordsPerExampleSentence: 8
    },
  ]
};

export const apiLinck = 'https://afternoon-falls-25894.herokuapp.com/';
export const passwordPattern = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';
export const passwordRequirements = "Пароль должен содержать одну цифру, один спецсимвол из +-_@$!%*?&#.,;:[]{} и одну заглавную букву";
