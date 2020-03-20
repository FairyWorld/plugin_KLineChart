/**
 * 线的样式
 * @type {{DASH: string, SOLID: string}}
 */
export const LineStyle = {
  DASH: 'dash',
  SOLID: 'solid'
}

/**
 * y轴位置
 * @type {{LEFT: string, RIGHT: string}}
 */
export const YAxisPosition = {
  LEFT: 'left',
  RIGHT: 'right'
}

/**
 * y轴文字位置
 * @type {{OUTSIDE: string, INSIDE: string}}
 */
export const YAxisTextPosition = {
  INSIDE: 'inside',
  OUTSIDE: 'outside'
}

/**
 * 主图类型
 * @type {{TIME_LINE: string, CANDLE: string}}
 */
export const ChartType = {
  REAL_TIME: 'real_time',
  CANDLE: 'candle'
}

/**
 * 蜡烛图样式
 * @type {{STROKE: string, DECREASING_STROKE: string, OHLC: string, INCREASING_STROKE: string, SOLID: string}}
 */
export const CandleStickStyle = {
  SOLID: 'solid',
  STROKE: 'stroke',
  INCREASING_STROKE: 'increasing_stroke',
  DECREASING_STROKE: 'decreasing_stroke',
  OHLC: 'ohlc'
}

/**
 * 提示文字显示规则
 * @type {{FOLLOW_CROSS: string, NONE: string, ALWAYS: string}}
 */
export const FloatLayerPromptDisplayRule = {
  ALWAYS: 'always',
  FOLLOW_CROSS: 'follow_cross',
  NONE: 'none'
}

/**
 * 主图数据提示显示类型
 * @type {{FLOAT: string, FIXED: string}}
 */
export const FloatLayerPromptCandleStickTextDisplayType = {
  RECT: 'rect',
  STANDARD: 'standard'
}

/**
 * 默认网格配置
 * @type {{horizontal: {size: number, color: string, dashValue: number[], display: boolean, style: string}, display: boolean, vertical: {size: number, color: string, dashValue: number[], display: boolean, style: string}}}
 */
const defaultGrid = {
  display: true,
  horizontal: {
    display: true,
    size: 1,
    color: '#393939',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  },
  vertical: {
    display: true,
    size: 1,
    color: '#393939',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  }
}

/**
 * 默认蜡烛柱图配置
 * @type {{bar: {upColor: string, style: string, downColor: string}}}
 */
const defaultCandleStick = {
  bar: {
    /**
     * 蜡烛样式
     */
    style: CandleStickStyle.SOLID,
    /**
     * 上涨颜色
     */
    upColor: '#26A69A',
    /**
     * 下跌颜色
     */
    downColor: '#EF5350'
  },
  priceMark: {
    display: true,
    high: {
      display: true,
      color: '#D9D9D9',
      textMargin: 5,
      textSize: 10
    },
    low: {
      display: true,
      color: '#D9D9D9',
      textMargin: 5,
      textSize: 10
    },
    last: {
      display: true,
      upColor: '#26A69A',
      downColor: '#EF5350',
      line: {
        display: true,
        style: LineStyle.DASH,
        dashValue: [4, 4],
        size: 1
      },
      text: {
        display: true,
        size: 12,
        paddingLeft: 2,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        color: '#FFFFFF'
      }
    }
  }
}

/**
 * 默认的分时图配置
 * @type {{timeLine: {areaFillColor: string, color: string, size: number}, averageLine: {color: string, size: number, display: boolean}}}
 */
const defaultRealTime = {
  timeLine: {
    color: '#1e88e5',
    size: 1,
    areaFillColor: 'rgba(30, 136, 229, 0.08)'
  },
  /**
   * 均线
   */
  averageLine: {
    display: true,
    color: '#F5A623',
    size: 1
  }
}

/**
 * 默认的技术指标图配置
 * @type {{decreasingColor: string, lineColors: [string, string, string, string, string], increasingColor: string, lineSize: number}}
 */
const defaultTechnicalIndicator = {
  bar: {
    upColor: '#26A69A',
    downColor: '#EF5350'
  },
  line: {
    size: 1,
    colors: ['#D9D9D9', '#F5A623', '#F601FF', '#1587DD', '#1e88e5']
  }
}

