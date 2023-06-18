import React from "react";

import { Table,TableBody,TableCell,TableHead,TableRow } from '@mui/material';
import {LinearProgress} from '@mui/material';

const data = [
  {
    id: 283,
    completed: "100",
  },
  {
    id: 284,
    completed: "70",
  },
  {
    id: 285,
    completed: "20",
  },
  {
    id: 295,
    completed: "50",
  },
];

class LinearProgressComponent2 extends React.Component {
  state = {
    playersData: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      playersData: data.map(item => ({ ...item, completed: 0}))
    };
  };

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completion) {
    let done = 0;
    this.setState({
      playersData: data.map((item, i) => {
        const { completed: current } = this.state.playersData[i];
        const { completed: max } = item;
        if (current + completion >= max) {
          done += 1;
        }
        return {
          ...item,
          completed: Math.min(current + completion, max),
        };
      }),
    });
    if (done < data.length) {
      this.timer = setTimeout(() => this.progress(5), 100);
    }
  }

  render() {
    const { playersData } = this.state;
    return (
      <div>
        <Table>
          <TableBody>
            {playersData.map(({ id, completed }) =>
              <TableRow key={id}>
                <TableCell>
                  <LinearProgress mode="determinate" value={completed} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default LinearProgressComponent2;
