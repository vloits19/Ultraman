import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { type UltramanStats } from '@/types/ultraman';

interface StatRadarChartProps {
  stats: UltramanStats;
  color: string;
}

export default function StatRadarChart({ stats, color }: StatRadarChartProps) {
  const data = [
    { subject: 'Strength', A: stats.strength, fullMark: 100 },
    { subject: 'Speed', A: stats.speed, fullMark: 100 },
    { subject: 'Energy', A: stats.energy, fullMark: 100 },
    { subject: 'Defense', A: stats.defense, fullMark: 100 },
    { subject: 'Technique', A: stats.technique, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[250px] flex flex-col mt-4">
      <h4 className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-2">Combat Stats</h4>
      <div className="w-full h-full relative -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11, fontFamily: 'Orbitron' }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Stats"
              dataKey="A"
              stroke={color}
              strokeWidth={2}
              fill={color}
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
