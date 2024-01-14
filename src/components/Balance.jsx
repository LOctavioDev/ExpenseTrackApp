import { Context, useGlobaState } from "../context/GlobalState"

export default function Balance() {

    const data = useGlobaState(); 

    return (
    <div>

        <h1>Balance</h1>
        <div>
            {JSON.stringify(data)}
        </div>

    </div>

  )
}
