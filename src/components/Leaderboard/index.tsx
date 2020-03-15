import React from 'react';

import { Card } from '../Card';
import { Table, Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { setLeader } from '../../store/ducks/leaderboard/actions';

export default function Leaderboard() {
  const leaders = useSelector(
    (state: ApplicationState) => state.leaderboard.data
  );

  console.log(leaders);

  const dispach = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Score',
      dataIndex: 'score',
    },
    {
      title: 'Hits %',
      dataIndex: 'hitsPercentege',
    },
    {
      title: 'Time',
      dataIndex: 'time',
    },
  ];

  return (
    <>
      <Button
        onClick={() =>
          dispach(
            setLeader({
              name: 'Gabriel',
              score: 200,
              hits: 7,
              hitsPercentege: 78,
              time: 500,
            })
          )
        }
      >
        teste
      </Button>
      <Card style={{ width: '380px' }}>
        <Table
          columns={columns}
          dataSource={leaders}
          size="small"
          pagination={{ pageSize: 25 }}
          scroll={{ y: 300 }}
        />
      </Card>
    </>
  );
}
