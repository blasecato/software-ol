import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import FamilyClimatePng from '../../../../assets/images/family-climate.png'
import { useAppSelector } from '../../../../services/_common/hooks';
import { useEffect, useState } from 'react';

const CardClimate = () => {
  const [isDay, setDay] = useState<boolean>(false)
  const { climate } = useAppSelector(({ dashboard }) => dashboard);

  useEffect(() => {
    if (climate?.data !== undefined) {
      const currentTime = Math.floor(Date.now() / 1000);
      const sunrise = climate.data?.sys.sunrise;
      const sunset = climate.data?.sys.sunset;
      const isDaytime = currentTime > sunrise && currentTime < sunset;
      setDay(isDaytime)
    }
  }, [climate])

  return (
    <div className='CardClimate'>
      <div className='info flex items-center g-10'>
        {isDay ?
          <SunOutlined />
          :
          <MoonOutlined />
        }
        <h1 className="h1">{Math.trunc(climate.data?.main?.temp)}°C</h1>
        <div className='city'>{climate.data?.name}</div>
      </div>
      <img src={FamilyClimatePng} alt="family" className='family' />
    </div>
  )
}

export default CardClimate