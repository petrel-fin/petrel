'use client'

import { ResponsiveSankey } from '@nivo/sankey'

const data = {
  nodes: [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
    { id: 'G' },
    { id: 'H' },
    { id: 'I' },
  ],
  links: [
    { source: 'A', target: 'B', value: 10 },
    { source: 'A', target: 'C', value: 5 },
    { source: 'B', target: 'D', value: 7 },
    { source: 'C', target: 'D', value: 3 },
    { source: 'B', target: 'E', value: 2 },
    { source: 'C', target: 'F', value: 2 },
    { source: 'D', target: 'G', value: 6 },
    { source: 'E', target: 'G', value: 1 },
    { source: 'F', target: 'G', value: 1 },
    { source: 'G', target: 'H', value: 7 },
    { source: 'H', target: 'I', value: 6 },
    { source: 'D', target: 'I', value: 1 },
  ],
}

const SankeyChart = () => {
  return (
    <div className='h-[500px] w-full'>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align='justify'
        colors={{ scheme: 'category10' }}
        // nodeOpacity={1}
        // nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={1}
        // nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        // linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={0}
        labelPosition='outside'
        labelOrientation='horizontal'
        labelPadding={16}
        // labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
        enableLinkGradient={true}
        animate={true}
        motionConfig='gentle'
      />
    </div>
  )
}

export default SankeyChart
