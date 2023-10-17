import { useRouter } from 'next/router'
import DispensaryPage from '../../components/DispensaryPage'

export default function Dispensary() {
  const router = useRouter()
  const { id } = router.query

  return <DispensaryPage id={id} />
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`http://localhost:3000/api/dispensary/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, 
  }
}