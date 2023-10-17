import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import StrainCard from './StrainCard'
import styles from '../styles/StrainPage.module.css'

const StrainPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [strain, setStrain] = useState(null)

  useEffect(() => {
    const fetchStrain = async () => {
      const response = await axios.get(`/api/strains/${id}`)
      setStrain(response.data)
    }

    if (id) {
      fetchStrain()
    }
  }, [id])

  return (
    <div className={styles.container}>
      {strain && (
        <StrainCard
          logo={strain.logo}
          name={strain.name}
          thcLevel={strain.thcLevel}
          cbdLevel={strain.cbdLevel}
          betaCaryophyllene={strain.betaCaryophyllene}
          betaMyrcene={strain.betaMyrcene}
          limonene={strain.limonene}
          type={strain.type}
          effects={strain.effects}
        />
      )}
      <div className={styles.cultivatorInfo}>
        <h2>Cultivator Information</h2>
        <a href={`/cultivator/${strain.cultivatorId}`}>View Cultivator</a>
      </div>
    </div>
  )
}

export default StrainPage