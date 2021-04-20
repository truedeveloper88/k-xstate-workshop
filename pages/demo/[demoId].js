import { useRouter } from 'next/router'

const Demo = () => {
    const router = useRouter()
    const { demoId } = router.query

    return <p>Demo: {demoId}</p>
}

export default Demo