const defaultXAxis = {
  /**
   * 是否显示整个轴
   */
  display: true,
  /**
   * x轴最大高度
   */
  maxHeight: 50,
  /**
   * x轴最小高度
   */
  minHeight: 30,
  /**
   * 轴线配置
   */
  axisLine: {
    display: true,
    color: '#888888',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    display: true,
    color: '#D9D9D9',
    size: 12,
    margin: 3
  },
  // tick线
  tickLine: {
    display: true,
    size: 1,
    length: 3,
    color: '#888888'
  }
}

const defaultYAxis = {
  /**
   * 是否显示整个轴
   */
  display: true,
  /**
   * x轴最大宽度
   */
  maxWidth: 100,
  /**
   * x轴最小宽度
   */
  minWidth: 60,
  /**
   * 轴位置
   */
  position: YAxisPosition.RIGHT,
  /**
   * 轴线配置
   */
  axisLine: {
    display: true,
    color: '#888888',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    position: YAxisTextPosition.OUTSIDE,
    display: true,
    color: '#D9D9D9',
    size: 12,
    margin: 3
  },
  // tick线
  tickLine: {
    display: true,
    size: 1,
    length: 3,
    color: '#888888'
  }
}

/**
 * 默认十字光标配置
 * @type {{display: boolean}}
 */
const defaultFloatLayer = {
  crossHair: {
    display: true,
    horizontal: {
      display: true,
      line: {
        display: true,
        style: LineStyle.DASH,
        dashValue: [4, 2],
        size: 1,
        color: '#888888'
      },
      text: {
        display: true,
        color: '#D9D9D9',
        size: 12,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        borderSize: 1,
        borderColor: '#505050',
        backgroundColor: '#505050'
      }
    },
    vertical: {
      display: true,
      line: {
        display: true,
        style: LineStyle.DASH,
        dashValue: [4, 2],
        size: 1,
        color: '#888888'
      },
      text: {
        display: true,
        color: '#D9D9D9',
        size: 12,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        borderSize: 1,
        borderColor: '#505050',
        backgroundColor: '#505050'
      }
    }
  },
  prompt: {
    displayRule: FloatLayerPromptDisplayRule.ALWAYS,
    candleStick: {
      showType: FloatLayerPromptCandleStickTextDisplayType.RECT,
      labels: ['时间', '开', '收', '高', '低', '成交量'],
      values: null,
      rect: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 6,
        left: 8,
        top: 8,
        right: 8,
        borderRadius: 4,
        borderSize: 1,
        borderColor: '#3f4254',
        fillColor: 'rgba(17, 17, 17, .3)'
      },
      text: {
        size: 12,
        color: '#D9D9D9',
        marginLeft: 8,
        marginTop: 6,
        marginRight: 8,
        marginBottom: 0
      }
    },
    technicalIndicator: {
      text: {
        size: 12,
        color: '#D9D9D9',
        marginTop: 6,
        marginRight: 8,
        marginBottom: 0,
        marginLeft: 8
      }
    }
  }
}

/**
 * 默认图形标记配置
 * @type {{line: {color: string, size: number}, text: {marginRight: number, color: string, size: number, valueFormatter: null, marginBottom: number, marginTop: number, marginLeft: number}, point: {backgroundColor: string, borderColor: string, activeBorderSize: number, activeRadius: number, activeBorderColor: string, activeBackgroundColor: string, borderSize: number, radius: number}}}
 */
const defaultGraphicMark = {
  line: {
    color: '#1e88e5',
    size: 1
  },
  point: {
    backgroundColor: '#1e88e5',
    borderColor: '#1e88e5',
    borderSize: 1,
    radius: 4,
    activeBackgroundColor: '#1e88e5',
    activeBorderColor: '#1e88e5',
    activeBorderSize: 1,
    activeRadius: 6
  },
  text: {
    color: '#1e88e5',
    size: 12,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 6
  }
}

export const defaultStyleOptions = {
  grid: defaultGrid,
  candleStick: defaultCandleStick,
  realTime: defaultRealTime,
  technicalIndicator: defaultTechnicalIndicator,
  xAxis: defaultXAxis,
  yAxis: defaultYAxis,
  floatLayer: defaultFloatLayer,
  graphicMark: defaultGraphicMark
}