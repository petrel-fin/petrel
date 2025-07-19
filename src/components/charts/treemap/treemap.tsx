'use client' // required if using Next’s app directory

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { useState, useEffect } from 'react'

export default function Treemap() {
  const [data, setData] = useState<{ x: string; y: number }[]>([])
  const [options, setOptions] = useState<any>(null)
  const [series, setSeries] = useState<any[]>([])

  useEffect(() => {
    // 2. Generate fake data
    const categories = [
      'Apples',
      'Bananas',
      'Cherries',
      'Dates',
      'Elderberries',
      'Figs',
      'Grapes',
      'Honeydew',
    ]
    const fakeData = categories.map((c) => ({
      x: c,
      y: Math.floor(Math.random() * 100) + 1,
    }))
    setData(fakeData)

    // 3. Set up options & series
    setOptions({
      chart: { type: 'treemap', height: 350 },
      title: { text: 'Fruit Sales Treemap', align: 'center' },
      colors: [
        '#0d47a1', // dark blue
        '#1565c0',
        '#1976d2',
        '#1e88e5',
        '#2196f3',
        '#42a5f5',
        '#64b5f6',
        '#90caf9', // light blue
      ],
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.7,
          distributed: true,
        },
      },
      tooltip: { y: { formatter: (val: number) => `${val} units` } },
    })
    setSeries([{ data: fakeData }])
  }, [])

  if (!options) return null

  return <Chart options={options} series={series} type='treemap' height={900} width={1150} />
}
