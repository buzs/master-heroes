import React, { useState, useEffect, useCallback } from 'react';
import { Button, Typography } from 'antd';

import { Card } from './styles';

import { ApplicationState } from '../../store';
import api from '../../services/api';
import { Hero } from '../../store/ducks/heroes/types';

import { useDispatch, useSelector } from 'react-redux';

import { addPoint } from '../../store/ducks/score/actions';
import { updateCurrentAmountQuestions } from '../../store/ducks/quiz/actions';

const rangeNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const rangeInterger = (min: number, max: number) =>
  Math.round(rangeNumber(min, max));

function rangeArrayNoRepeats<T>(arr: T[]) {
  let copyArr = arr.slice(0);

  return function(remove = true) {
    if (copyArr.length < 1) {
      copyArr = arr.slice(0);
    }
    const index = rangeInterger(0, copyArr.length);

    const item = copyArr[index];

    if (remove) {
      copyArr.splice(index, 1);
    }
    return item;
  };
}

// function isEqual<T extends Object>(
// 	object: T,
// 	otherObject: T
// ) {
// 	return (
// 		JSON.stringify(object) ===
// 		JSON.stringify(otherObject)
// 	);
// }

let lastOption: string[] = [];

function verifyRepeat(element: string, save = true) {
  console.log(element);
  if (!lastOption.includes(element) && save) {
    lastOption = [...lastOption, element];
    return false;
  }
  return true;
}

export default function HeroCard() {
  const heroes = useSelector((state: ApplicationState) => state.heroes.data);

  const score = useSelector((state: ApplicationState) => state.score);

  const quiz = useSelector((state: ApplicationState) => state.quiz);

  const [heroImage, setHeroImage] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);
  const [cHero, setCHero] = useState<string>('');

  const dispach = useDispatch();

  const loadAll = useCallback(async () => {
    const res = await api.get<Hero[]>('all.json');

    let selectHeroes = rangeArrayNoRepeats(res.data);

    let correctHero = selectHeroes();

    if (verifyRepeat(correctHero.name)) {
      correctHero = selectHeroes();
    }

    setHeroImage(correctHero.images.sm);

    const otherHeroesName = [
      selectHeroes(false).name,
      selectHeroes(false).name,
    ];

    function chkDupExists(value: string[]) {
      return new Set(value).size !== value.length;
    }

    const anyEqual = (arr: string[]) => {
      if (chkDupExists(arr)) {
        arr.forEach((str, idx, _arry) => {
          let fIndex = arr.indexOf(str);
          let lIndex = arr.lastIndexOf(str);

          if (fIndex !== lIndex && idx !== 0) {
            arr[idx] = selectHeroes(false).name;
          }
        });
      }
    };

    let heroesName = [correctHero.name, ...otherHeroesName];

    setCHero(correctHero.name);
    anyEqual(heroesName);
    loadNames(heroesName);
  }, [heroes]);

  const loadNames = useCallback((names: string[]) => {
    const shuffleNames = names.sort(() => Math.random() - 0.5);
    setNames(shuffleNames);
  }, []);

  useEffect(() => {
    loadAll();
  }, []);

  async function handleSelectQuestion(selectHero: string) {
    if (cHero === selectHero) {
      dispach(addPoint());
    }
    dispach(updateCurrentAmountQuestions());

    if (quiz.currentAmountQuestion >= quiz.amountQuestions) {
      await loadAll();
    } else {
      console.log('Finalizou');
    }
  }

  // function changeHeroQuestion(){
  // 	if

  // 	dispach(null) // adiciona mais uma questão

  // }

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
      <h5>{cHero}</h5>
    </>
  );
}
