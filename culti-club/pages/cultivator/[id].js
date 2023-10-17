import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CultivatorPage from '../../components/CultivatorPage'

const Cultivator = () => {
  const router = useRouter()
  const { id } = router.query
  const [cultivator, setCultivator] = useState(null)

  useEffect(() => {
    if (id) {
      axios.get(`/api/cultivators/${id}`)
        .then(res => {
          setCultivator(res.data)
        })
        .catch(err => console.error(err))
    }
  }, [id])

  return (
    <div>
      {cultivator && <CultivatorPage cultivator={cultivator} />}
    </div>
  )
}

export default Cultivator