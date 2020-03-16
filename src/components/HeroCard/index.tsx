import React, { useState, useCallback, useEffect } from 'react';
import { Button, Typography } from 'antd';

import { Card } from './styles';

import { ApplicationState } from '../../store';
// import api from '../../services/api';
// import { Hero } from '../../store/ducks/heroes/types';

import { useDispatch, useSelector } from 'react-redux';
import { rangeArray } from '../../utils';

import { addScore } from '../../store/ducks/score/actions';
import {
  updateCurrentAmountQuestions,
  resetGame,
} from '../../store/ducks/quiz/actions';

export default function HeroCard() {
  const questions = useSelector(
    (state: ApplicationState) => state.quiz.questions
  );
  const score = useSelector((state: ApplicationState) => state.score);
  const quiz = useSelector((state: ApplicationState) => state.quiz);

  const [heroImage, setHeroImage] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);
  const [correctHero, setCorrectHero] = useState<string>('');

  const dispach = useDispatch();
  function chkDupExists(value: string[]) {
    return new Set(value).size !== value.length;
  }

  const anyEqual = (arr: string[]) => {
    if (chkDupExists(arr)) {
      arr.forEach((str, idx, _arry) => {
        let fIndex = arr.indexOf(str);
        let lIndex = arr.lastIndexOf(str);

        if (fIndex !== lIndex && idx !== 0) {
          arr[idx] = rangeArray(questions)?.name;
        }
      });
    }
  };

  const loadNames = useCallback((names: string[]) => {
    const shuffleNames = names.sort(() => Math.random() - 0.5);
    setNames(shuffleNames);
  }, []);

  const generateAll = useCallback(async () => {
    console.log('generateAll');
    const correctQuestion = questions.pop();

    if (!correctQuestion) return;
    setHeroImage(correctQuestion.images.sm);
    setCorrectHero(correctQuestion.name);

    const otherQuestionName = [
      questions.pop()?.name as string,
      questions.pop()?.name as string,
    ];

    let heroesName = [correctQuestion.name, ...otherQuestionName];

    anyEqual(heroesName);
    loadNames(heroesName);
  }, [questions]);

  useEffect(() => {
    generateAll();
  }, [questions]);

  function handleSelectQuestion(selectHero: string) {
    if (correctHero === selectHero) {
      dispach(addScore());
    }
    dispach(updateCurrentAmountQuestions());
  }

  useEffect(() => {
    if (quiz.currentAmountQuestion < quiz.amountQuestions) {
      generateAll();
    } else {
      console.log('Finalizou');
      dispach(resetGame());
    }
  }, [quiz.currentAmountQuestion]);

  return (
    <>
      <Typography.Title
        level={1}
        style={{
          textAlign: 'center',
          color: '#CCC',
        }}
      >
        What is the superhero name?
      </Typography.Title>
      <h4>
        Pontos: {score.points} Acertos:
        {score.hits}
      </h4>
      <Card>
        <img src={heroImage} alt="" />
        <div className="nameOptions">
          {names.map((name, i) => {
            return (
              <Button
                key={i}
                type="dashed"
                onClick={() => handleSelectQuestion(name)}
                block
              >
                {name}
              </Button>
            );
          })}
          {quiz.currentAmountQuestion} / {quiz.amountQuestions}
        </div>
      </Card>
      <h5>{correctHero}</h5>
    </>
  );
}
