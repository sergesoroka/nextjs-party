import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack, VictoryPortal, VictoryLabel, VictoryGroup } from 'victory';

export default function VictoryBars() {

  return (
           <VictoryChart
          theme={VictoryTheme.material}
          
          domain={{ y: [0, 100] }}
        >
            <VictoryGroup horizontal
              offset={10}
              style={{ data: { width: 6 } }}
              colorScale={["brown", "tomato", "gold"]}
            >
              <VictoryBar
                categories={{ x: ["СН", "ЄС", "ОБЗЖ", "Батьківщина", "Голос"]}}
                
                style={{data: { fill: "#009f08" }}}
                data={[
                  { x: "СН", y: 70 },
                  { x: "ЄС", y: 20},
                  { x: "ОБЗЖ", y: 30 },
                  { x: "Батьківщина", y: 20 },
                  { x: "Голос", y: 10 }
                ]}
              />
              <VictoryBar
                style={{data: { fill: "#ff4716" }}}
                data={[
                  { x: 1, y: 25 },
                  { x: 2, y: 30 },
                  { x: 3, y: 40 },
                  { x: 4, y: 50 },
                  { x: 5, y: 50 }
                ]}
              />
              <VictoryBar
              style={{data: { fill: "#ffd500" }}}
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 20 },
                  { x: 3, y: 30 },
                  { x: 4, y: 40 },
                  { x: 5, y: 40 }
                ]}
              />
          </VictoryGroup>
          
        </VictoryChart>
  );
}
