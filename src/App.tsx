import { useEffect } from "react";
import { useScript } from "@uidotdev/usehooks";

import useNoop from "./hooks/useNoop";


export default function App() {
    const useScriptHook = import.meta.env.PROD ? useScript : useNoop;

	const status = useScriptHook("https://w.appzi.io/w.js?token=WsM7K", {
		removeOnUnmount: true,
	})

	useEffect( () => {

		if(status === "ready") {
			console.log("Appzi should be ready in production");
		}

	}, [status]);


	return <></>
}
