import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Processos } from "./pages/Processos";
import { Root } from "./pages/Root";

const routes : RouteObject[] = [

    {
        path: "/",
        element: (<Root/>),
        errorElement: (<>Opa... acho que você se perdeu</>), //Todo: criar p´agina de erro
        children: [
            {
                path: "/",
                element: (<Processos/>),
            }
        ]
    }

]

const router = createBrowserRouter(routes)

export default router;