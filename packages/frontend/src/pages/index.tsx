import {useInkathon} from '@scio-labs/use-inkathon'
import type {NextPage} from 'next'
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'
import 'twin.macro'
import HomeTopHeader from "@components/home/HomeTopHeader";
import HomeContent from "@components/home/HomeContent";

const HomePage: NextPage = () => {
    // Display `useInkathon` error messages (optional)
    const {error} = useInkathon()
    useEffect(() => {
        if (!error) return
        toast.error(error.message)
    }, [error])

    return (
        <>
            {/* Top Bar */}
            {/*<HomeTopBar />*/}

            <HomeTopHeader></HomeTopHeader>
            <HomeContent></HomeContent>


            {/*<CenterBody tw="mt-20 mb-10 px-5">*/}
            {/*  /!* Title *!/*/}
            {/*  /!*<HomePageTitle />*!/*/}

            {/*  /!* Connect Wallet Button *!/*/}
            {/*  <ConnectButton />*/}

            {/*  <div tw="mt-10 flex w-full flex-wrap items-start justify-center gap-4">*/}
            {/*    /!* Chain Metadata Information *!/*/}
            {/*    <ChainInfo />*/}

            {/*    /!* Greeter Read/Write Contract Interactions *!/*/}
            {/*    <GreeterContractInteractions />*/}
            {/*  </div>*/}
            {/*</CenterBody>*/}
        </>
    )
}

export default HomePage
