import React from 'react';
import styles from './UserStatsGraph.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(
      data?.map((item) => Number(item.acessos)).reduce((acc, acesso) => acc + acesso, 0));
    setGraph(graphData);
  }, [data])

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.total}`}>
        <h3>Total de acessos: {total}</h3>
      </div>
      <div className={styles.card}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          colorScale={['#fb1', '#c0e659', '#9e702c', '#ee6a75', '#275681', '#2c9e52']}
          style={{
            data: {
              stroke:'#FFF',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 12,
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
            }
          }}
        >
        </VictoryPie>
      </div>
      <div className={styles.card}>
        <VictoryChart>
          <VictoryBar
            data={graph}
            alignment='start'
            barWidth={20}
            style={{
              data: {
                stroke:'#eee',
                strokeWidth: 2,
                fill: '#fb1',
              }
            }}
          >
          </VictoryBar>
        </VictoryChart>
      </div>
    </div>
  )
}

export default UserStatsGraph;