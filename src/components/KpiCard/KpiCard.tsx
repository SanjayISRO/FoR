import { Divider, type SvgIconProps } from "@mui/material";

import CallMadeIcon from '@mui/icons-material/CallMade';

import style from './KpiCard.module.css';

interface KpiCardProps {
  icon: React.ComponentType<SvgIconProps>; // Type for MUI icon component
  heading: string;
  historicalData: string;
  predictiveData: string;
  averageValue: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  heading,
  icon: IconComponent,
  averageValue,
  historicalData,
  predictiveData,
}) => {
  return (
    <section className={style.kpicard_container}>
      <div className={style.kpicard_header}>
        <div>
          <IconComponent sx={{ color: "#000046", fontSize: '18px' }} />
          <p>{heading}</p>
        </div>
        <div>
            <CallMadeIcon sx={{fontSize: '15px' }}/>
        <p><b>+{averageValue}</b></p>
        </div>
      </div>
      <div className={style.prediction_section}>
        <p>Historical</p>
        <p>{historicalData}</p>
      </div>
      <Divider component="div" sx={{margin: '10px 0'}}/>
      <div className={style.prediction_section}>
        <p>Predictive</p>
        <p style={{color: '#5057c7'}}><b>{predictiveData}</b></p>
      </div>
    </section>
  );
};

export default KpiCard;
