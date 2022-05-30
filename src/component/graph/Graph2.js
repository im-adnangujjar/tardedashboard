import { area, curveMonotoneX } from "d3-shape";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

import React from 'react'
import { linkHorizontal } from "d3-shape";
const data = [
  {
    "id": "group A",
    "data": [
      {
        "x": 34,
        "y": 73
      },
      {
        "x": 87,
        "y": 109
      },
      {
        "x": 72,
        "y": 109
      },
      {
        "x": 59,
        "y": 27
      },
      {
        "x": 44,
        "y": 94
      },
      {
        "x": 25,
        "y": 28
      },
      {
        "x": 76,
        "y": 84
      },
      {
        "x": 66,
        "y": 110
      },
      {
        "x": 56,
        "y": 87
      },
      {
        "x": 36,
        "y": 120
      },
      {
        "x": 67,
        "y": 41
      },
      {
        "x": 84,
        "y": 100
      },
      {
        "x": 21,
        "y": 14
      },
      {
        "x": 74,
        "y": 76
      },
      {
        "x": 98,
        "y": 24
      },
      {
        "x": 41,
        "y": 85
      },
      {
        "x": 69,
        "y": 74
      },
      {
        "x": 88,
        "y": 84
      },
      {
        "x": 43,
        "y": 1
      },
      {
        "x": 40,
        "y": 97
      },
      {
        "x": 2,
        "y": 49
      },
      {
        "x": 55,
        "y": 21
      },
      {
        "x": 97,
        "y": 111
      },
      {
        "x": 54,
        "y": 118
      },
      {
        "x": 25,
        "y": 1
      },
      {
        "x": 92,
        "y": 69
      },
      {
        "x": 13,
        "y": 59
      },
      {
        "x": 77,
        "y": 12
      },
      {
        "x": 95,
        "y": 108
      },
      {
        "x": 19,
        "y": 44
      },
      {
        "x": 46,
        "y": 106
      },
      {
        "x": 84,
        "y": 72
      },
      {
        "x": 17,
        "y": 91
      },
      {
        "x": 67,
        "y": 44
      },
      {
        "x": 96,
        "y": 1
      },
      {
        "x": 74,
        "y": 42
      },
      {
        "x": 100,
        "y": 92
      },
      {
        "x": 70,
        "y": 31
      },
      {
        "x": 38,
        "y": 30
      },
      {
        "x": 86,
        "y": 4
      },
      {
        "x": 97,
        "y": 46
      },
      {
        "x": 36,
        "y": 11
      },
      {
        "x": 72,
        "y": 43
      },
      {
        "x": 12,
        "y": 47
      },
      {
        "x": 79,
        "y": 7
      },
      {
        "x": 68,
        "y": 32
      },
      {
        "x": 94,
        "y": 120
      },
      {
        "x": 9,
        "y": 39
      },
      {
        "x": 3,
        "y": 69
      },
      {
        "x": 2,
        "y": 117
      }
    ]
  },
  {
    "id": "group B",
    "data": [
      {
        "x": 23,
        "y": 22
      },
      {
        "x": 72,
        "y": 54
      },
      {
        "x": 49,
        "y": 20
      },
      {
        "x": 96,
        "y": 7
      },
      {
        "x": 47,
        "y": 81
      },
      {
        "x": 14,
        "y": 100
      },
      {
        "x": 34,
        "y": 92
      },
      {
        "x": 95,
        "y": 0
      },
      {
        "x": 60,
        "y": 14
      },
      {
        "x": 19,
        "y": 69
      },
      {
        "x": 56,
        "y": 29
      },
      {
        "x": 94,
        "y": 65
      },
      {
        "x": 16,
        "y": 43
      },
      {
        "x": 45,
        "y": 81
      },
      {
        "x": 95,
        "y": 28
      },
      {
        "x": 76,
        "y": 69
      },
      {
        "x": 0,
        "y": 79
      },
      {
        "x": 75,
        "y": 94
      },
      {
        "x": 87,
        "y": 30
      },
      {
        "x": 100,
        "y": 25
      },
      {
        "x": 40,
        "y": 8
      },
      {
        "x": 63,
        "y": 82
      },
      {
        "x": 71,
        "y": 58
      },
      {
        "x": 42,
        "y": 10
      },
      {
        "x": 95,
        "y": 97
      },
      {
        "x": 45,
        "y": 80
      },
      {
        "x": 72,
        "y": 58
      },
      {
        "x": 50,
        "y": 49
      },
      {
        "x": 43,
        "y": 61
      },
      {
        "x": 41,
        "y": 28
      },
      {
        "x": 9,
        "y": 97
      },
      {
        "x": 17,
        "y": 76
      },
      {
        "x": 58,
        "y": 23
      },
      {
        "x": 64,
        "y": 113
      },
      {
        "x": 52,
        "y": 67
      },
      {
        "x": 4,
        "y": 110
      },
      {
        "x": 73,
        "y": 69
      },
      {
        "x": 3,
        "y": 15
      },
      {
        "x": 21,
        "y": 21
      },
      {
        "x": 95,
        "y": 10
      },
      {
        "x": 50,
        "y": 43
      },
      {
        "x": 13,
        "y": 17
      },
      {
        "x": 19,
        "y": 102
      },
      {
        "x": 67,
        "y": 108
      },
      {
        "x": 34,
        "y": 3
      },
      {
        "x": 34,
        "y": 55
      },
      {
        "x": 26,
        "y": 71
      },
      {
        "x": 14,
        "y": 77
      },
      {
        "x": 26,
        "y": 44
      },
      {
        "x": 21,
        "y": 60
      }
    ]
  },
  {
    "id": "group C",
    "data": [
      {
        "x": 61,
        "y": 86
      },
      {
        "x": 3,
        "y": 9
      },
      {
        "x": 67,
        "y": 58
      },
      {
        "x": 56,
        "y": 36
      },
      {
        "x": 42,
        "y": 47
      },
      {
        "x": 1,
        "y": 56
      },
      {
        "x": 0,
        "y": 40
      },
      {
        "x": 23,
        "y": 10
      },
      {
        "x": 78,
        "y": 120
      },
      {
        "x": 49,
        "y": 57
      },
      {
        "x": 67,
        "y": 12
      },
      {
        "x": 80,
        "y": 119
      },
      {
        "x": 18,
        "y": 27
      },
      {
        "x": 42,
        "y": 111
      },
      {
        "x": 53,
        "y": 49
      },
      {
        "x": 67,
        "y": 1
      },
      {
        "x": 8,
        "y": 93
      },
      {
        "x": 19,
        "y": 65
      },
      {
        "x": 56,
        "y": 14
      },
      {
        "x": 97,
        "y": 8
      },
      {
        "x": 35,
        "y": 120
      },
      {
        "x": 43,
        "y": 75
      },
      {
        "x": 4,
        "y": 32
      },
      {
        "x": 77,
        "y": 31
      },
      {
        "x": 37,
        "y": 51
      },
      {
        "x": 86,
        "y": 117
      },
      {
        "x": 30,
        "y": 61
      },
      {
        "x": 45,
        "y": 102
      },
      {
        "x": 53,
        "y": 91
      },
      {
        "x": 45,
        "y": 61
      },
      {
        "x": 12,
        "y": 39
      },
      {
        "x": 11,
        "y": 80
      },
      {
        "x": 78,
        "y": 1
      },
      {
        "x": 34,
        "y": 18
      },
      {
        "x": 88,
        "y": 93
      },
      {
        "x": 86,
        "y": 13
      },
      {
        "x": 89,
        "y": 41
      },
      {
        "x": 79,
        "y": 39
      },
      {
        "x": 71,
        "y": 72
      },
      {
        "x": 18,
        "y": 61
      },
      {
        "x": 72,
        "y": 69
      },
      {
        "x": 13,
        "y": 58
      },
      {
        "x": 100,
        "y": 40
      },
      {
        "x": 2,
        "y": 75
      },
      {
        "x": 86,
        "y": 43
      },
      {
        "x": 50,
        "y": 61
      },
      {
        "x": 86,
        "y": 112
      },
      {
        "x": 82,
        "y": 82
      },
      {
        "x": 34,
        "y": 3
      },
      {
        "x": 21,
        "y": 4
      }
    ]
  },
  {
    "id": "group D",
    "data": [
      {
        "x": 57,
        "y": 89
      },
      {
        "x": 30,
        "y": 7
      },
      {
        "x": 57,
        "y": 43
      },
      {
        "x": 60,
        "y": 48
      },
      {
        "x": 74,
        "y": 26
      },
      {
        "x": 43,
        "y": 93
      },
      {
        "x": 46,
        "y": 6
      },
      {
        "x": 4,
        "y": 114
      },
      {
        "x": 99,
        "y": 23
      },
      {
        "x": 41,
        "y": 10
      },
      {
        "x": 29,
        "y": 88
      },
      {
        "x": 26,
        "y": 71
      },
      {
        "x": 42,
        "y": 109
      },
      {
        "x": 50,
        "y": 104
      },
      {
        "x": 22,
        "y": 36
      },
      {
        "x": 29,
        "y": 5
      },
      {
        "x": 30,
        "y": 79
      },
      {
        "x": 98,
        "y": 74
      },
      {
        "x": 76,
        "y": 55
      },
      {
        "x": 88,
        "y": 2
      },
      {
        "x": 83,
        "y": 26
      },
      {
        "x": 36,
        "y": 75
      },
      {
        "x": 10,
        "y": 60
      },
      {
        "x": 82,
        "y": 45
      },
      {
        "x": 44,
        "y": 41
      },
      {
        "x": 12,
        "y": 92
      },
      {
        "x": 70,
        "y": 85
      },
      {
        "x": 88,
        "y": 103
      },
      {
        "x": 94,
        "y": 54
      },
      {
        "x": 86,
        "y": 111
      },
      {
        "x": 25,
        "y": 88
      },
      {
        "x": 67,
        "y": 117
      },
      {
        "x": 18,
        "y": 34
      },
      {
        "x": 99,
        "y": 70
      },
      {
        "x": 39,
        "y": 3
      },
      {
        "x": 42,
        "y": 95
      },
      {
        "x": 8,
        "y": 81
      },
      {
        "x": 77,
        "y": 0
      },
      {
        "x": 23,
        "y": 29
      },
      {
        "x": 63,
        "y": 58
      },
      {
        "x": 42,
        "y": 54
      },
      {
        "x": 7,
        "y": 115
      },
      {
        "x": 11,
        "y": 71
      },
      {
        "x": 73,
        "y": 28
      },
      {
        "x": 14,
        "y": 12
      },
      {
        "x": 77,
        "y": 91
      },
      {
        "x": 42,
        "y": 69
      },
      {
        "x": 56,
        "y": 101
      },
      {
        "x": 24,
        "y": 16
      },
      {
        "x": 87,
        "y": 6
      }
    ]
  },
  {
    "id": "group E",
    
    "data": [
      {
        "x": 66,
        "y": 41
      },
      {
        "x": 91,
        "y": 1
      },
      {
        "x": 15,
        "y": 106
      },
      {
        "x": 11,
        "y": 56
      },
      {
        "x": 49,
        "y": 60
      },
      {
        "x": 77,
        "y": 45
      },
      {
        "x": 100,
        "y": 87
      },
      {
        "x": 78,
        "y": 53
      },
      {
        "x": 26,
        "y": 91
      },
      {
        "x": 94,
        "y": 21
      },
      {
        "x": 64,
        "y": 72
      },
      {
        "x": 32,
        "y": 100
      },
      {
        "x": 23,
        "y": 103
      },
      {
        "x": 41,
        "y": 49
      },
      {
        "x": 96,
        "y": 23
      },
      {
        "x": 20,
        "y": 95
      },
      {
        "x": 71,
        "y": 8
      },
      {
        "x": 92,
        "y": 21
      },
      {
        "x": 38,
        "y": 44
      },
      {
        "x": 53,
        "y": 0
      },
      {
        "x": 61,
        "y": 32
      },
      {
        "x": 54,
        "y": 86
      },
      {
        "x": 80,
        "y": 82
      },
      {
        "x": 62,
        "y": 20
      },
      {
        "x": 26,
        "y": 101
      },
      {
        "x": 84,
        "y": 55
      },
      {
        "x": 79,
        "y": 20
      },
      {
        "x": 34,
        "y": 6
      },
      {
        "x": 95,
        "y": 72
      },
      {
        "x": 85,
        "y": 107
      },
      {
        "x": 84,
        "y": 5
      },
      {
        "x": 65,
        "y": 27
      },
      {
        "x": 67,
        "y": 63
      },
      {
        "x": 6,
        "y": 99
      },
      {
        "x": 31,
        "y": 27
      },
      {
        "x": 52,
        "y": 109
      },
      {
        "x": 94,
        "y": 76
      },
      {
        "x": 88,
        "y": 113
      },
      {
        "x": 17,
        "y": 65
      },
      {
        "x": 67,
        "y": 100
      },
      {
        "x": 99,
        "y": 33
      },
      {
        "x": 17,
        "y": 112
      },
      {
        "x": 36,
        "y": 87
      },
      {
        "x": 19,
        "y": 2
      },
      {
        "x": 35,
        "y": 96
      },
      {
        "x": 31,
        "y": 0
      },
      {
        "x": 85,
        "y": 16
      },
      {
        "x": 7,
        "y": 7
      },
      {
        "x": 40,
        "y": 0
      },
      {
        "x": 95,
        "y": 44
      }
    ]
  }
]

export default function Graph2() {
  return (
    <div
    className="App"
    style={{
      backgroundColor:'#202226',
      width:'650px',
      height:'500px',
    }}
  >
    <style>{`
    text{
      fill: white !important
    }
    `}</style>
    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=" >-.2f"
        colors={ '  #28D6E2'}
      
        blendMode="multiply"
        nodeSize={7}
        enableGridX={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 16,
            tickPadding: 14,
            tickRotation: 2,
            legend: 'weight',
            legendPosition: 'middle',
            legendOffset: 42
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 12,
            tickPadding: 5,
            tickRotation: -1,
            legend: 'price ETH',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        motionConfig={{
            mass: 198,
            tension: 215,
            friction: 26,
            clamp: false,
            precision: 0.01,
            velocity: 0
        }}
    />
</div>
  )
}





