import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import { connect } from 'react-redux';

import { gameData, MAX_PAGE, POINT } from '../../constant';
import Stats from './Components/Stats/Stats';
import {
  getData,
  shuffleString,
  checkString,
  moveImageMask,
  removeColorOnWord,
  colorLevelPoint,
  removeColorLevelPoint,
  getRandomPage,
  sortData,
} from "../../service";
import GameLevel from './Components/GameLevel/GameLevel';
import Info from './Components/Info/Info';
import Control from './Components/Control/Control';
import Words from './Components/Words/Words';
import { setEnglishPuzzleStats } from '../../Store/EnglishPuzzle/action';

import './playZone.scss';

const mapStateToProps = (store) => {
  const { englishPuzzle } = store.appSettings;
  return { stats: englishPuzzle }
}

const mapActionToProps = {
  setEnglishPuzzleStats,
}

const Puzzle = ({ level, page, words, setEnglishPuzzleStats }) => {

  const [isAgreeString, setIsAgreeString] = useState('');
  const [isPlayString, setIsPlayString] = useState('');
  const [isMovePoint, setIsMovePoint] = useState(0);
  const [isPlayList, setIsPlayList] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isImageSrc, setIsImageSrc] = useState('');
  const [isPage, setIsPage] = useState('');
  const [isMistakeStrings, setIsMistakeStrings] = useState([]);
  const [isAgreeStrings, setIsAgreeStrings] = useState([]);
  const [score, setScore] = useState(0);

  const startPlay = async () => {
    let data = '';
    if (words.length > POINT) {
      data = sortData(words);
    } else {
      data = await getData(level, page);
    }
    removeColorOnWord();
    setIsPlay(true);
    setIsPlayList(data);
    setIsAgreeString(data[isMovePoint].string);
    setIsPlayString(shuffleString(data[isMovePoint].string));
    changeGameImage();
  }

  const changeGameImage = () => {
    const gameLevel = `level${level}`;
    const data = gameData[gameLevel];
    const page = getRandomPage(data.length);
    const src = data[page];
    setIsPage(page);
    setIsImageSrc(`https://raw.githubusercontent.com/krukovich/rslang_data_paintings/master/${src.cutSrc}`);
  }

  const checkHandler = () => {
    if (checkString(isAgreeString)) {
      colorLevelPoint(isMovePoint, true);
      setIsTrue(true);
      setScore(score + POINT);
      makeAgreeString();
    } else {
      colorLevelPoint(isMovePoint, false);
      setIsTrue(false);
    }
  }

  const saveStats = () => {
    const dateTime = Date.now();
    const successCount = score;
    setEnglishPuzzleStats({ successCount, dateTime });
  }

  const nextStep = () => {
    if (isMovePoint === 10) {
      setIsFinish(false);
      saveStats();
      restartGame();
      return;
    }
    if (checkString(isAgreeString)) {
      removeColorOnWord();
      setIsTrue(true);
      colorLevelPoint(isMovePoint, true);
      moveImageMask(isMovePoint + 1);
      setIsMovePoint(isMovePoint + 1);
      if (isMovePoint === 9) {
        setIsFinish(true);
        return;
      } else {
        setIsAgreeString(isPlayList[isMovePoint + 1].string);
        setIsPlayString(shuffleString(isPlayList[isMovePoint + 1].string));
      }
    }
  }

  const restartGame = async () => {
    removeColorLevelPoint();
    setIsMovePoint(0);
    moveImageMask(-1);
    const nextLevel = (level + 1 > 6) ? 6 : level + 1;
    const data = await getData(nextLevel, getRandomPage(MAX_PAGE));
    removeColorOnWord();
    setIsPlay(true);
    setIsPlayList(data);
    setIsAgreeString(data[0].string);
    setIsPlayString(shuffleString(data[0].string));
    changeGameImage();
  }

  const makeAgreeString = () => {
    if (isAgreeStrings.includes(isAgreeString) || isMistakeStrings.includes(isAgreeString)) {
      return;
    } else {
      setIsAgreeStrings([
        ...isAgreeStrings,
        isAgreeString,
      ]);
    }
  }

  const makeMistakeString = () => {
    if (isMistakeStrings.includes(isAgreeString)) {
      return;
    } else {
      setIsMistakeStrings([
        ...isMistakeStrings,
        isAgreeString,
      ]);
      setIsPlayString(isAgreeString);
    }
  }

  const getSrcForControl = () => {
    if (isPlayList && isPlayList.length !== 0 && isMovePoint < isPlayList.length) {
      return isPlayList[isMovePoint].sound;
    } else {
      return '';
    }
  }

  const getStringTranslate = () => {
    if (isPlayList && isPlayList.length !== 0 && isMovePoint < isPlayList.length) {
      return isPlayList[isMovePoint].stringTranslate;
    } else {
      return '';
    }
  }

  return (
    <MDBContainer className="mt-5">
      <div className="EnglishPuzzle-Tools">
        <GameLevel score={score} />
        <Control
          src={getSrcForControl()}
          stringTranslate={getStringTranslate()}
        />
      </div>
      <MDBRow>
        <MDBCardBody className="play-card">
          <MDBRow>
            <MDBCol md="12">
              <MDBCard reverse>
                <MDBView className="game-image-place" hover cascade waves>
                  <img
                    src={isImageSrc}
                    alt="images"
                    className="img-fluid"
                  />
                  <div className="mask-image"></div>
                  <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <MDBCardBody cascade className="play-zone text-center">
                  <MDBRow className="justify-content-center">
                    {(isAgreeString && !isFinish) ? <Words string={isPlayString} /> : ''}
                    {isFinish ? <Info data={gameData[`level${level}`][isPage]} /> : ''}
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12 text-center">
          {isPlay ?
            '' :
            <MDBBtn
              className="btn btn-outline-white btn-md"
              onClick={startPlay}
            >
              Начать играть
            </MDBBtn>}
          {(isPlay && isMovePoint !== 10) ?
            <MDBBtn
              className="btn btn-outline-white btn-md"
              onClick={checkHandler}
            >
              Проверить
            </MDBBtn> :
            ''}
          {(isPlay && !isTrue && isMovePoint !== 10) ?
            <MDBBtn
              className="btn btn-outline-white btn-md"
              onClick={makeMistakeString}
            >
              Подсказать
            </MDBBtn> :
            ''}
          {(isPlay && isTrue) ?
            <MDBBtn
              className="btn btn-outline-white btn-md"
              onClick={nextStep}
            >
              Продолжить
            </MDBBtn> :
            ''}
          {(isTrue && isMovePoint === 10) ?
            <Stats
              isMistakeStrings={isMistakeStrings}
              isAgreeStrings={isAgreeStrings}
              nextStep={nextStep}
            /> : ''}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default connect(mapStateToProps, mapActionToProps)(Puzzle);
