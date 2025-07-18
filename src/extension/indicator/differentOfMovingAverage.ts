/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { IndicatorTemplate } from '../../component/Indicator'

interface Dma {
  dma?: number
  ama?: number
}

/**
 * DMA
 * 公式：DIF:MA(CLOSE,N1)-MA(CLOSE,N2);DIFMA:MA(DIF,M)
 */
const differentOfMovingAverage: IndicatorTemplate<Dma, number> = {
  name: 'DMA',
  shortName: 'DMA',
  calcParams: [10, 50, 10],
  figures: [
    { key: 'dma', title: 'DMA: ', type: 'line' },
    { key: 'ama', title: 'AMA: ', type: 'line' }
  ],
  calc: (dataList, indicator) => {
    const params = indicator.calcParams
    const maxPeriod = Math.max(params[0], params[1])
    let closeSum1 = 0
    let closeSum2 = 0
    let dmaSum = 0
    const dmaList: Dma[] = []
    const result: Record<number, Dma> = {}
    dataList.forEach((kLineData, i) => {
      const dma: Dma = {}
      const close = kLineData.close
      closeSum1 += close
      closeSum2 += close
      let ma1 = 0
      let ma2 = 0
      if (i >= params[0] - 1) {
        ma1 = closeSum1 / params[0]
        closeSum1 -= dataList[i - (params[0] - 1)].close
      }
      if (i >= params[1] - 1) {
        ma2 = closeSum2 / params[1]
        closeSum2 -= dataList[i - (params[1] - 1)].close
      }

      if (i >= maxPeriod - 1) {
        const dif = ma1 - ma2
        dma.dma = dif
        dmaSum += dif
        if (i >= maxPeriod + params[2] - 2) {
          dma.ama = dmaSum / params[2]
          dmaSum -= (dmaList[i - (params[2] - 1)].dma ?? 0)
        }
      }
      dmaList.push(dma)
      result[kLineData.timestamp] = dma
    })
    return result
  }
}

export default differentOfMovingAverage
